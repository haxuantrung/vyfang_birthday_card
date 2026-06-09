import { motion } from "motion/react";
import { GalaxyBg } from "../GalaxyBg";

const FONTS = [
  {
    name: "Playfair Display",
    role: "Hero / Display",
    styles: ["Regular 400", "Medium 500", "SemiBold 600", "Bold 700", "Italic 400i"],
    specimen: "Vyfang",
    subSpec: "Chúc mừng sinh nhật",
    description: "Elegant serif for large headings, emotional moments, and hero text.",
    usage: ["Screen titles", "Birthday message", "Chapter headings", "Galaxy Map labels"],
    color: "#C8A8FF",
    family: "'Playfair Display', serif",
    weights: [
      { weight: 400, label: "Regular", text: "Một ngôi sao nhỏ" },
      { weight: 500, label: "Medium", text: "Ký ức tháng sáu" },
      { weight: 600, label: "SemiBold", text: "Chúc mừng sinh nhật" },
      { weight: 700, label: "Bold", text: "Vyfang" },
    ],
  },
  {
    name: "Caveat",
    role: "Letter / Handwritten",
    styles: ["Regular 400", "Medium 500", "SemiBold 600", "Bold 700"],
    specimen: "Anh yêu em.",
    subSpec: "Mùa sinh nhật đầu tiên",
    description: "Handwritten feel for personal letters, captions, and intimate messages.",
    usage: ["Final letter", "Memory captions", "Secret messages", "Polaroid labels"],
    color: "#F6C6FF",
    family: "'Caveat', cursive",
    weights: [
      { weight: 400, label: "Regular", text: "Gửi Vyfang, anh muốn nói..." },
      { weight: 600, label: "SemiBold", text: "Cảm ơn em đã đến" },
      { weight: 700, label: "Bold", text: "— Aiu" },
    ],
  },
  {
    name: "Inter",
    role: "Body / UI",
    styles: ["Light 300", "Regular 400", "Medium 500", "SemiBold 600"],
    specimen: "UI Elements",
    subSpec: "Labels · Tags · Metadata",
    description: "Clean, modern sans-serif for all UI text, labels, and metadata.",
    usage: ["Navigation labels", "Chapter tags", "Timestamps", "Metadata text", "Buttons"],
    color: "#C5E1FF",
    family: "'Inter', sans-serif",
    weights: [
      { weight: 300, label: "Light", text: "Khám phá vũ trụ của chúng ta" },
      { weight: 400, label: "Regular", text: "Chapter 01 · Lần đầu gặp nhau" },
      { weight: 500, label: "Medium", text: "10 · 06 · 2026" },
      { weight: 600, label: "SemiBold", text: "GALAXY MAP · SECRET STARS" },
    ],
  },
];

const TYPE_SCALE = [
  { name: "Display", size: "38px", weight: 700, font: "Playfair Display", example: "Vyfang" },
  { name: "H1", size: "28px", weight: 500, font: "Playfair Display", example: "Chúc mừng sinh nhật" },
  { name: "H2", size: "22px", weight: 500, font: "Playfair Display", example: "Galaxy Map" },
  { name: "Letter", size: "18px", weight: 400, font: "Caveat", example: "Anh muốn nói điều này..." },
  { name: "Body", size: "15px", weight: 400, font: "Playfair Display", example: "Mọi thứ dần thay đổi." },
  { name: "Label", size: "11px", weight: 500, font: "Inter", example: "CHAPTER 01 · MEMORY" },
  { name: "Caption", size: "9px", weight: 500, font: "Inter", example: "SECRET STARS · 5 FOUND" },
];

export function ScreenTypography() {
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
            Design System · 02
          </p>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "20px",
            fontWeight: "500",
            color: "#E9DDFF",
          }}>
            Typography
          </h2>
        </div>

        <div className="px-4 flex flex-col gap-5">

          {/* Type scale */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="rounded-2xl overflow-hidden"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(200,168,255,0.1)",
            }}
          >
            <div className="px-4 py-3 border-b" style={{ borderColor: "rgba(200,168,255,0.08)" }}>
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "9px",
                letterSpacing: "0.18em",
                color: "#C8A8FF",
                opacity: 0.5,
                textTransform: "uppercase",
              }}>
                Type Scale
              </p>
            </div>
            <div className="flex flex-col divide-y" style={{ "--tw-divide-opacity": "1" } as React.CSSProperties}>
              {TYPE_SCALE.map((t, i) => (
                <motion.div
                  key={t.name}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 + i * 0.04 }}
                  className="px-4 py-3 flex items-center justify-between gap-3"
                  style={{ borderColor: "rgba(200,168,255,0.06)" }}
                >
                  <div>
                    <p style={{
                      fontFamily: t.name === "Inter" || t.name === "Label" || t.name === "Caption" ? "'Inter', sans-serif"
                        : t.name === "Letter" ? "'Caveat', cursive" : "'Playfair Display', serif",
                      fontSize: t.size,
                      fontWeight: t.weight,
                      color: "#E9DDFF",
                      lineHeight: "1.2",
                      opacity: 0.9,
                    }}>
                      {t.example}
                    </p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "9px",
                      color: "#C8A8FF",
                      opacity: 0.5,
                    }}>
                      {t.name}
                    </p>
                    <p style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "9px",
                      color: "#C8A8FF",
                      opacity: 0.3,
                    }}>
                      {t.size} · {t.font.split(" ")[0]}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Font specimens */}
          {FONTS.map((font, fi) => (
            <motion.div
              key={font.name}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + fi * 0.1 }}
              className="rounded-2xl overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: `1px solid ${font.color}18`,
              }}
            >
              {/* Specimen area */}
              <div
                className="px-5 py-6 relative overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, rgba(18,11,45,0.8), rgba(38,24,74,0.4))`,
                  borderBottom: `1px solid ${font.color}12`,
                  minHeight: "100px",
                }}
              >
                {/* Large specimen */}
                <p style={{
                  fontFamily: font.family,
                  fontSize: fi === 0 ? "40px" : fi === 1 ? "36px" : "28px",
                  fontWeight: fi === 0 ? 700 : fi === 1 ? 700 : 600,
                  fontStyle: fi === 0 ? "italic" : "normal",
                  color: "#E9DDFF",
                  lineHeight: "1.1",
                  marginBottom: "6px",
                  opacity: 0.9,
                }}>
                  {font.specimen}
                </p>
                <p style={{
                  fontFamily: font.family,
                  fontSize: fi === 0 ? "16px" : fi === 1 ? "18px" : "13px",
                  fontWeight: 400,
                  fontStyle: fi === 0 ? "italic" : "normal",
                  color: font.color,
                  opacity: 0.65,
                  letterSpacing: fi === 2 ? "0.1em" : "0",
                }}>
                  {font.subSpec}
                </p>

                {/* Font name badge */}
                <div
                  className="absolute top-4 right-4 px-2 py-1 rounded-lg"
                  style={{
                    background: `${font.color}15`,
                    border: `1px solid ${font.color}20`,
                  }}
                >
                  <p style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "9px",
                    color: font.color,
                    letterSpacing: "0.08em",
                    opacity: 0.8,
                  }}>
                    {font.role}
                  </p>
                </div>
              </div>

              {/* Font info */}
              <div className="px-4 py-4">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "12px",
                      fontWeight: "600",
                      color: "#E9DDFF",
                      marginBottom: "2px",
                    }}>
                      {font.name}
                    </p>
                    <p style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "10px",
                      color: "#C8A8FF",
                      opacity: 0.5,
                    }}>
                      Google Fonts · Free
                    </p>
                  </div>
                </div>

                <p style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "10px",
                  color: "#E9DDFF",
                  opacity: 0.5,
                  lineHeight: "1.6",
                  marginBottom: "12px",
                }}>
                  {font.description}
                </p>

                {/* Weight specimens */}
                <div className="flex flex-col gap-2 mb-3">
                  {font.weights.map((w) => (
                    <div key={w.weight} className="flex items-center gap-3">
                      <span style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "8px",
                        color: font.color,
                        opacity: 0.4,
                        width: "54px",
                        flexShrink: 0,
                      }}>
                        {w.weight} · {w.label}
                      </span>
                      <span style={{
                        fontFamily: font.family,
                        fontSize: "12px",
                        fontWeight: w.weight,
                        color: "#E9DDFF",
                        opacity: 0.75,
                      }}>
                        {w.text}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Usage tags */}
                <div className="flex flex-wrap gap-1.5">
                  {font.usage.map((u) => (
                    <span key={u} style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "9px",
                      color: font.color,
                      opacity: 0.6,
                      background: `${font.color}10`,
                      border: `1px solid ${font.color}15`,
                      borderRadius: "8px",
                      padding: "2px 8px",
                    }}>
                      {u}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </GalaxyBg>
  );
}
