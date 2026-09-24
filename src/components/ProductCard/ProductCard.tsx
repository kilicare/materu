'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Product } from '@/lib/products';

interface ProductCardProps {
  product: Product;
  delay?: number;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  delay = 0,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a
      href={product.href}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.6,
        delay,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative flex flex-col overflow-hidden rounded-3xl bg-bg-surface border border-white/[0.08] hover:border-orange/50 transition-all duration-300 shadow-md hover:shadow-[0_20px_40px_-15px_rgba(255,90,54,0.15)] hover:-translate-y-1.5"
    >
      {/* Image Container */}
      <div className="relative h-64 w-full overflow-hidden md:h-80 lg:h-96 rounded-t-3xl">
        <motion.div
          initial={{ scale: 1 }}
          animate={isHovered ? { scale: 1.06 } : { scale: 1 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-full w-full"
        >
          <Image
            src={product.imageUrl}
            alt={product.imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            quality={85}
          />
        </motion.div>

        {/* Smooth gradient blend into card content */}
        <div className="absolute inset-0 bg-gradient-to-t from-bg-surface via-transparent to-black/20" />

        {/* Category Badge - Modern Glassmorphism */}
        <div className="absolute top-4 right-4 z-10">
          <span className="inline-block rounded-full bg-ink/75 backdrop-blur-md border border-white/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-orange shadow-md">
            {product.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="relative flex-1 p-6 md:p-8 flex flex-col justify-between">
        <div>
          <h3 className="mb-2 text-xl font-bold text-ivory md:text-2xl group-hover:text-orange transition-colors duration-240">
            {product.title}
          </h3>

          <p className="mb-6 text-sm text-gray md:text-base leading-relaxed line-clamp-3">
            {product.description}
          </p>
        </div>

        {/* CTA */}
        <div className="inline-flex items-center gap-2 font-semibold text-orange group-hover:translate-x-2 transition-transform duration-240">
          <span>View Project</span>
          <span className="text-lg">→</span>
        </div>
      </div>
    </motion.a>
  );
};
