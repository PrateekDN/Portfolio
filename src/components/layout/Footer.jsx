export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 py-8 text-center relative z-10 bg-[#03040b]">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-slate-500 font-light">
          © <span>{year}</span> Prateek Debnath. All rights reserved.
        </p>
        <button 
          onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
          className="w-8 h-8 rounded-full glass-panel flex items-center justify-center text-slate-400 hover:text-white transition-colors border border-white/5 hover:bg-white/5"
        >
          <iconify-icon icon="solar:alt-arrow-up-linear"></iconify-icon>
        </button>
      </div>
    </footer>
  );
}