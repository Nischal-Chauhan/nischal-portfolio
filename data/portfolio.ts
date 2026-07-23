import { PortfolioData } from "@/types/portfolio";

export const portfolio: PortfolioData = {
  hero: {
    name: "Nischal Chauhan",

    role: "AI & Python Developer",

    tagline:
      "Building AI-powered applications, scalable backend APIs, intelligent automation solutions, and modern web experiences using Python, FastAPI, Docker, and AI technologies.",

    resume: "/resume.pdf",
  },

  about: {
    title: "About Me",

    description:
      "I am an AI & Python Developer passionate about building AI-powered applications, scalable backend APIs, automation solutions, and modern web experiences. I enjoy solving real-world problems using Python, FastAPI, Docker, AI technologies, and cloud-native development practices.",

    highlights: [
      "Python",
      "FastAPI",
      "Docker",
      "PostgreSQL",
      "Linux",
      "Artificial Intelligence",
    ],
  },

  navigation: [
    {
      label: "About",
      href: "#about",
    },
    {
      label: "Experience",
      href: "#experience",
    },
    {
      label: "Projects",
      href: "#projects",
    },
    {
      label: "Skills",
      href: "#skills",
    },
    {
      label: "Contact",
      href: "#contact",
    },
  ],

  socials: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/nischal-chauhan-a534082b2",
      icon: "linkedin",
    },
    {
      label: "Email",
      href: "mailto:chauhannischal311@gmail.com",
      icon: "mail",
    },
  ],

  skills: [
  {
    title: "Programming Languages",
    skills: [
      "Python",
      "JavaScript",
      "TypeScript",
      "HTML",
      "CSS",
    ],
  },
  {
    title: "Backend Development",
    skills: [
      "FastAPI",
      "Flask",
      "REST APIs",
      "PostgreSQL",
      "SQLAlchemy",
    ],
  },
  {
    title: "AI & Machine Learning",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "TensorFlow",
      "PyTorch",
      "Scikit-learn",
      "OpenCV",
      "Generative AI",
      "NLP",
      "Computer Vision",
    ],
  },
  {
    title: "DevOps & Cloud",
    skills: [
      "Docker",
      "Linux",
      "Nginx",
      "Apache",
      "Git",
      "GitHub",
      "AWS",
      "PM2",
      "CI/CD",
    ],
  },
  {
    title: "Tools & Technologies",
    skills: [
      "VS Code",
      "Postman",
      "Figma",
      "WordPress",
      "Excel",
    ],
  },
],

  experience: [
  {
    company: "Swaraa Tech Solutions",
    role: "AI & Python Developer",
    location: "Ahmedabad, Gujarat",
    duration: "July 2025 – Present",
    highlights: [
      "Redesigned and maintained company websites, including vastites.ca.",
      "Managed Linux-based servers and configured Apache & Nginx web servers.",
      "Built and maintained CI/CD pipelines using Docker, PM2, and deployment automation workflows.",
      "Installed SSL certificates and configured SMTP services for production applications.",
      "Deployed and managed WordPress websites while optimizing server environments.",
      "Collaborated with development teams to improve deployment reliability, monitoring, and infrastructure performance.",
    ],
    technologies: [
      "Python",
      "FastAPI",
      "Docker",
      "Linux",
      "Nginx",
      "Apache",
      "PM2",
      "WordPress",
      "Git",
    ],
  },
],

  projects: [
  {
    title: "VisionAttend AI",
    category: "AI",
    featured: true,
    description:
      "A Smart Face Recognition Attendance & Access Management System built with AI-powered facial recognition, FastAPI, PostgreSQL, Docker, and InsightFace for secure attendance tracking and access control.",
    technologies: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Docker",
      "InsightFace",
      "OpenCV",
    ],
    image: "/projects/placeholder.png",
  },

  {
    title: "AI Resume ATS Analyzer",
    category: "AI",
    featured: true,
    description:
      "An AI-powered resume analyzer that evaluates resumes against job descriptions using Google's Gemini AI and provides ATS scores, keyword analysis, and improvement suggestions.",
    technologies: [
      "Python",
      "Streamlit",
      "Gemini AI",
      "Docker",
      "PDF",
    ],
    image: "/projects/placeholder.png",
  },

  {
    title: "Personal Portfolio",
    category: "Web",
    featured: false,
    description:
      "A modern portfolio website showcasing my experience, projects, and technical skills, built with Next.js, TypeScript, and Tailwind CSS.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
    ],
    image: "/projects/placeholder.png",
  },
],

  education: [
  {
    degree: "Bachelor of Technology (B.Tech)",
    institute: "Silver Oak University",
    duration: "2021 – 2025",
  },
  {
    degree: "Diploma in Engineering",
    institute: "Khyati School of Engineering",
    duration: "2018 – 2021",
  },
],

  certifications: [],

  contact: {
    email: "chauhannischal311@gmail.com",

    phone: "+91 9328838446",

    location: "Ahmedabad, Gujarat, India",

    linkedin: "https://www.linkedin.com/in/nischal-chauhan-a534082b2",
  },
};