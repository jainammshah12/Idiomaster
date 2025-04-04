"use client"

import React, { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"

// Import types
import { FontKey, DensityKey, ThemeKey, UserPreferences } from "../../types/theme"

// Import data
import { fontDisplayNames, defaultPreferences } from "../../data/themeData"

// Import utilities
import { applyThemeGlobally, savePreferencesToStorage, loadPreferencesFromStorage } from "../../utils/themeUtils"

// Import components
import ThemeSelector from "./Theme/ThemeSelector"
import ThemePreview from "./Theme/ThemePreview"
import Snackbar from "../Snackbar"

export default function InterfaceSettings() {
  // State for current settings (for preview)
  const [theme, setTheme] = useState<ThemeKey>(defaultPreferences.theme)
  const [fontSize, setFontSize] = useState<number>(defaultPreferences.fontSize)
  const [fontFamily, setFontFamily] = useState<FontKey>(defaultPreferences.fontFamily)
  const [layoutDensity, setLayoutDensity] = useState<DensityKey>(defaultPreferences.layoutDensity)
  
  // State for applied settings (global)
  const [appliedSettings, setAppliedSettings] = useState<UserPreferences>(defaultPreferences)
  
  // State for tracking changes and saved state
  const [hasChanges, setHasChanges] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  const [saveMessage, setSaveMessage] = useState("")
  const [saveStatus, setSaveStatus] = useState<"success" | "error" | "">("")
  const [showSnackbar, setShowSnackbar] = useState(false)
  
  // Load saved preferences on component mount
  useEffect(() => {
    const preferences = loadPreferencesFromStorage();
    
    if (preferences) {
      // Set preview state
      setTheme(preferences.theme)
      setFontSize(preferences.fontSize)
      setFontFamily(preferences.fontFamily)
      setLayoutDensity(preferences.layoutDensity)
      
      // Set applied state
      setAppliedSettings(preferences)
      
      // Apply settings globally
      applyThemeGlobally(
        preferences.theme,
        preferences.fontSize,
        preferences.fontFamily,
        preferences.layoutDensity
      )
    }
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
  
  // Handle saving preferences
  const savePreferences = () => {
    setIsSaving(true)
    
    try {
      // Create new preferences object
      const newPreferences: UserPreferences = {
        theme,
        fontSize,
        fontFamily,
        layoutDensity
      }
      
      // Save to localStorage
      savePreferencesToStorage(newPreferences)
      
      // Update applied settings
      setAppliedSettings(newPreferences)
      
      // Apply settings globally
      applyThemeGlobally(theme, fontSize, fontFamily, layoutDensity)
      
      // Show success message
      setSaveMessage("Your interface preferences have been updated.")
      setSaveStatus("success")
      setShowSnackbar(true)
      
      // Clear message after 10 seconds
      setTimeout(() => {
        setShowSnackbar(false)
        setTimeout(() => {
          setSaveMessage("")
          setSaveStatus("")
        }, 300) // Allow time for fade-out animation
      }, 10000)
      
      setHasChanges(false)
    } catch (error) {
      console.error("Error saving preferences:", error)
      setSaveMessage("There was a problem saving your settings.")
      setSaveStatus("error")
      setShowSnackbar(true)
      
      // Clear message after 10 seconds
      setTimeout(() => {
        setShowSnackbar(false)
        setTimeout(() => {
          setSaveMessage("")
          setSaveStatus("")
        }, 300) // Allow time for fade-out animation
      }, 10000)
    } finally {
      setIsSaving(false)
    }
  }
  
  // Function to reset to defaults
  const resetToDefaults = () => {
    setTheme(defaultPreferences.theme)
    setFontSize(defaultPreferences.fontSize)
    setFontFamily(defaultPreferences.fontFamily)
    setLayoutDensity(defaultPreferences.layoutDensity)
  }
  
  return (
    <div className={`transition-all duration-300 ${appliedSettings.layoutDensity === "compact" ? "p-2" : appliedSettings.layoutDensity === "comfortable" ? "p-8" : "p-4"}`}>
      <h2 className="text-xl font-bold mb-6">Interface Customization</h2>
      
      <div className="space-y-6">
        {/* Color Theme */}
        <ThemeSelector 
          selectedTheme={theme} 
          onThemeChange={setTheme} 
        />
        
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
            <p style={{ fontFamily: fontDisplayNames[fontFamily].split(" ")[0] }}>
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
        
        {/* Theme Preview */}
        <ThemePreview
          theme={theme}
          fontSize={fontSize}
          fontFamily={fontFamily}
          layoutDensity={layoutDensity}
        />
        
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
      
      {/* Snackbar Notification */}
      <Snackbar 
        message={saveMessage}
        status={saveStatus}
        visible={showSnackbar}
      />
    </div>
  )
}