export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav transition-all duration-300">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#home" className="font-display text-lg font-medium tracking-tight text-white flex items-center gap-2 group">
          <span className="w-1.5 h-1.5 bg-purple-500 rounded-full group-hover:shadow-[0_0_10px_#8b5cf6] transition-all"></span>
          PD
        </a>
        <div className="hidden md:flex items-center space-x-8 text-xs font-medium tracking-wide text-slate-400">
          <a href="#about" className="nav-link relative hover:text-white transition-colors py-1">About</a>
          <a href="#skills" className="nav-link relative hover:text-white transition-colors py-1">Skills</a>
          <a href="#projects" className="nav-link relative hover:text-white transition-colors py-1">Projects</a>
          <a href="#experience" className="nav-link relative hover:text-white transition-colors py-1">Experience</a>
        </div>
        <a href="https://www.linkedin.com/in/prateek-debnath-744453330" target="_blank" rel="noopener noreferrer" className="hidden md:flex items-center gap-2 text-xs font-medium text-white glass-panel px-4 py-1.5 rounded-full hover:bg-purple-600 hover:text-white hover:border-purple-500 transition-all duration-300 border border-white/10">
          Let's Talk
        </a>
        <button className="md:hidden text-slate-300 hover:text-white">
          <iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
        </button>
      </div>
    </nav>
  );
}