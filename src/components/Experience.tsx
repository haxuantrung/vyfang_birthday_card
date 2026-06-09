"use client";

import { useEffect, useState, type ReactNode } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft } from "lucide-react";

import { useExperience } from "@/store/useExperience";
import { fetchSiteContent } from "@/services/content.service";
import { FALLBACK_CONTENT } from "@/data/fallback";
import { storagePublicUrl } from "@/lib/supabase/client";

import { Screen01Countdown } from "./screens/Screen01Countdown";
import { Screen02Password } from "./screens/Screen02Password";
import { Screen03Opening } from "./screens/Screen03Opening";
import { Screen04GalaxyMap } from "./screens/Screen04GalaxyMap";
import { Screen05FirstMeet } from "./screens/Screen05FirstMeet";
import { Screen06Chidori } from "./screens/Screen06Chidori";
import { Screen07FirstHug } from "./screens/Screen07FirstHug";
import { Screen08HoTriAn } from "./screens/Screen08HoTriAn";
import { Screen09ThingsILike } from "./screens/Screen09ThingsILike";
import { Screen10Polaroids } from "./screens/Screen10Polaroids";
import { Screen11Gemini } from "./screens/Screen11Gemini";
import { Screen12FutureStars } from "./screens/Screen12FutureStars";
import { Screen13SecretStars } from "./screens/Screen13SecretStars";
import { Screen14Letter } from "./screens/Screen14Letter";
import { Screen15Ending } from "./screens/Screen15Ending";
import { AudioController } from "./AudioController";

const fade = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

/** Bọc mỗi màn hình trong khung full-viewport để GalaxyBg lấp đầy. */
function Stage({ children, id }: { children: ReactNode; id: string }) {
  return (
    <motion.div
      key={id}
      {...fade}
      transition={{ duration: 0.6 }}
      className="fixed inset-0 w-screen no-scrollbar"
      style={{ height: "100dvh" }}
    >
      {children}
    </motion.div>
  );
}

export function Experience() {
  const phase = useExperience((s) => s.phase);
  const content = useExperience((s) => s.content) ?? FALLBACK_CONTENT;
  const openedMemories = useExperience((s) => s.openedMemories);
  const activeMemory = useExperience((s) => s.activeMemory);

  const setContent = useExperience((s) => s.setContent);
  const setPhase = useExperience((s) => s.setPhase);
  const openMemory = useExperience((s) => s.openMemory);
  const closeMemory = useExperience((s) => s.closeMemory);
  const setMusic = useExperience((s) => s.setMusic);
  const reset = useExperience((s) => s.reset);

  // Load nội dung + quyết định phase khởi đầu.
  useEffect(() => {
    let mounted = true;
    fetchSiteContent().then((c) => {
      if (!mounted) return;
      setContent(c);
      const unlocked = Date.now() >= new Date(c.settings.birthdayAt).getTime();
      setPhase(unlocked ? "password" : "countdown");
    });
    return () => {
      mounted = false;
    };
  }, [setContent, setPhase]);

  // Nút "Lời chúc cuối" chỉ hiện sau khi user đã mở lá thư.
  const [letterOpened, setLetterOpened] = useState(false);
  useEffect(() => {
    if (phase !== "letter") setLetterOpened(false);
  }, [phase]);

  const voiceUrl = storagePublicUrl(content.voice?.storagePath);

  const MEMORY_REGISTRY: Record<string, ReactNode> = {
    meet: <Screen05FirstMeet />,
    chidori: <Screen06Chidori />,
    hug: <Screen07FirstHug />,
    lake: <Screen08HoTriAn />,
    things: <Screen09ThingsILike />,
    gallery: <Screen10Polaroids photos={content.gallery} />,
    gemini: <Screen11Gemini />,
    future: <Screen12FutureStars />,
    secret: <Screen13SecretStars />,
  };

  function handleUnlock() {
    setMusic(content.settings.musicDefaultOn);
    setPhase("opening");
  }

  return (
    <main className="relative w-screen overflow-hidden" style={{ height: "100dvh" }}>
      <AudioController />

      <AnimatePresence mode="wait">
        {phase === "loading" && (
          <Stage id="loading">
            <div
              className="w-full h-full flex items-center justify-center"
              style={{ background: "#0D0720" }}
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{
                  width: 16,
                  height: 16,
                  borderRadius: "50%",
                  background: "radial-gradient(circle, #E9DDFF, #C8A8FF)",
                  boxShadow: "0 0 30px rgba(200,168,255,0.6)",
                }}
              />
            </div>
          </Stage>
        )}

        {phase === "countdown" && (
          <Stage id="countdown">
            <Screen01Countdown
              birthdayAt={content.settings.birthdayAt}
              onComplete={() => setPhase("password")}
            />
          </Stage>
        )}

        {phase === "password" && (
          <Stage id="password">
            <Screen02Password
              answer={content.settings.passwordAnswer}
              onUnlock={handleUnlock}
            />
          </Stage>
        )}

        {phase === "opening" && (
          <Stage id="opening">
            <Screen03Opening />
            <motion.button
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.6, duration: 0.8 }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => setPhase("galaxy")}
              className="absolute left-1/2 z-30 px-8 py-3 rounded-full"
              style={{
                bottom: "8%",
                transform: "translateX(-50%)",
                background: "linear-gradient(135deg, #B794F4, #C8A8FF)",
                border: "1px solid rgba(233,221,255,0.4)",
                color: "#1A0F3A",
                fontFamily: "'Inter', sans-serif",
                fontSize: "13px",
                fontWeight: 600,
                letterSpacing: "0.06em",
                cursor: "pointer",
                boxShadow: "0 0 30px rgba(200,168,255,0.5)",
              }}
            >
              Được rồi, đi thôi!
            </motion.button>
          </Stage>
        )}

        {phase === "galaxy" && (
          <Stage id="galaxy">
            <Screen04GalaxyMap
              opened={openedMemories}
              onOpen={openMemory}
              onOpenSecret={() => openMemory("secret")}
              onFinish={() => setPhase("letter")}
            />
          </Stage>
        )}

        {phase === "letter" && (
          <Stage id="letter">
            <Screen14Letter
              body={content.letter.body}
              signature={content.letter.signature}
              voiceUrl={voiceUrl}
              onOpened={() => setLetterOpened(true)}
            />
            <AnimatePresence>
              {letterOpened && (
                <motion.button
                  key="final-wish"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: 1.4, duration: 0.6 }}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => setPhase("ending")}
                  className="absolute right-5 z-30 px-5 py-2.5 rounded-full"
                  style={{
                    bottom: "5%",
                    background: "rgba(200,168,255,0.12)",
                    border: "1px solid rgba(200,168,255,0.3)",
                    color: "#E9DDFF",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "12px",
                    cursor: "pointer",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  Lời chúc cuối →
                </motion.button>
              )}
            </AnimatePresence>
          </Stage>
        )}

        {phase === "ending" && (
          <Stage id="ending">
            <Screen15Ending />
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.5 }}
              onClick={() => {
                reset();
                setPhase("galaxy");
              }}
              className="absolute left-1/2 z-30 px-5 py-2 rounded-full"
              style={{
                bottom: "5%",
                transform: "translateX(-50%)",
                background: "rgba(200,168,255,0.08)",
                border: "1px solid rgba(200,168,255,0.2)",
                color: "#C8A8FF",
                fontFamily: "'Inter', sans-serif",
                fontSize: "11px",
                cursor: "pointer",
              }}
            >
              ↺ Quay lại vũ trụ
            </motion.button>
          </Stage>
        )}
      </AnimatePresence>

      {/* Overlay memory (mở từ galaxy) */}
      <AnimatePresence>
        {activeMemory && (
          <motion.div
            key={activeMemory}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.45 }}
            className="fixed inset-0 z-40 no-scrollbar"
            style={{ height: "100dvh" }}
          >
            {MEMORY_REGISTRY[activeMemory]}
            <button
              onClick={closeMemory}
              aria-label="Quay lại bản đồ vũ trụ"
              className="absolute right-4 top-4 z-50 flex items-center gap-1 rounded-full pl-2 pr-4 py-2"
              style={{
                background: "rgba(18,11,45,0.5)",
                border: "1px solid rgba(200,168,255,0.25)",
                color: "#E9DDFF",
                fontFamily: "'Inter', sans-serif",
                fontSize: "12px",
                cursor: "pointer",
                backdropFilter: "blur(12px)",
              }}
            >
              <ChevronLeft size={16} />
              Vũ trụ
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
