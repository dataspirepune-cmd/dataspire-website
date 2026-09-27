import { IndustryItem } from '../models/site.models';

export const INDUSTRIES_LIST: IndustryItem[] = [
  {
    id: 'education',
    title: 'Education',
    subtitle: 'Schools, Colleges & Universities',
    description: 'Transforming institutional administration into a cohesive digital ecosystem. From student lifecycle and online fee collection to automated attendance and academic reporting, we make education management frictionless.',
    icon: 'school',
    targetAudience: [
      'K-12 Schools & School Chains',
      'Undergraduate & Postgraduate Colleges',
      'Autonomous Technical Institutes & Universities',
      'Educational Trusts & Society Boards'
    ],
    keySolutions: [
      'Comprehensive Student Information System',
      'Biometric & RFID Smart Attendance',
      'Digital Fee Invoicing & Receipts',
      'Exam Management & Report Cards',
      'Parent-Teacher Communication Portal'
    ],
    linkRoute: '/solutions',
    linkFragment: 'education-management'
  },
  {
    id: 'staff-hr',
    title: 'Staff & HR Operations',
    subtitle: 'Teaching & Non-Teaching Workforce',
    description: 'Automating the complex personnel hierarchies of institutions and enterprises. We provide transparent shift tracking, biometric integration, leave approval workflows, and performance tracking.',
    icon: 'id-card',
    targetAudience: [
      'Faculty & Departmental Heads',
      'Administrative & Non-Teaching Staff',
      'Institutional HR & Accounts Departments',
      'Contractual & Visiting Staff Teams'
    ],
    keySolutions: [
      'Multi-Shift Attendance Recording',
      'Hierarchical Leave Approval Matrices',
      'Payroll Computation Rules',
      'Staff Document & Service Book Archival',
      'Performance Review Dashboards'
    ],
    linkRoute: '/solutions',
    linkFragment: 'staff-hr-management'
  },
  {
    id: 'small-medium-businesses',
    title: 'Small & Medium Businesses',
    subtitle: 'Agile Tools for Commercial Growth',
    description: 'Equipping growing businesses with modern digital tools to track sales pipelines, automate customer invoicing, manage inventory levels, and gain complete visibility into operational profit margins.',
    icon: 'store',
    targetAudience: [
      'Retail & Wholesale Distributors',
      'Professional Service Agencies',
      'Light Manufacturing & Fabricators',
      'Growing Tech & Service Startups'
    ],
    keySolutions: [
      'Real-Time Inventory Management',
      'GST Billing & Quotation Generation',
      'Customer Master & Payment Follow-ups',
      'Expense & Cash Flow Tracking',
      'Daily Gross Profit & Sales Reports'
    ],
    linkRoute: '/solutions',
    linkFragment: 'small-business-solutions'
  },
  {
    id: 'cooperative-banking',
    title: 'Multi-State Cooperative Banks',
    subtitle: 'Financial Institutions & Credit Societies',
    description: 'Elevating cooperative banking administration through modern Management Information Systems (MIS), branch-wise operational reporting, customer information tracking, and audit-ready document workflows.',
    icon: 'landmark',
    targetAudience: [
      'Multi-State Urban Cooperative Banks',
      'Employee Credit Cooperative Societies',
      'District Cooperative Institutions',
      'Cooperative Banking Audit & Compliance Teams'
    ],
    keySolutions: [
      'Multi-Branch Consolidated MIS Dashboards',
      'Branch-Wise Deposit & Advance Monitoring',
      'Member Information & Profile Repository',
      'Role-Based Granular Access Control',
      'Statutory & Audit Log Generation'
    ],
    linkRoute: '/solutions',
    linkFragment: 'cooperative-banking-solutions'
  },
  {
    id: 'financial-institutions',
    title: 'Financial & Administrative Institutions',
    subtitle: 'Governance, Societies & Trusts',
    description: 'Custom software, reporting platforms, and process automation solutions that ensure absolute data accuracy, statutory compliance, and transparent financial governance.',
    icon: 'shield-check',
    targetAudience: [
      'Charitable & Educational Trusts',
      'Government-Aided Autonomous Bodies',
      'Microfinance & Savings Societies',
      'Institutional Accounts & Audit Boards'
    ],
    keySolutions: [
      'Fund Allocation & Grant Tracking',
      'Automated Ledger & Cash Book Summaries',
      'Voucher & Approval Workflow Engines',
      'Statutory Compliance & Audit Trails',
      'Executive Leadership Dashboards'
    ],
    linkRoute: '/solutions',
    linkFragment: 'cooperative-banking-solutions'
  },
  {
    id: 'enterprise-organizations',
    title: 'Enterprise Organizations',
    subtitle: 'Scalable Systems for Complex Workflows',
    description: 'High-throughput custom web applications, cloud infrastructure migrations, data pipelines, and analytics platforms built for large organizations seeking digital transformation.',
    icon: 'building',
    targetAudience: [
      'Multi-Location Corporate Enterprises',
      'Healthcare & Diagnostic Chains',
      'Logistics & Distribution Networks',
      'Large Scale Non-Profit Foundations'
    ],
    keySolutions: [
      'Cloud Architecture & Migration',
      'Bespoke Enterprise Web Portals',
      'Data Analytics & Power BI Pipelines',
      'System API Integration & Middleware',
      '24/7 Managed Application Support'
    ],
    linkRoute: '/solutions',
    linkFragment: 'cloud-solutions'
  }
];
