import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {
  siPython,
  siJavascript,
  siTypescript,
  siFastapi,
  siDjango,
  siReact,
  siNextdotjs,
  siGit,
  siGithub,
  siMysql,
  siJupyter,
  siJira,
  type SimpleIcon,
} from "simple-icons";

type Skill = {
  name: string;
  hex: string;
  icon?: SimpleIcon;
  src?: string;
};

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

const rowOne: Skill[] = [
  { name: "Python", icon: siPython, hex: siPython.hex },
  { name: "JavaScript", icon: siJavascript, hex: siJavascript.hex },
  { name: "TypeScript", icon: siTypescript, hex: siTypescript.hex },
  { name: "FastAPI", icon: siFastapi, hex: siFastapi.hex },
  { name: "Django", icon: siDjango, hex: "44B78B" },
  { name: "React", icon: siReact, hex: siReact.hex },
  { name: "Next.js", icon: siNextdotjs, hex: "FFFFFF" },
  { name: "Git", icon: siGit, hex: siGit.hex },
  { name: "GitHub", icon: siGithub, hex: "FFFFFF" },
];

const rowTwo: Skill[] = [
  { name: "MySQL", icon: siMysql, hex: siMysql.hex },
  { name: "Jupyter", icon: siJupyter, hex: siJupyter.hex },
  {
    name: "VS Code",
    hex: "007ACC",
    src: `${DEVICON}/vscode/vscode-original.svg`,
  },
  { name: "Jira", icon: siJira, hex: siJira.hex },
  { name: "Excel", hex: "217346" },
  { name: "PowerPoint", hex: "B7472A" },
  {
    name: "Canva",
    hex: "00C4CC",
    src: `${DEVICON}/canva/canva-original.svg`,
  },
  { name: "Django", icon: siDjango, hex: "44B78B" },
  { name: "React", icon: siReact, hex: siReact.hex },
];

const PowerPointMark = ({ color }: { color: string }) => (
  <svg viewBox="0 0 32 32" className="h-9 w-9" aria-hidden>
    <rect width="32" height="32" rx="6" fill={`#${color}`} />
    <circle cx="16" cy="16" r="8" fill="none" stroke="#fff" strokeWidth="2.2" />
    <text
      x="16"
      y="20.5"
      textAnchor="middle"
      fill="#fff"
      fontSize="12"
      fontFamily="Arial, sans-serif"
      fontWeight="700"
    >
      P
    </text>
  </svg>
);

const ExcelLogo = ({ color }: { color: string }) => (
  <svg viewBox="0 0 32 32" className="h-9 w-9" aria-hidden>
    <rect x="0" y="0" width="32" height="32" rx="6" fill={`#${color}`} />
    <rect x="7" y="7" width="18" height="18" rx="2" fill="#fff" opacity="0.95" />
    <path
      fill={`#${color}`}
      d="M11 11h4v4h-4zm6 0h4v4h-4zm-6 6h4v4h-4zm6 0h4v4h-4z"
    />
  </svg>
);

const SkillIcon = ({ skill }: { skill: Skill }) => {
  if (skill.name === "Excel") return <ExcelLogo color={skill.hex} />;
  if (skill.name === "PowerPoint") return <PowerPointMark color={skill.hex} />;

  if (skill.src) {
    return (
      <img
        src={skill.src}
        alt=""
        width={36}
        height={36}
        className="h-9 w-9 object-contain"
        loading="lazy"
      />
    );
  }

  if (skill.icon) {
    return (
      <svg
        role="img"
        viewBox="0 0 24 24"
        className="h-9 w-9"
        aria-hidden
        fill={`#${skill.hex}`}
      >
        <title>{skill.name}</title>
        <path d={skill.icon.path} />
      </svg>
    );
  }

  return (
    <span className="text-sm font-bold" style={{ color: `#${skill.hex}` }}>
      {skill.name.slice(0, 2)}
    </span>
  );
};

const SkillCard = ({ skill }: { skill: Skill }) => (
  <div
    data-cursor="grow"
    className="group flex w-[7.5rem] shrink-0 flex-col items-center gap-3"
  >
    <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-[hsl(261_42%_80%/0.18)] bg-[hsl(270_42%_18%/0.85)] shadow-[0_12px_28px_-18px_hsl(41_76%_60%/0.35)] transition-all duration-300 group-hover:border-primary/40 group-hover:shadow-[0_14px_32px_-14px_hsl(41_76%_60%/0.45)] group-hover:-translate-y-1">
      <SkillIcon skill={skill} />
    </div>
    <span className="text-xs font-medium text-muted-foreground transition-colors group-hover:text-foreground">
      {skill.name}
    </span>
  </div>
);

const MarqueeRow = ({
  skills,
  direction = "left",
  duration = 28,
}: {
  skills: Skill[];
  direction?: "left" | "right";
  duration?: number;
}) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  useGSAP(
    () => {
      const track = trackRef.current;
      if (!track) return;

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (prefersReducedMotion) return;

      gsap.set(track, { xPercent: direction === "right" ? -50 : 0 });

      tweenRef.current = gsap.to(track, {
        xPercent: direction === "right" ? 0 : -50,
        duration,
        ease: "none",
        repeat: -1,
      });

      return () => {
        tweenRef.current?.kill();
        tweenRef.current = null;
      };
    },
    { dependencies: [direction, duration] }
  );

  const items = [...skills, ...skills];

  return (
    <div
      className="relative overflow-hidden py-2"
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
      }}
      onMouseEnter={() => tweenRef.current?.pause()}
      onMouseLeave={() => tweenRef.current?.play()}
    >
      <div ref={trackRef} className="flex w-max gap-8 md:gap-10">
        {items.map((skill, index) => (
          <SkillCard key={`${skill.name}-${index}`} skill={skill} />
        ))}
      </div>
    </div>
  );
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 mb-12">
        <div data-reveal className="text-center">
          <p className="text-primary text-xs font-semibold tracking-[0.2em] uppercase mb-3">
            Technical Skills
          </p>
          <h2 className="section-heading">
            My <span className="text-gradient">Toolkit</span>
          </h2>
          <p className="section-subheading mx-auto">
            The stack I reach for when shipping products end-to-end
          </p>
        </div>
      </div>

      <div className="space-y-8 md:space-y-10">
        <MarqueeRow skills={rowOne} direction="left" duration={32} />
        <MarqueeRow skills={rowTwo} direction="right" duration={36} />
      </div>
    </section>
  );
};

export default SkillsSection;
