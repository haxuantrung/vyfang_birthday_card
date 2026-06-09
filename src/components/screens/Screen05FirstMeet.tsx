import { motion } from "motion/react";
import { GalaxyBg } from "../GalaxyBg";
import { FloatingParticles } from "../FloatingParticles";

const TIMELINE = [
  { phase: "Ngày đó...", text: "Ban đầu không hề để ý nhau.", emoji: "🌑", color: "#B794F4" },
  { phase: "Rồi thì...", text: "Thậm chí từng ghét nhau một chút.", emoji: "🌓", color: "#C8A8FF" },
  { phase: "Và dần dần...", text: "Mọi thứ bắt đầu thay đổi.", emoji: "🌕", color: "#F6C6FF" },
  { phase: "Cho đến khi...", text: "Hai người tìm thấy nhau.", emoji: "✨", color: "#E9DDFF" },
];

export function Screen05FirstMeet() {
  return (
    <GalaxyBg variant="aurora" className="w-full h-full">
      <FloatingParticles count={12} color="#C8A8FF" minSize={2} maxSize={5} />

      {/* Bố cục dọc: căn giữa, chia đều các khối */}
      <div
        className="relative z-10 w-full h-full flex flex-col justify-center gap-7"
        style={{ padding: "32px 20px" }}
      >
        {/* Header */}
        <div>
          <motion.p
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "9px",
              letterSpacing: "0.2em",
              color: "#C8A8FF",
              opacity: 0.5,
              textTransform: "uppercase",
            }}
          >
            Chapter 01
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "22px",
              fontWeight: "500",
              color: "#E9DDFF",
              lineHeight: "1.3",
            }}
          >
            Lần Đầu Gặp Nhau
          </motion.h2>
        </div>

        {/* Two stars converging animation */}
        <div className="relative h-24 left-0 right-0 pointer-events-none overflow-hidden">
          <motion.div
            className="absolute rounded-full"
            style={{
              width: "10px", height: "10px",
              background: "radial-gradient(circle, #C8A8FF, #B794F4)",
              boxShadow: "0 0 20px rgba(200, 168, 255, 0.6), 0 0 40px rgba(200, 168, 255, 0.2)",
              top: "50%",
            }}
            animate={{ left: ["8%", "40%", "38%", "42%"] }}
            transition={{ duration: 6, repeat: Infinity, ease: [0.25, 0.46, 0.45, 0.94] }}
          />
          <motion.div
            className="absolute rounded-full"
            style={{
              width: "10px", height: "10px",
              background: "radial-gradient(circle, #F6C6FF, #C8A8FF)",
              boxShadow: "0 0 20px rgba(246, 198, 255, 0.6), 0 0 40px rgba(246, 198, 255, 0.2)",
              top: "50%",
            }}
            animate={{ right: ["8%", "40%", "38%", "42%"] }}
            transition={{ duration: 6, repeat: Infinity, ease: [0.25, 0.46, 0.45, 0.94] }}
          />
          {/* Collision glow */}
          <motion.div
            className="absolute"
            style={{
              left: "50%", top: "50%",
              transform: "translate(-50%, -50%)",
              width: "40px", height: "40px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(233, 221, 255, 0.8), transparent 70%)",
            }}
            animate={{ scale: [0, 1.5, 0], opacity: [0, 1, 0] }}
            transition={{ duration: 6, repeat: Infinity, delay: 3 }}
          />
          {/* Trail line */}
          <motion.div
            className="absolute"
            style={{
              top: "50%", left: "10%", right: "10%",
              height: "1px",
              background: "linear-gradient(90deg, transparent, rgba(200, 168, 255, 0.2), transparent)",
            }}
          />
        </div>

        {/* Timeline cards */}
        <div className="relative flex flex-col gap-3">
          {TIMELINE.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + i * 0.2, duration: 0.7 }}
              className="flex items-start gap-3"
              style={{ flexDirection: i % 2 === 0 ? "row" : "row-reverse" }}
            >
              {/* Emoji */}
              <div style={{ fontSize: "22px", lineHeight: 1, paddingTop: "2px", flexShrink: 0 }}>
                {item.emoji}
              </div>

              {/* Card */}
              <div
                className="flex-1 rounded-2xl p-4"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: `1px solid ${item.color}30`,
                  backdropFilter: "blur(20px)",
                  boxShadow: `0 0 20px ${item.color}10`,
                }}
              >
                <p style={{
                  fontFamily: "'Caveat', cursive",
                  fontSize: "12px",
                  color: item.color,
                  opacity: 0.7,
                  marginBottom: "4px",
                }}>
                  {item.phase}
                </p>
                <p style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "15px",
                  fontStyle: "italic",
                  color: "#E9DDFF",
                  lineHeight: "1.5",
                }}>
                  {item.text}
                </p>
              </div>
            </motion.div>
          ))}

          {/* Connector line */}
          <div className="absolute left-[50%] top-2 bottom-2 w-px pointer-events-none"
            style={{ background: "linear-gradient(to bottom, transparent, rgba(200,168,255,0.1), transparent)" }} />
        </div>
      </div>
    </GalaxyBg>
  );
}
