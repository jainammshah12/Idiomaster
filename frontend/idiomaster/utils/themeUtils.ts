import { FontKey, DensityKey, ThemeKey, UserPreferences } from "../types/theme";
import { themeColors, fontFamilyMap, densityMap } from "../data/themeData";

// Save preferences to localStorage
export const savePreferencesToStorage = (preferences: UserPreferences): void => {
  try {
    localStorage.setItem('interfacePreferences', JSON.stringify(preferences));
  } catch (error) {
    console.error("Error saving preferences to localStorage:", error);
  }
};

// Load preferences from localStorage
export const loadPreferencesFromStorage = (): UserPreferences | null => {
  try {
    const savedPreferences = localStorage.getItem('interfacePreferences');
    if (savedPreferences) {
      return JSON.parse(savedPreferences);
    }
    return null;
  } catch (error) {
    console.error("Error loading preferences from localStorage:", error);
    return null;
  }
};

// Apply theme globally
export const applyThemeGlobally = (
  currentTheme: ThemeKey,
  currentFontSize: number,
  currentFontFamily: FontKey,
  currentLayoutDensity: DensityKey
): void => {
  // Apply font size to the document
  document.documentElement.style.fontSize = `${currentFontSize}px`;
  
  // Apply font family to the body
  document.body.style.fontFamily = fontFamilyMap[currentFontFamily] || fontFamilyMap.arial;
  
  // Apply layout density
  document.documentElement.style.setProperty('--spacing-base', densityMap[currentLayoutDensity] || densityMap.balance);
  
  // Apply theme colors
  const themeData = themeColors[currentTheme];
  if (themeData) {
    const colors = themeData.colors;
    
    // Set CSS HSL variables
    document.documentElement.style.setProperty('--background', colors.background);
    document.documentElement.style.setProperty('--foreground', colors.foreground);
    document.documentElement.style.setProperty('--primary', colors.primary);
    document.documentElement.style.setProperty('--secondary', colors.secondary);
    document.documentElement.style.setProperty('--accent', colors.accent);
    
    // Set derived variables
    document.documentElement.style.setProperty('--card', colors.background);
    document.documentElement.style.setProperty('--card-foreground', colors.foreground);
    document.documentElement.style.setProperty('--popover', colors.background);
    document.documentElement.style.setProperty('--popover-foreground', colors.foreground);
    document.documentElement.style.setProperty('--primary-foreground', themeData.isDark ? '240 10% 10%' : '0 0% 100%');
    document.documentElement.style.setProperty('--secondary-foreground', themeData.isDark ? '240 10% 10%' : '0 0% 100%');
    document.documentElement.style.setProperty('--muted', colors.background);
    document.documentElement.style.setProperty('--muted-foreground', colors.primary);
    document.documentElement.style.setProperty('--accent-foreground', colors.foreground);
    
    // Toggle dark mode class
    if (themeData.isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
};