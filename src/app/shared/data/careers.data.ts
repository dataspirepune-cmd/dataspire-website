import { JobPosition } from '../models/site.models';

export const CAREER_POSITIONS: JobPosition[] = [
  {
    id: 'frontend-dev',
    title: 'Frontend Developer',
    department: 'Engineering',
    experience: '2 - 4 Years',
    location: 'Pune, Maharashtra (Hybrid)',
    type: 'Full-time',
    skills: ['Angular', 'TypeScript', 'HTML5', 'SCSS', 'REST APIs', 'UI/UX Best Practices'],
    description: 'Build sleek, responsive, and accessible client-facing interfaces for enterprise web applications and institutional management dashboards.',
    requirements: [
      'Strong proficiency in modern Angular (v16+), TypeScript, RxJS, and standalone components',
      'Solid command over responsive layout techniques (CSS Grid, Flexbox, SCSS variables)',
      'Experience integrating REST APIs and handling async state',
      'Commitment to clean code, semantic HTML, and cross-browser consistency'
    ]
  },
  {
    id: 'backend-dev',
    title: 'Backend Developer',
    department: 'Engineering',
    experience: '2 - 5 Years',
    location: 'Pune, Maharashtra (Hybrid)',
    type: 'Full-time',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'PostgreSQL', 'MySQL', 'Authentication/OAuth'],
    description: 'Architect resilient server-side services, data models, and scalable API pipelines powering high-throughput enterprise platforms.',
    requirements: [
      'Hands-on experience building secure RESTful APIs using Node.js/Express or TypeScript',
      'Deep understanding of relational database modeling, indexing, and query optimization',
      'Experience implementing role-based authorization (RBAC) and data sanitization',
      'Familiarity with background workers, caching (Redis), and asynchronous processing'
    ]
  },
  {
    id: 'fullstack-dev',
    title: 'Full Stack Developer',
    department: 'Engineering',
    experience: '3 - 6 Years',
    location: 'Pune, Maharashtra (Hybrid)',
    type: 'Full-time',
    skills: ['Angular', 'Node.js', 'TypeScript', 'SQL', 'Cloud (AWS)', 'REST APIs'],
    description: 'Drive end-to-end feature delivery from front-of-screen interactive components to robust database storage and cloud deployments.',
    requirements: [
      'Proven background across modern frontend (Angular/React) and backend (Node.js/SQL) stacks',
      'Ability to design full application lifecycle architecture from schema to user interaction',
      'Experience with version control (Git), automated testing, and CI/CD pipelines',
      'Passion for solving real-world institutional and administrative workflow challenges'
    ]
  },
  {
    id: 'data-analyst',
    title: 'Data Analyst',
    department: 'Analytics',
    experience: '1 - 4 Years',
    location: 'Pune, Maharashtra',
    type: 'Full-time',
    skills: ['SQL', 'Advanced Excel', 'Power BI / Tableau', 'Data Visualization', 'Python Basics'],
    description: 'Transform complex institutional and operational data into clear, compelling executive dashboards, KPI scorecards, and trend summaries.',
    requirements: [
      'Proficiency in writing complex SQL queries, window functions, and data transformations',
      'Experience building interactive BI dashboards (Power BI / Tableau / Custom Chart engines)',
      'Strong eye for visual storytelling and executive report formatting',
      'Curiosity for finding trends, variances, and actionable operational insights'
    ]
  },
  {
    id: 'business-analyst',
    title: 'Business Analyst',
    department: 'Product & Solutions',
    experience: '2 - 5 Years',
    location: 'Pune, Maharashtra',
    type: 'Full-time',
    skills: ['Requirements Gathering', 'Process Mapping', 'Documentation', 'Client Communication', 'UAT'],
    description: 'Collaborate directly with educational institutions, banks, and enterprises to understand business challenges, map workflows, and define software specs.',
    requirements: [
      'Experience conducting stakeholder discovery sessions and documenting detailed SRS / BRD',
      'Skill in mapping current-state vs future-state workflows using flowcharts and wireframes',
      'Strong verbal and written communication skills with technical and executive stakeholders',
      'Support user acceptance testing (UAT) and staff training rollouts'
    ]
  },
  {
    id: 'ui-ux-designer',
    title: 'UI/UX Designer',
    department: 'Design',
    experience: '2 - 4 Years',
    location: 'Pune, Maharashtra (Hybrid)',
    type: 'Full-time',
    skills: ['Figma', 'User Research', 'Design Systems', 'Wireframing', 'Responsive UI'],
    description: 'Design intuitive, modern, and aesthetically elevated software interfaces for desktop dashboards and mobile user journeys.',
    requirements: [
      'Solid portfolio demonstrating enterprise SaaS or complex dashboard UI/UX design',
      'Mastery of Figma (auto-layout, components, interactive prototypes, design tokens)',
      'Empathy for end users (school staff, branch officers, business managers)',
      'Collaboration skills with frontend developers for pixel-perfect implementation'
    ]
  },
  {
    id: 'cloud-devops',
    title: 'Cloud / DevOps Engineer',
    department: 'Infrastructure',
    experience: '2 - 5 Years',
    location: 'Pune, Maharashtra (Hybrid)',
    type: 'Full-time',
    skills: ['AWS / Azure', 'CI/CD Pipelines', 'Linux', 'Docker', 'Nginx', 'Monitoring'],
    description: 'Ensure rock-solid uptime, security posture, automated build pipelines, and scalable cloud provisioning for all DataSpire solutions.',
    requirements: [
      'Hands-on experience deploying and maintaining applications on AWS/Linux environments',
      'Experience configuring CI/CD pipelines (GitHub Actions / GitLab CI)',
      'Knowledge of containerization (Docker), reverse proxies (Nginx), and SSL certificates',
      'Implementation of monitoring, automated backups, and incident alerting'
    ]
  },
  {
    id: 'qa-tester',
    title: 'QA / Software Tester',
    department: 'Quality Assurance',
    experience: '1 - 3 Years',
    location: 'Pune, Maharashtra',
    type: 'Full-time',
    skills: ['Manual Testing', 'API Testing (Postman)', 'Test Case Authoring', 'Regression Testing', 'Automation Basics'],
    description: 'Safeguard software quality and data integrity by designing meticulous test plans, verifying business logic, and executing edge-case validation.',
    requirements: [
      'Experience writing detailed test cases, test scenarios, and bug reports',
      'Knowledge of API testing using Postman/curl and inspecting network payloads',
      'Familiarity with functional, regression, cross-browser, and mobile responsive testing',
      'Sharp eye for detail and usability flaws'
    ]
  },
  {
    id: 'tech-support-engineer',
    title: 'Technical Support Engineer',
    department: 'Operations & Support',
    experience: '1 - 3 Years',
    location: 'Pune, Maharashtra',
    type: 'Full-time',
    skills: ['Troubleshooting', 'Application Support', 'SQL Basics', 'Client Communication', 'Issue Resolution'],
    description: 'Serve as the primary technical point of contact for institutional administrators, troubleshooting issues and ensuring smooth daily software operations.',
    requirements: [
      'Strong diagnostic and troubleshooting mindset for web applications and user accounts',
      'Basic knowledge of SQL queries to inspect and verify database records',
      'Patient, empathetic, and professional communication skills over phone/email/tickets',
      'Ability to coordinate with development teams for bug escalations'
    ]
  }
];
