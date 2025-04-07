import React from "react";
import { Search, MessageCircle, Users, Clipboard, Heart, LifeBuoy } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/layout/navbar";

const Help = () => {
  const helpSections = [
    { icon: <LifeBuoy className="text-primary" size={40} />, title: "Bugs & Troubleshooting", description: "Find workarounds for technical issues" },
    { icon: <MessageCircle className="text-primary" size={40} />, title: "Frequently asked questions", description: "Common questions about using the app" },
    { icon: <Users className="text-primary" size={40} />, title: "Ask the Community", description: "Connect with other learners" },
    { icon: <Users className="text-primary" size={40} />, title: "Learners", description: "Guides for students" },
    { icon: <Clipboard className="text-primary" size={40} />, title: "Teachers", description: "Resources for educators" },
    { icon: <Heart className="text-primary" size={40} />, title: "Parents", description: "Help for managing student accounts" },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="max-w-4xl mx-auto bg-background min-h-screen">
            <h1 className="text-2xl font-bold mb-6 text-center">How can we help?</h1>
            
            <div className="relative w-full max-w-md mx-auto mb-8">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Start your search here..."
                  className="w-full pl-4 pr-10"
                />
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 w-full">
              {helpSections.map((section, index) => (
                <Card 
                  key={index} 
                  className="flex flex-col items-center text-center p-6 hover:bg-accent transition-colors"
                >
                  <div className="bg-muted rounded-full p-4 mb-4">{section.icon}</div>
                  <h2 className="font-semibold mb-2">{section.title}</h2>
                  <p className="text-sm text-muted-foreground">{section.description}</p>
                </Card>
              ))}
            </div>

            <div className="mt-8 flex justify-center">
              <Card className="p-6 text-center max-w-sm">
                <h2 className="font-semibold mb-2">Get Support</h2>
                <p className="text-sm text-muted-foreground mb-4">Need help? Connect with our support team</p>
                <button className="w-full bg-primary text-primary-foreground py-2 rounded-md hover:bg-primary/90 transition-colors">
                  Contact Support
                </button>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <footer className="w-full border-t py-6">
        <div className="container mx-auto px-4 max-w-6xl flex flex-col items-center justify-center gap-4 md:flex-row md:gap-8">
          <p className="text-center text-sm text-muted-foreground">© 2024 EduLearn. All rights reserved.</p>
          <nav className="flex gap-4 sm:gap-6">
            <a href="#" className="text-sm font-medium">Terms of Service</a>
            <a href="#" className="text-sm font-medium">Privacy</a>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Help;