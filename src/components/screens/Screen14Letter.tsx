"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { GalaxyBg } from "../GalaxyBg";
import { FloatingParticles } from "../FloatingParticles";

const DEFAULT_LETTER = `Vyfang,

Anh không giỏi nói những điều này bằng lời. Nên anh viết xuống đây.

Cảm ơn em vì đã bước vào cuộc đời anh theo cách mà anh không ngờ tới.`;

interface Props {
  /** Nội dung thư. */
  body?: string;
  signature?: string;
  /** URL voice thật (Supabase Storage). Null = chưa có. */
  voiceUrl?: string | null;
}

function formatTime(sec: number) {
  if (!Number.isFinite(sec) || sec < 0) return "0:00";
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${m}:${String(s).padStart(2, "0")}`;
}

export function Screen14Letter({
  body = DEFAULT_LETTER,
  signature = "Aiu",
  voiceUrl = null,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [current, setCurrent] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const LETTER_TEXT = `${body}\n\n— ${signature}`;

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const onTime = () => setCurrent(audio.currentTime);
    const onMeta = () => setDuration(audio.duration);
    const onEnd = () => setIsPlaying(false);
    audio.addEventListener("timeupdate", onTime);
    audio.addEventListener("loadedmetadata", onMeta);
    audio.addEventListener("ended", onEnd);
    return () => {
      audio.removeEventListener("timeupdate", onTime);
      audio.removeEventListener("loadedmetadata", onMeta);
      audio.removeEventListener("ended", onEnd);
    };
  }, [voiceUrl, isOpen]);

  function toggleVoice() {
    const audio = audioRef.current;
    if (!audio) {
      // Chưa có voice — chỉ hiển thị hiệu ứng waveform
      setIsPlaying((p) => !p);
      return;
    }
    if (audio.paused) {
      void audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  }

  return (
    <GalaxyBg variant="aurora" className="w-full h-full">
      <FloatingParticles count={20} color="#E9DDFF" minSize={2} maxSize={6} />

      {/* Aurora background enhancement */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 40%, rgba(233, 221, 255, 0.08) 0%, transparent 60%)" }} />

      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-5">

        <AnimatePresence mode="wait">
          {!isOpen ? (
            /* Star envelope state */
            <motion.div
              key="star"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="flex flex-col items-center"
            >
              <motion.button
                onClick={() => setIsOpen(true)}
                className="relative flex flex-col items-center gap-6"
                style={{ background: "none", border: "none", cursor: "pointer" }}
              >
                {/* Pulsing star */}
                <motion.div
                  className="relative"
                  animate={{ scale: [1, 1.08, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <motion.div
                    className="rounded-full"
                    style={{
                      width: "100px", height: "100px",
                      background: "radial-gradient(circle, rgba(233,221,255,0.3) 0%, rgba(200,168,255,0.1) 50%, transparent 70%)",
                      boxShadow: "0 0 60px rgba(233, 221, 255, 0.3), 0 0 120px rgba(200, 168, 255, 0.15)",
                    }}
                    animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  />
                  <div
                    className="absolute inset-0 flex items-center justify-center"
                    style={{ fontSize: "40px" }}
                  >
                    ✦
                  </div>
                </motion.div>

                <div className="text-center">
                  <p style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "20px",
                    fontStyle: "italic",
                    color: "#E9DDFF",
                    marginBottom: "8px",
                  }}>
                    Một lá thư từ anh
                  </p>
                  <motion.p
                    animate={{ opacity: [0.4, 0.7, 0.4] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    style={{
                      fontFamily: "'Caveat', cursive",
                      fontSize: "14px",
                      color: "#C8A8FF",
                      opacity: 0.5,
                    }}
                  >
                    Nhấn để mở
                  </motion.p>
                </div>
              </motion.button>
            </motion.div>
          ) : (
            /* Letter unfolded */
            <motion.div
              key="letter"
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="w-full max-w-[320px]"
              style={{ maxHeight: "calc(100vh - 100px)", overflowY: "auto" }}
            >
              {/* Glass paper card */}
              <div
                className="rounded-3xl p-7"
                style={{
                  background: "rgba(233, 221, 255, 0.04)",
                  border: "1px solid rgba(233, 221, 255, 0.12)",
                  backdropFilter: "blur(30px)",
                  boxShadow: "0 32px 80px rgba(0,0,0,0.5), 0 0 60px rgba(233, 221, 255, 0.05), inset 0 1px 0 rgba(255,255,255,0.08)",
                }}
              >
                {/* Header decorations */}
                <div className="flex items-center justify-between mb-5">
                  <div style={{ height: "1px", flex: 1, background: "linear-gradient(to right, transparent, rgba(233,221,255,0.2))" }} />
                  <span style={{ margin: "0 12px", color: "#E9DDFF", opacity: 0.3, fontSize: "14px" }}>✦</span>
                  <div style={{ height: "1px", flex: 1, background: "linear-gradient(to left, transparent, rgba(233,221,255,0.2))" }} />
                </div>

                {/* Letter text */}
                <div
                  style={{
                    fontFamily: "'Caveat', cursive",
                    fontSize: "17px",
                    color: "#E9DDFF",
                    lineHeight: "1.8",
                    whiteSpace: "pre-line",
                    opacity: 0.9,
                  }}
                >
                  {LETTER_TEXT}
                </div>

                {/* Divider */}
                <div className="mt-6 mb-4" style={{ height: "1px", background: "linear-gradient(90deg, transparent, rgba(233,221,255,0.15), transparent)" }} />

                {/* Voice player */}
                <div
                  className="rounded-2xl p-4 flex items-center gap-3"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(233, 221, 255, 0.08)",
                  }}
                >
                  <button
                    onClick={toggleVoice}
                    aria-label={isPlaying ? "Tạm dừng giọng đọc" : "Phát giọng đọc"}
                    className="flex-shrink-0 rounded-full flex items-center justify-center"
                    style={{
                      width: "36px", height: "36px",
                      background: "linear-gradient(135deg, rgba(200,168,255,0.3), rgba(183,148,244,0.2))",
                      border: "1px solid rgba(200,168,255,0.3)",
                      cursor: "pointer",
                      fontSize: "14px",
                      color: "#E9DDFF",
                    }}
                  >
                    {isPlaying ? "⏸" : "▶"}
                  </button>
                  {voiceUrl && (
                    <audio ref={audioRef} src={voiceUrl} preload="metadata" />
                  )}

                  <div className="flex-1">
                    <p style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "10px",
                      color: "#C8A8FF",
                      marginBottom: "4px",
                      opacity: 0.6,
                    }}>
                      Giọng đọc từ anh
                    </p>
                    {/* Waveform */}
                    <div className="flex items-center gap-[2px] h-4">
                      {[...Array(24)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="rounded-full"
                          style={{
                            width: "2px",
                            background: "#C8A8FF",
                            opacity: 0.4,
                          }}
                          animate={isPlaying ? {
                            height: [`${4 + (i % 5) * 3}px`, `${8 + (i % 7) * 2}px`, `${4 + (i % 5) * 3}px`],
                            opacity: [0.4, 0.8, 0.4],
                          } : { height: `${3 + (i % 4) * 2}px` }}
                          transition={{ duration: 0.5 + (i * 0.08) % 0.5, repeat: Infinity, delay: (i * 0.04) % 0.3 }}
                        />
                      ))}
                    </div>
                  </div>

                  <span style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "10px",
                    color: "#C8A8FF",
                    opacity: 0.4,
                  }}>
                    {voiceUrl ? `${formatTime(current)} / ${formatTime(duration)}` : "sắp có"}
                  </span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Chapter label */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="absolute bottom-5"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "9px",
            letterSpacing: "0.2em",
            color: "#E9DDFF",
            opacity: 0.25,
            textTransform: "uppercase",
          }}
        >
          Final Letter · Chapter 10
        </motion.p>
      </div>
    </GalaxyBg>
  );
}
