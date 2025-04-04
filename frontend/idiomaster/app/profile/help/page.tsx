import React from "react";
import { Search, MessageCircle, Users, Clipboard, Heart, LifeBuoy } from "lucide-react";

const Help = () => {
  const helpSections = [
    { icon: <LifeBuoy size={40} />, title: "Bugs & Troubleshooting", description: "Find workarounds for technical issues" },
    { icon: <MessageCircle size={40} />, title: "Frequently asked questions", description: "Common questions about using the app" },
    { icon: <Users size={40} />, title: "Ask the Community", description: "Common questions about using the app" },
    { icon: <Users size={40} />, title: "Learners", description: "Guides for students" },
    { icon: <Clipboard size={40} />, title: "Teachers", description: "Resources for educators" },
    { icon: <Heart size={40} />, title: "Parents", description: "Help for managing student accounts" },
  ];

  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen p-6">
      <h1 className="text-2xl font-bold mb-4">How can we help?</h1>
      <div className="relative w-full max-w-md mb-8">
        <input
          type="text"
          placeholder="Start your search here..."
          className="w-full p-3 border rounded-lg shadow-sm"
        />
        <Search className="absolute right-3 top-3 text-gray-400" size={20} />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-4xl">
        {helpSections.map((section, index) => (
          <div key={index} className="flex flex-col items-center text-center p-4">
            <div className="bg-gray-200 rounded-full p-4 mb-2">{section.icon}</div>
            <h2 className="font-semibold">{section.title}</h2>
            <p className="text-sm text-gray-500">{section.description}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 p-4 border rounded-lg shadow bg-white text-center max-w-sm">
        <h2 className="font-semibold">Get Support</h2>
        <p className="text-sm text-gray-500">Need help? Connect with our support team</p>
      </div>
    </div>
  );
};

export default Help;
