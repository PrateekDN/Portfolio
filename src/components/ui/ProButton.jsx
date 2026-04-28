import React from 'react';

export default function ProButton({ text = "GET CONNECTED", href = "#contact" }) {
  return (
    <a
      href={href}
      className="relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-bold tracking-widest text-xs md:text-sm uppercase group border border-white/20 bg-transparent text-white"
    >
      {/* The Precision Swipe Fill: 
        Starts off-screen, angled, and rapidly slides in while straightening out. 
      */}
      <span className="absolute inset-0 w-full h-full bg-[#e0ff00] origin-bottom-left -translate-x-full translate-y-full skew-x-[-30deg] group-hover:translate-x-0 group-hover:translate-y-0 group-hover:skew-x-0 transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]" />

      {/* Text and Arrow Container */}
      <span className="relative z-10 flex items-center gap-3 transition-colors duration-300 group-hover:text-[#121213]">
        {text}
        
        {/* The Arrow: Snaps up and to the right dynamically */}
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter" 
          className="transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-x-1 group-hover:-translate-y-1"
        >
          <path d="M7 17l9.2-9.2M17 17V7H7" />
        </svg>
      </span>
    </a>
  );
}