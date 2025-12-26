import React from 'react';
import { EventPreview, Category } from '../types';
import { CalendarIcon, UserGroupIcon, BeakerIcon, ComputerDesktopIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

interface MegaMenuProps {
  isOpen: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

// Dummy data
const UPCOMING_EVENTS: EventPreview[] = [
  { id: 1, title: 'AI in Healthcare Workshop', date: 'Oct 24, 2023', category: 'Technical' },
  { id: 2, title: 'Annual Hackathon 2023', date: 'Nov 12-14, 2023', category: 'Competition' },
  { id: 3, title: 'Career Development Webinar', date: 'Nov 20, 2023', category: 'Webinar' },
];

const CATEGORIES: Category[] = [
  { name: 'Technical Workshops', href: '#tech', icon: <ComputerDesktopIcon className="w-5 h-5" /> },
  { name: 'Hackathons', href: '#hack', icon: <BeakerIcon className="w-5 h-5" /> },
  { name: 'Webinars', href: '#webinars', icon: <CalendarIcon className="w-5 h-5" /> },
  { name: 'Social Events', href: '#social', icon: <UserGroupIcon className="w-5 h-5" /> },
];

export default function MegaMenu({ isOpen, onMouseEnter, onMouseLeave }: MegaMenuProps) {
  if (!isOpen) return null;

  return (
    <div
      className="absolute top-full left-0 w-[600px] bg-white dark:bg-slate-800 rounded-b-xl shadow-xl border-t border-slate-100 dark:border-slate-700 overflow-hidden transform origin-top animate-slide-down"
      style={{ marginLeft: '-150px' }} // Center align relative to parent roughly
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="grid grid-cols-12 gap-0">
        
        {/* Column 1: Upcoming Events (5 cols) */}
        <div className="col-span-5 p-6 bg-slate-50 dark:bg-slate-800/50 border-r border-slate-100 dark:border-slate-700">
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Upcoming Events</h3>
          <ul className="space-y-4">
            {UPCOMING_EVENTS.map((event) => (
              <li key={event.id} className="group cursor-pointer">
                <a href={`#event-${event.id}`} className="block">
                  <h4 className="text-sm font-semibold text-slate-800 dark:text-slate-200 group-hover:text-ieee-blue dark:group-hover:text-ieee-orange transition-colors">
                    {event.title}
                  </h4>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">{event.date}</span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                      {event.category}
                    </span>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 2: Categories (4 cols) */}
        <div className="col-span-4 p-6 bg-white dark:bg-slate-800">
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Browse by Category</h3>
          <ul className="space-y-2">
            {CATEGORIES.map((cat) => (
              <li key={cat.name}>
                <a 
                  href={cat.href}
                  className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700/50 text-slate-700 dark:text-slate-300 transition-colors group"
                >
                  <span className="text-ieee-blue dark:text-sky-400 group-hover:scale-110 transition-transform">
                    {cat.icon}
                  </span>
                  <span className="text-sm font-medium">{cat.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Archive (3 cols) */}
        <div className="col-span-3 p-6 bg-ieee-blue dark:bg-slate-900 flex flex-col justify-between text-white relative overflow-hidden">
          {/* Decorative background circle */}
          <div className="absolute top-0 right-0 -mr-8 -mt-8 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
          
          <div>
            <h3 className="text-sm font-bold text-white mb-2">Past Events</h3>
            <p className="text-xs text-blue-100 leading-relaxed">
              Explore our gallery and reports from previous years.
            </p>
          </div>
          
          <a 
            href="#archive" 
            className="group flex items-center gap-2 text-sm font-semibold text-ieee-orange hover:text-white transition-colors mt-4"
          >
            View Archive
            <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  );
}