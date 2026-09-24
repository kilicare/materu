export interface ChallengePoint {
  title: string;
  description: string;
}

export interface SolutionPoint {
  title: string;
  description: string;
  icon: string;
}

export interface Outcome {
  metric: string;
  value: string;
  description: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  slug: string;
  category: 'website' | 'application' | 'business-system' | 'saas' | 'ecommerce';
  shortDescription: string;
  fullDescription: string;
  imageUrl: string;
  imageAlt: string;
  heroImage: string;
  challenges: ChallengePoint[];
  solutions: SolutionPoint[];
  outcomes: Outcome[];
  technologies: string[];
  features: string[];
  testimonial?: {
    text: string;
    author: string;
    role: string;
    company: string;
  };
  featured?: boolean;
  layout?: 'featured' | 'default';
  relatedProjects?: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'hospital-management',
    title: 'Hospital Management System',
    slug: 'hospital-management',
    category: 'business-system',
    shortDescription: 'Complete digital transformation for a 200-bed hospital',
    fullDescription:
      'A comprehensive hospital management system built to streamline patient care, appointments, medical records, billing, and staff management. Designed for scalability and reliability in a high-stakes healthcare environment.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
    imageAlt: 'Hospital Management Dashboard',
    heroImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80',
    challenges: [
      {
        title: 'Paper-Based Records',
        description:
          'All patient records were stored in paper files, making retrieval slow and error-prone.',
      },
      {
        title: 'Appointment Chaos',
        description:
          'Manual appointment scheduling led to double-bookings and long wait times.',
      },
      {
        title: 'Billing Errors',
        description:
          'Excel spreadsheets for billing resulted in frequent discrepancies and payment delays.',
      },
      {
        title: 'No Integration',
        description:
          'Different departments used incompatible systems with no way to share data.',
      },
    ],
    solutions: [
      {
        title: 'Digital Patient Records',
        description: 'Secure, searchable digital records accessible to authorized staff',
        icon: '📋',
      },
      {
        title: 'Automated Scheduling',
        description: 'Smart appointment system preventing double-bookings and optimizing slots',
        icon: '📅',
      },
      {
        title: 'Integrated Billing',
        description: 'Automatic billing from treatment records reducing manual entry by 95%',
        icon: '💳',
      },
      {
        title: 'Cross-Department Access',
        description: 'All departments on same system with role-based access control',
        icon: '🔗',
      },
    ],
    outcomes: [
      {
        metric: 'Patient Processing Time',
        value: '60% Reduction',
        description: 'Reduced average patient check-in time from 15 minutes to 6 minutes',
      },
      {
        metric: 'Appointment No-Shows',
        value: '40% Decrease',
        description: 'Automated reminders reduced patients missing appointments',
      },
      {
        metric: 'Billing Errors',
        value: '99% Elimination',
        description: 'Automated system nearly eliminated billing discrepancies',
      },
      {
        metric: 'Staff Efficiency',
        value: '35% Improvement',
        description: 'Administrative staff now spend 35% less time on data entry',
      },
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Docker'],
    features: [
      'Patient Management',
      'Appointment Scheduling',
      'Medical Records',
      'Billing & Payments',
      'Pharmacy Integration',
      'Laboratory Management',
      'Staff Scheduling',
      'Real-time Reports',
    ],
    testimonial: {
      text: 'The system transformed how we operate. What used to take our staff hours now takes minutes. Patient satisfaction has improved significantly.',
      author: 'Dr. John Mwangi',
      role: 'Hospital Director',
      company: 'Nairobi Medical Center',
    },
    featured: true,
    layout: 'featured',
    relatedProjects: ['ecommerce-platform', 'saas-analytics'],
  },
  {
    id: 'ecommerce-platform',
    title: 'Multi-vendor E-commerce Platform',
    slug: 'ecommerce-platform',
    category: 'ecommerce',
    shortDescription: 'Building a marketplace for 500+ vendors',
    fullDescription:
      'A complete e-commerce solution with vendor management, product catalogs, payment processing, and customer analytics. Handles thousands of products and transactions daily.',
    imageUrl: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=800&q=80',
    imageAlt: 'E-commerce Platform',
    heroImage: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=1200&q=80',
    challenges: [
      {
        title: 'Single Vendor Limitation',
        description: 'Platform was limited to a single seller, restricting growth potential.',
      },
      {
        title: 'Manual Payouts',
        description: 'Vendor payments were processed manually, causing delays and errors.',
      },
      {
        title: 'No Analytics',
        description: 'Vendors had no visibility into sales performance or customer behavior.',
      },
    ],
    solutions: [
      {
        title: 'Multi-Tenant Architecture',
        description: 'Secure isolation for each vendor with independent dashboards',
        icon: '🏢',
      },
      {
        title: 'Automated Payouts',
        description: 'Stripe Connect integration for instant vendor payments',
        icon: '💳',
      },
      {
        title: 'Real-time Analytics',
        description: 'Comprehensive dashboards for vendors and platform admins',
        icon: '📊',
      },
    ],
    outcomes: [
      {
        metric: 'Vendor Count',
        value: '500+ Vendors',
        description: 'Platform now supports over 500 active vendors',
      },
      {
        metric: 'Monthly Transactions',
        value: '$2M+ Volume',
        description: 'Processing over $2 million in monthly transactions',
      },
      {
        metric: 'Uptime',
        value: '99.9%',
        description: 'Consistent platform reliability and availability',
      },
    ],
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe', 'AWS'],
    features: [
      'Vendor Dashboards',
      'Product Management',
      'Order Processing',
      'Payment Integration',
      'Shipping Management',
      'Analytics & Reports',
      'Customer Reviews',
      'Multi-language Support',
    ],
    featured: true,
    layout: 'featured',
    relatedProjects: ['hospital-management', 'saas-analytics'],
  },
  {
    id: 'saas-analytics',
    title: 'Business Intelligence SaaS',
    slug: 'saas-analytics',
    category: 'saas',
    shortDescription: 'Real-time analytics platform for SMEs',
    fullDescription:
      'A subscription-based analytics platform that helps small businesses understand their data. Real-time dashboards, custom reports, and actionable insights.',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    imageAlt: 'Analytics Dashboard',
    heroImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80',
    challenges: [
      {
        title: 'Expensive Tools',
        description: 'Existing analytics platforms were too expensive for small businesses.',
      },
      {
        title: 'Complex Setup',
        description: 'Competitors required technical expertise to configure and use.',
      },
      {
        title: 'No Real-time Data',
        description: 'Most tools had delays in data processing and reporting.',
      },
    ],
    solutions: [
      {
        title: 'Affordable Pricing',
        description: 'Tiered subscription plans starting at $29/month',
        icon: '💰',
      },
      {
        title: 'Drag-and-Drop Builder',
        description: 'Intuitive dashboard creation without coding',
        icon: '🎨',
      },
      {
        title: 'Real-time Sync',
        description: 'Instant data updates via WebSocket connections',
        icon: '🔄',
      },
    ],
    outcomes: [
      {
        metric: 'Active Users',
        value: '2,000+',
        description: 'Growing user base across multiple industries',
      },
      {
        metric: 'Monthly Recurring Revenue',
        value: '$50k MRR',
        description: 'Consistent revenue growth from subscriptions',
      },
      {
        metric: 'Customer Retention',
        value: '95%',
        description: 'High customer satisfaction and low churn rate',
      },
    ],
    technologies: ['Vue.js', 'Django', 'PostgreSQL', 'Redis', 'AWS'],
    features: [
      'Custom Dashboards',
      'Data Connectors',
      'Real-time Alerts',
      'Scheduled Reports',
      'Team Collaboration',
      'API Access',
      'White-label Option',
    ],
    layout: 'default',
    relatedProjects: ['ecommerce-platform', 'hospital-management'],
  },
  {
    id: 'delivery-app',
    title: 'Food Delivery Mobile App',
    slug: 'delivery-app',
    category: 'application',
    shortDescription: 'Complete delivery platform with tracking',
    fullDescription:
      'A white-label food delivery app with real-time tracking, order management, ratings, and payment integration.',
    imageUrl: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80',
    imageAlt: 'Delivery App Interface',
    heroImage: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=80',
    challenges: [
      {
        title: 'Platform Fees',
        description: 'Third-party platforms charged high commission fees.',
      },
      {
        title: 'No Customer Data',
        description: 'Restaurants had no access to customer information for marketing.',
      },
      {
        title: 'Limited Control',
        description: 'No control over branding or customer experience.',
      },
    ],
    solutions: [
      {
        title: 'White-label Solution',
        description: 'Fully branded app with restaurant identity',
        icon: '🏷️',
      },
      {
        title: 'Real-time Tracking',
        description: 'GPS-powered order tracking for customers',
        icon: '📍',
      },
      {
        title: 'Direct Customer Access',
        description: 'Full ownership of customer data and relationships',
        icon: '👥',
      },
    ],
    outcomes: [
      {
        metric: 'Downloads',
        value: '50,000+',
        description: 'App downloads across iOS and Android',
      },
      {
        metric: 'Daily Orders',
        value: '10,000+',
        description: 'Average daily order volume',
      },
      {
        metric: 'App Rating',
        value: '4.8 Stars',
        description: 'High customer satisfaction on app stores',
      },
    ],
    technologies: ['React Native', 'Node.js', 'Google Maps API', 'Firebase', 'Stripe'],
    features: [
      'Order Management',
      'Real-time Tracking',
      'Push Notifications',
      'In-app Payments',
      'Ratings & Reviews',
      'Loyalty Program',
      'Promo Codes',
      'Multi-restaurant Support',
    ],
    layout: 'default',
    relatedProjects: ['hospital-management', 'ecommerce-platform'],
  },
];
