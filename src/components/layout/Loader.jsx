import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Loader({ visible }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!visible) return;

    let startTimestamp = null;
    const duration = 2000; // 2 seconds to reach 100%

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const elapsedTime = timestamp - startTimestamp;
      const nextProgress = Math.min((elapsedTime / duration) * 100, 100);
      
      setProgress(Math.floor(nextProgress));

      if (elapsedTime < duration) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div 
          key="loader"
          initial={{ y: 0 }}
          // The entire loader slides up smoothly and out of the way
          exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 } }}
          className="fixed inset-0 z-[100] bg-[#03040b] flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Centered Name Reveal */}
          <div className="overflow-hidden">
            <motion.div 
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
              className="font-display text-4xl md:text-6xl font-bold tracking-tighter text-white uppercase"
            >
              PRATEEK DEBNATH
            </motion.div>
          </div>

          {/* Subtitle / Role Reveal */}
          <div className="overflow-hidden mt-4">
            <motion.div 
              initial={{ y: "-100%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
              className="text-xs md:text-sm font-medium tracking-[0.2em] text-slate-400 uppercase font-sans"
            >
              Frontend Developer
            </motion.div>
          </div>
          
          {/* Bottom Right Percentage Counter */}
          <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 flex items-end">
             <motion.span 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, delay: 0.5 }}
               className="font-display text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-t from-white/20 to-white/5"
             >
               {progress}
             </motion.span>
             <motion.span 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ duration: 0.5, delay: 0.7 }}
               className="font-display text-xl md:text-3xl font-bold text-white/20 mb-2 ml-1"
             >
               %
             </motion.span>
          </div>

          {/* Loading Progress Bar at the very bottom */}
          <div 
            className="absolute bottom-0 left-0 h-1 bg-purple-500 transition-all duration-75 ease-out" 
            style={{ width: `${progress}%` }}
          ></div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}