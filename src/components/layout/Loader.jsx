export default function Loader({ visible }) {
  return (
    <div 
      id="loader" 
      className={`fixed inset-0 z-[100] bg-[#03040b] flex flex-col items-center justify-center transition-all duration-500 ${!visible ? 'opacity-0 invisible' : 'opacity-100 visible'}`}
    >
      <div className="font-display text-4xl font-medium tracking-tight text-white mb-4">
        MY PORTFOLIO
      </div>
      <div className="w-48 h-px bg-white/10 relative overflow-hidden">
        <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-transparent via-purple-500 to-transparent w-full animate-[scan_1.5s_ease-in-out_infinite]"></div>
      </div>
    </div>
  );
}