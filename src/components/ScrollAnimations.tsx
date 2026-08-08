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

    const reveals = gsap.utils.toArray<HTMLElement>("[data-reveal]");
    reveals.forEach((el) => {
      const direction = el.dataset.reveal || "up";
      const from: gsap.TweenVars = { opacity: 0 };
      if (direction === "left") from.x = -40;
      else if (direction === "right") from.x = 40;
      else if (direction === "scale") from.scale = 0.94;
      else from.y = 40;

      gsap.fromTo(el, from, {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        duration: 0.85,
        ease: "power3.out",
        immediateRender: false,
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          toggleActions: "play none none none",
          once: true,
        },
      });
    });

    const staggers = gsap.utils.toArray<HTMLElement>("[data-reveal-stagger]");
    staggers.forEach((group) => {
      const items = gsap.utils.toArray<HTMLElement>(group.children);
      if (!items.length) return;

      gsap.fromTo(
        items,
        { opacity: 0, y: 32 },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          ease: "power3.out",
          stagger: 0.08,
          immediateRender: false,
          scrollTrigger: {
            trigger: group,
            start: "top 92%",
            toggleActions: "play none none none",
            once: true,
          },
        }
      );
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

    // Experience timeline — line grows; sides slide in toward center
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
            end: "bottom 60%",
            scrub: 0.6,
          },
        }
      );
    }

    const timelineItems = gsap.utils.toArray<HTMLElement>("[data-timeline-item]");
    timelineItems.forEach((item) => {
      const left = item.querySelector<HTMLElement>("[data-timeline-left]");
      const right = item.querySelector<HTMLElement>("[data-timeline-right]");
      const dot = item.querySelector<HTMLElement>("[data-timeline-dot]");

      if (left) {
        gsap.fromTo(
          left,
          { opacity: 0, x: -56 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power3.out",
            immediateRender: false,
            scrollTrigger: {
              trigger: item,
              start: "top 82%",
              toggleActions: "play none none none",
              once: true,
            },
          }
        );
      }

      if (right) {
        gsap.fromTo(
          right,
          { opacity: 0, x: 56 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power3.out",
            delay: 0.08,
            immediateRender: false,
            scrollTrigger: {
              trigger: item,
              start: "top 82%",
              toggleActions: "play none none none",
              once: true,
            },
          }
        );
      }

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
              toggleActions: "play none none none",
              once: true,
            },
          }
        );
      }
    });

    const hero = document.querySelector<HTMLElement>("[data-hero-animate]");
    if (hero) {
      const parts = hero.querySelectorAll<HTMLElement>("[data-hero-item]");
      gsap.fromTo(
        parts,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.1,
          delay: 0.1,
        }
      );
    }

    // Lenis can shift layout; refresh after paint so triggers fire correctly
    const refresh = () => ScrollTrigger.refresh();
    requestAnimationFrame(refresh);
    const t = window.setTimeout(refresh, 300);

    return () => {
      window.clearTimeout(t);
    };
  }, []);

  return null;
};

export default ScrollAnimations;
