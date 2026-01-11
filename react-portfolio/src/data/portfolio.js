// Portfolio Data - Centralized data management

export const personalInfo = {
    name: "Prakash Raj A",
    role: "Frontend Developer & AI/ML Student",
    tagline: "I build thoughtful digital experiences.",
    bio: `Engineering student at St. Joseph's College, Chennai. 
        I craft web applications that solve real problems and explore 
        the intersection of design and machine learning.`,
    email: "aprakashraj602@gmail.com",
    location: "Chennai, India",
    social: {
        github: "https://github.com/prakash-2409",
        linkedin: "https://www.linkedin.com/in/prakash-raj-a-460a19325",
        resume: "https://drive.google.com/file/d/1JkOGbZ5yPnd5BgxYqv6dttNjkkjayZnw/view?usp=drive_link"
    },
    avatar: "https://github.com/prakash-2409.png"
};

export const aboutData = {
    story: [
        `I'm a second-year Computer Science student with a deep curiosity for how things work on the web. My journey started with simple HTML pages and has evolved into building full-stack applications and exploring machine learning.`,
        `When I'm not coding, you'll find me at hackathons, participating in symposiums (where I've won a few), or learning German on the side.`,
        `I'm currently seeking internship opportunities where I can contribute to meaningful projects while continuing to grow as a developer.`
    ],
    education: {
        institution: "St. Joseph's College of Engineering",
        degree: "B.E. Computer Science",
        gpa: "CGPA 8.35"
    },
    experience: [
        {
            role: "Networking Intern",
            company: "Skyfall Technologies",
            period: "Jul – Aug 2025"
        },
        {
            role: "Data Science Intern",
            company: "Cognifyz Technologies",
            period: "May – Jun 2025"
        }
    ],
    achievements: [
        "3× Winner, Agni College Symposium",
        "Runner-up, Jeppiar Engineering Symposium",
        "Oracle Cloud AI Foundations Certified"
    ]
};

export const skillsData = [
    {
        category: "Languages",
        skills: ["Python", "JavaScript", "Java", "C", "HTML/CSS"]
    },
    {
        category: "Frameworks & Tools",
        skills: ["React", "Node.js", "Flask", "Git", "VS Code"]
    },
    {
        category: "Data & ML",
        skills: ["TensorFlow", "Pandas", "NumPy", "Scikit-learn"]
    },
    {
        category: "Databases",
        skills: ["MySQL", "SQLite", "Firebase"]
    }
];

export const projectsData = [
    {
        id: 1,
        title: "Crop Health Monitor",
        description: "AI-powered solution helping farmers detect crop diseases early and receive actionable insights for better yields.",
        category: "AI / Machine Learning",
        tech: ["Python", "TensorFlow", "Flask", "Firebase"],
        link: "https://github.com/prakash-2409",
        featured: true
    },
    {
        id: 2,
        title: "Workout Tracker",
        description: "Fitness tracking app with Fitbit integration, progress visualization, and personalized goal tracking.",
        category: "Full Stack",
        tech: ["React Native", "Node.js", "Charts"],
        link: "https://github.com/prakash-2409/workout-tracker",
        featured: true
    },
    {
        id: 3,
        title: "Secure Voting System",
        description: "Secure digital voting platform with real-time counting, user authentication, and admin oversight.",
        category: "Desktop App",
        tech: ["Python", "Tkinter", "SQLite"],
        link: "https://github.com/prakash-2409/voting_system",
        featured: false
    },
    {
        id: 4,
        title: "Notion Clone",
        description: "Personal productivity tool for time management, scheduling, and weekly planning with a clean UI.",
        category: "Productivity",
        tech: ["JavaScript", "UI/UX", "Full Stack"],
        link: "https://github.com/prakash-2409",
        featured: false
    },
    {
        id: 5,
        title: "AI-Powered Resume",
        description: "Smart resume builder that uses AI to help create professional resumes with optimized content and formatting.",
        category: "AI / Web App",
        tech: ["Python", "Flask", "CSS", "HTML"],
        link: "https://github.com/prakash-2409/AI-Powered-resume",
        featured: true
    }
];

export const blogPosts = [
    {
        id: 1,
        title: "Building My First Machine Learning Model",
        excerpt: "My journey into ML started with a simple crop disease classifier. Here's what I learned along the way.",
        date: "2024-12-15",
        readTime: "5 min read",
        category: "Machine Learning",
        slug: "first-ml-model"
    },
    {
        id: 2,
        title: "Why I Switched from Vanilla JS to React",
        excerpt: "The component-based architecture changed how I think about building web applications.",
        date: "2024-11-28",
        readTime: "4 min read",
        category: "Web Development",
        slug: "vanilla-to-react"
    },
    {
        id: 3,
        title: "Lessons from My First Hackathon Win",
        excerpt: "Participating in hackathons taught me more about collaboration and rapid prototyping than any course.",
        date: "2024-10-20",
        readTime: "6 min read",
        category: "Career",
        slug: "first-hackathon"
    }
];

export const navLinks = [
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" }
];

