import { ApproachStep, CompanyStat, TeamMember, WhyFeature } from '../models/site.models';

export const COMPANY_INFO = {
  name: 'DataSpire',
  tagline: 'Data. Technology. Transformation.',
  heading: 'Turn Data Into Smarter Decisions.',
  subheading: 'DataSpire helps educational institutions, businesses, and cooperative banks transform data and technology into simple, secure, and actionable digital solutions.',
  aboutIntro: 'DataSpire brings together data, technology, analytics, cloud, and software engineering to help organizations operate smarter and make better decisions.',
  mission: 'Make technology simpler, smarter, and more accessible for organizations.',
  vision: 'Build a connected ecosystem where data and technology help organizations grow.',
  contact: {
    email: 'dataspirepune@gmail.com',
    phone: '+91 86689 31557',
    whatsappNumber: '918668931557',
    whatsappDisplay: '+91 86689 31557',
    location: 'Pune, Maharashtra, India',
    inquiries: {
      business: 'dataspirepune@gmail.com',
      careers: 'dataspirepune@gmail.com',
      partnerships: 'dataspirepune@gmail.com'
    }
  }
};

export const WHY_DATASPIRE: WhyFeature[] = [
  {
    icon: 'data',
    title: 'Data Driven',
    description: 'Make better decisions using meaningful data and analytics tailored to your operational realities.'
  },
  {
    icon: 'shield',
    title: 'Secure',
    description: 'Build solutions with strict data security, encrypted transactions, and role-based access control.'
  },
  {
    icon: 'chart',
    title: 'Scalable',
    description: 'Design robust, modular architectures that effortlessly scale alongside organizational growth.'
  },
  {
    icon: 'user',
    title: 'User Focused',
    description: 'Create intuitive, frictionless digital interfaces that staff, students, and customers can easily adopt.'
  }
];

export const COMPANY_STATS: CompanyStat[] = [
  {
    value: '99.9%',
    label: 'Uptime Reliability',
    description: 'High-availability infrastructure engineered for mission-critical operations.'
  },
  {
    value: '100%',
    label: 'Customizable Solutions',
    description: 'Tailored specifically around organizational workflows and reporting needs.'
  },
  {
    value: '5x',
    label: 'Efficiency Gain',
    description: 'Reduction in manual paperwork, duplicate entry, and administrative turnaround.'
  },
  {
    value: '24/7',
    label: 'Proactive Support',
    description: 'Dedicated technical assistance, regular updates, and continuous optimization.'
  }
];

export const APPROACH_STEPS: ApproachStep[] = [
  {
    step: '01',
    title: 'Understand',
    description: 'We listen deeply to understand your institutional challenges, manual bottlenecks, and organizational goals.',
    icon: 'search'
  },
  {
    step: '02',
    title: 'Analyze',
    description: 'We assess existing data flows, administrative workflows, and system touchpoints to map out high-impact opportunities.',
    icon: 'analytics'
  },
  {
    step: '03',
    title: 'Design',
    description: 'We craft human-centric UI/UX wireframes, role hierarchies, and modular system architectures built for scalability.',
    icon: 'palette'
  },
  {
    step: '04',
    title: 'Develop',
    description: 'We build enterprise-grade software using clean code, strong typing, secure databases, and modern cloud patterns.',
    icon: 'code'
  },
  {
    step: '05',
    title: 'Deploy',
    description: 'We execute seamless migrations, comprehensive user training, and zero-downtime production rollouts.',
    icon: 'rocket'
  },
  {
    step: '06',
    title: 'Improve',
    description: 'We provide continuous maintenance, analytics monitoring, feature enhancements, and dedicated technology partnership.',
    icon: 'refresh'
  }
];

export const LEADERSHIP_TEAM: TeamMember[] = [
  {
    id: 'ceo',
    name: 'Kiran Dhumal',
    role: 'Chief Executive Officer (CEO)',
    roleShort: 'CEO',
    image: 'assets/team/ceo.jpg',
    bio: 'Guiding DataSpire’s strategic vision, institutional partnerships, and digital transformation initiatives across education, banking, and enterprise domains.',
    focus: ['Strategic Vision', 'Enterprise Transformation', 'Operational Excellence']
  },
  {
    id: 'cto',
    name: 'Bajrang Gangnar',
    role: 'Co-Founder & Chief Technology Officer (CTO)',
    roleShort: 'Co-Founder & CTO',
    image: 'assets/team/cto.jpg',
    bio: 'Directing full-stack architecture, software engineering innovation, scalable product design, and next-gen institutional digital ecosystems.',
    focus: ['System Architecture', 'Software Engineering', 'Emerging Tech']
  },
  {
    id: 'cio',
    name: 'Rameshwar Kshirsagar',
    role: 'Chief Information Officer (CIO)',
    roleShort: 'CIO',
    image: 'assets/team/cio.jpg',
    bio: 'Overseeing enterprise information strategy, secure IT governance, cloud systems, and data-driven infrastructure for organizational growth.',
    focus: ['Information Architecture', 'Cloud Governance', 'IT Strategy']
  },
  {
    id: 'marketing-specialist',
    name: 'Prakash Gavali',
    role: 'Digital Marketing Specialist',
    roleShort: 'Marketing Specialist',
    department: 'Digital Marketing',
    image: 'assets/team/prakash-gavali.jpg',
    bio: 'Leading DataSpire’s digital marketing strategy, omni-channel audience growth, search visibility, PPC campaigns, and conversion-focused performance marketing.',
    focus: [
      'Digital Marketing Strategy',
      'SEO & Traffic Analysis',
      'Social Media Marketing',
      'PPC & Lead Generation'
    ],
    responsibilities: [
      'Digital Marketing Strategy',
      'SEO',
      'Social Media Marketing',
      'PPC Campaign Management',
      'Email Marketing',
      'Content & Campaign Planning',
      'Website Traffic Analysis',
      'Lead Generation',
      'Digital Performance Reporting'
    ]
  }
];

