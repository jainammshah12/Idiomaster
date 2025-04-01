"use client"

import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function NotificationSettings() {
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
  )
}