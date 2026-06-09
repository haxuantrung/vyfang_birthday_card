import { motion } from "motion/react";
import { GalaxyBg } from "../GalaxyBg";

const MOTION_NOTES = [
  {
    screen: "All Screens",
    category: "Global",
    color: "#C8A8FF",
    items: [
      { name: "Screen transition", spec: "x: ±40px, opacity 0→1", duration: "350ms", easing: "cubic-bezier(0.25, 0.46, 0.45, 0.94)", note: "Directional slide between screens" },
      { name: "Aurora orbs", spec: "scale + position drift", duration: "10–18s", easing: "easeInOut", note: "Continuous ambient glow movement" },
      { name: "Star field twinkle", spec: "opacity 0.2→1→0.2", duration: "2–5s", easing: "easeInOut", note: "Staggered per-star with random delays" },
      { name: "Floating particles", spec: "y: bottom→top, opacity 0→1→0", duration: "6–14s", easing: "easeOut", note: "Continuous upward drift loop" },
    ],
  },
  {
    screen: "Screen 01",
    category: "Countdown",
    color: "#E9DDFF",
    items: [
      { name: "Timer digit flip", spec: "y: -8px → 0, opacity 0→1", duration: "300ms", easing: "easeOut", note: "Each second digit animates in on change" },
      { name: "Hero text reveal", spec: "y: 16px → 0, opacity 0→1", duration: "900ms", easing: "easeOut", note: "Staggered — address, title, divider, timer" },
    ],
  },
  {
    screen: "Screen 02",
    category: "Password Gate",
    color: "#F6C6FF",
    items: [
      { name: "Card mount", spec: "y: 30px → 0, scale: 0.95→1", duration: "900ms", easing: "spring(100, 15)", note: "Glass card floats up on load" },
      { name: "Error shake", spec: "x: [-8, 8, -6, 6, 0]", duration: "400ms", easing: "linear", note: "Horizontal shake on wrong password" },
      { name: "Input focus ring", spec: "boxShadow expand", duration: "200ms", easing: "easeOut", note: "Purple glow expands on focus" },
      { name: "Success flash", spec: "background gradient shift", duration: "300ms", easing: "easeOut", note: "Button fills solid purple on success" },
    ],
  },
  {
    screen: "Screen 04",
    category: "Galaxy Map",
    color: "#C8A8FF",
    items: [
      { name: "Constellation lines", spec: "pathLength: 0→1", duration: "1.2s", easing: "easeOut", note: "SVG lines draw in sequentially" },
      { name: "Star spawn", spec: "scale: 0→1, opacity 0→1", duration: "600ms", easing: "spring(120, 14)", note: "Each star pops in with spring physics" },
      { name: "Star pulse aura", spec: "scale: 1→1.4→1, opacity 0.5→0.15→0.5", duration: "3–5s", easing: "easeInOut", note: "Outer glow ring breathes continuously" },
      { name: "Star hover", spec: "scale: 1→1.3", duration: "200ms", easing: "easeOut", note: "Core star enlarges on hover/tap" },
      { name: "Secret star reveal", spec: "opacity 0.2→1, size 8px→14px", duration: "400ms", easing: "easeOut", note: "Hidden star blooms when tapped" },
    ],
  },
  {
    screen: "Screen 05",
    category: "First Meet",
    color: "#B794F4",
    items: [
      { name: "Stars converging", spec: "left/right: 8%→40%→42%", duration: "6s", easing: "spring curve", note: "Two stars slowly find each other, loop" },
      { name: "Collision glow", spec: "scale: 0→1.5→0, opacity 0→1→0", duration: "6s delay 3s", easing: "easeOut", note: "White bloom at meeting point" },
      { name: "Timeline cards", spec: "x: ±20px → 0", duration: "700ms", easing: "easeOut", note: "Alternating left/right slide in" },
    ],
  },
  {
    screen: "Screen 07",
    category: "Cái Ôm Đầu Tiên",
    color: "#F6C6FF",
    items: [
      { name: "Central orb breathe", spec: "scale: 1→1.15→1, opacity 0.6→1→0.6", duration: "4s", easing: "easeInOut", note: "Warm heartbeat-like pulse" },
      { name: "Lavender particles", spec: "y: 0→-200px, opacity 0→0.6→0", duration: "4–7s", easing: "easeOut", note: "Rising particles from screen bottom" },
    ],
  },
  {
    screen: "Screen 09",
    category: "20 Điều",
    color: "#C8A8FF",
    items: [
      { name: "Card swipe away", spec: "x: ±200px, rotate: ±15°", duration: "300ms", easing: "easeOut", note: "Follows drag, exits on threshold ±80px" },
      { name: "Stack compression", spec: "scale: 1, 0.96, 0.92 per depth", duration: "CSS", easing: "—", note: "Cards behind appear progressively smaller" },
      { name: "Progress bar fill", spec: "width: 0%→(n/20)×100%", duration: "300ms", easing: "easeOut", note: "Fills as cards are swiped" },
    ],
  },
  {
    screen: "Screen 10",
    category: "Polaroids",
    color: "#F6C6FF",
    items: [
      { name: "Polaroid spawn", spec: "scale: 0.8→1, rotate to final", duration: "700ms", easing: "spring(120, 14)", note: "Each photo pops in sequentially" },
      { name: "Hover lift", spec: "scale: 0.95–1.05", duration: "200ms", easing: "easeOut", note: "Non-featured shrink, featured lifts" },
    ],
  },
  {
    screen: "Screen 14",
    category: "Final Letter",
    color: "#E9DDFF",
    items: [
      { name: "Star → letter transform", spec: "scale: 1→0.8, opacity exit then card enters", duration: "800ms", easing: "spring", note: "AnimatePresence mode='wait' swap" },
      { name: "Letter mount", spec: "y: 40px→0, scale: 0.9→1", duration: "800ms", easing: "spring(80, 12)", note: "Glass paper card unfolds upward" },
      { name: "Waveform bars", spec: "height: min→max→min per bar", duration: "0.5–1s stagger", easing: "easeInOut", note: "Animated when isPlaying = true" },
    ],
  },
  {
    screen: "Screen 15",
    category: "Ending",
    color: "#C8A8FF",
    items: [
      { name: "Star glow rings", spec: "scale: 1→1.1→1, opacity 0.3→0.1→0.3", duration: "4–7s", easing: "easeInOut", note: "Three concentric rings breathing" },
      { name: "Fade-in sequence", spec: "opacity 0→1 staggered 0.6s each", duration: "Total ~4s", easing: "easeOut", note: "Star → title → divider → message → signature" },
      { name: "Galaxy fade dots", spec: "opacity 0→0.3→0, y: 0→-20px", duration: "4–6s", easing: "easeOut", note: "6 dots drift upward and vanish in loop" },
    ],
  },
];

export function ScreenMotionNotes() {
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
            Design System · 05
          </p>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "20px",
            fontWeight: "500",
            color: "#E9DDFF",
          }}>
            Motion Design Notes
          </h2>
          <p style={{
            fontFamily: "'Caveat', cursive",
            fontSize: "13px",
            color: "#C8A8FF",
            opacity: 0.45,
            marginTop: "4px",
          }}>
            All animations use Motion (Framer Motion) · React
          </p>
        </div>

        <div className="px-4 flex flex-col gap-4">

          {/* Principles */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="rounded-2xl p-4"
            style={{
              background: "linear-gradient(135deg, rgba(200,168,255,0.06), rgba(183,148,244,0.03))",
              border: "1px solid rgba(200,168,255,0.15)",
            }}
          >
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "9px", letterSpacing: "0.18em", color: "#C8A8FF", opacity: 0.5, textTransform: "uppercase", marginBottom: "10px" }}>
              Motion Principles
            </p>
            <div className="flex flex-col gap-2">
              {[
                { icon: "◉", principle: "Emotional weight", note: "Slower animations for emotional moments (letter, ending)" },
                { icon: "◈", principle: "Spring physics", note: "Star spawns and card mounts use spring for organic feel" },
                { icon: "✦", principle: "Staggered reveals", note: "Sequential entrance creates reading rhythm" },
                { icon: "⬡", principle: "Infinite ambient loops", note: "Stars, aurora, particles never stop — the universe lives" },
                { icon: "⊘", principle: "Reduced motion friendly", note: "Ambient loops fade gracefully for prefers-reduced-motion" },
              ].map((p, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <span style={{ color: "#C8A8FF", opacity: 0.5, fontSize: "11px", flexShrink: 0, marginTop: "2px" }}>{p.icon}</span>
                  <div>
                    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", fontWeight: "500", color: "#E9DDFF", opacity: 0.8 }}>{p.principle}</span>
                    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px", color: "#C8A8FF", opacity: 0.45 }}> — {p.note}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Easing reference */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="rounded-2xl overflow-hidden"
            style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(200,168,255,0.1)" }}
          >
            <div className="px-4 py-3 border-b" style={{ borderColor: "rgba(200,168,255,0.08)" }}>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "9px", letterSpacing: "0.18em", color: "#C8A8FF", opacity: 0.5, textTransform: "uppercase" }}>
                Easing Reference
              </p>
            </div>
            <div className="px-4 py-3 flex flex-col gap-2.5">
              {[
                { name: "Screen Enter/Exit", curve: "cubic-bezier(0.25, 0.46, 0.45, 0.94)", alias: "easeOut custom" },
                { name: "Star Spawn", curve: "spring { stiffness: 120, damping: 14 }", alias: "spring" },
                { name: "Hover scale", curve: "easeOut", alias: "200ms easeOut" },
                { name: "Ambient loops", curve: "easeInOut", alias: "sinusoidal" },
                { name: "Card swipe", curve: "easeOut", alias: "300ms easeOut" },
              ].map((e, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px", color: "#E9DDFF", opacity: 0.7, flex: "1", minWidth: 0 }}>
                    {e.name}
                  </span>
                  <code style={{
                    fontFamily: "monospace",
                    fontSize: "8px",
                    color: "#C8A8FF",
                    opacity: 0.5,
                    background: "rgba(200,168,255,0.06)",
                    border: "1px solid rgba(200,168,255,0.1)",
                    borderRadius: "6px",
                    padding: "2px 6px",
                    flexShrink: 0,
                    maxWidth: "140px",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}>
                    {e.alias}
                  </code>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Screen-by-screen notes */}
          {MOTION_NOTES.map((note, ni) => (
            <motion.div
              key={note.screen}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + ni * 0.05 }}
              className="rounded-2xl overflow-hidden"
              style={{ background: "rgba(255,255,255,0.025)", border: `1px solid ${note.color}15` }}
            >
              {/* Screen header */}
              <div
                className="px-4 py-3 flex items-center gap-2 border-b"
                style={{ borderColor: `${note.color}10`, background: `${note.color}06` }}
              >
                <div style={{
                  width: "6px", height: "6px", borderRadius: "50%",
                  background: `radial-gradient(circle, ${note.color}, ${note.color}80)`,
                  boxShadow: `0 0 6px ${note.color}60`,
                }} />
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px", fontWeight: "600", color: note.color, opacity: 0.8 }}>
                  {note.screen}
                </p>
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "9px", color: note.color, opacity: 0.4, marginLeft: "auto" }}>
                  {note.category}
                </span>
              </div>

              {/* Animation items */}
              <div className="flex flex-col divide-y" style={{ "--tw-divide-opacity": "1" } as React.CSSProperties}>
                {note.items.map((item, ii) => (
                  <div
                    key={ii}
                    className="px-4 py-3"
                    style={{ borderColor: "rgba(200,168,255,0.05)" }}
                  >
                    <div className="flex items-start justify-between gap-2 mb-1.5">
                      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", fontWeight: "500", color: "#E9DDFF", opacity: 0.8 }}>
                        {item.name}
                      </p>
                      <div className="flex gap-1.5 flex-shrink-0">
                        <span style={{
                          fontFamily: "'Inter', sans-serif", fontSize: "8px",
                          color: note.color, opacity: 0.6,
                          background: `${note.color}10`,
                          border: `1px solid ${note.color}15`,
                          borderRadius: "6px", padding: "1px 6px",
                        }}>
                          {item.duration}
                        </span>
                      </div>
                    </div>
                    <p style={{ fontFamily: "monospace", fontSize: "9px", color: "#C8A8FF", opacity: 0.5, marginBottom: "4px" }}>
                      {item.spec}
                    </p>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "9px", color: "#E9DDFF", opacity: 0.35, lineHeight: "1.5" }}>
                      {item.note}
                    </p>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "8px", color: "#C8A8FF", opacity: 0.3, marginTop: "2px" }}>
                      easing: {item.easing}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </GalaxyBg>
  );
}
