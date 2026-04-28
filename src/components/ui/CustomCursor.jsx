import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const [isActive, setIsActive] = useState(true); // Tracks if dot should be visible

  // Smooth out the movement
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    // Functions to shrink and grow the dot
    const hideCursor = () => setIsActive(false);
    const showCursor = () => setIsActive(true);

    window.addEventListener('mousemove', moveCursor);
    // Listen for custom events from the Home component
    window.addEventListener('cursor-dissolve', hideCursor);
    window.addEventListener('cursor-restore', showCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('cursor-dissolve', hideCursor);
      window.removeEventListener('cursor-restore', showCursor);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full pointer-events-none z-[99999]"
      // Animate the scale to 0 when hovering text to create the "dissolve" illusion
      initial={{ scale: 1 }}
      animate={{ scale: isActive ? 1 : 0 }}
      transition={{ duration: 0.15, ease: "easeOut" }}
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        width: '20px', 
        height: '20px',
        backgroundColor: '#e0ff00',
        left: '-10px', 
        top: '-10px'
      }}
    />
  );
}