export interface Product {
  id: string;
  title: string;
  category: 'pos' | 'hospital' | 'saas' | 'ecommerce' | 'mobile' | 'analytics' | 'ai';
  description: string;
  imageUrl: string;
  imageAlt: string;
  href: string;
  featured?: boolean;
}

export const products: Product[] = [
  {
    id: 'pos-system',
    title: 'Restaurant POS',
    category: 'pos',
    description: 'Complete point-of-sale system for restaurants',
    imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
    imageAlt: 'Restaurant POS Interface',
    href: '/work/pos-system',
    featured: true,
  },
  {
    id: 'hospital-platform',
    title: 'Hospital Management',
    category: 'hospital',
    description: 'Patient management, appointments, medical records',
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
    imageAlt: 'Hospital Management Dashboard',
    href: '/work/hospital-management',
  },
  {
    id: 'saas-dashboard',
    title: 'Analytics Dashboard',
    category: 'saas',
    description: 'Real-time business intelligence & reporting',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    imageAlt: 'SaaS Analytics Dashboard',
    href: '/work/saas-analytics',
  },
  {
    id: 'ecommerce-platform',
    title: 'E-commerce Platform',
    category: 'ecommerce',
    description: 'Multi-vendor marketplace with payments',
    imageUrl: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=800&q=80',
    imageAlt: 'E-commerce Platform',
    href: '/work/ecommerce-platform',
    featured: true,
  },
  {
    id: 'mobile-app',
    title: 'Delivery Mobile App',
    category: 'mobile',
    description: 'Real-time tracking and order management',
    imageUrl: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80',
    imageAlt: 'Delivery Mobile App',
    href: '/work/delivery-app',
  },
  {
    id: 'ai-assistant',
    title: 'AI Assistant',
    category: 'ai',
    description: 'Intelligent chatbot for customer support',
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
    imageAlt: 'AI Assistant Interface',
    href: '/work/ai-assistant',
  },
];
