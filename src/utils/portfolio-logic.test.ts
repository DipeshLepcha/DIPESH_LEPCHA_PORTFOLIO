import test from 'node:test';
import assert from 'node:assert/strict';
import {
  filterPhotosByCategory,
  getNextSlideIndex,
  getPrevSlideIndex,
  formatSlideCounter,
  validateContactForm,
  groupSkillsByCategory,
  computePandaDirection,
  calculateScrollProgress,
  formatJapaneseHeader,
  japaneseSectionHeaders,
} from './portfolio-logic.ts';
import type { HimalayanPhoto, SkillItem } from '../types/portfolio.ts';

const mockPhotos: HimalayanPhoto[] = [
  {
    id: 'photo-1',
    src: '/images/photo1.jpg',
    thumbnail: '/images/photo1-thumb.jpg',
    alt: 'Kanchenjunga',
    title: 'Kanchenjunga Dawn',
    location: 'Tiger Hill, Darjeeling',
    region: 'Darjeeling',
    categories: ['Darjeeling', 'Mountains'],
    caption: 'First light hitting the golden summits.',
    featured: true,
    sortOrder: 1,
  },
  {
    id: 'photo-2',
    src: '/images/photo2.jpg',
    thumbnail: '/images/photo2-thumb.jpg',
    alt: 'Gurudongmar',
    title: 'Gurudongmar Sacred Waters',
    location: 'North Sikkim',
    region: 'Sikkim',
    categories: ['Sikkim', 'Mountains', 'Nature'],
    caption: 'One of the highest freshwater lakes.',
    featured: false,
    sortOrder: 2,
  },
];

test('filterPhotosByCategory returns all sorted when All Photographs is chosen', () => {
  const result = filterPhotosByCategory(mockPhotos, 'All Photographs');
  assert.equal(result.length, 2);
  assert.equal(result[0].id, 'photo-1');
  assert.equal(result[1].id, 'photo-2');
});

test('filterPhotosByCategory filters accurately by region/tag', () => {
  const sikkimOnly = filterPhotosByCategory(mockPhotos, 'Sikkim');
  assert.equal(sikkimOnly.length, 1);
  assert.equal(sikkimOnly[0].id, 'photo-2');

  const darjeelingOnly = filterPhotosByCategory(mockPhotos, 'Darjeeling');
  assert.equal(darjeelingOnly.length, 1);
  assert.equal(darjeelingOnly[0].id, 'photo-1');
});

test('getNextSlideIndex wraps cyclically', () => {
  assert.equal(getNextSlideIndex(0, 3), 1);
  assert.equal(getNextSlideIndex(2, 3), 0);
  assert.equal(getNextSlideIndex(0, 0), 0);
});

test('getPrevSlideIndex wraps cyclically backward', () => {
  assert.equal(getPrevSlideIndex(0, 3), 2);
  assert.equal(getPrevSlideIndex(2, 3), 1);
  assert.equal(getPrevSlideIndex(0, 0), 0);
});

test('formatSlideCounter outputs padded 2-digit counter', () => {
  assert.equal(formatSlideCounter(0, 8), '01 / 08');
  assert.equal(formatSlideCounter(7, 8), '08 / 08');
  assert.equal(formatSlideCounter(0, 0), '00 / 00');
});

test('validateContactForm rejects empty fields', () => {
  const invalid = validateContactForm({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  assert.equal(invalid.isValid, false);
  assert.ok(invalid.errors.name);
  assert.ok(invalid.errors.email);
  assert.ok(invalid.errors.subject);
  assert.ok(invalid.errors.message);
});

test('validateContactForm accepts well-formed data', () => {
  const valid = validateContactForm({
    name: 'Tashi Namgyal',
    email: 'tashi@himalaya.tech',
    subject: 'Enterprise .NET Collaboration',
    message: 'We would love to discuss a distributed backend architecture project.',
  });
  assert.equal(valid.isValid, true);
  assert.equal(Object.keys(valid.errors).length, 0);
});

test('groupSkillsByCategory categorizes skill items', () => {
  const mockSkills: SkillItem[] = [
    {
      name: 'ASP.NET Core',
      category: 'Backend',
      levelDescription: 'Enterprise Web APIs and microservices',
      featured: true,
      tags: ['C#', 'REST', 'DI'],
    },
    {
      name: 'MySQL',
      category: 'Database',
      levelDescription: 'ACID transactions & stored procedures',
      featured: true,
      tags: ['SQL', 'Indexes'],
    },
  ];

  const grouped = groupSkillsByCategory(mockSkills);
  assert.equal(grouped.Backend.length, 1);
  assert.equal(grouped.Database.length, 1);
  assert.equal(grouped.Frontend.length, 0);
});

test('computePandaDirection identifies horizontal orientation', () => {
  assert.equal(computePandaDirection(120, 100), 'right');
  assert.equal(computePandaDirection(80, 100), 'left');
  assert.equal(computePandaDirection(101, 100), 'idle');
});

test('calculateScrollProgress clamps between 0 and 100 accurately', () => {
  assert.equal(calculateScrollProgress(0, 2000, 1000), 0);
  assert.equal(calculateScrollProgress(500, 2000, 1000), 50);
  assert.equal(calculateScrollProgress(1000, 2000, 1000), 100);
  assert.equal(calculateScrollProgress(1500, 2000, 1000), 100);
  assert.equal(calculateScrollProgress(0, 1000, 1000), 0);
});

test('formatJapaneseHeader produces authentic editorial headers', () => {
  assert.equal(formatJapaneseHeader('about'), '01 • Personal Introduction');
  assert.equal(formatJapaneseHeader('architecture'), '03 • System Architecture');
  assert.equal(japaneseSectionHeaders['experience'].label, 'EXPERIENCE');
});
