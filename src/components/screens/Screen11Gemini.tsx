import { motion } from "motion/react";
import { GalaxyBg } from "../GalaxyBg";

const OBSERVATIONS = [
  { emoji: "♊", title: "Hai tính cách, một người", text: "Hôm nay hướng ngoại. Ngày mai muốn ở nhà yên tĩnh. Cả hai đều là em.", color: "#C8A8FF" },
  { emoji: "⚡", title: "Quyết định nhanh như chớp", text: "Khi đã chọn thì không back. Kể cả màu tím cho mọi thứ.", color: "#F6C6FF" },
  { emoji: "🎨", title: "Không thể ngồi yên với design xấu", text: "Em nhìn cái gì cũng thấy cần redesign. Kể cả menu nhà hàng.", color: "#C5E1FF" },
  { emoji: "✨", title: "Charm đến không cần cố", text: "Em không biết mình dễ thương như thế nào. Đó mới là điều dễ thương nhất.", color: "#E9DDFF" },
];

export function Screen11Gemini() {
  return (
    <GalaxyBg variant="aurora" className="w-full h-full">
      {/* Gemini constellation */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 390 844"
        style={{ opacity: 0.12 }}
      >
        {/* Gemini twin stars and lines */}
        <circle cx="120" cy="100" r="4" fill="#C8A8FF" />
        <circle cx="270" cy="100" r="4" fill="#F6C6FF" />
        <circle cx="100" cy="160" r="3" fill="#C8A8FF" />
        <circle cx="290" cy="160" r="3" fill="#F6C6FF" />
        <circle cx="130" cy="220" r="2.5" fill="#C8A8FF" />
        <circle cx="260" cy="220" r="2.5" fill="#F6C6FF" />
        <circle cx="180" cy="260" r="2" fill="#C8A8FF" />
        <circle cx="210" cy="260" r="2" fill="#F6C6FF" />
        <line x1="120" y1="100" x2="270" y2="100" stroke="#C8A8FF" strokeWidth="0.5" strokeDasharray="2 3" />
        <line x1="120" y1="100" x2="100" y2="160" stroke="#C8A8FF" strokeWidth="0.5" />
        <line x1="270" y1="100" x2="290" y2="160" stroke="#F6C6FF" strokeWidth="0.5" />
        <line x1="100" y1="160" x2="130" y2="220" stroke="#C8A8FF" strokeWidth="0.5" />
        <line x1="290" y1="160" x2="260" y2="220" stroke="#F6C6FF" strokeWidth="0.5" />
        <line x1="130" y1="220" x2="180" y2="260" stroke="#C8A8FF" strokeWidth="0.5" />
        <line x1="260" y1="220" x2="210" y2="260" stroke="#F6C6FF" strokeWidth="0.5" />
      </svg>

      <div className="relative z-10 w-full h-full flex flex-col" style={{ padding: "0 16px 20px" }}>

        {/* Header */}
        <div className="pt-5 mb-4">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "9px",
              letterSpacing: "0.2em",
              color: "#C8A8FF",
              opacity: 0.5,
              textTransform: "uppercase",
            }}
          >
            Gemini Mode · ♊
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "22px",
              fontWeight: "500",
              color: "#E9DDFF",
              lineHeight: "1.2",
            }}
          >
            Vyfang — theo góc nhìn của anh
          </motion.h2>
        </div>

        {/* Observation cards */}
        <div className="flex flex-col gap-3 flex-1" style={{ justifyContent: "center" }}>
          {OBSERVATIONS.map((obs, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -15 : 15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.12, duration: 0.6 }}
              className="rounded-2xl p-4"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: `1px solid ${obs.color}20`,
                backdropFilter: "blur(20px)",
                boxShadow: `0 8px 32px rgba(0,0,0,0.3), 0 0 20px ${obs.color}08`,
              }}
            >
              <div className="flex items-start gap-3">
                <span style={{ fontSize: "20px", lineHeight: "1", flexShrink: 0, marginTop: "2px" }}>
                  {obs.emoji}
                </span>
                <div>
                  <p style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "11px",
                    fontWeight: "600",
                    color: obs.color,
                    marginBottom: "4px",
                    letterSpacing: "0.02em",
                  }}>
                    {obs.title}
                  </p>
                  <p style={{
                    fontFamily: "'Caveat', cursive",
                    fontSize: "15px",
                    color: "#E9DDFF",
                    lineHeight: "1.5",
                    opacity: 0.8,
                  }}>
                    {obs.text}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom zodiac decoration */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex items-center justify-center gap-3 mt-4"
        >
          <div style={{ height: "1px", flex: 1, background: "linear-gradient(to right, transparent, rgba(200,168,255,0.2))" }} />
          <span style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "11px",
            color: "#C8A8FF",
            opacity: 0.4,
            letterSpacing: "0.1em",
          }}>
            21.05 — 20.06 · Gemini
          </span>
          <div style={{ height: "1px", flex: 1, background: "linear-gradient(to left, transparent, rgba(200,168,255,0.2))" }} />
        </motion.div>
      </div>
    </GalaxyBg>
  );
}
