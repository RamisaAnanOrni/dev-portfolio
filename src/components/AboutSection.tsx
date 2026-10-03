import { Zap, ShieldCheck, Target, GraduationCap } from "lucide-react";

const education = [
  {
    degree: "B.Sc. in Computer Science and Engineering",
    school: "BRAC University",
    location: "Dhaka",
    detail: "CGPA: 3.5+",
  },
  {
    degree: "Higher Secondary Certificate (H.S.C)",
    school: "BAF Shaheen College",
    location: "Dhaka",
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
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-heading">
            Who You're <span className="text-gradient">Hiring</span>
          </h2>
          <p className="section-subheading mx-auto">
            Building useful systems with clarity and intent
          </p>
        </div>

        <div
          data-reveal-stagger
          className="grid lg:grid-cols-[1.35fr_1fr] gap-8 lg:gap-10 items-start"
        >
          <div className="space-y-6">
            <div className="skill-card p-6 md:p-7">
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
            </div>

            <div className="skill-card p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center border border-primary/20">
                  <GraduationCap size={18} />
                </div>
                <p className="text-primary text-xs font-semibold tracking-[0.18em] uppercase">
                  Education
                </p>
              </div>
              <div className="space-y-5">
                {education.map((item) => (
                  <div
                    key={item.degree}
                    className="pl-4 border-l border-primary/30"
                  >
                    <h4 className="text-sm font-semibold text-foreground mb-1">
                      {item.degree}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {item.school}{" "}
                      <span className="text-primary/80">| {item.location}</span>
                    </p>
                    {item.detail ? (
                      <p className="text-xs text-primary mt-1.5 font-medium">
                        {item.detail}
                      </p>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>

            <div className="skill-card p-6">
              <p className="text-primary text-xs font-semibold tracking-[0.18em] uppercase mb-3">
                Working Style
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                I like clarity over noise — understand the need, design the
                system, build carefully, test what matters, and document so the
                next person can move with confidence.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div>
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
            </div>

            <div>
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
