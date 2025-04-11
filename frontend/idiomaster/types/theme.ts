// Theme types
export type FontKey = 'arial' | 'times' | 'courier' | 'georgia' | 'verdana';
export type DensityKey = 'compact' | 'balance' | 'comfortable';
export type ThemeKey = 'default' | 'lowContrast' | 'focus' | 'calm' | 'reading' | 'custom';

export interface ThemeColor {
  background: string;
  foreground: string;
  primary: string;
  secondary: string;
  accent: string;
}

export interface Theme {
  name: string;
  key: ThemeKey;
  colors: ThemeColor;
  isDark: boolean;
  previewColor: string;
  description: string;
}

export interface UserPreferences {
  theme: ThemeKey;
  fontSize: number;
  fontFamily: FontKey;
  layoutDensity: DensityKey;
}