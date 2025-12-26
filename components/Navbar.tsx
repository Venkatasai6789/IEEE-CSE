import React, { useState, useEffect } from 'react';
import { NavItem } from '../types';
import MegaMenu from './MegaMenu';
import MobileMenu from './MobileMenu';
import { useTheme } from '../context/ThemeContext';
import { 
  SunIcon, 
  MoonIcon, 
  Bars3Icon, 
  XMarkIcon,
  ChevronDownIcon 
} from '@heroicons/react/24/outline';

const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#' },
  { label: 'Events', href: '#events', hasMegaMenu: true },
  { label: 'Team', href: '#team' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Blog', href: '#blog' },
  { label: 'Gallery', href: '#gallery' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handler for opening/closing mega menu with delay to prevent flickering
  let timeoutId: ReturnType<typeof setTimeout>;
  const handleMouseEnter = (hasMegaMenu?: boolean) => {
    if (hasMegaMenu) {
      clearTimeout(timeoutId);
      setMegaMenuOpen(true);
    } else {
      setMegaMenuOpen(false);
    }
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setMegaMenuOpen(false);
    }, 150); // Small buffer
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-transparent
          ${isScrolled 
            ? 'h-16 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-md dark:border-slate-800' 
            : 'h-16 md:h-20 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-sm'
          }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
          
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center gap-3">
             {/* Placeholder for IEEE Logo - using a styled placeholder if image fails or for demo */}
             <a href="#" className="flex items-center gap-2 group" aria-label="IEEE Computer Society Home">
                <div className="relative w-12 h-12 flex items-center justify-center overflow-hidden">
                   {/* Simulating the logo provided in prompt */}
                   <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/IEEE_Computer_Society_Logo.svg/1200px-IEEE_Computer_Society_Logo.svg.png" 
                      alt="IEEE CS Logo" 
                      className={`transition-all duration-300 object-contain ${isScrolled ? 'h-8' : 'h-10'}`}
                      onError={(e) => {
                        // Fallback if external image fails
                        (e.target as HTMLImageElement).style.display = 'none';
                        (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                      }}
                   />
                   <span className="hidden text-ieee-orange font-bold text-xl border-2 border-ieee-orange rounded-full w-10 h-10 flex items-center justify-center">CS</span>
                </div>
                <div className={`hidden lg:block transition-opacity duration-300 ${isScrolled ? 'opacity-0 w-0 overflow-hidden' : 'opacity-100'}`}>
                  <span className="block font-bold text-ieee-blue dark:text-slate-100 leading-none">IEEE</span>
                  <span className="block font-semibold text-ieee-blue dark:text-slate-300 text-sm leading-none tracking-tight">Computer Society</span>
                </div>
             </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-4 h-full">
            {NAV_ITEMS.map((item) => (
              <div 
                key={item.label}
                className="relative h-full flex items-center"
                onMouseEnter={() => handleMouseEnter(item.hasMegaMenu)}
                onMouseLeave={handleMouseLeave}
              >
                <a
                  href={item.href}
                  onClick={() => setActiveLink(item.label)}
                  className={`
                    px-3 py-2 text-sm font-medium transition-colors duration-200 relative
                    ${activeLink === item.label 
                      ? 'text-ieee-blue dark:text-ieee-orange' 
                      : 'text-slate-600 dark:text-slate-300 hover:text-ieee-blue dark:hover:text-white'
                    }
                    flex items-center gap-1
                  `}
                  aria-current={activeLink === item.label ? 'page' : undefined}
                >
                  {item.label}
                  {item.hasMegaMenu && (
                    <ChevronDownIcon className={`w-3 h-3 transition-transform duration-200 ${megaMenuOpen ? 'rotate-180' : ''}`} />
                  )}
                  
                  {/* Active Indicator */}
                  <span 
                    className={`
                      absolute bottom-0 left-0 w-full h-[3px] bg-ieee-blue dark:bg-ieee-orange rounded-t-full transition-transform duration-300 origin-center
                      ${activeLink === item.label && !isScrolled ? 'scale-x-100' : 'scale-x-0'}
                      ${isScrolled ? 'translate-y-[1px]' : 'translate-y-0'}
                    `}
                  />
                </a>

                {/* Mega Menu Dropdown */}
                {item.hasMegaMenu && (
                  <MegaMenu isOpen={megaMenuOpen} onMouseEnter={() => handleMouseEnter(true)} onMouseLeave={handleMouseLeave} />
                )}
              </div>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-ieee-blue dark:focus:ring-ieee-orange"
              aria-label="Toggle Dark Mode"
            >
              {theme === 'light' ? (
                <MoonIcon className="w-5 h-5" />
              ) : (
                <SunIcon className="w-5 h-5 text-yellow-400" />
              )}
            </button>

            {/* Join Button */}
            <a
              href="#join"
              className="
                bg-ieee-orange hover:bg-ieee-orange-dark text-white font-semibold 
                py-2 px-6 rounded-full shadow-md hover:shadow-lg transform hover:scale-105 
                transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ieee-orange
              "
            >
              Join IEEE
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
             <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-slate-500 dark:text-slate-400 focus:outline-none"
              aria-label="Toggle Dark Mode"
            >
              {theme === 'light' ? <MoonIcon className="w-5 h-5" /> : <SunIcon className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 rounded-md text-slate-600 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none"
              aria-label="Open menu"
            >
              <Bars3Icon className="w-7 h-7" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <MobileMenu 
        isOpen={mobileMenuOpen} 
        onClose={() => setMobileMenuOpen(false)} 
        navItems={NAV_ITEMS}
        activeLink={activeLink}
        setActiveLink={setActiveLink}
      />
    </>
  );
}