"use client";

import { useEffect, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { useExperience } from "@/store/useExperience";
import { storagePublicUrl } from "@/lib/supabase/client";

/**
 * Nhạc nền loop toàn site (mặc định ~20% volume).
 * Autoplay bị trình duyệt chặn nên chỉ phát sau tương tác đầu tiên của user.
 */
export function AudioController() {
  const phase = useExperience((s) => s.phase);
  const content = useExperience((s) => s.content);
  const musicEnabled = useExperience((s) => s.musicEnabled);
  const toggleMusic = useExperience((s) => s.toggleMusic);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const musicUrl = storagePublicUrl(content?.music?.storagePath);

  // Đồng bộ trạng thái phát với store.
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !musicUrl) return;
    audio.volume = 0.2;
    if (musicEnabled) {
      void audio.play().catch(() => {
        /* bị chặn autoplay — bỏ qua, chờ user bấm nút */
      });
    } else {
      audio.pause();
    }
  }, [musicEnabled, musicUrl]);

  // Ẩn khi đang ở countdown/loading.
  const visible = phase !== "loading" && phase !== "countdown";
  if (!visible) return null;

  return (
    <>
      {musicUrl && <audio ref={audioRef} src={musicUrl} loop preload="auto" />}
      <button
        onClick={toggleMusic}
        aria-label={musicEnabled ? "Tắt nhạc nền" : "Bật nhạc nền"}
        className="fixed z-50 flex items-center justify-center rounded-full"
        style={{
          right: "16px",
          top: "16px",
          width: "40px",
          height: "40px",
          background: "rgba(200,168,255,0.12)",
          border: "1px solid rgba(200,168,255,0.25)",
          backdropFilter: "blur(12px)",
          color: "#E9DDFF",
          cursor: "pointer",
        }}
      >
        {musicEnabled ? <Volume2 size={16} /> : <VolumeX size={16} />}
      </button>
    </>
  );
}
