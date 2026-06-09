import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { GalaxyBg } from "../GalaxyBg";
import { FloatingParticles } from "../FloatingParticles";

const CORRECT = "chidori";

interface Props {
  onUnlock?: () => void;
}

export function Screen02Password({ onUnlock }: Props) {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [focused, setFocused] = useState(false);

  function handleSubmit() {
    if (value.trim().toLowerCase() === CORRECT) {
      setSuccess(true);
      setTimeout(() => onUnlock?.(), 1200);
    } else {
      setError(true);
      setTimeout(() => { setError(false); setValue(""); }, 1000);
    }
  }

  return (
    <GalaxyBg variant="deep" className="w-full h-full">
      <FloatingParticles count={25} color="#C8A8FF" minSize={1} maxSize={4} />

      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 45%, rgba(183, 148, 244, 0.12) 0%, transparent 70%)" }} />

      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-6">

        {/* Top decorative element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8 flex flex-col items-center gap-2"
        >
          <div className="flex gap-1.5 mb-2">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="rounded-full"
                style={{ width: 4, height: 4, background: "#C8A8FF" }}
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
              />
            ))}
          </div>
          <span style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "10px",
            letterSpacing: "0.2em",
            color: "#C8A8FF",
            opacity: 0.5,
            textTransform: "uppercase",
          }}>
            Khu Vực Riêng Tư
          </span>
        </motion.div>

        {/* Glass card */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="w-full max-w-[320px] rounded-3xl p-8"
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(200, 168, 255, 0.15)",
            backdropFilter: "blur(30px)",
            boxShadow: "0 32px 80px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.04), inset 0 1px 0 rgba(255,255,255,0.06)",
          }}
        >
          {/* Question */}
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "18px",
            fontWeight: "400",
            fontStyle: "italic",
            color: "#E9DDFF",
            textAlign: "center",
            lineHeight: "1.7",
            marginBottom: "28px",
          }}>
            Em còn nhớ nơi mọi thứ bắt đầu không?
          </h2>

          {/* Input */}
          <motion.div
            animate={error ? { x: [-8, 8, -6, 6, -3, 0] } : {}}
            transition={{ duration: 0.4 }}
            className="relative mb-4"
          >
            <input
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              placeholder="Nhập câu trả lời..."
              className="w-full rounded-xl px-4 py-3 outline-none text-center transition-all duration-300"
              style={{
                background: "rgba(200, 168, 255, 0.06)",
                border: `1px solid ${error ? "rgba(246, 198, 255, 0.5)" : focused ? "rgba(200, 168, 255, 0.4)" : "rgba(200, 168, 255, 0.15)"}`,
                color: "#E9DDFF",
                fontFamily: "'Caveat', cursive",
                fontSize: "18px",
                letterSpacing: "0.05em",
                caretColor: "#C8A8FF",
                boxShadow: focused ? "0 0 0 3px rgba(200, 168, 255, 0.08), 0 0 20px rgba(200, 168, 255, 0.1)" : "none",
              }}
            />
            <AnimatePresence>
              {error && (
                <motion.p
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="absolute -bottom-6 left-0 right-0 text-center"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "11px",
                    color: "#F6C6FF",
                    opacity: 0.7,
                  }}
                >
                  Thử lại nhé em...
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>

          {/* CTA Button */}
          <motion.button
            onClick={handleSubmit}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="w-full mt-8 py-3.5 rounded-xl transition-all duration-300"
            style={{
              background: success
                ? "linear-gradient(135deg, #B794F4, #C8A8FF)"
                : "linear-gradient(135deg, rgba(183, 148, 244, 0.25), rgba(200, 168, 255, 0.15))",
              border: "1px solid rgba(200, 168, 255, 0.3)",
              color: "#E9DDFF",
              fontFamily: "'Inter', sans-serif",
              fontSize: "13px",
              fontWeight: "500",
              letterSpacing: "0.08em",
              cursor: "pointer",
              boxShadow: success ? "0 0 30px rgba(183, 148, 244, 0.4)" : "none",
            }}
          >
            {success ? "✦  Chào mừng em quay lại  ✦" : "Mở cửa"}
          </motion.button>
        </motion.div>

        {/* Hint */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-6"
          style={{
            fontFamily: "'Caveat', cursive",
            fontSize: "13px",
            color: "#C8A8FF",
            opacity: 0.3,
            textAlign: "center",
          }}
        >
          Gợi ý: chỗ hẹn "cà phê" đầu tiên
        </motion.p>
      </div>
    </GalaxyBg>
  );
}
