import { motion } from "motion/react";
import { useMemo } from "react";

interface GalaxyBgProps {
  variant?: "default" | "aurora" | "deep" | "pink" | "blue";
  children?: React.ReactNode;
  className?: string;
}

export function GalaxyBg({ variant = "default", children, className = "" }: GalaxyBgProps) {
  const stars = useMemo(() => {
    return Array.from({ length: 100 }, (_, i) => ({
      id: i,
      x: parseFloat(((i * 137.508) % 100).toFixed(2)),
      y: parseFloat(((i * 97.347 + i * 13.5) % 100).toFixed(2)),
      size: (i % 4 === 0 ? 2.5 : i % 3 === 0 ? 2 : 1),
      opacity: parseFloat((0.2 + ((i * 0.073) % 0.6)).toFixed(2)),
      delay: parseFloat(((i * 0.31) % 4).toFixed(2)),
      duration: parseFloat((2 + ((i * 0.19) % 3)).toFixed(2)),
    }));
  }, []);

  const auroraColors = {
    default: {
      orb1: "#B794F4",
      orb2: "#F6C6FF",
      orb3: "#C5E1FF",
      orb4: "#C8A8FF",
    },
    aurora: {
      orb1: "#C8A8FF",
      orb2: "#F6C6FF",
      orb3: "#B794F4",
      orb4: "#E9DDFF",
    },
    deep: {
      orb1: "#6B21A8",
      orb2: "#9333EA",
      orb3: "#7C3AED",
      orb4: "#A855F7",
    },
    pink: {
      orb1: "#F6C6FF",
      orb2: "#C8A8FF",
      orb3: "#F0ABFC",
      orb4: "#E879F9",
    },
    blue: {
      orb1: "#C5E1FF",
      orb2: "#93C5FD",
      orb3: "#C8A8FF",
      orb4: "#818CF8",
    },
  };

  const colors = auroraColors[variant];

  return (
    <div
      className={`relative w-full h-full overflow-hidden ${className}`}
      style={{ background: "linear-gradient(160deg, #0D0720 0%, #120B2D 40%, #1A0F3A 70%, #0A0618 100%)" }}
    >
      {/* Aurora orbs - animated */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          top: "-15%", left: "5%",
          width: "65%", height: "65%",
          borderRadius: "50%",
          background: `radial-gradient(circle, ${colors.orb1}55, transparent 70%)`,
          filter: "blur(40px)",
        }}
        animate={{ x: [0, 20, -10, 0], y: [0, -15, 10, 0], scale: [1, 1.1, 0.95, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute pointer-events-none"
        style={{
          top: "20%", right: "-15%",
          width: "55%", height: "55%",
          borderRadius: "50%",
          background: `radial-gradient(circle, ${colors.orb2}40, transparent 70%)`,
          filter: "blur(50px)",
        }}
        animate={{ x: [0, -25, 15, 0], y: [0, 20, -10, 0], scale: [1, 0.9, 1.15, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      <motion.div
        className="absolute pointer-events-none"
        style={{
          bottom: "-20%", left: "15%",
          width: "75%", height: "65%",
          borderRadius: "50%",
          background: `radial-gradient(circle, ${colors.orb3}35, transparent 70%)`,
          filter: "blur(60px)",
        }}
        animate={{ x: [0, 15, -20, 0], y: [0, -10, 15, 0], scale: [1, 1.05, 0.9, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 4 }}
      />
      <motion.div
        className="absolute pointer-events-none"
        style={{
          top: "45%", left: "35%",
          width: "45%", height: "45%",
          borderRadius: "50%",
          background: `radial-gradient(circle, ${colors.orb4}30, transparent 70%)`,
          filter: "blur(45px)",
        }}
        animate={{ x: [0, -15, 20, 0], y: [0, 15, -10, 0], scale: [1, 1.2, 0.85, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 6 }}
      />

      {/* Star field */}
      <div className="absolute inset-0 pointer-events-none">
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute rounded-full"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              background: star.id % 7 === 0 ? "#C8A8FF" : star.id % 5 === 0 ? "#F6C6FF" : "#ffffff",
              boxShadow: star.size > 1.5 ? `0 0 ${star.size * 3}px ${star.size}px rgba(200, 168, 255, 0.4)` : "none",
            }}
            animate={{ opacity: [star.opacity, star.opacity * 0.3, star.opacity] }}
            transition={{
              duration: star.duration,
              repeat: Infinity,
              delay: star.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {children}
    </div>
  );
}
