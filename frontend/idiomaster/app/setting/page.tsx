"use client"

import { useState } from "react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import Navbar from "@/components/layout/navbar"

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("interface")
  const [theme, setTheme] = useState("default")
  const [fontSize, setFontSize] = useState(16)
  const [fontFamily, setFontFamily] = useState("arial")
  const [layoutDensity, setLayoutDensity] = useState("balance")
  
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4 max-w-6xl">
          <h1 className="text-2xl font-bold mb-6">Settings</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="md:col-span-1">
            <Card className="overflow-hidden">
              <button
                className={`p-4 w-full text-left border-b ${
                  activeTab === "interface" ? "bg-primary text-primary-foreground" : "bg-background hover:bg-muted/50"
                }`}
                onClick={() => setActiveTab("interface")}
                aria-selected={activeTab === "interface"}
                role="tab"
              >
                <span className="font-medium">Interface Customization</span>
              </button>
              <button
                className={`p-4 w-full text-left border-b ${
                  activeTab === "notifications" ? "bg-primary text-primary-foreground" : "bg-background hover:bg-muted/50"
                }`}
                onClick={() => setActiveTab("notifications")}
                aria-selected={activeTab === "notifications"}
                role="tab"
              >
                <span className="font-medium">Notifications</span>
              </button>
              <button
                className={`p-4 w-full text-left border-b ${
                  activeTab === "focus" ? "bg-primary text-primary-foreground" : "bg-background hover:bg-muted/50"
                }`}
                onClick={() => setActiveTab("focus")}
                aria-selected={activeTab === "focus"}
                role="tab"
              >
                <span className="font-medium">Focus Tools</span>
              </button>
              <button
                className={`p-4 w-full text-left border-b ${
                  activeTab === "accessibility" ? "bg-primary text-primary-foreground" : "bg-background hover:bg-muted/50"
                }`}
                onClick={() => setActiveTab("accessibility")}
                aria-selected={activeTab === "accessibility"}
                role="tab"
              >
                <span className="font-medium">Accessibility</span>
              </button>
              <button
                className={`p-4 w-full text-left ${
                  activeTab === "security" ? "bg-primary text-primary-foreground" : "bg-background hover:bg-muted/50"
                }`}
                onClick={() => setActiveTab("security")}
                aria-selected={activeTab === "security"}
                role="tab"
              >
                <span className="font-medium">Account Security</span>
              </button>
            </Card>
          </div>
          
          {/* Main Content */}
          <div className="md:col-span-3">
            <Card className="p-6">
              {activeTab === "interface" && (
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
                        <SelectTrigger className="w-full">
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
                        <SelectTrigger className="w-full">
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
              )}
              
              {activeTab === "notifications" && (
                <>
                  <h2 className="text-xl font-bold mb-6">Notifications</h2>
                  
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-base font-medium">Email Notifications</h3>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <Label htmlFor="email-course-updates" className="flex-grow">
                            Course updates
                          </Label>
                          <div className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              id="email-course-updates"
                              className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                              defaultChecked
                            />
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <Label htmlFor="email-announcements" className="flex-grow">
                            Announcements
                          </Label>
                          <div className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              id="email-announcements"
                              className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                              defaultChecked
                            />
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <Label htmlFor="email-reminders" className="flex-grow">
                            Reminders
                          </Label>
                          <div className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              id="email-reminders"
                              className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                              defaultChecked
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="text-base font-medium">In-App Notifications</h3>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <Label htmlFor="inapp-messages" className="flex-grow">
                            Messages
                          </Label>
                          <div className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              id="inapp-messages"
                              className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                              defaultChecked
                            />
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <Label htmlFor="inapp-course-updates" className="flex-grow">
                            Course updates
                          </Label>
                          <div className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              id="inapp-course-updates"
                              className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                              defaultChecked
                            />
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <Label htmlFor="inapp-announcements" className="flex-grow">
                            Announcements
                          </Label>
                          <div className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              id="inapp-announcements"
                              className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                              defaultChecked
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="text-base font-medium">Notification Frequency</h3>
                      <div className="space-y-3">
                        <div>
                          <Select defaultValue="immediately">
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="Select frequency" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="immediately">Immediately</SelectItem>
                              <SelectItem value="daily">Daily digest</SelectItem>
                              <SelectItem value="weekly">Weekly digest</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>
                    
                    {/* Save Button */}
                    <div className="flex justify-end mt-6">
                      <Button>Save Changes</Button>
                    </div>
                  </div>
                </>
              )}
              
              {activeTab === "focus" && (
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
              )}
              
              {activeTab === "accessibility" && (
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
                            <SelectTrigger className="w-full">
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
              )}
              
              {activeTab === "security" && (
                <>
                  <h2 className="text-xl font-bold mb-6">Account Security</h2>
                  
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-base font-medium">Two-Factor Authentication</h3>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div>
                            <Label htmlFor="enable-2fa" className="block font-medium mb-1">
                              Enable Two-Factor Authentication
                            </Label>
                            <p className="text-sm text-muted-foreground">
                              Add an extra layer of security to your account
                            </p>
                          </div>
                          <div className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              id="enable-2fa"
                              className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="text-base font-medium">Session Management</h3>
                      <div className="space-y-3">
                        <div className="rounded-md border p-4">
                          <div className="flex justify-between items-center">
                            <div>
                              <h4 className="font-medium">Current Session</h4>
                              <p className="text-sm text-muted-foreground">
                                Chrome on Windows • Last active now
                              </p>
                            </div>
                            <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                              Active
                            </span>
                          </div>
                        </div>
                        
                        <div className="rounded-md border p-4">
                          <div className="flex justify-between items-center">
                            <div>
                              <h4 className="font-medium">Mobile App</h4>
                              <p className="text-sm text-muted-foreground">
                                iPhone • Last active 2 days ago
                              </p>
                            </div>
                            <Button size="sm" variant="outline">Sign out</Button>
                          </div>
                        </div>
                        
                        <Button size="sm" variant="outline" className="mt-2">
                          Sign out of all devices
                        </Button>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="text-base font-medium">Account Activity</h3>
                      <div className="space-y-1 text-sm">
                        <p className="flex justify-between">
                          <span>Password changed</span>
                          <span className="text-muted-foreground">1 month ago</span>
                        </p>
                        <p className="flex justify-between">
                          <span>Last login</span>
                          <span className="text-muted-foreground">Today, 2:15 PM</span>
                        </p>
                        <p className="flex justify-between">
                          <span>Account created</span>
                          <span className="text-muted-foreground">3 months ago</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </Card>
          </div>
        </div>
        </div>
      </main>
      
      <footer className="w-full border-t py-6">
        <div className="container mx-auto px-4 max-w-6xl flex flex-col items-center justify-center gap-4 md:flex-row md:gap-8">
          <p className="text-center text-sm text-muted-foreground">© 2024 EduLearn. All rights reserved.</p>
          <nav className="flex gap-4 sm:gap-6">
            <Link href="#" className="text-sm font-medium">Terms of Service</Link>
            <Link href="#" className="text-sm font-medium">Privacy</Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}