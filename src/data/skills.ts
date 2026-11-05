import type { SkillItem } from '../types/portfolio.ts';

export const skillsData: SkillItem[] = [
  // Backend
  {
    name: 'C#',
    category: 'Backend',
    levelDescription: 'Primary programming language for enterprise solutions & services',
    tags: ['OOP', 'LINQ', 'Async/Await', 'Generics'],
    featured: true,
  },
  {
    name: '.NET / ASP.NET Core',
    category: 'Backend',
    levelDescription: 'Web APIs, dependency injection, middleware pipeline, authentication',
    tags: ['ASP.NET Core 8', 'Dependency Injection', 'Entity Framework Core'],
    featured: true,
  },
  {
    name: 'ASP.NET MVC',
    category: 'Backend',
    levelDescription: 'Model-View-Controller architecture for dynamic server-rendered portals',
    tags: ['Razor Views', 'View Models', 'Filters', 'Routing'],
    featured: true,
  },
  {
    name: 'REST APIs',
    category: 'Backend',
    levelDescription: 'Clean RESTful contract design, serialization, status codes, Swagger/OpenAPI',
    tags: ['JSON', 'Swagger', 'Rate Limiting', 'HTTP Standards'],
    featured: true,
  },

  // Database
  {
    name: 'MySQL',
    category: 'Database',
    levelDescription: 'Primary relational database engine for high-reliability systems',
    tags: ['Schema Design', 'InnoDB', 'Indexing', 'Transactions'],
    featured: true,
  },
  {
    name: 'SQL',
    category: 'Database',
    levelDescription: 'Complex relational querying, data aggregation, window functions & views',
    tags: ['Relational Joins', 'Aggregations', 'ACID Compliance'],
    featured: true,
  },
  {
    name: 'Stored Procedures',
    category: 'Database',
    levelDescription: 'Server-side procedural logic, parameters, transactional batch processing',
    tags: ['Atomicity', 'Row Locking', 'Triggers', 'Auditing'],
    featured: true,
  },
  {
    name: 'Database Design & Query Optimization',
    category: 'Database',
    levelDescription: 'Relational normalization, foreign key constraints, execution plan profiling',
    tags: ['EXPLAIN Plans', 'Index Tuning', 'Deadlock Mitigation'],
    featured: false,
  },

  // Frontend
  {
    name: 'HTML5 & Semantic Markup',
    category: 'Frontend',
    levelDescription: 'Accessible, SEO-structured documents with native semantic tags',
    tags: ['Accessibility', 'ARIA', 'Semantic Structure'],
    featured: false,
  },
  {
    name: 'CSS3 & Modern Layouts',
    category: 'Frontend',
    levelDescription: 'Flexbox, CSS Grid, media queries, custom variables & typography',
    tags: ['Flexbox', 'CSS Grid', 'Transitions', 'Custom Properties'],
    featured: false,
  },
  {
    name: 'JavaScript (ES6+)',
    category: 'Frontend',
    levelDescription: 'Modern asynchronous programming, DOM manipulation, Fetch API',
    tags: ['Promises', 'Modules', 'Event Loop'],
    featured: true,
  },
  {
    name: 'TypeScript',
    category: 'Frontend',
    levelDescription: 'Strict typing, interfaces, generic types for rock-solid web apps',
    tags: ['Type Safety', 'Interfaces', 'Generics'],
    featured: true,
  },
  {
    name: 'React',
    category: 'Frontend',
    levelDescription: 'Component lifecycles, hooks, responsive UI state management',
    tags: ['Vite', 'Hooks', 'Component Architecture'],
    featured: true,
  },
  {
    name: 'jQuery',
    category: 'Frontend',
    levelDescription: 'Legacy enterprise portal support, DOM scripting & event bindings',
    tags: ['DOM Traversal', 'AJAX', 'Event Handling'],
    featured: false,
  },
  {
    name: 'Bootstrap',
    category: 'Frontend',
    levelDescription: 'Rapid responsive layouts and admin grid systems',
    tags: ['Grid System', 'Admin UI', 'Utility Classes'],
    featured: false,
  },

  // Tools and Engineering
  {
    name: 'Git & Version Control',
    category: 'Tools and Engineering',
    levelDescription: 'Feature branching, commit hygiene, merge conflict resolution',
    tags: ['GitHub', 'Branching Strategy', 'Code Reviews'],
    featured: true,
  },
  {
    name: 'API & Gateway Integrations',
    category: 'Tools and Engineering',
    levelDescription: 'Payment gateways (Razorpay/SBI ePay), SMS gateways, HMAC signatures',
    tags: ['Webhooks', 'HMAC Verification', 'Idempotency'],
    featured: true,
  },
  {
    name: 'Serilog & Application Logging',
    category: 'Tools and Engineering',
    levelDescription: 'Structured logging, sinks, diagnostic traces, and exception tracking',
    tags: ['Structured Logs', 'File Sinks', 'Diagnostic Context'],
    featured: true,
  },
  {
    name: 'IIS Deployment & Server Setup',
    category: 'Tools and Engineering',
    levelDescription: 'Hosting ASP.NET Core apps, application pools, reverse proxy, SSL bindings',
    tags: ['App Pools', 'Reverse Proxy', 'SSL/TLS'],
    featured: false,
  },
  {
    name: 'Performance & Reliability Testing',
    category: 'Tools and Engineering',
    levelDescription: 'Load profiling, stress testing critical stored procedures & API throughput',
    tags: ['Bottleneck Analysis', 'Latency Profiling'],
    featured: false,
  },
];
