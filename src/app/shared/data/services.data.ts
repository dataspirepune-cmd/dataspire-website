import { ServiceItem } from '../models/site.models';

export const TECHNOLOGY_SERVICES: ServiceItem[] = [
  {
    id: 'web-app-dev',
    title: 'Web Application Development',
    description: 'Modern, responsive web applications engineered for speed, cross-platform compatibility, and flawless user experiences across institutions and commercial enterprises.',
    icon: 'code-browser',
    features: [
      'Modern frontend frameworks (Angular / TypeScript)',
      'Responsive design across mobile, tablet, and widescreen',
      'Progressive Web App (PWA) offline capabilities',
      'Accessibility (a11y) and SEO-optimized structures'
    ],
    deliverables: [
      'Production-ready web application',
      'Responsive UI component library',
      'Cross-browser validation suite',
      'Deployment & hosting documentation'
    ]
  },
  {
    id: 'enterprise-software',
    title: 'Enterprise Software Development',
    description: 'Robust, bespoke enterprise software designed around the specialized workflows, organizational hierarchies, and compliance requirements of institutions.',
    icon: 'server',
    features: [
      'Custom institutional business logic and rules',
      'Role-based permission matrices & audit logging',
      'Modular architecture ready for future enhancements',
      'End-to-end data validation and security sanitization'
    ],
    deliverables: [
      'Custom enterprise application',
      'Role management dashboard',
      'Database schema & data dictionaries',
      'Administrator training guides'
    ]
  },
  {
    id: 'analytics-visualization',
    title: 'Data Analytics & Visualization',
    description: 'Interactive management dashboards, real-time reporting engines, KPI widgets, and visual insights that empower leaders to make confident, data-backed decisions.',
    icon: 'bar-chart',
    features: [
      'Executive KPI dashboards & drill-down reports',
      'Custom chart engines and interactive visual widgets',
      'Automated daily/weekly summary reports via email/PDF',
      'Trend forecasting and variance detection models'
    ],
    deliverables: [
      'Interactive business intelligence dashboard',
      'Automated reporting scripts',
      'Custom data visualization widgets',
      'Exportable reporting templates'
    ]
  },
  {
    id: 'cloud-infrastructure',
    title: 'Cloud & Infrastructure',
    description: 'High-availability, cost-effective cloud architectures and serverless configurations tailored for reliable institutional data hosting and seamless scaling.',
    icon: 'cloud-cog',
    features: [
      'Cloud environment architecture (AWS / Azure / Hybrid)',
      'Automated database backups & disaster recovery protocols',
      'SSL/TLS encryption, firewall rules, and DDoS protection',
      'Continuous uptime monitoring and auto-scaling policies'
    ],
    deliverables: [
      'Provisioned cloud infrastructure',
      'Automated backup & restore runbooks',
      'Security compliance configuration',
      '24/7 uptime monitoring alerts'
    ]
  },
  {
    id: 'api-integration',
    title: 'API & System Integration',
    description: 'Bridging the gap between legacy tools, biometric devices, payment gateways, and modern software through secure, high-throughput REST APIs.',
    icon: 'git-branch',
    features: [
      'Biometric attendance machine integration',
      'Payment gateway and SMS/WhatsApp notification APIs',
      'Third-party ERP, CRM, and accounting system sync',
      'Secure token-based authentication (OAuth2 / JWT)'
    ],
    deliverables: [
      'Documented REST API endpoints',
      'Biometric sync daemon / middleware',
      'Payment gateway webhook processors',
      'Integration testing suite'
    ]
  },
  {
    id: 'database-solutions',
    title: 'Database Solutions',
    description: 'Professional relational and document database design, query optimization, data indexing, and migration pipelines ensuring rapid data access and zero data loss.',
    icon: 'database',
    features: [
      'Normalized relational database modeling (PostgreSQL / MySQL)',
      'High-performance indexing and query tuning',
      'Legacy database migration and cleanup pipelines',
      'Data integrity constraints and automated daily snapshots'
    ],
    deliverables: [
      'Optimized database schema',
      'Data migration scripts',
      'Automated backup routines',
      'Query performance benchmark report'
    ]
  },
  {
    id: 'automation-services',
    title: 'Automation Solutions',
    description: 'Eliminating repetitive human overhead by automating multi-step administrative workflows, batch processing, notifications, and scheduled reconciliations.',
    icon: 'cpu-chip',
    features: [
      'Automated recurring fee invoice generation',
      'Scheduled salary and attendance deduction computations',
      'Event-triggered SMS/Email alert dispatches',
      'Automated cross-departmental approval routing'
    ],
    deliverables: [
      'Configured automation workflow engine',
      'Automated cron job schedules',
      'Exception handling & audit notification system',
      'Workflow configuration manual'
    ]
  },
  {
    id: 'maintenance-support',
    title: 'Maintenance & Support',
    description: 'Dedicated long-term technology partnership offering proactive system health monitoring, security patch management, bug fixes, and continuous improvements.',
    icon: 'shield-check',
    features: [
      'Guaranteed SLA response times for critical issues',
      'Regular security audits and dependency updates',
      'Performance tuning and server resource optimization',
      'Dedicated technical helpdesk for admin staff'
    ],
    deliverables: [
      'Monthly system health & performance reports',
      'Regular security & feature update rollouts',
      'Priority ticket response SLA',
      'Staff refresher training sessions'
    ]
  }
];

export const DIGITAL_MARKETING_SERVICES: ServiceItem[] = [
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    description: 'Complete digital marketing strategies to improve online visibility, customer engagement, and business growth.',
    icon: 'trending-up',
    features: [
      'Data-driven omni-channel growth & market positioning',
      'Brand reputation, digital presence & reach management',
      'Customer acquisition, funnel optimization & conversion rate (CRO)',
      'Cross-platform performance analytics & ROI attribution'
    ],
    deliverables: [
      'Comprehensive digital growth strategy roadmap',
      'Target audience segmentation & competitor analysis',
      'Monthly performance & reach reporting dashboard',
      'Multi-channel execution & campaign plan'
    ]
  },
  {
    id: 'seo-services',
    title: 'Search Engine Optimization (SEO)',
    description: 'Improve website visibility on search engines through keyword optimization, technical SEO, on-page optimization, and content strategies.',
    icon: 'search',
    features: [
      'Comprehensive technical SEO audit, crawlability & speed optimization',
      'In-depth keyword research & competitor gap analysis',
      'On-page content optimization, meta tags & schema markup',
      'Authority-building link strategies & local search enhancement'
    ],
    deliverables: [
      'Full technical SEO audit & fix roadmap',
      'Target keyword ranking matrix & competitive report',
      'Optimized page metadata & structured data schemas',
      'Monthly organic traffic & search visibility reports'
    ]
  },
  {
    id: 'social-media-marketing',
    title: 'Social Media Marketing',
    description: 'Social media strategy, content planning, audience engagement, and brand promotion across major social platforms.',
    icon: 'share-2',
    features: [
      'Targeted platform strategy (LinkedIn, Instagram, Facebook, X)',
      'Creative content calendar planning & visual asset direction',
      'Audience interaction, community management & sentiment tracking',
      'Brand storytelling, viral campaigns & targeted promotions'
    ],
    deliverables: [
      'Monthly content editorial calendar & graphic creatives',
      'Branded social media visual templates',
      'Engagement, reach & community growth analytics',
      'Audience interaction & messaging runbook'
    ]
  },
  {
    id: 'ppc-advertising',
    title: 'PPC (Pay-Per-Click)',
    description: 'Paid advertising campaigns designed to reach targeted audiences and generate measurable leads and conversions.',
    icon: 'mouse-pointer',
    features: [
      'Google Search, Display Network & YouTube video ad campaigns',
      'Meta (Facebook/Instagram) & LinkedIn targeted audience ads',
      'High-converting landing page optimization & persuasive ad copy',
      'Rigorous A/B split testing for creatives, keywords & bidding'
    ],
    deliverables: [
      'Configured ad campaign accounts & audience segments',
      'High-impact creative banners & persuasive ad copies',
      'Conversion tracking pixels & event setup',
      'ROAS (Return on Ad Spend) & cost-per-lead reports'
    ]
  },
  {
    id: 'email-marketing',
    title: 'Email Marketing',
    description: 'Professional email campaigns, customer communication, promotional campaigns, and automated email strategies.',
    icon: 'mail',
    features: [
      'Subscriber list segmentation & deliverability hygiene',
      'Responsive, branded HTML email template design',
      'Automated drip sequences, onboarding & lead nurture workflows',
      'Subject line A/B testing & click-through rate (CTR) optimization'
    ],
    deliverables: [
      'Custom responsive email templates',
      'Automated welcome & nurture email workflows',
      'Promotional newsletter calendar & scheduling',
      'Open rate, click-through & subscriber engagement reports'
    ]
  }
];

export const SERVICES_LIST: ServiceItem[] = [
  ...TECHNOLOGY_SERVICES,
  ...DIGITAL_MARKETING_SERVICES
];
