import type { ProjectCaseStudy } from '../types/portfolio.ts';

export const projectCaseStudies: ProjectCaseStudy[] = [
  {
    id: 'himalayan-permit-portal',
    title: 'Himalayan Transit & Visitor Permit Engine',
    shortOverview:
      'High-throughput web portal and administrative workflow system for issuing travel permits, checking checkpoint clearances, and processing entry fees securely.',
    category: 'Payment & Booking',
    problem:
      'High seasonal surges caused manual counter bottlenecks, document verification delays, and occasional double-booking or missed fee reconciliation across mountain checkpoints.',
    contribution:
      'Engineered the ASP.NET Core backend API, MySQL database architecture with transactional stored procedures, and end-to-end payment gateway checkout integration.',
    technicalApproach: [
      'Developed REST APIs using ASP.NET Core with strict fluent validation and JWT-based role authorizations.',
      'Designed atomic MySQL stored procedures with pessimistic locking during slot reservations to prevent over-allocation.',
      'Integrated an online payment gateway with webhook verification, encrypted payload signing, and automatic rollback on network dropouts.',
      'Implemented QR-code generation and validation for rapid offline/online scanning at rugged remote checkpoints.',
    ],
    technologies: [
      'ASP.NET Core',
      'C#',
      'MySQL',
      'Stored Procedures',
      'REST APIs',
      'Payment Gateway',
      'Serilog',
      'Tailwind CSS',
    ],
    outcomes: [
      'Successfully sustained 10,000+ daily booking requests during peak tourist seasons with zero race conditions.',
      'Reduced average checkpoint verification time from 4 minutes per visitor group to under 15 seconds via digital QR scans.',
      'Achieved 100% financial settlement audit accuracy through automated webhook event logging.',
    ],
    architectureHighlights: [
      'Pessimistic row locking in MySQL stored procedures to prevent ticket overselling',
      'Idempotent payment webhook listener with replay-attack protection',
      'Centralized Serilog logging with structured context tags for rapid debugging',
    ],
    featured: true,
    isPublicSafe: true,
    imageUrl: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80',
    githubUrl: 'https://github.com/dipeshlepcha',
  },
  {
    id: 'hospitality-booking-engine',
    title: 'Dynamic Tour & Hospitality Reservation System',
    shortOverview:
      'An end-to-end multi-tier reservation platform connecting regional mountain tour operators, homestays, and travelers with automated invoice generation.',
    category: 'Web Applications',
    problem:
      'Local operators struggled with fragmented booking channels, phone-based confirmations, and lack of unified payment receipts and cancellation accounting.',
    contribution:
      'Architected the full-stack solution using ASP.NET Core MVC, responsive customer interfaces, and an administrative control suite with role-based dashboards.',
    technicalApproach: [
      'Built a clean MVC architectural layout separating controllers, service interfaces, repository patterns, and dynamic view models.',
      'Constructed a dynamic pricing and availability calendar calculated via optimized SQL queries.',
      'Implemented automated PDF invoice and voucher generation immediately upon successful payment capture.',
      'Engineered an administrative dashboard for operators with room allotment overrides, seasonal rate multipliers, and booking status filters.',
    ],
    technologies: [
      'C#',
      '.NET 8',
      'ASP.NET Core MVC',
      'MySQL',
      'Bootstrap & Custom CSS',
      'JavaScript',
      'Payment Gateway',
      'IIS',
    ],
    outcomes: [
      'Streamlined reservation confirmations from an average 12-hour wait down to instantaneous instant-confirmation receipts.',
      'Eliminated administrative reconciliation errors with unified payment transaction logs.',
      'Handled over 50 regional homestay and cab operator networks seamlessly in a single unified portal.',
    ],
    architectureHighlights: [
      'Repository pattern decoupling business services from raw MySQL data context',
      'Asynchronous email dispatch queue for invoices and booking confirmations',
      'Time-based tentative lock released automatically after 15 minutes of checkout inactivity',
    ],
    featured: true,
    isPublicSafe: true,
    imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
    githubUrl: 'https://github.com/dipeshlepcha',
  },
  {
    id: 'public-licensing-portal',
    title: 'Administrative Licensing & Audit Management System',
    shortOverview:
      'Enterprise workflow application designed for reviewing trade applications, issuing renewable certificates, and managing compliance inspections.',
    category: 'Enterprise .NET',
    problem:
      'Paper-based permit reviews led to lost records, prolonged approval cycles, and difficulty maintaining a reliable historical audit trail of regulatory decisions.',
    contribution:
      'Designed the multi-stage approval workflow engine, state transition validators, and relational database schema with audit tables.',
    technicalApproach: [
      'Implemented a finite state machine in C# governing application stages (Submitted, Under Review, Inspection Pending, Approved, Rejected).',
      'Authored MySQL triggers and audit log tables that record immutable snapshot changes of license states with user IDs and timestamps.',
      'Built secure document upload handling with file type whitelisting, size limits, and sanitization before disk storage.',
      'Developed administrative report generator exporting compliance summaries in structured Excel and CSV formats.',
    ],
    technologies: [
      '.NET Core',
      'C#',
      'MySQL',
      'Stored Procedures',
      'Entity Framework / Dapper',
      'Serilog',
      'jQuery & Modern JS',
    ],
    outcomes: [
      'Cut license processing turnaround time by 65% across regional administrative departments.',
      'Provided 100% audit compliance with immutable change logs accessible to senior inspectors.',
      'Zero unauthorized document uploads or tampering incidents since launch.',
    ],
    architectureHighlights: [
      'State-machine pattern ensuring strict state transitions without invalid bypasses',
      'Immutable MySQL audit table populated via atomic stored procedures',
      'Robust server-side MIME type inspection for uploaded verification records',
    ],
    featured: false,
    isPublicSafe: true,
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    githubUrl: 'https://github.com/dipeshlepcha',
  },
  {
    id: 'payment-settlement-engine',
    title: 'Payment Gateway Integration & Settlement Pipeline',
    shortOverview:
      'Resilient payment broker middleware facilitating transaction dispatch, signature hashing, idempotency validation, and automated settlement logs.',
    category: 'API & Microservices',
    problem:
      'Intermittent mountain internet connectivity caused dropped gateway callbacks, resulting in duplicate user attempts and customer support disputes.',
    contribution:
      'Engineered a standalone ASP.NET Core payment broker module with retry policies, HMAC-SHA256 signature verification, and idempotency key caching.',
    technicalApproach: [
      'Designed an idempotent API endpoint accepting unique client tokens to prevent double-charging on network dropouts.',
      'Built a webhook receiver that verifies payment provider cryptographic signatures before updating database states.',
      'Scheduled a background worker service in .NET checking pending transactions against gateway status APIs.',
      'Created a diagnostic dashboard providing real-time visibility into transaction success rates and latency.',
    ],
    technologies: [
      'ASP.NET Core Web API',
      'C#',
      'MySQL',
      'Cryptographic HMAC',
      'Worker Services',
      'Serilog',
      'REST APIs',
    ],
    outcomes: [
      'Zero double-charge incidents reported following the deployment of idempotency safeguards.',
      '99.98% webhook reconciliation rate, with automatic status synchronization within 60 seconds.',
      'Handled thousands of monthly payment events with zero data mismatches.',
    ],
    architectureHighlights: [
      'Cryptographic HMAC-SHA256 request and webhook validation layer',
      'Distributed idempotency check table backed by unique database constraints',
      'Background polling worker for orphaned or delayed payment status updates',
    ],
    featured: false,
    isPublicSafe: true,
    imageUrl: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80',
    githubUrl: 'https://github.com/dipeshlepcha',
  },
];
