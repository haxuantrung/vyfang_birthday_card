import { motion } from "motion/react";
import { GalaxyBg } from "../GalaxyBg";
import { FloatingParticles } from "../FloatingParticles";

const MEMORIES = [
  "Mưa ngoài cửa sổ",
  "Cốc cà phê đầu tiên",
  "Nhìn nhau không nói gì",
  "Playlist của em",
  "Ánh đèn vàng ấm",
];

export function Screen06Chidori() {
  return (
    <GalaxyBg variant="aurora" className="w-full h-full">
      <FloatingParticles count={15} color="#F6C6FF" minSize={2} maxSize={6} />

      {/* Warm coffee ambient light */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 60%, rgba(246, 198, 255, 0.08) 0%, transparent 65%)" }} />

      {/* Header */}
      <div className="absolute top-0 left-5 right-5 pt-5 z-10">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "9px",
            letterSpacing: "0.2em",
            color: "#F6C6FF",
            opacity: 0.5,
            textTransform: "uppercase",
          }}
        >
          Ký Ức · Memory Café
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "22px",
            fontWeight: "500",
            color: "#E9DDFF",
          }}
        >
          Chidori
        </motion.h2>
      </div>

      {/* Main memory card */}
      <div className="absolute inset-5 flex flex-col items-center justify-center" style={{ top: "80px", bottom: "40px" }}>
        <motion.div
          initial={{ opacity: 0, y: 30, rotateX: 10 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ delay: 0.5, duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="w-full max-w-[300px] rounded-3xl overflow-hidden"
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(246, 198, 255, 0.12)",
            backdropFilter: "blur(30px)",
            boxShadow: "0 32px 80px rgba(0,0,0,0.5), 0 0 60px rgba(246, 198, 255, 0.05), inset 0 1px 0 rgba(255,255,255,0.06)",
          }}
        >
          {/* Coffee illustration area */}
          <div
            className="relative w-full flex flex-col items-center justify-center py-10"
            style={{
              background: "linear-gradient(180deg, rgba(246,198,255,0.06) 0%, rgba(200,168,255,0.04) 100%)",
              borderBottom: "1px solid rgba(246, 198, 255, 0.08)",
            }}
          >
            {/* Coffee cup SVG */}
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <svg width="64" height="72" viewBox="0 0 64 72" fill="none">
                {/* Steam */}
                <motion.path d="M22 12 C22 8 26 8 26 4" stroke="#F6C6FF" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"
                  animate={{ opacity: [0.5, 0.1, 0.5], y: [0, -3, 0] }} transition={{ duration: 2, repeat: Infinity }} />
                <motion.path d="M32 10 C32 6 36 6 36 2" stroke="#C8A8FF" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"
                  animate={{ opacity: [0.4, 0.1, 0.4], y: [0, -3, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 0.5 }} />
                <motion.path d="M42 12 C42 8 46 8 46 4" stroke="#F6C6FF" strokeWidth="1.5" strokeLinecap="round" opacity="0.3"
                  animate={{ opacity: [0.3, 0.1, 0.3], y: [0, -3, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 1 }} />
                {/* Cup body */}
                <path d="M12 18 L16 58 Q32 64 48 58 L52 18 Z" fill="rgba(200,168,255,0.12)" stroke="rgba(200,168,255,0.3)" strokeWidth="1" />
                {/* Handle */}
                <path d="M52 26 Q62 26 62 36 Q62 46 52 46" stroke="rgba(200,168,255,0.3)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                {/* Coffee surface */}
                <ellipse cx="32" cy="18" rx="20" ry="4" fill="rgba(183,148,244,0.2)" />
                {/* Latte art */}
                <path d="M22 18 Q32 15 42 18" stroke="rgba(246,198,255,0.4)" strokeWidth="1" fill="none" />
                {/* Saucer */}
                <ellipse cx="32" cy="60" rx="26" ry="5" fill="rgba(200,168,255,0.08)" stroke="rgba(200,168,255,0.2)" strokeWidth="0.5" />
              </svg>
            </motion.div>

            {/* Floating memory tags */}
            {MEMORIES.slice(0, 3).map((mem, i) => (
              <motion.div
                key={i}
                className="absolute"
                style={{
                  left: i === 0 ? "8px" : i === 2 ? "auto" : "50%",
                  right: i === 2 ? "8px" : "auto",
                  top: i === 1 ? "8px" : `${30 + i * 30}%`,
                  transform: i === 1 ? "translateX(-50%)" : undefined,
                }}
                animate={{ y: [0, -3, 0], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 3 + i, repeat: Infinity, delay: i * 0.8 }}
              >
                <div style={{
                  background: "rgba(200, 168, 255, 0.08)",
                  border: "1px solid rgba(200, 168, 255, 0.15)",
                  borderRadius: "20px",
                  padding: "3px 10px",
                  fontFamily: "'Caveat', cursive",
                  fontSize: "11px",
                  color: "#C8A8FF",
                  whiteSpace: "nowrap",
                }}>
                  {mem}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Card content */}
          <div className="p-6">
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "9px",
              letterSpacing: "0.15em",
              color: "#C8A8FF",
              opacity: 0.5,
              textTransform: "uppercase",
              marginBottom: "8px",
            }}>
              Nơi chúng ta thường gặp nhau
            </p>
            <p style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "17px",
              fontStyle: "italic",
              color: "#E9DDFF",
              lineHeight: "1.7",
              marginBottom: "16px",
            }}>
              2 đứa trong không gian riêng. Mưa ngoài trời. Em.
            </p>
            <div className="flex gap-2 flex-wrap">
              {MEMORIES.slice(3).map((m, i) => (
                <span key={i} style={{
                  fontFamily: "'Caveat', cursive",
                  fontSize: "12px",
                  color: "#F6C6FF",
                  opacity: 0.6,
                  background: "rgba(246, 198, 255, 0.06)",
                  border: "1px solid rgba(246, 198, 255, 0.1)",
                  borderRadius: "12px",
                  padding: "2px 10px",
                }}>
                  {m}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </GalaxyBg>
  );
}
