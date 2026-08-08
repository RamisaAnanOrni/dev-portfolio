import { motion } from "framer-motion";

const FloatingShapes = () => {
  const particles = [
    {
      position: "top-[18%] left-[12%]",
      size: "w-3 h-3",
      delay: 0,
      duration: 5,
      driftX: 16,
      driftY: -24,
      color: "bg-[hsl(41_76%_60%/0.55)] shadow-[0_0_18px_hsl(41_76%_60%/0.4)]",
    },
    {
      position: "top-[28%] right-[16%]",
      size: "w-2.5 h-2.5",
      delay: 0.8,
      duration: 6,
      driftX: -12,
      driftY: 20,
      color: "bg-[hsl(261_42%_80%/0.5)] shadow-[0_0_16px_hsl(261_42%_80%/0.35)]",
    },
    {
      position: "bottom-[24%] left-[28%]",
      size: "w-4 h-4",
      delay: 1.5,
      duration: 7,
      driftX: 18,
      driftY: -16,
      color: "bg-[hsl(41_76%_60%/0.4)] shadow-[0_0_18px_hsl(41_76%_60%/0.3)]",
    },
    {
      position: "bottom-[20%] right-[30%]",
      size: "w-2.5 h-2.5",
      delay: 2.2,
      duration: 5.5,
      driftX: -14,
      driftY: -14,
      color: "bg-[hsl(261_42%_80%/0.45)] shadow-[0_0_14px_hsl(261_42%_80%/0.3)]",
    },
    {
      position: "top-[55%] left-[8%]",
      size: "w-2 h-2",
      delay: 1.1,
      duration: 6.5,
      driftX: 10,
      driftY: -18,
      color: "bg-[hsl(41_76%_60%/0.4)] shadow-[0_0_12px_hsl(41_76%_60%/0.28)]",
    },
  ];

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Deep purple bloom */}
      <motion.div
        className="absolute top-[4%] -left-16 lg:left-[2%] w-[34rem] h-[34rem] rounded-full blur-3xl opacity-55"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, hsl(270 45% 35% / 0.65) 0%, hsl(270 40% 22% / 0.3) 45%, transparent 72%)",
        }}
        animate={{
          x: [0, 28, -10, 0],
          y: [0, -20, 12, 0],
          scale: [1, 1.08, 0.97, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Lavender wash */}
      <motion.div
        className="absolute top-[38%] right-[-10%] w-[30rem] h-[30rem] rounded-full blur-3xl opacity-45"
        style={{
          background:
            "radial-gradient(circle at 40% 40%, hsl(261 42% 70% / 0.28) 0%, hsl(270 40% 30% / 0.18) 50%, transparent 72%)",
        }}
        animate={{
          x: [0, -22, 8, 0],
          y: [0, 16, -10, 0],
          scale: [1, 1.06, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Golden highlight glow */}
      <motion.div
        className="absolute bottom-[6%] left-[28%] w-80 h-80 rounded-full blur-3xl opacity-40"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, hsl(41 76% 60% / 0.28) 0%, transparent 70%)",
        }}
        animate={{
          x: [0, 18, -12, 0],
          y: [0, -14, 8, 0],
          scale: [1, 1.12, 0.96, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Soft lavender lens */}
      <motion.div
        className="absolute top-[12%] left-[8%] lg:left-[14%] w-64 h-64 rounded-full opacity-45 blur-2xl"
        style={{
          background:
            "radial-gradient(circle at 35% 30%, hsl(261 42% 80% / 0.22) 0%, hsl(270 45% 40% / 0.15) 40%, transparent 70%)",
        }}
        animate={{
          x: [0, 14, -4, 0],
          y: [0, -12, 10, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Orbiting rings */}
      <motion.div
        className="absolute top-[13%] left-[4%] lg:left-[12%] w-60 h-60 rounded-full border border-[hsl(261_42%_80%/0.25)]"
        animate={{
          rotate: [0, 360],
          scale: [0.98, 1.03, 0.98],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        className="absolute top-[11%] left-[2%] lg:left-[10%] w-72 h-72 rounded-full border border-[hsl(41_76%_60%/0.2)]"
        animate={{ rotate: [360, 0] }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Geometric accents */}
      <motion.div
        className="absolute top-1/4 left-10 w-20 h-20 border border-[hsl(261_42%_80%/0.28)] rounded-lg"
        animate={{
          y: [0, -30, 0],
          rotate: [0, 48, 0],
          x: [0, 8, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-1/3 right-20 w-12 h-12 border border-[hsl(41_76%_60%/0.35)] rounded-full"
        animate={{
          y: [0, 20, 0],
          x: [0, -10, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <motion.div
        className="absolute bottom-1/4 left-1/4 w-16 h-16 border border-[hsl(261_42%_80%/0.22)]"
        style={{ transform: "rotate(45deg)" }}
        animate={{
          y: [0, -25, 0],
          rotate: [45, 90, 45],
          x: [0, -12, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <motion.div
        className="absolute top-2/3 right-1/3 w-8 h-8 rounded-full bg-[hsl(41_76%_60%/0.18)]"
        animate={{
          scale: [1, 1.55, 1],
          opacity: [0.25, 0.65, 0.25],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {particles.map((particle, index) => (
        <motion.div
          key={index}
          className={`absolute ${particle.position} ${particle.size} rounded-full ${particle.color}`}
          animate={{
            y: [0, particle.driftY, 0],
            x: [0, particle.driftX, 0],
            opacity: [0.35, 0.9, 0.35],
            scale: [0.9, 1.25, 0.9],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: particle.delay,
          }}
        />
      ))}

      {/* Extra grain layer for visible texture */}
      <div
        className="absolute inset-0 opacity-[0.18] mix-blend-soft-light"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "160px 160px",
        }}
      />

      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 15%, hsl(261 42% 80%) 0.9px, transparent 1px), radial-gradient(circle at 85% 35%, hsl(41 76% 60%) 0.9px, transparent 1px)",
          backgroundSize: "56px 56px, 74px 74px",
        }}
      />

      <div className="absolute top-0 left-0 right-0 h-[600px] gradient-radial" />
    </div>
  );
};

export default FloatingShapes;
