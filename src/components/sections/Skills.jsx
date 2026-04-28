import SkillAccordion from '../ui/SkillAccordion';

export default function Skills() {
  const skillsData = [
    {
      id: "frontend",
      bgImage: "/assets/frontend_bg.avif",
      gradient: "from-black/60", // Neutralized
      icon: "solar:monitor-smartphone-linear",
      iconColor: "text-white",
      titleVertical: "Frontend",
      titleHorizontal: "Frontend Dev",
      tags: ["React.js", "Next.js", "Tailwind CSS", "Framer Motion"]
    },
    {
      id: "languages",
      bgImage: "/assets/languages_bg.avif",
      gradient: "from-black/60", // Neutralized
      icon: "solar:code-square-linear",
      iconColor: "text-white",
      titleVertical: "Languages",
      titleHorizontal: "Programming",
      tags: ["C / C++", "Python", "JavaScript", "TypeScript"]
    },
    {
      id: "tools",
      bgImage: "/assets/tools_bg.avif",
      gradient: "from-black/60", // Neutralized
      icon: "solar:widget-linear",
      iconColor: "text-white",
      titleVertical: "Tools",
      titleHorizontal: "Dev Tools",
      tags: ["Git", "GitHub", "VS Code", "Figma"]
    },
    {
      id: "ml-backend",
      bgImage: "/assets/ml_bg2.jpg",
      gradient: "from-black/60", // Neutralized
      icon: "solar:cpu-bolt-linear",
      iconColor: "text-white",
      titleVertical: "ML & Backend",
      titleHorizontal: "Other Skills",
      description: "Exploring the intersection of web and intelligent systems.",
      tags: ["Machine Learning Basics", "REST APIs"]
    }
  ];

  return (
    <section id="skills" className="py-32 bg-[#0f0b0a] relative border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-16 reveal">
          <iconify-icon icon="solar:layers-linear" width="28" className="text-[#eab308]"></iconify-icon>
          <h2 className="text-lg font-black uppercase tracking-[0.2em] text-white">
            Technical Arsenal
          </h2>
        </div>
        
        {/* Accordion height increased for more drama */}
        <div className="flex flex-col md:flex-row h-[600px] gap-3 reveal reveal-delay-1">
          {skillsData.map((skill) => (
            <SkillAccordion key={skill.id} data={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}