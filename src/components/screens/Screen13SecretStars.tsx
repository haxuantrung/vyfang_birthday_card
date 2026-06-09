import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { GalaxyBg } from "../GalaxyBg";

const SECRETS = [
  { id: 1, x: 18, y: 22, message: "Lần đầu nhìn ảnh em, anh đã bấm follow.", label: "⁕ Secret #1" },
  { id: 2, x: 72, y: 18, message: "Hôm đó anh thật ra đã biết mình thích em rồi.", label: "⁕ Secret #2" },
  { id: 3, x: 38, y: 52, message: "Playlist anh nghe mỗi ngày có tên em.", label: "⁕ Secret #3" },
  { id: 4, x: 78, y: 58, message: "Mỗi lần em nhắn tin, anh đều cười một mình.", label: "⁕ Secret #4" },
  { id: 5, x: 52, y: 78, message: "Anh đã viết điều này từ rất lâu trước sinh nhật em.", label: "⁕ Secret #5" },
];

export function Screen13SecretStars() {
  const [revealed, setRevealed] = useState<Set<number>>(new Set());
  const [activeSecret, setActiveSecret] = useState<typeof SECRETS[0] | null>(null);

  function handleStar(s: typeof SECRETS[0]) {
    setRevealed((prev) => new Set([...prev, s.id]));
    setActiveSecret(s);
    setTimeout(() => setActiveSecret(null), 3000);
  }

  return (
    <GalaxyBg variant="aurora" className="w-full h-full">
      <div className="relative z-10 w-full h-full flex flex-col">

        {/* Header */}
        <div className="px-5 pt-5">
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
            Hidden · Secret Stars
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
            }}
          >
            Những Bí Mật Nhỏ
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            style={{
              fontFamily: "'Caveat', cursive",
              fontSize: "13px",
              color: "#C8A8FF",
              opacity: 0.45,
              marginTop: "4px",
            }}
          >
            {revealed.size}/5 bí mật được tìm thấy
          </motion.p>
        </div>

        {/* Interactive star field */}
        <div className="flex-1 relative mx-5 mt-4" style={{ minHeight: "400px" }}>
          {/* Fog layer */}
          <div className="absolute inset-0 rounded-3xl overflow-hidden"
            style={{
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(200,168,255,0.08)",
              backdropFilter: "blur(4px)",
            }}
          >
            {/* Background pattern stars */}
            {[...Array(40)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-white"
                style={{
                  left: `${(i * 71.3) % 95}%`,
                  top: `${(i * 43.7) % 95}%`,
                  width: "1px",
                  height: "1px",
                  opacity: 0.08 + (i * 0.03) % 0.12,
                }}
              />
            ))}

            {/* Secret stars */}
            {SECRETS.map((s, i) => {
              const isRevealed = revealed.has(s.id);
              return (
                <motion.button
                  key={s.id}
                  onClick={() => handleStar(s)}
                  aria-label={isRevealed ? s.label : "Ngôi sao bí mật — chạm để mở"}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + i * 0.2, type: "spring" }}
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute flex items-center justify-center"
                  style={{
                    left: `${s.x}%`,
                    top: `${s.y}%`,
                    transform: "translate(-50%, -50%)",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    width: "48px",
                    height: "48px",
                    padding: 0,
                    zIndex: 5,
                  }}
                >
                  {/* Vòng sáng nhấp nháy — gợi ý có thể bấm */}
                  <motion.span
                    className="absolute rounded-full pointer-events-none"
                    style={{
                      width: "30px",
                      height: "30px",
                      border: `1px solid ${isRevealed ? "rgba(246,198,255,0.5)" : "rgba(200,168,255,0.4)"}`,
                    }}
                    animate={{ scale: [1, 1.8, 1], opacity: [0.6, 0, 0.6] }}
                    transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.5 }}
                  />
                  <motion.span
                    className="absolute rounded-full pointer-events-none"
                    style={{ background: "radial-gradient(circle, rgba(200,168,255,0.25), transparent 70%)", inset: "4px" }}
                    animate={{ opacity: [0.4, 0.9, 0.4], scale: [0.9, 1.15, 0.9] }}
                    transition={{ duration: 2.8 + i * 0.4, repeat: Infinity, delay: i * 0.3 }}
                  />

                  {/* Chấm sao chính */}
                  <motion.span
                    className="relative rounded-full"
                    style={{
                      width: isRevealed ? "18px" : "14px",
                      height: isRevealed ? "18px" : "14px",
                      background: isRevealed
                        ? "radial-gradient(circle, #F6C6FF, #C8A8FF)"
                        : "radial-gradient(circle, #E9DDFF, #C8A8FF)",
                      boxShadow: isRevealed
                        ? "0 0 20px rgba(246, 198, 255, 0.9), 0 0 40px rgba(200, 168, 255, 0.4)"
                        : "0 0 12px rgba(200, 168, 255, 0.7), 0 0 24px rgba(200, 168, 255, 0.3)",
                      transition: "all 0.4s",
                    }}
                    animate={isRevealed ? {} : { scale: [1, 1.15, 1] }}
                    transition={{ duration: 2 + i * 0.3, repeat: Infinity }}
                  />

                  {isRevealed && (
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.7 }}
                      className="absolute"
                      style={{
                        top: "34px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        whiteSpace: "nowrap",
                        fontFamily: "'Caveat', cursive",
                        fontSize: "11px",
                        color: "#F6C6FF",
                      }}
                    >
                      {s.label}
                    </motion.span>
                  )}
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Secret message popup */}
        <AnimatePresence>
          {activeSecret && (
            <motion.div
              key={activeSecret.id}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              className="mx-5 mb-4 mt-3 p-4 rounded-2xl"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(246, 198, 255, 0.2)",
                backdropFilter: "blur(20px)",
                boxShadow: "0 16px 40px rgba(0,0,0,0.4), 0 0 30px rgba(246,198,255,0.08)",
              }}
            >
              <p style={{
                fontFamily: "'Caveat', cursive",
                fontSize: "18px",
                color: "#F6C6FF",
                lineHeight: "1.5",
                textAlign: "center",
              }}>
                ✦ {activeSecret.message}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {!activeSecret && (
          <div className="mx-5 mb-4 mt-3 h-[72px] flex items-center justify-center">
            <p style={{
              fontFamily: "'Caveat', cursive",
              fontSize: "13px",
              color: "#C8A8FF",
              opacity: 0.35,
              textAlign: "center",
            }}>
              Chạm vào các ngôi sao mờ để khám phá...
            </p>
          </div>
        )}
      </div>
    </GalaxyBg>
  );
}
