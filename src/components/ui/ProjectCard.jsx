export default function ProjectCard({ data }) {
  return (
    <div className="group w-[320px] md:w-[380px] h-[480px] perspective-1000 cursor-pointer snap-center">
      <div className="relative w-full h-full transition-transform duration-700 transform-style-3d group-hover:rotate-y-180">
        
        {/* Updated: Removed Purple shadow, changed bg to new #0f0b0a style */}
        <div className="absolute w-full h-full backface-hidden glass-panel border border-white/10 rounded-2xl overflow-hidden flex flex-col shadow-2xl">
          <div className="h-1/2 w-full bg-[#121213] relative overflow-hidden flex items-center justify-center">
            {data.image ? (
              <>
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-80"
                  style={{ backgroundImage: `url(${data.image})` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0b0a] to-transparent"></div>
              </>
            ) : (
              <>
                <div className="absolute inset-0 bg-white/5"></div>
                <iconify-icon icon={data.iconLarge} width="64" className="text-white/20"></iconify-icon>
              </>
            )}
          </div>
          <div className="h-1/2 w-full p-6 flex flex-col justify-between bg-[#0f0b0a]">
            <div>
              <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-tight">{data.title}</h3>
              <p className="text-xs text-slate-400 font-light line-clamp-2">{data.descriptionFront}</p>
            </div>
            <div className={`flex items-center gap-2 text-white/40 text-xs font-medium`}>
              Flip to view details
              <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
            </div>
          </div>
        </div>

        {/* Updated Back: Changed #0f111a to #141110 (slightly lighter charcoal) */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-[#141110] border border-white/10 rounded-2xl overflow-hidden p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-bold text-white mb-4 uppercase">{data.title}</h3>
            <ul className="space-y-2 text-xs text-slate-300 font-light mb-6">
              {data.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <iconify-icon icon="solar:check-circle-linear" className="text-white/60 mt-0.5"></iconify-icon>
                  {feature}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2 mb-4">
              {data.tags.map((tag, idx) => (
                <span key={idx} className="text-[9px] px-2 py-1 rounded bg-white/5 text-slate-300 border border-white/5">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="flex gap-3">
            {data.links ? (
              data.links.map((link, idx) => (
                <a 
                  key={idx} 
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`flex-1 text-xs font-bold py-2 rounded-lg text-center flex items-center justify-center gap-1 transition-colors ${link.type === 'primary' ? 'bg-white text-black hover:bg-slate-200' : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'}`}
                >
                  {link.icon && <iconify-icon icon={link.icon}></iconify-icon>}
                  {link.label}
                </a>
              ))
            ) : (
              <div className="w-full glass-panel text-slate-400 text-xs font-medium py-2 rounded-lg text-center italic">
                {data.status}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}