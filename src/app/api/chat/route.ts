// app/api/chat/route.ts
import { Mistral } from "@mistralai/mistralai";
import { NextRequest } from "next/server";

const apiKey = process.env.MISTRAL_API_KEY;

console.log("Mistral API Key:", apiKey ? "Loaded" : "MISSING");

if (!apiKey) {
  throw new Error("MISTRAL_API_KEY is not set in the environment variables.");
}

const client = new Mistral({
  apiKey: apiKey,
});

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    const encoder = new TextEncoder();
    const stream = new ReadableStream({
      async start(controller) {
        try {
          const result = await client.chat.stream({
            model: "mistral-large-latest",
            messages: messages,
          });

          for await (const chunk of result) {
            const streamText = chunk.data.choices[0].delta.content;
            if (typeof streamText === "string") {
              controller.enqueue(encoder.encode(streamText));
            }
          }
          
          controller.close();
        } catch (error) {
          console.error("Error during chat stream:", error);
          controller.error(error);
        }
      },
    });

    return new Response(stream, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Transfer-Encoding": "chunked",
      },
    });
  } catch (error) {
    console.error("Error in chat API:", error);
    return new Response(JSON.stringify({ error: "Failed to process chat request" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
