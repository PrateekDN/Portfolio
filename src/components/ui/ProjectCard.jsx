export default function ProjectCard({ data }) {
  return (
    <div className="group w-[320px] md:w-[380px] h-[480px] perspective-1000 cursor-pointer snap-center">
      <div className="relative w-full h-full transition-transform duration-700 transform-style-3d group-hover:rotate-y-180">
        
        <div className="absolute w-full h-full backface-hidden glass-panel border border-white/10 rounded-2xl overflow-hidden flex flex-col shadow-[0_0_30px_rgba(139,92,246,0.1)]">
          <div className="h-1/2 w-full bg-[#0a0a14] relative overflow-hidden flex items-center justify-center">
            {data.image ? (
              <>
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-80"
                  style={{ backgroundImage: `url(${data.image})` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a14] to-transparent"></div>
              </>
            ) : (
              <>
                <div className={`absolute inset-0 bg-gradient-to-br ${data.gradientLayer} to-transparent`}></div>
                <iconify-icon icon={data.iconLarge} width="64" className={data.iconColorLarge}></iconify-icon>
              </>
            )}
          </div>
          <div className="h-1/2 w-full p-6 flex flex-col justify-between bg-[#0a0a14]">
            <div>
              <h3 className="text-xl font-medium text-white mb-2 font-display tracking-tight">{data.title}</h3>
              <p className="text-xs text-slate-400 font-light line-clamp-2">{data.descriptionFront}</p>
            </div>
            <div className={`flex items-center gap-2 ${data.iconColor} text-xs font-medium`}>
              Flip to view details
              <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
            </div>
          </div>
        </div>

        <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-[#0f111a] border border-white/10 rounded-2xl overflow-hidden p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-medium text-white mb-4 font-display">{data.title}</h3>
            <ul className="space-y-2 text-xs text-slate-300 font-light mb-6">
              {data.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <iconify-icon icon="solar:check-circle-linear" className={`${data.iconColor} mt-0.5`}></iconify-icon>
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
                  className={`flex-1 text-xs font-medium py-2 rounded-lg text-center flex items-center justify-center gap-1 transition-colors ${link.type === 'primary' ? 'bg-white text-black hover:bg-slate-200' : 'glass-panel text-white hover:bg-white/10'}`}
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