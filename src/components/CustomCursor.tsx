import { useEffect, useRef } from "react";
import gsap from "gsap";

const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!finePointer || prefersReducedMotion) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    document.documentElement.classList.add("has-custom-cursor");

    const xToDot = gsap.quickTo(dot, "x", { duration: 0.12, ease: "power3" });
    const yToDot = gsap.quickTo(dot, "y", { duration: 0.12, ease: "power3" });
    const xToRing = gsap.quickTo(ring, "x", { duration: 0.35, ease: "power3" });
    const yToRing = gsap.quickTo(ring, "y", { duration: 0.35, ease: "power3" });

    const onMove = (event: MouseEvent) => {
      xToDot(event.clientX);
      yToDot(event.clientY);
      xToRing(event.clientX);
      yToRing(event.clientY);
    };

    const interactiveSelector =
      "a, button, [role='button'], input, textarea, select, .cursor-grow, [data-cursor='grow']";

    const onEnterInteractive = () => {
      gsap.to(ring, {
        scale: 2.1,
        borderColor: "hsl(41 76% 60% / 0.85)",
        backgroundColor: "hsl(41 76% 60% / 0.08)",
        duration: 0.25,
      });
      gsap.to(dot, { scale: 0.35, duration: 0.2 });
    };

    const onLeaveInteractive = () => {
      gsap.to(ring, {
        scale: 1,
        borderColor: "hsl(261 42% 80% / 0.55)",
        backgroundColor: "transparent",
        duration: 0.25,
      });
      gsap.to(dot, { scale: 1, duration: 0.2 });
    };

    const onDown = () => {
      gsap.to(ring, { scale: 0.85, duration: 0.15 });
    };

    const onUp = () => {
      gsap.to(ring, { scale: 1, duration: 0.2 });
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);

    const interactives = Array.from(
      document.querySelectorAll<HTMLElement>(interactiveSelector)
    );

    interactives.forEach((el) => {
      el.addEventListener("mouseenter", onEnterInteractive);
      el.addEventListener("mouseleave", onLeaveInteractive);
    });

    // Observe late-mounted interactive nodes
    const observer = new MutationObserver(() => {
      document.querySelectorAll<HTMLElement>(interactiveSelector).forEach((el) => {
        el.removeEventListener("mouseenter", onEnterInteractive);
        el.removeEventListener("mouseleave", onLeaveInteractive);
        el.addEventListener("mouseenter", onEnterInteractive);
        el.addEventListener("mouseleave", onLeaveInteractive);
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.documentElement.classList.remove("has-custom-cursor");
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      observer.disconnect();
      interactives.forEach((el) => {
        el.removeEventListener("mouseenter", onEnterInteractive);
        el.removeEventListener("mouseleave", onLeaveInteractive);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[hsl(261_42%_80%/0.55)] md:block"
        aria-hidden
      />
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary md:block"
        aria-hidden
      />
    </>
  );
};

export default CustomCursor;
