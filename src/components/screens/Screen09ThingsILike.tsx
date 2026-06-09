import { useState } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform } from "motion/react";
import { GalaxyBg } from "../GalaxyBg";

const THINGS = [
  { id: 1, text: "Nụ cười của em khi em không biết ai đang nhìn", color: "#C8A8FF" },
  { id: 2, text: "Cách em chọn màu tím cho mọi thứ", color: "#F6C6FF" },
  { id: 3, text: "Sự sáng tạo không bao giờ cạn của em", color: "#C8A8FF" },
  { id: 4, text: "Tiếng cười của em — ấm và thật", color: "#E9DDFF" },
  { id: 5, text: "Cách em quan tâm người xung quanh mà không cần ai biết", color: "#F6C6FF" },
  { id: 6, text: "Đôi mắt em nhìn bầu trời", color: "#C5E1FF" },
  { id: 7, text: "Sự kiên định theo đuổi điều em yêu", color: "#C8A8FF" },
  { id: 8, text: "Cách em đam mê UIUX đến quên giờ giấc", color: "#F6C6FF" },
  { id: 9, text: "Tính hướng ngoại — em kéo anh ra khỏi vỏ bọc", color: "#E9DDFF" },
  { id: 10, text: "Cách em nói chuyện, lúc nào cũng có story", color: "#C8A8FF" },
  { id: 11, text: "Sự nhiệt tình em mang đến mọi thứ", color: "#F6C6FF" },
  { id: 12, text: "Em hiểu anh theo cách khó ai làm được", color: "#C5E1FF" },
  { id: 13, text: "Tinh thần Gemini — hai phía, đều hay", color: "#C8A8FF" },
  { id: 14, text: "Cách em kể chuyện làm anh cứ muốn nghe mãi", color: "#F6C6FF" },
  { id: 15, text: "Những lúc em hay dỗi rồi lại cười ngay", color: "#E9DDFF" },
  { id: 16, text: "Cách em trân trọng từng khoảnh khắc nhỏ", color: "#C8A8FF" },
  { id: 17, text: "Ánh mắt em khi em đang vẽ, thiết kế", color: "#F6C6FF" },
  { id: 18, text: "Em luôn là chính em, không cần màu mè", color: "#C5E1FF" },
  { id: 19, text: "Cách em nghĩ về tương lai — đẹp và thực", color: "#C8A8FF" },
  { id: 20, text: "Tất cả những điều em chưa biết về bản thân", color: "#F6C6FF" },
];

function SwipeCard({ item, index, total, onSwipe }: {
  item: typeof THINGS[0];
  index: number;
  total: number;
  onSwipe: (dir: "left" | "right") => void;
}) {
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-150, 150], [-12, 12]);
  const opacity = useTransform(x, [-150, -80, 0, 80, 150], [0, 1, 1, 1, 0]);

  const scale = 1 - index * 0.04;
  const yOffset = index * 8;

  if (index > 2) return null;

  return (
    <motion.div
      style={{
        x: index === 0 ? x : 0,
        rotate: index === 0 ? rotate : 0,
        opacity: index === 0 ? opacity : 1,
        scale,
        y: yOffset,
        position: "absolute",
        width: "100%",
        zIndex: total - index,
        cursor: index === 0 ? "grab" : "default",
      }}
      drag={index === 0 ? "x" : false}
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={(_, info) => {
        if (index === 0) {
          if (info.offset.x > 80) onSwipe("right");
          else if (info.offset.x < -80) onSwipe("left");
        }
      }}
      whileDrag={{ cursor: "grabbing" }}
    >
      <div
        className="w-full rounded-3xl p-7 flex flex-col justify-between"
        style={{
          background: "rgba(255,255,255,0.04)",
          border: `1px solid ${item.color}25`,
          backdropFilter: "blur(30px)",
          boxShadow: `0 24px 60px rgba(0,0,0,0.4), 0 0 40px ${item.color}08`,
          minHeight: "200px",
        }}
      >
        <div>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "10px",
            letterSpacing: "0.15em",
            color: item.color,
            opacity: 0.5,
            textTransform: "uppercase",
            marginBottom: "16px",
          }}>
            #{String(item.id).padStart(2, "0")} / 20
          </p>
          <p style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "18px",
            fontStyle: "italic",
            color: "#E9DDFF",
            lineHeight: "1.6",
          }}>
            {item.text}
          </p>
        </div>

        {index === 0 && (
          <div className="flex items-center justify-between mt-6">
            <div style={{
              fontFamily: "'Caveat', cursive",
              fontSize: "13px",
              color: "#C8A8FF",
              opacity: 0.4,
            }}>
              ← tiếp theo
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
              vuốt →
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export function Screen09ThingsILike() {
  const [cards, setCards] = useState(THINGS);
  const [gone, setGone] = useState(0);

  function handleSwipe() {
    setCards((prev) => prev.slice(1));
    setGone((g) => g + 1);
  }

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
            20 Điều Anh Thích Ở Em
          </motion.h2>

          {/* Progress bar */}
          <div className="mt-2 flex gap-1">
            {THINGS.map((_, i) => (
              <div key={i} style={{
                flex: 1,
                height: "2px",
                borderRadius: "1px",
                background: i < gone ? "#C8A8FF" : "rgba(200, 168, 255, 0.15)",
                transition: "background 0.3s",
              }} />
            ))}
          </div>
        </div>

        {/* Card stack */}
        <div className="relative flex-1" style={{ minHeight: "240px" }}>
          {cards.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
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
          ) : (
            <AnimatePresence>
              {cards.slice(0, 3).map((item, index) => (
                <SwipeCard
                  key={item.id}
                  item={item}
                  index={index}
                  total={cards.length}
                  onSwipe={handleSwipe}
                />
              ))}
            </AnimatePresence>
          )}
        </div>

        {/* Bottom tap hint */}
        {cards.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex justify-center mt-4"
          >
            <button
              onClick={() => handleSwipe()}
              className="px-6 py-2 rounded-full"
              style={{
                background: "rgba(200, 168, 255, 0.08)",
                border: "1px solid rgba(200, 168, 255, 0.2)",
                color: "#C8A8FF",
                fontFamily: "'Inter', sans-serif",
                fontSize: "11px",
                letterSpacing: "0.1em",
                cursor: "pointer",
              }}
            >
              Tiếp theo →
            </button>
          </motion.div>
        )}
      </div>
    </GalaxyBg>
  );
}
