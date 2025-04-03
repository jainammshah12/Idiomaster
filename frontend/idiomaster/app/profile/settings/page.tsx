"use client";

import React, { useState } from "react";

export default function Settings() {
  const [theme, setTheme] = useState("light");
  const [notifications, setNotifications] = useState(true);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const toggleNotifications = () => {
    setNotifications((prevNotifications) => !prevNotifications);
  };

  return (
    <div className="settings-container" style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h1>User Settings</h1>
      
      <div className="setting-item" style={{ marginBottom: '20px' }}>
        <h3>Theme</h3>
        <p>Current Theme: {theme}</p>
        <button onClick={toggleTheme} style={{ padding: '10px', cursor: 'pointer' }}>
          Toggle Theme
        </button>
      </div>

      <div className="setting-item" style={{ marginBottom: '20px' }}>
        <h3>Notifications</h3>
        <p>Notifications: {notifications ? "Enabled" : "Disabled"}</p>
        <button onClick={toggleNotifications} style={{ padding: '10px', cursor: 'pointer' }}>
          Toggle Notifications
        </button>
      </div>
    </div>
  );
}
