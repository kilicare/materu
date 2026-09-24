'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Heading, Body } from '@/components/Typography';
import { Section } from '@/components/Container';
import { ProductCard } from '@/components/ProductCard';
import { products } from '@/lib/products';

export const ProductWall: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Section bgColor="secondary" padding="xl">
      {/* Header */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="mb-16 text-center md:mb-20"
      >
        <motion.div variants={itemVariants}>
          <Heading level="h2" className="mb-6">
            FROM IDEAS
          </Heading>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Heading level="h2" className="mb-6">
            TO DIGITAL PRODUCTS.
          </Heading>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Body color="secondary" className="mx-auto max-w-2xl">
            A showcase of digital products we&apos;ve built. From web apps to
            business systems, each represents a unique challenge solved.
          </Body>
        </motion.div>
      </motion.div>

      {/* Product Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <motion.div key={product.id} variants={itemVariants}>
              <ProductCard product={product} delay={index * 0.1} />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-16 text-center md:mt-20"
      >
        <Link
          href="/work"
          className="inline-flex items-center gap-2 rounded-full bg-orange px-8 py-4 font-bold text-ivory hover:bg-orange/90 transition-all duration-base hover:scale-105"
        >
          View All Projects →
        </Link>
      </motion.div>
    </Section>
  );
};
