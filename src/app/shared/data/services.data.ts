import { ServiceItem } from '../models/site.models';

export const SERVICES_LIST: ServiceItem[] = [
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
