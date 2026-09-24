export interface Solution {
  id: string;
  title: string;
  category: 'website' | 'application' | 'business-system' | 'saas' | 'ai' | 'ecommerce' | 'custom';
  shortDescription: string;
  description: string;
  icon: string;
  accentColor: string;
  href: string;
  examples: string[];
}

export const solutions: Solution[] = [
  {
    id: 'website',
    title: 'Websites',
    category: 'website',
    shortDescription: 'Business websites, landing pages & corporate sites',
    description:
      'We build fast, beautiful websites that convert visitors into customers. From simple landing pages to complex e-commerce platforms.',
    icon: '🌐',
    accentColor: '#FF5A36',
    href: '/solutions/websites',
    examples: ['Business websites', 'Landing pages', 'E-commerce', 'Booking websites'],
  },
  {
    id: 'application',
    title: 'Applications',
    category: 'application',
    shortDescription: 'Web & mobile apps built for performance',
    description:
      'Native and cross-platform applications that solve real problems. Scalable, maintainable, and user-focused.',
    icon: '📱',
    accentColor: '#FF5A36',
    href: '/solutions/applications',
    examples: ['Web apps', 'Mobile apps', 'Native apps', 'Cross-platform'],
  },
  {
    id: 'business-system',
    title: 'Business Systems',
    category: 'business-system',
    shortDescription: 'Industry-specific management software',
    description:
      'Hospital systems, POS, inventory, HR, logistics. Purpose-built software that streamlines operations.',
    icon: '⚙️',
    accentColor: '#FF5A36',
    href: '/solutions/business-systems',
    examples: ['Hospital management', 'Restaurant POS', 'School management', 'Inventory'],
  },
  {
    id: 'saas',
    title: 'SaaS',
    category: 'saas',
    shortDescription: 'Subscription platforms & multi-tenant products',
    description:
      'Scalable SaaS products with recurring revenue. Multi-tenant architecture, user management, and analytics.',
    icon: '☁️',
    accentColor: '#FF5A36',
    href: '/solutions/saas',
    examples: ['Multi-tenant platforms', 'Analytics dashboards', 'Subscription apps', 'Portals'],
  },
  {
    id: 'ai',
    title: 'AI & Automation',
    category: 'ai',
    shortDescription: 'AI assistants, automation & intelligent tools',
    description:
      'Leverage AI to automate workflows, extract insights, and build intelligent assistants that work 24/7.',
    icon: '🤖',
    accentColor: '#FF5A36',
    href: '/solutions/ai',
    examples: ['AI assistants', 'Workflow automation', 'AI integrations', 'Data processing'],
  },
  {
    id: 'ecommerce',
    title: 'E-commerce',
    category: 'ecommerce',
    shortDescription: 'Online stores, multi-vendor platforms',
    description:
      'Complete e-commerce solutions with payment processing, inventory management, and customer analytics.',
    icon: '🛒',
    accentColor: '#FF5A36',
    href: '/solutions/ecommerce',
    examples: ['Online stores', 'Multi-vendor markets', 'Subscription stores', 'Digital products'],
  },
  {
    id: 'custom',
    title: 'Custom Solutions',
    category: 'custom',
    shortDescription: "Your problem, our solution — built from scratch",
    description:
      'Have a unique challenge? We build custom solutions tailored to your exact needs and workflows.',
    icon: '✨',
    accentColor: '#FF5A36',
    href: '/solutions/custom',
    examples: ['Custom software', 'Integration projects', 'Legacy modernization', 'One-of-a-kind builds'],
  },
  {
    id: 'not-sure',
    title: "I'm Not Sure",
    category: 'custom',
    shortDescription: 'Let us help you figure it out',
    description:
      'Unsure what you need? Describe your challenge and we\'ll guide you to the right solution.',
    icon: '🤔',
    accentColor: '#9FA4AC',
    href: '/start-a-project',
    examples: ['Discovery call', 'Consultation', 'Custom assessment'],
  },
];
