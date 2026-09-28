import { NavItem } from '../models/site.models';

export const NAV_LINKS: NavItem[] = [
  { label: 'Home', route: '/' },
  { label: 'About', route: '/about' },
  { 
    label: 'Solutions', 
    route: '/solutions',
    children: [
      { label: 'Education Management', route: '/solutions', fragment: 'education-management', description: 'Schools, colleges & universities' },
      { label: 'Staff & HR Management', route: '/solutions', fragment: 'staff-hr-management', description: 'Biometric, leave & payroll' },
      { label: 'Small Business Solutions', route: '/solutions', fragment: 'small-business-solutions', description: 'Inventory, billing & sales' },
      { label: 'Cooperative Banking MIS', route: '/solutions', fragment: 'cooperative-banking-solutions', description: 'Multi-branch reporting & audit' },
      { label: 'Data Analytics & BI', route: '/solutions', fragment: 'data-analytics', description: 'Dashboards & KPI reporting' },
      { label: 'Cloud & Custom Software', route: '/solutions', fragment: 'cloud-solutions', description: 'Scalable cloud infrastructure' }
    ]
  },
  { 
    label: 'Services', 
    route: '/services',
    children: [
      { label: 'Web Application Development', route: '/services', fragment: 'web-app-dev', description: 'Modern responsive web apps' },
      { label: 'Enterprise Software', route: '/services', fragment: 'enterprise-software', description: 'Tailored institutional software' },
      { label: 'Data Analytics & Visualization', route: '/services', fragment: 'analytics-visualization', description: 'Interactive visual dashboards' },
      { label: 'Cloud & Infrastructure', route: '/services', fragment: 'cloud-infrastructure', description: 'Secure, high-uptime cloud' },
      { label: 'API & System Integration', route: '/services', fragment: 'api-integration', description: 'Connect legacy systems & APIs' },
      { label: 'Process Automation', route: '/services', fragment: 'automation-services', description: 'Automate repetitive workflows' },
      { label: 'Digital Marketing', route: '/services', fragment: 'digital-marketing', description: 'Complete digital growth strategies' },
      { label: 'SEO (Search Optimization)', route: '/services', fragment: 'seo-services', description: 'Keyword rankings & organic search' },
      { label: 'Social Media Marketing', route: '/services', fragment: 'social-media-marketing', description: 'Audience engagement & brand growth' },
      { label: 'PPC (Pay-Per-Click)', route: '/services', fragment: 'ppc-advertising', description: 'Targeted lead conversion ads' },
      { label: 'Email Marketing', route: '/services', fragment: 'email-marketing', description: 'Automated email campaigns' }
    ]
  },
  { 
    label: 'Industries', 
    route: '/industries',
    children: [
      { label: 'Education & Schools', route: '/industries', fragment: 'education', description: 'K-12, colleges & universities' },
      { label: 'Staff & HR Operations', route: '/industries', fragment: 'staff-hr', description: 'Teaching & non-teaching staff' },
      { label: 'Small & Medium Businesses', route: '/industries', fragment: 'small-medium-businesses', description: 'Retailers, traders & agencies' },
      { label: 'Cooperative Banks', route: '/industries', fragment: 'cooperative-banking', description: 'Urban & multi-state co-op banks' },
      { label: 'Financial Institutions', route: '/industries', fragment: 'financial-institutions', description: 'Societies, trusts & governance' },
      { label: 'Enterprise Organizations', route: '/industries', fragment: 'enterprise-organizations', description: 'Corporate & large organizations' }
    ]
  },
  { label: 'Careers', route: '/careers', badge: 'Hiring' },
  { label: 'Contact', route: '/contact' }
];

export const FOOTER_COLUMNS = {
  company: {
    title: 'Company',
    links: [
      { label: 'About Us', route: '/about' },
      { label: 'Our Approach', route: '/about', fragment: 'our-approach' },
      { label: 'Core Solutions', route: '/solutions', fragment: 'core-solutions' },
      { label: 'Services Suite', route: '/services' },
      { label: 'Careers', route: '/careers' },
      { label: 'Contact Us', route: '/contact' }
    ]
  },
  industries: {
    title: 'Industries',
    links: [
      { label: 'Education & Universities', route: '/industries', fragment: 'education' },
      { label: 'Staff & HR Management', route: '/industries', fragment: 'staff-hr' },
      { label: 'Small & Medium Businesses', route: '/industries', fragment: 'small-medium-businesses' },
      { label: 'Cooperative Banking', route: '/industries', fragment: 'cooperative-banking' },
      { label: 'Financial Institutions', route: '/industries', fragment: 'financial-institutions' },
      { label: 'Enterprise Organizations', route: '/industries', fragment: 'enterprise-organizations' }
    ]
  },
  services: {
    title: 'Services',
    links: [
      { label: 'Web Application Development', route: '/services', fragment: 'web-app-dev' },
      { label: 'Enterprise Software', route: '/services', fragment: 'enterprise-software' },
      { label: 'Data Analytics & Visualization', route: '/services', fragment: 'analytics-visualization' },
      { label: 'Cloud & Infrastructure', route: '/services', fragment: 'cloud-infrastructure' },
      { label: 'Process Automation', route: '/services', fragment: 'automation-services' },
      { label: 'Digital Marketing', route: '/services', fragment: 'digital-marketing' },
      { label: 'SEO & Search Optimization', route: '/services', fragment: 'seo-services' }
    ]
  }
};
