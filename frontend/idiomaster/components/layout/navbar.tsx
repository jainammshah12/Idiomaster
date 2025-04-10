"use client";

import React from "react";
import Link from "next/link";
import { useUser } from "@/context/UserContext";

export default function Navbar() {
  const { loggedIn } = useUser();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-gray-300 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex h-14 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 font-bold">
          <span>IdioMaster</span>
        </Link>
        <nav className="flex items-center space-x-4">
          {loggedIn ? (
            <>
              <Link href="/courses" className="text-sm font-medium">
                Courses
              </Link>
              <Link href="/profile/settings" className="text-sm font-medium">
                Settings
              </Link>
              <Link href="/profile/help" className="text-sm font-medium">
                Help
              </Link>
              <Link href="/profile" className="flex items-center space-x-2">
                <img
                  src={"https://vanwinefest.ca/wp-content/uploads/bfi_thumb/profile-default-male-nyg4vc4i3m1d5pote7rfsv4o4c7p5ka5an0pselxcc-nyhjt6b1oifa23xq2ehfxoh9vink6vuxyns1y35vkc.png"}
                  alt="Avatar"
                  className="w-8 h-8 rounded-full"
                />
                <span className="text-sm font-medium">{"John Doe"}</span>
              </Link>
            </>
          ) : (
            <>
              <Link href="/login" className="text-sm font-medium">
                Login
              </Link>
              <Link href="/register" className="text-sm font-medium">
                Register
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}