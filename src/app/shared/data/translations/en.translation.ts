import { SiteTranslation } from '../../models/translation.models';
import { COMPANY_INFO, WHY_DATASPIRE, COMPANY_STATS, APPROACH_STEPS, LEADERSHIP_TEAM } from '../company.data';
import { CORE_SOLUTIONS, DETAILED_DOMAIN_SOLUTIONS } from '../solutions.data';
import { SERVICES_LIST, TECHNOLOGY_SERVICES, DIGITAL_MARKETING_SERVICES } from '../services.data';
import { INDUSTRIES_LIST } from '../industries.data';
import { CAREER_POSITIONS } from '../careers.data';
import { NAV_LINKS, FOOTER_COLUMNS } from '../navigation.data';

export const EN_TRANSLATION: SiteTranslation = {
  lang: 'en',
  nav: {
    links: NAV_LINKS,
    cta: 'Talk to Us',
    tagline: COMPANY_INFO.tagline,
    languageLabel: 'Language'
  },
  home: {
    heroBadge: 'Next-Generation Digital Transformation',
    heroTitlePrefix: 'Turn Data Into',
    heroTitleHighlight: 'Smarter Decisions.',
    heroSubheading: COMPANY_INFO.subheading,
    exploreSolutionsBtn: 'Explore Solutions',
    talkToUsBtn: 'Talk to Us',
    trustBadge: 'Tailored For Your Sector',
    trustTitle: 'Technology Solutions Built Around',
    trustTitleHighlight: 'Your Organization',
    trustSubtitle: 'Engineered to meet the specific operational workflows, compliance frameworks, and reporting structures of institutional ecosystems.',
    trustCards: {
      edu: {
        title: 'Education',
        desc: 'Schools, colleges, universities, and educational institutions requiring streamlined student lifecycle & fee workflows.',
        link: 'View Education Solutions'
      },
      staff: {
        title: 'Staff & Administration',
        desc: 'Solutions for employee, staff, HR, biometric attendance, leave approvals, and administrative operations.',
        link: 'View Staff Solutions'
      },
      smb: {
        title: 'Small & Medium Businesses',
        desc: 'Digital tools and analytics that help businesses organize sales, control stock, and improve daily productivity.',
        link: 'View Business Solutions'
      },
      bank: {
        title: 'Multi-State Cooperative Banks',
        desc: 'Technology solutions for banking operations, branch-wise reporting, MIS dashboards, and audit-ready governance.',
        link: 'View Banking Solutions'
      }
    },
    whatBadge: 'Our Capabilities',
    whatTitle: 'Bridging The Gap Between',
    whatTitleHighlight: 'Complex Data & Simple Execution',
    whatLead: COMPANY_INFO.aboutIntro,
    whatSub: 'Too many organizations struggle with fragmented spreadsheets, isolated legacy systems, and manual bottlenecks. DataSpire creates centralized digital platforms where every department communicates seamlessly.',
    pillars: [
      {
        title: 'Data-Driven Architecture:',
        desc: 'Real-time visibility into operations, enrollment, finances, and member activities.'
      },
      {
        title: 'Zero-Downtime Reliability:',
        desc: 'Secure, cloud-native deployments designed for high durability and continuous uptime.'
      },
      {
        title: 'Tailored User Experience:',
        desc: 'Clean, role-based interfaces designed for rapid staff adoption without friction.'
      }
    ],
    whatBtn: 'Learn About Our Philosophy',
    matrix: {
      insights: {
        title: 'Actionable Insights',
        desc: 'Convert operational numbers into visual leadership scorecards'
      },
      automation: {
        title: 'Workflow Automation',
        desc: 'Eliminate manual data entry and repetitive paperwork'
      },
      security: {
        title: 'Enterprise Security',
        desc: 'Granular role matrices, audit logs, and encrypted backups'
      }
    },
    solutionsBadge: 'Enterprise Capabilities',
    solutionsTitle: 'Solutions That Solve',
    solutionsTitleHighlight: 'Real Business Problems',
    solutionsSubtitle: 'Proven digital solutions engineered to automate operations, unlock hidden data insights, and accelerate institutional growth.',
    viewAllSolutionsBtn: 'View All Domain Modules & Architecture',
    industriesBadge: 'Domain Expertise',
    industriesTitle: 'Purpose-Built Software For',
    industriesTitleHighlight: 'Specialized Sectors',
    industriesSubtitle: 'We understand that a college operates differently from a cooperative bank. Our solutions reflect deep domain specialization.',
    approachBadge: 'Engineering Methodology',
    approachTitle: 'How We Work:',
    approachTitleHighlight: 'From Discovery to Value',
    approachSubtitle: 'A structured, collaborative engineering roadmap ensuring seamless software adoption and measurable ROI.',
    whyBadge: 'The DataSpire Difference',
    whyTitle: 'Why Leading Institutions',
    whyTitleHighlight: 'Trust DataSpire',
    whySubtitle: 'We do not just write code; we partner with your leadership to build sustainable, scalable digital infrastructure.',
    careersHiringBadge: 'Careers & Culture',
    careersTitle: 'Life at DataSpire & Future Opportunities',
    careersDesc: 'While we do not have active openings right now, we are always eager to connect with passionate engineers, analysts, and designers for future opportunities.',
    careersBtn: 'Explore Careers',
    digitalGrowthBadge: 'Digital Marketing Services',
    digitalGrowthTitle: 'Technology + Digital Growth',
    digitalGrowthSubtitle: 'Build your digital presence, reach the right audience, and turn online visibility into measurable growth.',
    digitalGrowthText: 'From software and data solutions to digital marketing, DataSpire helps organizations build better technology and strengthen their digital presence.',
    digitalGrowthBtn: 'Explore Digital Marketing',
    ctaBadge: 'Connect With Our Architects',
    ctaTitle: 'Transform Your Operations With DataSpire Today',
    ctaDesc: "Whether you represent a college, cooperative bank, or growing business, let's discuss how our data and technology solutions can elevate your operations.",
    ctaPrimaryBtn: 'Schedule Strategy Session',
    ctaSecondaryBtn: 'Explore Services'
  },
  about: {
    badge: 'About DataSpire',
    title: 'Technology With a',
    titleHighlight: 'Purpose.',
    lead: COMPANY_INFO.aboutIntro,
    missionTag: 'Our Mission',
    missionTitle: COMPANY_INFO.mission,
    missionDesc: 'We believe software should reduce friction rather than create it. We design intuitive, secure digital systems that eliminate administrative bottlenecks and unlock operational productivity.',
    visionTag: 'Our Vision',
    visionTitle: COMPANY_INFO.vision,
    visionDesc: 'To be the most trusted technology and analytics transformation partner for educational institutions, cooperative banks, and growing enterprises across the nation.',
    leadershipBadge: 'Executive Leadership',
    leadershipTitle: 'Leaders Driving',
    leadershipTitleHighlight: 'Digital Innovation',
    leadershipSubtitle: 'Experienced technology leaders committed to delivering enterprise-grade architectures, operational agility, and institutional success.',
    philBadge: 'Core Philosophy',
    philTitle: 'How We Build For',
    philTitleHighlight: 'Lasting Institutional Impact',
    philSubtitle: 'Software must be built with rigorous engineering standards, strict data governance, and extreme usability.',
    principles: [
      { num: '01', title: 'Technology Expertise', desc: 'Deep mastery in modern web frameworks, resilient databases, API integration, and cloud architecture built on proven best practices.' },
      { num: '02', title: 'Data-Driven Approach', desc: 'Every feature and dashboard is architected to give leadership instant clarity on operational health, enrollments, and transactions.' },
      { num: '03', title: 'Custom Solutions', desc: 'We never force generic one-size-fits-all templates. Our software mirrors your institutional rules, approval matrices, and reporting formats.' },
      { num: '04', title: 'Security-Conscious Development', desc: 'Security is baked in from day one: role-based access control (RBAC), end-to-end data encryption, and immutable audit logs.' },
      { num: '05', title: 'Scalable Architecture', desc: 'Engineered to seamlessly handle surge events—from annual admission rushes to month-end branch audit consolidations—with zero slowdown.' },
      { num: '06', title: 'Long-Term Partnership', desc: 'We act as your dedicated technology arm, offering continuous maintenance, user onboarding, and ongoing system enhancements.' }
    ],
    approachBadge: 'Execution Framework',
    approachTitle: 'Our 6-Step',
    approachTitleHighlight: 'Engineering Methodology',
    approachSubtitle: 'A transparent, milestone-driven framework that guarantees on-time delivery and effortless stakeholder adoption.'
  },
  solutions: {
    heroBadge: 'Enterprise & Institutional Suites',
    heroTitle: 'Tailored Solutions Built for',
    heroTitleHighlight: 'Real Impact',
    heroLead: 'Explore our specialized domain management suites and modular technology components. Every system is fully customizable to your organization\'s hierarchy, policies, and regulatory needs.',
    jumpLabel: 'Jump to Section:',
    jumpPills: [
      { label: '🎓 Education Suite', fragment: 'education-management' },
      { label: '👥 Staff & HR', fragment: 'staff-hr-management' },
      { label: '💼 Small Business', fragment: 'small-business-solutions' },
      { label: '🏦 Co-op Banking MIS', fragment: 'cooperative-banking-solutions' },
      { label: '🚀 Digital Marketing', fragment: 'digital-marketing-growth' },
      { label: '⚡ Core Capabilities', fragment: 'core-solutions' }
    ],
    suitesBadge: 'Institutional Suites',
    suitesTitle: 'Specialized Domain Platforms',
    suitesTitleHighlight: '100% Customizable',
    suitesSubtitle: 'Modular software architectures designed from the ground up for specific institutional workflows.',
    customizableTag: 'Fully Customizable Architecture',
    modulesHeading: 'Key Functional Modules:',
    benefitsHeading: 'Operational Advantages:',
    requestCustomizationBtn: 'Request Customization Walkthrough',
    coreBadge: 'Modular Technology Components',
    coreTitle: 'Cross-Functional',
    coreTitleHighlight: 'Technology Capabilities',
    coreSubtitle: 'Reusable enterprise building blocks that power our platforms and can be integrated into your existing systems.',
    marketingSuiteBadge: 'Digital Marketing Services',
    marketingSuiteTitle: 'Digital Marketing & Growth Solutions',
    marketingSuiteSubtitle: 'Build your digital presence, reach the right audience, and turn online visibility into measurable growth.',
    marketingSuiteDesc: 'DataSpire empowers schools, colleges, educational institutions, small & medium businesses, and organizations with end-to-end digital marketing solutions. From organic search authority to performance PPC advertising, we connect your brand to the right audience and convert visibility into measurable institutional growth.',
    marketingSuiteBtn: 'Explore Digital Marketing Services'
  },
  services: {
    heroBadge: 'Engineering, Analytics & Digital Marketing Services',
    heroTitle: 'Comprehensive Services for',
    heroTitleHighlight: 'Technology & Digital Growth',
    heroLead: 'From modern web engineering and bespoke software to high-throughput data pipelines and result-driven digital marketing strategies, we deliver end-to-end technology execution.',
    jumpLabel: 'Jump to Service:',
    techBadge: 'Core Technology Capabilities',
    techTitle: 'Technology Services',
    techSubtitle: 'Enterprise-grade software, cloud infrastructure, and data systems engineered for performance and security.',
    marketingBadge: 'Digital Marketing Services',
    marketingTitle: 'Digital Marketing Services',
    marketingSubtitle: 'Build your digital presence, reach the right audience, and turn online visibility into measurable growth.'
  },
  industries: {
    heroBadge: 'Target Sectors & Verticals',
    heroTitle: 'Transforming Organizations Across',
    heroTitleHighlight: 'Diverse Industries',
    heroLead: 'We deliver domain-specialized software solutions designed specifically around the operational rhythms, compliance standards, and administrative workflows of key institutional sectors.',
    jumpLabel: 'Jump to Sector:',
    insightsBadge: 'Deep Domain Experience',
    insightsTitle: 'Why Vertical Specialization Matters',
    insightsDesc: 'Educational institutes manage student fees and exam halls; cooperative banks handle branch deposits and regulatory audits; businesses balance inventory and GST invoicing. Generic software fails because it ignores these fundamental nuances.',
    insightsList: [
      { num: '01', title: 'Zero Workflow Compromise', desc: 'We build features that map 100% to your existing hierarchy, designations, and departmental permissions.' },
      { num: '02', title: 'Regulatory Compliance', desc: 'Pre-configured reporting formats that align with university mandates, cooperative registrar filings, and tax laws.' },
      { num: '03', title: 'Faster Time-to-Adoption', desc: 'Intuitive user journeys that allow faculty, branch managers, and office clerks to master the software within days.' }
    ],
    marketingBadge: 'Digital Marketing Services',
    marketingTitle: 'Digital Marketing Services for Every Sector',
    marketingSubtitle: 'Build your digital presence, reach the right audience, and turn online visibility into measurable growth.',
    marketingDesc: 'From software solutions to targeted digital outreach, DataSpire supports educational institutions, schools, colleges, small & medium businesses, and organizations with specialized digital growth strategies.'
  },
  careers: {
    heroBadge: 'Careers at DataSpire',
    heroTitle: 'Life & Opportunities at',
    heroTitleHighlight: 'DataSpire',
    heroLead: 'Discover our culture, our passion for high-impact software, and how we collaborate to build modern data and digital solutions.',
    cultureItems: [
      { icon: '💡', title: 'Real-World Impact', desc: 'Your code will be used daily by thousands of students, faculty, bank officers, and administrative leaders.' },
      { icon: '🚀', title: 'Modern Tech Stacks', desc: 'Work with current Angular, TypeScript, Node.js, cloud infrastructure, and modern data visualization toolsets.' },
      { icon: '🌱', title: 'Continuous Learning', desc: 'A culture of mentorship, structured code reviews, architectural ownership, and professional growth.' }
    ],
    openingsBadge: 'Hiring Status',
    openingsTitle: 'Currently No Openings or',
    openingsTitleHighlight: 'Active Hirings',
    openingsSubtitle: 'We do not have any open vacancies or active hiring positions at this time.',
    noOpeningsBadge: 'Status Notice',
    noOpeningsTitle: 'Currently No Openings or',
    noOpeningsTitleHighlight: 'Active Hirings',
    noOpeningsSubtitle: 'We do not have any open vacancies or active hiring positions at this time.',
    noOpeningsDesc: 'Our team is currently at full capacity. We sincerely thank you for your interest in joining DataSpire. While there are no current openings, we always welcome exceptional talent. You are invited to send your resume for future opportunities, and our recruitment team will reach out when a suitable position becomes available.',
    noOpeningsNote: 'Send your CV/Resume to careers@dataspire.in with your primary skills and experience.',
    futureOpportunitiesBtn: 'Email Resume for Future Openings',
    applyModal: {
      titlePrefix: 'Apply for',
      instructions: 'To apply for this role, please email your resume, portfolio / GitHub links, and a brief introduction to our talent team at:',
      emailLabel: 'Direct Career Application Email:',
      tip: 'Tip for Applicants: Include the job title in your email subject line along with your current notice period.',
      openEmailBtn: 'Open Email Client'
    }
  },
  contact: {
    heroBadge: 'Get in Touch',
    heroTitle: "Let's Build Something",
    heroTitleHighlight: 'Better Together.',
    heroLead: 'Whether you represent a university, a cooperative bank, or a growing business, our team is ready to discuss how we can architect the right technology solution for your organization.',
    cardHeading: 'Contact Information',
    cardSub: 'Reach out directly via WhatsApp, phone, or email, or drop by our office in Pune.',
    waSupportTag: 'Direct WhatsApp Support',
    waSub: 'Instant response for quotes, technical queries & demos.',
    chatWaBtn: 'Chat on WhatsApp',
    generalInquiries: 'General Inquiries',
    phoneLabel: 'Telephone / WhatsApp',
    locationLabel: 'Headquarters',
    desksHeading: 'Departmental Desks',
    desks: {
      business: 'For Business Inquiries:',
      careers: 'For Careers & Hiring:',
      partnerships: 'For Partnerships:'
    },
    formTitle: 'Send Us an Inquiry',
    formSubtitle: 'Fill in your requirements below to connect directly with our team via WhatsApp or Email.',
    waRoutingBadge: 'Instant WhatsApp & Email',
    redirectingText: 'Opening WhatsApp...',
    redirectingSub: 'Your inquiry has been formulated. If WhatsApp did not open automatically, click below:',
    openWaNowBtn: 'Open WhatsApp Now',
    emailRedirectingText: 'Opening Email Client...',
    emailRedirectingSub: 'Your inquiry details have been composed. If your email app did not launch automatically, use the buttons below:',
    openEmailNowBtn: 'Open Default Email App',
    openGmailBtn: 'Open in Gmail (Web)',
    labels: {
      name: 'Your Name',
      email: 'Work Email',
      phone: 'Phone Number',
      organization: 'Organization / Institution Name',
      interestedIn: 'Interested In',
      message: 'Project Requirements / Message',
      sendBtn: 'Send Inquiry via WhatsApp',
      sendWaBtn: 'Send via WhatsApp',
      sendEmailBtn: 'Send via Email',
      chooseMethod: 'Submit Inquiry Via:'
    },
    interestOptions: [
      { value: 'Education Management Solution', label: 'Education Management Solution (Colleges / Schools)' },
      { value: 'Staff & HR Management', label: 'Staff & HR Management (Biometric / Attendance / Payroll)' },
      { value: 'Cooperative Banking Solutions', label: 'Multi-State Cooperative Banking MIS & Analytics' },
      { value: 'Small Business Solutions', label: 'Small & Medium Business Management' },
      { value: 'Data Analytics & BI', label: 'Data Analytics & Business Intelligence' },
      { value: 'Cloud & Custom Software', label: 'Cloud Solutions & Custom Web App Development' },
      { value: 'Other / General Discussion', label: 'Other / General Discussion' }
    ]
  },
  footer: {
    bio: 'DataSpire delivers modern analytics, cloud architecture, custom software, and digital transformation for education, cooperative banking, and growing businesses.',
    headquarters: COMPANY_INFO.contact.location,
    getInTouch: 'Get in Touch',
    generalInquiry: 'General Inquiry',
    directHotline: 'Direct Hotline',
    ctaMicro: 'Ready to transform your organization?',
    scheduleConsultationBtn: 'Schedule Consultation',
    copyright: 'All Rights Reserved.',
    privacy: 'Enterprise Privacy Policy',
    terms: 'Terms of Service',
    security: 'Security Standards',
    columns: {
      companyTitle: FOOTER_COLUMNS.company.title,
      industriesTitle: FOOTER_COLUMNS.industries.title,
      servicesTitle: FOOTER_COLUMNS.services.title
    }
  },
  common: {
    exploreArchitecture: 'Explore Architecture',
    viewDetailedSolution: 'View Detailed Solution',
    coreCapabilities: 'Core Capabilities:',
    standardDeliverables: 'Standard Deliverables:',
    includedModules: 'Included Modules & Solutions:',
    keyBeneficiaries: 'Key Beneficiaries:',
    requiredSkills: 'Required Skills:',
    keyResponsibilities: 'Key Responsibilities & Expectations:',
    applyForRole: 'Apply for Role',
    chatOnWhatsApp: 'Chat on WhatsApp',
    emailUs: 'Email Us'
  },
  data: {
    whyFeatures: WHY_DATASPIRE,
    companyStats: COMPANY_STATS,
    approachSteps: APPROACH_STEPS,
    coreSolutions: CORE_SOLUTIONS,
    domainSuites: DETAILED_DOMAIN_SOLUTIONS,
    servicesList: SERVICES_LIST,
    techServicesList: TECHNOLOGY_SERVICES,
    marketingServicesList: DIGITAL_MARKETING_SERVICES,
    industriesList: INDUSTRIES_LIST,
    careerPositions: CAREER_POSITIONS,
    leadershipTeam: LEADERSHIP_TEAM
  }
};
