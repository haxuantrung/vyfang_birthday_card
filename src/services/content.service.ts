import { getSupabase } from "@/lib/supabase/client";
import { FALLBACK_CONTENT } from "@/data/fallback";
import type {
  AudioAsset,
  GalleryPhoto,
  LetterContent,
  SiteContent,
  SiteSettings,
} from "@/types";

/**
 * Tầng truy cập nội dung. Mọi dữ liệu lấy từ Supabase, nhưng luôn có
 * fallback để trải nghiệm vẫn hoạt động khi DB chưa được seed/upload.
 */

interface SettingRow {
  key: string;
  value: unknown;
}

interface GalleryRow {
  id: number;
  storage_path: string | null;
  caption: string | null;
  is_featured: boolean | null;
  rotation: number | null;
  sort_order: number | null;
}

interface AudioRow {
  id: number;
  kind: string;
  storage_path: string | null;
  title: string | null;
  duration_seconds: number | null;
  is_active: boolean | null;
}

interface LetterRow {
  body: string | null;
  signature: string | null;
}

function mapSettings(rows: SettingRow[] | null): SiteSettings {
  const base = { ...FALLBACK_CONTENT.settings };
  if (!rows) return base;
  const dict = new Map(rows.map((r) => [r.key, r.value]));
  const birthdayAt = dict.get("birthday_at");
  const passwordAnswer = dict.get("password_answer");
  const musicDefaultOn = dict.get("music_default_on");
  return {
    birthdayAt: typeof birthdayAt === "string" ? birthdayAt : base.birthdayAt,
    passwordAnswer:
      typeof passwordAnswer === "string" ? passwordAnswer : base.passwordAnswer,
    musicDefaultOn:
      typeof musicDefaultOn === "boolean" ? musicDefaultOn : base.musicDefaultOn,
  };
}

function mapGallery(rows: GalleryRow[] | null): GalleryPhoto[] {
  if (!rows || rows.length === 0) return FALLBACK_CONTENT.gallery;
  return rows.map((r) => ({
    id: r.id,
    storagePath: r.storage_path,
    caption: r.caption ?? "",
    isFeatured: Boolean(r.is_featured),
    rotation: r.rotation ?? 0,
    sortOrder: r.sort_order ?? r.id,
  }));
}

function mapAudio(rows: AudioRow[] | null, kind: "voice" | "music"): AudioAsset | null {
  if (!rows) return null;
  const row = rows.find((r) => r.kind === kind && r.is_active !== false);
  if (!row) return null;
  return {
    id: row.id,
    kind,
    storagePath: row.storage_path,
    title: row.title ?? (kind === "voice" ? "Giọng đọc từ anh" : "Nhạc nền"),
    durationSeconds: row.duration_seconds,
  };
}

function mapLetter(row: LetterRow | null): LetterContent {
  if (!row) return FALLBACK_CONTENT.letter;
  return {
    body: row.body ?? FALLBACK_CONTENT.letter.body,
    signature: row.signature ?? FALLBACK_CONTENT.letter.signature,
  };
}

export async function fetchSiteContent(): Promise<SiteContent> {
  const supabase = getSupabase();
  if (!supabase) return FALLBACK_CONTENT;

  try {
    const [settingsRes, galleryRes, audioRes, letterRes] = await Promise.all([
      supabase.from("settings").select("key, value"),
      supabase
        .from("gallery_photos")
        .select("id, storage_path, caption, is_featured, rotation, sort_order")
        .order("sort_order", { ascending: true }),
      supabase
        .from("audio_assets")
        .select("id, kind, storage_path, title, duration_seconds, is_active"),
      supabase.from("letter").select("body, signature").limit(1).maybeSingle(),
    ]);

    return {
      settings: mapSettings(settingsRes.data as SettingRow[] | null),
      gallery: mapGallery(galleryRes.data as GalleryRow[] | null),
      voice: mapAudio(audioRes.data as AudioRow[] | null, "voice"),
      music: mapAudio(audioRes.data as AudioRow[] | null, "music"),
      letter: mapLetter(letterRes.data as LetterRow | null),
    };
  } catch {
    // Lỗi mạng / RLS → vẫn trả fallback để không vỡ trải nghiệm.
    return FALLBACK_CONTENT;
  }
}
