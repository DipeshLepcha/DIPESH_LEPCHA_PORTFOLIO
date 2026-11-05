/**
 * Portfolio Data Models for Dipesh Lepcha
 * Designed for seamless future integration with ASP.NET Core Web API + MySQL database.
 */

export interface ProfileInfo {
  name: string;
  title: string;
  subtitle: string;
  bioIntro: string;
  bioStory: string[];
  location: string;
  email: string;
  phone?: string;
  githubUrl: string;
  linkedinUrl: string;
  currentAvailability: string;
  corePillars: {
    title: string;
    description: string;
    icon: string;
  }[];
  quickHighlights: {
    label: string;
    value: string;
    detail: string;
  }[];
}

export interface ExperienceItem {
  id: string;
  organization: string;
  role: string;
  employmentType: string;
  location: string;
  startDate: string;
  endDate: string;
  isCurrent: boolean;
  description: string;
  responsibilities: string[];
  technologies: string[];
  selectedAchievements?: string[];
}

export interface ProjectCaseStudy {
  id: string;
  title: string;
  shortOverview: string;
  category: 'Enterprise .NET' | 'Web Applications' | 'API & Microservices' | 'Payment & Booking';
  problem: string;
  contribution: string;
  technicalApproach: string[];
  technologies: string[];
  outcomes: string[];
  architectureHighlights: string[];
  featured: boolean;
  imageUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
  isPublicSafe: boolean;
}

export type SkillCategory = 'Backend' | 'Database' | 'Frontend' | 'Tools and Engineering';

export interface SkillItem {
  name: string;
  category: SkillCategory;
  levelDescription: string;
  tags?: string[];
  featured?: boolean;
}

export type PhotoCategory = 'All Photographs' | 'Sikkim' | 'Darjeeling' | 'Mountains' | 'Nature' | 'Travel';

export interface HimalayanPhoto {
  id: string;
  src: string;
  thumbnail: string;
  alt: string;
  title: string;
  location: string;
  region: 'Sikkim' | 'Darjeeling' | 'Eastern Himalayas';
  categories: PhotoCategory[];
  caption: string;
  story?: string;
  featured: boolean;
  sortOrder: number;
  cameraMeta?: {
    camera?: string;
    lens?: string;
    settings?: string;
    season?: string;
  };
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface FormValidationResult {
  isValid: boolean;
  errors: Partial<Record<keyof ContactFormData, string>>;
}

export interface Hobby{
  id:number;
  name: string;
  description:string;
  imageUrl: string;
  categories: string[];
  caption: string;
}
