import { Theme, ThemeKey } from "../types/theme";

// Define the theme colors as HSL values optimized for neurodiverse users
export const themeColors: Record<ThemeKey, Theme> = {
  default: {
    name: "Standard",
    key: "default",
    colors: {
      // Standard but with slightly reduced contrast
      background: "210 40% 98%",
      foreground: "210 50% 20%",
      primary: "210 100% 50%",
      secondary: "200 100% 45%",
      accent: "220 30% 90%"
    },
    isDark: false,
    previewColor: "bg-blue-500",
    description: "Balanced design suitable for most users with moderate contrast."
  },
  lowContrast: {
    name: "Low Contrast",
    key: "lowContrast",
    colors: {
      // Lower contrast for visual sensitivity
      background: "200 15% 96%",
      foreground: "200 10% 35%",
      primary: "200 30% 55%",
      secondary: "200 25% 65%",
      accent: "200 20% 90%"
    },
    isDark: false,
    previewColor: "bg-gray-400",
    description: "Reduced contrast for visual sensitivity and reduced eye strain."
  },
  focus: {
    name: "Focus Mode",
    key: "focus",
    colors: {
      // Dark mode with reduced blue light
      background: "230 15% 15%",
      foreground: "40 30% 90%",
      primary: "280 60% 60%",
      secondary: "250 40% 60%",
      accent: "260 30% 40%"
    },
    isDark: true,
    previewColor: "bg-purple-600",
    description: "Dark theme to reduce distractions and improve focus."
  },
  calm: {
    name: "Calm Mode",
    key: "calm",
    colors: {
      // Soft blue - good for anxiety reduction (research backed)
      background: "195 30% 95%",
      foreground: "200 50% 25%",
      primary: "180 50% 40%",
      secondary: "190 40% 50%",
      accent: "185 30% 85%"
    },
    isDark: false,
    previewColor: "bg-teal-500",
    description: "Soft blue tones to create a calming environment."
  },
  reading: {
    name: "Reading",
    key: "reading",
    colors: {
      // Cream/beige good for dyslexia and extended reading
      background: "40 30% 96%",
      foreground: "30 60% 25%",
      primary: "35 80% 45%",
      secondary: "25 70% 55%",
      accent: "40 40% 88%"
    },
    isDark: false,
    previewColor: "bg-amber-600",
    description: "Warm colors optimized for extended reading and dyslexia."
  },
  custom: {
    name: "Soft Focus",
    key: "custom",
    colors: {
      // Soft colors that work well for ADHD and autism spectrum
      background: "180 20% 97%",
      foreground: "210 50% 25%",
      primary: "170 70% 40%",
      secondary: "220 70% 50%",
      accent: "200 30% 90%"
    },
    isDark: false,
    previewColor: "bg-teal-600",
    description: "Optimized for ADHD and autism spectrum with gentle colors."
  }
};

// Font data
export const fontFamilyMap = {
  arial: "'Arial', sans-serif",
  times: "'Times New Roman', serif",
  courier: "'Courier New', monospace",
  georgia: "'Georgia', serif",
  verdana: "'Verdana', sans-serif"
};

export const fontDisplayNames = {
  arial: "Arial (Sans-serif)",
  times: "Times New Roman (Serif)",
  courier: "Courier New (Monospace)",
  georgia: "Georgia (Serif)",
  verdana: "Verdana (Sans-serif)"
};

// Layout density
export const densityMap = {
  compact: "0.75rem",
  balance: "1rem",
  comfortable: "1.5rem"
};

// Default preferences
export const defaultPreferences = {
  theme: "default" as ThemeKey,
  fontSize: 16,
  fontFamily: "arial" as const,
  layoutDensity: "balance" as const
};