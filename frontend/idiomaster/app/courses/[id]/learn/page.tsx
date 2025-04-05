"use client"

import { useState } from "react"
import Link from "next/link"
import { useParams } from "next/navigation"
import { ChevronLeft, ChevronRight, FileText, Home, List, PlayCircle, Volume2, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { coursesData } from "@/app/data/courses"

// Add these type definitions at the top of the file, after imports
interface VideoContent {
  type: "video";
  content: {
    videoUrl: string;
    transcript: string;
    description: string;
  };
}

interface ExerciseContent {
  type: "exercise";
  content: {
    instructions: string;
    resources: string[];
    submissionType: string;
  };
}

type Lesson = {
  id: number;
  title: string;
  duration: string;
} & (VideoContent | ExerciseContent);

// Add this helper function after the type definitions
function isExerciseLesson(lesson: Lesson): lesson is ExerciseContent & { id: number; title: string; duration: string } {
  return lesson.type === "exercise";
}

export default function CourseLearnPage() {
  const params = useParams()
  const courseId = Number(params.id)
  const [currentLessonId, setCurrentLessonId] = useState(1)
  const [sidebarOpen, setSidebarOpen] = useState(false)

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

  // Flatten all lessons for easier navigation
  const allLessons = course.syllabus.flatMap((section) => section.lessons) as Lesson[]
  const currentLesson = allLessons.find((lesson) => lesson.id === currentLessonId) as Lesson
  const currentLessonIndex = allLessons.findIndex((lesson) => lesson.id === currentLessonId)
  const nextLesson = allLessons[currentLessonIndex + 1]
  const prevLesson = allLessons[currentLessonIndex - 1]

  // Calculate progress
  const progress = ((currentLessonIndex + 1) / allLessons.length) * 100

  if (!currentLesson) {
    return (
      <div className="container flex h-[70vh] flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">Lesson not found</h1>
        <p className="mt-2 text-muted-foreground">The lesson you're looking for doesn't exist.</p>
        <Button asChild className="mt-4">
          <Link href={`/courses/${courseId}`}>Back to Course</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 flex h-14 items-center border-b bg-background px-4 lg:px-6">
        <div className="flex items-center gap-2">
          <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="lg:hidden">
                <List className="h-5 w-5" />
                <span className="sr-only">Toggle course navigation</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] p-0 sm:max-w-xs">
              <div className="flex h-14 items-center border-b px-4">
                <Link href="/courses" className="flex items-center gap-2 font-semibold">
                  <Home className="h-5 w-5" />
                  <span>Courses</span>
                </Link>
                <Button variant="ghost" size="icon" className="ml-auto" onClick={() => setSidebarOpen(false)}>
                  <X className="h-5 w-5" />
                  <span className="sr-only">Close</span>
                </Button>
              </div>
              <div className="p-4">
                <h2 className="mb-2 text-lg font-semibold">{course.title}</h2>
                <Progress value={progress} className="mb-4 h-2" />
                <div className="space-y-4">
                  {course.syllabus.map((section, sectionIndex) => (
                    <div key={sectionIndex} className="space-y-2">
                      <h3 className="font-medium">{section.title}</h3>
                      <div className="ml-4 space-y-1">
                        {section.lessons.map((lesson) => (
                          <button
                            key={lesson.id}
                            className={`flex w-full items-center gap-2 rounded-md px-2 py-1 text-left text-sm ${
                              lesson.id === currentLessonId ? "bg-primary text-primary-foreground" : "hover:bg-muted"
                            }`}
                            onClick={() => {
                              setCurrentLessonId(lesson.id)
                              setSidebarOpen(false)
                            }}
                          >
                            {lesson.type === "video" ? (
                              <PlayCircle className="h-4 w-4" />
                            ) : (
                              <FileText className="h-4 w-4" />
                            )}
                            <span>{lesson.title}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </SheetContent>
          </Sheet>
          <Link href="/courses" className="flex items-center gap-2 font-semibold">
            <Home className="h-5 w-5" />
            <span className="hidden md:inline-block">Courses</span>
          </Link>
        </div>
        <div className="ml-auto flex items-center gap-4">
          <div className="hidden md:block">
            <Progress value={progress} className="h-2 w-40" />
          </div>
          <span className="text-sm text-muted-foreground">
            {currentLessonIndex + 1} / {allLessons.length}
          </span>
        </div>
      </header>
      <div className="flex flex-1">
        <aside className="hidden w-64 border-r lg:block">
          <div className="p-4">
            <h2 className="mb-2 text-lg font-semibold">{course.title}</h2>
            <Progress value={progress} className="mb-4 h-2" />
            <div className="space-y-4">
              {course.syllabus.map((section, sectionIndex) => (
                <div key={sectionIndex} className="space-y-2">
                  <h3 className="font-medium">{section.title}</h3>
                  <div className="ml-4 space-y-1">
                    {section.lessons.map((lesson) => (
                      <button
                        key={lesson.id}
                        className={`flex w-full items-center gap-2 rounded-md px-2 py-1 text-left text-sm ${
                          lesson.id === currentLessonId ? "bg-primary text-primary-foreground" : "hover:bg-muted"
                        }`}
                        onClick={() => setCurrentLessonId(lesson.id)}
                      >
                        {lesson.type === "video" ? (
                          <PlayCircle className="h-4 w-4" />
                        ) : (
                          <FileText className="h-4 w-4" />
                        )}
                        <span>{lesson.title}</span>
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>
        <main className="flex-1">
          <div className="container ml-6 max-w-4xl py-6">
            <div className="mb-6">
              <h1 className="text-2xl font-bold">{currentLesson.title}</h1>
              <p className="text-muted-foreground">
                {currentLesson.type === "video" ? "Video" : "Exercise"} • {currentLesson.duration}
              </p>
            </div>

            {currentLesson.type === "video" ? (
              <div className="space-y-6">
                <div className="overflow-hidden rounded-lg bg-black aspect-video">
                  <div className="flex h-full items-center justify-center">
                    <PlayCircle className="h-16 w-16 text-white opacity-70" />
                  </div>
                </div>

                <Tabs defaultValue="content">
                  <TabsList>
                    <TabsTrigger value="content">Content</TabsTrigger>
                    <TabsTrigger value="transcript">Transcript</TabsTrigger>
                  </TabsList>
                  <TabsContent value="content" className="mt-4 space-y-4">
                    <p>{currentLesson.content.description}</p>
                  </TabsContent>
                  <TabsContent value="transcript" className="mt-4">
                    <div className="rounded-lg border p-4">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-medium">Transcript</h3>
                        <Button variant="outline" size="sm">
                          <Volume2 className="mr-2 h-4 w-4" />
                          Text-to-Speech
                        </Button>
                      </div>
                      <p className="text-sm">{currentLesson.content.transcript}</p>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            ) : (
              <div className="rounded-lg border p-6">
                <h2 className="mb-4 text-xl font-semibold">Exercise Instructions</h2>
                <p className="mb-4">{currentLesson.content.instructions}</p>
                {isExerciseLesson(currentLesson) && (
                  <>
                    <h3 className="mb-2 font-medium">Resources</h3>
                    <ul className="mb-6 list-inside list-disc space-y-1">
                      {currentLesson.content.resources.map((resource, index) => (
                        <li key={index}>{resource}</li>
                      ))}
                    </ul>
                  </>
                )}
                <div className="flex justify-end">
                  <Button>Submit Exercise</Button>
                </div>
              </div>
            )}

            <div className="mt-8 flex items-center justify-between">
              <Button
                variant="outline"
                disabled={!prevLesson}
                onClick={() => prevLesson && setCurrentLessonId(prevLesson.id)}
              >
                <ChevronLeft className="mr-2 h-4 w-4" />
                Previous
              </Button>
              <Button disabled={!nextLesson} onClick={() => nextLesson && setCurrentLessonId(nextLesson.id)}>
                Next
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

