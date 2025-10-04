// src/app/components/ChatMessage.tsx
import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import {
  AssistantIcon,
  EditIcon,
  DeleteIcon,
  CopyIcon,
  LikeIcon,
  DislikeIcon,
  RewriteIcon,
  ProIcon,
  DotIcon,
} from './icons';

// --- Type Definitions ---
type CodeComponentProps = {
  node?: any;
  inline?: boolean;
  className?: string;
  children?: React.ReactNode;
  [key: string]: any;
};

// --- Custom Code Block Component ---
const CustomCodeBlock = ({ lang, code }: { lang: string; code: string }) => {
  const [copied, setCopied] = useState(false);
  
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  // Language mapping for common aliases and display names
  const getLanguage = (lang: string): { syntax: string; display: string } => {
    const languageMap: { [key: string]: { syntax: string; display: string } } = {
      'js': { syntax: 'javascript', display: 'javascript' },
      'jsx': { syntax: 'javascript', display: 'jsx' },
      'ts': { syntax: 'typescript', display: 'typescript' },
      'tsx': { syntax: 'typescript', display: 'tsx' },
      'py': { syntax: 'python', display: 'python' },
      'rb': { syntax: 'ruby', display: 'ruby' },
      'yml': { syntax: 'yaml', display: 'yaml' },
      'yaml': { syntax: 'yaml', display: 'yaml' },
      'sh': { syntax: 'bash', display: 'bash' },
      'shell': { syntax: 'bash', display: 'shell' },
      'bash': { syntax: 'bash', display: 'bash' },
      'console': { syntax: 'bash', display: 'console' },
      'cmd': { syntax: 'batch', display: 'cmd' },
      'bat': { syntax: 'batch', display: 'batch' },
      'ps1': { syntax: 'powershell', display: 'powershell' },
      'html': { syntax: 'markup', display: 'html' },
      'xml': { syntax: 'markup', display: 'xml' },
      'svg': { syntax: 'markup', display: 'svg' },
      'markup': { syntax: 'markup', display: 'html' },
      'css': { syntax: 'css', display: 'css' },
      'scss': { syntax: 'scss', display: 'scss' },
      'sass': { syntax: 'sass', display: 'sass' },
      'less': { syntax: 'less', display: 'less' },
      'javascript': { syntax: 'javascript', display: 'javascript' },
      'typescript': { syntax: 'typescript', display: 'typescript' },
      'json': { syntax: 'json', display: 'json' },
      'sql': { syntax: 'sql', display: 'sql' },
      'mysql': { syntax: 'sql', display: 'mysql' },
      'postgresql': { syntax: 'sql', display: 'postgresql' },
      'java': { syntax: 'java', display: 'java' },
      'c': { syntax: 'c', display: 'c' },
      'cpp': { syntax: 'cpp', display: 'c++' },
      'c++': { syntax: 'cpp', display: 'c++' },
      'csharp': { syntax: 'csharp', display: 'c#' },
      'cs': { syntax: 'csharp', display: 'c#' },
      'php': { syntax: 'php', display: 'php' },
      'python': { syntax: 'python', display: 'python' },
      'ruby': { syntax: 'ruby', display: 'ruby' },
      'go': { syntax: 'go', display: 'go' },
      'rust': { syntax: 'rust', display: 'rust' },
      'kotlin': { syntax: 'kotlin', display: 'kotlin' },
      'swift': { syntax: 'swift', display: 'swift' },
      'text': { syntax: 'text', display: 'text' },
    };
    
    const normalized = lang.toLowerCase();
    return languageMap[normalized] || { syntax: normalized, display: normalized };
  };
  
  const { syntax: syntaxLanguage, display: displayLanguage } = getLanguage(lang);
  
  return (
    <div className="relative my-4 rounded-md border border-darker bg-[#1e1e1e]">
      <div className="sticky top-0 mb-1 flex items-center justify-between gap-1 rounded-t-md bg-[#1e1e1e] px-2 font-sans">
        <span className="text-xs text-muted px-1 py-2">{displayLanguage}</span>
        <button
          onClick={handleCopy}
          className="flex h-auto items-center gap-1.5 px-1 py-2 text-xs text-muted transition-colors hover:text-default"
        >
          <CopyIcon />
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <SyntaxHighlighter
        style={vscDarkPlus}
        language={syntaxLanguage}
        PreTag="div"
        showLineNumbers={false}
        customStyle={{ 
          margin: 0, 
          padding: '1em', 
          background: '#1e1e1e', 
          borderRadius: '0 0 0.375rem 0.375rem',
          fontSize: '14px',
        }}
        codeTagProps={{ 
          style: { 
            fontFamily: 'Menlo, Monaco, Consolas, "Courier New", monospace',
            fontSize: '14px',
            lineHeight: '1.5',
          } 
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};


export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

interface ChatMessageProps {
  message: Message;
  onEdit?: () => void;
  onDelete?: () => void;
  onCopy?: () => void;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ message, onEdit, onDelete, onCopy }) => {
  const isUser = message.role === 'user';
  const timeString = message.timestamp.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });

  const formatContent = (content: string) => {
    return content.replace(/✅/g, '* ✅');
  };

  return (
    <div className="group flex w-full gap-3">
      {!isUser && (
        <div className="relative flex flex-shrink-0 flex-col items-center">
          <span className="relative flex h-7 w-7 overflow-hidden rounded-md">
            <div className="flex items-center justify-center bg-state-brand" style={{ width: 28, height: 28 }}>
              <AssistantIcon />
            </div>
          </span>
        </div>
      )}
      <div className="flex min-w-0 flex-1 flex-col">
        {isUser ? (
          <div className="ms-auto flex w-fit max-w-full flex-col rounded-3xl bg-muted px-5 py-2.5">
            <div className="whitespace-pre-wrap break-words select-text">{message.content}</div>
          </div>
        ) : (
          <div className="max-w-none text-default">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                code({ node, inline, className, children, ...props }: CodeComponentProps) {
                  const match = /language-(\w+)/.exec(className || '');
                  const codeString = String(children).replace(/\n$/, '');
                  
                  const detectLanguage = (code: string): string => {
                    // JavaScript/TypeScript detection
                    if (/\b(let|const|var|function|class|import|export|async|await|return|if|else|for|while|switch|case|break|continue|typeof|instanceof)\b/.test(code)) {
                      if (/\b(interface|type|enum|namespace|declare|implements|private|public|protected)\b/.test(code)) {
                        return 'typescript';
                      }
                      return 'javascript';
                    }
                    
                    // Python detection
                    if (/\b(def|import|from|class|if|elif|else|for|while|with|as|try|except|finally|return|yield|lambda|print)\b/.test(code)) {
                      return 'python';
                    }
                    
                    // Java detection
                    if (/\b(public|private|protected|static|void|class|interface|extends|implements|new|package|import)\b.*[;{]/.test(code)) {
                      return 'java';
                    }
                    
                    // C/C++ detection
                    if (/\b(#include|int main|void|char|float|double|struct|typedef|#define|printf|scanf)\b/.test(code)) {
                      return 'cpp';
                    }
                    
                    // HTML/XML detection
                    if (/<[^>]+>.*<\/[^>]+>|<[^>]+\/>/.test(code)) {
                      return 'markup';
                    }
                    
                    // CSS detection
                    if (/[.#][\w-]+\s*\{[^}]*\}|@media|@import|:root/.test(code)) {
                      return 'css';
                    }
                    
                    // JSON detection
                    if (/^\s*\{[\s\S]*\}\s*$|^\s*\[[\s\S]*\]\s*$/.test(code)) {
                      try {
                        JSON.parse(code);
                        return 'json';
                      } catch {}
                    }
                    
                    // SQL detection
                    if (/\b(SELECT|FROM|WHERE|INSERT|UPDATE|DELETE|CREATE|ALTER|DROP|TABLE|DATABASE|JOIN|ORDER BY|GROUP BY)\b/i.test(code)) {
                      return 'sql';
                    }
                    
                    // Bash/Shell detection
                    if (/^#!/.test(code) || /\b(echo|cd|ls|mkdir|rm|cp|mv|grep|sed|awk|chmod|sudo)\b/.test(code)) {
                      return 'bash';
                    }
                    
                    return 'text';
                  };
                  
                  const isCodeBlock = !inline && (match || codeString.includes('\n') || codeString.length > 50);
                  
                  if (isCodeBlock) {
                
                    let lang = match ? match[1] : detectLanguage(codeString);
                    
                 
                    return <CustomCodeBlock lang={lang} code={codeString} />;
                  } else {
                    
                    return (
                      <code 
                        className="bg-muted px-1.5 py-1 rounded-md text-sm font-mono text-default" 
                        {...props}
                      >
                        {children}
                      </code>
                    );
                  }
                },
                pre: ({ children, ...props }) => {
                 
                  return <>{children}</>;
                },
                table: ({ children }) => (
                  <div className="min-w-full my-4 overflow-hidden rounded-lg border border-darker bg-card">
                    <table className="min-w-full divide-y divide-darker">{children}</table>
                  </div>
                ),
                thead: ({ children }) => <thead className="bg-[#1e1e1e]">{children}</thead>,
                tr: ({ children }) => <tr className="divide-x divide-darker">{children}</tr>,
                th: ({ children }) => <th className="px-4 py-3 text-left font-bold">{children}</th>,
                td: ({ children }) => <td className="px-4 py-3">{children}</td>,
                p: ({ children }) => <p className="mb-4 last:mb-0 leading-relaxed">{children}</p>,
                h1: ({ children }) => <h1 className="text-2xl font-bold mb-4 mt-6">{children}</h1>,
                h2: ({ children }) => <h2 className="text-xl font-bold mb-3 mt-5">{children}</h2>,
                h3: ({ children }) => <h3 className="text-lg font-bold mb-3 mt-4 border-b border-darker pb-2">{children}</h3>,
                h4: ({ children }) => <h4 className="text-base font-bold mb-2 mt-3">{children}</h4>,
                strong: ({ children }) => <strong className="font-bold">{children}</strong>,
                em: ({ children }) => <em className="italic">{children}</em>,
                ul: ({ children }) => <ul className="list-disc list-inside mb-4 space-y-2 pl-4">{children}</ul>,
                ol: ({ children }) => <ol className="list-decimal list-inside mb-4 space-y-2 pl-4">{children}</ol>,
                li: ({ children }) => <li className="leading-relaxed">{children}</li>,
                blockquote: ({ children }) => (
                  <blockquote className="border-l-4 border-muted pl-4 py-2 my-4 italic text-muted">
                    {children}
                  </blockquote>
                ),
                hr: () => <hr className="my-6 border-darker" />,
                a: ({ children, href }) => (
                  <a 
                    href={href} 
                    className="text-blue-400 hover:text-blue-300 underline" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    {children}
                  </a>
                ),
              }}
            >
              {formatContent(message.content)}
            </ReactMarkdown>
          </div>
        )}
        <div className={`flex min-h-8 flex-row items-center justify-between py-1 font-normal opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100 ${isUser ? 'ms-auto mb-2 w-fit max-w-full gap-3' : 'mb-2'}`}>
          {isUser ? (
            <>
              <div className="flex flex-row items-center gap-2">
                <button
                  type="button"
                  onClick={onEdit}
                  className="flex items-center justify-center text-center font-medium cursor-pointer relative whitespace-nowrap transition-colors bg-state-ghost text-default hover:bg-state-ghost-hover h-8 w-8 p-2 rounded-md"
                  aria-label="Edit question"
                >
                  <EditIcon />
                </button>
                <button
                  type="button"
                  onClick={onDelete}
                  className="flex items-center justify-center text-center font-medium cursor-pointer relative whitespace-nowrap transition-colors bg-state-ghost text-default hover:bg-state-ghost-hover h-8 w-8 p-2 rounded-md"
                  aria-label="Delete question"
                >
                  <DeleteIcon />
                </button>
                <button
                  type="button"
                  onClick={onCopy}
                  className="flex items-center justify-center text-center font-medium cursor-pointer relative whitespace-nowrap transition-colors bg-state-ghost text-default hover:bg-state-ghost-hover h-8 w-8 p-2 rounded-md"
                  aria-label="Copy to clipboard"
                >
                  <CopyIcon />
                </button>
              </div>
              <div className="flex flex-row items-center gap-2">
                <div className="text-sm text-hint">{timeString}</div>
              </div>
            </>
          ) : (
            <>
              <div className="flex flex-row items-center gap-0">
                <ProIcon />
                <DotIcon />
                <div className="relative overflow-hidden">
                  <div style={{ opacity: 1, transform: 'none' }}>
                    <div className="text-sm text-hint">{timeString}</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center gap-2">
                <button type="button" className="flex items-center justify-center text-center font-medium cursor-pointer relative whitespace-nowrap transition-colors bg-state-ghost text-default hover:bg-state-ghost-hover h-8 w-8 p-2 rounded-md" aria-label="Like">
                  <LikeIcon />
                </button>
                <button type="button" className="flex items-center justify-center text-center font-medium cursor-pointer relative whitespace-nowrap transition-colors bg-state-ghost text-default hover:bg-state-ghost-hover h-8 w-8 p-2 rounded-md" aria-label="Dislike">
                  <DislikeIcon />
                </button>
                <button type="button" className="flex items-center justify-center text-center font-medium cursor-pointer relative whitespace-nowrap transition-colors bg-state-ghost text-default hover:bg-state-ghost-hover h-8 w-8 p-2 rounded-md" aria-label="Rewrite">
                  <RewriteIcon />
                </button>
                <button
                  type="button"
                  onClick={onCopy}
                  className="flex items-center justify-center text-center font-medium cursor-pointer relative whitespace-nowrap transition-colors bg-state-ghost text-default hover:bg-state-ghost-hover h-8 w-8 p-2 rounded-md"
                  aria-label="Copy to clipboard"
                >
                  <CopyIcon />
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};