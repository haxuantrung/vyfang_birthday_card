import { motion } from "motion/react";
import { GalaxyBg } from "../GalaxyBg";
import { FloatingParticles } from "../FloatingParticles";

export function Screen07FirstHug() {
  return (
    <GalaxyBg variant="pink" className="w-full h-full">
      <FloatingParticles count={30} color="#E9DDFF" minSize={2} maxSize={7} />
      <FloatingParticles count={15} color="#F6C6FF" minSize={3} maxSize={9} />

      {/* Soft aurora blur layers */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 40% 35%, rgba(246, 198, 255, 0.12) 0%, transparent 60%)" }} />
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 70% 65%, rgba(200, 168, 255, 0.08) 0%, transparent 55%)" }} />

      {/* Soft blur overlay */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 50%, rgba(233, 221, 255, 0.04) 0%, transparent 50%)",
          backdropFilter: "blur(0.5px)",
        }}
      />

      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-8 text-center">

        {/* Chapter label */}
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="absolute top-5 left-5"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "9px",
            letterSpacing: "0.2em",
            color: "#F6C6FF",
            opacity: 0.5,
            textTransform: "uppercase",
          }}
        >
          Chapter 03 · Cái Ôm Đầu Tiên
        </motion.p>

        {/* Central glowing element */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, duration: 1.2, type: "spring", stiffness: 80 }}
          className="relative mb-10"
        >
          <motion.div
            className="rounded-full"
            style={{
              width: "90px", height: "90px",
              background: "radial-gradient(circle, rgba(246,198,255,0.3) 0%, rgba(200,168,255,0.1) 50%, transparent 70%)",
              boxShadow: "0 0 60px rgba(246, 198, 255, 0.3), 0 0 120px rgba(200, 168, 255, 0.15)",
            }}
            animate={{ scale: [1, 1.15, 1], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            style={{ fontSize: "32px" }}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            ♡
          </motion.div>
        </motion.div>

        {/* Main emotional text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="flex flex-col gap-4"
        >
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "28px",
            fontWeight: "500",
            fontStyle: "italic",
            color: "#E9DDFF",
            lineHeight: "1.4",
            textShadow: "0 0 30px rgba(246, 198, 255, 0.3)",
          }}>
            Ấm áp và an toàn.
          </h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.2 }}
            style={{
              height: "1px",
              background: "linear-gradient(90deg, transparent, rgba(246,198,255,0.4), transparent)",
              margin: "4px 0",
            }}
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            style={{
              fontFamily: "'Caveat', cursive",
              fontSize: "17px",
              color: "#F6C6FF",
              lineHeight: "1.8",
              opacity: 0.85,
            }}
          >
            Lúc đó anh không biết nói gì. Chỉ muốn thời gian dừng lại.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.7, duration: 0.8 }}
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "15px",
              fontStyle: "italic",
              color: "#E9DDFF",
              opacity: 0.5,
              lineHeight: "1.7",
            }}
          >
            Có những khoảnh khắc không cần lời nào cả.
          </motion.p>
        </motion.div>

        {/* Lavender particles rising from bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-40 overflow-hidden pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: `${4 + (i % 3) * 3}px`,
                height: `${4 + (i % 3) * 3}px`,
                background: `rgba(${i % 2 === 0 ? "246, 198, 255" : "200, 168, 255"}, 0.4)`,
                left: `${10 + i * 12}%`,
                bottom: "0",
                filter: "blur(1px)",
              }}
              animate={{ y: [-100, -200], opacity: [0, 0.6, 0] }}
              transition={{ duration: 4 + i * 0.5, repeat: Infinity, delay: i * 0.6, ease: "easeOut" }}
            />
          ))}
        </div>
      </div>
    </GalaxyBg>
  );
}
