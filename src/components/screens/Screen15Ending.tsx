import { motion } from "motion/react";
import { GalaxyBg } from "../GalaxyBg";

export function Screen15Ending() {
  return (
    <GalaxyBg variant="deep" className="w-full h-full">
      {/* Fading galaxy overlay */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(18, 11, 45, 0) 0%, rgba(10, 6, 24, 0.4) 100%)" }}
        animate={{ opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center px-8">

        {/* Single glowing star */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1.5, ease: "easeOut" }}
          className="relative mb-12"
        >
          {/* Outer glow rings */}
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                inset: `${-i * 20}px`,
                border: "1px solid rgba(200, 168, 255, 0.1)",
                borderRadius: "50%",
              }}
              animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.1, 0.3] }}
              transition={{ duration: 4 + i * 1.5, repeat: Infinity, delay: i * 0.8 }}
            />
          ))}

          {/* Core star */}
          <motion.div
            className="relative rounded-full"
            style={{
              width: "16px", height: "16px",
              background: "radial-gradient(circle, #E9DDFF, #C8A8FF)",
              boxShadow: "0 0 20px rgba(233,221,255,0.6), 0 0 40px rgba(200,168,255,0.3), 0 0 80px rgba(200,168,255,0.1)",
            }}
            animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </motion.div>

        {/* Birthday message */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mb-8"
        >
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "24px",
            fontWeight: "400",
            fontStyle: "italic",
            color: "#E9DDFF",
            lineHeight: "1.5",
            marginBottom: "8px",
            textShadow: "0 0 30px rgba(200, 168, 255, 0.3)",
          }}>
            Chúc mừng sinh nhật tuổi 28.
          </h1>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          style={{
            width: "80px",
            height: "1px",
            background: "linear-gradient(90deg, transparent, rgba(200,168,255,0.4), transparent)",
            marginBottom: "24px",
          }}
        />

        {/* Personal message */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 1.2 }}
          style={{
            fontFamily: "'Caveat', cursive",
            fontSize: "18px",
            color: "#C8A8FF",
            lineHeight: "1.9",
            opacity: 0.8,
            maxWidth: "260px",
          }}
        >
          Cảm ơn em đã bước vào cuộc đời anh.
        </motion.p>

        {/* Signature */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3, duration: 1 }}
          className="mt-8"
        >
          <div style={{ height: "1px", width: "40px", background: "rgba(200,168,255,0.2)", margin: "0 auto 12px" }} />
          <p style={{
            fontFamily: "'Caveat', cursive",
            fontSize: "22px",
            color: "#E9DDFF",
            fontStyle: "italic",
            opacity: 0.7,
          }}>
            — Aiu
          </p>
        </motion.div>

        {/* Galaxy fading dots */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: "2px",
              height: "2px",
              left: `${15 + i * 15}%`,
              bottom: "15%",
              opacity: 0.1,
            }}
            animate={{ opacity: [0.1, 0.3, 0], y: [0, -20] }}
            transition={{ duration: 4 + i * 0.5, repeat: Infinity, delay: i * 0.8 }}
          />
        ))}

        {/* Very subtle bottom glow */}
        <div
          className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
          style={{ background: "linear-gradient(to top, rgba(18, 11, 45, 0.6), transparent)" }}
        />
      </div>
    </GalaxyBg>
  );
}
