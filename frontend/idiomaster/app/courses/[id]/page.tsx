"use client"

import { useState } from "react"
import Link from "next/link"
import { useParams, useRouter } from "next/navigation"
import { Clock, FileText, Globe, GraduationCap, PlayCircle, Star } from "lucide-react"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Navbar from "@/components/layout/navbar"
import { coursesData } from "@/app/data/courses"

export default function CourseDetailPage() {
  const params = useParams()
  const router = useRouter()
  const courseId = Number(params.id)
  const [enrolling, setEnrolling] = useState(false)

  const course = coursesData.find((c) => c.id === courseId)

  if (!course) {
    return (
      <div className="container flex h-[70vh] flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">Course not found</h1>
        <p className="mt-2 text-muted-foreground">The course you're looking for doesn't exist.</p>
        <Button asChild className="mt-4">
          <Link href="/courses">Back to Courses</Link>
        </Button>
      </div>
    )
  }

  const handleEnroll = () => {
    setEnrolling(true)
    // Simulate enrollment process
    setTimeout(() => {
      setEnrolling(false)
      router.push(`/courses/${courseId}/learn`)
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="bg-muted py-12">
        <div className="container grid gap-8 md:grid-cols-2">
          <div className="space-y-4 ml-3 mr-2">
            <div className="flex items-center space-x-2 ">
              <Link href="/courses" className="text-sm font-medium text-muted-foreground hover:underline">
                Courses
              </Link>
              <span className="text-sm text-muted-foreground">/</span>
              <span className="text-sm font-medium text-muted-foreground">{course.category}</span>
            </div>
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl">{course.title}</h1>
            <p className="text-lg text-muted-foreground">{course.description}</p>
            <div className="flex flex-wrap items-center gap-4 text-sm">
              <div className="flex items-center">
                <Star className="mr-1 h-4 w-4 fill-primary text-primary" />
                <span className="font-medium">{course.rating}</span>
                <span className="ml-1 text-muted-foreground">({course.students.toLocaleString()} students)</span>
              </div>
              <div className="flex items-center">
                <GraduationCap className="mr-1 h-4 w-4 text-muted-foreground" />
                <span>{course.level}</span>
              </div>
              <div className="flex items-center">
                <Clock className="mr-1 h-4 w-4 text-muted-foreground" />
                <span>{course.duration}</span>
              </div>
              <div className="flex items-center">
                <Globe className="mr-1 h-4 w-4 text-muted-foreground" />
                <span>English</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/020/765/399/small_2x/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg"
                alt={course.instructor}
                className="h-10 w-10 rounded-full"
              />
              <div>
                <p className="text-sm font-medium">{course.instructor}</p>
                <p className="text-xs text-muted-foreground">{course.instructorTitle}</p>
              </div>
            </div>
          </div>
          <div>
            <Card className="overflow-hidden">
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src={course.image || "/placeholder.svg"}
                  alt={course.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>${course.price}</span>
                </CardTitle>
                <CardDescription>Full course access with certificate</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full" size="lg" onClick={handleEnroll} disabled={enrolling}>
                  {enrolling ? "Processing..." : "Enroll Now"}
                </Button>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Total lessons</span>
                    <span className="font-medium">
                      {course.syllabus.reduce((acc, section) => acc + section.lessons.length, 0)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Duration</span>
                    <span className="font-medium">{course.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Level</span>
                    <span className="font-medium">{course.level}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <div className="container py-12">
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="mb-8 w-full justify-start">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
            <TabsTrigger value="instructor">Instructor</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="space-y-8 ml-4">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">What You Will Learn</h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {course.whatYouWillLearn.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary">
                      <svg
                        className="h-3 w-3 text-primary-foreground"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                      </svg>
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Requirements</h2>
              <ul className="list-inside list-disc space-y-2">
                {course.requirements.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </TabsContent>
          <TabsContent value="curriculum" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Course Content</h2>
              <div className="text-sm text-muted-foreground">
                {course.syllabus.reduce((acc, section) => acc + section.lessons.length, 0)} lessons • {course.duration}{" "}
                total
              </div>
            </div>
            <Accordion type="single" collapsible className="w-full">
              {course.syllabus.map((section, index) => (
                <AccordionItem key={index} value={`section-${index}`}>
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex flex-1 items-center justify-between pr-4 text-left">
                      <span>{section.title}</span>
                      <span className="text-sm text-muted-foreground">{section.lessons.length} lessons</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2 pt-2">
                      {section.lessons.map((lesson, lessonIndex) => (
                        <div
                          key={lessonIndex}
                          className="flex items-center justify-between rounded-md p-2 hover:bg-muted"
                        >
                          <div className="flex items-center space-x-2">
                            {lesson.type === "video" ? (
                              <PlayCircle className="h-4 w-4 text-muted-foreground" />
                            ) : (
                              <FileText className="h-4 w-4 text-muted-foreground" />
                            )}
                            <span>{lesson.title}</span>
                          </div>
                          <span className="text-sm text-muted-foreground">{lesson.duration}</span>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </TabsContent>
          <TabsContent value="instructor" className="space-y-6">
            <div className="flex flex-col items-start space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/020/765/399/small_2x/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg"
                alt={course.instructor}
                className="h-24 w-24 rounded-full object-cover sm:h-32 sm:w-32"
              />
              <div className="space-y-2">
                <h2 className="text-2xl font-bold">{course.instructor}</h2>
                <p className="text-muted-foreground">{course.instructorTitle}</p>
                <div className="flex items-center space-x-2">
                  <Star className="h-4 w-4 fill-primary text-primary" />
                  <span className="text-sm">
                    {course.rating} Instructor Rating • {course.students.toLocaleString()} Students
                  </span>
                </div>
                <p className="max-w-2xl">{course.instructorBio}</p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

