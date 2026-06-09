import { motion } from "motion/react";
import { GalaxyBg } from "../GalaxyBg";

const SPACING = [4, 8, 12, 16, 20, 24, 32, 40, 48, 64];

const RADII = [
  { name: "sm", value: "8px", label: "Tags, chips" },
  { name: "md", value: "12px", label: "Buttons" },
  { name: "lg", value: "16px", label: "Small cards" },
  { name: "xl", value: "20px", label: "Input fields" },
  { name: "2xl", value: "24px", label: "Cards" },
  { name: "3xl", value: "32px", label: "Large cards" },
  { name: "full", value: "9999px", label: "Pills, avatars" },
];

const SHADOWS = [
  { name: "Glow SM", css: "0 0 12px rgba(200,168,255,0.3)", usage: "Star icons" },
  { name: "Glow MD", css: "0 0 24px rgba(200,168,255,0.4)", usage: "Active stars" },
  { name: "Glow LG", css: "0 0 48px rgba(200,168,255,0.3)", usage: "Featured elements" },
  { name: "Card", css: "0 24px 60px rgba(0,0,0,0.45)", usage: "Glass cards" },
  { name: "Aurora", css: "0 0 80px rgba(183,148,244,0.2)", usage: "Background orbs" },
];

const GRID = [
  { label: "Columns", value: "1–2 columns", note: "Single column for emotional screens, 2-col for info" },
  { label: "Margin", value: "20px", note: "Consistent left/right padding" },
  { label: "Gutter", value: "12px", note: "Between cards and components" },
  { label: "Status bar", value: "48px", note: "Dynamic Island reserved area" },
  { label: "Nav bar", value: "44px", note: "Bottom safe area" },
];

const TOKENS: { name: string; value: string; type: string }[] = [
  { name: "--color-primary", value: "#C8A8FF", type: "color" },
  { name: "--color-secondary", value: "#E9DDFF", type: "color" },
  { name: "--color-accent", value: "#B794F4", type: "color" },
  { name: "--color-aurora-pink", value: "#F6C6FF", type: "color" },
  { name: "--color-aurora-blue", value: "#C5E1FF", type: "color" },
  { name: "--color-deep-space", value: "#120B2D", type: "color" },
  { name: "--color-galaxy", value: "#26184A", type: "color" },
  { name: "--font-display", value: "Playfair Display", type: "font" },
  { name: "--font-body", value: "Inter", type: "font" },
  { name: "--font-letter", value: "Caveat", type: "font" },
  { name: "--blur-glass", value: "blur(20px)", type: "effect" },
  { name: "--blur-heavy", value: "blur(40px)", type: "effect" },
  { name: "--radius-card", value: "24px", type: "radius" },
  { name: "--glass-bg", value: "rgba(255,255,255,0.04)", type: "effect" },
  { name: "--glass-border", value: "rgba(200,168,255,0.15)", type: "effect" },
];

export function ScreenDesignSystem() {
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
            Design System · 03
          </p>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "20px",
            fontWeight: "500",
            color: "#E9DDFF",
          }}>
            Design System
          </h2>
        </div>

        <div className="px-4 flex flex-col gap-5">

          {/* Spacing scale */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="rounded-2xl overflow-hidden"
            style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(200,168,255,0.1)" }}
          >
            <div className="px-4 py-3 border-b" style={{ borderColor: "rgba(200,168,255,0.08)" }}>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "9px", letterSpacing: "0.18em", color: "#C8A8FF", opacity: 0.5, textTransform: "uppercase" }}>
                Spacing Scale
              </p>
            </div>
            <div className="px-4 py-3 flex flex-col gap-2">
              {SPACING.map((s, i) => (
                <motion.div
                  key={s}
                  initial={{ opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 + i * 0.03 }}
                  className="flex items-center gap-3"
                >
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "9px", color: "#C8A8FF", opacity: 0.4, width: "28px", flexShrink: 0 }}>
                    {s}
                  </span>
                  <div style={{
                    height: "8px",
                    width: `${s * 1.5}px`,
                    borderRadius: "4px",
                    background: "linear-gradient(90deg, #C8A8FF, #B794F4)",
                    opacity: 0.5 + (i * 0.05),
                  }} />
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "9px", color: "#E9DDFF", opacity: 0.3 }}>
                    {s}px
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Border radius */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="rounded-2xl overflow-hidden"
            style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(200,168,255,0.1)" }}
          >
            <div className="px-4 py-3 border-b" style={{ borderColor: "rgba(200,168,255,0.08)" }}>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "9px", letterSpacing: "0.18em", color: "#C8A8FF", opacity: 0.5, textTransform: "uppercase" }}>
                Border Radius
              </p>
            </div>
            <div className="px-4 py-4 flex flex-wrap gap-3">
              {RADII.map((r, i) => (
                <motion.div
                  key={r.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.25 + i * 0.04 }}
                  className="flex flex-col items-center gap-1.5"
                >
                  <div style={{
                    width: "36px", height: "36px",
                    background: "rgba(200, 168, 255, 0.1)",
                    border: "1px solid rgba(200, 168, 255, 0.2)",
                    borderRadius: r.value === "9999px" ? "9999px" : r.value,
                  }} />
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "8px", color: "#C8A8FF", opacity: 0.5 }}>
                    {r.name}
                  </p>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "8px", color: "#E9DDFF", opacity: 0.3 }}>
                    {r.value}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Shadow / Glow system */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="rounded-2xl overflow-hidden"
            style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(200,168,255,0.1)" }}
          >
            <div className="px-4 py-3 border-b" style={{ borderColor: "rgba(200,168,255,0.08)" }}>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "9px", letterSpacing: "0.18em", color: "#C8A8FF", opacity: 0.5, textTransform: "uppercase" }}>
                Glow & Shadow System
              </p>
            </div>
            <div className="px-4 py-4 flex flex-col gap-3">
              {SHADOWS.map((s, i) => (
                <motion.div
                  key={s.name}
                  initial={{ opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.35 + i * 0.05 }}
                  className="flex items-center gap-3"
                >
                  <div style={{
                    width: "32px", height: "32px",
                    borderRadius: "8px",
                    background: "rgba(200, 168, 255, 0.08)",
                    border: "1px solid rgba(200, 168, 255, 0.12)",
                    boxShadow: s.css,
                    flexShrink: 0,
                  }} />
                  <div>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", color: "#E9DDFF", opacity: 0.75 }}>{s.name}</p>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "9px", color: "#C8A8FF", opacity: 0.4 }}>{s.usage}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Layout grid */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="rounded-2xl overflow-hidden"
            style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(200,168,255,0.1)" }}
          >
            <div className="px-4 py-3 border-b" style={{ borderColor: "rgba(200,168,255,0.08)" }}>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "9px", letterSpacing: "0.18em", color: "#C8A8FF", opacity: 0.5, textTransform: "uppercase" }}>
                Layout Grid · iPhone 15 Pro 390×844
              </p>
            </div>
            <div className="px-4 py-3 flex flex-col divide-y" style={{ "--tw-divide-opacity": "1" } as React.CSSProperties}>
              {GRID.map((g, i) => (
                <motion.div
                  key={g.label}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.45 + i * 0.04 }}
                  className="flex items-center justify-between py-2.5"
                  style={{ borderColor: "rgba(200,168,255,0.06)" }}
                >
                  <div>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", color: "#E9DDFF", opacity: 0.7 }}>{g.label}</p>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "9px", color: "#C8A8FF", opacity: 0.35 }}>{g.note}</p>
                  </div>
                  <span style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "11px",
                    fontWeight: "600",
                    color: "#C8A8FF",
                    background: "rgba(200,168,255,0.08)",
                    border: "1px solid rgba(200,168,255,0.15)",
                    borderRadius: "8px",
                    padding: "3px 10px",
                  }}>
                    {g.value}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Design tokens */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="rounded-2xl overflow-hidden"
            style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(200,168,255,0.1)" }}
          >
            <div className="px-4 py-3 border-b" style={{ borderColor: "rgba(200,168,255,0.08)" }}>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "9px", letterSpacing: "0.18em", color: "#C8A8FF", opacity: 0.5, textTransform: "uppercase" }}>
                CSS Design Tokens
              </p>
            </div>
            <div className="px-4 py-3 flex flex-col gap-1">
              {TOKENS.map((t, i) => (
                <motion.div
                  key={t.name}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.55 + i * 0.03 }}
                  className="flex items-center gap-2"
                >
                  {t.type === "color" && (
                    <div style={{ width: "10px", height: "10px", borderRadius: "3px", background: t.value, flexShrink: 0 }} />
                  )}
                  {t.type !== "color" && (
                    <div style={{
                      width: "10px", height: "10px", borderRadius: "3px",
                      background: "rgba(200,168,255,0.1)",
                      border: "1px solid rgba(200,168,255,0.2)",
                      flexShrink: 0,
                    }} />
                  )}
                  <code style={{
                    fontFamily: "monospace",
                    fontSize: "9px",
                    color: "#C8A8FF",
                    opacity: 0.6,
                    flex: 1,
                  }}>
                    {t.name}
                  </code>
                  <span style={{
                    fontFamily: "monospace",
                    fontSize: "9px",
                    color: "#E9DDFF",
                    opacity: 0.45,
                  }}>
                    {t.value}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </GalaxyBg>
  );
}
