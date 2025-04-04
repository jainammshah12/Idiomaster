export const coursesData = [
  {
    id: 1,
    title: "Introduction to Web Development",
    description: "Learn the fundamentals of web development including HTML, CSS, and JavaScript.",
    instructor: "Jane Smith",
    instructorTitle: "Senior Web Developer",
    instructorBio: "Jane has over 10 years of experience in web development and has worked with major tech companies.",
    level: "Beginner",
    duration: "8 weeks",
    rating: 4.7,
    students: 1245,
    category: "Programming",
    image: "https://media.licdn.com/dms/image/v2/D5612AQGkVnO4_CCjAQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1687944073607?e=2147483647&v=beta&t=io1BJLbujw4puuV0v0AkhEmBUldult_bxpSqDcmDPCo",
    price: 49.99,
    syllabus: [
      {
        title: "Introduction to HTML",
        lessons: [
          { 
            id: 1, 
            title: "Basic HTML Structure", 
            duration: "15 min", 
            type: "video",
            content: {
              videoUrl: "https://example.com/video1.mp4",
              transcript: "In this lesson, we'll learn about the basic structure of HTML documents...",
              description: "HTML (HyperText Markup Language) is the standard markup language for documents designed to be displayed in a web browser."
            }
          },
          { 
            id: 2, 
            title: "HTML Elements and Attributes", 
            duration: "20 min", 
            type: "video",
            content: {
              videoUrl: "https://example.com/video2.mp4",
              transcript: "HTML elements are represented by tags...",
              description: "HTML elements are the building blocks of HTML pages. HTML elements are represented by tags."
            }
          },
          { 
            id: 3, 
            title: "HTML Forms", 
            duration: "25 min", 
            type: "video",
            content: {
              videoUrl: "https://example.com/video3.mp4",
              transcript: "HTML forms are used to collect user input...",
              description: "An HTML form is used to collect user input. The user input is most often sent to a server for processing."
            }
          },
          { 
            id: 4, 
            title: "HTML Practice Exercise", 
            duration: "30 min", 
            type: "exercise",
            content: {
              instructions: "Create a simple HTML page with a header, navigation, main content, and footer.",
              resources: ["HTML cheat sheet", "Example code"],
              submissionType: "Code upload"
            }
          },
        ],
      },
      {
        title: "CSS Fundamentals",
        lessons: [
          { id: 5, title: "CSS Selectors", duration: "18 min", type: "video",
            content:{instructions:"", resources:[], submissionType: ""}
          },
          { id: 6, title: "CSS Box Model", duration: "22 min", type: "video",
            content:{instructions:"", resources:[], submissionType: ""}
           },
          { id: 7, title: "CSS Layouts", duration: "28 min", type: "video",
            content:{instructions:"", resources:[], submissionType: ""}
           },
          { id: 8, title: "CSS Styling Exercise", duration: "35 min", type: "exercise",
            content:{instructions:"", resources:[], submissionType: ""}
           },
        ],
      },
      {
        title: "JavaScript Basics",
        lessons: [
          { id: 9, title: "Variables and Data Types", duration: "20 min", type: "video",
            content:{instructions:"", resources:[], submissionType: ""}
           },
          { id: 10, title: "Functions and Control Flow", duration: "25 min", type: "video",
            content:{instructions:"", resources:[], submissionType: ""}
           },
          { id: 11, title: "DOM Manipulation", duration: "30 min", type: "video",
            content:{instructions:"", resources:[], submissionType: ""}
           },
          { id: 12, title: "JavaScript Exercise", duration: "40 min", type: "exercise",
            content:{instructions:"", resources:[], submissionType: ""}
           },
        ],
      },
    ],
    whatYouWillLearn: [
      "Build responsive websites using HTML, CSS, and JavaScript",
      "Understand core web development concepts",
      "Create interactive web pages",
      "Deploy websites to the internet",
      "Optimize websites for different devices",
      "Debug common web development issues",
    ],
    requirements: [
      "Basic computer skills",
      "No prior programming experience required",
      "A computer with internet access",
      "Text editor (recommendations will be provided)",
    ],
  },
  {
    id: 2,
    title: "Advanced React Techniques",
    description: "Master advanced React concepts including hooks, context API, and performance optimization.",
    instructor: "John Doe",
    instructorTitle: "React Specialist",
    instructorBio:
      "John is a React expert with experience building large-scale applications for Fortune 500 companies.",
    level: "Advanced",
    duration: "6 weeks",
    rating: 4.9,
    students: 876,
    category: "Programming",
    image: "https://media2.dev.to/dynamic/image/width=1080,height=1080,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F096baapsqqt9fks0us99.png",
    price: 79.99,
    syllabus: [
      {
        title: "Advanced Hooks",
        lessons: [
          { id: 13, title: "Custom Hooks", duration: "25 min", type: "video" },
          { id: 14, title: "useReducer Deep Dive", duration: "30 min", type: "video" },
          { id: 15, title: "useCallback and useMemo", duration: "28 min", type: "video" },
          { id: 16, title: "Hooks Exercise", duration: "45 min", type: "exercise" },
        ],
      },
      {
        title: "State Management",
        lessons: [
          { id: 17, title: "Context API Patterns", duration: "22 min", type: "video" },
          { id: 18, title: "Redux vs Context", duration: "26 min", type: "video" },
          { id: 19, title: "Zustand and Jotai", duration: "24 min", type: "video" },
          { id: 20, title: "State Management Exercise", duration: "40 min", type: "exercise" },
        ],
      },
    ],
    whatYouWillLearn: [
      "Build complex React applications",
      "Optimize React performance",
      "Implement advanced state management",
      "Create reusable React components",
      "Test React applications",
    ],
    requirements: [
      "Solid understanding of JavaScript",
      "Basic knowledge of React",
      "Familiarity with ES6+ syntax",
      "Node.js installed on your computer",
    ],
  },
] 