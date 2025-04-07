"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { useToast } from "../../context/ToastContext"

export default function FocusSettings() {
  // State for form values
  const [focusDuration, setFocusDuration] = useState(25)
  const [breakDuration, setBreakDuration] = useState(5)
  const [autoStartBreaks, setAutoStartBreaks] = useState(true)
  const [autoStartFocus, setAutoStartFocus] = useState(false)
  const [blockNotifications, setBlockNotifications] = useState(true)
  const [focusMode, setFocusMode] = useState(true)
  const [backgroundSound, setBackgroundSound] = useState("none")
  const [soundVolume, setSoundVolume] = useState([50])
  
  // Track if saving is in progress
  const [isSaving, setIsSaving] = useState(false)
  
  // Get toast functionality
  const { showToast } = useToast()
  
  // Handle form submission
  const handleSaveChanges = () => {
    setIsSaving(true)
    
    // Validate inputs
    if (focusDuration < 5 || focusDuration > 120) {
      showToast("Focus duration must be between 5 and 120 minutes", "error")
      setIsSaving(false)
      return
    }
    
    if (breakDuration < 1 || breakDuration > 30) {
      showToast("Break duration must be between 1 and 30 minutes", "error")
      setIsSaving(false)
      return
    }
    
    // Simulate API call
    setTimeout(() => {
      try {
        // Here you would normally save to an API
        // For now we'll just show a success message
        showToast("Focus settings saved successfully!", "success")
        setIsSaving(false)
      } catch (error) {
        showToast("Failed to save focus settings", "error")
        setIsSaving(false)
      }
    }, 1000)
  }
  
  return (
    <>
      <h2 className="text-xl font-bold mb-6">Focus Tools</h2>
      
      <div className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-base font-medium">Study Timer</h3>
          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="focus-duration">Focus duration (minutes)</Label>
                <Input 
                  id="focus-duration" 
                  type="number" 
                  min={5} 
                  max={120} 
                  value={focusDuration}
                  onChange={(e) => setFocusDuration(Number(e.target.value))}
                />
              </div>
              <div>
                <Label htmlFor="break-duration">Break duration (minutes)</Label>
                <Input 
                  id="break-duration" 
                  type="number" 
                  min={1} 
                  max={30} 
                  value={breakDuration}
                  onChange={(e) => setBreakDuration(Number(e.target.value))}
                />
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <Label htmlFor="auto-start-breaks" className="flex-grow">
                Auto-start breaks
              </Label>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="auto-start-breaks"
                  className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                  checked={autoStartBreaks}
                  onChange={(e) => setAutoStartBreaks(e.target.checked)}
                />
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <Label htmlFor="auto-start-focus" className="flex-grow">
                Auto-start focus sessions after breaks
              </Label>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="auto-start-focus"
                  className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                  checked={autoStartFocus}
                  onChange={(e) => setAutoStartFocus(e.target.checked)}
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-base font-medium">Distraction Blocking</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <Label htmlFor="block-notifications" className="flex-grow">
                Block notifications during focus sessions
              </Label>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="block-notifications"
                  className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                  checked={blockNotifications}
                  onChange={(e) => setBlockNotifications(e.target.checked)}
                />
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <Label htmlFor="focus-mode" className="flex-grow">
                Enable focus mode UI during focus sessions
              </Label>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="focus-mode"
                  className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                  checked={focusMode}
                  onChange={(e) => setFocusMode(e.target.checked)}
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-base font-medium">Background Sounds</h3>
          <div className="space-y-3">
            <div>
              <Select 
                value={backgroundSound}
                onValueChange={setBackgroundSound}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select background sound" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">None</SelectItem>
                  <SelectItem value="white-noise">White noise</SelectItem>
                  <SelectItem value="rain">Rain</SelectItem>
                  <SelectItem value="coffee-shop">Coffee shop</SelectItem>
                  <SelectItem value="nature">Nature</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Label htmlFor="sound-volume">Volume</Label>
              <Slider
                id="sound-volume"
                min={0}
                max={100}
                step={1}
                value={soundVolume}
                onValueChange={setSoundVolume}
                className="w-full"
                disabled={backgroundSound === "none"}
              />
            </div>
          </div>
        </div>
        
        {/* Save Button */}
        <div className="flex justify-end mt-6">
          <Button 
            onClick={handleSaveChanges}
            disabled={isSaving}
          >
            {isSaving ? "Saving..." : "Save Changes"}
          </Button>
        </div>
      </div>
    </>
  )
}