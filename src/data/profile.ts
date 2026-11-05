import type { ProfileInfo } from '../types/portfolio.ts';

export const dipeshProfile: ProfileInfo = {
  name: 'Dipesh Lepcha',
  title: 'Software Developer',
  subtitle: '.Full-Stack .NET & Web Applications',
  bioIntro:'I build secure, scalable web applications by connecting intuitive user experiences with reliable .NET backends, REST APIs, and efficient database solutions using MySQL and SQL Server.',
  bioStory: [
    'I am a software developer with a deep passion for building robust, dependable backends, data-driven web applications, and intuitive user workflows. My core technical expertise centers on the C# and .NET ecosystem, ASP.NET Core, relational database engineering with MySQL and SQL, and clean RESTful API design.',
    'Born and raised amidst the majestic hills of  Darjeeling and Sikkim, my approach to engineering echoes the patience and endurance of the Himalayas: build on rock-solid foundations, eliminate unneeded noise, and ensure every component performs dependably under real-world pressure.',
    'From architecting secure administrative portals and public permit systems to integrating seamless multi-tier payment gateways and optimizing intricate stored procedures, I focus on building software that genuinely serves organizations and everyday users without failure.',
  ],
  location: 'Sikkim & Darjeeling Region, India',
  email: 'dipeshlepcha0711@gmail.com',
  githubUrl: 'https://github.com/dipeshlepcha',
  linkedinUrl: 'https://linkedin.com/in/dipesh-lepcha',
  currentAvailability: 'Open to Software Engineering Roles & Consultations',
  corePillars: [
    {
      title: 'Reliable .NET Architecture',
      description:
        'Architecting structured, maintainable ASP.NET Core MVC and Web API solutions with clean separation of concerns and robust dependency injection.',
      icon: 'ShieldCheck',
    },
    {
      title: 'Database & SQL Optimization',
      description:
        'Crafting optimized MySQL schemas, complex stored procedures, and high-throughput transactional queries designed for data integrity.',
      icon: 'Database',
    },
    {
      title: 'Workflow & Payment Systems',
      description:
        'Integrating secure financial gateways, automated webhook verifications, and deterministic state machines for booking and ticketing portals.',
      icon: 'CreditCard',
    },
    {
      title: 'Clean Frontend Delivery',
      description:
        'Bridging backend services with modern responsive interfaces using TypeScript, React, and semantic HTML for accessible experiences.',
      icon: 'Layout',
    },
  ],
  quickHighlights: [
    {
      label: 'Core Focus',
      value: '.NET & SQL',
      detail: 'Enterprise Web & Backend Systems',
    },
    {
      label: 'Database Specialty',
      value: 'MySQL & Stored Procedures',
      detail: 'ACID Transactions & Query Tuning',
    },
    {
      label: 'Integrations',
      value: 'REST & Gateways',
      detail: 'Payment, SMS, Auth & Public APIs',
    },
    {
      label: 'Himalayan Roots',
      value: 'Sikkim / Darjeeling',
      detail: 'Landscape & Mountain Photography',
    },
  ],
};
