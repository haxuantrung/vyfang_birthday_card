import { motion } from "motion/react";
import { GalaxyBg } from "../GalaxyBg";

export function Screen03Opening() {
  return (
    <GalaxyBg variant="aurora" className="w-full h-full">
      {/* Galaxy tunnel effect */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute inset-0 rounded-full"
            style={{
              border: `1px solid rgba(200, 168, 255, ${0.05 + i * 0.03})`,
              margin: `${i * 12}%`,
              borderRadius: "50%",
            }}
            animate={{ scale: [1, 1.08, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 4 + i, repeat: Infinity, delay: i * 0.7, ease: "easeInOut" }}
          />
        ))}
        {/* Central glow tunnel */}
        <div
          className="absolute"
          style={{
            top: "50%", left: "50%",
            transform: "translate(-50%, -50%)",
            width: "280px", height: "280px",
            background: "radial-gradient(ellipse, rgba(183,148,244,0.15) 0%, rgba(200,168,255,0.05) 40%, transparent 70%)",
            borderRadius: "50%",
          }}
        />
      </div>

      {/* Perspective lines */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 390 844"
        preserveAspectRatio="none"
        style={{ opacity: 0.06 }}
      >
        {[...Array(8)].map((_, i) => (
          <line
            key={i}
            x1="195" y1="422"
            x2={i % 2 === 0 ? -50 + i * 70 : 440 - i * 30}
            y2={i < 4 ? -20 : 864}
            stroke="#C8A8FF"
            strokeWidth="0.5"
          />
        ))}
      </svg>

      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-8 text-center">

        {/* Date */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="mb-6"
        >
          <span style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "11px",
            letterSpacing: "0.25em",
            color: "#C8A8FF",
            opacity: 0.6,
            textTransform: "uppercase",
          }}>
            10 · 06 · 2026
          </span>
        </motion.div>

        {/* Divider top */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          style={{
            width: "60px",
            height: "1px",
            background: "linear-gradient(90deg, transparent, rgba(200,168,255,0.5), transparent)",
            marginBottom: "24px",
          }}
        />

        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-4"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "30px",
            fontWeight: "500",
            color: "#E9DDFF",
            lineHeight: "1.3",
            textShadow: "0 0 40px rgba(200, 168, 255, 0.4)",
          }}
        >
          Chúc mừng sinh nhật
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "38px",
            fontWeight: "700",
            fontStyle: "italic",
            background: "linear-gradient(135deg, #C8A8FF, #F6C6FF, #E9DDFF)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            lineHeight: "1.2",
            marginBottom: "32px",
            textShadow: "none",
          }}
        >
          Vyfang
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          style={{
            width: "100px",
            height: "1px",
            background: "linear-gradient(90deg, transparent, rgba(200,168,255,0.4), transparent)",
            marginBottom: "28px",
          }}
        />

        {/* Personal message */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
          style={{
            fontFamily: "'Caveat', cursive",
            fontSize: "18px",
            color: "#C8A8FF",
            lineHeight: "1.8",
            opacity: 0.85,
            maxWidth: "280px",
          }}
        >
          Đây là mùa sinh nhật đầu tiên anh được ở bên cạnh em.
        </motion.p>

        {/* Star decoration */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2, duration: 0.6, type: "spring" }}
          className="mt-8 flex items-center gap-3"
        >
          {["·", "✦", "·"].map((s, i) => (
            <motion.span
              key={i}
              style={{
                color: "#C8A8FF",
                fontSize: i === 1 ? "16px" : "8px",
                opacity: i === 1 ? 0.7 : 0.3,
              }}
              animate={{ opacity: [i === 1 ? 0.7 : 0.3, i === 1 ? 0.3 : 0.1, i === 1 ? 0.7 : 0.3] }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
            >
              {s}
            </motion.span>
          ))}
        </motion.div>

        {/* Bottom aurora fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
          style={{ background: "linear-gradient(to top, rgba(18, 11, 45, 0.8), transparent)" }}
        />
      </div>
    </GalaxyBg>
  );
}
