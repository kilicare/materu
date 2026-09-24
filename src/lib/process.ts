export interface ProcessStepDetail {
  id: string;
  number: '01' | '02' | '03' | '04' | '05' | '06';
  title: string;
  description: string;
  longDescription: string;
  icon: string;
  details: string[];
  duration: string;
  deliverables: string[];
  activities: {
    title: string;
    description: string;
  }[];
}

export const processSteps: ProcessStepDetail[] = [
  {
    id: 'discover',
    number: '01',
    title: 'DISCOVER',
    description: 'Understand the business, users and problem',
    longDescription:
      'We begin by deeply understanding your business, your users, and the problems you\'re trying to solve. This isn\'t a quick check-in—it\'s a thorough exploration of your industry, competition, goals, and vision.',
    icon: '🔍',
    details: [
      'Initial consultation and goals clarification',
      'User research and market analysis',
      'Competitive landscape review',
      'Requirements documentation',
      'Stakeholder interviews',
      'Technology assessment',
    ],
    duration: '1-2 weeks',
    deliverables: [
      'Project Brief',
      'Research Findings',
      'User Personas',
      'Competitive Analysis',
      'Technical Assessment',
    ],
    activities: [
      {
        title: 'Discovery Workshop',
        description: 'Full-day session with your team to align on vision and goals',
      },
      {
        title: 'User Research',
        description: 'Interviews and surveys with your target users',
      },
      {
        title: 'Technical Audit',
        description: 'Assessment of existing systems and infrastructure',
      },
      {
        title: 'Requirements Documentation',
        description: 'Detailed list of functional and technical requirements',
      },
    ],
  },
  {
    id: 'define',
    number: '02',
    title: 'DEFINE',
    description: 'Clarify requirements and product scope',
    longDescription:
      'Based on what we\'ve learned, we define the exact scope of your project. We clarify what\'s in scope, what\'s not, and why. This is where we set realistic expectations and create a roadmap.',
    icon: '📋',
    details: [
      'Scope definition and feasibility analysis',
      'Technical architecture planning',
      'Resource and timeline estimation',
      'Proposal and agreement',
      'Risk assessment',
      'Success metrics definition',
    ],
    duration: '1-2 weeks',
    deliverables: [
      'Project Proposal',
      'Technical Specification',
      'Project Timeline',
      'Resource Plan',
      'Budget Breakdown',
    ],
    activities: [
      {
        title: 'Scope Definition',
        description: 'Document features, platforms, and integrations',
      },
      {
        title: 'Architecture Planning',
        description: 'Design system architecture and technology stack',
      },
      {
        title: 'Timeline Development',
        description: 'Create detailed project schedule with milestones',
      },
      {
        title: 'Proposal Presentation',
        description: 'Present proposal and answer questions',
      },
    ],
  },
  {
    id: 'design',
    number: '03',
    title: 'DESIGN',
    description: 'Create user experience and interface',
    longDescription:
      'This is where vision becomes visual. Our design team creates intuitive, beautiful interfaces that solve user problems. Every pixel is intentional. Every interaction is purposeful.',
    icon: '🎨',
    details: [
      'Wireframing and user flows',
      'Visual design and prototyping',
      'Interactive mockups and testing',
      'Design system documentation',
      'Accessibility review',
      'Performance optimization review',
    ],
    duration: '2-4 weeks',
    deliverables: [
      'User Flows',
      'Wireframes',
      'Visual Design',
      'Interactive Prototypes',
      'Design System',
      'Design Handoff Specs',
    ],
    activities: [
      {
        title: 'User Flow Mapping',
        description: 'Map out all user journeys and interactions',
      },
      {
        title: 'Low-Fidelity Wireframes',
        description: 'Basic layouts to test structure and flow',
      },
      {
        title: 'High-Fidelity Design',
        description: 'Beautiful, pixel-perfect visual design',
      },
      {
        title: 'Prototype Testing',
        description: 'Test prototypes with real users and iterate',
      },
    ],
  },
  {
    id: 'build',
    number: '04',
    title: 'BUILD',
    description: 'Develop, integrate and test',
    longDescription:
      'Our engineers bring the design to life with clean, maintainable code. We build for performance, security, and scalability. Every line of code is thoughtfully written and thoroughly tested.',
    icon: '⚙️',
    details: [
      'Frontend and backend development',
      'API integration and testing',
      'Security and performance optimization',
      'Quality assurance and bug fixes',
      'Documentation',
      'Code review and refactoring',
    ],
    duration: '4-12 weeks',
    deliverables: [
      'Functional Application',
      'API Documentation',
      'Test Coverage',
      'Security Audit',
      'Performance Report',
      'Developer Documentation',
    ],
    activities: [
      {
        title: 'Sprint Development',
        description: '2-week sprints with regular progress updates',
      },
      {
        title: 'Continuous Testing',
        description: 'Unit tests, integration tests, and QA throughout',
      },
      {
        title: 'Code Reviews',
        description: 'Peer reviews ensuring code quality',
      },
      {
        title: 'Optimization',
        description: 'Performance tuning and security hardening',
      },
    ],
  },
  {
    id: 'launch',
    number: '05',
    title: 'LAUNCH',
    description: 'Deploy and release',
    longDescription:
      'Launch day is the beginning of your product\'s journey. We handle everything from final testing to deployment to monitoring. Your product goes live with confidence.',
    icon: '🚀',
    details: [
      'Final testing and deployment planning',
      'Production environment setup',
      'Team training and documentation',
      'Public launch and monitoring',
      'Launch communications',
      'Post-launch support',
    ],
    duration: '1-2 weeks',
    deliverables: [
      'Production Deployment',
      'User Documentation',
      'Admin Dashboard',
      'Monitoring Setup',
      'Launch Announcement',
      'Support Handbook',
    ],
    activities: [
      {
        title: 'Final QA',
        description: 'Comprehensive testing across all features',
      },
      {
        title: 'Deployment',
        description: 'Deployment to production with rollback plan',
      },
      {
        title: 'Team Training',
        description: 'Train your team on using and managing the system',
      },
      {
        title: 'Launch Monitoring',
        description: '24/7 monitoring during launch week',
      },
    ],
  },
  {
    id: 'evolve',
    number: '06',
    title: 'EVOLVE',
    description: 'Maintain, improve and scale',
    longDescription:
      'Launch is just the beginning. We provide ongoing support, monitor performance, and help you scale. Your product continues to improve based on real user feedback.',
    icon: '📈',
    details: [
      'Ongoing support and maintenance',
      'Performance monitoring and optimization',
      'Feature enhancements based on feedback',
      'Scaling as your business grows',
      'Security updates',
      'Analytics and insights',
    ],
    duration: 'Ongoing',
    deliverables: [
      'Monthly Reports',
      'Performance Analytics',
      'Feature Roadmap',
      'Enhancement Recommendations',
      'Scaling Strategy',
    ],
    activities: [
      {
        title: 'Monitoring & Support',
        description: 'Ongoing technical support and monitoring',
      },
      {
        title: 'Performance Optimization',
        description: 'Continuous optimization based on metrics',
      },
      {
        title: 'Feature Development',
        description: 'New features based on user feedback',
      },
      {
        title: 'Scaling Support',
        description: 'Help scaling infrastructure as you grow',
      },
    ],
  },
];