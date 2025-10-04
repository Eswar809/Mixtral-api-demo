// app/page.tsx
'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Header } from '../components/Header';
import { ChatInput } from '../components/ChatInput';
import { ToolsPane } from '../components/ToolsPane';
import { ChatMessage, Message } from '../components/ChatMessage';
import Header1 from '../components/Header1';

export default function LeChatPage() {
  const [isToolsPaneVisible, setToolsPaneVisible] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const toggleToolsPane = () => {
    setToolsPaneVisible(!isToolsPaneVisible);
  };

  const handleSendMessage = async (content: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [...messages, userMessage].map(m => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const reader = response.body?.getReader();
      const decoder = new TextDecoder();

      if (!reader) {
        throw new Error('No reader available');
      }

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: '',
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, assistantMessage]);

      let fullContent = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        fullContent += chunk;

        setMessages(prev =>
          prev.map(msg =>
            msg.id === assistantMessage.id
              ? { ...msg, content: fullContent }
              : msg
          )
        );
      }
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: 'Sorry, I encountered an error. Please try again.',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopyMessage = (content: string) => {
    navigator.clipboard.writeText(content);
  };

  const handleDeleteMessage = (id: string) => {
    setMessages(prev => prev.filter(msg => msg.id !== id));
  };

  const showWelcomeScreen = messages.length === 0;

  return (
    <main className="relative flex flex-1 flex-col overflow-hidden h-screen w-full bg-subtle text-default">
      <div className="flex h-full w-full flex-col items-center justify-center overflow-hidden">
        <div className="relative flex h-full w-full flex-col items-center justify-center">
    

          {/* Main Content */}
          <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
            <div className="relative flex h-full w-full flex-1 flex-col items-center justify-center">
              
              {showWelcomeScreen ? (
                <>
                <Header/>
                  {/* Welcome Screen Logo */}
                  <div className="absolute" style={{ bottom: '60%' }}>
                    <div className="flex flex-col items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="95.2" height="68" viewBox="0 0 212.121 151.515">
                        <rect x="30.303" y="0" width="30.303" height="30.303" fill="#ffd700"></rect>
                        <rect x="151.515" y="0" width="30.303" height="30.303" fill="#ffd700"></rect>
                        <rect x="30.303" y="30.303" width="60.606" height="30.303" fill="#ffaf00"></rect>
                        <rect x="121.212" y="30.303" width="60.606" height="30.303" fill="#ffaf00"></rect>
                        <rect x="30.303" y="60.606" width="151.515" height="30.303" fill="#ff8205"></rect>
                        <rect x="30.303" y="90.909" width="30.303" height="30.303" fill="#fa500f"></rect>
                        <rect x="90.909" y="90.909" width="30.303" height="30.303" fill="#fa500f"></rect>
                        <rect x="151.515" y="90.909" width="30.303" height="30.303" fill="#fa500f"></rect>
                        <rect x="0" y="121.212" width="90.909" height="30.303" fill="#e10500"></rect>
                        <rect x="121.212" y="121.212" width="90.909" height="30.303" fill="#e10500"></rect>
                      </svg>
                    </div>
                  </div>

                  {/* Chat Input - Welcome Position */}
                  <div className="absolute flex w-full max-w-2xl flex-col px-4" style={{ top: '45%' }}>
                    <ChatInput 
                      onToggleTools={toggleToolsPane} 
                      isToolsVisible={isToolsPaneVisible}
                      onSendMessage={handleSendMessage}
                      isLoading={isLoading}
                    />
                    
                    {/* Tools Pane */}
                    {isToolsPaneVisible && (
                      <div className="mt-6">
                        <ToolsPane isVisible={isToolsPaneVisible} />
                      </div>
                    )}
                  </div>
                </>
              ) : (
                <>
                <Header1/>
                  {/* Chat Messages */}
                  <div className="flex h-full max-h-full w-full min-w-0 flex-col items-center justify-center">
                    <div className="relative flex h-full w-full flex-col items-center overflow-hidden">
                      <div className="relative flex h-full w-full items-start overflow-hidden">
                        <div className="absolute end-0 flex h-full min-h-full w-full flex-col items-start justify-start overflow-hidden">
                          <div className="relative flex h-full w-full flex-col items-end justify-end">
                            <div className="flex h-full w-full flex-col overflow-y-hidden">
                              <div className="relative h-full w-full">
                                <div className="relative flex h-full w-full flex-col overflow-hidden">
                                  <div className="h-full w-full overflow-auto">
                                    <div className="mx-auto flex min-h-full w-full flex-col items-stretch gap-5 px-2 pt-6 pb-5 md:px-4 md:pb-9">
                                      {messages.map((message) => (
                                        <div key={message.id} className="flex h-fit w-full flex-col items-center">
                                          <div className="flex w-full justify-center gap-6 flex-col md:flex-row">
                                            <div className="flex max-w-2xl min-w-0 flex-1 shrink flex-col gap-8">
                                              <ChatMessage
                                                message={message}
                                                onCopy={() => handleCopyMessage(message.content)}
                                                onDelete={() => handleDeleteMessage(message.id)}
                                              />
                                            </div>
                                          </div>
                                        </div>
                                      ))}
                                      <div ref={messagesEndRef} />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  
                  <ChatInput 
                    onToggleTools={toggleToolsPane} 
                    isToolsVisible={isToolsPaneVisible}
                    onSendMessage={handleSendMessage}
                    isLoading={isLoading}
                  />
                </>
              )}

             
            </div>
          </div>

        </div>
      </div>
    </main>
  );
   
}