export interface ProjectCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  subcategories: {
    id: string;
    name: string;
    description: string;
  }[];
}

export interface ProjectBuilderFormData {
  // Step 1
  category: string;
  // Step 2
  subcategory: string;
  // Step 3
  projectDescription: string;
  // Step 4
  budget: string;
  timeline: string;
  existingSystems: string;
  // Step 5
  name: string;
  email: string;
  phone: string;
  company: string;
  role: string;
  // Progress
  currentStep: number;
}

export const projectCategories: ProjectCategory[] = [
  {
    id: 'website',
    name: 'Website',
    description: 'Marketing sites, landing pages, blogs, portfolios',
    icon: '🌐',
    subcategories: [
      {
        id: 'marketing-site',
        name: 'Marketing Website',
        description: 'Corporate site, product showcase',
      },
      {
        id: 'landing-page',
        name: 'Landing Page',
        description: 'Single-page campaign site',
      },
      {
        id: 'blog-portfolio',
        name: 'Blog or Portfolio',
        description: 'Content site or portfolio showcase',
      },
      {
        id: 'ecommerce',
        name: 'E-commerce Site',
        description: 'Online store with shopping cart',
      },
    ],
  },
  {
    id: 'application',
    name: 'Web Application',
    description: 'Task management, dashboards, SaaS platforms',
    icon: '⚙️',
    subcategories: [
      {
        id: 'task-management',
        name: 'Task Management',
        description: 'Project tracking, todo apps',
      },
      {
        id: 'dashboard',
        name: 'Dashboard',
        description: 'Analytics, metrics visualization',
      },
      {
        id: 'saas-platform',
        name: 'SaaS Platform',
        description: 'Subscription-based software',
      },
      {
        id: 'collaboration',
        name: 'Collaboration Tool',
        description: 'Team communication, document sharing',
      },
    ],
  },
  {
    id: 'business-system',
    name: 'Business System',
    description: 'CRM, ERP, inventory, HR management',
    icon: '📊',
    subcategories: [
      {
        id: 'crm',
        name: 'CRM System',
        description: 'Customer relationship management',
      },
      {
        id: 'erp',
        name: 'ERP System',
        description: 'Enterprise resource planning',
      },
      {
        id: 'inventory',
        name: 'Inventory Management',
        description: 'Stock, warehouse, supply chain',
      },
      {
        id: 'hr-management',
        name: 'HR Management',
        description: 'Employee, payroll, recruitment',
      },
    ],
  },
  {
    id: 'mobile-app',
    name: 'Mobile App',
    description: 'iOS, Android, or cross-platform applications',
    icon: '📱',
    subcategories: [
      {
        id: 'ios-app',
        name: 'iOS App',
        description: 'Apple iPhone/iPad application',
      },
      {
        id: 'android-app',
        name: 'Android App',
        description: 'Android device application',
      },
      {
        id: 'cross-platform',
        name: 'Cross-Platform',
        description: 'iOS + Android with shared codebase',
      },
    ],
  },
  {
    id: 'custom-software',
    name: 'Custom Software',
    description: 'Unique solutions for specific needs',
    icon: '💡',
    subcategories: [
      {
        id: 'desktop-app',
        name: 'Desktop Application',
        description: 'Windows, Mac, Linux software',
      },
      {
        id: 'integration',
        name: 'System Integration',
        description: 'Connect multiple systems together',
      },
      {
        id: 'automation',
        name: 'Process Automation',
        description: 'Automate business workflows',
      },
      {
        id: 'other',
        name: 'Other Custom Solution',
        description: 'Something unique to your business',
      },
    ],
  },
  {
    id: 'ai-solution',
    name: 'AI Solution',
    description: 'Machine learning, NLP, automation with AI',
    icon: '🤖',
    subcategories: [
      {
        id: 'chatbot',
        name: 'Chatbot or Assistant',
        description: 'Conversational AI, customer support',
      },
      {
        id: 'predictive',
        name: 'Predictive Analytics',
        description: 'Forecasting, insights, recommendations',
      },
      {
        id: 'content-generation',
        name: 'Content Generation',
        description: 'AI-powered text, code, or image creation',
      },
      {
        id: 'computer-vision',
        name: 'Computer Vision',
        description: 'Image recognition, video analysis',
      },
    ],
  },
  {
    id: 'not-sure',
    name: "I'm Not Sure",
    description: 'Let\'s figure it out together',
    icon: '❓',
    subcategories: [
      {
        id: 'consultation',
        name: 'Guided Consultation',
        description: 'Schedule a call to discuss',
      },
      {
        id: 'general-inquiry',
        name: 'General Inquiry',
        description: 'Just exploring possibilities',
      },
    ],
  },
];

export const budgetRanges = [
  { id: '5k-10k', label: '$5K - $10K' },
  { id: '10k-25k', label: '$10K - $25K' },
  { id: '25k-50k', label: '$25K - $50K' },
  { id: '50k-100k', label: '$50K - $100K' },
  { id: '100k-plus', label: '$100K+' },
  { id: 'not-sure', label: "I'm not sure" },
];

export const timelineOptions = [
  { id: 'urgent', label: 'ASAP (1-2 months)' },
  { id: 'soon', label: 'Soon (2-4 months)' },
  { id: 'flexible', label: 'Flexible (4+ months)' },
  { id: 'not-set', label: 'Not set yet' },
];

export const roles = [
  'Founder / Entrepreneur',
  'Business Owner',
  'Project Manager',
  'Product Manager',
  'Marketing Lead',
  'CTO / Technical Lead',
  'Consultant / Agency',
  'Other',
];
