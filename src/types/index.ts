// Navigation Types
export interface NavigationItem {
  label: string;
  href: string;
}

// Social Link Types
export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}

// Service Types
export interface Service {
  id: string;
  title: string;
  description: string;
  icon?: string;
  features: string[];
}

// Project Types
export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  year: number;
  tags: string[];
  link?: string;
}

// Testimonial Types
export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar?: string;
}

// Contact Form Types
export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  message: string;
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// SEO Types
export interface SEOProps {
  title: string;
  description: string;
  ogImage?: string;
  canonical?: string;
}
