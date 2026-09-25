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
      'MATERU was founded with a clear, uncompromising vision: to engineer high-grade, resilient software systems and digital platforms for forward-looking African enterprises and global innovators.',
    paragraphs: [
      'Founded by Gervas Materu—a software engineer and University of Dodoma (UDOM, Class of 2027) graduate—the studio originated from an obsession with architectural precision, clean code, and purpose-built digital tools.',
      'Rather than delivering bloated templates or generic low-quality solutions, MATERU was built to engineer custom digital infrastructure tailored specifically to high-stakes operational workflows and commercial growth.',
      'Today, MATERU stands as a modern software engineering studio, crafting mission-critical hospital management systems, scalable enterprise ERPs, intelligent SaaS platforms, and high-converting web applications.',
      'Our core principle remains relentless: technology should solve real problems, scale reliably, and deliver tangible commercial and human impact.',
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
    role: 'Founder & Principal Software Engineer',
    bio: 'Gervas is a software engineer and system architect specializing in modern distributed web architectures, high-performance applications, and thoughtful digital product engineering.',
    image: '/images/gervasmateru.png',
    background:
      'A software engineering graduate from the University of Dodoma (UDOM, 2027), Gervas founded MATERU with a vision to build world-class digital systems in Tanzania and across Africa. With a deep foundation in computer science, modern full-stack frameworks, and database architecture, he leads MATERU\'s engineering direction and architectural standards.',
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