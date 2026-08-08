const experiences = [
  {
    role: "Full Stack Developer Intern",
    company: "AgriCore",
    period: "April 2026 — Present",
    summary:
      "Full-stack product engineering on browser-based video consultation features. Integrating Cloudflare RealtimeKit REST APIs with Django REST Framework and Next.js — building secure meeting, participant, and token flows, shipping responsive React interfaces, and contributing ERD design and module documentation inside a collaborative Git workflow.",
    tech: [
      "React",
      "Next.js",
      "Django",
      "REST APIs",
      "RealtimeKit",
      "ERD Design",
      "Git",
    ],
  },
  {
    role: "Business Analyst Intern",
    company: "Synesis IT PLC",
    period: "August 2025 — November 2025",
    summary:
      "Requirements and documentation work on government-related programs. Drafting and reviewing official project documents for accuracy and compliance, mapping process flows and system docs, and aligning stakeholders so business needs translate cleanly into system design.",
    tech: [
      "Requirements Analysis",
      "Process Flows",
      "Documentation",
      "Stakeholder Alignment",
      "System Design",
      "Compliance",
    ],
  },
  {
    role: "Web Developer Intern",
    company: "Dream71 Bangladesh Ltd.",
    period: "May 2025 — July 2025",
    summary:
      "Front-end focused engineering on responsive web pages with HTML, CSS, and JavaScript. Supporting technical documentation for clarity and maintainability, analyzing system architecture, and implementing features that moved project goals forward.",
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "Responsive UI",
      "Technical Docs",
      "System Architecture",
    ],
  },
];

const MetaBlock = ({
  job,
  align,
}: {
  job: (typeof experiences)[number];
  align: "left" | "right";
}) => (
  <div
    className={`flex flex-col justify-start ${
      align === "right"
        ? "md:items-end md:text-right md:pr-12"
        : "md:items-start md:text-left md:pl-12"
    }`}
  >
    <p className="text-primary text-xs font-semibold tracking-[0.2em] uppercase mb-2">
      {job.period}
    </p>
    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-1">
      {job.company}
    </h3>
  </div>
);

const DetailsBlock = ({
  job,
  pad,
}: {
  job: (typeof experiences)[number];
  pad: "left" | "right";
}) => (
  <div className={pad === "left" ? "md:pl-12" : "md:pr-12"}>
    <div className="skill-card p-5 md:p-6">
      <p className="text-sm md:text-[15px] text-muted-foreground leading-relaxed mb-5">
      <p className="text-primary text-xs font-semibold tracking-[0.2em] uppercase mb-2">{job.role}</p>
        {job.summary}
      </p>
      <div className="flex flex-wrap gap-2">
        {job.tech.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-border/60 bg-secondary/40 px-3 py-1 text-xs font-medium text-muted-foreground"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div data-reveal className="text-center mb-16">
          <h2 className="section-heading">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="section-subheading mx-auto">
            Internships where I built, analyzed, and shipped real product work
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-border/60 overflow-hidden">
            <div
              data-timeline-line
              className="w-full h-full origin-top scale-y-0 bg-gradient-to-b from-primary via-accent to-primary"
            />
          </div>

          <div className="space-y-14 md:space-y-20">
            {experiences.map((job, index) => {
              const reversed = index % 2 === 1;

              return (
                <article
                  key={job.company}
                  data-timeline-item
                  className="relative grid md:grid-cols-2 gap-6 md:gap-12 pl-12 md:pl-0"
                >
                  <span
                    data-timeline-dot
                    className="absolute left-4 md:left-1/2 top-3 z-10 h-3.5 w-3.5 -translate-x-1/2 rounded-full border-2 border-primary bg-background shadow-[0_0_16px_hsl(41_76%_60%/0.45)] scale-0"
                    aria-hidden
                  />

                  {/* Mobile: always meta then details. Desktop: alternate sides */}
                  <div
                    data-timeline-from={reversed ? "right" : "left"}
                    className={reversed ? "md:order-2" : "md:order-1"}
                  >
                    <MetaBlock job={job} align={reversed ? "left" : "right"} />
                  </div>

                  <div
                    data-timeline-from={reversed ? "left" : "right"}
                    className={reversed ? "md:order-1" : "md:order-2"}
                  >
                    <DetailsBlock
                      job={job}
                      pad={reversed ? "right" : "left"}
                    />
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
