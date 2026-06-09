"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import { GalaxyBg } from "../GalaxyBg";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { storagePublicUrl } from "@/lib/supabase/client";
import type { GalleryPhoto } from "@/types";

/** Vị trí % trong vùng collage — 4 góc + 1 ảnh giữa. */
const LAYOUT = [
  { rotation: -10, xPct: 22, yPct: 26, color: "#C8A8FF", zIndex: 1, featured: false },
  { rotation: 8, xPct: 78, yPct: 24, color: "#F6C6FF", zIndex: 2, featured: false },
  { rotation: 0, xPct: 50, yPct: 50, color: "#E9DDFF", zIndex: 10, featured: true },
  { rotation: -6, xPct: 20, yPct: 74, color: "#C5E1FF", zIndex: 3, featured: false },
  { rotation: 9, xPct: 80, yPct: 76, color: "#C8A8FF", zIndex: 4, featured: false },
];

const PLACEHOLDER_LABELS = [
  "Lần đầu gặp nhau :v",
  "Đi shopping nè",
  "Em — 28 tuổi",
  "Hồ Trị An <3",
  "Chidori :))",
];

interface Props {
  photos?: GalleryPhoto[];
}

const GRADIENTS = [
  "linear-gradient(135deg, #2A1060 0%, #1A0840 50%, #26184A 100%)",
  "linear-gradient(135deg, #1A0840 0%, #2A1060 50%, #120B2D 100%)",
  "linear-gradient(160deg, #26184A 0%, #1a1040 40%, #2A1060 100%)",
  "linear-gradient(135deg, #0D1840 0%, #1a1060 50%, #0D0D30 100%)",
  "linear-gradient(135deg, #1a0a30 0%, #260840 50%, #1A0840 100%)",
];

export function Screen10Polaroids({ photos = [] }: Props) {
  const slots = LAYOUT.map((layout, i) => ({
    ...layout,
    id: photos[i]?.id ?? i,
    label: photos[i]?.caption || PLACEHOLDER_LABELS[i],
    url: storagePublicUrl(photos[i]?.storagePath),
  }));

  // Chỉ số polaroid đang được phóng to (null = đóng lightbox).
  const [zoomedIndex, setZoomedIndex] = useState<number | null>(null);
  const zoomed = zoomedIndex !== null ? slots[zoomedIndex] : null;

  return (
    <GalaxyBg variant="pink" className="w-full h-full">
      {/* Header — chừa góc phải cho nút "Vũ trụ" */}
      <div className="absolute top-0 left-5 right-5 pt-5 pr-24 z-20">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "9px",
            letterSpacing: "0.2em",
            color: "#F6C6FF",
            opacity: 0.5,
            textTransform: "uppercase",
          }}
        >
          Chapter 06 · Gallery
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "22px",
            fontWeight: "500",
            color: "#E9DDFF",
          }}
        >
          Một Góc Nhỏ Về Em
        </motion.h2>
      </div>

      {/* Polaroid collage — full width, ảnh rải 4 góc + giữa */}
      <div
        className="absolute inset-x-0"
        style={{ top: "88px", bottom: "56px" }}
      >
        <div className="relative w-full h-full max-w-[390px] mx-auto">
          {slots.map((photo, i) => (
            <div
              key={photo.id}
              className="absolute"
              style={{
                left: `${photo.xPct}%`,
                top: `${photo.yPct}%`,
                zIndex: photo.zIndex,
                transform: "translate(-50%, -50%)",
              }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.75, rotate: photo.rotation * 2 }}
                animate={{ opacity: 1, scale: 1, rotate: photo.rotation }}
                transition={{ delay: 0.3 + i * 0.15, duration: 0.7, type: "spring", stiffness: 120 }}
                whileHover={{ scale: photo.featured ? 1.08 : 1.03, zIndex: 20, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.96 }}
                onClick={() => setZoomedIndex(i)}
                role="button"
                tabIndex={0}
                aria-label={`Phóng to ảnh: ${photo.label}`}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setZoomedIndex(i);
                  }
                }}
                style={{ cursor: "pointer" }}
              >
              {/* Polaroid frame */}
              <div
                style={{
                  width: photo.featured ? "172px" : "132px",
                  background: "rgba(255, 255, 255, 0.92)",
                  borderRadius: "4px",
                  padding: "8px 8px 24px 8px",
                  boxShadow: photo.featured
                    ? `0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.1), 0 0 30px ${photo.color}40`
                    : `0 12px 30px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.05)`,
                }}
              >
                {/* Photo area */}
                <div
                  style={{
                    width: "100%",
                    aspectRatio: "1",
                    borderRadius: "2px",
                    background: GRADIENTS[i % GRADIENTS.length],
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  {/* Ảnh thật từ Supabase Storage (nếu có) */}
                  {photo.url && (
                    <ImageWithFallback
                      src={photo.url}
                      alt={photo.label}
                      style={{
                        position: "absolute",
                        inset: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        zIndex: 2,
                      }}
                    />
                  )}

                  {/* Galaxy texture inside photo */}
                  <div style={{
                    position: "absolute", inset: 0,
                    background: `radial-gradient(ellipse at ${30 + i * 15}% ${40 + i * 10}%, ${photo.color}40, transparent 60%)`,
                  }} />

                  {/* Star decoration */}
                  {[...Array(8)].map((_, si) => (
                    <div key={si} className="absolute rounded-full bg-white"
                      style={{
                        width: (si % 3 === 0) ? "2px" : "1px",
                        height: (si % 3 === 0) ? "2px" : "1px",
                        left: `${(si * 71.3) % 90}%`,
                        top: `${(si * 43.7) % 90}%`,
                        opacity: 0.3 + (si * 0.08) % 0.5,
                      }}
                    />
                  ))}

                  {photo.featured && (
                    <div className="relative z-10 flex flex-col items-center">
                      <div style={{
                        width: "40px", height: "40px",
                        borderRadius: "50%",
                        background: "rgba(200,168,255,0.2)",
                        border: "1px solid rgba(200,168,255,0.3)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontSize: "18px",
                      }}>
                        ✦
                      </div>
                    </div>
                  )}

                  {!photo.featured && (
                    <span style={{ fontSize: "18px", opacity: 0.6, position: "relative", zIndex: 1 }}>
                      {i === 0 ? "☕" : i === 1 ? "🌅" : i === 3 ? "🏕" : "✨"}
                    </span>
                  )}
                </div>

                {/* Caption */}
                <p style={{
                  fontFamily: "'Caveat', cursive",
                  fontSize: photo.featured ? "11px" : "9px",
                  color: "#26184A",
                  textAlign: "center",
                  marginTop: "6px",
                  lineHeight: "1.3",
                  opacity: 0.8,
                }}>
                  {photo.label}
                </p>
              </div>

              {photo.featured && (
                <motion.div
                  className="absolute -inset-3 rounded-lg pointer-events-none"
                  style={{
                    background: `radial-gradient(circle, ${photo.color}15, transparent 70%)`,
                    filter: "blur(8px)",
                  }}
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              )}
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom label */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-5 left-0 right-0 text-center"
        style={{
          fontFamily: "'Caveat', cursive",
          fontSize: "14px",
          color: "#F6C6FF",
          opacity: 0.45,
        }}
      >
        mỗi tấm ảnh là một kỷ niệm
      </motion.p>

      {/* Lightbox — phóng to ảnh ra giữa màn hình */}
      <AnimatePresence>
        {zoomed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setZoomedIndex(null)}
            role="dialog"
            aria-modal="true"
            aria-label={`Ảnh phóng to: ${zoomed.label}`}
            className="absolute inset-0 z-50 flex items-center justify-center px-6"
            style={{ background: "rgba(8,5,24,0.82)", backdropFilter: "blur(8px)" }}
          >
            {/* Nút đóng */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setZoomedIndex(null);
              }}
              aria-label="Đóng ảnh"
              className="absolute right-4 top-4 z-10 flex items-center justify-center rounded-full"
              style={{
                width: "40px",
                height: "40px",
                background: "rgba(200,168,255,0.12)",
                border: "1px solid rgba(200,168,255,0.25)",
                color: "#E9DDFF",
                cursor: "pointer",
              }}
            >
              <X size={18} />
            </button>

            {/* Khung polaroid lớn */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 12 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: "spring", stiffness: 220, damping: 22 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                width: "min(86vw, 340px)",
                background: "rgba(255,255,255,0.95)",
                borderRadius: "8px",
                padding: "14px 14px 44px 14px",
                boxShadow: `0 30px 90px rgba(0,0,0,0.6), 0 0 60px ${zoomed.color}30`,
              }}
            >
              <div
                style={{
                  width: "100%",
                  aspectRatio: "1",
                  borderRadius: "3px",
                  overflow: "hidden",
                  position: "relative",
                  background: GRADIENTS[(zoomedIndex ?? 0) % GRADIENTS.length],
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {zoomed.url ? (
                  <ImageWithFallback
                    src={zoomed.url}
                    alt={zoomed.label}
                    style={{
                      position: "absolute",
                      inset: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                ) : (
                  <span style={{ fontSize: "48px", opacity: 0.55 }}>✦</span>
                )}
              </div>
              <p
                style={{
                  fontFamily: "'Caveat', cursive",
                  fontSize: "20px",
                  color: "#26184A",
                  textAlign: "center",
                  marginTop: "12px",
                  lineHeight: 1.2,
                }}
              >
                {zoomed.label}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </GalaxyBg>
  );
}
