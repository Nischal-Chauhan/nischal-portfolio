export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}

export interface Hero {
  name: string;
  role: string;
  tagline: string;
  resume: string;
}

export interface About {
  title: string;
  description: string;
  highlights: string[];
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

export interface Education {
  degree: string;
  institute: string;
  duration: string;
}

export interface Certification {
  title: string;
  issuer: string;
  year: string;
}

export interface Contact {
  email: string;
  phone: string;
  location: string;
  linkedin: string;
}

export interface PortfolioData {
  hero: Hero;

  about: About;

  navigation: NavItem[];

  socials: SocialLink[];

  skills: SkillCategory[];

  experience: Experience[];

  projects: Project[];

  education: Education[];

  certifications: Certification[];

  contact: Contact;
}