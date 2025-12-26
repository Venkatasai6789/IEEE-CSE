import React, { useEffect } from 'react';
import { NavItem } from '../types';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: NavItem[];
  activeLink: string;
  setActiveLink: (link: string) => void;
}

export default function MobileMenu({ isOpen, onClose, navItems, activeLink, setActiveLink }: MobileMenuProps) {
  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  return (
    <div 
      className={`
        fixed inset-0 z-[60] transform transition-transform duration-300 ease-in-out md:hidden
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}
      `}
      aria-hidden={!isOpen}
    >
      {/* Backdrop */}
      <div 
        className={`absolute inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
      />

      {/* Menu Content */}
      <div className="absolute right-0 top-0 h-full w-[80%] max-w-sm bg-white dark:bg-slate-900 shadow-2xl p-6 flex flex-col">
        <div className="flex items-center justify-between mb-8">
          <span className="text-lg font-bold text-ieee-blue dark:text-white">Menu</span>
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400"
            aria-label="Close menu"
          >
            <XMarkIcon className="w-6 h-6" />
          </button>
        </div>

        <nav className="flex-grow">
          <ul className="space-y-4">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={() => {
                    setActiveLink(item.label);
                    onClose();
                  }}
                  className={`
                    block px-4 py-3 rounded-lg text-lg font-medium transition-colors
                    ${activeLink === item.label 
                      ? 'bg-ieee-blue/10 text-ieee-blue dark:bg-slate-800 dark:text-ieee-orange' 
                      : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/50'
                    }
                  `}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-8 pt-8 border-t border-slate-100 dark:border-slate-800">
           <a
              href="#join"
              className="
                block w-full text-center
                bg-ieee-orange hover:bg-ieee-orange-dark text-white font-semibold 
                py-3 px-6 rounded-full shadow-md transition-colors
              "
              onClick={onClose}
            >
              Join IEEE
            </a>
        </div>
      </div>
    </div>
  );
}