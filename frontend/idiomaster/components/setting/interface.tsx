"use client"

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
  
  // Define type-safe font maps
  type FontKey = 'arial' | 'times' | 'courier' | 'georgia' | 'verdana';
  type DensityKey = 'compact' | 'balance' | 'comfortable';
  
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
    
    // Apply theme (in a real app, this would likely toggle classNames or CSS variables)
    if (currentTheme === "default") {
      document.documentElement.classList.remove("low-contrast", "focus-mode", "calm-mode", "reading-mode", "custom-theme")
    } else {
      document.documentElement.classList.remove("low-contrast", "focus-mode", "calm-mode", "reading-mode", "custom-theme")
      document.documentElement.classList.add(currentTheme.replace(/([A-Z])/g, "-$1").toLowerCase())
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
              className={`aspect-square bg-gray-200 flex items-center justify-center rounded-md transition-all ${theme === 'default' ? 'ring-2 ring-primary' : ''}`}
              onClick={() => setTheme('default')}
              aria-pressed={theme === 'default'}
              aria-label="Default theme"
            >
              <span className="text-sm">Default</span>
            </button>
            <button 
              className={`aspect-square bg-gray-200 flex items-center justify-center rounded-md transition-all ${theme === 'lowContrast' ? 'ring-2 ring-primary' : ''}`}
              onClick={() => setTheme('lowContrast')}
              aria-pressed={theme === 'lowContrast'}
              aria-label="Low Contrast theme"
            >
              <span className="text-sm">Low Contrast</span>
            </button>
            <button 
              className={`aspect-square bg-gray-200 flex items-center justify-center rounded-md transition-all ${theme === 'focus' ? 'ring-2 ring-primary' : ''}`}
              onClick={() => setTheme('focus')}
              aria-pressed={theme === 'focus'}
              aria-label="Focus Mode theme"
            >
              <span className="text-sm">Focus Mode</span>
            </button>
            <button 
              className={`aspect-square bg-gray-200 flex items-center justify-center rounded-md transition-all ${theme === 'calm' ? 'ring-2 ring-primary' : ''}`}
              onClick={() => setTheme('calm')}
              aria-pressed={theme === 'calm'}
              aria-label="Calm Mode theme"
            >
              <span className="text-sm">Calm Mode</span>
            </button>
            <button 
              className={`aspect-square bg-gray-200 flex items-center justify-center rounded-md transition-all ${theme === 'reading' ? 'ring-2 ring-primary' : ''}`}
              onClick={() => setTheme('reading')}
              aria-pressed={theme === 'reading'}
              aria-label="Reading Mode theme"
            >
              <span className="text-sm">Reading Mode</span>
            </button>
            <button 
              className={`aspect-square bg-gray-200 flex items-center justify-center rounded-md transition-all ${theme === 'custom' ? 'ring-2 ring-primary' : ''}`}
              onClick={() => setTheme('custom')}
              aria-pressed={theme === 'custom'}
              aria-label="Customizable theme"
            >
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
            fontSize: `${fontSize}px`
          }}
        >
          {/* Dynamic spacing based on layout density */}
          <div className={layoutDensity === "compact" ? "space-y-2" : layoutDensity === "comfortable" ? "space-y-6" : "space-y-4"}>
            <h4 className="font-medium">This is a preview of your settings</h4>
            <p>This text shows how content will look with your selected font, size, and spacing.</p>
            <div className={`grid grid-cols-2 ${layoutDensity === "compact" ? "gap-2" : layoutDensity === "comfortable" ? "gap-6" : "gap-4"}`}>
              <div className={`${layoutDensity === "compact" ? "p-1" : layoutDensity === "comfortable" ? "p-4" : "p-2"} bg-muted rounded`}>Panel item 1</div>
              <div className={`${layoutDensity === "compact" ? "p-1" : layoutDensity === "comfortable" ? "p-4" : "p-2"} bg-muted rounded`}>Panel item 2</div>
            </div>
            <p className="text-sm text-muted-foreground">Changes won't be applied globally until you save.</p>
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