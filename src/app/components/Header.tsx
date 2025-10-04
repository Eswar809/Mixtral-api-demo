// components/Header.tsx
import React from 'react';

export const Header: React.FC = () => {
  return (
    <div 
      className="left-0 right-0 top-0 z-20 flex w-full flex-row items-center justify-between transition-shadow fixed" 
      style={{ height: '64px' }}
    >
      <div className="absolute inset-x-0 top-0 -z-10 flex justify-center pt-3 sm:hidden">
        <a href="#">
          <button 
            type="button" 
            className="flex items-center justify-center text-center cursor-pointer relative whitespace-nowrap transition-colors h-9 text-sm gap-3 rounded-full px-3 font-medium bg-state-secondary bg-state-secondary-hover border-darker border-[0.5px]"
          >
            <div className="flex items-stretch h-3 w-6">
              <div className="grow" style={{ backgroundColor: '#FFD700' }}></div>
              <div className="grow" style={{ backgroundColor: '#FFAF00' }}></div>
              <div className="grow" style={{ backgroundColor: '#FF8205' }}></div>
              <div className="grow" style={{ backgroundColor: '#FA500F' }}></div>
            </div>
            <p>Upgrade to Pro</p>
            <div className="rounded-full bg-muted p-1">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="size-3 text-muted"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </div>
          </button>
        </a>
      </div>
      
      <div className="flex-row p-3 flex items-center gap-4 pl-6 pt-3">
        <button 
          type="button" 
          className="items-center justify-center text-center font-medium cursor-pointer relative whitespace-nowrap transition-colors h-10 w-10 p-2.5 flex md:hidden bg-state-ghost bg-state-ghost-hover rounded-md"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="1.75" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="size-[18px]"
          >
            <rect width="18" height="18" x="3" y="3" rx="2"></rect>
            <path d="M9 3v18"></path>
          </svg>
        </button>
      </div>
      
      <div className="flex flex-row items-center p-3">
        <a 
          className="flex items-center justify-center text-center font-medium cursor-pointer relative whitespace-nowrap transition-colors text-muted hover:text-default size-9" 
          href="#"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="size-[18px]"
          >
            <path d="M14 18a2 2 0 0 0-4 0"></path>
            <path d="m19 11-2.11-6.657a2 2 0 0 0-2.752-1.148l-1.276.61A2 2 0 0 1 12 4H8.5a2 2 0 0 0-1.925 1.456L5 11"></path>
            <path d="M2 11h20"></path>
            <circle cx="17" cy="18" r="3"></circle>
            <circle cx="7" cy="18" r="3"></circle>
          </svg>
        </a>
      </div>
    </div>
  );
};
export default Header;