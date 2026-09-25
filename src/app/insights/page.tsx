'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Heading, Body, Metadata, Label } from '@/components/Typography';
import { Section } from '@/components/Container';
import { Button } from '@/components/Button';
import { blogPosts } from '@/lib/blog';

export default function InsightsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'All Articles' },
    { id: 'technology', label: 'Technology' },
    { id: 'product', label: 'Product' },
    { id: 'ai', label: 'AI' },
    { id: 'business', label: 'Business' },
  ];

  const filteredPosts =
    selectedCategory && selectedCategory !== 'all'
      ? blogPosts.filter(post => post.category === selectedCategory)
      : blogPosts;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <>
      {/* Hero */}
      <Section bgColor="transparent" hasBackgroundImage padding="xl" className="relative">
        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/insight_background.jpg"
            alt="Insights Background"
            fill
            priority
            quality={90}
            className="object-cover"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background/80" />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-16 relative z-10"
        >
          <motion.div variants={itemVariants}>
            <Heading level="h1" className="mb-6">
              INSIGHTS & ARTICLES
            </Heading>
          </motion.div>

          <motion.div variants={itemVariants} className="mx-auto max-w-3xl">
            <Body color="secondary" className="text-lg">
              Thoughts on building digital products, technology trends, and
              business strategy. Written by our team for people like you.
            </Body>
          </motion.div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() =>
                setSelectedCategory(
                  category.id === 'all' ? null : category.id
                )
              }
              className={`rounded-full px-6 py-2 font-semibold transition-all duration-base ${
                (selectedCategory === category.id && category.id !== 'all') ||
                (!selectedCategory && category.id === 'all')
                  ? 'bg-brand text-white shadow-sm'
                  : 'bg-surface text-text-secondary hover:text-brand hover:border-brand/50 border border-border'
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>
      </Section>

      {/* Blog Posts Grid */}
      <Section bgColor="secondary" padding="xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-12"
        >
          {filteredPosts.map((post) => (
            <motion.div key={post.id} variants={itemVariants}>
              <Link href={`/insights/${post.slug}`} className="hoverable">
                <article className="group grid gap-8 md:grid-cols-3 rounded-3xl overflow-hidden bg-surface border border-border hover:border-brand/50 transition-all duration-300 hover:shadow-[0_20px_40px_-15px_rgba(249,115,22,0.15)] hover:-translate-y-1">
                  {/* Image */}
                  <div className="relative h-64 w-full md:col-span-1 overflow-hidden rounded-t-3xl md:rounded-tr-none md:rounded-l-3xl">
                    <Image
                      src={post.image}
                      alt={post.imageAlt}
                      fill
                      className="object-cover group-hover:scale-106 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent md:hidden" />
                  </div>

                  {/* Content */}
                  <div className="col-span-2 p-8 flex flex-col justify-between">
                    {/* Category & Meta */}
                    <div>
                      <div className="flex items-center gap-4 mb-4">
                        <Label className="uppercase text-brand font-semibold">
                          {post.category}
                        </Label>
                        <Metadata>{post.readTime} min read</Metadata>
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-brand transition-colors">
                        {post.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-text-secondary mb-6 line-clamp-2">
                        {post.excerpt}
                      </p>
                    </div>

                    {/* Author & Date */}
                    <div className="flex items-center justify-between pt-6 border-t border-border">
                      <div className="flex items-center gap-3">
                        <Image
                          src={post.authorImage}
                          alt={post.author}
                          width={40}
                          height={40}
                          className="rounded-full border border-border"
                        />
                        <div>
                          <p className="text-sm font-semibold text-foreground">
                            {post.author}
                          </p>
                          <Metadata>
                            {new Date(post.publishedAt).toLocaleDateString()}
                          </Metadata>
                        </div>
                      </div>

                      <motion.div
                        whileHover={{ x: 4 }}
                        className="text-brand font-bold"
                      >
                        Read →
                      </motion.div>
                    </div>
                  </div>
                </article>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredPosts.length === 0 && (
          <motion.div
            variants={itemVariants}
            className="text-center py-16"
          >
            <p className="text-text-secondary mb-6">No articles in this category yet.</p>
            <Button
              variant="secondary"
              onClick={() => setSelectedCategory(null)}
            >
              View All Articles
            </Button>
          </motion.div>
        )}
      </Section>

      {/* Newsletter CTA - Luxury Editorial Card */}
      <Section bgColor="primary" padding="xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="max-w-3xl mx-auto"
        >
          <div className="rounded-3xl border border-light-greige bg-warm-sand p-8 md:p-14 shadow-2xl text-center text-[#1A1917]">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-light-greige text-xs font-mono font-bold uppercase tracking-wider text-[#4A453E] mb-4">
              Weekly Publication
            </div>

            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1917] mb-4">
              Get Articles Like These in Your Inbox
            </h2>

            <p className="text-base md:text-lg text-[#57534E] mb-8 max-w-xl mx-auto leading-relaxed">
              Subscribe to the MATERU journal for insights on building scalable digital products, technology architecture, and engineering strategy.
            </p>

            <motion.form
              variants={itemVariants}
              onSubmit={e => {
                e.preventDefault();
                alert('Thanks for subscribing!');
              }}
              className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
            >
              <input
                type="email"
                placeholder="Enter your work email"
                required
                className="flex-1 rounded-full bg-white border border-light-greige px-6 py-3.5 text-[#1A1917] placeholder-[#8C8479] focus:outline-none focus:ring-2 focus:ring-brand shadow-sm font-medium"
              />
              <Button variant="primary">Subscribe →</Button>
            </motion.form>
          </div>
        </motion.div>
      </Section>
    </>
  );
}