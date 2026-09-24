'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { BrandValue } from '@/lib/values';

interface ValueCardProps {
  value: BrandValue;
  index: number;
}

export const ValueCard: React.FC<ValueCardProps> = ({ value, index }) => {
  const isLeft = value.position === 'left';

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className={`grid gap-8 md:gap-12 items-center md:grid-cols-2`}
    >
      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 + 0.1 }}
        className={isLeft ? 'md:col-span-1' : 'md:col-span-1 md:order-2'}
      >
        {/* Icon */}
        <motion.div
          className="mb-6 text-6xl"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.3 }}
        >
          {value.icon}
        </motion.div>

        {/* Title */}
        <h3 className="mb-4 text-3xl font-bold text-ivory md:text-4xl">
          {value.title}
        </h3>

        {/* Short Description */}
        <p className="mb-4 text-lg text-gray font-medium">
          {value.description}
        </p>

        {/* Long Description */}
        <p className="text-base text-gray leading-relaxed">
          {value.longDescription}
        </p>
      </motion.div>

      {/* Visual Element - Modern Feature Cards */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 + 0.2, duration: 0.6 }}
        className={isLeft ? 'md:col-span-1 md:order-2' : 'md:col-span-1'}
      >
        <div className="relative h-80 w-full overflow-hidden rounded-3xl bg-bg-surface border border-white/[0.08] shadow-xl hover:border-orange/40 transition-all duration-300">
          {renderVisualContent(value.id, value.icon)}
        </div>
      </motion.div>
    </motion.div>
  );
};

const renderVisualContent = (valueId: string, icon: string) => {
  switch (valueId) {
    case 'innovative':
      return (
        <div className="relative w-full h-full p-8 flex flex-col justify-between overflow-hidden">
          {/* Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-orange/20 blur-3xl pointer-events-none" />

          {/* Header Tag */}
          <div className="flex items-center justify-between z-10">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-orange px-3.5 py-1 rounded-full bg-orange/10 border border-orange/20">
              Future Ready
            </span>
            <span className="text-3xl">{icon}</span>
          </div>

          {/* Central Tech Card */}
          <div className="relative z-10 my-4 p-5 rounded-2xl bg-bg-secondary/90 border border-white/10 backdrop-blur-md shadow-xl">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-2.5 h-2.5 rounded-full bg-orange animate-pulse" />
              <span className="text-xs font-mono text-gray">Modern Tech Stack</span>
            </div>
            <p className="text-sm font-bold text-ivory">Next.js 16 • Turbopack • Tailored Systems</p>
          </div>

          {/* Bottom Metric */}
          <div className="flex items-center justify-between text-xs text-gray z-10 pt-3 border-t border-white/[0.08]">
            <span>Architecture</span>
            <span className="text-orange font-bold">100% Custom Built</span>
          </div>
        </div>
      );

    case 'reliable':
      return (
        <div className="relative w-full h-full p-8 flex flex-col justify-between overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-green-500/15 blur-3xl pointer-events-none" />

          <div className="flex items-center justify-between z-10">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-green-400 px-3.5 py-1 rounded-full bg-green-500/10 border border-green-500/20">
              System Health
            </span>
            <span className="text-3xl">{icon}</span>
          </div>

          <div className="relative z-10 my-4 p-5 rounded-2xl bg-bg-secondary/90 border border-white/10 backdrop-blur-md shadow-xl">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-bold text-ivory">Guaranteed Uptime</span>
              <span className="text-xs font-bold text-green-400">99.99%</span>
            </div>
            <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
              <div className="h-full bg-green-400 rounded-full w-[99.99%]" />
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-gray z-10 pt-3 border-t border-white/[0.08]">
            <span>Status</span>
            <span className="text-green-400 font-bold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-ping" />
              All Systems Operational
            </span>
          </div>
        </div>
      );

    case 'human-centered':
      return (
        <div className="relative w-full h-full p-8 flex flex-col justify-between overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-pink-500/15 blur-3xl pointer-events-none" />

          <div className="flex items-center justify-between z-10">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-pink-400 px-3.5 py-1 rounded-full bg-pink-500/10 border border-pink-500/20">
              User Experience
            </span>
            <span className="text-3xl">{icon}</span>
          </div>

          <div className="relative z-10 my-4 p-5 rounded-2xl bg-bg-secondary/90 border border-white/10 backdrop-blur-md shadow-xl">
            <div className="flex items-center gap-4">
              <div className="text-4xl font-extrabold text-ivory">4.9<span className="text-sm text-gray">/5</span></div>
              <div>
                <p className="text-xs font-bold text-ivory">User Satisfaction Rate</p>
                <p className="text-xs text-gray">Intuitive & accessible UI</p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-gray z-10 pt-3 border-t border-white/[0.08]">
            <span>Accessibility</span>
            <span className="text-pink-400 font-bold">WCAG AA Standard</span>
          </div>
        </div>
      );

    case 'impact-driven':
      return (
        <div className="relative w-full h-full p-8 flex flex-col justify-between overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-orange/20 blur-3xl pointer-events-none" />

          <div className="flex items-center justify-between z-10">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-orange px-3.5 py-1 rounded-full bg-orange/10 border border-orange/20">
              Measurable ROI
            </span>
            <span className="text-3xl">{icon}</span>
          </div>

          <div className="relative z-10 my-4 p-5 rounded-2xl bg-bg-secondary/90 border border-white/10 backdrop-blur-md shadow-xl">
            <div className="flex items-baseline justify-between mb-1">
              <span className="text-2xl font-extrabold text-orange">+140%</span>
              <span className="text-xs text-gray">Avg. Performance Boost</span>
            </div>
            <p className="text-xs text-ivory font-medium">Business outcomes prioritized</p>
          </div>

          <div className="flex items-center justify-between text-xs text-gray z-10 pt-3 border-t border-white/[0.08]">
            <span>Focus</span>
            <span className="text-orange font-bold">Real Business Impact</span>
          </div>
        </div>
      );

    case 'transparent':
    default:
      return (
        <div className="relative w-full h-full p-8 flex flex-col justify-between overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-blue-500/15 blur-3xl pointer-events-none" />

          <div className="flex items-center justify-between z-10">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
              Clear Process
            </span>
            <span className="text-3xl">{icon}</span>
          </div>

          <div className="relative z-10 my-4 p-5 rounded-2xl bg-bg-secondary/90 border border-white/10 backdrop-blur-md shadow-xl space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="text-ivory font-semibold">1. Discovery</span>
              <span className="text-blue-400 font-bold">✓ Clear Specs</span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-ivory font-semibold">2. Build & Launch</span>
              <span className="text-blue-400 font-bold">✓ Live Demos</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-gray z-10 pt-3 border-t border-white/[0.08]">
            <span>Communication</span>
            <span className="text-blue-400 font-bold">Zero Hidden Surprises</span>
          </div>
        </div>
      );
  }
};
