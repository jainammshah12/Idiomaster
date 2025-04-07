"use client";

import React from "react";
import Link from "next/link";
import { useUser } from "@/context/UserContext";

export default function Navbar() {
  const { loggedIn } = useUser();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex h-14 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 font-bold">
          <span>Idiomaster</span>
        </Link>
        <nav className="flex gap-4 sm:gap-6">
          {loggedIn ? (
            <>
              <Link href="/profile" className="text-sm font-medium">
                Profile
              </Link>
              <Link href="/profile/settings" className="text-sm font-medium">
                Settings
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
