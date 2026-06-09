import { useState } from "react";
import { motion } from "motion/react";
import { GalaxyBg } from "../GalaxyBg";

const PALETTE = [
  {
    group: "Core",
    swatches: [
      { name: "Primary", hex: "#C8A8FF", label: "Violet Mist", usage: "CTAs, highlights, active states" },
      { name: "Secondary", hex: "#E9DDFF", label: "Lilac Cloud", usage: "Text, body content, cards" },
      { name: "Accent", hex: "#B794F4", label: "Deep Violet", usage: "Borders, icons, secondary actions" },
    ],
  },
  {
    group: "Aurora",
    swatches: [
      { name: "Aurora Pink", hex: "#F6C6FF", label: "Blossom Aurora", usage: "Soft glows, particles, love moments" },
      { name: "Aurora Blue", hex: "#C5E1FF", label: "Ice Aurora", usage: "Adventure, night sky, cool accents" },
    ],
  },
  {
    group: "Space",
    swatches: [
      { name: "Deep Space", hex: "#120B2D", label: "Midnight Void", usage: "Primary background, deepest dark" },
      { name: "Galaxy Purple", hex: "#26184A", label: "Nebula", usage: "Card surfaces, secondary background" },
    ],
  },
];

function hexToRgb(hex: string) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `${r}, ${g}, ${b}`;
}

function relativeLuminance(hex: string) {
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

export function ScreenColorPalette() {
  const [copied, setCopied] = useState<string | null>(null);

  function copy(hex: string) {
    navigator.clipboard.writeText(hex).catch(() => {});
    setCopied(hex);
    setTimeout(() => setCopied(null), 1500);
  }

  return (
    <GalaxyBg variant="default" className="w-full h-full">
      <div
        className="relative z-10 w-full h-full overflow-y-auto"
        style={{ paddingBottom: "20px" }}
      >
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
            Design System · 01
          </p>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "20px",
            fontWeight: "500",
            color: "#E9DDFF",
          }}>
            Color Palette
          </h2>
        </div>

        <div className="px-4 flex flex-col gap-5">
          {PALETTE.map((group, gi) => (
            <motion.div
              key={group.group}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + gi * 0.08 }}
            >
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "9px",
                letterSpacing: "0.18em",
                color: "#C8A8FF",
                opacity: 0.45,
                textTransform: "uppercase",
                marginBottom: "8px",
              }}>
                {group.group}
              </p>

              <div className="flex flex-col gap-2">
                {group.swatches.map((s, si) => {
                  const isLight = relativeLuminance(s.hex) > 0.4;
                  return (
                    <motion.button
                      key={s.hex}
                      onClick={() => copy(s.hex)}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + gi * 0.08 + si * 0.05 }}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      className="w-full rounded-2xl overflow-hidden text-left"
                      style={{
                        border: "1px solid rgba(200,168,255,0.1)",
                        cursor: "pointer",
                        background: "none",
                      }}
                    >
                      {/* Large swatch area */}
                      <div
                        style={{
                          background: s.hex,
                          height: "64px",
                          position: "relative",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          padding: "0 16px",
                        }}
                      >
                        <span style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "13px",
                          fontWeight: "600",
                          color: isLight ? "#120B2D" : "#E9DDFF",
                          opacity: 0.9,
                        }}>
                          {s.name}
                        </span>
                        <span style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "11px",
                          color: isLight ? "#120B2D" : "#E9DDFF",
                          opacity: 0.6,
                          letterSpacing: "0.05em",
                        }}>
                          {copied === s.hex ? "Copied!" : s.hex}
                        </span>
                      </div>

                      {/* Info row */}
                      <div
                        className="flex items-start justify-between"
                        style={{
                          background: "rgba(255,255,255,0.03)",
                          padding: "10px 16px",
                        }}
                      >
                        <div>
                          <p style={{
                            fontFamily: "'Inter', sans-serif",
                            fontSize: "10px",
                            color: "#C8A8FF",
                            opacity: 0.6,
                            marginBottom: "2px",
                          }}>
                            {s.label}
                          </p>
                          <p style={{
                            fontFamily: "'Inter', sans-serif",
                            fontSize: "9px",
                            color: "#E9DDFF",
                            opacity: 0.35,
                            lineHeight: "1.4",
                            maxWidth: "180px",
                          }}>
                            {s.usage}
                          </p>
                        </div>
                        <div>
                          <p style={{
                            fontFamily: "'Inter', sans-serif",
                            fontSize: "9px",
                            color: "#C8A8FF",
                            opacity: 0.4,
                            textAlign: "right",
                          }}>
                            RGB
                          </p>
                          <p style={{
                            fontFamily: "'Inter', sans-serif",
                            fontSize: "10px",
                            color: "#E9DDFF",
                            opacity: 0.5,
                          }}>
                            {hexToRgb(s.hex)}
                          </p>
                        </div>
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          ))}

          {/* Gradient swatches */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "9px",
              letterSpacing: "0.18em",
              color: "#C8A8FF",
              opacity: 0.45,
              textTransform: "uppercase",
              marginBottom: "8px",
            }}>
              Gradients
            </p>
            <div className="flex flex-col gap-2">
              {[
                { name: "Aurora Dream", gradient: "linear-gradient(135deg, #C8A8FF 0%, #F6C6FF 50%, #C5E1FF 100%)" },
                { name: "Deep Galaxy", gradient: "linear-gradient(160deg, #120B2D 0%, #26184A 50%, #1A0F3A 100%)" },
                { name: "Violet Glow", gradient: "linear-gradient(135deg, #B794F4 0%, #C8A8FF 50%, #E9DDFF 100%)" },
              ].map((g, i) => (
                <div
                  key={i}
                  className="rounded-2xl overflow-hidden"
                  style={{ border: "1px solid rgba(200,168,255,0.1)" }}
                >
                  <div style={{ background: g.gradient, height: "48px" }} />
                  <div style={{ background: "rgba(255,255,255,0.03)", padding: "8px 14px" }}>
                    <p style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "10px",
                      color: "#C8A8FF",
                      opacity: 0.6,
                    }}>
                      {g.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </GalaxyBg>
  );
}
