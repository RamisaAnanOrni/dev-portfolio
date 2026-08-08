import { motion, useInView } from "framer-motion";
import { useRef } from "react";
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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="how-i-build" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">
            How I <span className="text-gradient">Build</span>
          </h2>
          <p className="section-subheading mx-auto">
            A simple process I follow from idea to shipped, maintainable work
          </p>
        </motion.div>

        <div className="relative">
          <div className="pointer-events-none absolute top-[2.75rem] left-[8%] right-[8%] h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent hidden xl:block" />

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-6">
            {steps.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 32 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                className="skill-card group h-full p-6 flex flex-col relative"
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
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowIBuildSection;
