"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { useToast } from "@/context/ToastContext";
import Navbar from "@/components/layout/navbar";
import Link from "next/link";

// Define the accessibility settings type
interface AccessibilitySettings {
  textToSpeech: boolean;
  screenReader: boolean;
  highContrast: boolean;
  reducedAnimations: boolean;
}

// Define valid keys for type safety
type AccessibilityKey = keyof AccessibilitySettings;

export default function ProfileManagementPage() {
  const { showToast } = useToast();
  
  // State for form values
  const [textStyle, setTextStyle] = useState("Arial");
  const [bgStyle, setBgStyle] = useState("blue");
  const [contextFormat, setContextFormat] = useState("mixed");
  const [learningPace, setLearningPace] = useState("standard");
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Doe");
  const [displayName, setDisplayName] = useState("John");
  const [email, setEmail] = useState("john_doe@example.com");
  const [accessibility, setAccessibility] = useState<AccessibilitySettings>({
    textToSpeech: false,
    screenReader: false,
    highContrast: false,
    reducedAnimations: false,
  });
  
  // Track if saving is in progress
  const [isSaving, setIsSaving] = useState(false);

  const handleAccessibilityChange = (key: AccessibilityKey) => {
    setAccessibility({
      ...accessibility,
      [key]: !accessibility[key],
    });
  };

  const handleSave = () => {
    setIsSaving(true);
    
    // Validate email
    if (!email.includes('@')) {
      showToast("Please enter a valid email address", "error");
      setIsSaving(false);
      return;
    }
    
    // Simulate API call
    setTimeout(() => {
      try {
        // Here you would normally save to an API
        console.log("User Preferences Saved:", {
          textStyle,
          bgStyle,
          contextFormat,
          learningPace,
          firstName,
          lastName,
          displayName,
          email,
          accessibility,
        });
        
        showToast("Your profile has been updated successfully!", "success");
        setIsSaving(false);
      } catch (error) {
        showToast("Failed to update profile", "error");
        setIsSaving(false);
      }
    }, 1000);
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4 max-w-6xl">
          <h1 className="text-2xl font-bold mb-6">Profile Management</h1>
          
          <Card className="p-6">
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Avatar Section */}
                <div className="space-y-4">
                  <h3 className="text-base font-medium">Avatar</h3>
                  <div className="flex flex-col items-center">
                    <div
                      className="w-24 h-24 rounded-full flex items-center justify-center text-2xl font-semibold mb-4"
                      style={{
                        backgroundColor: bgStyle,
                        fontFamily: textStyle,
                        color: bgStyle === "yellow" ? "black" : "white",
                      }}
                    >
                      {displayName.charAt(0).toUpperCase()}
                    </div>
                    
                    <div className="w-full space-y-4">
                      <div className="space-y-2">
                        <Label>Text Style</Label>
                        <div className="grid grid-cols-2 gap-2">
                          {["Arial", "Georgia", "Courier", "Times"].map((style) => (
                            <Button
                              key={style}
                              variant={textStyle === style ? "default" : "outline"}
                              size="sm"
                              onClick={() => setTextStyle(style)}
                              className="text-xs"
                            >
                              {style}
                            </Button>
                          ))}
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label>Background Color</Label>
                        <div className="flex justify-between">
                          {["blue", "green", "red", "purple", "teal"].map((color) => (
                            <button
                              key={color}
                              className={`w-8 h-8 rounded-full ${
                                bgStyle === color ? "ring-2 ring-primary ring-offset-2" : ""
                              }`}
                              style={{ backgroundColor: color }}
                              onClick={() => setBgStyle(color)}
                              aria-label={`Set background color to ${color}`}
                            />
                          ))}
                        </div>
                      </div>
                      
                      <Button variant="outline" size="sm" className="w-full">
                        Upload Custom Avatar
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Profile Settings */}
                <div className="col-span-2 space-y-6">
                  {/* Personal Information */}
                  <div className="space-y-4">
                    <h3 className="text-base font-medium">Personal Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="first-name">First Name</Label>
                        <Input
                          id="first-name"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="last-name">Last Name</Label>
                        <Input
                          id="last-name"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="display-name">Display Name</Label>
                      <Input
                        id="display-name"
                        value={displayName}
                        onChange={(e) => setDisplayName(e.target.value)}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>

                  {/* Learning Preferences */}
                  <div className="space-y-4">
                    <h3 className="text-base font-medium">Learning Preferences</h3>
                    
                    <div className="space-y-2">
                      <Label htmlFor="context-format">Content Format</Label>
                      <Select value={contextFormat} onValueChange={setContextFormat}>
                        <SelectTrigger id="context-format">
                          <SelectValue placeholder="Select content format" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="mixed">Mixed (Text & Visual)</SelectItem>
                          <SelectItem value="text">Text Only</SelectItem>
                          <SelectItem value="visual">Visual Only</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="learning-pace">Learning Pace</Label>
                      <Select value={learningPace} onValueChange={setLearningPace}>
                        <SelectTrigger id="learning-pace">
                          <SelectValue placeholder="Select learning pace" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="standard">Standard</SelectItem>
                          <SelectItem value="fast">Fast</SelectItem>
                          <SelectItem value="slow">Slow</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Accessibility Settings */}
                  <div className="space-y-4">
                    <h3 className="text-base font-medium">Accessibility Settings</h3>
                    <div className="space-y-3">
                      {(Object.keys(accessibility) as AccessibilityKey[]).map((key) => (
                        <div key={key} className="flex items-center justify-between">
                          <Label htmlFor={`accessibility-${key}`} className="flex-grow">
                            {key.replace(/([A-Z])/g, " $1").split(" ").map(word => 
                              word.charAt(0).toUpperCase() + word.slice(1)
                            ).join(" ")}
                          </Label>
                          <div className="flex items-center h-5">
                            <input
                              type="checkbox"
                              id={`accessibility-${key}`}
                              checked={accessibility[key]}
                              onChange={() => handleAccessibilityChange(key)}
                              className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Save Button */}
              <div className="flex justify-end mt-6">
                <Button
                  onClick={handleSave}
                  disabled={isSaving}
                >
                  {isSaving ? "Saving..." : "Save Profile"}
                </Button>
              </div>
            </div>
          </Card>
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
  );
}