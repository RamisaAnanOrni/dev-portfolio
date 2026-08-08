import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, ShieldCheck, Target } from "lucide-react";

const stats = [
  {
    value: "3",
    label: "internships across product, analysis, and engineering",
  },
  {
    value: "3",
    label: "featured projects spanning web, commerce, and IoT",
  },
  {
    value: "2026",
    label: "building production-facing full-stack features",
  },
];

const philosophy = [
  {
    icon: Target,
    title: "Detail-Oriented Delivery",
    description:
      "Every feature should be intentional — clear in purpose, clean in structure, and ready to extend.",
  },
  {
    icon: Zap,
    title: "Learn by Building",
    description:
      "I adapt quickly, take on harder problems, and grow through real shipping cycles.",
  },
  {
    icon: ShieldCheck,
    title: "Collaborative Impact",
    description:
      "Strong communication, stakeholder alignment, and code that helps the whole team move faster.",
  },
];

const priorities = [
  "Growing as a full-stack engineer through production-facing work",
  "Strengthening system design and maintainable architecture habits",
  "Creating lasting impact through clean, purposeful delivery",
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">
            Who You're <span className="text-gradient">Hiring</span>
          </h2>
          <p className="section-subheading mx-auto">
            Building useful systems with clarity and intent
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1.35fr_1fr] gap-8 lg:gap-10 items-start">
          {/* Left column */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="skill-card p-6 md:p-7"
            >
              <div className="flex items-start gap-4 mb-5">
                <div className="w-16 h-16 rounded-xl border border-primary/30 bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="text-xl font-bold text-primary tracking-tight">
                    RO
                  </span>
                </div>
                <div>
                  <p className="text-primary text-xs font-medium tracking-wider mb-1">
                    // IDENTITY
                  </p>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground">
                    Ramisa Anan Orni
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1 italic">
                    "Crafting mind and body — building systems that last."
                  </p>
                </div>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                Currently a Full Stack Developer Intern at{" "}
                <span className="text-primary">AgriCore</span>, with prior
                experience as a Business Analyst Intern at Synesis IT PLC and a
                Web Developer Intern at Dream71 Bangladesh Ltd. I work across
                frontend, backend, and documentation to ship reliable product
                features.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border/50">
                <div>
                  <p className="text-[11px] uppercase tracking-wider text-muted-foreground mb-1">
                    Location
                  </p>
                  <p className="text-sm font-medium text-foreground">
                    Bangladesh
                  </p>
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-wider text-muted-foreground mb-1">
                    Status
                  </p>
                  <p className="text-sm font-medium text-primary">Active</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.18 }}
              className="grid sm:grid-cols-3 gap-3"
            >
              {stats.map((stat) => (
                <div key={stat.value + stat.label} className="skill-card p-4">
                  <p className="text-2xl font-bold text-gradient mb-2">
                    {stat.value}
                  </p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.34 }}
              className="skill-card p-6"
            >
              <p className="text-primary text-xs font-semibold tracking-[0.18em] uppercase mb-3">
                Working Style
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                I like clarity over noise — understand the need, design the
                system, build carefully, test what matters, and document so the
                next person can move with confidence.
              </p>
            </motion.div>
          </div>

          {/* Right column */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="text-primary text-xs font-semibold tracking-[0.18em] uppercase mb-3">
                // Core Philosophy
              </p>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6 leading-tight">
                Engineering with{" "}
                <span className="text-primary">intentionality</span>
              </h3>
              <div className="space-y-4">
                {philosophy.map((item) => (
                  <div
                    key={item.title}
                    className="flex items-start gap-4 skill-card p-4"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0 border border-primary/20">
                      <item.icon size={18} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground text-sm mb-1">
                        {item.title}
                      </h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.28 }}
            >
              <p className="text-primary text-xs font-semibold tracking-[0.18em] uppercase mb-3">
                Current Priorities
              </p>
              <div className="space-y-2.5">
                {priorities.map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-border/50 bg-card/40 px-4 py-3 text-sm text-muted-foreground leading-relaxed hover:border-primary/30 hover:bg-card/60 transition-colors"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
