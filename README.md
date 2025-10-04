
# 🤖 Mixtral AI Chat Interface

A modern, production-ready chat interface powered by Mistral AI, built with Next.js, TypeScript, and Tailwind CSS. Features real-time streaming responses, Markdown rendering, and professional syntax highlighting.

**Note: This project was built as a demo task to showcase skills for Mistral AI job requirements, demonstrating proficiency in AI integration, React development, and deployment pipelines.**

## ✨ Live Demo

**[🚀 Try it live here](https://mixtral-api-testing-demo.netlify.app/)**

---

## 🎬 Demo

![App Demo](https://res.cloudinary.com/dx2knxa0f/image/upload/v1759557241/mixtral_ofl8b7.gif)

---

## 📸 Screenshots

### Main Interface
![Main Interface](https://res.cloudinary.com/dx2knxa0f/image/upload/v1759556698/Screenshot_2025-10-04_111014_n7xyb0.png)

### Chat View
![Chat View](https://res.cloudinary.com/dx2knxa0f/image/upload/v1759557436/304d23a4-164a-4bbe-936f-a6d96d6ed16f.png)

---

## 🎯 What This Solves

This project demonstrates building a production-ready AI chat interface that handles:
- Real-time streaming responses from Mistral AI API
- Complex Markdown rendering with tables, lists, and code blocks
- Message persistence and conversation management
- Professional UI/UX patterns for AI applications

---

## 🌟 Features

* **AI-Powered Responses**: Integrated with Mistral AI for intelligent conversations
* **Real-Time Streaming**: Displays responses as they're generated
* **Full Markdown Support**: Renders headings, lists, tables, links, and formatted text
* **Advanced Code Blocks**: Syntax highlighting for 100+ programming languages
* **Message Actions**: Copy, edit, delete messages with like/dislike feedback
* **Responsive Design**: Mobile-first design optimized for all screen sizes
* **Type-Safe**: Full TypeScript implementation with strict type checking

---

## 💻 Tech Stack

* **Framework**: [Next.js 15.5](https://nextjs.org/) with Turbopack
* **Language**: [TypeScript 5.9](https://www.typescriptlang.org/)
* **Styling**: [Tailwind CSS 4.1](https://tailwindcss.com/)
* **AI Integration**: [Mistral AI](https://mistral.ai/)
* **Markdown**: [React Markdown](https://github.com/remarkjs/react-markdown) with GFM support
* **Syntax Highlighting**: [React Syntax Highlighter](https://github.com/react-syntax-highlighter/react-syntax-highlighter)
* **Deployment**: [Netlify](https://www.netlify.com/)

---

## 🏗️ Architecture

- **API Integration**: Server-side streaming with Mistral AI SDK
- **State Management**: React hooks for real-time conversation flow
- **Component Design**: Reusable, typed components with clean separation
- **Performance**: Optimized rendering with React memoization
- **CI/CD**: Automated deployment pipeline with pnpm

---

## 🚀 Getting Started

### Prerequisites

* Node.js 22.x or higher
* pnpm 10.x or higher

### Installation

1. **Clone the repository:**
   ```
   git clone https://github.com/Eswar809/Mixtral-api-demo.git
   ```

2. **Navigate to the project directory:**
   ```
   cd Mixtral-api-demo
   ```

3. **Install dependencies:**
   ```
   pnpm install
   ```

4. **Set up environment variables:**
   ```
   cp .env.example .env.local
   ```
   Add your Mistral API key to `.env.local`:
   ```
   MISTRAL_API_KEY=your_api_key_here
   ```

5. **Run the development server:**
   ```
   pnpm dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

---

## 💡 Key Learnings

- Implemented streaming AI responses with proper error handling and state management
- Built reusable React components with TypeScript interfaces for type safety
- Managed complex real-time state for chat interactions and message history
- Deployed full-stack application with secure environment variable management
- Optimized build pipeline and resolved dependency conflicts in CI/CD

---

## 📁 Project Structure

```
mixtral-clone/
├── src/
│ └── app/
│ ├── api/
│ │ └── chat/
│ │ └── route.ts # Mistral AI streaming API endpoint
│ ├── components/
│ │ ├── ChatInput.tsx  # User input component
│ │ ├── ChatMessage.tsx  # Message display with markdown
│ │ ├── Header.tsx  # App header
│ │ ├── Header1.tsx  # chatview header
│ │ ├── icons.tsx   # Icon components powered by mixtral
│ │ └── ToolsPane.tsx # Tools sidebar panel
│ ├── pages/
│ │ └── LeChatPage.tsx # Main chat page component
│ ├── favicon.ico # App favicon
│ ├── globals.css # Global styles
│ ├── layout.tsx # Root layout component
│ └── page.tsx # Home page entry point
├── .env.local # Environment variables (gitignored)
├── .gitignore # Git ignore rules
├── eslint.config.mjs # ESLint configuration
├── netlify.toml  # Netlify deployment config
├── next-env.d.ts # Next.js TypeScript declarations
├── next.config.ts # Next.js configuration
├── package.json # Project dependencies
├── package-lock.json # npm lock file
├── pnpm-lock.yaml # pnpm lock file
├── postcss.config.mjs # PostCSS configuration
└── README.md # Project documentation
```

---

## 👨‍💻 Credits

**Developed by Eswar Deevi**

- GitHub: [@Eswar809](https://github.com/Eswar809)
- Portfolio: [\[See it\]](https://eswardev.netlify.app/)


---
