import SkillAccordion from '../ui/SkillAccordion';

export default function Skills() {
  const skillsData = [
    {
      id: "frontend",
      bgImage: "/assets/frontend_bg.avif",
      gradient: "from-blue-900/40",
      icon: "solar:monitor-smartphone-linear",
      iconColor: "text-blue-400",
      titleVertical: "Frontend",
      titleHorizontal: "Frontend Dev",
      tags: ["React.js", "Next.js", "Tailwind CSS", "Framer Motion"]
    },
    {
      id: "languages",
      bgImage: "/assets/languages_bg.avif",
      gradient: "from-purple-900/40",
      icon: "solar:code-square-linear",
      iconColor: "text-purple-400",
      titleVertical: "Languages",
      titleHorizontal: "Programming",
      tags: ["C / C++", "Python", "JavaScript", "TypeScript"]
    },
    {
      id: "tools",
      bgImage: "/assets/tools_bg.avif",
      gradient: "from-emerald-900/40",
      icon: "solar:widget-linear",
      iconColor: "text-emerald-400",
      titleVertical: "Tools",
      titleHorizontal: "Dev Tools",
      tags: ["Git", "GitHub", "VS Code", "Figma"]
    },
    {
      id: "ml-backend",
      bgImage: "/assets/ml_bg2.jpg",
      gradient: "from-rose-900/40",
      icon: "solar:cpu-bolt-linear",
      iconColor: "text-rose-400",
      titleVertical: "ML & Backend",
      titleHorizontal: "Other Skills",
      description: "Exploring the intersection of web and intelligent systems.",
      tags: ["Machine Learning Basics", "REST APIs"]
    }
  ];

  return (
    <section id="skills" className="py-24 border-y border-white/5 relative bg-white/[0.01]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-12 reveal">
          <iconify-icon icon="solar:layers-linear" width="24" className="text-purple-500"></iconify-icon>
          <h2 className="text-sm font-medium tracking-widest text-slate-400 uppercase font-display">
            Technical Arsenal
          </h2>
        </div>
        <div className="flex flex-col md:flex-row h-[500px] gap-2 reveal reveal-delay-1">
          {skillsData.map((skill) => (
            <SkillAccordion key={skill.id} data={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}