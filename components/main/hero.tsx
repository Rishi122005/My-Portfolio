'use client';
import Link from 'next/link';
import { useState } from 'react';

export const Hero = () => {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const skillsList = [
    { title: "Full Stack Dev", desc: "React, Next.js, Vite, TypeScript, Tailwind CSS" },
    { title: "UI/UX & Design", desc: "Figma, Prototyping, Wireframing, User Centric" },
    { title: "Backend & APIs", desc: "Node.js, Express, PostgreSQL, MongoDB, REST" },
    { title: "Cloud & DevOps", desc: "AWS, Docker, Linux, CI/CD Pipelines, Vercel" }
  ];

  return (
    <div className="relative flex flex-col justify-center min-h-screen w-full bg-transparent overflow-hidden z-[20]">
      {/* Background relies on pure #050505 */}

      {/* The Massive Dark Planet (Subtle, sleek video sphere) */}
      <div className="absolute top-1/2 left-[-60%] md:left-[-35%] w-[1200px] h-[1200px] md:w-[1800px] md:h-[1800px] transform -translate-y-1/2 z-10">
         
         {/* The Planet Base Surface (Clips the video) */}
         <div className="w-full h-full rounded-full overflow-hidden bg-[#030303] border border-[#1a1a1a] relative">
            <video
              autoPlay
              muted
              loop
              className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale brightness-50 contrast-150 mix-blend-screen blur-[2px]"
            >
              <source src="/videos/blackhole.webm" type="video/webm" />
            </video>
            {/* Inset shadow over the video to give it 3D spherical depth */}
            <div className="absolute inset-0 rounded-full shadow-[inset_-60px_0_150px_rgba(0,0,0,0.95)] pointer-events-none"></div>
            <div className="absolute inset-0 rounded-full shadow-[inset_0px_0_100px_rgba(0,0,0,0.9)] pointer-events-none"></div>
         </div>

         {/* Small dark moons hanging off the edge */}
         <div className="absolute top-[35%] right-[0%] w-[80px] h-[80px] md:w-[150px] md:h-[150px] bg-[#050505] border border-[#222] rounded-full shadow-2xl"></div>
         <div className="absolute top-[44%] right-[5%] w-[15px] h-[15px] md:w-[30px] md:h-[30px] bg-[#111] rounded-full"></div>
      </div>

      {/* The Horizontal Sharp Brush/Line - Subtle dark line */}
      <div className="absolute top-[52%] left-0 w-[45%] md:w-[35%] h-[6px] md:h-[1px] bg-[#222] z-10 transform -translate-y-1/2"></div>
      
      {/* Standard Text Layer (No mix-blend needed for pure dark theme) */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none">
        <h1 className="text-[100px] md:text-[260px] font-display font-medium text-white tracking-tighter leading-none text-center drop-shadow-2xl">
          Rishi Raj<span className="text-[20px] md:text-[40px] absolute align-top text-gray-500 mt-10 md:mt-[60px] ml-4 font-light">®</span>
        </h1>
      </div>

      {/* Foreground Details (z-30) */}
      <div className="absolute inset-0 z-30 pointer-events-none">
        
        {/* Top Right Contact Pill */}
        <div className="hidden md:flex absolute top-32 right-10 flex-col items-start gap-4">
           <Link href="mailto:codrishiriengs@gmail.com" className="pointer-events-auto rounded-full border border-gray-800 px-2 py-1 flex items-center gap-4 hover:bg-gray-800 hover:text-white transition-colors w-[220px] justify-between">
              <span className="flex items-center gap-3">
                 <div className="w-8 h-8 rounded-full overflow-hidden relative grayscale opacity-70">
                    <div className="w-full h-full bg-gradient-to-tr from-gray-700 to-gray-500"></div>
                 </div>
                 <span className="text-xs font-medium text-gray-400 hover:text-white mt-1">Contact Now</span>
              </span>
              <span className="flex gap-1 pr-3 opacity-50">
                 <div className="w-1 h-1 rounded-full bg-gray-600"></div>
                 <div className="w-1 h-1 rounded-full bg-gray-600"></div>
              </span>
           </Link>
           <p className="text-gray-600 text-xs mt-2 ml-2">Reach out to start<br/>your project</p>
        </div>

        {/* Left Side Links overlaying the dark planet - NOW DROPDOWNS */}
        <div className="absolute top-[68%] left-[5%] md:left-[6%] flex flex-col gap-4 w-[200px] md:w-[280px] pointer-events-auto">
           {skillsList.map((skill, index) => (
             <div key={index} className="flex flex-col border-b border-[#222] pb-2 overflow-hidden">
               <div 
                 onClick={() => toggleDropdown(index)}
                 className="flex justify-between cursor-pointer hover:text-white transition-colors text-white font-bold uppercase tracking-widest text-[10px] md:text-xs drop-shadow-lg"
               >
                 <span>{skill.title}</span>
                 <span className="text-gray-500 transition-transform duration-300">{openDropdown === index ? '−' : '+'}</span>
               </div>
               <div 
                 className={`transition-all duration-300 ease-in-out ${openDropdown === index ? 'max-h-[100px] opacity-100 mt-2' : 'max-h-0 opacity-0'}`}
               >
                 <p className="text-gray-400 text-[10px] lowercase tracking-wide font-medium">{skill.desc}</p>
               </div>
             </div>
           ))}
        </div>

        {/* Right side floating text */}
        <div className="absolute top-[55%] right-[10%] text-gray-500 text-sm md:text-lg font-light w-[200px]">
          <p>Space of Creative<br/>Solutions</p>
        </div>

        {/* Bottom Center Text */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center text-gray-600 text-[10px] md:text-xs tracking-widest uppercase font-medium">
          <p>Full-service</p>
          <p>Software Engineer</p>
        </div>

      </div>
    </div>
  );
};
