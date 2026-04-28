export default function About() {
  return (
    <section className="relative pt-32 pb-32 bg-[#0f0b0a]" id="about">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20 reveal">
          <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter text-white mb-6">
            About Me
          </h2>
          <p className="text-base text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
            A passionate developer focused on building modern web apps using React and backend technologies, 
            with a strong interest in integrating machine learning solutions to solve complex problems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 reveal reveal-delay-1">
          {/* Item 1 */}
          <div className="glass-panel p-8 rounded-2xl hover:bg-white/[0.03] transition-all duration-500 border border-white/5 group">
            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 border border-white/10 group-hover:border-[#eab308]/50 transition-colors">
              <iconify-icon icon="solar:lightbulb-bolt-linear" width="24" className="text-white group-hover:text-[#eab308] transition-colors"></iconify-icon>
            </div>
            <h3 className="text-lg font-bold text-white mb-3 uppercase tracking-tight">Problem Solving</h3>
            <p className="text-sm text-slate-400 leading-relaxed font-light">
              Approaching challenges with a logical mindset, optimizing algorithms, and engineering efficient solutions.
            </p>
          </div>

          {/* Item 2 */}
          <div className="glass-panel p-8 rounded-2xl hover:bg-white/[0.03] transition-all duration-500 border border-white/5 group">
            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 border border-white/10 group-hover:border-[#eab308]/50 transition-colors">
              <iconify-icon icon="solar:book-bookmark-linear" width="24" className="text-white group-hover:text-[#eab308] transition-colors"></iconify-icon>
            </div>
            <h3 className="text-lg font-bold text-white mb-3 uppercase tracking-tight">Continuous Learning</h3>
            <p className="text-sm text-slate-400 leading-relaxed font-light">
              Always exploring new frameworks, languages, and paradigms to stay at the cutting edge of tech.
            </p>
          </div>

          {/* Item 3 */}
          <div className="glass-panel p-8 rounded-2xl hover:bg-white/[0.03] transition-all duration-500 border border-white/5 group">
            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 border border-white/10 group-hover:border-[#eab308]/50 transition-colors">
              <iconify-icon icon="solar:rocket-linear" width="24" className="text-white group-hover:text-[#eab308] transition-colors"></iconify-icon>
            </div>
            <h3 className="text-lg font-bold text-white mb-3 uppercase tracking-tight">Real-world Impact</h3>
            <p className="text-sm text-slate-400 leading-relaxed font-light">
              Translating ideas into functional, scalable products that provide tangible value to users.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}