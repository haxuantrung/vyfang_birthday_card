import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lavender: "#C8A8FF",
        "soft-purple": "#B794F4",
        "pastel-lilac": "#E9DDFF",
        "aurora-pink": "#F6C6FF",
        "aurora-blue": "#C5E1FF",
        "deep-space": "#120B2D",
        "galaxy-purple": "#26184A",
        "text-secondary": "#D8D3EA",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
        hand: ["var(--font-caveat)", "cursive"],
      },
    },
  },
  plugins: [],
};

export default config;
