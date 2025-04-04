"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"

export default function FocusSettings() {
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
                  defaultValue={25} 
                />
              </div>
              <div>
                <Label htmlFor="break-duration">Break duration (minutes)</Label>
                <Input 
                  id="break-duration" 
                  type="number" 
                  min={1} 
                  max={30} 
                  defaultValue={5} 
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
                  defaultChecked
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
                  defaultChecked
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
                  defaultChecked
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-base font-medium">Background Sounds</h3>
          <div className="space-y-3">
            <div>
              <Select defaultValue="none">
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
                defaultValue={[50]}
                className="w-full"
              />
            </div>
          </div>
        </div>
        
        {/* Save Button */}
        <div className="flex justify-end mt-6">
          <Button>Save Changes</Button>
        </div>
      </div>
    </>
  )
}