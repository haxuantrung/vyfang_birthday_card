import { motion } from "motion/react";
import { GalaxyBg } from "../GalaxyBg";

export function Screen08HoTriAn() {
  return (
    <GalaxyBg variant="blue" className="w-full h-full">
      {/* Deep blue lake night atmosphere */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 80%, rgba(197, 225, 255, 0.07) 0%, transparent 60%)" }} />

      <div className="relative z-10 w-full h-full flex flex-col" style={{ paddingBottom: "20px" }}>

        {/* Header */}
        <div className="px-5 pt-5">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "9px",
              letterSpacing: "0.2em",
              color: "#C5E1FF",
              opacity: 0.5,
              textTransform: "uppercase",
            }}
          >
            Chapter 04 · Adventure
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "22px",
              fontWeight: "500",
              color: "#E9DDFF",
            }}
          >
            Hồ Trị An
          </motion.h2>
        </div>

        {/* 3D scene card */}
        <div className="px-5 mt-4 flex-1 flex flex-col gap-3">
          <motion.div
            initial={{ opacity: 0, y: 30, rotateX: 8 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ delay: 0.5, duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="rounded-3xl overflow-hidden"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(197, 225, 255, 0.12)",
              backdropFilter: "blur(20px)",
              boxShadow: "0 24px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)",
            }}
          >
            {/* Night sky scene */}
            <div className="relative h-48 overflow-hidden"
              style={{ background: "linear-gradient(180deg, #0D0720 0%, #1a1040 40%, #0a1830 70%, #051020 100%)" }}>

              {/* Stars in scene */}
              {[...Array(30)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full bg-white"
                  style={{
                    left: `${(i * 71.3) % 95}%`,
                    top: `${(i * 43.7) % 55}%`,
                    width: (i % 4 === 0) ? "2.5px" : "1.5px",
                    height: (i % 4 === 0) ? "2.5px" : "1.5px",
                    opacity: 0.3 + (i * 0.05) % 0.6,
                  }}
                  animate={{ opacity: [0.3, 0.8, 0.3] }}
                  transition={{ duration: 1.5 + (i * 0.3) % 2, repeat: Infinity, delay: (i * 0.15) % 2 }}
                />
              ))}

              {/* Lake reflection */}
              <div
                className="absolute bottom-0 left-0 right-0 h-24"
                style={{
                  background: "linear-gradient(180deg, rgba(10, 24, 48, 0.3) 0%, rgba(5, 15, 35, 0.8) 100%)",
                  borderTop: "1px solid rgba(197, 225, 255, 0.06)",
                }}
              />

              {/* Moon reflection on water */}
              <motion.div
                className="absolute"
                style={{
                  bottom: "20px", left: "50%",
                  transform: "translateX(-50%)",
                  width: "40px", height: "8px",
                  borderRadius: "50%",
                  background: "rgba(233, 221, 255, 0.15)",
                  filter: "blur(3px)",
                }}
                animate={{ opacity: [0.4, 0.7, 0.4], scaleX: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              />

              {/* Moon */}
              <motion.div
                className="absolute rounded-full"
                style={{
                  top: "12px", left: "50%",
                  transform: "translateX(-50%)",
                  width: "20px", height: "20px",
                  background: "radial-gradient(circle, #E9DDFF, #C8A8FF)",
                  boxShadow: "0 0 15px rgba(233,221,255,0.4), 0 0 30px rgba(200,168,255,0.2)",
                }}
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 5, repeat: Infinity }}
              />

              {/* Tent silhouette */}
              <svg
                className="absolute bottom-8 left-6"
                width="70" height="50"
                viewBox="0 0 70 50"
                fill="none"
              >
                <path d="M35 5 L0 48 L70 48 Z" fill="rgba(26, 16, 64, 0.9)" stroke="rgba(200,168,255,0.2)" strokeWidth="0.5" />
                <path d="M35 5 L25 48" stroke="rgba(200,168,255,0.15)" strokeWidth="0.5" />
                <rect x="28" y="35" width="14" height="13" rx="1" fill="rgba(246,198,255,0.1)" />
              </svg>

              {/* Trees silhouette */}
              <svg className="absolute bottom-6 right-4" width="80" height="55" viewBox="0 0 80 55" fill="none">
                <path d="M20 55 L20 20 L5 20 L20 0 L35 20 L20 20" fill="rgba(10, 20, 50, 0.95)" />
                <path d="M50 55 L50 25 L38 25 L50 8 L62 25 L50 25" fill="rgba(10, 20, 50, 0.9)" />
                <path d="M70 55 L70 32 L62 32 L70 18 L78 32 L70 32" fill="rgba(10, 20, 50, 0.85)" />
              </svg>

              {/* Campfire */}
              <div className="absolute" style={{ bottom: "28px", left: "90px" }}>
                <motion.div
                  animate={{ scale: [1, 1.1, 0.95, 1], opacity: [0.7, 1, 0.8, 0.7] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                >
                  <svg width="16" height="20" viewBox="0 0 16 20" fill="none">
                    <path d="M8 18 C4 18 2 14 4 10 C5 8 6 9 7 7 C7 11 10 10 10 7 C12 10 14 14 8 18Z" fill="rgba(255, 180, 100, 0.8)" />
                    <path d="M8 18 C5 18 4 15 6 12 C7 11 7 12 8 10 C9 12 11 12 8 18Z" fill="rgba(255, 140, 60, 0.9)" />
                    <ellipse cx="8" cy="18" rx="5" ry="1.5" fill="rgba(255, 100, 50, 0.3)" />
                  </svg>
                </motion.div>
                <motion.div
                  className="absolute -inset-2 rounded-full pointer-events-none"
                  style={{ background: "radial-gradient(circle, rgba(255, 180, 80, 0.15), transparent)" }}
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0.2, 0.5] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </div>
            </div>

            {/* Card text */}
            <div className="p-5">
              <p style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "16px",
                fontStyle: "italic",
                color: "#E9DDFF",
                lineHeight: "1.7",
                marginBottom: "12px",
              }}>
                Ngồi bên hồ, nhìn bầu trời đầy sao. Lửa trại. Gió nhẹ. Em ngủ gật trên vai anh.
              </p>
              <div className="flex gap-2 flex-wrap">
                {["⛺ Cắm trại", "🌊 Hồ đêm", "🔥 Lửa trại", "🌟 Sao trời"].map((tag) => (
                  <span key={tag} style={{
                    fontFamily: "'Caveat', cursive",
                    fontSize: "12px",
                    color: "#C5E1FF",
                    opacity: 0.7,
                    background: "rgba(197, 225, 255, 0.06)",
                    border: "1px solid rgba(197, 225, 255, 0.1)",
                    borderRadius: "12px",
                    padding: "2px 10px",
                  }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Quote */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="text-center px-4"
            style={{
              fontFamily: "'Caveat', cursive",
              fontSize: "15px",
              color: "#C5E1FF",
              opacity: 0.55,
              lineHeight: "1.6",
            }}
          >
            "Chuyến đi mà cả hai đều không muốn về."
          </motion.p>
        </div>
      </div>
    </GalaxyBg>
  );
}
