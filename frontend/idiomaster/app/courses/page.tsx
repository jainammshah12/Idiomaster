"use client"

import { useState } from "react"
import Link from "next/link"
import { BookOpen, Filter, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Slider } from "@/components/ui/slider"
import Navbar from "@/components/layout/navbar"
import LoginPage from "@/app/login/page";
import { courses } from "@/app/data/course-content";

// Sample course data


export default function CoursesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedLevel, setSelectedLevel] = useState("all")
  const [loggedIn, setLoggedIn] = useState(false); 

  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || course.category === selectedCategory
    const matchesLevel = selectedLevel === "all" || course.level === selectedLevel

    return matchesSearch && matchesCategory && matchesLevel
  })

  return (
    <div className="min-h-screen bg-background ml-5 mr-5 ">
      <Navbar />
      <main className="container py-8">
        <div className="flex flex-col space-y-6">
          <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Course Catalog</h1>
              <p className="text-muted-foreground">Browse our collection of courses to start your learning journey</p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="relative w-full md:w-64">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search courses..."
                  className="pl-8"
                  value={searchTerm}
                  onChange={(e: any) => setSearchTerm(e.target.value)}
                />
              </div>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Filter className="h-4 w-4" />
                    <span className="sr-only">Filter courses</span>
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Filter Courses</SheetTitle>
                    <SheetDescription>Narrow down courses based on your preferences</SheetDescription>
                  </SheetHeader>
                  <div className="grid gap-4 py-4">
                    <div className="space-y-2">
                      <h3 className="text-sm font-medium">Category</h3>
                      <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Categories</SelectItem>
                          <SelectItem value="Programming">Programming</SelectItem>
                          <SelectItem value="Data Science">Data Science</SelectItem>
                          <SelectItem value="Design">Design</SelectItem>
                          <SelectItem value="Marketing">Marketing</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-sm font-medium">Level</h3>
                      <Select value={selectedLevel} onValueChange={setSelectedLevel}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Levels</SelectItem>
                          <SelectItem value="Beginner">Beginner</SelectItem>
                          <SelectItem value="Intermediate">Intermediate</SelectItem>
                          <SelectItem value="Advanced">Advanced</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-sm font-medium">Duration</h3>
                      <Slider defaultValue={[12]} max={20} step={1} />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>Any</span>
                        <span>Up to 20 weeks</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end space-x-2">
                    <Button
                      variant="outline"
                      onClick={() => {
                        setSelectedCategory("all")
                        setSelectedLevel("all")
                      }}
                    >
                      Reset
                    </Button>
                    <Button>Apply Filters</Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>

          {filteredCourses.length === 0 ? (
            <div className="flex h-[400px] w-full flex-col items-center justify-center rounded-md border border-dashed p-8 text-center">
              <h2 className="text-2xl font-semibold">No courses found</h2>
              <p className="mt-2 text-muted-foreground">Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredCourses.map((course) => (
                <Link key={course.id} href={`/courses/${course.id}`}>
                  <Card className="h-full overflow-hidden transition-all hover:shadow-md">
                    <div className="aspect-video w-full overflow-hidden">
                      <img
                        src={course.image || "/placeholder.svg"}
                        alt={course.title}
                        className="h-full w-full object-cover transition-all hover:scale-105"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-muted-foreground">{course.category}</span>
                        <span className="flex items-center text-sm font-medium text-muted-foreground">
                          <BookOpen className="mr-1 h-4 w-4" />
                          {course.duration}
                        </span>
                      </div>
                      <CardTitle>{course.title}</CardTitle>
                      <CardDescription className="line-clamp-2">{course.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">{course.instructor}</span>
                        <span className="text-sm font-medium">Level: {course.level}</span>
                      </div>
                    </CardContent>
                    <CardFooter className="border-t bg-muted/50 px-6 py-3">
                      <div className="flex w-full items-center justify-between">
                        <div className="flex items-center">
                          <span className="font-bold">{course.rating}</span>
                          <div className="ml-1 flex">
                            {Array(5)
                              .fill(null)
                              .map((_, i) => (
                                <svg
                                  key={i}
                                  className={`h-4 w-4 ${i < Math.floor(course.rating) ? "fill-primary" : "fill-muted"}`}
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                >
                                </svg>
                              ))}
                          </div>
                        </div>
                        <span className="text-sm text-muted-foreground">
                          {course.students.toLocaleString()} students
                        </span>
                      </div>
                    </CardFooter>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  )
}

