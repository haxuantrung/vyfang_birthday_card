import { createClient, type SupabaseClient } from "@supabase/supabase-js";

/** Chuỗi rỗng từ env Vercel cũng được coi là thiếu cấu hình. */
function readEnv(value: string | undefined): string | undefined {
  const trimmed = value?.trim();
  return trimmed ? trimmed : undefined;
}

const url = readEnv(process.env.NEXT_PUBLIC_SUPABASE_URL);
const anonKey = readEnv(process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

export const SUPABASE_BUCKET = readEnv(process.env.NEXT_PUBLIC_SUPABASE_BUCKET) ?? "media";

/**
 * Singleton Supabase client cho phía browser.
 * Trả về `null` nếu thiếu cấu hình để app vẫn chạy với nội dung fallback.
 */
let cached: SupabaseClient | null | undefined;

export function getSupabase(): SupabaseClient | null {
  if (cached !== undefined) return cached;
  if (!url || !anonKey) {
    cached = null;
    return cached;
  }
  cached = createClient(url, anonKey, {
    auth: { persistSession: false },
  });
  return cached;
}

/**
 * Tạo public URL cho 1 file trong Storage bucket (public read).
 * Dựng URL trực tiếp — không cần Supabase client.
 */
export function storagePublicUrl(path: string | null | undefined): string | null {
  if (!path || !url) return null;
  if (/^https?:\/\//i.test(path)) return path;
  const clean = path.replace(/^\/+/, "");
  return `${url}/storage/v1/object/public/${SUPABASE_BUCKET}/${clean}`;
}
