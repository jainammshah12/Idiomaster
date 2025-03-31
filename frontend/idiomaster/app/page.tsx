import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import Navbar from "@/components/layout/navbar"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Learn at your own pace
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Access high-quality courses from expert educators. Start your learning journey today.
                </p>
              </div>
              <div className="space-x-4">
                <Link href="/courses">
                  <Button className="px-8">
                    Browse Courses <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/register">
                  <Button variant="outline" className="px-8">
                    Sign Up
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="mx-auto grid max-w-5xl items-center gap-6 lg:grid-cols-2 lg:gap-12">
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
                {[1, 2, 3].map((i) => (
                  <div key={i} className="rounded-xl border bg-card text-card-foreground shadow">
                    <div className="p-6">
                      <h3 className="text-xl font-bold">Course Title {i}</h3>
                      <p className="text-sm text-muted-foreground">Learn the fundamentals and advanced techniques.</p>
                      <Link href={`/courses/${i}`} className="mt-4 inline-block text-sm font-medium text-primary">
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
        <div className="container flex flex-col items-center justify-center gap-4 md:flex-row md:gap-8">
          <p className="text-center text-sm text-muted-foreground">© 2024 EduLearn. All rights reserved.</p>
          <nav className="flex gap-4 sm:gap-6">
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
  )
}

