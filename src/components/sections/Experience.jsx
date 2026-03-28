export default function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-semibold font-display tracking-tight text-white mb-12 text-center reveal">
          Journey & Achievements
        </h2>

        <div className="relative border-l border-white/10 ml-3 md:ml-0 md:space-y-12 space-y-8">
          <div className="relative pl-8 md:pl-0 reveal reveal-delay-1">
            <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-purple-500 border-4 border-[#03040b] z-10"></div>
            <div className="md:hidden absolute top-0 -left-[9px] w-4 h-4 rounded-full bg-purple-500 border-4 border-[#03040b]"></div>
            <div className="md:w-1/2 md:pr-12 md:text-right ml-auto md:ml-0">
              <span className="text-[10px] text-purple-400 font-mono tracking-widest uppercase mb-1 block">Continuous</span>
              <h3 className="text-lg font-medium text-white mb-2">Competitive Programming</h3>
              <p className="text-xs text-slate-400 font-light leading-relaxed mb-3">
                Actively solving algorithmic challenges to sharpen problem-solving skills and logic.
              </p>
              <div className="flex md:justify-end gap-3">
                <a href="#" className="flex items-center gap-1 text-xs text-slate-300 hover:text-white transition-colors border-b border-white/10 hover:border-white pb-0.5">
                  <iconify-icon icon="solar:code-circle-linear"></iconify-icon>
                  LeetCode
                </a>
                <a href="#" className="flex items-center gap-1 text-xs text-slate-300 hover:text-white transition-colors border-b border-white/10 hover:border-white pb-0.5">
                  <iconify-icon icon="solar:cup-first-linear"></iconify-icon>
                  Codeforces
                </a>
              </div>
            </div>
          </div>

          <div className="relative pl-8 md:pl-0 reveal reveal-delay-2">
            <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500 border-4 border-[#03040b] z-10"></div>
            <div className="md:hidden absolute top-0 -left-[9px] w-4 h-4 rounded-full bg-blue-500 border-4 border-[#03040b]"></div>
            <div className="md:w-1/2 md:pl-12 ml-auto">
              <span className="text-[10px] text-blue-400 font-mono tracking-widest uppercase mb-1 block">Recent</span>
              <h3 className="text-lg font-medium text-white mb-2">Hackathon Participations</h3>
              <p className="text-xs text-slate-400 font-light leading-relaxed mb-3">
                Collaborated in fast-paced environments to build prototypes, testing endurance and rapid development skills.
              </p>
              <span className="inline-block text-[10px] px-2 py-1 glass-panel rounded text-slate-300 border border-white/5">Various Events</span>
            </div>
          </div>

          <div className="relative pl-8 md:pl-0 reveal reveal-delay-3">
            <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-emerald-500 border-4 border-[#03040b] z-10"></div>
            <div className="md:hidden absolute top-0 -left-[9px] w-4 h-4 rounded-full bg-emerald-500 border-4 border-[#03040b]"></div>
            <div className="md:w-1/2 md:pr-12 md:text-right ml-auto md:ml-0">
              <span className="text-[10px] text-emerald-400 font-mono tracking-widest uppercase mb-1 block">Education</span>
              <h3 className="text-lg font-medium text-white mb-2">Certifications & Learning</h3>
              <p className="text-xs text-slate-400 font-light leading-relaxed mb-3">
                Completed specialized courses in React development, Machine Learning basics, and modern web architectures.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}