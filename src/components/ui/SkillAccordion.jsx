export default function SkillAccordion({ data }) {
  return (
    <div className="group relative flex-accordion flex-1 hover:flex-[2] glass-panel rounded-xl overflow-hidden cursor-pointer border border-white/5">
      <img src={data.bgImage} alt={`${data.titleVertical} Background`} className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-700 group-hover:scale-105" />
      
      {/* Updated: Changed #03040b to #0f0b0a (Your new main color) */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#121213]/60 to-[#121213] z-0"></div>
      
      {/* Neutralized hover gradient to pure black for a cleaner look */}
      <div className={`absolute inset-0 bg-gradient-to-b from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0`}></div>

      <div className="absolute inset-0 p-6 flex flex-col justify-end transition-opacity duration-300 group-hover:opacity-0 z-10">
        <iconify-icon icon={data.icon} width="28" className="text-slate-500 mb-4 md:absolute md:top-6 md:right-6"></iconify-icon>
        <h3 className="text-base font-medium text-white uppercase tracking-tight md:rotate-[-90deg] md:origin-bottom-left md:translate-x-6 md:-translate-y-4 whitespace-nowrap font-display">
          {data.titleVertical}
        </h3>
      </div>

      <div className="absolute inset-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 flex flex-col justify-center z-10">
        <iconify-icon icon={data.icon} width="32" className="text-white mb-4"></iconify-icon>
        <h3 className="text-xl font-bold text-white tracking-tight mb-4 uppercase">
          {data.titleHorizontal}
        </h3>
        {data.description && (
          <p className="text-xs text-slate-400 mb-3 font-light">
            {data.description}
          </p>
        )}
        <div className="flex flex-wrap gap-2">
          {data.tags.map((tag, idx) => (
            <span key={idx} className="text-[10px] px-2 py-1 rounded-full bg-white/10 border border-white/10 text-white">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}