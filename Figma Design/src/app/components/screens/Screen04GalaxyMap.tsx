import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { GalaxyBg } from "../GalaxyBg";

interface Star {
  id: string;
  x: number;
  y: number;
  title: string;
  icon: string;
  type: "main" | "secret";
  screenIndex?: number;
}

const MAIN_STARS: Star[] = [
  { id: "meet", x: 22, y: 28, title: "Lần Đầu Gặp Nhau", icon: "✦", type: "main", screenIndex: 4 },
  { id: "hug", x: 72, y: 22, title: "Cái Ôm Đầu Tiên", icon: "♡", type: "main", screenIndex: 6 },
  { id: "lake", x: 80, y: 55, title: "Hồ Trị An", icon: "◈", type: "main", screenIndex: 7 },
  { id: "things", x: 50, y: 48, title: "20 Điều Anh Thích", icon: "✧", type: "main", screenIndex: 8 },
  { id: "gallery", x: 22, y: 64, title: "Một Góc Nhỏ Về Em", icon: "◉", type: "main", screenIndex: 9 },
  { id: "future", x: 55, y: 20, title: "Những Vì Sao\nChưa Kịp Sáng", icon: "⬡", type: "main", screenIndex: 11 },
];

const SECRET_STARS: Star[] = [
  { id: "s1", x: 12, y: 44, title: "Secret #1", icon: "·", type: "secret", screenIndex: 12 },
  { id: "s2", x: 40, y: 72, title: "Secret #2", icon: "·", type: "secret", screenIndex: 12 },
  { id: "s3", x: 63, y: 70, title: "Secret #3", icon: "·", type: "secret", screenIndex: 12 },
  { id: "s4", x: 85, y: 36, title: "Secret #4", icon: "·", type: "secret", screenIndex: 12 },
  { id: "s5", x: 35, y: 14, title: "Secret #5", icon: "·", type: "secret", screenIndex: 12 },
];

const CONNECTIONS: [string, string][] = [
  ["meet", "future"],
  ["future", "hug"],
  ["hug", "lake"],
  ["lake", "things"],
  ["things", "meet"],
  ["meet", "gallery"],
  ["gallery", "things"],
];

interface Props {
  onNavigate?: (screenIndex: number) => void;
}

export function Screen04GalaxyMap({ onNavigate }: Props) {
  const [hovered, setHovered] = useState<string | null>(null);
  const [tooltip, setTooltip] = useState<Star | null>(null);
  const [secretFound, setSecretFound] = useState<Set<string>>(new Set());

  const allStars = [...MAIN_STARS, ...SECRET_STARS];
  const starMap = Object.fromEntries(allStars.map((s) => [s.id, s]));

  function handleStarClick(star: Star) {
    if (star.type === "secret") {
      setSecretFound((prev) => new Set([...prev, star.id]));
    }
    if (star.screenIndex !== undefined) {
      onNavigate?.(star.screenIndex);
    }
  }

  return (
    <GalaxyBg variant="aurora" className="w-full h-full">
      {/* Dense star field for map feel */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 60 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              left: `${(i * 61.3) % 100}%`,
              top: `${(i * 43.7 + 5) % 100}%`,
              width: (i % 5 === 0) ? "2px" : "1px",
              height: (i % 5 === 0) ? "2px" : "1px",
              opacity: 0.15 + (i * 0.07) % 0.3,
            }}
            animate={{ opacity: [0.15, 0.4, 0.15] }}
            transition={{ duration: 2 + (i * 0.3) % 3, repeat: Infinity, delay: (i * 0.2) % 3 }}
          />
        ))}
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute top-0 left-0 right-0 px-5 pt-6 z-20"
      >
        <p style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "9px",
          letterSpacing: "0.22em",
          color: "#C8A8FF",
          opacity: 0.5,
          textTransform: "uppercase",
          marginBottom: "4px",
        }}>
          Vũ Trụ Của Chúng Ta
        </p>
        <h2 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "20px",
          fontWeight: "500",
          color: "#E9DDFF",
          opacity: 0.9,
        }}>
          Galaxy Map
        </h2>
        <div style={{
          width: "40px", height: "1px",
          background: "linear-gradient(90deg, rgba(200,168,255,0.6), transparent)",
          marginTop: "6px",
        }} />
      </motion.div>

      {/* Secret found counter */}
      <motion.div
        animate={{ opacity: secretFound.size > 0 ? 1 : 0.35 }}
        className="absolute top-6 right-5 z-20 flex items-center gap-1.5"
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "10px",
          color: "#F6C6FF",
        }}
      >
        <span style={{ opacity: 0.6 }}>{secretFound.size}/5</span>
        <span style={{ opacity: 0.4 }}>secret</span>
      </motion.div>

      {/* Star map SVG layer */}
      <div className="absolute inset-0" style={{ top: "80px", bottom: "60px" }}>
        <svg
          className="w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          style={{ overflow: "visible" }}
        >
          {/* Constellation lines */}
          {CONNECTIONS.map(([a, b], i) => {
            const sa = starMap[a];
            const sb = starMap[b];
            return (
              <motion.line
                key={i}
                x1={sa.x} y1={sa.y}
                x2={sb.x} y2={sb.y}
                stroke="rgba(200, 168, 255, 0.15)"
                strokeWidth="0.3"
                strokeDasharray="0.8 1.5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ delay: 0.5 + i * 0.2, duration: 1.2 }}
              />
            );
          })}
        </svg>

        {/* Stars positioned absolutely */}
        {MAIN_STARS.map((star, i) => (
          <motion.button
            key={star.id}
            onClick={() => handleStarClick(star)}
            onHoverStart={() => { setHovered(star.id); setTooltip(star); }}
            onHoverEnd={() => { setHovered(null); setTooltip(null); }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 + i * 0.15, duration: 0.6, type: "spring" }}
            className="absolute flex flex-col items-center cursor-pointer"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              transform: "translate(-50%, -50%)",
              zIndex: 10,
              background: "none",
              border: "none",
              padding: 0,
            }}
          >
            {/* Outer glow ring */}
            <motion.div
              className="absolute rounded-full"
              style={{
                width: "48px", height: "48px",
                background: `radial-gradient(circle, rgba(200, 168, 255, 0.15), transparent 70%)`,
                transform: "translate(-50%, -50%)",
                left: "50%", top: "50%",
              }}
              animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0.15, 0.5] }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 0.4 }}
            />

            {/* Star core */}
            <motion.div
              animate={hovered === star.id ? { scale: 1.3 } : { scale: 1 }}
              transition={{ duration: 0.2 }}
              style={{
                width: "28px",
                height: "28px",
                borderRadius: "50%",
                background: hovered === star.id
                  ? "radial-gradient(circle, #E9DDFF, #C8A8FF)"
                  : "radial-gradient(circle, #C8A8FF, #B794F4)",
                boxShadow: hovered === star.id
                  ? "0 0 24px rgba(200, 168, 255, 0.8), 0 0 48px rgba(200, 168, 255, 0.3)"
                  : "0 0 12px rgba(200, 168, 255, 0.5), 0 0 24px rgba(200, 168, 255, 0.15)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "11px",
                color: "#120B2D",
                zIndex: 2,
              }}
            >
              {star.icon}
            </motion.div>

            {/* Star label */}
            <AnimatePresence>
              <motion.span
                initial={{ opacity: 0, y: -2 }}
                animate={{ opacity: hovered === star.id ? 1 : 0.65 }}
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "8px",
                  color: "#E9DDFF",
                  textAlign: "center",
                  marginTop: "5px",
                  whiteSpace: "pre-line",
                  lineHeight: "1.3",
                  maxWidth: "70px",
                  textShadow: "0 0 10px rgba(0,0,0,0.8)",
                  display: "block",
                }}
              >
                {star.title}
              </motion.span>
            </AnimatePresence>
          </motion.button>
        ))}

        {/* Secret stars */}
        {SECRET_STARS.map((star, i) => (
          <motion.button
            key={star.id}
            onClick={() => handleStarClick(star)}
            initial={{ opacity: 0 }}
            animate={{ opacity: secretFound.has(star.id) ? 1 : 0.2 }}
            transition={{ delay: 1 + i * 0.1 }}
            className="absolute cursor-pointer"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              transform: "translate(-50%, -50%)",
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              background: secretFound.has(star.id)
                ? "radial-gradient(circle, #F6C6FF, #C8A8FF)"
                : "rgba(200, 168, 255, 0.4)",
              boxShadow: secretFound.has(star.id)
                ? "0 0 16px rgba(246, 198, 255, 0.6)"
                : "none",
              border: "none",
              zIndex: 5,
            }}
          >
            <motion.div
              animate={{ scale: [1, 1.6, 1], opacity: [0.3, 0.8, 0.3] }}
              transition={{ duration: 4 + i, repeat: Infinity, delay: i * 0.8 }}
              className="absolute inset-0 rounded-full"
              style={{ background: "rgba(246, 198, 255, 0.2)" }}
            />
          </motion.button>
        ))}
      </div>

      {/* Bottom hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-5 left-0 right-0 flex items-center justify-center gap-2"
      >
        <div style={{ width: "20px", height: "1px", background: "rgba(200,168,255,0.2)" }} />
        <span style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "9px",
          color: "#C8A8FF",
          opacity: 0.4,
          letterSpacing: "0.1em",
        }}>
          chạm vào các vì sao
        </span>
        <div style={{ width: "20px", height: "1px", background: "rgba(200,168,255,0.2)" }} />
      </motion.div>
    </GalaxyBg>
  );
}
