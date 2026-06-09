"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { GalaxyBg } from "../GalaxyBg";

export interface MapStar {
  id: string;
  x: number;
  y: number;
  title: string;
  icon: string;
}

/** 8 vì sao ký ức chính, đặt theo cảm hứng chòm Song Tử (Gemini). */
const MAIN_STARS: MapStar[] = [
  { id: "meet", x: 20, y: 24, title: "Lần Đầu\nGặp Nhau", icon: "✦" },
  { id: "chidori", x: 40, y: 15, title: "Chidori", icon: "☕" },
  { id: "hug", x: 71, y: 19, title: "Cái Ôm\nĐầu Tiên", icon: "♡" },
  { id: "lake", x: 83, y: 44, title: "Hồ Trị An", icon: "◈" },
  { id: "things", x: 51, y: 40, title: "Những Điều\nAnh Thích Ở Em", icon: "✧" },
  { id: "gallery", x: 21, y: 60, title: "Một Góc\nNhỏ Về Em", icon: "◉" },
  { id: "gemini", x: 64, y: 64, title: "Cô Pé\nSong Tử", icon: "♊" },
  { id: "future", x: 44, y: 82, title: "Những Vì Sao\nChưa Kịp Sáng", icon: "⬡" },
];

const SECRET_STARS: MapStar[] = [
  { id: "s1", x: 11, y: 42, title: "Secret", icon: "·" },
  { id: "s2", x: 33, y: 70, title: "Secret", icon: "·" },
  { id: "s3", x: 72, y: 78, title: "Secret", icon: "·" },
  { id: "s4", x: 88, y: 30, title: "Secret", icon: "·" },
  { id: "s5", x: 56, y: 28, title: "Secret", icon: "·" },
];

const CONNECTIONS: [string, string][] = [
  ["meet", "chidori"],
  ["chidori", "hug"],
  ["hug", "lake"],
  ["meet", "things"],
  ["things", "lake"],
  ["things", "gemini"],
  ["gallery", "things"],
  ["gemini", "future"],
  ["gallery", "future"],
];

interface Props {
  /** id các memory đã mở. */
  opened: string[];
  /** Mở 1 memory chính. */
  onOpen: (id: string) => void;
  /** Mở màn secret stars. */
  onOpenSecret: () => void;
  /** Chuyển sang lá thư cuối (chỉ hiện khi đã mở hết). */
  onFinish: () => void;
}

export function Screen04GalaxyMap({ opened, onOpen, onOpenSecret, onFinish }: Props) {
  const [hovered, setHovered] = useState<string | null>(null);
  const [secretFound, setSecretFound] = useState<Set<string>>(new Set());

  const starMap = Object.fromEntries(
    [...MAIN_STARS, ...SECRET_STARS].map((s) => [s.id, s])
  );
  const openedSet = new Set(opened);
  const allOpened = MAIN_STARS.every((s) => openedSet.has(s.id));

  function handleSecret(star: MapStar) {
    setSecretFound((prev) => new Set([...prev, star.id]));
    onOpenSecret();
  }

  return (
    <GalaxyBg variant="aurora" className="w-full h-full">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute top-0 left-0 right-0 px-5 pt-6 z-20"
      >
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "9px", letterSpacing: "0.22em", color: "#C8A8FF", opacity: 0.5, textTransform: "uppercase", marginBottom: "4px" }}>
          Vũ Trụ Của Chúng Ta
        </p>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "20px", fontWeight: 500, color: "#E9DDFF", opacity: 0.9 }}>
          Những Vì Sao Mang Tên Vyfang
        </h2>
        <div style={{ width: "40px", height: "1px", background: "linear-gradient(90deg, rgba(200,168,255,0.6), transparent)", marginTop: "6px" }} />
      </motion.div>

      {/* Progress counter */}
      <div
        className="absolute top-6 right-5 z-20 flex items-center gap-1.5"
        style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px", color: "#C8A8FF" }}
      >
        <span style={{ opacity: 0.7 }}>{openedSet.size > MAIN_STARS.length ? MAIN_STARS.length : MAIN_STARS.filter((s) => openedSet.has(s.id)).length}/{MAIN_STARS.length}</span>
        <span style={{ opacity: 0.4 }}>ký ức</span>
      </div>

      {/* Star map */}
      <div className="absolute inset-0" style={{ top: "84px", bottom: "72px" }}>
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none" style={{ overflow: "visible" }}>
          {CONNECTIONS.map(([a, b], i) => {
            const sa = starMap[a];
            const sb = starMap[b];
            const active = openedSet.has(a) && openedSet.has(b);
            return (
              <motion.line
                key={i}
                x1={sa.x} y1={sa.y} x2={sb.x} y2={sb.y}
                stroke={active ? "rgba(246, 198, 255, 0.55)" : "rgba(200, 168, 255, 0.15)"}
                strokeWidth={active ? 0.45 : 0.3}
                strokeDasharray={active ? undefined : "0.8 1.5"}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ delay: 0.4 + i * 0.12, duration: 1 }}
              />
            );
          })}
        </svg>

        {/* Main stars */}
        {MAIN_STARS.map((star, i) => {
          const isOpen = openedSet.has(star.id);
          const isHover = hovered === star.id;
          return (
            <motion.button
              key={star.id}
              onClick={() => onOpen(star.id)}
              onHoverStart={() => setHovered(star.id)}
              onHoverEnd={() => setHovered(null)}
              aria-label={star.title.replace("\n", " ")}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + i * 0.12, duration: 0.6, type: "spring" }}
              className="absolute flex flex-col items-center cursor-pointer"
              style={{ left: `${star.x}%`, top: `${star.y}%`, transform: "translate(-50%, -50%)", zIndex: 10, background: "none", border: "none", padding: 0 }}
            >
              <motion.div
                className="absolute rounded-full"
                style={{ width: "48px", height: "48px", background: "radial-gradient(circle, rgba(200, 168, 255, 0.18), transparent 70%)", transform: "translate(-50%, -50%)", left: "50%", top: "50%" }}
                animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0.15, 0.5] }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.4 }}
              />
              <motion.div
                animate={isHover ? { scale: 1.3 } : { scale: 1 }}
                transition={{ duration: 0.2 }}
                style={{
                  width: "28px", height: "28px", borderRadius: "50%",
                  background: isOpen
                    ? "radial-gradient(circle, #F6C6FF, #E9DDFF)"
                    : isHover
                    ? "radial-gradient(circle, #E9DDFF, #C8A8FF)"
                    : "radial-gradient(circle, #C8A8FF, #B794F4)",
                  boxShadow: isOpen
                    ? "0 0 24px rgba(246, 198, 255, 0.9), 0 0 48px rgba(246, 198, 255, 0.35)"
                    : "0 0 12px rgba(200, 168, 255, 0.5), 0 0 24px rgba(200, 168, 255, 0.15)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "11px", color: "#120B2D", zIndex: 2,
                }}
              >
                {isOpen ? "✓" : star.icon}
              </motion.div>
              <span
                style={{
                  fontFamily: "'Inter', sans-serif", fontSize: "8px", color: "#E9DDFF",
                  textAlign: "center", marginTop: "5px", whiteSpace: "pre-line", lineHeight: 1.3,
                  maxWidth: "72px", textShadow: "0 0 10px rgba(0,0,0,0.8)",
                  opacity: isHover || isOpen ? 1 : 0.65,
                }}
              >
                {star.title}
              </span>
            </motion.button>
          );
        })}

        {/* Secret stars — vùng chạm lớn (padding) để dễ bấm trên mobile */}
        {SECRET_STARS.map((star, i) => {
          const found = secretFound.has(star.id);
          return (
            <motion.button
              key={star.id}
              onClick={() => handleSecret(star)}
              aria-label="Vì sao bí mật"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 + i * 0.1 }}
              className="absolute flex items-center justify-center cursor-pointer"
              style={{
                left: `${star.x}%`, top: `${star.y}%`, transform: "translate(-50%, -50%)",
                width: "40px", height: "40px",
                background: "none", border: "none", padding: 0, zIndex: 6,
              }}
            >
              {/* Chấm sao nhìn thấy */}
              <span
                style={{
                  position: "relative",
                  width: "12px", height: "12px", borderRadius: "50%",
                  opacity: found ? 1 : 0.3,
                  background: found ? "radial-gradient(circle, #F6C6FF, #C8A8FF)" : "rgba(200, 168, 255, 0.55)",
                  boxShadow: found ? "0 0 16px rgba(246, 198, 255, 0.6)" : "0 0 6px rgba(200,168,255,0.35)",
                  transition: "all 0.4s",
                }}
              >
                <motion.span
                  animate={{ scale: [1, 1.6, 1], opacity: [0.3, 0.8, 0.3] }}
                  transition={{ duration: 4 + i, repeat: Infinity, delay: i * 0.8 }}
                  className="absolute inset-0 rounded-full"
                  style={{ background: "rgba(246, 198, 255, 0.25)" }}
                />
              </span>
            </motion.button>
          );
        })}
      </div>

      {/* Bottom: hint hoặc nút mở thư cuối */}
      <div className="absolute bottom-5 left-0 right-0 flex items-center justify-center px-5 z-20">
        <AnimatePresence mode="wait">
          {allOpened ? (
            <motion.button
              key="finish"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={onFinish}
              className="px-7 py-3 rounded-full"
              style={{
                background: "linear-gradient(135deg, #B794F4, #C8A8FF)",
                border: "1px solid rgba(233,221,255,0.4)",
                color: "#1A0F3A", fontFamily: "'Inter', sans-serif", fontSize: "13px",
                fontWeight: 600, letterSpacing: "0.06em", cursor: "pointer",
                boxShadow: "0 0 30px rgba(200, 168, 255, 0.5)",
              }}
            >
              ✦ Mở lá thư cuối ✦
            </motion.button>
          ) : (
            <motion.div
              key="hint"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center justify-center gap-2"
            >
              <div style={{ width: "20px", height: "1px", background: "rgba(200,168,255,0.2)" }} />
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "9px", color: "#C8A8FF", opacity: 0.45, letterSpacing: "0.1em" }}>
                chạm vào các vì sao để khám phá
              </span>
              <div style={{ width: "20px", height: "1px", background: "rgba(200,168,255,0.2)" }} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </GalaxyBg>
  );
}
