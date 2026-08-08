import {
  MessageSquareText,
  PenTool,
  Code2,
  FlaskConical,
  GitBranch,
} from "lucide-react";

const steps = [
  {
    icon: MessageSquareText,
    step: "01",
    title: "Understand the Need",
    description:
      "Gather requirements with stakeholders, clarify goals, and map the real problem before writing code.",
  },
  {
    icon: PenTool,
    step: "02",
    title: "Design the System",
    description:
      "Sketch ERDs, flows, and architecture so modules stay clear, scalable, and easy to extend.",
  },
  {
    icon: Code2,
    step: "03",
    title: "Build & Integrate",
    description:
      "Ship responsive UI and solid backends — APIs, auth, realtime features — with reusable components.",
  },
  {
    icon: FlaskConical,
    step: "04",
    title: "Test & Validate",
    description:
      "Verify flows, catch edge cases, and validate integrations so features work reliably before release.",
  },
  {
    icon: GitBranch,
    step: "05",
    title: "Document & Deliver",
    description:
      "Keep docs, version control, and reviews tight so the product stays maintainable for the team.",
  },
];

const HowIBuildSection = () => {
  return (
    <section id="how-i-build" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div data-reveal className="text-center mb-16">
          <h2 className="section-heading">
            How I <span className="text-gradient">Build</span>
          </h2>
          <p className="section-subheading mx-auto">
            A simple process I follow from idea to shipped, maintainable work
          </p>
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute top-[2.75rem] left-[8%] right-[8%] h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent hidden xl:block" />

          <div
            data-reveal-stagger
            className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-6"
          >
            {steps.map((item) => (
              <div
                key={item.title}
                className="skill-card group h-full p-6 flex flex-col relative"
                data-cursor="grow"
              >
                <span className="absolute top-4 right-4 text-xs font-semibold tracking-wider text-primary/50">
                  {item.step}
                </span>
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
      </div>
    </section>
  );
};

export default HowIBuildSection;
