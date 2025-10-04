'use client';
import React, { useState, useRef } from 'react';
import { AgentIcon, AddFilesIcon, ResearchIcon, ThinkIcon, ToolsIcon, VoiceModeIcon, SendIcon } from './icons';

interface ChatInputProps {
  onToggleTools: () => void;
  isToolsVisible: boolean;
  onSendMessage: (message: string) => void;
  isLoading: boolean;
}

export const ChatInput: React.FC<ChatInputProps> = ({
  onToggleTools,
  isToolsVisible,
  onSendMessage,
  isLoading,
}) => {
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef<HTMLDivElement>(null);

  const handleInput = (e: React.FormEvent<HTMLDivElement>) => {
    setInputValue(e.currentTarget.textContent || '');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim() && !isLoading) {
      onSendMessage(inputValue.trim());
      setInputValue('');
      if (inputRef.current) {
        inputRef.current.textContent = '';
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <div className="relative start-0 end-0 bottom-0 z-30 flex w-full flex-col items-center px-3">
      <div className="mb-0 flex flex-col items-center rounded-xl transition-all w-full gap-y-6">
        <form onSubmit={handleSubmit} className="rounded-xl transition-all shadow-big delay-150 mx-3 mb-0 w-full max-w-2xl md:mb-0">
          <div className="relative w-full overflow-hidden rounded-[12px] bg-card transition-colors duration-300 ease-in-out">
            <div className="relative flex w-full flex-col px-4 pt-3 pb-4 max-sm:px-2">
              <div className="relative overflow-hidden mb-5 min-h-10 w-full max-h-[30vh] overflow-y-auto">
                <div
                  ref={inputRef}
                  className="px-0.5 py-2 caret-brand-500 outline-none"
                  contentEditable={!isLoading}
                  data-placeholder="Ask Le Chat anything"
                  suppressContentEditableWarning={true}
                  onInput={handleInput}
                  onKeyDown={handleKeyDown}
                  style={{ minHeight: '40px' }}
                />
              </div>
              {/* Action Buttons */}
              <div className="flex w-full max-w-full items-center justify-start gap-3 max-sm:gap-1">
                <div className="shrink-0">
                  <button
                    type="button"
                    className="flex items-center justify-center text-inverted-default bg-state-brand hover:bg-state-brand-hover transition-colors size-9 rounded-md"
                    aria-label="Select agent"
                  >
                    <AgentIcon />
                  </button>
                </div>
                <button
                  type="button"
                  className="flex items-center justify-center text-default bg-state-secondary hover:bg-state-secondary-hover transition-colors h-9 text-sm rounded-md shrink-0 border-darker border-[0.5px] w-9"
                  aria-label="Add files"
                >
                  <AddFilesIcon />
                </button>
                <button
                  type="button"
                  className="flex items-center font-medium transition-all justify-center whitespace-nowrap bg-transparent text-subtle hover:bg-state-ghost-hover hover:text-default px-2 text-sm rounded-sm h-9 gap-0"
                >
                  <ResearchIcon />
                  <div className="flex overflow-hidden transition-all max-sm:w-0 max-sm:opacity-0">
                    <div className="w-2"></div>Research
                  </div>
                </button>
                <button
                  type="button"
                  className="flex items-center font-medium transition-all justify-center whitespace-nowrap bg-transparent text-subtle hover:bg-state-ghost-hover hover:text-default px-2 text-sm rounded-sm h-9 gap-0"
                >
                  <ThinkIcon />
                  <div className="flex overflow-hidden transition-all max-sm:w-0 max-sm:opacity-0">
                    <div className="w-2"></div>Think
                  </div>
                </button>
                <button
                  type="button"
                  onClick={onToggleTools}
                  className="flex items-center justify-center font-medium cursor-pointer relative whitespace-nowrap transition-colors text-subtle hover:text-default bg-transparent hover:bg-state-ghost-hover h-9 gap-1.5 px-3 text-sm rounded-md"
                >
                  <ToolsIcon />
                  <p className="max-sm:hidden">Tools</p>
                </button>
                <div className="flex ms-auto">
                  <div className="flex items-center justify-center ps-2">
                    {!inputValue || isLoading ? (
                      <button
                        type="button"
                        disabled={isLoading}
                        className="flex items-center justify-center text-inverted-default bg-state-primary hover:bg-state-primary-hover transition-colors size-9 rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
                        aria-label="Voice Mode"
                      >
                        <VoiceModeIcon />
                      </button>
                    ) : (
                      <button
                        type="submit"
                        disabled={isLoading}
                        className="flex items-center justify-center text-inverted-default bg-state-primary hover:bg-state-primary-hover transition-colors size-9 rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
                        aria-label="Send question"
                      >
                        <SendIcon />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
        <div className="max-w-6xl px-2 py-3 text-center text-xs text-muted sm:px-8 md:px-12" style={{ opacity: 1 }}>
          <p>Le Chat can make mistakes. Check important information.</p>
        </div>
      </div>
    </div>
  );
};
