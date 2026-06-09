import { createClient, type SupabaseClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

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

export const SUPABASE_BUCKET =
  process.env.NEXT_PUBLIC_SUPABASE_BUCKET ?? "media";

/** Tạo public URL cho 1 file trong Storage bucket. */
export function storagePublicUrl(path: string | null | undefined): string | null {
  if (!path) return null;
  if (/^https?:\/\//i.test(path)) return path; // đã là URL tuyệt đối
  const client = getSupabase();
  if (!client) return null;
  const { data } = client.storage.from(SUPABASE_BUCKET).getPublicUrl(path);
  return data.publicUrl ?? null;
}
