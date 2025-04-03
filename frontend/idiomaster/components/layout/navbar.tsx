"use client";

import React from "react";
import Link from "next/link";
import { useUser } from "@/context/UserContext";

export default function Navbar() {
  const { loggedIn } = useUser();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <Link href="/" className="flex items-center space-x-2 ml-5 mr-5 font-bold">
          <span>Idiomaster</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
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
