"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { useToast } from "../../context/ToastContext"

export default function SecuritySettings() {
  // State for form values
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false)
  const [sessions, setSessions] = useState([
    { id: 1, name: "Current Session", device: "Chrome on Windows", lastActive: "now", isActive: true },
    { id: 2, name: "Mobile App", device: "iPhone", lastActive: "2 days ago", isActive: false }
  ])
  
  // Track if saving is in progress
  const [isSaving, setIsSaving] = useState(false)
  const [isSigningOut, setIsSigningOut] = useState(false)
  
  // Get toast functionality
  const { showToast } = useToast()
  
  // Handle form submission
  const handleSaveChanges = () => {
    setIsSaving(true)
    
    // Simulate API call
    setTimeout(() => {
      try {
        // If enabling 2FA, show an info message about setup
        if (twoFactorEnabled) {
          showToast("Two-factor authentication settings saved. Follow the setup instructions sent to your email.", "info")
        } else {
          showToast("Security settings saved successfully!", "success")
        }
        setIsSaving(false)
      } catch (error) {
        showToast("Failed to save security settings", "error")
        setIsSaving(false)
      }
    }, 1000)
  }
  
  // Handle sign out of a specific session
  const handleSignOutSession = (sessionId: number) => {
    setIsSigningOut(true)
    
    // Simulate API call
    setTimeout(() => {
      try {
        // Filter out the session
        setSessions(sessions.filter(session => session.id !== sessionId))
        showToast("Device signed out successfully", "success")
        setIsSigningOut(false)
      } catch (error) {
        showToast("Failed to sign out device", "error")
        setIsSigningOut(false)
      }
    }, 1000)
  }
  
  // Handle sign out of all sessions
  const handleSignOutAllSessions = () => {
    setIsSigningOut(true)
    
    // Simulate API call
    setTimeout(() => {
      try {
        // Keep only the current session
        setSessions(sessions.filter(session => session.isActive))
        showToast("All other devices signed out successfully", "success")
        setIsSigningOut(false)
      } catch (error) {
        showToast("Failed to sign out all devices", "error")
        setIsSigningOut(false)
      }
    }, 1000)
  }
  
  return (
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
                  checked={twoFactorEnabled}
                  onChange={(e) => setTwoFactorEnabled(e.target.checked)}
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-base font-medium">Session Management</h3>
          <div className="space-y-3">
            {sessions.map(session => (
              <div key={session.id} className="rounded-md border p-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-medium">{session.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {session.device} • Last active {session.lastActive}
                    </p>
                  </div>
                  {session.isActive ? (
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                      Active
                    </span>
                  ) : (
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={() => handleSignOutSession(session.id)}
                      disabled={isSigningOut}
                    >
                      {isSigningOut ? "Signing out..." : "Sign out"}
                    </Button>
                  )}
                </div>
              </div>
            ))}
            
            <Button 
              size="sm" 
              variant="outline" 
              className="mt-2"
              onClick={handleSignOutAllSessions}
              disabled={isSigningOut || sessions.length <= 1}
            >
              {isSigningOut ? "Signing out..." : "Sign out of all devices"}
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