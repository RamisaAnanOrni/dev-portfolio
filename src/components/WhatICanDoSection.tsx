import {
  Layers,
  Cable,
  LayoutPanelLeft,
  FileSearch,
} from "lucide-react";

const capabilities = [
  {
    icon: Layers,
    title: "Full-Stack Development",
    description:
      "Build end-to-end web apps with React, Next.js, Django, and FastAPI — from clean APIs to polished, reusable UI.",
  },
  {
    icon: Cable,
    title: "API & Realtime Systems",
    description:
      "Integrate secure REST and realtime services, including browser-based video flows with tokenized participant access.",
  },
  {
    icon: LayoutPanelLeft,
    title: "Responsive Interfaces",
    description:
      "Craft clear, maintainable frontends that stay fast and usable across devices, with a focus on UX and component design.",
  },
  {
    icon: FileSearch,
    title: "Analysis & Documentation",
    description:
      "Translate business needs into ERDs, process flows, and requirements that keep stakeholders and engineering aligned.",
  },
];

const WhatICanDoSection = () => {
  return (
    <section id="capabilities" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div data-reveal className="text-center mb-16">
          <h2 className="section-heading">
            What I <span className="text-gradient">Can Do</span>
          </h2>
          <p className="section-subheading mx-auto">
            Practical strengths shaped by internships, product work, and
            building real systems
          </p>
        </div>

        <div
          data-reveal-stagger
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6"
        >
          {capabilities.map((item) => (
            <div
              key={item.title}
              className="skill-card group h-full p-6 flex flex-col"
              data-cursor="grow"
            >
              <div className="mb-5 w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center border border-primary/20 group-hover:bg-primary/15 transition-colors">
                <item.icon size={22} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatICanDoSection;
