import React from 'react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100 via-slate-50 to-white dark:from-slate-800 dark:via-slate-900 dark:to-slate-950"></div>
      
      {/* Abstract Shape */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[500px] h-[500px] bg-ieee-blue/5 rounded-full blur-3xl dark:bg-ieee-blue/20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6 animate-fade-in">
          Innovating for <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-ieee-blue to-blue-600 dark:from-sky-400 dark:to-blue-500">
            Tomorrow's World
          </span>
        </h1>
        <p className="mt-4 text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          Welcome to the official portal of the IEEE Computer Society Student Branch. 
          Connect, Learn, and Grow with the world's leading community for computer professionals.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="#events" 
            className="px-8 py-3.5 rounded-full bg-ieee-blue text-white font-semibold shadow-lg hover:shadow-xl hover:bg-ieee-blue-dark transition-all duration-300 w-full sm:w-auto"
          >
            Explore Events
          </a>
          <a 
            href="#about" 
            className="px-8 py-3.5 rounded-full bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-semibold shadow hover:shadow-md border border-slate-200 dark:border-slate-700 transition-all duration-300 w-full sm:w-auto"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}