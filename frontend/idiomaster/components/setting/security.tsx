"use client"

import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

export default function SecuritySettings() {
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
        
        {/* Save Button */}
        <div className="flex justify-end mt-6">
          <Button>Save Changes</Button>
        </div>
      </div>
    </>
  )
}