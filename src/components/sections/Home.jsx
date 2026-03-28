import useTypingEffect from '../../hooks/useTypingEffect';

export default function Home() {
  const roles = [
    "Frontend Developer",
    "React Specialist",
    "Python Programmer",
    "ML Enthusiast"
  ];
  const typedText = useTypingEffect(roles);

  return (
    <section className="min-h-screen flex overflow-hidden pt-20 relative gap-x-12 gap-y-12 items-center" id="home">
      <div className="flex flex-col md:flex-row -translate-y-2 z-10 w-full max-w-7xl mr-auto ml-auto pr-6 pl-6 relative gap-x-12 gap-y-12 items-center justify-between">
        
        {/* LEFT SIDE: Text Content */}
        <div className="flex-1 md:text-left reveal z-10 text-center space-y-6 gap-x-12 gap-y-12">
          <h1 className="leading-[1.1] md:text-7xl text-5xl font-semibold text-white tracking-wider font-display">
            PRATEEK <br className="hidden md:block" /> DEBNATH
          </h1>
          <div className="h-8 md:h-10 text-lg md:text-xl text-slate-300 font-medium tracking-tight font-display">
            <span>{typedText}</span>
            <span className="cursor">&nbsp;</span>
          </div>
          <p className="text-sm md:text-base text-slate-400 max-w-lg mx-auto md:mx-0 leading-relaxed font-light">
            I build scalable web applications and intelligent systems solving real-world problems. Fusing modern frontend design with robust backend technologies.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 justify-center md:justify-start">
            <a href="#projects" className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-white text-black text-sm font-medium hover:bg-purple-600 hover:text-white hover:border-purple-500 transition-all duration-300 flex items-center justify-center gap-2 group border border-transparent">
              View Projects
              <iconify-icon icon="solar:arrow-right-linear" width="18" className="group-hover:translate-x-1 transition-transform"></iconify-icon>
            </a>
            <a href="/assets/Resume.docx" download className="w-full sm:w-auto px-6 py-2.5 rounded-full glass-panel text-white text-sm font-medium hover:bg-blue-600 hover:text-white hover:border-blue-500 transition-all duration-300 flex items-center justify-center gap-2 border border-white/10">
              <iconify-icon icon="solar:document-linear" width="18"></iconify-icon>
              Download Resume
            </a>
          </div>
        </div>

        {/* RIGHT SIDE: 3D Parallax Card */}
        <div className="flex-1 hidden reveal reveal-delay-2 lg:block relative gap-x-12 gap-y-12">
          
          {/* 3D Camera Wrapper */}
          <div className="group relative w-full max-w-[400px] mx-auto [perspective:1500px]">
            
            {/* Main Card Container */}
            <div className="aspect-[4/5] bg-[#0A0A0A] border-white/10 border rounded-[32px] relative shadow-2xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateX(13deg)_translateY(-3%)] group-hover:shadow-purple-500/20 group-hover:border-purple-500/30 animate-fade-in">
              
              {/* LAYER 0: Background */}
              <div className="absolute inset-0 z-0 overflow-hidden rounded-[32px]">
                <img src="/assets/card_img2.png" alt="Prateek Debnath Background" className="w-full h-full object-cover animate-scale-in transition-transform duration-1000 group-hover:scale-105 filter brightness-[0.85] contrast-[1.1] grayscale-[0.1]" />
                <div className="bg-gradient-to-b from-black/40 via-transparent to-black/90 absolute inset-0"></div>
                <div className="bg-gradient-to-t from-[#03040b] via-[#03040b]/40 to-transparent opacity-90 absolute inset-0"></div>
                <div className="bg-gradient-to-t from-purple-500/30 to-transparent mix-blend-overlay w-3/4 h-1/2 absolute right-0 bottom-0 blur-2xl"></div>
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>
              </div>
              
              {/* Top UI (@prateekdebnath) */}
              <div className="flex z-20 pt-6 pr-6 pb-6 pl-6 absolute top-0 right-0 left-0 items-start justify-between">
                <div className="flex flex-col gap-1 animate-slide-down delay-200">
                  <div className="flex gap-2 hover:bg-black/60 transition-colors cursor-default bg-black/40 border-white/10 border rounded-full pt-1.5 pr-3 pb-1.5 pl-3 backdrop-blur-md items-center">
                    <div className="relative w-2 h-2">
                      <span className="absolute inline-flex h-full w-full rounded-full bg-purple-500 opacity-75 animate-ping"></span>
                    </div>
                    <span className="text-xs font-semibold text-slate-200 tracking-tight font-display">@prateekdebnath</span>
                  </div>
                </div>
                <div className="animate-slide-down delay-300">
                  <a href="#" className="w-10 h-10 rounded-full border border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-center text-white/80 hover:bg-white/10 hover:text-white hover:scale-110 transition-all duration-300 group/icon">
                    <iconify-icon icon="solar:link-circle-linear" width="20" className="transition-transform group-hover/icon:rotate-45"></iconify-icon>
                  </a>
                </div>
              </div>

              {/* LAYER 1: TEXT (z-20) - Locked flat against background */}
              <div className="absolute bottom-[115px] left-0 right-0 px-6 z-20 flex flex-col items-center pointer-events-none">
                <div className="flex flex-col items-center text-center -space-y-2 w-full [transform:translateZ(0px)]">
                  <h1 className="font-display text-[3.5rem] leading-[0.9] font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 animate-slide-up delay-400 drop-shadow-2xl">PRATEEK</h1>
                  <h2 className="text-[2.25rem] leading-[0.9] animate-slide-up delay-500 font-bold text-purple-500 tracking-tighter font-display relative drop-shadow-[0_4px_24px_rgba(139,92,246,0.4)] translate-y-1">
                    DEBNATH
                    <div className="absolute inset-0 bg-purple-500 blur-3xl opacity-20 -z-10"></div>
                  </h2>
                  <div className="flex animate-slide-up delay-700 mt-4 translate-y-3 gap-x-3 gap-y-3 items-center">
                    <span className="h-[1px] w-8 bg-gradient-to-r from-transparent to-white/40"></span>
                    <p className="text-sm font-medium text-white/60 tracking-widest uppercase font-display">Developer & ML</p>
                    <span className="h-[1px] w-8 bg-gradient-to-l from-transparent to-white/40"></span>
                  </div>
                </div>
              </div>

              {/* LAYER 2: CUTOUT IMAGE (z-30) - Pops out in front of text */}
              <div className="absolute inset-0 z-[30] pointer-events-none [clip-path:inset(-100%_0_0_0_round_32px)]">
                <img 
                  src="/assets/card_img2_cutout.png" 
                  alt="Prateek Cutout" 
                  className="absolute bottom-0 left-1/2 origin-bottom w-[210%] max-w-none opacity-0 transition-all duration-500 will-change-transform backface-hidden [transform:translate3d(-50%,0,0)_rotateX(0deg)] group-hover:opacity-100 group-hover:[transform:translate3d(-50%,0,70px)_rotateX(-0deg)_scale(1.02)]"
                />
              </div>

              {/* LAYER 3: EMAIL BOX (z-40) - Pops out in front of the image */}
              <div className="absolute bottom-0 left-0 right-0 p-6 pb-8 z-40 [transform-style:preserve-3d] pointer-events-none">
                <div className="w-full animate-slide-up delay-700 relative transition-all duration-500 will-change-transform [transform:translate3d(0,0,0)_rotateX(0deg)] group-hover:[transform:translate3d(0,-10px,90px)_rotateX(-12deg)] pointer-events-auto">
                  <div className="relative group/card cursor-pointer overflow-hidden rounded-2xl bg-[#1a1a1a]/60 backdrop-blur-xl border border-white/10 hover:bg-[#252525]/80 transition-all duration-300 hover:border-purple-500/30 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]">
                    <div className="absolute inset-0 -translate-x-full group-hover/card:animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/5 to-transparent z-0"></div>
                    <div className="relative z-10 flex items-center justify-between p-2 pl-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-black to-neutral-800 flex items-center justify-center shadow-lg group-hover/card:scale-105 transition-transform duration-300 border border-white/10">
                          <iconify-icon icon="solar:letter-linear" width="20" className="text-white"></iconify-icon>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-xs font-semibold text-white tracking-tight group-hover/card:text-purple-400 transition-colors">prateekdn77.com</span>
                          <span className="text-[10px] text-white/40 group-hover/card:text-white/60">Email</span>
                        </div>
                      </div>
                      <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center group-hover/card:bg-white group-hover/card:border-white transition-all duration-300">
                        <a href="mailto:prateekdn77@gmail.com" className="w-full h-full flex items-center justify-center">
                          <iconify-icon icon="solar:arrow-right-linear" width="20" className="text-white group-hover/card:text-black group-hover/card:-rotate-45 transition-all duration-300"></iconify-icon>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* LAYER 4: Final Glass Overlay */}
              <div className="bg-gradient-to-tr from-white/5 via-transparent to-transparent opacity-50 absolute inset-0 rounded-[32px] pointer-events-none z-50"></div>

            </div>
          </div>
        </div>
      </div>

      <div className="-translate-x-1/2 flex flex-col gap-2 opacity-50 absolute bottom-8 left-1/2 gap-x-12 gap-y-12 items-center">
        <span className="text-[10px] uppercase tracking-widest font-medium text-slate-400">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white to-transparent"></div>
      </div>
    </section>
  );
}