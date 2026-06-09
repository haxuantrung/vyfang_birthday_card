export interface GalleryPhoto {
  id: number;
  /** Đường dẫn file trong Supabase Storage, hoặc URL tuyệt đối. */
  storagePath: string | null;
  caption: string;
  isFeatured: boolean;
  rotation: number;
  sortOrder: number;
}

export type AudioKind = "voice" | "music";

export interface AudioAsset {
  id: number;
  kind: AudioKind;
  storagePath: string | null;
  title: string;
  durationSeconds: number | null;
}

export interface LetterContent {
  body: string;
  signature: string;
}

export interface SiteSettings {
  /** Mốc mở khóa (ISO string). */
  birthdayAt: string;
  /** Đáp án mật khẩu (so sánh không phân biệt hoa thường). */
  passwordAnswer: string;
  /** Bật nhạc nền mặc định. */
  musicDefaultOn: boolean;
}

export interface SiteContent {
  settings: SiteSettings;
  gallery: GalleryPhoto[];
  voice: AudioAsset | null;
  music: AudioAsset | null;
  letter: LetterContent;
}
