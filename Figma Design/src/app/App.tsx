import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, Grid3X3, X, Smartphone, Monitor } from "lucide-react";

import { Screen01Countdown } from "./components/screens/Screen01Countdown";
import { Screen02Password } from "./components/screens/Screen02Password";
import { Screen03Opening } from "./components/screens/Screen03Opening";
import { Screen04GalaxyMap } from "./components/screens/Screen04GalaxyMap";
import { Screen05FirstMeet } from "./components/screens/Screen05FirstMeet";
import { Screen06Chidori } from "./components/screens/Screen06Chidori";
import { Screen07FirstHug } from "./components/screens/Screen07FirstHug";
import { Screen08HoTriAn } from "./components/screens/Screen08HoTriAn";
import { Screen09ThingsILike } from "./components/screens/Screen09ThingsILike";
import { Screen10Polaroids } from "./components/screens/Screen10Polaroids";
import { Screen11Gemini } from "./components/screens/Screen11Gemini";
import { Screen12FutureStars } from "./components/screens/Screen12FutureStars";
import { Screen13SecretStars } from "./components/screens/Screen13SecretStars";
import { Screen14Letter } from "./components/screens/Screen14Letter";
import { Screen15Ending } from "./components/screens/Screen15Ending";
import { ScreenColorPalette } from "./components/screens/ScreenColorPalette";
import { ScreenTypography } from "./components/screens/ScreenTypography";
import { ScreenDesignSystem } from "./components/screens/ScreenDesignSystem";
import { ScreenComponents } from "./components/screens/ScreenComponents";
import { ScreenMotionNotes } from "./components/screens/ScreenMotionNotes";

const SCREENS = [
  { id: 0, title: "Countdown", subtitle: "Bí mật chờ đợi", component: <Screen01Countdown />, emoji: "⏳" },
  { id: 1, title: "Password Gate", subtitle: "Cánh cửa riêng", component: <Screen02Password />, emoji: "🔑" },
  { id: 2, title: "Opening", subtitle: "Cinematic intro", component: <Screen03Opening />, emoji: "✦" },
  { id: 3, title: "Galaxy Map", subtitle: "Bản đồ ký ức", component: <Screen04GalaxyMap />, emoji: "🌌" },
  { id: 4, title: "Lần Đầu Gặp Nhau", subtitle: "Chapter 01", component: <Screen05FirstMeet />, emoji: "🌟" },
  { id: 5, title: "Chidori", subtitle: "Memory café", component: <Screen06Chidori />, emoji: "☕" },
  { id: 6, title: "Cái Ôm Đầu Tiên", subtitle: "Chapter 03", component: <Screen07FirstHug />, emoji: "♡" },
  { id: 7, title: "Hồ Trị An", subtitle: "Adventure", component: <Screen08HoTriAn />, emoji: "⛺" },
  { id: 8, title: "20 Điều Anh Thích", subtitle: "Danh sách", component: <Screen09ThingsILike />, emoji: "✧" },
  { id: 9, title: "Một Góc Nhỏ Về Em", subtitle: "Gallery", component: <Screen10Polaroids />, emoji: "📸" },
  { id: 10, title: "Gemini Mode", subtitle: "♊ Profile", component: <Screen11Gemini />, emoji: "♊" },
  { id: 11, title: "Những Vì Sao", subtitle: "Tương lai", component: <Screen12FutureStars />, emoji: "🔮" },
  { id: 12, title: "Secret Stars", subtitle: "Bí mật ẩn", component: <Screen13SecretStars />, emoji: "⁕" },
  { id: 13, title: "Final Letter", subtitle: "Lá thư cuối", component: <Screen14Letter />, emoji: "💌" },
  { id: 14, title: "Ending", subtitle: "— Aiu", component: <Screen15Ending />, emoji: "🌙" },
];

const DS_SCREENS = [
  { id: 0, title: "Color Palette", subtitle: "7 core colors + gradients", component: <ScreenColorPalette />, emoji: "🎨" },
  { id: 1, title: "Typography", subtitle: "Playfair · Caveat · Inter", component: <ScreenTypography />, emoji: "Aa" },
  { id: 2, title: "Design System", subtitle: "Tokens · Spacing · Grid", component: <ScreenDesignSystem />, emoji: "⬡" },
  { id: 3, title: "Components", subtitle: "Buttons · Cards · Inputs", component: <ScreenComponents />, emoji: "◈" },
  { id: 4, title: "Motion Notes", subtitle: "Animation specs", component: <ScreenMotionNotes />, emoji: "◉" },
];

function IPhoneFrame({ children, scale = 1 }: { children: React.ReactNode; scale?: number }) {
  return (
    <div
      style={{
        transform: `scale(${scale})`,
        transformOrigin: "top center",
        width: "390px",
        height: "844px",
        position: "relative",
        flexShrink: 0,
      }}
    >
      {/* iPhone outer shell */}
      <div
        style={{
          position: "absolute",
          inset: "-14px -8px",
          borderRadius: "56px",
          background: "linear-gradient(160deg, #2a2a2a 0%, #1a1a1a 40%, #111 100%)",
          boxShadow: "0 0 0 1px #3a3a3a, 0 40px 100px rgba(0,0,0,0.7), inset 0 0 0 2px rgba(255,255,255,0.05), 0 0 0 14px rgba(0,0,0,0.3)",
        }}
      />
      {/* Side buttons */}
      <div style={{ position: "absolute", left: "-14px", top: "120px", width: "3px", height: "35px", background: "#333", borderRadius: "2px" }} />
      <div style={{ position: "absolute", left: "-14px", top: "168px", width: "3px", height: "60px", background: "#333", borderRadius: "2px" }} />
      <div style={{ position: "absolute", left: "-14px", top: "238px", width: "3px", height: "60px", background: "#333", borderRadius: "2px" }} />
      <div style={{ position: "absolute", right: "-14px", top: "180px", width: "3px", height: "80px", background: "#333", borderRadius: "2px" }} />

      {/* Screen area */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "50px",
          overflow: "hidden",
          background: "#120B2D",
        }}
      >
        {/* Dynamic island */}
        <div
          style={{
            position: "absolute",
            top: "12px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "120px",
            height: "34px",
            background: "#000",
            borderRadius: "20px",
            zIndex: 100,
            boxShadow: "0 0 0 1px rgba(255,255,255,0.05)",
          }}
        />
        {/* Screen content */}
        <div style={{ position: "absolute", inset: 0, paddingTop: "0px" }}>
          {children}
        </div>
      </div>
    </div>
  );
}

function DesktopFrame({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ width: "100%", maxWidth: "1200px", position: "relative" }}>
      {/* Browser chrome */}
      <div style={{
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(200,168,255,0.1)",
        borderRadius: "16px 16px 0 0",
        padding: "10px 16px",
        backdropFilter: "blur(20px)",
        display: "flex",
        alignItems: "center",
        gap: "8px",
      }}>
        <div style={{ display: "flex", gap: "6px" }}>
          {["#FF5F57", "#FEBC2E", "#28C840"].map((c, i) => (
            <div key={i} style={{ width: "10px", height: "10px", borderRadius: "50%", background: c }} />
          ))}
        </div>
        <div style={{
          flex: 1,
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(200,168,255,0.1)",
          borderRadius: "6px",
          padding: "4px 12px",
          fontFamily: "'Inter', sans-serif",
          fontSize: "11px",
          color: "#C8A8FF",
          opacity: 0.5,
          textAlign: "center",
        }}>
          birthday.vyfang.com
        </div>
      </div>
      {/* Desktop content area */}
      <div style={{
        background: "#120B2D",
        border: "1px solid rgba(200,168,255,0.08)",
        borderTop: "none",
        borderRadius: "0 0 12px 12px",
        height: "520px",
        overflow: "hidden",
        position: "relative",
      }}>
        {children}
      </div>
    </div>
  );
}

export default function App() {
  const [section, setSection] = useState<"screens" | "design">("screens");
  const [current, setCurrent] = useState(0);
  const [dsCurrent, setDsCurrent] = useState(0);
  const [device, setDevice] = useState<"mobile" | "desktop">("mobile");
  const [showGrid, setShowGrid] = useState(false);
  const [direction, setDirection] = useState(1);

  const activeScreens = section === "screens" ? SCREENS : DS_SCREENS;
  const activeCurrent = section === "screens" ? current : dsCurrent;
  const setActiveCurrent = section === "screens" ? setCurrent : setDsCurrent;

  const [vw, setVw] = useState(window.innerWidth);
  const [vh, setVh] = useState(window.innerHeight);

  useEffect(() => {
    function onResize() { setVw(window.innerWidth); setVh(window.innerHeight); }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const isMobileViewport = vw < 1024;

  function goTo(idx: number) {
    setDirection(idx > activeCurrent ? 1 : -1);
    setActiveCurrent(idx);
    setShowGrid(false);
  }

  function prev() {
    if (activeCurrent > 0) goTo(activeCurrent - 1);
  }

  function next() {
    if (activeCurrent < activeScreens.length - 1) goTo(activeCurrent + 1);
  }

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        setDirection(1);
        setActiveCurrent((c: number) => Math.min(c + 1, activeScreens.length - 1));
      }
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        setDirection(-1);
        setActiveCurrent((c: number) => Math.max(c - 1, 0));
      }
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [section, activeScreens.length]);

  const screenVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? 40 : -40, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -40 : 40, opacity: 0 }),
  };

  const scale = isMobileViewport ? Math.min((vh - 120) / 844, (vw - 32) / 390) : Math.min((vh - 160) / 844, 1);

  return (
    <div
      className="w-full h-screen overflow-hidden flex"
      style={{
        background: "linear-gradient(160deg, #0A0618 0%, #0D0720 30%, #120B2D 60%, #0D0618 100%)",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* Background stars */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 60 }, (_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              left: `${(i * 137.5) % 100}%`,
              top: `${(i * 89.7) % 100}%`,
              width: (i % 5 === 0) ? "2px" : "1px",
              height: (i % 5 === 0) ? "2px" : "1px",
              opacity: 0.05 + (i * 0.02) % 0.08,
            }}
          />
        ))}
        <div style={{
          position: "absolute", top: "-20%", left: "60%",
          width: "600px", height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(183,148,244,0.04), transparent 70%)",
          filter: "blur(60px)",
        }} />
        <div style={{
          position: "absolute", bottom: "-20%", right: "60%",
          width: "500px", height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(197,225,255,0.03), transparent 70%)",
          filter: "blur(60px)",
        }} />
      </div>

      {/* ─── LEFT SIDEBAR (Desktop) ─── */}
      <div
        className="hidden lg:flex flex-col"
        style={{
          width: "260px",
          flexShrink: 0,
          background: "rgba(255,255,255,0.02)",
          borderRight: "1px solid rgba(200,168,255,0.08)",
          backdropFilter: "blur(20px)",
          zIndex: 10,
          overflowY: "auto",
          paddingTop: "20px",
          paddingBottom: "20px",
        }}
      >
        {/* Logo */}
        <div className="px-5 mb-6">
          <div className="flex items-center gap-2 mb-1">
            <div style={{
              width: "24px", height: "24px",
              borderRadius: "6px",
              background: "linear-gradient(135deg, #C8A8FF, #B794F4)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "11px",
            }}>
              ✦
            </div>
            <span style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "14px",
              fontStyle: "italic",
              color: "#E9DDFF",
              opacity: 0.9,
            }}>
              Vyfang · 2026
            </span>
          </div>
          <p style={{
            fontSize: "10px",
            color: "#C8A8FF",
            opacity: 0.4,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}>
            Interactive Birthday
          </p>
        </div>

        {/* Section tabs */}
        <div className="px-3 mb-3">
          <div className="flex gap-1 rounded-xl p-1" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(200,168,255,0.08)" }}>
            {(["screens", "design"] as const).map((s) => (
              <button
                key={s}
                onClick={() => setSection(s)}
                className="flex-1 py-1.5 rounded-lg transition-all duration-200"
                style={{
                  background: section === s ? "rgba(200,168,255,0.12)" : "transparent",
                  border: `1px solid ${section === s ? "rgba(200,168,255,0.2)" : "transparent"}`,
                  color: section === s ? "#E9DDFF" : "#C8A8FF",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "10px",
                  fontWeight: section === s ? "500" : "400",
                  cursor: "pointer",
                  opacity: section === s ? 1 : 0.5,
                }}
              >
                {s === "screens" ? "Screens" : "Design System"}
              </button>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: "1px", background: "rgba(200,168,255,0.06)", margin: "0 16px 8px" }} />

        {/* Screen list */}
        <div className="flex flex-col gap-0.5 px-2 flex-1 overflow-y-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={section}
              initial={{ opacity: 0, x: section === "screens" ? -8 : 8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col gap-0.5"
            >
              {activeScreens.map((s) => (
                <button
                  key={s.id}
                  onClick={() => goTo(s.id)}
                  className="w-full text-left rounded-xl px-3 py-2.5 transition-all duration-200"
                  style={{
                    background: activeCurrent === s.id ? "rgba(200, 168, 255, 0.1)" : "transparent",
                    border: activeCurrent === s.id ? "1px solid rgba(200, 168, 255, 0.15)" : "1px solid transparent",
                    cursor: "pointer",
                  }}
                >
                  <div className="flex items-center gap-2.5">
                    <span style={{ fontSize: "14px", opacity: activeCurrent === s.id ? 1 : 0.5 }}>{s.emoji}</span>
                    <div>
                      <p style={{
                        fontSize: "11px",
                        fontWeight: "500",
                        color: activeCurrent === s.id ? "#E9DDFF" : "#C8A8FF",
                        opacity: activeCurrent === s.id ? 1 : 0.6,
                        lineHeight: "1.3",
                      }}>
                        {s.title}
                      </p>
                      <p style={{
                        fontSize: "9px",
                        color: "#C8A8FF",
                        opacity: activeCurrent === s.id ? 0.5 : 0.3,
                        letterSpacing: "0.05em",
                      }}>
                        {s.subtitle}
                      </p>
                    </div>
                    {activeCurrent === s.id && (
                      <motion.div
                        layoutId={`active-dot-${section}`}
                        className="ml-auto rounded-full"
                        style={{ width: "4px", height: "4px", background: "#C8A8FF" }}
                      />
                    )}
                  </div>
                </button>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Device toggle */}
        <div className="mt-auto px-5 pt-4">
          <div style={{ height: "1px", background: "rgba(200,168,255,0.06)", marginBottom: "16px" }} />
          <div className="flex gap-2">
            {(["mobile", "desktop"] as const).map((d) => (
              <button
                key={d}
                onClick={() => setDevice(d)}
                className="flex-1 py-2 rounded-xl flex items-center justify-center gap-1.5 transition-all duration-200"
                style={{
                  background: device === d ? "rgba(200, 168, 255, 0.12)" : "transparent",
                  border: `1px solid ${device === d ? "rgba(200, 168, 255, 0.2)" : "rgba(200, 168, 255, 0.06)"}`,
                  cursor: "pointer",
                  color: device === d ? "#E9DDFF" : "#C8A8FF",
                  fontSize: "11px",
                  opacity: device === d ? 1 : 0.5,
                }}
              >
                {d === "mobile" ? <Smartphone size={12} /> : <Monitor size={12} />}
                {d === "mobile" ? "Mobile" : "Desktop"}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ─── MAIN CONTENT ─── */}
      <div className="flex-1 flex flex-col items-center justify-center relative overflow-hidden">

        {/* Top bar */}
        <div
          className="absolute top-0 left-0 right-0 px-4 lg:px-6 py-3 flex items-center justify-between z-20"
          style={{
            background: "rgba(255,255,255,0.02)",
            borderBottom: "1px solid rgba(200,168,255,0.06)",
            backdropFilter: "blur(10px)",
          }}
        >
          <div className="flex items-center gap-3">
            {/* Mobile logo */}
            <div className="flex lg:hidden items-center gap-2">
              <div style={{
                width: "20px", height: "20px",
                borderRadius: "5px",
                background: "linear-gradient(135deg, #C8A8FF, #B794F4)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "9px",
              }}>✦</div>
              <span style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "13px",
                fontStyle: "italic",
                color: "#E9DDFF",
                opacity: 0.9,
              }}>
                Vyfang · 2026
              </span>
            </div>

            <div className="hidden lg:flex items-center gap-2">
              <span style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "9px",
                letterSpacing: "0.12em",
                color: section === "design" ? "#F6C6FF" : "#C8A8FF",
                opacity: 0.45,
                textTransform: "uppercase",
              }}>
                {section === "design" ? "Design System" : "App Screens"}
              </span>
              <span style={{ color: "#C8A8FF", opacity: 0.2 }}>·</span>
              <span style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "14px",
                fontStyle: "italic",
                color: "#E9DDFF",
                opacity: 0.75,
              }}>
                {activeScreens[activeCurrent].emoji} {activeScreens[activeCurrent].title}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Screen counter */}
            <span style={{
              fontSize: "11px",
              color: "#C8A8FF",
              opacity: 0.4,
              fontVariantNumeric: "tabular-nums",
            }}>
              {String(activeCurrent + 1).padStart(2, "0")} / {activeScreens.length}
            </span>

            {/* Grid toggle (mobile) */}
            <button
              onClick={() => setShowGrid(!showGrid)}
              className="lg:hidden p-2 rounded-xl"
              style={{
                background: "rgba(200,168,255,0.08)",
                border: "1px solid rgba(200,168,255,0.12)",
                cursor: "pointer",
                color: "#C8A8FF",
              }}
            >
              <Grid3X3 size={14} />
            </button>
          </div>
        </div>

        {/* Device frame + screen content */}
        <div className="flex items-center justify-center w-full" style={{ paddingTop: "50px", paddingBottom: isMobileViewport ? "100px" : "60px" }}>
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={`${section}-${activeCurrent}-${device}`}
              custom={direction}
              variants={screenVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              {device === "mobile" ? (
                <IPhoneFrame scale={scale}>
                  {activeScreens[activeCurrent].component}
                </IPhoneFrame>
              ) : (
                <DesktopFrame>
                  {activeScreens[activeCurrent].component}
                </DesktopFrame>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation arrows */}
        <div className="absolute bottom-6 left-0 right-0 flex items-center justify-center gap-4 z-20">
          <motion.button
            onClick={prev}
            disabled={activeCurrent === 0}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(200,168,255,0.12)",
              color: activeCurrent === 0 ? "rgba(200,168,255,0.2)" : "#C8A8FF",
              cursor: activeCurrent === 0 ? "default" : "pointer",
              backdropFilter: "blur(10px)",
              fontSize: "12px",
            }}
          >
            <ChevronLeft size={14} />
            <span className="hidden sm:inline">Trước</span>
          </motion.button>

          {/* Progress dots */}
          <div className="flex gap-1.5 items-center">
            {activeScreens.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className="rounded-full transition-all duration-300"
                style={{
                  width: activeCurrent === i ? "20px" : "5px",
                  height: "5px",
                  background: activeCurrent === i
                    ? `linear-gradient(90deg, ${section === "design" ? "#F6C6FF, #C8A8FF" : "#C8A8FF, #B794F4"})`
                    : "rgba(200, 168, 255, 0.25)",
                  cursor: "pointer",
                  border: "none",
                }}
              />
            ))}
          </div>

          <motion.button
            onClick={next}
            disabled={activeCurrent === activeScreens.length - 1}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(200,168,255,0.12)",
              color: activeCurrent === activeScreens.length - 1 ? "rgba(200,168,255,0.2)" : "#C8A8FF",
              cursor: activeCurrent === activeScreens.length - 1 ? "default" : "pointer",
              backdropFilter: "blur(10px)",
              fontSize: "12px",
            }}
          >
            <span className="hidden sm:inline">Tiếp</span>
            <ChevronRight size={14} />
          </motion.button>
        </div>
      </div>

      {/* ─── MOBILE GRID OVERLAY ─── */}
      <AnimatePresence>
        {showGrid && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 lg:hidden"
            style={{
              background: "rgba(18, 11, 45, 0.97)",
              backdropFilter: "blur(20px)",
              overflowY: "auto",
              padding: "20px",
            }}
          >
            {/* Close button */}
            <div className="flex items-center justify-between mb-5">
              <h2 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "18px",
                fontStyle: "italic",
                color: "#E9DDFF",
              }}>
                {section === "design" ? "Design System" : "Tất cả màn hình"}
              </h2>
              <button
                onClick={() => setShowGrid(false)}
                style={{
                  background: "rgba(200,168,255,0.08)",
                  border: "1px solid rgba(200,168,255,0.15)",
                  borderRadius: "10px",
                  padding: "8px",
                  cursor: "pointer",
                  color: "#C8A8FF",
                }}
              >
                <X size={16} />
              </button>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {activeScreens.map((s) => (
                <button
                  key={s.id}
                  onClick={() => goTo(s.id)}
                  className="rounded-2xl p-3 text-left transition-all duration-200"
                  style={{
                    background: activeCurrent === s.id ? "rgba(200, 168, 255, 0.12)" : "rgba(255,255,255,0.03)",
                    border: `1px solid ${activeCurrent === s.id ? "rgba(200,168,255,0.25)" : "rgba(200,168,255,0.08)"}`,
                    cursor: "pointer",
                  }}
                >
                  <div style={{ fontSize: "20px", marginBottom: "6px" }}>{s.emoji}</div>
                  <p style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "10px",
                    fontWeight: "500",
                    color: activeCurrent === s.id ? "#E9DDFF" : "#C8A8FF",
                    opacity: activeCurrent === s.id ? 1 : 0.65,
                    lineHeight: "1.3",
                    marginBottom: "2px",
                  }}>
                    {s.title}
                  </p>
                  <p style={{
                    fontSize: "8px",
                    color: "#C8A8FF",
                    opacity: 0.35,
                  }}>
                    {String(s.id + 1).padStart(2, "0")}
                  </p>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
