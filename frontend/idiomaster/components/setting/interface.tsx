"use client"

// Define type-safe font maps
type FontKey = 'arial' | 'times' | 'courier' | 'georgia' | 'verdana';
type DensityKey = 'compact' | 'balance' | 'comfortable';


import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"

export default function InterfaceSettings() {
// State for current settings (for preview)
const [theme, setTheme] = useState<string>("default")
const [fontSize, setFontSize] = useState<number>(16)
const [fontFamily, setFontFamily] = useState<FontKey>("arial")
const [layoutDensity, setLayoutDensity] = useState<DensityKey>("balance")

// State for applied settings (global)
const [appliedSettings, setAppliedSettings] = useState({
  theme: "default",
  fontSize: 16,
  fontFamily: "arial" as FontKey,
  layoutDensity: "balance" as DensityKey
})

// State for tracking changes and saved state
const [hasChanges, setHasChanges] = useState(false)
const [isSaving, setIsSaving] = useState(false)
const [saveMessage, setSaveMessage] = useState("")
const [saveStatus, setSaveStatus] = useState("")

// Load saved preferences on component mount
useEffect(() => {
  const loadSavedPreferences = () => {
    try {
      const savedPreferences = localStorage.getItem('interfacePreferences')
      if (savedPreferences) {
        const { 
          theme: savedTheme, 
          fontSize: savedFontSize, 
          fontFamily: savedFontFamily, 
          layoutDensity: savedLayoutDensity 
        } = JSON.parse(savedPreferences)
        
        // Set preview state
        setTheme(savedTheme || "default")
        setFontSize(savedFontSize || 16)
        setFontFamily((savedFontFamily as FontKey) || "arial")
        setLayoutDensity((savedLayoutDensity as DensityKey) || "balance")
        
        // Set applied state
        setAppliedSettings({
          theme: savedTheme || "default",
          fontSize: savedFontSize || 16,
          fontFamily: (savedFontFamily as FontKey) || "arial",
          layoutDensity: (savedLayoutDensity as DensityKey) || "balance"
        })
        
        // Apply settings globally
        applySettingsGlobally(
          savedTheme || "default", 
          savedFontSize || 16, 
          (savedFontFamily as FontKey) || "arial", 
          (savedLayoutDensity as DensityKey) || "balance"
        )
      }
    } catch (error) {
      console.error("Error loading saved preferences:", error)
    }
  }
  
  loadSavedPreferences()
}, [])

// Track changes by comparing with applied settings
useEffect(() => {
  setHasChanges(
    theme !== appliedSettings.theme || 
    fontSize !== appliedSettings.fontSize || 
    fontFamily !== appliedSettings.fontFamily || 
    layoutDensity !== appliedSettings.layoutDensity
  )
}, [theme, fontSize, fontFamily, layoutDensity, appliedSettings])

// Define the theme colors for preview and application
const themeColors: Record<string, {bg: string, text: string, accent: string}> = {
  default: {
    bg: "var(--background, white)",
    text: "var(--foreground, black)",
    accent: "var(--primary, #3b82f6)"
  },
  lowContrast: {
    bg: "#f8f9fa",
    text: "#495057",
    accent: "#6c757d"
  },
  focus: {
    bg: "#121212",
    text: "#e0e0e0",
    accent: "#9333ea"
  },
  calm: {
    bg: "#f0f9ff",
    text: "#0c4a6e",
    accent: "#0d9488"
  },
  reading: {
    bg: "#fffbeb",
    text: "#78350f",
    accent: "#d97706"
  },
  custom: {
    bg: "linear-gradient(to right bottom, #fff1f2, #f0f9ff)",
    text: "#2e1065",
    accent: "linear-gradient(to right, #ec4899, #3b82f6)"
  }
};

// Function to apply settings globally
const applySettingsGlobally = (
  currentTheme: string,
  currentFontSize: number,
  currentFontFamily: FontKey,
  currentLayoutDensity: DensityKey
) => {
  // Apply font size to the document
  document.documentElement.style.fontSize = `${currentFontSize}px`
  
  // Apply font family to the body
  const fontFamilyMap: Record<FontKey, string> = {
    arial: "'Arial', sans-serif",
    times: "'Times New Roman', serif",
    courier: "'Courier New', monospace",
    georgia: "'Georgia', serif",
    verdana: "'Verdana', sans-serif"
  }
  document.body.style.fontFamily = fontFamilyMap[currentFontFamily] || fontFamilyMap.arial
  
  // Apply layout density
  const densityMap: Record<DensityKey, string> = {
    compact: "0.75rem",
    balance: "1rem",
    comfortable: "1.5rem"
  }
  document.documentElement.style.setProperty('--spacing-base', densityMap[currentLayoutDensity] || densityMap.balance)
  
  // Apply theme
  // First remove all theme classes
  document.documentElement.classList.remove(
    "theme-default", "theme-lowContrast", "theme-focus", 
    "theme-calm", "theme-reading", "theme-custom"
  );
  
  // Then add current theme class
  document.documentElement.classList.add(`theme-${currentTheme}`);
  
  // Apply CSS variables for the theme
  if (themeColors[currentTheme]) {
    const colors = themeColors[currentTheme];
    
    // Apply background color
    document.documentElement.style.setProperty('--theme-bg', colors.bg);
    
    // Apply text color
    document.documentElement.style.setProperty('--theme-text', colors.text);
    
    // Apply accent color
    document.documentElement.style.setProperty('--theme-accent', colors.accent);
    
    // Toggle dark mode if needed
    if (currentTheme === 'focus') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
}

// We won't apply settings globally as they change
// This effect is only for in-place preview within the component
useEffect(() => {
  // The preview is self-contained within the component
  // No global DOM changes here
}, [theme, fontSize, fontFamily, layoutDensity])

// Handle saving preferences
const savePreferences = () => {
  setIsSaving(true)
  
  try {
    // Save to localStorage
    const preferences = {
      theme,
      fontSize,
      fontFamily,
      layoutDensity
    }
    localStorage.setItem('interfacePreferences', JSON.stringify(preferences))
    
    // Update applied settings
    setAppliedSettings({
      theme,
      fontSize,
      fontFamily,
      layoutDensity
    })
    
    // Now apply settings globally
    applySettingsGlobally(theme, fontSize, fontFamily, layoutDensity)
    
    // Show success message
    setSaveMessage("Your interface preferences have been updated.")
    setSaveStatus("success")
    
    // Clear message after 3 seconds
    setTimeout(() => {
      setSaveMessage("")
      setSaveStatus("")
    }, 3000)
    
    setHasChanges(false)
  } catch (error) {
    console.error("Error saving preferences:", error)
    setSaveMessage("There was a problem saving your settings.")
    setSaveStatus("error")
    
    // Clear message after 3 seconds
    setTimeout(() => {
      setSaveMessage("")
      setSaveStatus("")
    }, 3000)
  } finally {
    setIsSaving(false)
  }
}

// Function to reset to defaults
const resetToDefaults = () => {
  setTheme("default")
  setFontSize(16)
  setFontFamily("arial")
  setLayoutDensity("balance")
  
  // If "Reset and Apply" is desired, you would add:
  // savePreferences() here
}

// Get font family display name
const getFontDisplayName = (fontKey: FontKey): string => {
  const fontMap: Record<FontKey, string> = {
    arial: "Arial (Sans-serif)",
    times: "Times New Roman (Serif)",
    courier: "Courier New (Monospace)",
    georgia: "Georgia (Serif)",
    verdana: "Verdana (Sans-serif)"
  }
  return fontMap[fontKey] || fontMap.arial
}

return (
  <div className={`transition-all duration-300 ${appliedSettings.layoutDensity === "compact" ? "p-2" : appliedSettings.layoutDensity === "comfortable" ? "p-8" : "p-4"}`}>
    <h2 className="text-xl font-bold mb-6">Interface Customization</h2>
    
    <div className="space-y-6">
      {/* Color Theme */}
      <div>
        <h3 className="text-base font-medium mb-4" id="color-theme">Color Theme</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4" role="radiogroup" aria-labelledby="color-theme">
          <button 
            className={`aspect-square bg-white border flex flex-col items-center justify-center rounded-md transition-all ${theme === 'default' ? 'ring-2 ring-primary' : ''}`}
            onClick={() => setTheme('default')}
            aria-pressed={theme === 'default'}
            aria-label="Default theme"
          >
            <div className="w-8 h-8 bg-blue-500 rounded-full mb-2"></div>
            <span className="text-sm">Default</span>
          </button>
          <button 
            className={`aspect-square bg-gray-50 border flex flex-col items-center justify-center rounded-md transition-all ${theme === 'lowContrast' ? 'ring-2 ring-primary' : ''}`}
            onClick={() => setTheme('lowContrast')}
            aria-pressed={theme === 'lowContrast'}
            aria-label="Low Contrast theme"
          >
            <div className="w-8 h-8 bg-gray-400 rounded-full mb-2"></div>
            <span className="text-sm">Low Contrast</span>
          </button>
          <button 
            className={`aspect-square bg-gray-900 border flex flex-col items-center justify-center rounded-md transition-all ${theme === 'focus' ? 'ring-2 ring-primary' : ''}`}
            onClick={() => setTheme('focus')}
            aria-pressed={theme === 'focus'}
            aria-label="Focus Mode theme"
          >
            <div className="w-8 h-8 bg-purple-600 rounded-full mb-2"></div>
            <span className="text-sm text-white">Focus Mode</span>
          </button>
          <button 
            className={`aspect-square bg-blue-50 border flex flex-col items-center justify-center rounded-md transition-all ${theme === 'calm' ? 'ring-2 ring-primary' : ''}`}
            onClick={() => setTheme('calm')}
            aria-pressed={theme === 'calm'}
            aria-label="Calm Mode theme"
          >
            <div className="w-8 h-8 bg-teal-500 rounded-full mb-2"></div>
            <span className="text-sm">Calm Mode</span>
          </button>
          <button 
            className={`aspect-square bg-amber-50 border flex flex-col items-center justify-center rounded-md transition-all ${theme === 'reading' ? 'ring-2 ring-primary' : ''}`}
            onClick={() => setTheme('reading')}
            aria-pressed={theme === 'reading'}
            aria-label="Reading Mode theme"
          >
            <div className="w-8 h-8 bg-amber-600 rounded-full mb-2"></div>
            <span className="text-sm">Reading Mode</span>
          </button>
          <button 
            className={`aspect-square bg-gradient-to-br from-pink-100 to-blue-100 border flex flex-col items-center justify-center rounded-md transition-all ${theme === 'custom' ? 'ring-2 ring-primary' : ''}`}
            onClick={() => setTheme('custom')}
            aria-pressed={theme === 'custom'}
            aria-label="Customizable theme"
          >
            <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full mb-2"></div>
            <span className="text-sm">Customizable</span>
          </button>
        </div>
      </div>
      
      {/* Font Type with preview */}
      <div className="space-y-2">
        <Label htmlFor="font-type">Font Type</Label>
        <Select 
          value={fontFamily} 
          onValueChange={(value) => setFontFamily(value as FontKey)}
        >
          <SelectTrigger className="w-full" id="font-type">
            <SelectValue placeholder="Select a font" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="arial">Arial (Sans-serif)</SelectItem>
            <SelectItem value="times">Times New Roman (Serif)</SelectItem>
            <SelectItem value="courier">Courier New (Monospace)</SelectItem>
            <SelectItem value="georgia">Georgia (Serif)</SelectItem>
            <SelectItem value="verdana">Verdana (Sans-serif)</SelectItem>
          </SelectContent>
        </Select>
        
        {/* Font preview */}
        <div className="mt-2 p-3 border rounded bg-card">
          <p style={{ fontFamily: getFontDisplayName(fontFamily).split(" ")[0] }}>
            The quick brown fox jumps over the lazy dog.
          </p>
        </div>
      </div>
      
      {/* Font Size with live preview */}
      <div className="space-y-2">
        <div className="flex justify-between">
          <Label htmlFor="font-size">Font Size: {fontSize}px</Label>
          <div className="bg-muted px-2 py-1 rounded">
            <span className="text-xs font-medium">SAMPLE TEXT</span>
          </div>
        </div>
        <Slider
          id="font-size"
          min={12}
          max={24}
          step={1}
          value={[fontSize]}
          onValueChange={(value) => setFontSize(value[0])}
          className="w-full"
        />
        
        {/* Font size preview */}
        <div className="mt-2 p-3 border rounded bg-card">
          <p style={{ fontSize: `${fontSize}px` }}>
            This text shows the selected font size.
          </p>
        </div>
      </div>
      
      {/* Layout Density with preview */}
      <div className="space-y-2">
        <Label htmlFor="layout-density">Layout Density</Label>
        <Select 
          value={layoutDensity} 
          onValueChange={(value) => setLayoutDensity(value as DensityKey)}
        >
          <SelectTrigger className="w-full" id="layout-density">
            <SelectValue placeholder="Select layout density" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="compact">Compact - Reduced Spacing</SelectItem>
            <SelectItem value="balance">Balance - Default Spacing</SelectItem>
            <SelectItem value="comfortable">Comfortable - Increased Spacing</SelectItem>
          </SelectContent>
        </Select>
        
        {/* Density preview */}
        <div className="mt-2 border rounded bg-card overflow-hidden">
          <div className={`p-2 ${layoutDensity === "compact" ? "space-y-1" : layoutDensity === "comfortable" ? "space-y-4" : "space-y-2"}`}>
            <div className="bg-muted p-2 rounded">Item 1</div>
            <div className="bg-muted p-2 rounded">Item 2</div>
            <div className="bg-muted p-2 rounded">Item 3</div>
          </div>
        </div>
      </div>
      
      {/* Preview Section */}
    <div className="mt-8 p-4 border rounded-lg bg-background shadow">
      <h3 className="text-base font-medium mb-4">Settings Preview</h3>
      
      <div 
        className="p-4 border rounded"
        style={{
          fontFamily: getFontDisplayName(fontFamily).split(" ")[0],
          fontSize: `${fontSize}px`,
          background: themeColors[theme]?.bg || "white",
          color: themeColors[theme]?.text || "black"
        }}
      >
        {/* Dynamic spacing based on layout density */}
        <div className={layoutDensity === "compact" ? "space-y-2" : layoutDensity === "comfortable" ? "space-y-6" : "space-y-4"}>
          <h4 className="font-medium">This is a preview of your settings</h4>
          <p>This text shows how content will look with your selected font, size, and spacing.</p>
          <div className={`grid grid-cols-2 ${layoutDensity === "compact" ? "gap-2" : layoutDensity === "comfortable" ? "gap-6" : "gap-4"}`}>
            <div className={`${layoutDensity === "compact" ? "p-1" : layoutDensity === "comfortable" ? "p-4" : "p-2"} rounded`} 
                 style={{ 
                   background: themeColors[theme]?.accent || "blue", 
                   color: theme === 'focus' ? 'white' : 'black'
                 }}>
              Panel item 1
            </div>
            <div className={`${layoutDensity === "compact" ? "p-1" : layoutDensity === "comfortable" ? "p-4" : "p-2"} rounded`}
                 style={{ 
                   background: themeColors[theme]?.accent || "blue", 
                   color: theme === 'focus' ? 'white' : 'black'
                 }}>
              Panel item 2
            </div>
          </div>
          <p className="text-sm opacity-70">Changes won't be applied globally until you save.</p>
        </div>
      </div>
    </div>
      
    {/* Feedback Message */}
      {saveMessage && (
        <div className={`p-3 rounded text-center ${saveStatus === "success" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
          {saveMessage}
        </div>
      )}
      
      {/* Action Buttons */}
      <div className="flex justify-between mt-6">
        <Button 
          variant="outline" 
          onClick={resetToDefaults}
          disabled={isSaving}
        >
          Reset to Defaults
        </Button>
        
        <Button 
          onClick={savePreferences}
          disabled={!hasChanges || isSaving}
        >
          {isSaving ? "Saving..." : "Save Changes"}
        </Button>
      </div>
    </div>
  </div>
)
}