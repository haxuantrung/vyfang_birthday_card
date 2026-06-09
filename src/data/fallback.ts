import type { SiteContent } from "@/types";

/**
 * Lá thư cuối — nguồn: DOCUMENTS/FINAL-LETTER-AND-VOICE-SCRIPT.md
 * Dùng làm fallback khi Supabase chưa có dữ liệu.
 */
const LETTER_BODY = `Gửi Vyfang,

Vậy là em đã đi đến cuối hành trình nhỏ này rồi.

Thật ra lúc bắt đầu làm website này, anh đã nghĩ rất nhiều. Anh không biết nên tặng em điều gì cho sinh nhật tuổi 28. Em là một người làm thiết kế, nên chắc chắn em sẽ nhìn thấy những thứ chưa hoàn hảo. Em cũng là một người rất tinh tế, nên những món quà làm cho có sẽ không mang nhiều ý nghĩa.

Vì vậy anh quyết định làm thứ duy nhất mà không ai khác có thể làm được. Một món quà kể về chính chúng ta.

Nghĩ lại vẫn thấy khá buồn cười. Từ hai người gần như không để ý đến nhau. Từ một cô gái từng rất ghét anh vì anh hay lớn tiếng trên sân cầu. Đến ngày hôm nay, anh có thể ngồi đây viết những dòng này cho em.

Cuộc sống đôi khi thật kỳ lạ. Nhưng anh rất biết ơn vì sự kỳ lạ đó.

Anh thích nụ cười của em. Thích cách em ôm anh. Thích cách em nắm tay anh mỗi khi đi đâu đó. Thích việc em luôn muốn ở gần người mình thương. Và thích nhất là cảm giác bình yên khi ở cạnh em.

Ở bên em, anh không cần phải cố gắng trở thành một phiên bản nào khác. Anh được là chính mình. Cảm giác đó rất hiếm.

Nếu có một điều anh mong em nhớ trong tuổi 28 này, thì đó là: Em không cần phải hoàn hảo. Em đã rất tuyệt rồi.

Anh cũng rất mong sẽ có thêm nhiều ký ức mới cùng em. Một chuyến Đà Lạt. Những chuyến đi khác. Những mùa sinh nhật tiếp theo. Những câu chuyện mới mà hiện tại chúng ta còn chưa biết.

Anh không biết tương lai sẽ như thế nào. Nhưng hiện tại, anh rất vui vì có em ở đây.

Cảm ơn em đã bước vào cuộc đời anh.

Chúc mừng sinh nhật tuổi 28, Vyfang.

Yêu em.`;

/**
 * Toàn bộ nội dung được hardcode từ dữ liệu thật trên Supabase
 * (bảng settings / gallery_photos / audio_assets / letter).
 * Nhờ vậy app vẫn hiển thị đầy đủ ảnh & audio kể cả khi không truy vấn được DB
 * hoặc thiếu env var trên production. Ảnh/audio load trực tiếp từ Storage public.
 */
export const FALLBACK_CONTENT: SiteContent = {
  settings: {
    // 10/06/2026 00:00 giờ Việt Nam (UTC+7)
    birthdayAt: "2026-06-10T00:00:00+07:00",
    passwordAnswer: "chidori",
    musicDefaultOn: true,
  },
  gallery: [
    { id: 1, storagePath: "gallery/anh-1.jpg", caption: "Lần đầu gặp nhau :v", isFeatured: false, rotation: 0, sortOrder: 1 },
    { id: 2, storagePath: "gallery/anh-2.jpg", caption: "Chidori :))", isFeatured: false, rotation: 0, sortOrder: 2 },
    { id: 3, storagePath: "gallery/selfie.jpg", caption: "Em — 28 tuổi <3", isFeatured: true, rotation: 0, sortOrder: 3 },
    { id: 4, storagePath: "gallery/anh-4.jpg", caption: "Hồ Trị An <3", isFeatured: false, rotation: 0, sortOrder: 4 },
    { id: 5, storagePath: "gallery/anh-5.jpg", caption: "Đi shopping nè", isFeatured: false, rotation: 0, sortOrder: 5 },
  ],
  voice: {
    id: 1,
    kind: "voice",
    storagePath: "audio/voice.m4a",
    title: "Giọng đọc từ anh",
    durationSeconds: null,
  },
  music: {
    id: 2,
    kind: "music",
    storagePath: "audio/background.mp3",
    title: "Nhạc nền",
    durationSeconds: null,
  },
  letter: {
    body: LETTER_BODY,
    signature: "Aiu",
  },
};
