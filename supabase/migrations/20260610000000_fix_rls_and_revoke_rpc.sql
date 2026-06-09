-- Thu hồi quyền gọi RPC rls_auto_enable từ anon/authenticated (cảnh báo linter 0028/0029).
-- Hàm này là tiện ích nội bộ Supabase, không dùng trong app.
revoke execute on function public.rls_auto_enable() from public;
revoke execute on function public.rls_auto_enable() from anon;
revoke execute on function public.rls_auto_enable() from authenticated;

-- Đảm bảo RLS + policy đọc công khai cho các bảng nội dung (idempotent).
alter table public.settings enable row level security;
alter table public.letter enable row level security;
alter table public.gallery_photos enable row level security;
alter table public.audio_assets enable row level security;

drop policy if exists "public read settings" on public.settings;
create policy "public read settings"
  on public.settings for select to anon, authenticated using (true);

drop policy if exists "public read letter" on public.letter;
create policy "public read letter"
  on public.letter for select to anon, authenticated using (true);

drop policy if exists "public read gallery" on public.gallery_photos;
create policy "public read gallery"
  on public.gallery_photos for select to anon, authenticated using (true);

drop policy if exists "public read audio" on public.audio_assets;
create policy "public read audio"
  on public.audio_assets for select to anon, authenticated using (true);
