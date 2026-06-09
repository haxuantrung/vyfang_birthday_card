import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { GalaxyBg } from "../GalaxyBg";
import { storagePublicUrl } from "@/lib/supabase/client";

/** Đường dẫn ảnh trong Storage theo số thứ tự card: things/01.jpg … things/20.jpg */
function thingPhotoUrl(id: number): string | null {
  return storagePublicUrl(`things/${String(id).padStart(2, "0")}.jpg`);
}

const GRADIENTS = [
  "linear-gradient(135deg, #2A1060 0%, #1A0840 50%, #26184A 100%)",
  "linear-gradient(135deg, #1A0840 0%, #2A1060 50%, #120B2D 100%)",
  "linear-gradient(160deg, #26184A 0%, #1a1040 40%, #2A1060 100%)",
  "linear-gradient(135deg, #0D1840 0%, #1a1060 50%, #0D0D30 100%)",
];

/**
 * Vùng ảnh của card. Hiển thị ảnh thật nếu tải được; nếu thiếu/lỗi thì
 * fallback về nền gradient galaxy + số thứ tự để vẫn đẹp trước khi upload.
 */
function CardImage({ src, alt, color, index }: {
  src: string | null;
  alt: string;
  color: string;
  index: number;
}) {
  const [error, setError] = useState(false);
  const showImage = Boolean(src) && !error;

  return (
    <div
      style={{
        width: "100%",
        height: "400px",
        borderRadius: "18px",
        overflow: "hidden",
        position: "relative",
        background: GRADIENTS[index % GRADIENTS.length],
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {showImage && (
        <img
          src={src as string}
          alt={alt}
          draggable={false}
          onError={() => setError(true)}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      )}

      {/* Lớp trang trí / placeholder */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(ellipse at 30% 30%, ${color}33, transparent 60%)`,
        }}
      />
      {!showImage && (
        <span
          style={{
            position: "relative",
            fontFamily: "'Playfair Display', serif",
            fontSize: "40px",
            color: `${color}AA`,
            opacity: 0.7,
          }}
        >
          ✦
        </span>
      )}
    </div>
  );
}

const THINGS = [
  { id: 1, text: "Nụ cười của em mọi lúc mọi nơi :)))", color: "#C8A8FF" },
  { id: 2, text: "Cách em ôm anh như thể đó là nơi em thuộc về.", color: "#F6C6FF" },
  { id: 3, text: "Tính cách nghệ sĩ bên trong lẫn bên ngoài", color: "#C8A8FF" },
  { id: 4, text: "Tiếng cười của em", color: "#E9DDFF" },
  { id: 5, text: "Cách em lo lắng cho anh", color: "#F6C6FF" },
  { id: 6, text: "Ánh mắt em làm anh say đắm", color: "#C5E1FF" },
  { id: 7, text: "Khi em tập trung hoàn toàn làm việc", color: "#C8A8FF" },
  { id: 8, text: "Tính hồn nhiên, vô tư như con nít", color: "#F6C6FF" },
  { id: 9, text: "Sự tinh tế trong mối quan hệ với anh", color: "#E9DDFF" },
  { id: 10, text: "Và tất nhiên, không thể không nhắc đến, anh thích em khi make love :3", color: "#C8A8FF" },
];

/** Tổng số card (dùng cho nhãn "#xx / N" và thanh tiến trình). */
const TOTAL = THINGS.length;

/** Mỗi card kèm URL ảnh tương ứng (tính 1 lần). */
const CARDS = THINGS.map((t) => ({ ...t, img: thingPhotoUrl(t.id) }));
type Card = (typeof CARDS)[number];

/** Hướng chuyển card: 1 = ảnh tiếp theo, -1 = ảnh trước. */
const slideVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? 280 : -280, opacity: 0, scale: 0.92 }),
  center: { x: 0, opacity: 1, scale: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -280 : 280, opacity: 0, scale: 0.92 }),
};

function CarouselCard({ item, direction, onNavigate }: {
  item: Card;
  direction: number;
  onNavigate: (dir: 1 | -1) => void;
}) {
  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center"
      custom={direction}
      variants={slideVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ type: "spring", stiffness: 260, damping: 28 }}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.5}
      onDragEnd={(_, info) => {
        // Vuốt sang trái → ảnh tiếp theo; vuốt sang phải → ảnh trước.
        if (info.offset.x < -80) onNavigate(1);
        else if (info.offset.x > 80) onNavigate(-1);
      }}
      whileDrag={{ cursor: "grabbing" }}
      style={{ cursor: "grab" }}
    >
      <div
        className="w-full rounded-3xl p-5 flex flex-col justify-between"
        style={{
          background: "rgba(255,255,255,0.04)",
          border: `1px solid ${item.color}25`,
          backdropFilter: "blur(30px)",
          boxShadow: `0 24px 60px rgba(0,0,0,0.4), 0 0 40px ${item.color}08`,
          minHeight: "200px",
        }}
      >
        <div>
          <CardImage
            src={item.img}
            alt={item.text}
            color={item.color}
            index={item.id - 1}
          />
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "10px",
            letterSpacing: "0.15em",
            color: item.color,
            opacity: 0.5,
            textTransform: "uppercase",
            margin: "16px 0 10px",
          }}>
            #{String(item.id).padStart(2, "0")} / {TOTAL}
          </p>
          <p style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "17px",
            fontStyle: "italic",
            color: "#E9DDFF",
            lineHeight: "1.5",
          }}>
            {item.text}
          </p>
        </div>

        <div className="flex items-center justify-between mt-6">
          <div style={{
            fontFamily: "'Caveat', cursive",
            fontSize: "13px",
            color: "#C8A8FF",
            opacity: 0.4,
          }}>
            ← ảnh trước
          </div>
          <div style={{
            width: "32px", height: "32px",
            borderRadius: "50%",
            background: `radial-gradient(circle, ${item.color}30, transparent)`,
            border: `1px solid ${item.color}40`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "14px",
          }}>
            ✦
          </div>
          <div style={{
            fontFamily: "'Caveat', cursive",
            fontSize: "13px",
            color: "#C8A8FF",
            opacity: 0.4,
          }}>
            ảnh sau →
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Screen09ThingsILike() {
  // current ∈ [0, TOTAL): đang xem card; current === TOTAL: màn kết.
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  function navigate(dir: 1 | -1) {
    setCurrent((c) => {
      const next = c + dir;
      if (next < 0 || next > TOTAL) return c; // chặn ở 2 đầu
      setDirection(dir);
      return next;
    });
  }

  const atEnd = current >= TOTAL;
  const card = atEnd ? null : CARDS[current];

  return (
    <GalaxyBg variant="aurora" className="w-full h-full">
      <div className="relative z-10 w-full h-full flex flex-col" style={{ padding: "0 20px 20px" }}>

        {/* Header */}
        <div className="pt-5 mb-6">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "9px",
              letterSpacing: "0.2em",
              color: "#C8A8FF",
              opacity: 0.5,
              textTransform: "uppercase",
            }}
          >
            Chapter 05 · Danh Sách
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "20px",
              fontWeight: "500",
              color: "#E9DDFF",
            }}
          >
            Những điều anh thích ở Em
          </motion.h2>

          {/* Progress bar */}
          <div className="mt-2 flex gap-1">
            {THINGS.map((_, i) => (
              <div key={i} style={{
                flex: 1,
                height: "2px",
                borderRadius: "1px",
                background: i < current ? "#C8A8FF" : "rgba(200, 168, 255, 0.15)",
                transition: "background 0.3s",
              }} />
            ))}
          </div>
        </div>

        {/* Card carousel */}
        <div className="relative flex-1" style={{ minHeight: "240px" }}>
          <AnimatePresence mode="popLayout" custom={direction}>
            {card ? (
              <CarouselCard key={card.id} item={card} direction={direction} onNavigate={navigate} />
            ) : (
              <motion.div
                key="end"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="absolute inset-0 flex flex-col items-center justify-center text-center"
              >
                <div style={{ fontSize: "36px", marginBottom: "16px" }}>✦</div>
                <p style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "18px",
                  fontStyle: "italic",
                  color: "#E9DDFF",
                  lineHeight: "1.6",
                }}>
                  Và còn nhiều điều nữa mà anh chưa đặt tên được...
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Bottom controls: trước / sau */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex justify-center items-center gap-3 mt-4"
        >
          <button
            onClick={() => navigate(-1)}
            disabled={current === 0}
            aria-label="Ảnh trước"
            className="px-5 py-2 rounded-full"
            style={{
              background: "rgba(200, 168, 255, 0.08)",
              border: "1px solid rgba(200, 168, 255, 0.2)",
              color: "#C8A8FF",
              fontFamily: "'Inter', sans-serif",
              fontSize: "11px",
              letterSpacing: "0.1em",
              cursor: current === 0 ? "default" : "pointer",
              opacity: current === 0 ? 0.35 : 1,
              transition: "opacity 0.2s",
            }}
          >
            ← Trước
          </button>
          <button
            onClick={() => navigate(1)}
            disabled={atEnd}
            aria-label="Ảnh sau"
            className="px-5 py-2 rounded-full"
            style={{
              background: "rgba(200, 168, 255, 0.08)",
              border: "1px solid rgba(200, 168, 255, 0.2)",
              color: "#C8A8FF",
              fontFamily: "'Inter', sans-serif",
              fontSize: "11px",
              letterSpacing: "0.1em",
              cursor: atEnd ? "default" : "pointer",
              opacity: atEnd ? 0.35 : 1,
              transition: "opacity 0.2s",
            }}
          >
            Sau →
          </button>
        </motion.div>
      </div>
    </GalaxyBg>
  );
}
