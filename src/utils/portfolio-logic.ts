import type { ContactFormData, FormValidationResult, HimalayanPhoto, PhotoCategory, SkillCategory, SkillItem } from '../types/portfolio.ts';

/**
 * Filter photography collection by selected category
 */
export function filterPhotosByCategory(
  photos: HimalayanPhoto[],
  category: PhotoCategory
): HimalayanPhoto[] {
  if (!photos || photos.length === 0) return [];
  if (category === 'All Photographs') {
    return [...photos].sort((a, b) => a.sortOrder - b.sortOrder);
  }
  return photos
    .filter((photo) => photo.categories.includes(category))
    .sort((a, b) => a.sortOrder - b.sortOrder);
}

/**
 * Calculate the next cyclically wrapped slide index
 */
export function getNextSlideIndex(currentIndex: number, totalSlides: number): number {
  if (totalSlides <= 0) return 0;
  return (currentIndex + 1) % totalSlides;
}

/**
 * Calculate the previous cyclically wrapped slide index
 */
export function getPrevSlideIndex(currentIndex: number, totalSlides: number): number {
  if (totalSlides <= 0) return 0;
  return (currentIndex - 1 + totalSlides) % totalSlides;
}

/**
 * Format slide index for presentation: e.g. "01 / 08"
 */
export function formatSlideCounter(index: number, total: number): string {
  if (total <= 0) return '00 / 00';
  const currentFormatted = String(index + 1).padStart(2, '0');
  const totalFormatted = String(total).padStart(2, '0');
  return `${currentFormatted} / ${totalFormatted}`;
}

/**
 * Contact form validation logic
 */
export function validateContactForm(data: ContactFormData): FormValidationResult {
  const errors: Partial<Record<keyof ContactFormData, string>> = {};

  const trimmedName = data.name.trim();
  if (!trimmedName) {
    errors.name = 'Please provide your name.';
  } else if (trimmedName.length < 2) {
    errors.name = 'Name must be at least 2 characters.';
  }

  const trimmedEmail = data.email.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!trimmedEmail) {
    errors.email = 'Please provide your email address.';
  } else if (!emailRegex.test(trimmedEmail)) {
    errors.email = 'Please enter a valid email address.';
  }

  const trimmedSubject = data.subject.trim();
  if (!trimmedSubject) {
    errors.subject = 'Please enter a subject.';
  } else if (trimmedSubject.length < 3) {
    errors.subject = 'Subject must be at least 3 characters.';
  }

  const trimmedMessage = data.message.trim();
  if (!trimmedMessage) {
    errors.message = 'Please write a message.';
  } else if (trimmedMessage.length < 10) {
    errors.message = 'Message must be at least 10 characters long.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

/**
 * Group skills by their respective category
 */
export function groupSkillsByCategory(skills: SkillItem[]): Record<SkillCategory, SkillItem[]> {
  const initial: Record<SkillCategory, SkillItem[]> = {
    Backend: [],
    Database: [],
    Frontend: [],
    'Tools and Engineering': [],
  };

  return skills.reduce((acc, skill) => {
    if (acc[skill.category]) {
      acc[skill.category].push(skill);
    }
    return acc;
  }, initial);
}

/**
 * Calculate panda companion movement delta and facing direction
 */
export function computePandaDirection(
  targetX: number,
  currentX: number,
  threshold = 2
): 'left' | 'right' | 'idle' {
  const diff = targetX - currentX;
  if (Math.abs(diff) <= threshold) return 'idle';
  return diff > 0 ? 'right' : 'left';
}

/**
 * Calculate scroll progress percentage (clamped between 0 and 100)
 */
export function calculateScrollProgress(
  scrollTop: number,
  scrollHeight: number,
  clientHeight: number
): number {
  const maxScroll = scrollHeight - clientHeight;
  if (maxScroll <= 0) return 0;
  const progress = (scrollTop / maxScroll) * 100;
  return Math.min(100, Math.max(0, Math.round(progress * 10) / 10));
}

/**
 * Editorial section labels mapping section keys to clean English titles
 */
export interface JapaneseSectionHeader {
  number: string;
  label: string;
  english: string;
}

export const japaneseSectionHeaders: Record<string, JapaneseSectionHeader> = {
  about: {
    number: '01',
    label: 'ABOUT',
    english: 'Personal Introduction',
  },
  experience: {
    number: '02',
    label: 'EXPERIENCE',
    english: 'Engineering Journey',
  },
  architecture: {
    number: '03',
    label: 'ARCHITECTURE',
    english: 'System Architecture',
  },
  projects: {
    number: '04',
    label: 'PROJECTS',
    english: 'Featured Projects',
  },
  skills: {
    number: '05',
    label: 'SKILLS',
    english: 'Core Competencies',
  },
  contact: {
    number: '06',
    label: 'CONTACT',
    english: 'Get In Touch',
  },
  photography: {
    number: '07',
    label: 'PHOTOGRAPHY',
    english: 'Himalayan Archive',
  },
};

/**
 * Format an editorial section header title in English
 */
export function formatJapaneseHeader(key: string): string {
  const item = japaneseSectionHeaders[key];
  if (!item) return key;
  return `${item.number} • ${item.english}`;
}
