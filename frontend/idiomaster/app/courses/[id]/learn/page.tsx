"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { useParams, useSearchParams } from "next/navigation"
import { ChevronLeft, ChevronRight, FileText, Home, List, PlayCircle, Volume2, PauseCircle, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { coursesData } from "@/app/data/courses"

// Type definitions for lessons
interface VideoContent {
  type: "video";
  content: {
    videoId?: string; // Add this line
    videoUrl?: string;
    transcript?: string;
    description?: string;
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

// Helper function to check if lesson is exercise type
function isExerciseLesson(lesson: Lesson): lesson is ExerciseContent & { id: number; title: string; duration: string } {
  return lesson.type === "exercise";
}

// Helper function to ensure lesson content is properly structured
function normalizeLesson(lesson: any): Lesson {
  // Ensure content object exists with proper structure
  if (lesson.type === "video") {
    return {
      id: lesson.id,
      title: lesson.title,
      duration: lesson.duration,
      type: "video",
      content: {
        videoId: lesson.content?.videoId || "",
        videoUrl: lesson.content?.videoUrl || "",
        transcript: lesson.content?.transcript || "Transcript not available.",
        description: lesson.content?.description || "No description available."
      }
    };
  } else {
    return {
      id: lesson.id,
      title: lesson.title,
      duration: lesson.duration,
      type: "exercise",
      content: {
        instructions: lesson.content?.instructions || "Complete the exercise as instructed.",
        resources: Array.isArray(lesson.content?.resources) ? lesson.content.resources : [],
        submissionType: lesson.content?.submissionType || "Submit your work"
      }
    };
  }
}

export default function CourseLearnPage() {
  const params = useParams()
  const searchParams = useSearchParams()
  const courseId = Number(params.id)
  
  // Get lesson ID from URL query parameter, defaulting to null if not provided
  const lessonParam = searchParams.get('lesson')
  const initialLessonId = lessonParam ? Number(lessonParam) : null
  
  const [currentLessonId, setCurrentLessonId] = useState<number | null>(null)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [isSpeaking, setIsSpeaking] = useState(false)
  const speechSynthRef = useRef<SpeechSynthesisUtterance | null>(null)

  const course = coursesData.find((c) => c.id === courseId)
  
  // Initialize lesson data after course is loaded
  useEffect(() => {
    if (course) {
      const allLessons = course.syllabus.flatMap((section) => 
        section.lessons.map(lesson => normalizeLesson(lesson))
      )
      
      // If a specific lesson was requested via URL and it exists, use that
      if (initialLessonId && allLessons.some(lesson => lesson.id === initialLessonId)) {
        setCurrentLessonId(initialLessonId)
      } else {
        // Otherwise default to the first lesson
        setCurrentLessonId(allLessons[0]?.id || null)
      }
    }
  }, [course, initialLessonId])
  
  // Clean up speech synthesis when component unmounts or lesson changes
  useEffect(() => {
    return () => {
      if (speechSynthRef.current) {
        window.speechSynthesis.cancel()
      }
    }
  }, [currentLessonId])

  // Function to handle text-to-speech
  const handleTextToSpeech = () => {
    if (!currentLesson || currentLesson.type !== "video") return;
    
    // If already speaking, stop it
    if (isSpeaking) {
      window.speechSynthesis.cancel()
      setIsSpeaking(false)
      return
    }

    // Get the transcript text
    const transcriptText = currentLesson.content.transcript || "Transcript not available."
    
    // Create a new SpeechSynthesisUtterance instance
    const utterance = new SpeechSynthesisUtterance(transcriptText)
    
    // Store reference for cleanup
    speechSynthRef.current = utterance
    
    // Set event handlers
    utterance.onend = () => {
      setIsSpeaking(false)
      speechSynthRef.current = null
    }
    
    utterance.onerror = () => {
      setIsSpeaking(false)
      speechSynthRef.current = null
    }
    
    // Start speaking
    window.speechSynthesis.speak(utterance)
    setIsSpeaking(true)
  }

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

  // Process all lessons, normalizing their structure
  const allLessons = course.syllabus.flatMap((section) => 
    section.lessons.map(lesson => normalizeLesson(lesson))
  )
  
  // Don't proceed if currentLessonId isn't set yet
  if (currentLessonId === null) {
    return (
      <div className="container flex h-[70vh] flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">Loading lesson...</h1>
      </div>
    )
  }
  
  const currentLesson = allLessons.find((lesson) => lesson.id === currentLessonId)
  
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

  const currentLessonIndex = allLessons.findIndex((lesson) => lesson.id === currentLessonId)
  const nextLesson = allLessons[currentLessonIndex + 1]
  const prevLesson = allLessons[currentLessonIndex - 1]

  // Calculate progress
  const progress = ((currentLessonIndex + 1) / allLessons.length) * 100

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
                  {currentLesson.content.videoId ? (
                    <iframe
                      className="w-full h-full"
                      src={`https://www.youtube.com/embed/${currentLesson.content.videoId}`}
                      title={currentLesson.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center">
                      <PlayCircle className="h-16 w-16 text-white opacity-70" />
                    </div>
                  )}
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
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={handleTextToSpeech}
                        >
                          {isSpeaking ? (
                            <>
                              <PauseCircle className="mr-2 h-4 w-4" />
                              Stop Reading
                            </>
                          ) : (
                            <>
                              <Volume2 className="mr-2 h-4 w-4" />
                              Text-to-Speech
                            </>
                          )}
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
                {isExerciseLesson(currentLesson) && currentLesson.content.resources.length > 0 && (
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