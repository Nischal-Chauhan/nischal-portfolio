export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Experience {
  company: string;
  role: string;
  location: string;
  duration: string;
  highlights: string[];
  technologies: string[];
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  github?: string;
  live?: string;
}

export interface Certification {
  title: string;
  issuer: string;
  year: string;
}

export interface Education {
  degree: string;
  institute: string;
  duration: string;
}

export interface PortfolioData {
  name: string;
  role: string;
  tagline: string;
  email: string;
  phone: string;
  location: string;
  resume: string;
  linkedin: string;

  navigation: NavItem[];

  socials: SocialLink[];

  skillCategories: SkillCategory[];

  experiences: Experience[];

  projects: Project[];

  education: Education[];

  certifications: Certification[];
}