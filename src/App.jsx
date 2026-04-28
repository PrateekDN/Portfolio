import { useState, useEffect } from 'react';
import Lenis from 'lenis';
import Loader from './components/layout/Loader';
import { Header as Navbar } from './components/ui/header-2';
import Footer from './components/layout/Footer';
import Home from './components/sections/Home';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import CustomCursor from './components/ui/CustomCursor';
import Marquee from './components/ui/Marquee'; // New Import
import useScrollReveal from './hooks/useScrollReveal';
import useScrollSpy from './hooks/useScrollSpy';

function App() {
  const [loading, setLoading] = useState(true);
  
  useScrollReveal(!loading);
  useScrollSpy();

  // Tech stack items for the Marquee
  const techStack = [
    "React.js", "Node.js", "GSAP", "Tailwind CSS", 
    "Next.js", "Three.js", "Framer Motion", "MongoDB", "Python"
  ];

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      lerp: 0.08,
      wheelMultiplier: 1,
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const handleLoaderComplete = () => {
    setLoading(false);
    document.body.classList.add('loaded');
  };

  return (
    <div className="bg-[#0f0b0a] min-h-screen relative">
      {/* 1. Custom Cursor stays on top of everything */}
      <CustomCursor />

      {/* 2. Loader handles its own Z-index */}
      {loading && <Loader onComplete={handleLoaderComplete} />}
      
      <Navbar />
      
      <main className="w-full">
        <Home />

        {/* --- DYNAMIC TRANSITION MARQUEE --- */}
        <div className="relative z-40 py-20 flex flex-col gap-6 bg-[#0f0b0a] overflow-hidden">
          {/* Main Neon Bar - Moving Forward */}
          <div className="-rotate-2 scale-110">
            <Marquee 
              items={techStack} 
              className="bg-[#e0ff00] text-black" 
              icon="mdi:star-four-points"
              iconClassName="text-black text-3xl"
            />
          </div>

          {/* Secondary Outline Bar - Moving Reverse */}
          <div className="-rotate-2 scale-110">
            <Marquee 
              items={techStack} 
              reverse={true}
              className="bg-transparent border-y border-white/10 text-white/20" 
              icon="mdi:star-four-points"
              iconClassName="text-[#e0ff00]/30 text-3xl"
            />
          </div>
        </div>
        {/* ---------------------------------- */}

        <About />
        <Skills />
        <Projects />
        <Experience />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;