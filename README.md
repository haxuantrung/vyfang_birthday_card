# Gửi Vyfang — Interactive Birthday Experience

Một trải nghiệm sinh nhật tương tác được thiết kế riêng cho Vyfang. Không phải thiệp, không phải landing page — mà là một hành trình cảm xúc qua "vũ trụ" các vì sao ký ức (Galaxy Map → Memories → Final Letter → Voice).

## Tech stack

- **Next.js 15** (App Router) + **TypeScript**
- **TailwindCSS** (design tokens tím pastel / glassmorphism)
- **Motion** (Framer Motion) cho animation cinematic
- **Zustand** quản lý flow trạng thái
- **Supabase** (Postgres + Storage) cung cấp nội dung (ảnh, voice, nhạc, thư, settings)
- **Vercel** deploy

## Flow trải nghiệm

```
Countdown → Password (chidori) → Opening Cinematic → Galaxy Map
   → 8 vì sao ký ức + secret stars → Final Letter + Voice → Ending
```

## Chạy local

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build production
```

### Biến môi trường (`.env.local`)

| Biến | Mô tả |
| --- | --- |
| `NEXT_PUBLIC_SUPABASE_URL` | URL project Supabase |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Anon/publishable key |
| `NEXT_PUBLIC_SUPABASE_BUCKET` | Tên bucket Storage chứa media (mặc định `media`) |

Xem `.env.example`. App vẫn chạy bình thường với **nội dung fallback** nếu Supabase chưa có dữ liệu.

## Kiến trúc thư mục

```
src/
├── app/                 # App Router (layout, page, globals.css)
├── components/
│   ├── screens/         # 15 màn hình trải nghiệm (port từ Figma)
│   ├── Experience.tsx   # Orchestrator flow (client boundary)
│   ├── AudioController.tsx
│   ├── GalaxyBg.tsx · FloatingParticles.tsx
│   └── figma/ImageWithFallback.tsx
├── lib/supabase/        # Supabase client + helper Storage URL
├── services/            # content.service (đọc dữ liệu + fallback)
├── store/               # Zustand store (phase, opened, music)
├── data/                # Nội dung fallback (thư, settings)
└── types/               # Kiểu dữ liệu
```

## Cấu trúc dữ liệu Supabase

| Bảng | Vai trò |
| --- | --- |
| `settings` (key/value) | `birthday_at`, `password_answer`, `music_default_on` |
| `letter` | Nội dung thư cuối + chữ ký |
| `gallery_photos` | Ảnh polaroid (`storage_path`, `caption`, `is_featured`, `sort_order`) |
| `audio_assets` | `voice` & `music` (`storage_path`, `is_active`) |

Tất cả bảng bật RLS, chỉ cho **đọc công khai**. Việc thêm/sửa dữ liệu thực hiện qua Supabase Dashboard.

## Hướng dẫn upload ảnh & voice (làm sau)

Xem chi tiết trong [`HUONG-DAN-UPLOAD.md`](./HUONG-DAN-UPLOAD.md).

## Deploy lên Vercel

1. Import repo GitHub vào Vercel.
2. Thêm 3 biến môi trường ở trên trong Project Settings → Environment Variables.
3. Deploy. Framework preset tự nhận **Next.js**.
