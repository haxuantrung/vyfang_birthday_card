import { motion } from "motion/react";
import { useMemo } from "react";

interface FloatingParticlesProps {
  count?: number;
  color?: string;
  minSize?: number;
  maxSize?: number;
  spread?: boolean;
}

export function FloatingParticles({
  count = 20,
  color = "#C8A8FF",
  minSize = 3,
  maxSize = 8,
  spread = false,
}: FloatingParticlesProps) {
  const particles = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      x: spread ? (i * 100) / count : parseFloat(((i * 71.3 + 5) % 90).toFixed(1)),
      startY: parseFloat(((i * 53.7 + 10) % 90).toFixed(1)),
      size: minSize + ((i * 1.7) % (maxSize - minSize)),
      opacity: 0.15 + ((i * 0.07) % 0.45),
      duration: 6 + ((i * 0.9) % 8),
      delay: (i * 0.4) % 5,
      drift: -20 + ((i * 7.3) % 40),
    }));
  }, [count, minSize, maxSize, spread]);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            background: color,
            opacity: p.opacity,
            filter: `blur(${p.size > 5 ? 1 : 0}px)`,
            boxShadow: `0 0 ${p.size * 2}px ${color}80`,
          }}
          initial={{ y: `${p.startY}vh`, x: 0, opacity: 0 }}
          animate={{
            y: [`${p.startY}%`, `${Math.max(0, p.startY - 60)}%`],
            x: [0, p.drift, 0],
            opacity: [0, p.opacity, p.opacity, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

export function GlowOrb({
  size = 120,
  color = "#C8A8FF",
  x = "50%",
  y = "50%",
  opacity = 0.3,
  blur = 40,
  animate: shouldAnimate = true,
}: {
  size?: number;
  color?: string;
  x?: string;
  y?: string;
  opacity?: number;
  blur?: number;
  animate?: boolean;
}) {
  return (
    <motion.div
      className="absolute pointer-events-none rounded-full"
      style={{
        left: x,
        top: y,
        transform: "translate(-50%, -50%)",
        width: size,
        height: size,
        background: `radial-gradient(circle, ${color}, transparent 70%)`,
        filter: `blur(${blur}px)`,
        opacity,
      }}
      animate={shouldAnimate ? { scale: [1, 1.2, 0.9, 1], opacity: [opacity, opacity * 0.6, opacity] } : undefined}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}
