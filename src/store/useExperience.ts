import { create } from "zustand";
import type { SiteContent } from "@/types";

export type Phase =
  | "loading"
  | "countdown"
  | "password"
  | "opening"
  | "galaxy"
  | "letter"
  | "ending";

interface ExperienceState {
  phase: Phase;
  content: SiteContent | null;
  /** id các "vì sao" ký ức đã mở. */
  openedMemories: string[];
  /** Memory overlay đang mở (null = đang ở galaxy). */
  activeMemory: string | null;
  musicEnabled: boolean;

  setContent: (content: SiteContent) => void;
  setPhase: (phase: Phase) => void;
  openMemory: (id: string) => void;
  closeMemory: () => void;
  toggleMusic: () => void;
  setMusic: (on: boolean) => void;
  reset: () => void;
}

export const useExperience = create<ExperienceState>((set) => ({
  phase: "loading",
  content: null,
  openedMemories: [],
  activeMemory: null,
  musicEnabled: false,

  setContent: (content) => set({ content }),
  setPhase: (phase) => set({ phase }),
  openMemory: (id) =>
    set((state) => ({
      activeMemory: id,
      openedMemories: state.openedMemories.includes(id)
        ? state.openedMemories
        : [...state.openedMemories, id],
    })),
  closeMemory: () => set({ activeMemory: null }),
  toggleMusic: () => set((state) => ({ musicEnabled: !state.musicEnabled })),
  setMusic: (on) => set({ musicEnabled: on }),
  reset: () =>
    set({
      phase: "countdown",
      openedMemories: [],
      activeMemory: null,
    }),
}));
