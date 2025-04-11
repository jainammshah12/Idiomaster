"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "../../context/ToastContext"

export default function NotificationSettings() {
  // State for form values
  const [emailCourseUpdates, setEmailCourseUpdates] = useState(true)
  const [emailAnnouncements, setEmailAnnouncements] = useState(true)
  const [emailReminders, setEmailReminders] = useState(true)
  const [inAppMessages, setInAppMessages] = useState(true)
  const [inAppCourseUpdates, setInAppCourseUpdates] = useState(true)
  const [inAppAnnouncements, setInAppAnnouncements] = useState(true)
  const [frequency, setFrequency] = useState("immediately")
  
  // Track if saving is in progress
  const [isSaving, setIsSaving] = useState(false)
  
  // Get toast functionality
  const { showToast } = useToast()
  
  // Handle form submission
  const handleSaveChanges = () => {
    setIsSaving(true)
    
    // Simulate API call
    setTimeout(() => {
      try {
        // Here you would normally save to an API
        // For now we'll just show a success message
        showToast("Notification preferences saved successfully!", "success")
        setIsSaving(false)
      } catch (error) {
        showToast("Failed to save notification preferences", "error")
        setIsSaving(false)
      }
    }, 1000)
  }
  
  return (
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
                  checked={emailCourseUpdates}
                  onChange={(e) => setEmailCourseUpdates(e.target.checked)}
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
                  checked={emailAnnouncements}
                  onChange={(e) => setEmailAnnouncements(e.target.checked)}
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
                  checked={emailReminders}
                  onChange={(e) => setEmailReminders(e.target.checked)}
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
                  checked={inAppMessages}
                  onChange={(e) => setInAppMessages(e.target.checked)}
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
                  checked={inAppCourseUpdates}
                  onChange={(e) => setInAppCourseUpdates(e.target.checked)}
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
                  checked={inAppAnnouncements}
                  onChange={(e) => setInAppAnnouncements(e.target.checked)}
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-base font-medium">Notification Frequency</h3>
          <div className="space-y-3">
            <div>
              <Select 
                value={frequency} 
                onValueChange={setFrequency}
              >
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