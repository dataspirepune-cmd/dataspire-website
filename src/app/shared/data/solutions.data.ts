import { SolutionItem } from '../models/site.models';

export const CORE_SOLUTIONS: SolutionItem[] = [
  {
    id: 'data-analytics',
    title: 'Data Analytics',
    subtitle: 'Turn Data Into Actionable Intelligence',
    description: 'Transform raw operational data into meaningful dashboards, multi-dimensional reports, and actionable business insights.',
    icon: 'chart-pie',
    badge: 'Core Competency',
    features: [
      'Interactive executive dashboards',
      'Multi-source data aggregation',
      'Real-time operational KPI tracking',
      'Automated scheduled report distribution'
    ]
  },
  {
    id: 'business-intelligence',
    title: 'Business Intelligence',
    subtitle: 'Strategic Visibility Across Operations',
    description: 'Give leadership and operational management a clear, unified view of performance using interactive dashboards, drill-downs, and KPIs.',
    icon: 'trending-up',
    features: [
      'Executive KPI scorecards',
      'Historical trend & variance analysis',
      'Department-level performance metrics',
      'Custom ad-hoc query capabilities'
    ]
  },
  {
    id: 'cloud-solutions',
    title: 'Cloud Solutions',
    subtitle: 'Resilient, Modern Cloud Infrastructure',
    description: 'Modern cloud-based infrastructure and application solutions engineered for 99.9% uptime, data durability, and effortless scalability.',
    icon: 'cloud',
    features: [
      'Cloud application architecture',
      'Automated backup & disaster recovery',
      'Secure multi-tenant data storage',
      'Cost-optimized cloud resource management'
    ]
  },
  {
    id: 'digital-transformation',
    title: 'Digital Transformation',
    subtitle: 'End-to-End Paperless Workflows',
    description: 'Replace manual processes and paper-heavy workflows with streamlined, auditable digital ecosystems.',
    icon: 'zap',
    badge: 'High Impact',
    features: [
      'Digital approval matrices',
      'Role-based electronic signatures',
      'Paperless document archiving',
      'Standardized institutional workflows'
    ]
  },
  {
    id: 'process-automation',
    title: 'Process Automation',
    subtitle: 'Eliminate Repetitive Operational Overhead',
    description: 'Automate repetitive administrative and operational tasks to reduce turnaround times and eliminate manual human errors.',
    icon: 'cpu',
    features: [
      'Scheduled background job pipelines',
      'Automated email/SMS notification alerts',
      'Cross-system data synchronization',
      'Attendance and payroll computation rules'
    ]
  },
  {
    id: 'custom-software',
    title: 'Custom Software',
    subtitle: 'Engineered for Your Exact Operations',
    description: 'Build enterprise-grade software engineered precisely around the unique processes, hierarchy, and regulations of your organization.',
    icon: 'terminal',
    features: [
      'Tailored business logic & data schemas',
      'Modular micro-architecture',
      'Full source control and data sovereignty',
      'Configurable permission hierarchies'
    ]
  },
  {
    id: 'reporting-mis',
    title: 'Reporting & MIS',
    subtitle: 'Structured Management Information Systems',
    description: 'Generate structured reports, regulatory compliance filings, and management information systems with audit trails.',
    icon: 'file-text',
    features: [
      'Custom report generation engine',
      'One-click PDF/Excel export',
      'Audit logs and change tracking',
      'Regulatory compliance report formats'
    ]
  },
  {
    id: 'application-development',
    title: 'Application Development',
    subtitle: 'Scalable Web & Enterprise Systems',
    description: 'Develop responsive, highly scalable web and enterprise applications designed for performance, accessibility, and high adoption.',
    icon: 'layers',
    features: [
      'Modern Single-Page Applications (SPA)',
      'Cross-device responsive layouts',
      'RESTful backend & API integration',
      'End-to-end security & role authorization'
    ]
  }
];

export const DETAILED_DOMAIN_SOLUTIONS: SolutionItem[] = [
  {
    id: 'education-management',
    title: 'Education Management Solution',
    subtitle: 'For Schools, Colleges, Universities & Educational Institutions',
    description: 'A comprehensive, modular campus administration suite designed to streamline academic, administrative, and student lifecycles. Fully customizable to meet the specific requirements of state universities, autonomous colleges, and school groups.',
    icon: 'graduation-cap',
    badge: 'Customizable Suite',
    modules: [
      'Student Information & Lifecycle Management',
      'Staff & Faculty Records Management',
      'Automated Biometric/RFID Attendance',
      'Fees Collection, Invoicing & Online Payment',
      'Examination, Grading & Hall Ticket Management',
      'Academic Progress Reports & Transcript Generation',
      'Centralized Institution Leadership Dashboard',
      'Parent, Student & Teacher Communication Portal',
      'Digital Document & Certificate Management',
      'Administrative & Committee Workflows'
    ],
    benefits: [
      'Eliminate manual paper registers and fragmented spreadsheets',
      'Give principals, deans, and trustees real-time enrollment and fee collection visibility',
      'Ensure strict data privacy for student records and academic marks'
    ]
  },
  {
    id: 'staff-hr-management',
    title: 'Staff & HR Management Solution',
    subtitle: 'For Teaching/Non-Teaching Staff, Enterprises & Organizations',
    description: 'An integrated workforce management platform designed to automate attendance, leave tracking, document compliance, performance reviews, and administrative operations for organizations with diverse employee cadres.',
    icon: 'users',
    badge: 'Enterprise Workflow',
    modules: [
      'Centralized Employee Master Data Management',
      'Multi-Shift Attendance & Biometric Integration',
      'Leave Management with Hierarchical Approvals',
      'Payroll & Allowance Rule Integration',
      'Performance Appraisal & KPI Management',
      'Granular Role & Permission Access Control',
      'Staff Reports, Service Books & Compliance Logs',
      'Digital Staff Document Repository',
      'Automated Administrative Workflow Engine'
    ],
    benefits: [
      'Seamless coordination between HR, department heads, and accounts',
      'Transparent leave balances and automated overtime/shift calculations',
      'Standardized onboarding, appraisal, and exit workflows'
    ]
  },
  {
    id: 'small-business-solutions',
    title: 'Small & Medium Business Solutions',
    subtitle: 'For Growing Enterprises, Traders & Service Providers',
    description: 'Cost-effective, agile digital tools and operational analytics that help small and medium businesses organize sales, control inventory, manage expenses, and accelerate operational cash flow.',
    icon: 'briefcase',
    badge: 'Productivity Accelerator',
    modules: [
      'Lead & Sales Pipeline Management',
      'Real-Time Stock & Inventory Tracking',
      'Customer Master & Relationship Management',
      'GST-Ready Invoicing & Automated Billing',
      'Vendor & Purchase Order Management',
      'Operational Expense & Cash Flow Tracking',
      'Daily Business Summary Reports',
      'Interactive Sales & Margin Dashboard',
      'Multi-User Access & Role Controls'
    ],
    benefits: [
      'Real-time inventory alerts to prevent stockouts and over-purchasing',
      'Instant billing and automated payment reminders for customers',
      'Clear executive view of daily gross margins and top-performing products'
    ]
  },
  {
    id: 'cooperative-banking-solutions',
    title: 'Multi-State Cooperative Banking Solutions',
    subtitle: 'For Multi-State Cooperative Banks & Financial Societies',
    description: 'Specialized reporting, workflow, MIS, and operational analytics solutions designed to empower cooperative banks with enhanced branch reporting, audit-readiness, and management visibility.',
    icon: 'building-bank',
    badge: 'Specialized Banking Analytics',
    modules: [
      'Executive Management Information System (MIS)',
      'Multi-Branch Consolidated & Branch-Wise Reporting',
      'Banking Staff & Cadre Administration',
      'Customer / Member Information Management',
      'Branch Operational Performance Dashboards',
      'Portfolio & Performance Trend Analytics',
      'Document Archival & Audit Workflow Management',
      'Granular Role-Based Access & Security Rules',
      'Automated Regulatory & Governance Reports',
      'Interactive Financial Data Visualizations',
      'Secure System Integration with Existing Stacks'
    ],
    benefits: [
      'Consolidate multi-branch operational data without manual spreadsheet compilation',
      'Strengthen audit compliance with comprehensive activity logs and user permissions',
      'Equip Board of Directors and CEOs with instant decision-support dashboards'
    ]
  }
];
