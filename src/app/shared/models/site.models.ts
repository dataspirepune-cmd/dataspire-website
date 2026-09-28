export interface NavItem {
  label: string;
  route: string;
  badge?: string;
  fragment?: string;
  children?: { label: string; route: string; fragment: string; description?: string }[];
}

export interface SolutionItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  badge?: string;
  modules?: string[];
  features?: string[];
  benefits?: string[];
  highlight?: boolean;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  deliverables?: string[];
}

export interface IndustryItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  targetAudience: string[];
  keySolutions: string[];
  linkRoute?: string;
  linkFragment?: string;
}

export interface JobPosition {
  id: string;
  title: string;
  department: string;
  experience: string;
  location: string;
  type: string;
  skills: string[];
  description: string;
  requirements: string[];
}

export interface WhyFeature {
  icon: string;
  title: string;
  description: string;
}

export interface CompanyStat {
  value: string;
  label: string;
  description: string;
}

export interface ApproachStep {
  step: string;
  title: string;
  description: string;
  icon: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  roleShort: string;
  image: string;
  bio: string;
  focus: string[];
  department?: string;
  responsibilities?: string[];
}

