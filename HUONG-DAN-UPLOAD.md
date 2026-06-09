# Hướng dẫn upload Ảnh & Voice lên Supabase

Toàn bộ media (ảnh, voice, nhạc nền) được lưu trong **Storage bucket `media`** (đã tạo sẵn, ở chế độ public). Website đọc dữ liệu từ 2 bảng `gallery_photos` và `audio_assets`.

> Quy tắc quan trọng: cột `storage_path` là đường dẫn **bên trong** bucket, KHÔNG kèm tên bucket.
> Ví dụ file `gallery/anh-1.jpg` → `storage_path = 'gallery/anh-1.jpg'`.

Truy cập dashboard: https://supabase.com/dashboard/project/sctvnaymqjtedbedmcxf

---

## A. Upload ẢNH (gallery polaroid)

### Bước 1 — Upload file ảnh
1. Vào **Storage** → bucket **`media`**.
2. Tạo thư mục `gallery` (nút *Create folder*).
3. Bấm **Upload files**, chọn các ảnh (khuyến nghị `.webp`/`.jpg`, đã nén, ≤ ~1MB/ảnh).

### Bước 2 — Khai báo ảnh vào bảng `gallery_photos`
Vào **Table Editor → `gallery_photos`** và thêm dòng, hoặc dùng **SQL Editor**:

```sql
insert into public.gallery_photos (storage_path, caption, is_featured, sort_order) values
  ('gallery/anh-1.jpg', 'Lần đầu gặp nhau',  false, 1),
  ('gallery/anh-2.jpg', 'Chidori',           false, 2),
  ('gallery/selfie.jpg','Em — 28 tuổi',       true,  3),  -- ảnh ở giữa, nổi bật
  ('gallery/anh-4.jpg', 'Hồ Trị An',          false, 4),
  ('gallery/anh-5.jpg', 'Buổi sáng thứ 7',    false, 5);
```

- `is_featured = true`: ảnh hiển thị to ở chính giữa collage (nên chọn 1 ảnh selfie chung).
- `sort_order`: thứ tự (màn hình hiện 5 vị trí đầu tiên).
- Để sửa caption/ảnh sau này chỉ cần `update` lại dòng tương ứng.

---

## A2. Upload ẢNH cho màn "Những điều anh thích ở Em" (card swipe)

Màn này hiển thị 1 ảnh cho mỗi card (hiện có **10 card**). **Không cần khai báo bảng** — website tự tìm ảnh theo tên file cố định.

### Quy tắc đặt tên (bắt buộc)
1. Trong bucket **`media`**, tạo thư mục `things`.
2. Upload ảnh với tên **đúng số thứ tự card**, dạng 2 chữ số:

```
things/01.jpg   ← card #01 "Nụ cười của em..."
things/02.jpg   ← card #02 "Cách em chọn màu tím..."
things/03.jpg
...
things/10.jpg   ← card #10
```

- Định dạng `.jpg` (đúng đuôi này), nên là ảnh vuông hoặc ngang, đã nén ≤ ~1MB.
- Không cần upload đủ 10 ảnh ngay: card nào **chưa có ảnh** sẽ hiển thị nền galaxy + dấu ✦ cho tới khi bạn upload.
- Số trên card (`#01 / 10` … `#10 / 10`) chính là số file cần đặt.

> Muốn đổi đuôi sang `.webp` hoặc đổi thứ tự text/màu thì cần sửa code màn `Screen09ThingsILike.tsx` — báo mình hỗ trợ.

---

## A3. Upload ẢNH cho màn "Hồ Trị An" (Chapter 04)

Màn này có khung cảnh đêm vẽ sẵn. Khi bạn upload 1 ảnh thật, ảnh sẽ **tự phủ lên** khung cảnh đó. **Không cần khai báo bảng.**

1. Trong bucket **`media`**, tạo thư mục `lake`.
2. Upload đúng 1 file tên **`ho-tri-an.jpg`**:

```
lake/ho-tri-an.jpg
```

- Ảnh ngang đẹp nhất (khung hiển thị tỉ lệ ~16:9), `.jpg`, nén ≤ ~1MB.
- Chưa upload thì màn vẫn hiển thị cảnh đêm minh hoạ (lều, trăng, lửa trại) như bình thường.

> Muốn đổi sang nhiều ảnh hoặc đổi tên file thì báo mình chỉnh `Screen08HoTriAn.tsx`.

---

## B. Upload VOICE (giọng đọc trong lá thư)

### Bước 1 — Upload file voice
1. Trong bucket **`media`**, tạo thư mục `audio`.
2. Upload file voice (`.m4a`, `.mp3` hoặc `.webm`), ví dụ `audio/voice.m4a`.

### Bước 2 — Kích hoạt voice (SQL Editor)
Bảng đã có sẵn 1 dòng `kind = 'voice'`, chỉ cần cập nhật:

```sql
update public.audio_assets
set storage_path = 'audio/voice.m4a',
    duration_seconds = 58,   -- thời lượng (giây), tùy chọn
    is_active = true
where kind = 'voice';
```

Khi `is_active = true` và có `storage_path`, nút ▶ trong lá thư sẽ phát giọng đọc thật.

---

## C. Upload NHẠC NỀN (tùy chọn)

```sql
update public.audio_assets
set storage_path = 'audio/background.mp3',
    is_active = true
where kind = 'music';
```

Nhạc nền tự loop, âm lượng ~20%, có nút bật/tắt ở góc phải màn hình.

---

## D. Kiểm tra nhanh

- Public URL của 1 file:
  `https://sctvnaymqjtedbedmcxf.supabase.co/storage/v1/object/public/media/<storage_path>`
  → dán vào trình duyệt, nếu xem được ảnh/nghe được audio là OK.
- Reload website (Vercel) → ảnh và voice xuất hiện. Không cần deploy lại; dữ liệu được đọc trực tiếp từ Supabase.

## E. Đổi nội dung khác (không cần sửa code)

```sql
-- Đổi mật khẩu / ngày mở khóa
update public.settings set value = '"chidori"'::jsonb            where key = 'password_answer';
update public.settings set value = '"2026-06-10T00:00:00+07:00"'::jsonb where key = 'birthday_at';

-- Sửa nội dung lá thư
update public.letter set body = '... nội dung mới ...', signature = 'Aiu' where id = 1;
```
