"use client"

import { useState } from "react"
import Link from "next/link"

import { Card } from "@/components/ui/card"
import Navbar from "@/components/layout/navbar"

// Import settings tab components
import InterfaceSettings from "@/components/setting/interface"
import NotificationSettings from "@/components/setting/notification"
import FocusSettings from "@/components/setting/focus"
import AccessibilitySettings from "@/components/setting/accessibility"
import SecuritySettings from "@/components/setting/security"

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("interface")
  
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
                <div role="tablist" aria-label="Settings categories">
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
                </div>
              </Card>
            </div>
            
            {/* Main Content */}
            <div className="md:col-span-3">
              <Card className="p-6">
                {activeTab === "interface" && <InterfaceSettings />}
                {activeTab === "notifications" && <NotificationSettings />}
                {activeTab === "focus" && <FocusSettings />}
                {activeTab === "accessibility" && <AccessibilitySettings />}
                {activeTab === "security" && <SecuritySettings />}
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