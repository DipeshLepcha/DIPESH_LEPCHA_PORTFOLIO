import type { HimalayanPhoto } from '../types/portfolio.ts';

export const himalayanPhotographyList: HimalayanPhoto[] = [
  {
    id: 'kanchenjunga-dawn',
    src: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1800&q=85',
    thumbnail: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=400&q=70',
    alt: 'Dawn glow illuminating the snow-clad summit of Mount Kanchenjunga seen from Darjeeling',
    title: 'Kanchenjunga at First Light',
    location: 'Tiger Hill, Darjeeling',
    region: 'Darjeeling',
    categories: ['Darjeeling', 'Mountains', 'Nature'],
    caption:
      'The sacred five peaks of Kanchenjunga bathing in the first amber rays of Himalayan dawn, breaking through the mist over Darjeeling.',
    story:
      'Waking at 4:00 AM in the freezing Himalayan chill, waiting as the deep violet sky turns into liquid gold above the third-highest mountain on Earth.',
    featured: true,
    sortOrder: 1,
    cameraMeta: {
      camera: 'Sony Alpha / Canon EOS',
      lens: '70-200mm f/4.0',
      settings: '1/320s at f/8.0, ISO 100',
      season: 'Autumn / October',
    },
  },
  {
    id: 'gurudongmar-sacred-waters',
    src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1800&q=85',
    thumbnail: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=70',
    alt: 'Gurudongmar Lake nestled at 17,800 feet surrounded by rugged Himalayan peaks',
    title: 'Sacred High-Altitude Sanctuary',
    location: 'Gurudongmar Lake, North Sikkim',
    region: 'Sikkim',
    categories: ['Sikkim', 'Mountains', 'Nature', 'Travel'],
    caption:
      'Resting at an elevation of 17,800 feet in the rugged plateau of North Sikkim, where crystal turquoise water mirrors the boundless sky.',
    story:
      'The air is thin and the silence is sacred. Part of the lake remains unfrozen even in dead winter, a testament to centuries of local veneration.',
    featured: true,
    sortOrder: 2,
    cameraMeta: {
      camera: 'High Altitude Kit',
      lens: '24-70mm f/2.8',
      settings: '1/500s at f/9.0, ISO 100',
      season: 'Late Spring',
    },
  },
  {
    id: 'yumthang-pine-valley',
    src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1800&q=85',
    thumbnail: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=400&q=70',
    alt: 'Yumthang Valley pine forests enveloped in drifting mountain mist',
    title: 'The Valley of Eternal Mist',
    location: 'Yumthang Valley, North Sikkim',
    region: 'Sikkim',
    categories: ['Sikkim', 'Nature', 'Mountains'],
    caption:
      'Towering Himalayan pines and alpine meadows blanketed in swirling monsoon fog and blooming rhododendron shades.',
    story:
      'Where glacial streams cut through meadows flanked by towering fir trees. The mist rolls in within seconds, transforming the valley into a quiet dreamscape.',
    featured: true,
    sortOrder: 3,
    cameraMeta: {
      camera: 'Mirrorless Landscape',
      lens: '35mm Prime f/1.8',
      settings: '1/250s at f/5.6, ISO 160',
      season: 'Monsoon / Summer',
    },
  },
  {
    id: 'darjeeling-tea-ridges',
    src: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=1800&q=85',
    thumbnail: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=400&q=70',
    alt: 'Contoured emerald tea plantations sweeping across Darjeeling mountain slopes',
    title: 'Emerald Slopes of Darjeeling',
    location: 'Happy Valley Tea Estate, Darjeeling',
    region: 'Darjeeling',
    categories: ['Darjeeling', 'Nature', 'Travel'],
    caption:
      'Centuries-old tea bushes meticulously contoured along steep Himalayan ridges, caught between drifting cloud banks and sunlight.',
    story:
      'The rhythmic geometry of tea gardens cascading into deep valleys. The sweet scent of crushed green leaves fills the cool mountain air.',
    featured: true,
    sortOrder: 4,
    cameraMeta: {
      camera: 'Full Frame Body',
      lens: '50mm f/1.8',
      settings: '1/400s at f/7.1, ISO 125',
      season: 'First Flush / Spring',
    },
  },
  {
    id: 'lamahatta-pine-forest',
    src: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1800&q=85',
    thumbnail: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=400&q=70',
    alt: 'Dense sacred cedar and pine trees at Lamahatta Eco Sanctuary with hanging prayer flags',
    title: 'Sanctuary of the Whispering Pines',
    location: 'Lamahatta Eco Park, Darjeeling Hills',
    region: 'Darjeeling',
    categories: ['Darjeeling', 'Nature', 'Travel'],
    caption:
      'Colossal pine and dhupi trees veiled in silent fog, intertwined with colorful Buddhist prayer banners carrying peace on the mountain breeze.',
    story:
      'A place of stillness and meditation along the road between Kalimpong and Darjeeling. Walking beneath these hundred-foot canopies silences the busiest mind.',
    featured: false,
    sortOrder: 5,
    cameraMeta: {
      camera: 'Compact Travel Mirrorless',
      lens: '16-35mm Ultra Wide',
      settings: '1/125s at f/4.0, ISO 400',
      season: 'Winter Chill',
    },
  },
  {
    id: 'tsomgo-glacial-lake',
    src: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1800&q=85',
    thumbnail: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=400&q=70',
    alt: 'Tsomgo Changu Lake in East Sikkim surrounded by snow mountains and prayer flags',
    title: 'The Glacial Mirror of Changu',
    location: 'Tsomgo Lake, East Sikkim',
    region: 'Sikkim',
    categories: ['Sikkim', 'Mountains', 'Travel'],
    caption:
      'Sitting at 12,310 feet, Tsomgo Lake changes its color with the seasons, revered by locals as an oracle of the mountains.',
    story:
      'Perched high along the ancient Nathula Pass highway, flanked by steep snowfields and grazing yaks against dramatic Himalayan skies.',
    featured: false,
    sortOrder: 6,
    cameraMeta: {
      camera: 'Landscape Body',
      lens: '24-105mm Zoom',
      settings: '1/640s at f/8.0, ISO 100',
      season: 'Early Winter',
    },
  },
  {
    id: 'zuluk-silk-route-loops',
    src: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1800&q=85',
    thumbnail: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=400&q=70',
    alt: 'Zig-zag winding hairpins of the Old Silk Route carved into the Himalayan ridges at Zuluk',
    title: 'Curves of the Ancient Silk Route',
    location: 'Zuluk Hairpins, East Sikkim',
    region: 'Sikkim',
    categories: ['Sikkim', 'Mountains', 'Travel'],
    caption:
      'Over thirty hairpin turns engineered into the sheer mountain ridge, carrying travelers above the cloud layer at sunrise.',
    story:
      'Looking down from Thambi viewpoint at 11,200 feet, the road snakes like a sleeping serpent through the misty valleys below.',
    featured: false,
    sortOrder: 7,
    cameraMeta: {
      camera: 'Wide Angle Mirrorless',
      lens: '24mm Prime',
      settings: '1/200s at f/11, ISO 100',
      season: 'Autumn Skies',
    },
  },
  {
    id: 'mirik-sumendu-lake',
    src: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1800&q=85',
    thumbnail: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=400&q=70',
    alt: 'Mirik Lake in Darjeeling hills reflecting cryptomeria pine trees and footbridge',
    title: 'Peace on Sumendu Lake',
    location: 'Mirik, Darjeeling District',
    region: 'Darjeeling',
    categories: ['Darjeeling', 'Nature', 'Travel'],
    caption:
      'The quiet emerald water of Mirik Lake surrounded on one bank by Japanese cedar forests and on the other by gently sloping gardens.',
    story:
      'Crossing the 80-foot arched rainbow footbridge as soft afternoon rain ripples the reflections of Cryptomeria japonica trees.',
    featured: false,
    sortOrder: 8,
    cameraMeta: {
      camera: 'Everyday Travel Kit',
      lens: '35mm f/2.0',
      settings: '1/160s at f/4.5, ISO 200',
      season: 'Monsoon Mist',
    },
  },
];
