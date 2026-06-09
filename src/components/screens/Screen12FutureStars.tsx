import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { GalaxyBg } from "../GalaxyBg";

const FUTURE_ITEMS = [
  { id: 1, icon: "🌺", title: "Đà Lạt", text: "Muốn đi với em. Ôm nhau giữa cái thời tiết lạnh.", locked: false, color: "#C8A8FF" },
  { id: 2, icon: "🎂", title: "Sinh nhật 29 tuổi", text: "Anh sẽ lại làm một thứ gì đó cho em. Hứa.", locked: false, color: "#F6C6FF" },
  { id: 3, icon: "✈", title: "Chuyến đi xa", text: "Nơi nào đó chúng ta chưa biết. Cùng nhau khám phá.", locked: true, color: "#C5E1FF" },
  { id: 4, icon: "🌙", title: "Những đêm bình yên", text: "Không cần đi đâu. Chỉ cần có nhau.", locked: true, color: "#E9DDFF" },
  { id: 5, icon: "⭐", title: "Điều chưa có tên", text: "Anh chưa biết. Nhưng anh chắc chắn nó sẽ đẹp.", locked: true, color: "#C8A8FF" },
];

export function Screen12FutureStars() {
  const [unlocked, setUnlocked] = useState<Set<number>>(new Set([1, 2]));

  return (
    <GalaxyBg variant="aurora" className="w-full h-full">
      {/* Dream-like fog overlay */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 30%, rgba(200, 168, 255, 0.06) 0%, transparent 60%)" }} />

      {/* Future constellation - faint undrawn stars */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${15 + (i * 67.3) % 70}%`,
              top: `${10 + (i * 43.7) % 75}%`,
              width: (i % 3 === 0) ? "4px" : "2px",
              height: (i % 3 === 0) ? "4px" : "2px",
              borderRadius: "50%",
              background: "#C8A8FF",
              opacity: 0.1,
            }}
            animate={{ opacity: [0.1, 0.35, 0.1] }}
            transition={{ duration: 3 + (i * 0.4) % 3, repeat: Infinity, delay: (i * 0.5) % 4 }}
          />
        ))}
      </div>

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
            Chapter 08 · Tương Lai
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
            Những Vì Sao Chưa Kịp Sáng
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            style={{
              fontFamily: "'Caveat', cursive",
              fontSize: "14px",
              color: "#C8A8FF",
              opacity: 0.55,
              marginTop: "4px",
            }}
          >
            Những chuyến đi anh muốn cùng em đi
          </motion.p>
        </div>

        {/* Future items */}
        <div className="flex flex-col gap-3 flex-1" style={{ justifyContent: "center" }}>
          {FUTURE_ITEMS.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.1 }}
              onClick={() => !item.locked && setUnlocked((prev) => new Set([...prev, item.id]))}
              className="rounded-2xl p-4"
              style={{
                background: item.locked
                  ? "rgba(255,255,255,0.02)"
                  : "rgba(255,255,255,0.05)",
                border: `1px solid ${item.color}${item.locked ? "15" : "25"}`,
                backdropFilter: "blur(20px)",
                boxShadow: item.locked ? "none" : `0 8px 32px rgba(0,0,0,0.3)`,
                opacity: item.locked ? 0.55 : 1,
                cursor: item.locked ? "default" : "pointer",
                transition: "all 0.3s",
              }}
            >
              <div className="flex items-center gap-3">
                <div style={{
                  width: "36px", height: "36px",
                  borderRadius: "50%",
                  background: item.locked
                    ? "rgba(200,168,255,0.05)"
                    : `radial-gradient(circle, ${item.color}20, transparent)`,
                  border: `1px solid ${item.color}${item.locked ? "10" : "30"}`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "16px",
                  flexShrink: 0,
                }}>
                  {item.locked ? "🔒" : item.icon}
                </div>
                <div className="flex-1">
                  <p style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "12px",
                    fontWeight: "600",
                    color: item.locked ? "rgba(233,221,255,0.4)" : item.color,
                    marginBottom: "2px",
                  }}>
                    {item.locked ? "???" : item.title}
                  </p>
                  <AnimatePresence>
                    {!item.locked && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        style={{
                          fontFamily: "'Caveat', cursive",
                          fontSize: "14px",
                          color: "#E9DDFF",
                          opacity: 0.7,
                          lineHeight: "1.4",
                        }}
                      >
                        {item.text}
                      </motion.p>
                    )}
                  </AnimatePresence>
                  {item.locked && (
                    <p style={{
                      fontFamily: "'Caveat', cursive",
                      fontSize: "12px",
                      color: "#C8A8FF",
                      opacity: 0.25,
                    }}>
                      Sẽ mở khóa khi đến lúc...
                    </p>
                  )}
                </div>

                {!item.locked && (
                  <motion.div
                    animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
                    style={{ fontSize: "12px", color: item.color }}
                  >
                    ✦
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </GalaxyBg>
  );
}
