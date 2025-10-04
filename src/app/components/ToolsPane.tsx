// components/ToolsPane.tsx
import React from 'react';
import { CodeIcon, FileIcon, GlobeIcon, ImageIcon, SearchIcon } from './icons';

interface ToolItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ToolItem: React.FC<ToolItemProps> = ({ icon, title, description }) => (
  <button 
    type="button" 
    className="flex items-center w-full gap-4 p-2 rounded-md hover:bg-state-ghost-hover transition-colors"
  >
    {icon}
    <div className="flex flex-col items-start text-left flex-grow">
      <div className="text-sm text-default">{title}</div>
      <p className="text-xs text-subtle truncate w-full">{description}</p>
    </div>
    <div className="ml-auto">
      <input 
        type="checkbox" 
        defaultChecked 
        className="form-checkbox h-4 w-4 rounded accent-state-primary bg-muted border-darker focus:ring-state-primary cursor-pointer" 
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  </button>
);

interface ToolsPaneProps {
  isVisible: boolean;
}

export const ToolsPane: React.FC<ToolsPaneProps> = ({ isVisible }) => {
  if (!isVisible) return null;

  return (
    <div className="w-full bg-card rounded-xl border border-darker shadow-big">
      <div className="flex items-center gap-2 border-b border-darker px-4 py-2">
        <SearchIcon/>
        <input 
          placeholder="Search" 
          className="w-full bg-transparent outline-none text-sm text-default placeholder:text-muted"
        />
      </div>
      <div className="p-4 flex flex-col gap-2 max-h-[265px] overflow-y-auto">
        <p className="text-subtle text-sm">Tools</p>
        <ToolItem 
          icon={
           <CodeIcon/>
          }
          title="Code Interpreter"
          description="Generate code and charts"
        />
        <ToolItem 
          icon={
            <ImageIcon/>
          }
          title="Image generation"
          description="Generate and edit images"
        />
        <ToolItem 
          icon={
           <FileIcon/>
          }
          title="Canvas"
          description="Document collaboration"
        />
        <ToolItem 
          icon={
           <GlobeIcon/>
          }
          title="Web search"
          description="Search the web"
        />
      </div>
    </div>
  );
};