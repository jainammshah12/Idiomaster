/** ACTUAL PROFILE PAGE */

"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation"; // Use next/navigation instead of next/router

const Profile = () => {
  const router = useRouter(); // Initialize router

  const user = {
    name: "John Doe",
    avatar: "https://vanwinefest.ca/wp-content/uploads/bfi_thumb/profile-default-male-nyg4vc4i3m1d5pote7rfsv4o4c7p5ka5an0pselxcc-nyhjt6b1oifa23xq2ehfxoh9vink6vuxyns1y35vkc.png",
    coursesInProgress: 4,
    pointsEarned: 2450,
    highestStreak: 7,
    learningStreak: 7,
    level: 5,
    pointsToNextLevel: 3000,
  };

  const courses = [
    { name: "Introduction to Web Development", progress: 15, modulesCompleted: "1/2" },
    { name: "Advanced React Techniques", progress: 45, modulesCompleted: "2/5" },
    { name: "Data Science Fundamentals", progress: 30, modulesCompleted: "1/3" },
    { name: "UX/UI Design Principles", progress: 10, modulesCompleted: "1/10" },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-100 min-h-screen">
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
          <span>Help</span>
          <div className="flex items-center space-x-2">
            <img src={user.avatar} alt="Avatar" className="w-8 h-8 rounded-full" />
            <span>{user.name}</span>
          </div>
        </div>
      </div>

      {/* Profile Info */}
      <div className="mt-6 text-center">
        <img src={user.avatar} alt="Avatar" className="w-16 h-16 mx-auto rounded-full" />
        <h2 className="text-lg font-semibold">Hello, {user.name}</h2>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mt-4">
        <div className="p-4 bg-white rounded shadow">Courses in Progress: {user.coursesInProgress}</div>
        <div className="p-4 bg-white rounded shadow">Points Earned: {user.pointsEarned}</div>
        <div className="p-4 bg-white rounded shadow">
          <h3 className="text-md font-semibold">Weekly Streak</h3>
          <div className="grid grid-cols-7 gap-2 mt-2">
            {["M", "T", "W", "T", "F", "S", "S"].map((day, index) => (
              <div
                key={index}
                className={`w-8 h-8 flex items-center justify-center mx-auto rounded-full border-2 ${
                  index < user.highestStreak ? "bg-green-500 border-green-700" : "bg-gray-300 border-gray-500"
                }`}
              >
                <span className="text-black font-bold">{day}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Courses */}
      <div className="mt-6">
        <h2 className="text-lg font-semibold">My Courses</h2>
        <div className="grid grid-cols-2 gap-4 mt-2">
          {courses.map((course, index) => (
            <Link key={index} href={`/courses/${index + 1}/learn`} passHref>
              <div className="p-4 bg-gray-700 text-white rounded shadow cursor-pointer hover:bg-gray-600">
                <h3 className="text-md font-semibold">{course.name}</h3>
                <p className="text-sm">{course.modulesCompleted} modules</p>
                <div className="w-full bg-gray-500 rounded h-2 mt-1">
                  <div
                    className="bg-green-400 h-2 rounded"
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Other Sections */}
      <div className="grid grid-cols-3 gap-4 mt-6">
        <div className="p-4 bg-white rounded shadow">
          <h3>Learning Streak</h3>
          <div className="grid grid-cols-7 gap-2 mt-2">
            {Array(30)
              .fill(0)
              .map((_, index) => (
                <div
                  key={index}
                  className={`w-8 h-8 flex items-center justify-center mx-auto rounded-full border-2 ${
                    index >= 23 ? "bg-green-500 border-green-700" : "bg-gray-300 border-gray-500"
                  }`}
                >
                  <span className="text-black font-bold">{index + 1}</span>
                </div>
              ))}
          </div>
        </div>
        <div className="p-4 bg-white rounded shadow">
          <h3>Badges Earned</h3>
          <div className="grid grid-cols-3 gap-2 mt-2">
            {Array(6)
              .fill(0)
              .map((_, i) => (
                <div key={i} className="w-6 h-6 bg-gray-400 rounded-full"></div>
              ))}
          </div>
        </div>
        <div className="p-4 bg-white rounded shadow">
          <h3>Notifications</h3>
          <p>Quiz Reminder</p>
        </div>
      </div>

      {/* Progress Summary */}
      <div className="mt-6 p-4 bg-white rounded shadow">
        <h3 className="text-center">Progress Summary</h3>
        <div className="text-center mt-2 text-xl font-bold">Lvl {user.level}</div>
        <div className="w-full bg-gray-300 rounded h-2 mt-2">
          <div
            className="bg-green-500 h-2 rounded"
            style={{ width: `${(user.pointsEarned / user.pointsToNextLevel) * 100}%` }}
          ></div>
        </div>
        <p className="text-center text-sm mt-1">
          {user.pointsEarned} / {user.pointsToNextLevel} points to Level {user.level + 1}
        </p>
      </div>
    </div>
  );
};

export default Profile;