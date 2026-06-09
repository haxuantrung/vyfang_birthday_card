import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { GalaxyBg } from "../GalaxyBg";
import { FloatingParticles } from "../FloatingParticles";

const BIRTHDAY = new Date("2026-06-10T00:00:00");

function getTimeLeft() {
  const now = new Date();
  const diff = BIRTHDAY.getTime() - now.getTime();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, done: true };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    done: false,
  };
}

function CountUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <motion.div
        key={value}
        initial={{ y: -8, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="relative"
      >
        <div
          className="w-16 h-16 flex items-center justify-center rounded-2xl"
          style={{
            background: "rgba(200, 168, 255, 0.08)",
            border: "1px solid rgba(200, 168, 255, 0.2)",
            backdropFilter: "blur(20px)",
            boxShadow: "0 0 30px rgba(183, 148, 244, 0.15), inset 0 1px 0 rgba(255,255,255,0.08)",
            fontFamily: "'Playfair Display', serif",
            fontSize: "28px",
            fontWeight: "600",
            color: "#E9DDFF",
          }}
        >
          {String(value).padStart(2, "0")}
        </div>
      </motion.div>
      <span
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "10px",
          fontWeight: "500",
          letterSpacing: "0.15em",
          color: "#C8A8FF",
          textTransform: "uppercase",
          opacity: 0.7,
        }}
      >
        {label}
      </span>
    </div>
  );
}

export function Screen01Countdown() {
  const [time, setTime] = useState(getTimeLeft);

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <GalaxyBg variant="aurora" className="w-full h-full">
      <FloatingParticles count={18} color="#C8A8FF" minSize={2} maxSize={5} />
      <FloatingParticles count={10} color="#F6C6FF" minSize={1} maxSize={3} />

      {/* Top decorative line */}
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(200,168,255,0.4), transparent)" }} />

      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-6">

        {/* Small constellation icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8"
        >
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <circle cx="20" cy="8" r="2.5" fill="#C8A8FF" opacity="0.9" />
            <circle cx="8" cy="26" r="2" fill="#B794F4" opacity="0.7" />
            <circle cx="32" cy="26" r="2" fill="#B794F4" opacity="0.7" />
            <circle cx="20" cy="36" r="1.5" fill="#C8A8FF" opacity="0.5" />
            <line x1="20" y1="8" x2="8" y2="26" stroke="#C8A8FF" strokeWidth="0.5" opacity="0.3" />
            <line x1="20" y1="8" x2="32" y2="26" stroke="#C8A8FF" strokeWidth="0.5" opacity="0.3" />
            <line x1="8" y1="26" x2="32" y2="26" stroke="#C8A8FF" strokeWidth="0.5" opacity="0.3" />
            <line x1="20" y1="36" x2="8" y2="26" stroke="#C8A8FF" strokeWidth="0.5" opacity="0.2" />
            <line x1="20" y1="36" x2="32" y2="26" stroke="#C8A8FF" strokeWidth="0.5" opacity="0.2" />
          </svg>
        </motion.div>

        {/* Address */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          style={{
            fontFamily: "'Caveat', cursive",
            fontSize: "15px",
            color: "#C8A8FF",
            opacity: 0.75,
            letterSpacing: "0.05em",
            marginBottom: "6px",
          }}
        >
          Gửi pé Vyfang của Anh,
        </motion.p>

        {/* Main message */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.9 }}
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "22px",
            fontWeight: "400",
            fontStyle: "italic",
            color: "#E9DDFF",
            textAlign: "center",
            lineHeight: "1.6",
            maxWidth: "280px",
            marginBottom: "8px",
          }}
        >
          Món quà này sẽ mở khi tới ngày sinh nhật của em.
        </motion.h1>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="my-6"
          style={{
            width: "120px",
            height: "1px",
            background: "linear-gradient(90deg, transparent, rgba(200,168,255,0.5), transparent)",
          }}
        />

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex gap-3 items-center"
        >
          <CountUnit value={time.days} label="days" />
          <span style={{ color: "#C8A8FF", opacity: 0.4, fontSize: "20px", marginTop: "-12px" }}>·</span>
          <CountUnit value={time.hours} label="hours" />
          <span style={{ color: "#C8A8FF", opacity: 0.4, fontSize: "20px", marginTop: "-12px" }}>·</span>
          <CountUnit value={time.minutes} label="min" />
          <span style={{ color: "#C8A8FF", opacity: 0.4, fontSize: "20px", marginTop: "-12px" }}>·</span>
          <CountUnit value={time.seconds} label="sec" />
        </motion.div>

        {/* Bottom hint */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
          className="absolute bottom-12"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "11px",
            color: "#C8A8FF",
            opacity: 0.35,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}
        >
          10 · 06 · 2026
        </motion.p>

        {/* Glow below timer */}
        <div
          className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
          style={{ background: "linear-gradient(to top, rgba(183, 148, 244, 0.08), transparent)" }}
        />
      </div>
    </GalaxyBg>
  );
}
