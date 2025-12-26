import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import { ThemeProvider } from './context/ThemeContext';

// We wrap the app in ThemeProvider to manage dark mode globally
export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col relative font-sans selection:bg-ieee-orange selection:text-white">
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <About />
          {/* Content sections for scrolling demonstration */}
          <section id="events" className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-ieee-blue dark:text-sky-400">Upcoming Events</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-64 bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 p-6">
                  <div className="h-4 w-1/3 bg-slate-200 dark:bg-slate-700 rounded mb-4"></div>
                  <div className="h-24 bg-slate-100 dark:bg-slate-700/50 rounded mb-4"></div>
                  <div className="h-4 w-full bg-slate-100 dark:bg-slate-700/50 rounded"></div>
                </div>
              ))}
            </div>
          </section>
          
          <section id="team" className="py-20 bg-slate-100 dark:bg-slate-800/50 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-ieee-blue dark:text-sky-400">Our Team</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="aspect-square bg-white dark:bg-slate-800 rounded-full shadow-md mx-auto w-40 flex items-center justify-center">
                    <span className="text-slate-400">Photo</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="achievements" className="py-20 px-4 md:px-8 max-w-7xl mx-auto min-h-[30vh]">
             <h2 className="text-3xl font-bold mb-6 text-ieee-blue dark:text-sky-400">Achievements</h2>
             <p className="text-lg text-slate-600 dark:text-slate-300">
               Recognized as the Best Student Branch in Region 10 for 2024.
             </p>
          </section>

          <Gallery />
        </main>
        
        <footer className="bg-ieee-blue text-white py-12 px-4">
          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">IEEE Computer Society</h3>
              <p className="text-slate-300">Advancing technology for humanity.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-ieee-orange">Links</h4>
              <ul className="space-y-1 text-slate-300 text-sm">
                <li>Home</li>
                <li>Events</li>
                <li>Blog</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-ieee-orange">Connect</h4>
              <p className="text-slate-300 text-sm">studentbranch@example.org</p>
            </div>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}