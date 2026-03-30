'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { MenuToggleIcon } from '@/components/ui/menu-toggle-icon';
import { useScroll } from '@/components/ui/use-scroll';

export function Header() {
  const [open, setOpen] = React.useState(false);
  // Lowered the scroll threshold slightly so it pops out a bit sooner when scrolling
  const scrolled = useScroll(20);

  const links = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
  ];

  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 mx-auto w-full transition-all duration-500 ease-out',
        {
          // Scrolled State: Wider (1100px), visible background, borders, and blur
          'md:top-5 md:max-w-[1100px] md:rounded-2xl border border-white/10 bg-[#03040b]/85 supports-[backdrop-filter]:bg-[#03040b]/60 backdrop-blur-lg shadow-2xl': 
            scrolled && !open,
          // Flat Top State: Completely invisible background and borders
          'bg-transparent border-transparent md:max-w-full rounded-none': 
            !scrolled && !open,
          // Mobile Menu Open State
          'bg-[#03040b]': open,
        },
      )}
    >
      <nav
        className={cn(
          'flex w-full items-center justify-between px-6 md:px-12 transition-all duration-500 ease-out',
          // Sleeker height: h-14 (56px) when scrolled, h-24 (96px) when resting at the top
          scrolled ? 'h-14' : 'h-24'
        )}
      >
        {/* Logo / Brand */}
        <a href="#home" className="flex items-center gap-2 group text-white">
          <span className="w-2 h-2 bg-purple-500 rounded-full group-hover:shadow-[0_0_10px_#8b5cf6] transition-all"></span>
          <span className="font-display text-xl font-bold tracking-tight text-white">PD</span>
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden items-center md:flex">
          <div className="flex items-center gap-8 mr-8">
            {links.map((link, i) => (
              <a 
                key={i} 
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors" 
                href={link.href}
              >
                {link.label}
              </a>
            ))}
          </div>
          <a href="https://www.linkedin.com/in/prateek-debnath-744453330" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="rounded-xl border-white/10 hover:bg-white/10 h-9 px-5">Let's Talk</Button>
          </a>
        </div>
        
        {/* Mobile Hamburger Menu */}
        <Button size="icon" variant="ghost" onClick={() => setOpen(!open)} className="md:hidden text-white hover:bg-white/10">
          <MenuToggleIcon open={open} className="size-6" duration={300} />
        </Button>
      </nav>

      {/* Mobile Fullscreen Menu Dropdown */}
      <div
        className={cn(
          'fixed top-[100%] right-0 bottom-0 left-0 z-50 flex flex-col h-[100vh] overflow-hidden bg-[#03040b] border-t border-white/5 md:hidden transition-all duration-500 ease-in-out',
          open ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'
        )}
      >
        <div className="flex h-full w-full flex-col gap-y-6 p-8">
          <div className="grid gap-y-6 mt-4">
            {links.map((link) => (
              <a
                key={link.label}
                className="text-2xl font-medium text-slate-300 hover:text-white transition-colors"
                href={link.href}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-4 mt-auto mb-32">
            <a href="https://www.linkedin.com/in/prateek-debnath-744453330" target="_blank" rel="noopener noreferrer" className="w-full">
              <Button className="w-full h-14 text-lg rounded-xl">Let's Talk</Button>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}