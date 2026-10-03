import {
  ExternalLink,
  Github,
  BookOpen,
  ShoppingBag,
  Watch,
  ChefHat,
} from "lucide-react";

const projects = [
  {
    title: "Bookshop Management System",
    description:
      "Designed a robust online bookshop management system utilizing PHP and MySQL, enhancing operational efficiency through streamlined inventory management, order processing, and sales tracking.",
    tags: ["PHP", "MySQL", "Inventory", "Full-Stack"],
    icon: BookOpen,
    featured: true,
    links: {
      github: null as string | null,
      demo: null as string | null,
    },
  },
  {
    title: "KenaBecha",
    description:
      "An e-commerce website developed as a fully functional platform using Laravel, PHP, and MySQL — integrating product listings, user authentication, shopping cart, and payment systems.",
    tags: ["Laravel", "PHP", "MySQL", "E-commerce"],
    icon: ShoppingBag,
    featured: true,
    links: {
      github: null as string | null,
      demo: null as string | null,
    },
  },
  {
    title: "Smart Watch Using Arduino",
    description:
      "Built an Arduino-based smartwatch using C/C++, integrating temperature and pulse sensors for real-time health monitoring and data logging.",
    tags: ["Arduino", "C/C++", "IoT", "Sensors"],
    icon: Watch,
    featured: false,
    links: {
      github: null as string | null,
      demo: null as string | null,
    },
  },
  {
    title: "Recipe Sharing App",
    description:
      "Building an offline-first React Native application for preserving and sharing family recipes through voice memories, media storage, and a seamless cooking experience powered by Expo and Supabase.",
    tags: ["React Native", "Expo", "Supabase", "Mobile"],
    icon: ChefHat,
    featured: true,
    links: {
      github: null as string | null,
      demo: null as string | null,
    },
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-heading">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="section-subheading mx-auto">
            Web, mobile, and hardware builds — from commerce systems to
            offline-first apps
          </p>
        </div>

        <div data-reveal-stagger className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="project-card">
              <div className="p-6 md:p-8">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary glow-effect-sm">
                      <project.icon size={24} />
                    </div>
                    {project.featured && (
                      <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/20 text-primary">
                        Featured
                      </span>
                    )}
                  </div>
                  {(project.links.github || project.links.demo) && (
                    <div className="flex gap-2">
                      {project.links.github && (
                        <a
                          href={project.links.github}
                          className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 text-muted-foreground hover:text-foreground transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github size={18} />
                        </a>
                      )}
                      {project.links.demo && (
                        <a
                          href={project.links.demo}
                          className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink size={18} />
                        </a>
                      )}
                    </div>
                  )}
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-muted-foreground transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="h-1 bg-gradient-to-r from-accent/40 via-primary to-accent/40" />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://github.com/RamisaAnanOrni"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex items-center gap-2"
          >
            <Github size={18} />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
