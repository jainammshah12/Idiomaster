"use client"

import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function AccessibilitySettings() {
  return (
    <>
      <h2 className="text-xl font-bold mb-6">Accessibility</h2>
      
      <div className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-base font-medium">Reading Preferences</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <Label htmlFor="high-contrast" className="flex-grow">
                High contrast mode
              </Label>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="high-contrast"
                  className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                />
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <Label htmlFor="reduce-animations" className="flex-grow">
                Reduce animations
              </Label>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="reduce-animations"
                  className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                />
              </div>
            </div>
            
            <div>
              <Label htmlFor="line-spacing">Line spacing</Label>
              <Select defaultValue="normal">
                <SelectTrigger className="w-full" id="line-spacing">
                  <SelectValue placeholder="Select line spacing" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="compact">Compact</SelectItem>
                  <SelectItem value="normal">Normal</SelectItem>
                  <SelectItem value="relaxed">Relaxed</SelectItem>
                  <SelectItem value="loose">Loose</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-base font-medium">Content Preferences</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <Label htmlFor="screen-reader-opt" className="flex-grow">
                Optimize for screen readers
              </Label>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="screen-reader-opt"
                  className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                />
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <Label htmlFor="auto-play-videos" className="flex-grow">
                Auto-play videos
              </Label>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="auto-play-videos"
                  className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                  defaultChecked
                />
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <Label htmlFor="auto-captions" className="flex-grow">
                Auto-enable captions
              </Label>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="auto-captions"
                  className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-base font-medium">Keyboard Navigation</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <Label htmlFor="keyboard-shortcuts" className="flex-grow">
                Enable keyboard shortcuts
              </Label>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="keyboard-shortcuts"
                  className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                  defaultChecked
                />
              </div>
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