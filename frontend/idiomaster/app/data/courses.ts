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
              videoId: "BvJYXl2ywUE",
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
              videoId: "",
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
  {
    id: 3,
    title: "Data Science Fundamentals",
    description: "An introduction to data science concepts, tools, and methodologies.",
    instructor: "Alex Johnson",
    instructorTitle: "Data Scientist",
    instructorBio: "Alex is a seasoned data scientist with experience in Python, machine learning, and data visualization tools.",
    level: "Intermediate",
    duration: "10 weeks",
    rating: 4.5,
    students: 1532,
    category: "Data Science",
    image: "https://bernardmarr.com/img/What%20Really%20Is%20Data%20Science%20A%20Super%20Simple%20Explanation%20For%20Anyone.png",
    price: 59.99,
    syllabus: [
      {
        title: "Getting Started with Data Science",
        lessons: [
          { id: 21, title: "What is Data Science?", duration: "15 min", type: "video" },
          { id: 22, title: "Tools of the Trade", duration: "20 min", type: "video" },
          { id: 23, title: "Setting up Your Environment", duration: "25 min", type: "exercise" },
        ],
      },
      {
        title: "Data Manipulation and Visualization",
        lessons: [
          { id: 24, title: "Working with Pandas", duration: "30 min", type: "video" },
          { id: 25, title: "Data Cleaning Techniques", duration: "30 min", type: "video" },
          { id: 26, title: "Visualizing Data with Matplotlib", duration: "35 min", type: "exercise" },
        ],
      },
    ],
    whatYouWillLearn: [
      "Understand the data science lifecycle",
      "Clean and visualize datasets",
      "Use tools like Python, Pandas, and Matplotlib",
      "Gain insights from data",
    ],
    requirements: [
      "Basic programming knowledge",
      "Familiarity with Python is helpful",
      "Willingness to explore data",
    ],
  },
  {
    id: 4,
    title: "UX/UI Design Principles",
    description: "Learn the core principles of user experience and interface design.",
    instructor: "Sarah Williams",
    instructorTitle: "UX Designer",
    instructorBio: "Sarah is a creative UX/UI designer who has led design projects for startups and enterprises alike.",
    level: "Beginner",
    duration: "5 weeks",
    rating: 4.6,
    students: 987,
    category: "Design",
    image: "https://www.aufaitux.com/wp-content/uploads/2020/05/UIUX-designing-1.jpg",
    price: 39.99,
    syllabus: [
      {
        title: "User Experience Basics",
        lessons: [
          { id: 27, title: "What is UX?", duration: "12 min", type: "video" },
          { id: 28, title: "User Research Techniques", duration: "18 min", type: "video" },
          { id: 29, title: "UX Case Study", duration: "25 min", type: "exercise" },
        ],
      },
      {
        title: "User Interface Design",
        lessons: [
          { id: 30, title: "Color Theory", duration: "20 min", type: "video" },
          { id: 31, title: "Typography in UI", duration: "22 min", type: "video" },
          { id: 32, title: "UI Design Tools", duration: "30 min", type: "exercise" },
        ],
      },
    ],
    whatYouWillLearn: [
      "Understand UX and UI design principles",
      "Create wireframes and prototypes",
      "Conduct user research and usability testing",
    ],
    requirements: [
      "No prior design experience needed",
      "Access to a design tool like Figma or Adobe XD",
      "Creativity and a user-focused mindset",
    ],
  },
  {
    id: 5,
    title: "Machine Learning Essentials",
    description: "A comprehensive introduction to machine learning algorithms and applications.",
    instructor: "Michael Chen",
    instructorTitle: "ML Engineer",
    instructorBio: "Michael is a machine learning engineer specializing in supervised learning and deep learning models.",
    level: "Intermediate",
    duration: "12 weeks",
    rating: 4.8,
    students: 1876,
    category: "Data Science",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4sXvAhlZ68GDr_LA9ho4jhOz7-8Mzp7d-pQ&s",
    price: 89.99,
    syllabus: [
      {
        title: "Machine Learning Fundamentals",
        lessons: [
          { id: 33, title: "Types of Machine Learning", duration: "20 min", type: "video" },
          { id: 34, title: "Model Training Process", duration: "25 min", type: "video" },
          { id: 35, title: "Linear Regression", duration: "30 min", type: "video" },
        ],
      },
      {
        title: "Supervised and Unsupervised Learning",
        lessons: [
          { id: 36, title: "Classification Algorithms", duration: "28 min", type: "video" },
          { id: 37, title: "Clustering Techniques", duration: "26 min", type: "video" },
          { id: 38, title: "ML Practice Lab", duration: "40 min", type: "exercise" },
        ],
      },
    ],
    whatYouWillLearn: [
      "Understand key ML algorithms",
      "Train and evaluate machine learning models",
      "Apply supervised and unsupervised learning",
    ],
    requirements: [
      "Basic understanding of Python",
      "Knowledge of linear algebra and statistics is helpful",
      "Curiosity for AI and automation",
    ],
  },
  {
    id: 6,
    title: "Digital Marketing Strategies",
    description: "Learn effective digital marketing strategies for business growth.",
    instructor: "Emily Rodriguez",
    instructorTitle: "Marketing Consultant",
    instructorBio: "Emily has helped over 50 startups grow through tailored digital marketing strategies and SEO techniques.",
    level: "Beginner",
    duration: "4 weeks",
    rating: 4.4,
    students: 2134,
    category: "Marketing",
    image: "https://www.simplilearn.com/ice9/free_resources_article_thumb/What_is_digital_marketing.jpg",
    price: 29.99,
    syllabus: [
      {
        title: "Digital Marketing Overview",
        lessons: [
          { id: 39, title: "What is Digital Marketing?", duration: "15 min", type: "video" },
          { id: 40, title: "Marketing Channels", duration: "18 min", type: "video" },
          { id: 41, title: "Marketing Plan Project", duration: "35 min", type: "exercise" },
        ],
      },
      {
        title: "SEO and Social Media Marketing",
        lessons: [
          { id: 42, title: "SEO Basics", duration: "20 min", type: "video" },
          { id: 43, title: "Social Media Strategy", duration: "25 min", type: "video" },
          { id: 44, title: "Ad Campaign Creation", duration: "30 min", type: "exercise" },
        ],
      },
    ],
    whatYouWillLearn: [
      "Create marketing strategies that convert",
      "Understand SEO and social media engagement",
      "Analyze and improve marketing performance",
    ],
    requirements: [
      "No prior marketing knowledge required",
      "A desire to understand business growth",
      "Access to internet and social media platforms",
    ],
  },
];