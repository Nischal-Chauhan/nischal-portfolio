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

  skills: [],

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

  projects: [],

  education: [],

  certifications: [],

  contact: {
    email: "chauhannischal311@gmail.com",

    phone: "+91 9328838446",

    location: "Ahmedabad, Gujarat, India",

    linkedin: "https://www.linkedin.com/in/nischal-chauhan-a534082b2",
  },
};