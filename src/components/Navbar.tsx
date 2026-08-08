import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles } from "lucide-react";

const navLinks = [
  { href: "#home", label: "Home", id: "home" },
  { href: "#about", label: "About", id: "about" },
  { href: "#skills", label: "Skills", id: "skills" },
  { href: "#experience", label: "Experience", id: "experience" },
  { href: "#projects", label: "Projects", id: "projects" },
  { href: "#contact", label: "Contact", id: "contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeId, setActiveId] = useState("home");
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const [indicator, setIndicator] = useState({ left: 0, width: 0, ready: false });

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter(Boolean) as HTMLElement[];

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target?.id) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-35% 0px -45% 0px", threshold: [0.1, 0.25, 0.5] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const el = linkRefs.current[activeId];
    if (!el) return;

    const update = () => {
      const parent = el.parentElement;
      if (!parent) return;
      const parentRect = parent.getBoundingClientRect();
      const rect = el.getBoundingClientRect();
      setIndicator({
        left: rect.left - parentRect.left,
        width: rect.width,
        ready: true,
      });
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [activeId, isScrolled]);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 md:px-6 md:pt-5 pointer-events-none"
    >
      <div className="container mx-auto pointer-events-auto">
        <div
          className={`relative flex items-center justify-between gap-3 rounded-2xl border px-3 py-2.5 md:px-4 md:py-3 transition-all duration-500 ${
            isScrolled
              ? "border-primary/25 bg-[hsl(270_42%_12%/0.72)] shadow-[0_16px_48px_-20px_hsl(41_76%_60%/0.35)] backdrop-blur-xl"
              : "border-[hsl(261_42%_80%/0.18)] bg-[hsl(270_42%_14%/0.45)] backdrop-blur-md shadow-[0_10px_40px_-24px_hsl(261_42%_80%/0.35)]"
          }`}
        >
          {/* Soft glow edge */}
          <div
            className="pointer-events-none absolute inset-0 rounded-2xl opacity-70"
            style={{
              background:
                "linear-gradient(120deg, hsl(41 76% 60% / 0.12), transparent 35%, hsl(261 42% 80% / 0.1) 70%, transparent)",
            }}
          />

          {/* Brand */}
          <a
            href="#home"
            className="relative z-10 group flex items-center gap-2.5 pl-1"
            data-cursor="grow"
          >
            <span className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-sm font-bold tracking-tight text-primary transition-all duration-300 group-hover:border-primary/60 group-hover:shadow-[0_0_20px_hsl(41_76%_60%/0.35)]">
              RO
              <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-primary animate-pulse" />
            </span>
            <span className="hidden sm:block leading-tight">
              <span className="block text-sm font-semibold text-foreground">
                Ramisa Orni
              </span>
              <span className="block text-[11px] text-muted-foreground">
                Full-Stack Dev
              </span>
            </span>
          </a>

          {/* Desktop links with sliding pill */}
          <nav className="relative z-10 hidden md:flex items-center gap-1 rounded-full border border-[hsl(261_42%_80%/0.12)] bg-[hsl(270_50%_8%/0.35)] px-1.5 py-1.5">
            {indicator.ready && (
              <motion.span
                className="absolute top-1.5 bottom-1.5 rounded-full bg-primary/15 border border-primary/35 shadow-[0_0_18px_hsl(41_76%_60%/0.2)]"
                animate={{ left: indicator.left, width: indicator.width }}
                transition={{ type: "spring", stiffness: 380, damping: 32 }}
                aria-hidden
              />
            )}
            {navLinks.map((link) => {
              const active = activeId === link.id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  ref={(node) => {
                    linkRefs.current[link.id] = node;
                  }}
                  data-cursor="grow"
                  className={`relative z-10 rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors duration-200 ${
                    active
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* CTA + mobile toggle */}
          <div className="relative z-10 flex items-center gap-2">
            <a
              href="#contact"
              data-cursor="grow"
              className="hidden md:inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-[0_8px_24px_-10px_hsl(41_76%_60%/0.65)] transition-transform duration-300 hover:scale-105"
            >
              <Sparkles size={14} />
              Let's Connect
            </a>

            <button
              type="button"
              onClick={() => setIsMobileOpen((open) => !open)}
              className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[hsl(261_42%_80%/0.25)] bg-[hsl(270_42%_16%/0.7)] text-foreground"
              aria-label="Toggle menu"
            >
              {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile panel */}
        <AnimatePresence>
          {isMobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.22 }}
              className="md:hidden mt-2 overflow-hidden rounded-2xl border border-primary/20 bg-[hsl(270_42%_12%/0.92)] backdrop-blur-xl shadow-[0_20px_50px_-24px_hsl(41_76%_60%/0.35)]"
            >
              <div className="flex flex-col p-3 gap-1">
                {navLinks.map((link, index) => {
                  const active = activeId === link.id;
                  return (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.04 }}
                      onClick={() => setIsMobileOpen(false)}
                      className={`rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                        active
                          ? "bg-primary/15 text-primary border border-primary/25"
                          : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground"
                      }`}
                    >
                      {link.label}
                    </motion.a>
                  );
                })}
                <a
                  href="#contact"
                  onClick={() => setIsMobileOpen(false)}
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground"
                >
                  <Sparkles size={14} />
                  Let's Connect
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Navbar;
