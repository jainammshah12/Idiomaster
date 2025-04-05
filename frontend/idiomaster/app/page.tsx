"use client";


import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { useUser } from "@/context/UserContext";

import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/navbar";

export default function Home() {
  const { loggedIn } = useUser();
  const courseDescriptions = [
    {
      id:1,
      title: "Introduction to Web Development" ,
      description: "Learn the fundamentals of web development including HTML, CSS, and JavaScript"
    }, 
    {
      id:2,
      title: "Advanced React Techniques",
      description: "Master advanced React concepts including hooks, context API, and performance optimization."
    },
    {
      id:3,
      title: "Data Science Fundamentals",
      description: "An introduction to data science concepts, tools, and methodologies."
    }
  ]
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Learn at your own pace
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Access high-quality courses from expert educators. Start your learning journey today.
                </p>
              </div>
              <div className="flex items-center justify-center space-x-4">
                <Link href="/courses">
                  <Button className="px-8">
                    Browse Courses <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                { loggedIn ? 
                <Link href="/profile">
                  <Button variant="outline" className="px-8">
                    Access Profile
                  </Button>
                </Link>
                :
                <Link href="/login">
                  <Button variant="outline" className="px-8">
                    Sign In
                  </Button>
                </Link>
                }
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto grid max-w-5xl items-center justify-center gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Featured Courses
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Expand your knowledge</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our platform offers a wide range of courses in various subjects. From programming to design, we have
                  something for everyone.
                </p>
              </div>
              <div className="grid gap-6">
                {courseDescriptions.map((i) => (
                  <div key={i.id} className="rounded-xl border bg-card text-card-foreground shadow">
                    <div className="p-6">
                      <h3 className="text-xl font-bold"> {i.title}</h3>
                      <p className="text-sm text-muted-foreground">{i.description}</p>
                      <Link href={`/courses/${i.id}`} className="mt-4 inline-block text-sm font-medium text-primary">
                        View Course →
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6">
        <div className="container mx-auto flex flex-col items-center justify-center gap-4 px-4 md:flex-row md:gap-8">
          <p className="text-center text-sm text-muted-foreground">© 2024 EduLearn. All rights reserved.</p>
          <nav className="flex items-center justify-center gap-4 sm:gap-6">
            <Link href="#" className="text-sm font-medium">
              Terms of Service
            </Link>
            <Link href="#" className="text-sm font-medium">
              Privacy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}

