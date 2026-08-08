import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollAnimations = () => {
  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    // Hero intro
    const hero = document.querySelector<HTMLElement>("[data-hero-animate]");
    if (hero) {
      const parts = hero.querySelectorAll<HTMLElement>("[data-hero-item]");
      gsap.fromTo(
        parts,
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          ease: "power3.out",
          stagger: 0.1,
          delay: 0.12,
        }
      );
    }

    // Every non-hero section: heading + content motion on scroll
    const sections = gsap.utils.toArray<HTMLElement>("main > section");

    sections.forEach((section, index) => {
      if (section.hasAttribute("data-hero-animate")) return;

      const heading =
        section.querySelector<HTMLElement>(".section-heading") ||
        section.querySelector<HTMLElement>("h2");
      const sub = section.querySelector<HTMLElement>(".section-subheading");
      const eyebrow = section.querySelector<HTMLElement>(
        "p.text-primary.text-xs, p[class*='tracking-']"
      );

      // Prefer explicit content targets; fall back to cards/columns
      const staggerRoot = section.querySelector<HTMLElement>(
        "[data-reveal-stagger]"
      );
      const contentItems = staggerRoot
        ? gsap.utils.toArray<HTMLElement>(staggerRoot.children)
        : gsap.utils.toArray<HTMLElement>(
            section.querySelectorAll(
              ".skill-card, .project-card, [data-timeline-item], .space-y-6 > *, .space-y-8 > *"
            )
          );

      // Deduplicate
      const uniqueItems = Array.from(new Set(contentItems)).filter(
        (el) => el !== heading && el !== sub && !el.contains(heading as Node)
      );

      gsap.set(section, { perspective: 900 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 78%",
          toggleActions: "play none none none",
          once: true,
        },
        defaults: { ease: "power3.out" },
      });

      // Alternate entrance direction by section for variety
      const dir = index % 2 === 0 ? 1 : -1;

      if (eyebrow && eyebrow !== sub) {
        tl.fromTo(
          eyebrow,
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.45 },
          0
        );
      }

      if (heading) {
        tl.fromTo(
          heading,
          { opacity: 0, y: 56, rotateX: 12, transformOrigin: "50% 100%" },
          { opacity: 1, y: 0, rotateX: 0, duration: 0.9 },
          0.05
        );
      }

      if (sub) {
        tl.fromTo(
          sub,
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.65 },
          0.2
        );
      }

      if (uniqueItems.length) {
        tl.fromTo(
          uniqueItems,
          { opacity: 0, y: 40, x: 18 * dir },
          {
            opacity: 1,
            y: 0,
            x: 0,
            duration: 0.7,
            stagger: 0.09,
          },
          0.28
        );
      }

      // Soft fade for marquees / leftover blocks
      const extras = section.querySelectorAll<HTMLElement>(
        "[data-reveal]:not(.section-heading)"
      );
      extras.forEach((el) => {
        if (el.contains(heading as Node) || el === heading) return;
        tl.fromTo(
          el,
          { opacity: 0, y: 28 },
          { opacity: 1, y: 0, duration: 0.65 },
          0.15
        );
      });
    });

    // Experience timeline line scrub
    const timelineLine = document.querySelector<HTMLElement>(
      "[data-timeline-line]"
    );
    const timelineRoot = timelineLine?.parentElement?.parentElement;

    if (timelineLine && timelineRoot) {
      gsap.fromTo(
        timelineLine,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: timelineRoot,
            start: "top 75%",
            end: "bottom 55%",
            scrub: 0.6,
          },
        }
      );
    }

    const timelineItems =
      gsap.utils.toArray<HTMLElement>("[data-timeline-item]");
    timelineItems.forEach((item) => {
      const sides = item.querySelectorAll<HTMLElement>("[data-timeline-from]");
      const dot = item.querySelector<HTMLElement>("[data-timeline-dot]");

      sides.forEach((side, sideIndex) => {
        const fromLeft = side.dataset.timelineFrom !== "right";
        gsap.fromTo(
          side,
          { opacity: 0, x: fromLeft ? -56 : 56 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power3.out",
            delay: sideIndex * 0.08,
            immediateRender: false,
            scrollTrigger: {
              trigger: item,
              start: "top 82%",
              once: true,
            },
          }
        );
      });

      if (dot) {
        gsap.fromTo(
          dot,
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.45,
            ease: "back.out(1.8)",
            immediateRender: false,
            scrollTrigger: {
              trigger: item,
              start: "top 82%",
              once: true,
            },
          }
        );
      }
    });

    const parallaxEls = gsap.utils.toArray<HTMLElement>("[data-parallax]");
    parallaxEls.forEach((el) => {
      const speed = Number(el.dataset.parallax || 0.15);
      gsap.to(el, {
        yPercent: speed * 100,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    const refresh = () => ScrollTrigger.refresh();
    requestAnimationFrame(refresh);
    const t1 = window.setTimeout(refresh, 300);
    const t2 = window.setTimeout(refresh, 800);

    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, []);

  return null;
};

export default ScrollAnimations;
