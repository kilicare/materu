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
          <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/50 to-ink/50" />
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
                  ? 'bg-orange text-ivory'
                  : 'bg-bg-surface text-gray hover:text-orange hover:border-orange/50 border border-gray/20'
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
                <article className="group grid gap-8 md:grid-cols-3 rounded-3xl overflow-hidden bg-bg-surface border border-white/[0.08] hover:border-orange/50 transition-all duration-300 hover:shadow-[0_20px_40px_-15px_rgba(255,90,54,0.15)] hover:-translate-y-1">
                  {/* Image */}
                  <div className="relative h-64 w-full md:col-span-1 overflow-hidden rounded-t-3xl md:rounded-tr-none md:rounded-l-3xl">
                    <Image
                      src={post.image}
                      alt={post.imageAlt}
                      fill
                      className="object-cover group-hover:scale-106 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-surface via-transparent to-transparent md:hidden" />
                  </div>

                  {/* Content */}
                  <div className="col-span-2 p-8 flex flex-col justify-between">
                    {/* Category & Meta */}
                    <div>
                      <div className="flex items-center gap-4 mb-4">
                        <Label className="uppercase text-orange">
                          {post.category}
                        </Label>
                        <Metadata>{post.readTime} min read</Metadata>
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl font-bold text-ivory mb-4 hover:text-orange transition-colors">
                        {post.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-gray mb-6 line-clamp-2">
                        {post.excerpt}
                      </p>
                    </div>

                    {/* Author & Date */}
                    <div className="flex items-center justify-between pt-6 border-t border-gray/20">
                      <div className="flex items-center gap-3">
                        <Image
                          src={post.authorImage}
                          alt={post.author}
                          width={40}
                          height={40}
                          className="rounded-full"
                        />
                        <div>
                          <p className="text-sm font-semibold text-ivory">
                            {post.author}
                          </p>
                          <Metadata>
                            {new Date(post.publishedAt).toLocaleDateString()}
                          </Metadata>
                        </div>
                      </div>

                      <motion.div
                        whileHover={{ x: 4 }}
                        className="text-orange font-bold"
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
            <p className="text-gray mb-6">No articles in this category yet.</p>
            <Button
              variant="secondary"
              onClick={() => setSelectedCategory(null)}
            >
              View All Articles
            </Button>
          </motion.div>
        )}
      </Section>

      {/* Newsletter CTA */}
      <Section bgColor="primary" padding="xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="text-center max-w-2xl mx-auto"
        >
          <motion.div variants={itemVariants} className="mb-8">
            <Heading level="h2" className="mb-6">
              Get Articles Like These in Your Inbox
            </Heading>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-8">
            <Body color="secondary">
              Subscribe to our newsletter for insights on building better digital
              products.
            </Body>
          </motion.div>

          <motion.form
            variants={itemVariants}
            onSubmit={e => {
              e.preventDefault();
              alert('Thanks for subscribing!');
            }}
            className="flex gap-4"
          >
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 rounded-full bg-bg-surface px-6 py-3 text-ivory placeholder-gray/50 focus:outline-none focus:ring-2 focus:ring-orange"
            />
            <Button variant="primary">Subscribe</Button>
          </motion.form>
        </motion.div>
      </Section>
    </>
  );
}