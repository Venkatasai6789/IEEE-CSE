import React, { useRef, useEffect, useState } from 'react';
import { 
  ChatBubbleBottomCenterTextIcon, 
  AcademicCapIcon, 
  TrophyIcon, 
  GlobeAmericasIcon, 
  UserGroupIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';

const MILESTONES = [
  {
    year: '2018',
    title: 'Chapter Established',
    description: 'Founded with 50 passionate members committed to technical excellence.',
    icon: <UserGroupIcon className="w-6 h-6" />,
    current: false
  },
  {
    year: '2020',
    title: 'Best Student Branch',
    description: 'Recognized by IEEE Region 10 for outstanding performance and growth.',
    icon: <TrophyIcon className="w-6 h-6" />,
    current: false
  },
  {
    year: '2023',
    title: 'Global Conference',
    description: 'Hosted 500+ delegates from 12 countries for our flagship tech summit.',
    icon: <GlobeAmericasIcon className="w-6 h-6" />,
    current: false
  },
  {
    year: '2025',
    title: 'Current Era',
    description: 'Expanding horizons with 500+ active members and 50+ annual events.',
    icon: <SparklesIcon className="w-6 h-6" />,
    current: true
  }
];

const AFFILIATIONS = [
  { 
    name: 'IEEE Region 10', 
    desc: 'Asia Pacific Region',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/IEEE_logo.svg/320px-IEEE_logo.svg.png' 
  },
  { 
    name: 'IEEE Computer Society', 
    desc: 'Headquarters',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/IEEE_Computer_Society_Logo.svg/320px-IEEE_Computer_Society_Logo.svg.png' 
  },
  { 
    name: 'IEEE WIE', 
    desc: 'Women in Engineering',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/IEEE_logo.svg/320px-IEEE_logo.svg.png' // Using generic for demo
  },
  { 
    name: 'University Chapter', 
    desc: 'Official Recognition',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/University_logo_transparent.png/320px-University_logo_transparent.png' // Generic placeholder
  },
];

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="about" 
      ref={sectionRef} 
      className="relative bg-white dark:bg-slate-900 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        
        {/* Split Layout: Mission & Timeline */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 mb-24">
          
          {/* LEFT SIDE: Mission Statement */}
          <div className={`w-full lg:w-[60%] transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <div className="relative">
              <ChatBubbleBottomCenterTextIcon className="w-16 h-16 text-ieee-blue/10 dark:text-white/10 absolute -top-8 -left-8" />
              <div className="relative z-10">
                <h2 className="text-sm font-bold tracking-widest text-ieee-orange uppercase mb-4">Our Mission</h2>
                <blockquote className="text-2xl md:text-3xl font-medium leading-[1.8] text-slate-700 dark:text-slate-200 italic font-serif">
                  "To foster a culture of <span className="text-transparent bg-clip-text bg-gradient-to-r from-ieee-blue to-ieee-orange font-bold not-italic">technological innovation</span> and <span className="text-transparent bg-clip-text bg-gradient-to-r from-ieee-blue to-ieee-orange font-bold not-italic">academic excellence</span>, empowering students to build a connected <span className="text-transparent bg-clip-text bg-gradient-to-r from-ieee-blue to-ieee-orange font-bold not-italic">community</span> that advances humanity through computing."
                </blockquote>
                <div className="mt-8 flex items-center gap-4">
                  <div className="h-1 w-12 bg-ieee-blue dark:bg-ieee-orange rounded-full"></div>
                  <cite className="not-italic font-semibold text-slate-900 dark:text-white">
                    — IEEE Computer Society Student Branch Team
                  </cite>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Interactive Timeline */}
          <div className={`w-full lg:w-[40%] relative transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
             <h3 className="text-xl font-bold text-ieee-blue dark:text-white mb-6 flex items-center gap-2">
               <span className="w-2 h-2 rounded-full bg-ieee-orange animate-pulse"></span>
               Our Journey
             </h3>
             
             {/* Visual Line Background */}
             <div className="absolute top-[88px] left-0 w-full h-1 bg-gradient-to-r from-ieee-blue/20 via-ieee-blue/20 to-transparent dark:from-white/20 dark:via-white/10 rounded-full -z-0"></div>

             {/* Scrollable Container */}
             <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 pt-4 no-scrollbar">
                {MILESTONES.map((milestone, idx) => (
                  <div 
                    key={milestone.year}
                    className="flex-none w-[280px] snap-center first:pl-2"
                  >
                    <div className={`
                      relative bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg border-t-4 
                      transition-all duration-300 hover:shadow-xl hover:-translate-y-1
                      ${milestone.current ? 'border-ieee-orange animate-float' : 'border-ieee-blue dark:border-sky-500'}
                    `}>
                      {/* Connection Dot */}
                      <div className={`
                        absolute -top-[22px] left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-4 border-white dark:border-slate-900 z-10
                        ${milestone.current ? 'bg-ieee-orange animate-ping' : 'bg-ieee-blue'}
                      `}></div>
                      <div className={`
                         absolute -top-[22px] left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-4 border-white dark:border-slate-900 z-10
                         ${milestone.current ? 'bg-ieee-orange' : 'bg-ieee-blue'}
                      `}></div>

                      <div className="flex items-center justify-between mb-4">
                        <span className="text-2xl font-bold text-slate-800 dark:text-white">{milestone.year}</span>
                        <div className={`p-2 rounded-full ${milestone.current ? 'bg-orange-100 text-ieee-orange dark:bg-orange-900/30' : 'bg-blue-50 text-ieee-blue dark:bg-blue-900/30 dark:text-blue-300'}`}>
                          {milestone.icon}
                        </div>
                      </div>
                      <h4 className="font-semibold text-lg mb-2 text-slate-800 dark:text-slate-200">{milestone.title}</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                ))}
             </div>
             {/* Scroll Hint */}
             <div className="text-xs text-slate-400 text-center italic mt-2 animate-pulse">
               Scroll to explore history →
             </div>
          </div>
        </div>
      </div>

      {/* AFFILIATIONS SECTION */}
      <div className="bg-slate-100 dark:bg-slate-800/50 py-16 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-xl font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-10">
            Our Affiliations & Partnerships
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-center justify-items-center">
            {AFFILIATIONS.map((partner, idx) => (
              <div 
                key={partner.name}
                className={`
                  group relative flex flex-col items-center justify-center
                  transition-all duration-700
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                `}
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                {/* Logo Container */}
                <div className="w-32 h-20 relative flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 hover:scale-110 cursor-help">
                   {/* Fallback to text if image fails, but using object-contain for image */}
                   <img 
                      src={partner.logo} 
                      alt={partner.name}
                      className="max-h-full max-w-full object-contain"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                        (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                      }} 
                   />
                   <div className="hidden font-bold text-ieee-blue dark:text-slate-300 text-center border-2 border-slate-300 p-2 rounded">
                      {partner.name}
                   </div>

                   {/* Tooltip */}
                   <div className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 w-48 bg-slate-900 text-white text-xs rounded py-2 px-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-20 text-center shadow-lg">
                      <span className="font-bold block mb-1">{partner.name}</span>
                      {partner.desc}
                      {/* Arrow */}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-900"></div>
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}