"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"

export default function InterfaceSettings() {
  const [theme, setTheme] = useState("default")
  const [fontSize, setFontSize] = useState(16)
  const [fontFamily, setFontFamily] = useState("arial")
  const [layoutDensity, setLayoutDensity] = useState("balance")
  
  return (
    <>
      <h2 className="text-xl font-bold mb-6">Interface Customization</h2>
      
      <div className="space-y-6">
        {/* Color Theme */}
        <div>
          <h3 className="text-base font-medium mb-4" id="color-theme">Color Theme</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4" role="radiogroup" aria-labelledby="color-theme">
            <button 
              className={`aspect-square bg-gray-200 flex items-center justify-center rounded-md ${theme === 'default' ? 'ring-2 ring-primary' : ''}`}
              onClick={() => setTheme('default')}
              aria-pressed={theme === 'default'}
              aria-label="Default theme"
            >
              <span className="text-sm">Default</span>
            </button>
            <button 
              className={`aspect-square bg-gray-200 flex items-center justify-center rounded-md ${theme === 'lowContrast' ? 'ring-2 ring-primary' : ''}`}
              onClick={() => setTheme('lowContrast')}
              aria-pressed={theme === 'lowContrast'}
              aria-label="Low Contrast theme"
            >
              <span className="text-sm">Low Contrast</span>
            </button>
            <button 
              className={`aspect-square bg-gray-200 flex items-center justify-center rounded-md ${theme === 'focus' ? 'ring-2 ring-primary' : ''}`}
              onClick={() => setTheme('focus')}
              aria-pressed={theme === 'focus'}
              aria-label="Focus Mode theme"
            >
              <span className="text-sm">Focus Mode</span>
            </button>
            <button 
              className={`aspect-square bg-gray-200 flex items-center justify-center rounded-md ${theme === 'calm' ? 'ring-2 ring-primary' : ''}`}
              onClick={() => setTheme('calm')}
              aria-pressed={theme === 'calm'}
              aria-label="Calm Mode theme"
            >
              <span className="text-sm">Calm Mode</span>
            </button>
            <button 
              className={`aspect-square bg-gray-200 flex items-center justify-center rounded-md ${theme === 'reading' ? 'ring-2 ring-primary' : ''}`}
              onClick={() => setTheme('reading')}
              aria-pressed={theme === 'reading'}
              aria-label="Reading Mode theme"
            >
              <span className="text-sm">Reading Mode</span>
            </button>
            <button 
              className={`aspect-square bg-gray-200 flex items-center justify-center rounded-md ${theme === 'custom' ? 'ring-2 ring-primary' : ''}`}
              onClick={() => setTheme('custom')}
              aria-pressed={theme === 'custom'}
              aria-label="Customizable theme"
            >
              <span className="text-sm">Customizable</span>
            </button>
          </div>
        </div>
        
        {/* Font Type */}
        <div className="space-y-2">
          <Label htmlFor="font-type">Font Type</Label>
          <Select value={fontFamily} onValueChange={setFontFamily}>
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
        </div>
        
        {/* Font Size */}
        <div className="space-y-2">
          <div className="flex justify-between">
            <Label htmlFor="font-size">Font Size</Label>
            <div className="bg-muted px-2 py-1 rounded">
              <span className="text-xs font-medium">SAMPLE TEXT</span>
            </div>
          </div>
          <Slider
            id="font-size"
            min={12}
            max={24}
            step={1}
            defaultValue={[fontSize]}
            onValueChange={(value) => setFontSize(value[0])}
            className="w-full"
          />
        </div>
        
        {/* Layout Density */}
        <div className="space-y-2">
          <Label htmlFor="layout-density">Layout Density</Label>
          <Select value={layoutDensity} onValueChange={setLayoutDensity}>
            <SelectTrigger className="w-full" id="layout-density">
              <SelectValue placeholder="Select layout density" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="compact">Compact - Reduced Spacing</SelectItem>
              <SelectItem value="balance">Balance - Default Spacing</SelectItem>
              <SelectItem value="comfortable">Comfortable - Increased Spacing</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        {/* Save Button */}
        <div className="flex justify-end mt-6">
          <Button>Save Changes</Button>
        </div>
      </div>
    </>
  )
}