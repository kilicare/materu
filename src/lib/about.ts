export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  expertise: string[];
}

export interface ValuePoint {
  title: string;
  description: string;
  icon: string;
}

export const aboutContent = {
  story: {
    title: 'Our Story',
    intro:
      'MATERU was born from frustration. Our founder, Gervas Materu, was tired of seeing businesses struggle with outdated technology and poor digital experiences.',
    paragraphs: [
      'After years working as a developer and consultant, Gervas realized that most companies didn\'t need generic solutions—they needed custom software built specifically for their challenges.',
      'In 2018, MATERU was founded with a simple mission: build digital products that move people forward. Not flashy. Not over-engineered. Just solid, thoughtful technology that solves real problems.',
      'Today, MATERU has grown from a solo founder to a team of talented designers, developers, and strategists. We\'ve built everything from hospital management systems to e-commerce platforms to AI-powered tools.',
      'But our core belief remains unchanged: technology should serve humanity. Every product we build is designed with that principle in mind.',
    ],
  },
  philosophy: {
    title: 'Our Philosophy',
    description:
      'We believe in a few core principles that guide everything we do.',
    values: [
      {
        title: 'User First',
        description:
          'Technology should be built for humans first, not for its own sake. Every feature, every interaction, every line of code should serve the user.',
        icon: '❤️',
      },
      {
        title: 'Quality Over Speed',
        description:
          'We could build faster. We choose to build better. Quality is never a compromise at MATERU.',
        icon: '✨',
      },
      {
        title: 'Transparency Always',
        description:
          'No hidden costs. No surprise delays. You know what you\'re getting and when you\'re getting it.',
        icon: '🔍',
      },
      {
        title: 'Long-Term Thinking',
        description:
          'Your success is our success. We think about the long-term impact of every decision we make.',
        icon: '🌱',
      },
    ] as ValuePoint[],
  },
  founder: {
    name: 'Gervas Materu',
    role: 'Founder & Chief Strategist',
    bio: 'Gervas is a full-stack developer turned entrepreneur who has spent the last 8+ years building digital products. He believes that great technology should be simple, beautiful, and purposeful.',
    image: '/about/founder.webp',
    background:
      'Before starting MATERU, Gervas worked with startups and enterprises across Africa, Europe, and the US, developing expertise in everything from complex business systems to modern web applications. He holds a degree in Computer Science and has spoken at several tech conferences about building scalable digital products.',
  },
  team: [
    {
      id: 'developer-1',
      name: 'John Kipchoge',
      role: 'Senior Full-Stack Developer',
      bio: 'Expert in building scalable backend systems and modern frontends.',
      image: '/team/john.webp',
      expertise: ['Node.js', 'React', 'PostgreSQL', 'AWS', 'DevOps'],
    },
    {
      id: 'designer-1',
      name: 'Sarah Kamau',
      role: 'Head of Design',
      bio: 'Passionate about creating beautiful, intuitive user experiences.',
      image: '/team/sarah.webp',
      expertise: [
        'UX/UI Design',
        'Figma',
        'Accessibility',
        'Design Systems',
        'User Research',
      ],
    },
    {
      id: 'developer-2',
      name: 'David Omondi',
      role: 'Mobile Developer',
      bio: 'Specializes in building high-performance mobile applications.',
      image: '/team/david.webp',
      expertise: ['React Native', 'iOS', 'Android', 'Firebase', 'GraphQL'],
    },
    {
      id: 'strategist',
      name: 'Lucy Mutua',
      role: 'Product Strategist',
      bio: 'Bridges the gap between vision and execution through strategic thinking.',
      image: '/team/lucy.webp',
      expertise: [
        'Product Strategy',
        'User Research',
        'Business Analysis',
        'Project Management',
        'Stakeholder Communication',
      ],
    },
  ] as TeamMember[],
};