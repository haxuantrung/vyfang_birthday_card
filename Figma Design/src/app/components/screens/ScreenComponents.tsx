import { useState } from "react";
import { motion } from "motion/react";
import { GalaxyBg } from "../GalaxyBg";

export function ScreenComponents() {
  const [pressed, setPressed] = useState<string | null>(null);
  const [inputVal, setInputVal] = useState("");
  const [toggle, setToggle] = useState(false);
  const [tab, setTab] = useState(0);

  return (
    <GalaxyBg variant="default" className="w-full h-full">
      <div className="relative z-10 w-full h-full overflow-y-auto" style={{ paddingBottom: "24px" }}>

        {/* Header */}
        <div className="sticky top-0 px-5 pt-5 pb-4 z-20"
          style={{ background: "linear-gradient(to bottom, rgba(18,11,45,0.95) 80%, transparent)", backdropFilter: "blur(10px)" }}>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "9px",
            letterSpacing: "0.22em",
            color: "#C8A8FF",
            opacity: 0.5,
            textTransform: "uppercase",
            marginBottom: "4px",
          }}>
            Design System · 04
          </p>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "20px",
            fontWeight: "500",
            color: "#E9DDFF",
          }}>
            Component Library
          </h2>
        </div>

        <div className="px-4 flex flex-col gap-5">

          {/* Buttons */}
          <Section title="Buttons">
            <div className="flex flex-col gap-3">
              {/* Primary */}
              <div>
                <Label>Primary CTA</Label>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setPressed("primary")}
                  className="w-full py-3.5 rounded-xl"
                  style={{
                    background: "linear-gradient(135deg, #C8A8FF, #B794F4)",
                    border: "none",
                    color: "#120B2D",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "13px",
                    fontWeight: "600",
                    letterSpacing: "0.05em",
                    cursor: "pointer",
                    boxShadow: "0 8px 24px rgba(200,168,255,0.3), 0 0 0 1px rgba(200,168,255,0.4)",
                  }}
                >
                  {pressed === "primary" ? "✓ Clicked" : "Mở cửa"}
                </motion.button>
              </div>

              {/* Ghost */}
              <div>
                <Label>Ghost / Secondary</Label>
                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setPressed("ghost")}
                  className="w-full py-3 rounded-xl"
                  style={{
                    background: "rgba(200,168,255,0.06)",
                    border: "1px solid rgba(200,168,255,0.25)",
                    color: "#C8A8FF",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "13px",
                    fontWeight: "500",
                    letterSpacing: "0.05em",
                    cursor: "pointer",
                  }}
                >
                  {pressed === "ghost" ? "✓ Clicked" : "Tiếp theo →"}
                </motion.button>
              </div>

              {/* Icon pill */}
              <div>
                <Label>Icon Pill</Label>
                <div className="flex gap-2">
                  {["← Trước", "Tiếp →", "✦ Khám phá"].map((label, i) => (
                    <motion.button
                      key={i}
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.96 }}
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(200,168,255,0.15)",
                        color: "#C8A8FF",
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "11px",
                        borderRadius: "20px",
                        padding: "6px 14px",
                        cursor: "pointer",
                        backdropFilter: "blur(10px)",
                      }}
                    >
                      {label}
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>
          </Section>

          {/* Input fields */}
          <Section title="Input Fields">
            <div className="flex flex-col gap-3">
              <div>
                <Label>Default Input</Label>
                <input
                  type="text"
                  value={inputVal}
                  onChange={e => setInputVal(e.target.value)}
                  placeholder="Nhập câu trả lời..."
                  className="w-full rounded-xl px-4 py-3 outline-none"
                  style={{
                    background: "rgba(200,168,255,0.06)",
                    border: "1px solid rgba(200,168,255,0.2)",
                    color: "#E9DDFF",
                    fontFamily: "'Caveat', cursive",
                    fontSize: "17px",
                    caretColor: "#C8A8FF",
                  }}
                />
              </div>
              <div>
                <Label>Search / Minimal</Label>
                <div style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(200,168,255,0.12)",
                  borderRadius: "12px",
                  padding: "10px 14px",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}>
                  <span style={{ color: "#C8A8FF", opacity: 0.4, fontSize: "12px" }}>⊘</span>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px", color: "#C8A8FF", opacity: 0.3 }}>
                    Tìm kiếm ký ức...
                  </span>
                </div>
              </div>
            </div>
          </Section>

          {/* Glass Cards */}
          <Section title="Glass Cards">
            <div className="flex flex-col gap-3">
              {/* Standard glass card */}
              <div>
                <Label>Standard Glassmorphism</Label>
                <div className="rounded-2xl p-4" style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(200,168,255,0.15)",
                  backdropFilter: "blur(20px)",
                  boxShadow: "0 24px 60px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)",
                }}>
                  <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "15px", fontStyle: "italic", color: "#E9DDFF", marginBottom: "8px" }}>
                    Mọi thứ dần thay đổi.
                  </p>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px", color: "#C8A8FF", opacity: 0.5 }}>
                    Chapter 01 · Lần Đầu Gặp Nhau
                  </p>
                </div>
              </div>

              {/* Memory card */}
              <div>
                <Label>Memory / Chapter Card</Label>
                <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(246,198,255,0.12)" }}>
                  <div style={{
                    background: "linear-gradient(135deg, rgba(246,198,255,0.08), rgba(200,168,255,0.04))",
                    padding: "16px",
                    borderBottom: "1px solid rgba(246,198,255,0.08)",
                  }}>
                    <div className="flex items-center gap-2 mb-2">
                      <div style={{
                        width: "28px", height: "28px", borderRadius: "50%",
                        background: "radial-gradient(circle, #F6C6FF, #C8A8FF)",
                        boxShadow: "0 0 12px rgba(246,198,255,0.4)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontSize: "12px", color: "#120B2D",
                      }}>♡</div>
                      <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px", color: "#F6C6FF", opacity: 0.7 }}>
                        Cái Ôm Đầu Tiên
                      </span>
                    </div>
                    <p style={{ fontFamily: "'Caveat', cursive", fontSize: "16px", color: "#E9DDFF", opacity: 0.85 }}>
                      Ấm áp và an toàn.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          {/* Star / Navigation */}
          <Section title="Star Components">
            <div className="flex flex-col gap-3">
              <Label>Galaxy Map Stars</Label>
              <div className="flex gap-5 items-center flex-wrap">
                {[
                  { size: 28, label: "Main", color: "#C8A8FF", glow: 12 },
                  { size: 20, label: "Sub", color: "#B794F4", glow: 8 },
                  { size: 12, label: "Secret", color: "#F6C6FF", glow: 6 },
                  { size: 6, label: "BG", color: "#E9DDFF", glow: 2 },
                ].map((s) => (
                  <div key={s.label} className="flex flex-col items-center gap-2">
                    <motion.div
                      animate={{ scale: [1, 1.15, 1], opacity: [0.8, 1, 0.8] }}
                      transition={{ duration: 3 + s.size * 0.05, repeat: Infinity }}
                      style={{
                        width: s.size, height: s.size,
                        borderRadius: "50%",
                        background: `radial-gradient(circle, ${s.color}, #B794F4)`,
                        boxShadow: `0 0 ${s.glow}px ${s.color}80, 0 0 ${s.glow * 2}px ${s.color}30`,
                      }}
                    />
                    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "8px", color: "#C8A8FF", opacity: 0.5 }}>
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Section>

          {/* Tabs */}
          <Section title="Tab Navigation">
            <Label>Segment Control</Label>
            <div className="flex gap-1 rounded-xl p-1" style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(200,168,255,0.1)",
            }}>
              {["Screens", "Design System"].map((t, i) => (
                <button
                  key={i}
                  onClick={() => setTab(i)}
                  className="flex-1 py-2 rounded-lg transition-all duration-200"
                  style={{
                    background: tab === i ? "rgba(200,168,255,0.12)" : "transparent",
                    border: tab === i ? "1px solid rgba(200,168,255,0.2)" : "1px solid transparent",
                    color: tab === i ? "#E9DDFF" : "#C8A8FF",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "11px",
                    fontWeight: tab === i ? "500" : "400",
                    cursor: "pointer",
                    opacity: tab === i ? 1 : 0.5,
                  }}
                >
                  {t}
                </button>
              ))}
            </div>
          </Section>

          {/* Toggle */}
          <Section title="Toggle & Tags">
            <div className="flex flex-col gap-3">
              <Label>Toggle Switch</Label>
              <div className="flex items-center gap-3">
                <motion.button
                  onClick={() => setToggle(!toggle)}
                  className="relative"
                  style={{
                    width: "44px", height: "24px",
                    borderRadius: "12px",
                    background: toggle ? "linear-gradient(135deg, #C8A8FF, #B794F4)" : "rgba(200,168,255,0.15)",
                    border: "1px solid rgba(200,168,255,0.2)",
                    cursor: "pointer",
                    padding: 0,
                    flexShrink: 0,
                  }}
                >
                  <motion.div
                    animate={{ x: toggle ? 20 : 2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    style={{
                      position: "absolute", top: "2px",
                      width: "18px", height: "18px",
                      borderRadius: "50%",
                      background: "#E9DDFF",
                      boxShadow: "0 2px 4px rgba(0,0,0,0.3)",
                    }}
                  />
                </motion.button>
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px", color: "#C8A8FF", opacity: 0.7 }}>
                  {toggle ? "Đã bật" : "Đã tắt"}
                </span>
              </div>

              <Label>Tags & Chips</Label>
              <div className="flex flex-wrap gap-2">
                {["✦ Lần đầu gặp", "♡ Cái ôm", "⛺ Hồ Trị An", "♊ Gemini", "⭐ Secret"].map((tag) => (
                  <div key={tag} style={{
                    fontFamily: "'Caveat', cursive",
                    fontSize: "13px",
                    color: "#C8A8FF",
                    background: "rgba(200,168,255,0.08)",
                    border: "1px solid rgba(200,168,255,0.15)",
                    borderRadius: "20px",
                    padding: "4px 12px",
                    whiteSpace: "nowrap",
                  }}>
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          </Section>

          {/* Voice player */}
          <Section title="Voice Player">
            <div className="rounded-2xl p-4 flex items-center gap-3" style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(233,221,255,0.1)",
              backdropFilter: "blur(20px)",
            }}>
              <div style={{
                width: "36px", height: "36px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, rgba(200,168,255,0.3), rgba(183,148,244,0.2))",
                border: "1px solid rgba(200,168,255,0.3)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "14px", color: "#E9DDFF",
                cursor: "pointer",
                flexShrink: 0,
              }}>
                ▶
              </div>
              <div className="flex-1">
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px", color: "#C8A8FF", opacity: 0.6, marginBottom: "4px" }}>
                  Giọng đọc từ anh
                </p>
                <div className="flex items-center gap-[2px] h-4">
                  {[...Array(28)].map((_, i) => (
                    <motion.div
                      key={i}
                      style={{ width: "2px", background: "#C8A8FF", opacity: 0.35, borderRadius: "1px" }}
                      animate={{ height: [`${3 + (i % 5) * 2}px`, `${7 + (i % 7) * 2}px`, `${3 + (i % 5) * 2}px`] }}
                      transition={{ duration: 0.6 + (i * 0.07) % 0.5, repeat: Infinity, delay: (i * 0.04) % 0.4 }}
                    />
                  ))}
                </div>
              </div>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px", color: "#C8A8FF", opacity: 0.35 }}>1:28</span>
            </div>
          </Section>

          {/* Progress */}
          <Section title="Progress Indicators">
            <div className="flex flex-col gap-3">
              <Label>Screen Progress Dots</Label>
              <div className="flex gap-1.5 items-center">
                {[...Array(8)].map((_, i) => (
                  <div key={i} style={{
                    height: "5px",
                    width: i === 3 ? "20px" : "5px",
                    borderRadius: "3px",
                    background: i === 3 ? "linear-gradient(90deg, #C8A8FF, #B794F4)" : "rgba(200,168,255,0.2)",
                    transition: "all 0.3s",
                  }} />
                ))}
              </div>

              <Label>Linear Progress Bar</Label>
              <div style={{
                height: "3px",
                background: "rgba(200,168,255,0.12)",
                borderRadius: "2px",
                overflow: "hidden",
              }}>
                <motion.div
                  style={{
                    height: "100%",
                    background: "linear-gradient(90deg, #C8A8FF, #F6C6FF)",
                    borderRadius: "2px",
                  }}
                  initial={{ width: "0%" }}
                  animate={{ width: "65%" }}
                  transition={{ delay: 0.5, duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                />
              </div>
            </div>
          </Section>
        </div>
      </div>
    </GalaxyBg>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-2xl overflow-hidden"
      style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(200,168,255,0.1)" }}
    >
      <div className="px-4 py-3 border-b" style={{ borderColor: "rgba(200,168,255,0.08)" }}>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "9px", letterSpacing: "0.18em", color: "#C8A8FF", opacity: 0.5, textTransform: "uppercase" }}>
          {title}
        </p>
      </div>
      <div className="px-4 py-4">{children}</div>
    </motion.div>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <p style={{
      fontFamily: "'Inter', sans-serif",
      fontSize: "9px",
      color: "#C8A8FF",
      opacity: 0.4,
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      marginBottom: "8px",
    }}>
      {children}
    </p>
  );
}
