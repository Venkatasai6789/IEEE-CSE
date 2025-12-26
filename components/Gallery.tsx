import React from 'react';
import { PhotoIcon } from '@heroicons/react/24/outline';

const GALLERY_ITEMS = [
  { id: 1, title: 'Tech Workshop 2024', category: 'Education', color: 'bg-blue-100 dark:bg-blue-900/20' },
  { id: 2, title: 'Annual Hackathon', category: 'Competition', color: 'bg-orange-100 dark:bg-orange-900/20' },
  { id: 3, title: 'Guest Lecture Series', category: 'Seminar', color: 'bg-purple-100 dark:bg-purple-900/20' },
  { id: 4, title: 'Community Outreach', category: 'Social', color: 'bg-green-100 dark:bg-green-900/20' },
  { id: 5, title: 'Networking Night', category: 'Event', color: 'bg-pink-100 dark:bg-pink-900/20' },
  { id: 6, title: 'Project Exhibition', category: 'Showcase', color: 'bg-teal-100 dark:bg-teal-900/20' },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-ieee-blue dark:text-white mb-4">
            Gallery
          </h2>
          <div className="w-20 h-1 bg-ieee-orange mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Capturing moments of innovation, collaboration, and success within our student branch community.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {GALLERY_ITEMS.map((item) => (
            <div 
              key={item.id} 
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              {/* Placeholder Image Background */}
              <div className={`w-full h-full ${item.color} flex items-center justify-center transition-transform duration-500 group-hover:scale-105`}>
                 <PhotoIcon className="w-16 h-16 text-slate-400/50 dark:text-white/20" />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-ieee-blue/90 via-ieee-blue/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="inline-block px-3 py-1 bg-ieee-orange text-white text-xs font-bold rounded-full mb-2 w-fit transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {item.category}
                </span>
                <h3 className="text-white text-xl font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
             <button className="px-8 py-3 rounded-full border-2 border-ieee-blue text-ieee-blue dark:border-ieee-orange dark:text-ieee-orange font-semibold hover:bg-ieee-blue hover:text-white dark:hover:bg-ieee-orange dark:hover:text-white transition-all duration-300 shadow-sm hover:shadow-md">
                 View All Photos
             </button>
        </div>
      </div>
    </section>
  );
}