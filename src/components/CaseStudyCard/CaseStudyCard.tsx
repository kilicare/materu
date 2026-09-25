'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { CaseStudy } from '@/lib/caseStudies';
import { Badge } from '@/components/Badge';

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
  layout?: 'featured' | 'default';
}

export const CaseStudyCard: React.FC<CaseStudyCardProps> = ({
  caseStudy,
  layout = 'default',
}) => {
  if (layout === 'featured') {
    return (
      <motion.a
        href={`/work/${caseStudy.slug}`}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="group col-span-1 md:col-span-2 overflow-hidden rounded-3xl bg-surface border border-border hover:border-brand/50 transition-all duration-300 shadow-lg hover:shadow-[0_20px_40px_-15px_rgba(249,115,22,0.15)] hover:-translate-y-1"
      >
        <div className="grid gap-0 md:grid-cols-2">
          {/* Image */}
          <div className="relative h-72 w-full overflow-hidden md:h-full md:min-h-[400px] rounded-t-3xl md:rounded-tr-none md:rounded-l-3xl">
            <motion.div
              className="relative h-full w-full"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <Image
                src={caseStudy.imageUrl}
                alt={caseStudy.imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={85}
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-surface md:hidden to-transparent" />
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center p-8 md:p-12">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Badge variant="brand" size="sm" className="mb-4">
                {caseStudy.category}
              </Badge>
            </motion.div>

            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="mb-4 text-3xl font-bold text-foreground md:text-4xl group-hover:text-brand transition-colors duration-240"
            >
              {caseStudy.title}
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mb-6 text-text-secondary md:text-lg leading-relaxed"
            >
              {caseStudy.shortDescription}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
              className="inline-flex items-center gap-2 font-bold text-brand group-hover:translate-x-2 transition-transform duration-240"
            >
              <span>Read Case Study</span>
              <span>→</span>
            </motion.div>
          </div>
        </div>
      </motion.a>
    );
  }

  // Default layout
  return (
    <motion.a
      href={`/work/${caseStudy.slug}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="group flex flex-col justify-between overflow-hidden rounded-3xl bg-surface hover:border-brand/50 border border-border transition-all duration-300 shadow-md hover:shadow-[0_20px_40px_-15px_rgba(249,115,22,0.15)] hover:-translate-y-1.5"
    >
      {/* Image */}
      <div className="relative h-56 w-full overflow-hidden rounded-t-3xl">
        <motion.div
          className="relative h-full w-full"
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src={caseStudy.imageUrl}
            alt={caseStudy.imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            quality={85}
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-80" />
      </div>

      {/* Content */}
      <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
        <div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Badge variant="brand" size="sm" className="mb-3">
              {caseStudy.category}
            </Badge>
          </motion.div>

          <h3 className="mb-3 text-xl font-bold text-foreground md:text-2xl group-hover:text-brand transition-colors duration-240">
            {caseStudy.title}
          </h3>

          <p className="mb-6 text-sm text-text-secondary leading-relaxed">
            {caseStudy.shortDescription}
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="inline-flex items-center gap-2 text-sm font-bold text-brand group-hover:translate-x-1.5 transition-transform duration-240"
        >
          <span>View Project</span>
          <span>→</span>
        </motion.div>
      </div>
    </motion.a>
  );
};
