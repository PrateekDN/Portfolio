'use client';
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

export function Header() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { label: 'HOME', href: '#home' },
    { label: 'ABOUT', href: '#about' },
    { label: 'SERVICES', href: '#services' },
    { label: 'WORK', href: '#projects' },
    { label: 'CONTACT', href: '#contact' },
  ];

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  return (
    <>
      {/* TOP BAR - Higher Z-Index to stay above the menu */}
      <header className="fixed top-0 left-0 w-full z-[80] px-8 py-8 md:px-12 flex justify-between items-start pointer-events-none">
        <div className="pointer-events-auto">
          <span className="text-white font-black tracking-widest text-sm md:text-base font-inter">
            PRATEEK DN.
          </span>
        </div>

        {/* TOGGLE BUTTON: Transforms into 'X' when open */}
        <button 
          onClick={() => setOpen(!open)}
          className="group pointer-events-auto flex flex-col gap-2 items-end justify-center p-2 outline-none"
          aria-label="Toggle Menu"
        >
          {/* Top Line */}
          <div className={cn(
            "h-[2px] bg-white transition-all duration-500 ease-[0.76, 0, 0.24, 1]", 
            open ? "w-8 rotate-45 translate-y-[5px]" : "w-8"
          )} />
          {/* Middle Line */}
          <div className={cn(
            "h-[2px] bg-white transition-all duration-300", 
            open ? "w-0 opacity-0" : "w-5"
          )} />
          {/* Bottom Line */}
          <div className={cn(
            "h-[2px] bg-white transition-all duration-500 ease-[0.76, 0, 0.24, 1]", 
            open ? "w-8 -rotate-45 -translate-y-[5px]" : "w-8"
          )} />
        </button>
      </header>

      {/* FULLSCREEN MENU OVERLAY */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[70] bg-[#0f0b0a] flex flex-col md:flex-row"
          >
            {/* Left Decorative Side */}
            <div className="hidden md:flex flex-1 items-center justify-center border-r border-white/5 relative overflow-hidden">
               <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent"></div>
               <motion.h2 
                 initial={{ y: 100, opacity: 0 }}
                 animate={{ y: 0, opacity: 0.1 }}
                 transition={{ delay: 0.4, duration: 1 }}
                 className="text-white text-[10vw] font-black rotate-90 select-none"
               >
                 MENU
               </motion.h2>
            </div>

            {/* Right Content Side */}
            <div className="flex-1 flex flex-col justify-between p-8 md:p-24 pt-40">
              
              <nav className="flex flex-col gap-4">
                {navLinks.map((link, i) => (
                  <div key={link.label} className="overflow-hidden">
                    <motion.a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      initial={{ y: "100%" }}
                      animate={{ y: 0 }}
                      exit={{ y: "100%" }}
                      transition={{ 
                        delay: 0.2 + (i * 0.05), 
                        duration: 0.7, 
                        ease: [0.76, 0, 0.24, 1] 
                      }}
                      className="font-geist font-bold text-[48px] md:text-[64px] leading-none text-white hover:italic transition-all w-fit block hover:text-white/60"
                    >
                      {link.label}
                    </motion.a>
                  </div>
                ))}
              </nav>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex flex-col md:flex-row gap-12 md:gap-24 border-t border-white/10 pt-12"
              >
                <div>
                  <p className="font-geist font-light text-[12px] text-white/40 mb-2 uppercase tracking-[0.3em]">E-mail</p>
                  <a href="mailto:dev.syednoor@gmail.com" className="font-geist font-light text-[14px] text-white hover:text-white/60 transition-colors">
                    prateekdn77@gmail.com
                  </a>
                </div>

                <div>
                  <p className="font-geist font-light text-[12px] text-white/40 mb-2 uppercase tracking-[0.3em]">Social Media</p>
                  <div className="flex gap-6">
                    {['GITHUB', 'LINKEDIN'].map((social) => (
                      <a key={social} href="#" className="font-geist font-light text-[14px] text-white hover:underline underline-offset-8">
                        {social}
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}