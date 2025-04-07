"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react";
import Navbar from "@/components/layout/navbar";

const Profile = () => {
  const router = useRouter();

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
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="max-w-4xl mx-auto p-6 bg-background min-h-screen">
            {/* Profile Info */}
            <div className="mt-6 text-center">
              <div className="flex flex-col items-center">
                <div className="relative inline-block">
                  <img 
                    src={user.avatar} 
                    alt="Avatar" 
                    className="w-32 h-32 rounded-full object-cover border-2 border-border" 
                  />
                  <Link 
                    href="/profile/profilemanagement" 
                    className="absolute bottom-0 right-0"
                  >
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="w-10 h-10 rounded-full  border-2 absolute -bottom-1 -right-1 z-10 
                        border-background hover:border-primary"
                    >
                      <Pencil className="w-3 h-3" />
                    </Button>
                  </Link>
                </div>
                <h2 className="text-lg font-semibold mt-2">Hello, {user.name}</h2>
              </div>
            </div>

            {/* Rest of the page remains the same as previous version */}
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-4">
              <div className="p-4 bg-card rounded shadow">
                Courses in Progress: {user.coursesInProgress}
              </div>
              <div className="p-4 bg-card rounded shadow">
                Points Earned: {user.pointsEarned}
              </div>
              <div className="p-4 bg-card rounded shadow">
                <h3 className="text-md font-semibold">Weekly Streak</h3>
                <div className="grid grid-cols-7 gap-2 mt-2">
                  {["M", "T", "W", "T", "F", "S", "S"].map((day, index) => (
                    <div
                      key={index}
                      className={`w-8 h-8 flex items-center justify-center mx-auto rounded-full border-2 ${
                        index < user.highestStreak 
                          ? "bg-primary text-primary-foreground border-primary" 
                          : "bg-muted text-muted-foreground border-muted"
                      }`}
                    >
                      <span className="font-bold">{day}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Rest of the page remains the same */}
            {/* Courses */}
            <div className="mt-6">
              <h2 className="text-lg font-semibold">My Courses</h2>
              <div className="grid grid-cols-2 gap-4 mt-2">
                {courses.map((course, index) => (
                  <Link key={index} href={`/courses/${index + 1}/learn`} passHref>
                    <div className="p-4 bg-card text-card-foreground rounded shadow cursor-pointer hover:bg-accent transition-colors">
                      <h3 className="text-md font-semibold">{course.name}</h3>
                      <p className="text-sm text-muted-foreground">{course.modulesCompleted} modules</p>
                      <div className="w-full bg-muted rounded h-2 mt-1">
                        <div
                          className="bg-primary h-2 rounded"
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
              <div className="p-4 bg-card rounded shadow">
                <h3>Learning Streak</h3>
                <div className="grid grid-cols-7 gap-2 mt-2">
                  {Array(30)
                    .fill(0)
                    .map((_, index) => (
                      <div
                        key={index}
                        className={`w-8 h-8 flex items-center justify-center mx-auto rounded-full border-2 ${
                          index >= 23 
                            ? "bg-primary text-primary-foreground border-primary" 
                            : "bg-muted text-muted-foreground border-muted"
                        }`}
                      >
                        <span className="font-bold">{index + 1}</span>
                      </div>
                    ))}
                </div>
              </div>
              <div className="p-4 bg-card rounded shadow">
                <h3>Badges Earned</h3>
                <div className="grid grid-cols-3 gap-4 mt-4">
                  {[
                    { name: "Intermediate", icon: "🎖️" },
                    { name: "Advanced", icon: "🥇" },
                    { name: "Expert", icon: "🏆" },
                    { name: "Streak Master", icon: "🔥" },
                    { name: "Quiz Champion", icon: "📚" },
                    { name: "Problem Solver", icon: "🧠" },
                  ].map((badge, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center justify-center p-2 bg-muted rounded"
                    >
                      <div className="text-2xl">{badge.icon}</div>
                      <p className="text-xs font-semibold mt-1">{badge.name}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-4 bg-card rounded shadow">
                <h3>Notifications</h3>
                <div className="space-y-2 mt-2">
                  {[
                    { message: "You completed a new course!", read: false },
                    { message: "Your weekly streak is on fire! 🔥", read: true },
                    { message: "New badge earned: Quiz Champion 📚", read: false },
                    { message: "Reminder: Complete your daily quiz!", read: true },
                    { message: "You leveled up to Level 6! 🎉", read: false },
                  ].map((notification, index) => (
                    <div
                      key={index}
                      className={`p-2 rounded ${
                        notification.read 
                          ? "bg-muted text-muted-foreground" 
                          : "bg-secondary text-secondary-foreground"
                      }`}
                    >
                      {notification.message}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Progress Summary */}
            <div className="mt-6 p-4 bg-card rounded shadow">
              <h3 className="text-center">Progress Summary</h3>
              <div className="text-center mt-2 text-xl font-bold">
                Lvl {user.level}
              </div>
              <div className="w-full bg-muted rounded h-2 mt-2">
                <div
                  className="bg-primary h-2 rounded"
                  style={{ 
                    width: `${(user.pointsEarned / user.pointsToNextLevel) * 100}%` 
                  }}
                ></div>
              </div>
              <p className="text-center text-sm mt-1">
                {user.pointsEarned} / {user.pointsToNextLevel} points to Level {user.level + 1}
              </p>
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
  );
};

export default Profile;