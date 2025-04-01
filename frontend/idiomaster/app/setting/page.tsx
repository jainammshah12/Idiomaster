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
                  activeTab === "interface" ? "bg-muted" : ""
                }`}
                onClick={() => setActiveTab("interface")}
                aria-selected={activeTab === "interface"}
                role="tab"
              >
                <span className="font-medium">Interface Customization</span>
              </button>
              <button
                className={`p-4 w-full text-left border-b ${
                  activeTab === "notifications" ? "bg-muted" : ""
                }`}
                onClick={() => setActiveTab("notifications")}
                aria-selected={activeTab === "notifications"}
                role="tab"
              >
                <span className="font-medium">Notifications</span>
              </button>
              <button
                className={`p-4 w-full text-left border-b ${
                  activeTab === "focus" ? "bg-muted" : ""
                }`}
                onClick={() => setActiveTab("focus")}
                aria-selected={activeTab === "focus"}
                role="tab"
              >
                <span className="font-medium">Focus Tools</span>
              </button>
              <button
                className={`p-4 w-full text-left border-b ${
                  activeTab === "accessibility" ? "bg-muted" : ""
                }`}
                onClick={() => setActiveTab("accessibility")}
                aria-selected={activeTab === "accessibility"}
                role="tab"
              >
                <span className="font-medium">Accessibility</span>
              </button>
              <button
                className={`p-4 w-full text-left ${
                  activeTab === "security" ? "bg-muted" : ""
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
                <h2 className="text-xl font-bold">Notifications Settings</h2>
                // Add notifications settings content here
              )}
              
              {activeTab === "focus" && (
                <h2 className="text-xl font-bold">Focus Tools Settings</h2>
                // Add focus tools settings content here
              )}
              
              {activeTab === "accessibility" && (
                <h2 className="text-xl font-bold">Accessibility Settings</h2>
                // Add accessibility settings content here
              )}
              
              {activeTab === "security" && (
                <h2 className="text-xl font-bold">Account Security Settings</h2>
                // Add security settings content here
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