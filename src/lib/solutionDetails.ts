import { brand } from './tokens';

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface UseCase {
  id: string;
  title: string;
  industry: string;
  problem: string;
  solution: string;
  icon: string;
}

export interface SolutionDetail {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  icon: string;
  accentColor: string;
  heroImage: string;
  features: Feature[];
  useCases: UseCase[];
  technologies: string[];
  industries: string[];
  cta: string;
}

export const solutionDetails: Record<string, SolutionDetail> = {
  websites: {
    id: 'website',
    slug: 'websites',
    title: 'Websites',
    subtitle: 'Business websites, landing pages & corporate sites',
    description:
      'We build fast, beautiful websites that convert visitors into customers. From simple landing pages to complex e-commerce platforms.',
    longDescription:
      'Your website is often the first impression potential customers have of your business. We design and build websites that not only look stunning but also convert visitors into customers. Our websites are built with performance, accessibility, and SEO in mind.',
    icon: '🌐',
    accentColor: brand.orange,
    heroImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80',
    features: [
      {
        id: 'responsive',
        title: 'Fully Responsive',
        description: 'Perfect on mobile, tablet, and desktop',
        icon: '📱',
      },
      {
        id: 'fast',
        title: 'Lightning Fast',
        description: 'Optimized for speed and performance',
        icon: '⚡',
      },
      {
        id: 'seo',
        title: 'SEO Optimized',
        description: 'Built to rank on Google from day one',
        icon: '📈',
      },
      {
        id: 'secure',
        title: 'Secure & Reliable',
        description: 'HTTPS, backups, and monitoring included',
        icon: '🔒',
      },
      {
        id: 'support',
        title: 'Ongoing Support',
        description: 'We maintain and update your site',
        icon: '🤝',
      },
      {
        id: 'analytics',
        title: 'Analytics Ready',
        description: 'Track visitors and conversions',
        icon: '📊',
      },
    ],
    useCases: [
      {
        id: 'startup',
        title: 'Startup Landing Page',
        industry: 'Tech Startup',
        problem: 'Need to validate idea and capture leads quickly',
        solution: 'Fast, conversion-focused landing page with analytics',
        icon: '🚀',
      },
      {
        id: 'corporate',
        title: 'Corporate Website',
        industry: 'Enterprise',
        problem: 'Complex information architecture and multiple departments',
        solution: 'Scalable website with content management system',
        icon: '🏢',
      },
      {
        id: 'ecommerce',
        title: 'E-commerce Store',
        industry: 'Retail',
        problem: 'Need to sell online with inventory management',
        solution: 'Full e-commerce platform with payment processing',
        icon: '🛍️',
      },
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    industries: ['Tech', 'Retail', 'Finance', 'Healthcare', 'SaaS'],
    cta: 'Build Your Website',
  },
  applications: {
    id: 'application',
    slug: 'applications',
    title: 'Applications',
    subtitle: 'Web & mobile apps built for performance',
    description:
      'Native and cross-platform applications that solve real problems. Scalable, maintainable, and user-focused.',
    longDescription:
      'Web and mobile applications that your users love. We build apps using modern technologies and best practices, ensuring they are scalable, maintainable, and delightful to use.',
    icon: '📱',
    accentColor: brand.orange,
    heroImage: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=80',
    features: [
      {
        id: 'native',
        title: 'Native Performance',
        description: 'Fast and responsive user experiences',
        icon: '⚡',
      },
      {
        id: 'cross-platform',
        title: 'Cross-Platform',
        description: 'iOS, Android, and Web from one codebase',
        icon: '🌐',
      },
      {
        id: 'offline',
        title: 'Works Offline',
        description: 'Continue working without internet',
        icon: '📡',
      },
      {
        id: 'realtime',
        title: 'Real-time Sync',
        description: 'Instant data synchronization',
        icon: '🔄',
      },
      {
        id: 'analytics',
        title: 'Built-in Analytics',
        description: 'Track user behavior and usage',
        icon: '📊',
      },
      {
        id: 'secure',
        title: 'Enterprise Security',
        description: 'Bank-level encryption and compliance',
        icon: '🔐',
      },
    ],
    useCases: [
      {
        id: 'delivery',
        title: 'Delivery App',
        industry: 'Logistics',
        problem: 'Real-time tracking and route optimization needed',
        solution: 'GPS-enabled app with real-time updates',
        icon: '🚚',
      },
      {
        id: 'marketplace',
        title: 'Marketplace App',
        industry: 'E-commerce',
        problem: 'Need platform for buyers and sellers',
        solution: 'Two-sided marketplace with escrow and ratings',
        icon: '🏪',
      },
      {
        id: 'saas',
        title: 'SaaS Dashboard',
        industry: 'Business Software',
        problem: 'Complex data visualization and management',
        solution: 'Interactive dashboard with real-time analytics',
        icon: '📈',
      },
    ],
    technologies: ['React', 'React Native', 'Node.js', 'PostgreSQL', 'AWS'],
    industries: ['Tech', 'E-commerce', 'Healthcare', 'Finance', 'Logistics'],
    cta: 'Build Your App',
  },
  'business-systems': {
    id: 'business-system',
    slug: 'business-systems',
    title: 'Business Systems',
    subtitle: 'Industry-specific management software',
    description:
      'Hospital systems, POS, inventory, HR, logistics. Purpose-built software that streamlines operations.',
    longDescription:
      'Specialized business systems designed for specific industries. From hospital management to restaurant POS, we build software that solves real operational challenges and improves efficiency.',
    icon: '⚙️',
    accentColor: brand.orange,
    heroImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80',
    features: [
      {
        id: 'customizable',
        title: 'Fully Customizable',
        description: 'Built for your exact workflows',
        icon: '🔧',
      },
      {
        id: 'multi-user',
        title: 'Multi-User Support',
        description: 'Unlimited users with role-based access',
        icon: '👥',
      },
      {
        id: 'reporting',
        title: 'Advanced Reporting',
        description: 'Custom reports and analytics dashboards',
        icon: '📊',
      },
      {
        id: 'integration',
        title: 'Easy Integration',
        description: 'Connect with existing systems and tools',
        icon: '🔗',
      },
      {
        id: 'mobile',
        title: 'Mobile Access',
        description: 'Manage from anywhere on any device',
        icon: '📱',
      },
      {
        id: 'training',
        title: 'Full Training',
        description: 'We train your team thoroughly',
        icon: '🎓',
      },
    ],
    useCases: [
      {
        id: 'hospital',
        title: 'Hospital Management',
        industry: 'Healthcare',
        problem: 'Paper records and manual processes',
        solution: 'Digital patient records, appointments, billing',
        icon: '🏥',
      },
      {
        id: 'restaurant',
        title: 'Restaurant POS',
        industry: 'Food & Beverage',
        problem: 'Inventory management and sales tracking',
        solution: 'Complete POS with kitchen display system',
        icon: '🍽️',
      },
      {
        id: 'school',
        title: 'School Management',
        industry: 'Education',
        problem: 'Student records, attendance, fees',
        solution: 'Integrated school management platform',
        icon: '🎓',
      },
    ],
    technologies: ['Django', 'React', 'PostgreSQL', 'Docker', 'AWS'],
    industries: ['Healthcare', 'Hospitality', 'Education', 'Retail', 'Logistics'],
    cta: 'Build Your System',
  },
  saas: {
    id: 'saas',
    slug: 'saas',
    title: 'SaaS',
    subtitle: 'Subscription platforms & multi-tenant products',
    description:
      'Scalable SaaS products with recurring revenue. Multi-tenant architecture, user management, and analytics.',
    longDescription:
      'Build a scalable SaaS business with us. We design and develop multi-tenant platforms that support unlimited customers with secure data isolation, subscription management, and comprehensive analytics.',
    icon: '☁️',
    accentColor: brand.orange,
    heroImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80',
    features: [
      {
        id: 'multi-tenant',
        title: 'Multi-Tenant Architecture',
        description: 'Secure isolation for each customer',
        icon: '🏢',
      },
      {
        id: 'subscriptions',
        title: 'Subscription Management',
        description: 'Recurring billing with Stripe/PayPal',
        icon: '💳',
      },
      {
        id: 'scalable',
        title: 'Auto-Scalable',
        description: 'Grows with your customer base',
        icon: '📈',
      },
      {
        id: 'api',
        title: 'REST API',
        description: 'Let customers integrate with you',
        icon: '🔌',
      },
      {
        id: 'compliance',
        title: 'Compliance Ready',
        description: 'GDPR, SOC2, HIPAA support',
        icon: '✅',
      },
      {
        id: 'monitoring',
        title: '24/7 Monitoring',
        description: 'Uptime monitoring and alerts',
        icon: '👁️',
      },
    ],
    useCases: [
      {
        id: 'analytics',
        title: 'Analytics Platform',
        industry: 'Business Intelligence',
        problem: 'SMEs need affordable analytics',
        solution: 'Subscription-based analytics dashboard',
        icon: '📊',
      },
      {
        id: 'project-mgmt',
        title: 'Project Management',
        industry: 'Productivity',
        problem: 'Teams need collaboration tools',
        solution: 'Subscription project management platform',
        icon: '✅',
      },
      {
        id: 'crm',
        title: 'CRM System',
        industry: 'Sales',
        problem: 'Sales teams need customer tracking',
        solution: 'SaaS CRM with automations',
        icon: '💼',
      },
    ],
    technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS'],
    industries: ['Tech', 'Business Software', 'Productivity', 'Analytics'],
    cta: 'Build Your SaaS',
  },
  ai: {
    id: 'ai',
    slug: 'ai',
    title: 'AI & Automation',
    subtitle: 'AI assistants, automation & intelligent tools',
    description:
      'Leverage AI to automate workflows, extract insights, and build intelligent assistants that work 24/7.',
    longDescription:
      'Integrate AI into your business to automate tasks, improve customer service, and gain insights from your data. We build AI-powered solutions using cutting-edge models and best practices.',
    icon: '🤖',
    accentColor: brand.orange,
    heroImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80',
    features: [
      {
        id: 'chatbots',
        title: 'AI Chatbots',
        description: '24/7 customer support automation',
        icon: '💬',
      },
      {
        id: 'automation',
        title: 'Workflow Automation',
        description: 'Automate repetitive tasks',
        icon: '⚙️',
      },
      {
        id: 'analytics',
        title: 'Predictive Analytics',
        description: 'Forecast trends and behavior',
        icon: '🔮',
      },
      {
        id: 'nlp',
        title: 'Natural Language',
        description: 'Understand and process text',
        icon: '📝',
      },
      {
        id: 'cv',
        title: 'Computer Vision',
        description: 'Image recognition and processing',
        icon: '👁️',
      },
      {
        id: 'integration',
        title: 'Easy Integration',
        description: 'Works with your existing tools',
        icon: '🔗',
      },
    ],
    useCases: [
      {
        id: 'customer-support',
        title: 'AI Customer Support',
        industry: 'E-commerce',
        problem: '24/7 support is expensive',
        solution: 'AI chatbot handling 80% of queries',
        icon: '🤖',
      },
      {
        id: 'content',
        title: 'Content Generation',
        industry: 'Marketing',
        problem: 'Creating content takes time',
        solution: 'AI-assisted content creation',
        icon: '✍️',
      },
      {
        id: 'data',
        title: 'Data Analysis',
        industry: 'Business',
        problem: 'Too much data to analyze manually',
        solution: 'AI insights and recommendations',
        icon: '📊',
      },
    ],
    technologies: ['Python', 'OpenAI', 'TensorFlow', 'Node.js', 'AWS'],
    industries: ['Tech', 'E-commerce', 'Healthcare', 'Finance', 'Education'],
    cta: 'Build AI Solution',
  },
  ecommerce: {
    id: 'ecommerce',
    slug: 'ecommerce',
    title: 'E-commerce',
    subtitle: 'Online stores, multi-vendor platforms',
    description:
      'Complete e-commerce solutions with payment processing, inventory management, and customer analytics.',
    longDescription:
      'Launch your online store with a platform built for conversion. We handle the technical complexity so you can focus on selling.',
    icon: '🛒',
    accentColor: brand.orange,
    heroImage: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=1200&q=80',
    features: [
      {
        id: 'storefront',
        title: 'Beautiful Storefront',
        description: 'Conversion-optimized product pages',
        icon: '🛍️',
      },
      {
        id: 'payments',
        title: 'Payment Processing',
        description: 'Accept all major payment methods',
        icon: '💳',
      },
      {
        id: 'inventory',
        title: 'Inventory Management',
        description: 'Real-time stock tracking',
        icon: '📦',
      },
      {
        id: 'shipping',
        title: 'Shipping Integration',
        description: 'Connect with major carriers',
        icon: '🚚',
      },
      {
        id: 'analytics',
        title: 'Sales Analytics',
        description: 'Track conversions and revenue',
        icon: '📊',
      },
      {
        id: 'multi-vendor',
        title: 'Multi-Vendor Support',
        description: 'Multiple sellers on one platform',
        icon: '🏪',
      },
    ],
    useCases: [
      {
        id: 'boutique',
        title: 'Fashion Boutique',
        industry: 'Retail',
        problem: 'Need to reach customers online',
        solution: 'Beautiful e-commerce store',
        icon: '👗',
      },
      {
        id: 'marketplace',
        title: 'Online Marketplace',
        industry: 'E-commerce',
        problem: 'Multiple vendors need platform',
        solution: 'Multi-vendor marketplace',
        icon: '🏪',
      },
      {
        id: 'subscription',
        title: 'Subscription Box',
        industry: 'Retail',
        problem: 'Recurring revenue model needed',
        solution: 'Subscription e-commerce store',
        icon: '📮',
      },
    ],
    technologies: ['Next.js', 'Stripe', 'PostgreSQL', 'Vercel', 'AWS'],
    industries: ['Retail', 'E-commerce', 'Fashion', 'Food', 'Digital Products'],
    cta: 'Build Your Store',
  },
};
