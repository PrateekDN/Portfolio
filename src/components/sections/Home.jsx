import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ProButton from '../ui/ProButton';

// Register the GSAP plugin
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  // --- STATE FOR TEXT WAVE & PHYSICS BUMP ---
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [bumpData, setBumpData] = useState({ index: null, x: 0, y: 0 });
  const softwareText = "SOFTWARE".split('');

  // --- REFS FOR PARALLAX ---
  const softwareRef = useRef(null);
  const engineerBgRef = useRef(null);
  const engineerFgRef = useRef(null);
  const developerRef = useRef(null);
  const modelRef = useRef(null);

  // --- COLLISION PHYSICS HANDLER ---
  const handleLetterHover = (e, index) => {
    setHoveredIndex(index);
    window.dispatchEvent(new Event('cursor-dissolve'));

    const rect = e.target.getBoundingClientRect();
    const normalizedX = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
    const normalizedY = (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);

    const bumpForce = 16;
    let bX = 0;
    let bY = 0;
    let chainType = null;

    // 1. Starting Letter Left Collision
    if (index === 0 && normalizedX < -0.4) {
      bX = bumpForce;
      chainType = 'up';
    }
    // 2. Ending Letter Right Collision
    else if (index === softwareText.length - 1 && normalizedX > 0.4) {
      bX = -bumpForce;
      chainType = 'down';
    }
    // 3. Middle Letter Vertical Collision (The New Rule)
    else {
      // Direct hit force
      bY = normalizedY > 0 ? -bumpForce : bumpForce;
      // Set the chain for EVERYONE else based on the hit direction
      chainType = normalizedY > 0 ? 'up' : 'down';
    }

    setBumpData({ index, x: bX, y: bY, chainType });
  };

  const handleTextLeave = () => {
    setHoveredIndex(null);
    // We don't reset bumpData here so the animation finishes its smooth return
    window.dispatchEvent(new Event('cursor-restore'));
  };

  // --- GSAP PARALLAX LOGIC ---
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(softwareRef.current, { y: 150, ease: "none", scrollTrigger: { trigger: "#home", start: "top top", end: "bottom top", scrub: true } });
      gsap.to([engineerBgRef.current, engineerFgRef.current], { y: -100, ease: "none", scrollTrigger: { trigger: "#home", start: "top top", end: "bottom top", scrub: true } });
      gsap.to(developerRef.current, { y: -130, ease: "none", scrollTrigger: { trigger: "#home", start: "top top", end: "bottom top", scrub: true } });
      gsap.to(modelRef.current, { y: 50, ease: "none", scrollTrigger: { trigger: "#home", start: "top top", end: "bottom top", scrub: true } });
    });
    return () => ctx.revert();
  }, []);

  // --- TYPOGRAPHY STYLES ---
  const textStyle = {
    fontFamily: '"Inter", sans-serif',
    fontStyle: 'normal',
    fontWeight: 600,
    color: 'rgb(255, 255, 255)',
    fontSize: '120px',
    lineHeight: '120px',
    letterSpacing: '2px',
    textShadow: 'none' // Explicitly removing any glow
  };

  const strokeTextStyle = {
    ...textStyle,
    color: 'transparent',
    WebkitTextStroke: '2px rgb(255, 255, 255)'
  };

  return (
    <section className="relative min-h-screen w-full bg-[#121213] overflow-hidden flex items-center justify-center" id="home">

      {/* Z-10 LAYER: BACKGROUND TEXT */}
      <div className="absolute inset-0 z-10 pointer-events-none">

        {/* INTERACTIVE 'SOFTWARE' TEXT WITH PHYSICS */}
        <div
          ref={softwareRef}
          className="absolute top-[16.6%] right-[35%] flex uppercase select-none pointer-events-auto mt-[-35px]"
          onMouseLeave={handleTextLeave}
        >
          {softwareText.map((letter, index) => {
            const distance = hoveredIndex !== null ? Math.abs(hoveredIndex - index) : 0;

            const isDirectHit = bumpData.index === index;
            // Now these apply if ANY letter triggers a chainType
            const isChainUp = bumpData.chainType === 'up' && hoveredIndex !== null;
            const isChainDown = bumpData.chainType === 'down' && hoveredIndex !== null;

            let yPos = 0;
            if (isDirectHit) {
              yPos = bumpData.y;
            } else if (isChainUp) {
              yPos = -12; // Pulse Up
            } else if (isChainDown) {
              yPos = 12;  // Pulse Down
            }

            return (
              <motion.span
                key={index}
                onMouseEnter={(e) => handleLetterHover(e, index)}
                animate={{
                  color: hoveredIndex !== null ? '#e0ff00' : 'rgb(255, 255, 255)',
                  y: hoveredIndex !== null ? [0, yPos, 0] : 0,
                  x: isDirectHit ? [0, bumpData.x, 0] : 0
                }}
                transition={{
                  color: { duration: 0.2, delay: distance * 0.1 },
                  y: {
                    duration: 0.4,
                    ease: "easeOut",
                    delay: distance * 0.1, // This delay creates the "Wave" effect from the hit point
                    times: [0, 0.4, 1]
                  },
                  x: { duration: 0.4, ease: "easeOut", times: [0, 0.4, 1] }
                }}
                style={{ ...textStyle, display: 'inline-block' }}
              >
                {letter}
              </motion.span>
            );
          })}
        </div>

        <h1 ref={engineerBgRef} className="absolute top-[32.4%] left-[53.5%] uppercase mt-[-35px]" style={textStyle}>
          ENGINEER.
        </h1>
      </div>

      {/* NEON DEVELOPER TEXT */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <h1 ref={developerRef} className="absolute top-[45%] left-[71%] uppercase" style={{ ...strokeTextStyle, fontSize: '50px', lineHeight: '30px', fontStyle: 'italic', WebkitTextStroke: '2px #e0ff00' }}>
          & DEVELOPER
        </h1>
      </div>

      {/* Z-20 LAYER: THE SUBJECT */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[80vh] md:h-[85vh] w-full max-w-5xl z-20 pointer-events-none flex items-end justify-center">
        <img ref={modelRef} src="/assets/card_img2_cutout.png" alt="Subject Model" className="h-full w-auto object-contain object-bottom drop-shadow-2xl" />
      </div>

      {/* Z-30 LAYER: FOREGROUND TEXT */}
      <div className="absolute inset-0 z-30 pointer-events-none">
        <h1 ref={engineerFgRef} className="absolute top-[32.4%] left-[53.5%] uppercase mt-[-35px]" style={strokeTextStyle}>
          ENGINEER.
        </h1>
      </div>

      {/* CONTENT BLOCK */}
      {/* Bottom Left Content Block */}
      <div className="absolute bottom-12 left-8 md:bottom-16 md:left-12 z-40 max-w-[280px] md:max-w-sm pointer-events-auto">
        <p className="text-xs md:text-sm text-slate-300 mb-6 font-light leading-relaxed">
          Full-stack software engineer building scalable, performance-driven web applications.
        </p>
        
        {/* THE CLEAN CTA */}
        <ProButton text="GET CONNECTED" href="#contact" />
      </div>
    </section>
  );
}