"use client";

import React, { useState } from "react";
import { Switch, Select, MenuItem, TextField, Button } from "@mui/material";
import { useRouter } from "next/navigation";

const ProfileManagement = () => {
  const router = useRouter(); // Initialize router
  const [textStyle, setTextStyle] = useState("Arial");
  const [bgStyle, setBgStyle] = useState("blue");
  const [contextFormat, setContextFormat] = useState("Mixed (Text & Visual)");
  const [learningPace, setLearningPace] = useState("Standard");
  const [accessibility, setAccessibility] = useState({
    textToSpeech: false,
    screenReader: false,
    highContrast: false,
    reducedAnimations: false,
  });

  const handleSave = () => {
    console.log("User Preferences Saved:", {
      textStyle,
      bgStyle,
      contextFormat,
      learningPace,
      accessibility,
    });
    alert("Your preferences have been saved!");
  };

  return (
    <div className="max-w-4xl mx-auto p-4 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between bg-gray-300 p-4 rounded-md">
        <h1 className="text-xl font-semibold">IdioMaster</h1>
        <div className="flex items-center space-x-4">
          <span>
            <button onClick={() => router.push("/courses")}>Courses</button>
          </span>
          <span>
            <button onClick={() => router.push("profile/settings")}>Settings</button>
          </span>
          <span>
            <button onClick={() => router.push("profile/help")}>Help</button>
          </span>
          <div className="flex items-center space-x-2">
            <img
              src="https://vanwinefest.ca/wp-content/uploads/bfi_thumb/profile-default-male-nyg4vc4i3m1d5pote7rfsv4o4c7p5ka5an0pselxcc-nyhjt6b1oifa23xq2ehfxoh9vink6vuxyns1y35vkc.png"
              alt="Avatar"
              className="w-8 h-8 rounded-full"
            />
            <span>John Doe</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white p-4 rounded-lg shadow-md w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        {/* Avatar Section */}
        <div className="col-span-1 flex flex-col items-center border-r">
          <h3 className="text-lg font-medium mb-2">Avatar</h3>
          <div
            className="w-16 h-16 border flex items-center justify-center text-lg font-semibold"
            style={{
              backgroundColor: bgStyle,
              fontFamily: textStyle,
              color: textStyle === "Arial" ? "black" : "white",
            }}
          >
            J
          </div>
          <h4 className="mt-4 text-sm">Text Style</h4>
          <div className="flex space-x-2 mt-2">
            {["Arial", "Courier New", "Georgia", "Times New Roman"].map((style) => (
              <button
                key={style}
                className={`px-2 py-1 border rounded text-xs ${
                  textStyle === style ? "border-blue-500 bg-blue-100" : ""
                }`}
                onClick={() => setTextStyle(style)}
              >
                {style}
              </button>
            ))}
          </div>
          <h4 className="mt-4 text-sm">Background Style</h4>
          <div className="flex space-x-2 mt-2">
            {["blue", "green", "red", "yellow"].map((color) => (
              <button
                key={color}
                className={`w-6 h-6 rounded-full border ${
                  bgStyle === color ? "border-blue-500" : ""
                }`}
                style={{ backgroundColor: color }}
                onClick={() => setBgStyle(color)}
              />
            ))}
          </div>
          <button className="mt-4 px-3 py-1 border rounded text-sm">Upload Custom Avatar</button>
        </div>

        {/* Preferences Section */}
        <div className="col-span-2">
          {/* Personal Information Section */}
          <h3 className="text-lg font-medium mb-4">Personal Information</h3>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <TextField label="First Name" defaultValue="John" variant="outlined" fullWidth />
            <TextField label="Last Name" defaultValue="Doe" variant="outlined" fullWidth />
          </div>
          <TextField
            label="Display Name"
            defaultValue="John"
            variant="outlined"
            fullWidth
            className="mb-4"
          />
          <TextField
            label="Email"
            defaultValue="john_doe@example.com"
            variant="outlined"
            fullWidth
            className="mb-4"
          />

          {/* Learning Preferences Section */}
          <h3 className="text-lg font-medium mt-6">Learning Preferences</h3>
          <Select
            value={contextFormat}
            onChange={(e) => setContextFormat(e.target.value)}
            fullWidth
            className="mt-2"
          >
            <MenuItem value="Mixed (Text & Visual)">Mixed (Text & Visual)</MenuItem>
            <MenuItem value="Text Only">Text Only</MenuItem>
            <MenuItem value="Visual Only">Visual Only</MenuItem>
          </Select>
          <Select
            value={learningPace}
            onChange={(e) => setLearningPace(e.target.value)}
            fullWidth
            className="mt-4"
          >
            <MenuItem value="Standard">Standard</MenuItem>
            <MenuItem value="Fast">Fast</MenuItem>
            <MenuItem value="Slow">Slow</MenuItem>
          </Select>

          {/* Accessibility Settings Section */}
          <h3 className="text-lg font-medium mt-6">Accessibility Settings</h3>
          {Object.keys(accessibility).map((key) => (
            <div key={key} className="flex items-center justify-between mt-2">
              <span className="capitalize">{key.replace(/([A-Z])/g, " $1")}</span>
              <Switch
                checked={accessibility[key]}
                onChange={() =>
                  setAccessibility({ ...accessibility, [key]: !accessibility[key] })
                }
              />
            </div>
          ))}

          {/* Save Button */}
          <Button
            variant="contained"
            color="primary"
            fullWidth
            className="mt-6"
            onClick={handleSave}
          >
            Save Profile
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProfileManagement;
