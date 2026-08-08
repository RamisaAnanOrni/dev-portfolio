import { Hammer, RefreshCw, BookOpen, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: Hammer,
    title: "Build",
    description: "Start with an idea and bring it to life through code",
    color: "text-primary",
  },
  {
    icon: RefreshCw,
    title: "Break",
    description: "Push boundaries, find limits, and understand failures",
    color: "text-accent",
  },
  {
    icon: BookOpen,
    title: "Learn",
    description: "Extract insights and apply them to the next iteration",
    color: "text-[hsl(261_42%_78%)]",
  },
];

const BuilderSection = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-heading">
            Builder <span className="text-gradient">Mindset</span>
          </h2>
          <p className="section-subheading mx-auto">
            My approach to learning and growing as a developer
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent hidden md:block" />

          <div
            data-reveal-stagger
            className="grid md:grid-cols-3 gap-8 relative"
          >
            {steps.map((step, index) => (
              <div key={step.title} className="relative">
                <div className="skill-card p-8 text-center relative">
                  <div
                    className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-card flex items-center justify-center border border-border glow-effect-sm ${step.color}`}
                  >
                    <step.icon size={28} />
                  </div>

                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">{step.description}</p>

                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden md:flex absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="text-primary" size={24} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 max-w-3xl mx-auto text-center">
          <div className="skill-card p-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />

            <p className="text-lg md:text-xl text-muted-foreground relative z-10 leading-relaxed">
              "I experiment with ideas, iterate on systems, and learn deeply by
              rebuilding. Every line of code is a step toward understanding how
              things work at their core."
            </p>
            <div className="mt-6 flex items-center justify-center gap-2 text-primary">
              <span className="w-12 h-0.5 bg-primary/30" />
              <span className="text-sm font-medium">Continuous Growth</span>
              <span className="w-12 h-0.5 bg-primary/30" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuilderSection;
