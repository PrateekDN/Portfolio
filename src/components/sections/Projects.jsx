import ProjectCard from '../ui/ProjectCard';

export default function Projects() {
  const projectsData = [
    {
      id: "tea-sphere",
      title: "Tea-Sphere",
      image: "/assets/tea_sphere.png",
      descriptionFront: "An ML-based tea disease detection system integrating computer vision to assist farmers in identifying plant health issues.",
      features: [
        "Custom CNN model for image classification.",
        "User-friendly web interface for image upload.",
        "Real-time inference and result generation."
      ],
      tags: ["Python", "TensorFlow", "React"],
      links: [
        { label: "Live Demo", url: "https://folium-ai.vercel.app", type: "primary" },
        { label: "Code", url: "https://github.com/PrateekDN/FoliumAI.git", type: "secondary", icon: "solar:github-linear" }
      ],
      iconColor: "text-purple-400"
    },
    {
      id: "task-flow",
      title: "Task Flow Pro",
      iconLarge: "solar:layers-linear",
      iconColorLarge: "text-blue-500/50",
      gradientLayer: "from-blue-900/20",
      descriptionFront: "A comprehensive React-based productivity application with drag-and-drop functionality and state management.",
      features: [
        "Complex global state management.",
        "Smooth drag and drop interfaces.",
        "Local storage synchronization."
      ],
      tags: ["React", "Tailwind", "Zustand"],
      status: "In Development",
      iconColor: "text-blue-400"
    },
    {
      id: "desktop-ai",
      title: "Desktop AI Assistant",
      iconLarge: "solar:display-linear",
      iconColorLarge: "text-emerald-500/50",
      gradientLayer: "from-emerald-900/20",
      descriptionFront: "An AI-powered assistant capable of conversational interaction, task automation, and intelligent decision support.",
      features: [
        "Natural language interaction (voice + text)",
        "API-driven real-time responses",
        "Context-aware AI with memory handling"
      ],
      tags: ["JavaScript", "Node.js", "OpenAI Whisper API"],
      status: "In Development",
      iconColor: "text-emerald-400"
    }
  ];

  return (
    <section id="projects" className="overflow-hidden pt-24 pb-24 relative gap-x-12 gap-y-12">
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/20 to-transparent z-0"></div>
      <div className="max-w-6xl mx-auto px-6 mb-12 reveal relative z-10">
        <h2 className="text-3xl font-semibold font-display tracking-tight text-white mb-4">Featured Projects</h2>
        <p className="text-sm text-slate-400 font-light">Interactive cards. Hover or tap to flip and view details.</p>
      </div>
      <div className="w-full overflow-x-auto pb-16 px-6 scrollbar-hide snap-x snap-mandatory reveal reveal-delay-1 relative z-10">
        <div className="flex gap-6 w-max mx-auto md:mx-0 md:px-6">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} data={project} />
          ))}
        </div>
      </div>
    </section>
  );
}