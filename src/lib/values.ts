export interface BrandValue {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  icon: string;
  color: string;
  position: 'left' | 'right';
}

export const brandValues: BrandValue[] = [
  {
    id: 'innovative',
    title: 'Innovative',
    description: 'We think beyond the obvious',
    longDescription:
      'Innovation is not about using the latest technology. It\'s about solving problems in ways that create real value. We stay current with emerging technologies and best practices, then apply them thoughtfully to your challenges.',
    icon: '🚀',
    color: '#FF5A36',
    position: 'left',
  },
  {
    id: 'reliable',
    title: 'Reliable',
    description: 'What we build works, always',
    longDescription:
      'Your digital product needs to work reliably. We don\'t build flashy experiences that break under pressure. Every system is architected for stability, security, and performance. You can rely on MATERU.',
    icon: '⚙️',
    color: '#FF5A36',
    position: 'right',
  },
  {
    id: 'human-centered',
    title: 'Human-Centered',
    description: 'Technology should serve people',
    longDescription:
      'The best technology disappears into the background. We design experiences that feel natural, intuitive, and helpful. Your users should feel like the software understands their needs.',
    icon: '❤️',
    color: '#FF5A36',
    position: 'left',
  },
  {
    id: 'impact-driven',
    title: 'Built for Impact',
    description: 'Every feature solves a real problem',
    longDescription:
      'We don\'t build features just because they\'re interesting. We build systems that move your business forward. Every decision is tied to outcomes and measurable results.',
    icon: '📈',
    color: '#FF5A36',
    position: 'right',
  },
  {
    id: 'transparent',
    title: 'Transparent',
    description: 'Clear communication, always',
    longDescription:
      'No jargon. No surprises. We explain what we\'re building, why we\'re building it, and how it works. You stay informed every step of the way.',
    icon: '🔍',
    color: '#FF5A36',
    position: 'left',
  },
];
