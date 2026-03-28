export default function About() {
  return (
    <section className="z-10 pt-24 pb-24 relative gap-x-12 gap-y-12" id="about">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl font-semibold font-display tracking-tight text-white mb-4">About Me</h2>
          <p className="text-sm text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
            A passionate developer focused on building modern web apps using React and backend technologies, with a strong interest in integrating machine learning solutions to solve complex problems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 reveal reveal-delay-1">
          <div className="glass-panel p-6 rounded-2xl hover:bg-white/[0.04] transition-colors border border-white/5">
            <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center mb-4 border border-blue-500/20">
              <iconify-icon icon="solar:lightbulb-bolt-linear" width="20" className="text-blue-400"></iconify-icon>
            </div>
            <h3 className="text-base font-medium text-white mb-2">Problem Solving</h3>
            <p className="text-xs text-slate-400 leading-relaxed font-light">
              Approaching challenges with a logical mindset, optimizing algorithms, and engineering efficient solutions.
            </p>
          </div>

          <div className="glass-panel p-6 rounded-2xl hover:bg-white/[0.04] transition-colors border border-white/5 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative z-10">
              <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center mb-4 border border-purple-500/20">
                <iconify-icon icon="solar:book-bookmark-linear" width="20" className="text-purple-400"></iconify-icon>
              </div>
              <h3 className="text-base font-medium text-white mb-2">Continuous Learning</h3>
              <p className="text-xs text-slate-400 leading-relaxed font-light">
                Always exploring new frameworks, languages, and paradigms to stay at the cutting edge of tech.
              </p>
            </div>
          </div>

          <div className="glass-panel p-6 rounded-2xl hover:bg-white/[0.04] transition-colors border border-white/5">
            <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center mb-4 border border-emerald-500/20">
              <iconify-icon icon="solar:rocket-linear" width="20" className="text-emerald-400"></iconify-icon>
            </div>
            <h3 className="text-base font-medium text-white mb-2">Real-world Impact</h3>
            <p className="text-xs text-slate-400 leading-relaxed font-light">
              Translating ideas into functional, scalable products that provide tangible value to users.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}