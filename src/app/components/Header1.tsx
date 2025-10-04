import React from 'react';
import { MenuIcon, NewChatIcon, FolderPlusIcon, StarIcon, ShareIcon } from './icons';

export const Header1: React.FC = () => {
  return (
    <div
      className="left-0 right-0 top-0 z-20 flex w-full flex-row items-center justify-between transition-shadow fixed"
      style={{ opacity: 1, height: '64px' }}
    >
      <div className="flex-row p-3 flex items-center gap-4 ps-6 pt-3">
        <button
          type="button"
          className="items-center justify-center text-center font-medium cursor-pointer outline-hidden focus-visible:ring-3 relative whitespace-nowrap transition-colors focus-visible:ring-default focus-visible:ring-offset-1 aria-disabled:text-hint aria-disabled:cursor-not-allowed aria-busy:cursor-wait aria-busy:text-transparent bg-state-ghost text-default hover:not-disabled:bg-state-ghost-hover active:not-disabled:bg-state-ghost-press gap-1 text-sm rounded-md base group asideIcon onlyIcon spinner h-10 w-10 p-2.5 flex md:hidden"
          aria-label="Open"
          data-state="closed"
        >
          <MenuIcon />
        </button>
        <a
          aria-busy="false"
          className="flex items-center justify-center text-center font-medium cursor-pointer outline-hidden focus-visible:ring-3 relative whitespace-nowrap transition-colors focus-visible:ring-default focus-visible:ring-offset-1 aria-disabled:text-hint aria-disabled:cursor-not-allowed aria-busy:cursor-wait aria-busy:text-transparent bg-state-soft text-default hover:bg-state-soft-hover active:bg-state-soft-press aria-disabled:bg-state-disabled h-8 gap-1 text-sm rounded-md p-2"
          data-state="closed"
          href="/"
        >
          <NewChatIcon />
          New
        </a>
        <button
          aria-disabled="false"
          type="button"
          className="flex items-center justify-center text-center font-medium cursor-pointer outline-hidden focus-visible:ring-3 relative whitespace-nowrap transition-colors focus-visible:ring-default focus-visible:ring-offset-1 aria-disabled:text-hint aria-disabled:cursor-not-allowed aria-busy:cursor-wait aria-busy:text-transparent bg-state-ghost text-muted hover:not-disabled:bg-state-ghost-hover active:not-disabled:bg-state-ghost-press gap-1.5 text-sm p-0 rounded-md size-9"
          id="radix-_r_j_"
          aria-haspopup="menu"
          aria-expanded="false"
          data-state="closed"
        >
          <FolderPlusIcon />
        </button>
      </div>
      <div className="flex flex-row items-center p-3">
        <button
          aria-disabled="false"
          type="button"
          className="flex items-center justify-center text-center font-medium cursor-pointer outline-hidden focus-visible:ring-3 relative whitespace-nowrap transition-colors focus-visible:ring-default focus-visible:ring-offset-1 aria-disabled:text-hint aria-disabled:cursor-not-allowed aria-busy:cursor-wait aria-busy:text-transparent bg-state-ghost text-muted hover:not-disabled:bg-state-ghost-hover active:not-disabled:bg-state-ghost-press gap-1.5 text-sm p-0 rounded-md size-9"
          data-state="closed"
        >
          <StarIcon />
        </button>
        <button
          type="button"
          className="flex items-center justify-center text-center font-medium cursor-pointer outline-hidden focus-visible:ring-3 whitespace-nowrap transition-colors focus-visible:ring-default focus-visible:ring-offset-1 aria-disabled:text-hint aria-disabled:cursor-not-allowed aria-busy:cursor-wait aria-busy:text-transparent bg-state-ghost text-muted hover:not-disabled:bg-state-ghost-hover active:not-disabled:bg-state-ghost-press h-9 gap-1.5 px-3 text-sm rounded-md relative"
          data-state="closed"
        >
          <ShareIcon />
        </button>
      </div>
    </div>
  );
};

export default Header1;
