'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Heading, Body, Metadata, Label } from '@/components/Typography';
import { Section } from '@/components/Container';
import { Button } from '@/components/Button';
import { BlogPost } from '@/lib/blog';

interface BlogPostPageProps {
  post: BlogPost;
  relatedPosts: BlogPost[];
}

export const BlogPostPage: React.FC<BlogPostPageProps> = ({
  post,
  relatedPosts,
}) => {
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
      <Section bgColor="primary" padding="xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <Label className="uppercase text-orange">{post.category}</Label>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-6">
            <Heading level="h1">{post.title}</Heading>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-6 text-sm text-gray"
          >
            <div className="flex items-center gap-3">
              <Image
                src={post.authorImage}
                alt={post.author}
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="font-semibold text-ivory">{post.author}</span>
            </div>
            <span>•</span>
            <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
            <span>•</span>
            <span>{post.readTime} min read</span>
          </motion.div>
        </motion.div>

        {/* Featured Image */}
        <motion.div
          variants={itemVariants}
          className="relative h-96 max-w-4xl mx-auto rounded-3xl overflow-hidden border border-white/10 shadow-2xl mb-12"
        >
          <Image
            src={post.image}
            alt={post.imageAlt}
            fill
            className="object-cover"
            quality={90}
          />
        </motion.div>
      </Section>

      {/* Content */}
      <Section bgColor="secondary" padding="xl">
        <motion.article
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-3xl mx-auto prose prose-invert"
        >
          <div
            dangerouslySetInnerHTML={{ __html: post.content }}
            className="space-y-6 text-gray [&>h1]:text-4xl [&>h1]:font-bold [&>h1]:text-ivory [&>h1]:mt-12 [&>h1]:mb-6 [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-ivory [&>h2]:mt-10 [&>h2]:mb-4 [&>p]:leading-relaxed [&>ul]:list-disc [&>ul]:pl-6 [&>li]:mb-2 [&>li]:text-gray [&>strong]:text-ivory [&>strong]:font-bold"
          />
        </motion.article>

        {/* Tags */}
        <motion.div
          variants={itemVariants}
          className="max-w-3xl mx-auto mt-12 pt-12 border-t border-gray/20"
        >
          <div className="flex flex-wrap gap-3">
            {post.tags.map((tag, index) => (
              <span
                key={index}
                className="inline-block rounded-full bg-orange/10 px-4 py-2 text-sm text-orange font-semibold"
              >
                #{tag}
              </span>
            ))}
          </div>
        </motion.div>
      </Section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <Section bgColor="primary" padding="xl">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={itemVariants} className="mb-16 text-center">
              <Heading level="h2">RELATED ARTICLES</Heading>
            </motion.div>

            <div className="grid gap-8 md:grid-cols-3">
              {relatedPosts.map((relatedPost) => (
                <motion.div key={relatedPost.id} variants={itemVariants}>
                  <Link href={`/insights/${relatedPost.slug}`}>
                    <article className="group rounded-3xl overflow-hidden bg-bg-surface border border-white/[0.08] hover:border-orange/50 hover:shadow-[0_20px_40px_-15px_rgba(255,90,54,0.15)] transition-all duration-300 h-full flex flex-col hover:-translate-y-1">
                      {/* Image */}
                      <div className="relative h-48 overflow-hidden rounded-t-3xl">
                        <Image
                          src={relatedPost.image}
                          alt={relatedPost.imageAlt}
                          fill
                          className="object-cover group-hover:scale-106 transition-transform duration-500 ease-out"
                        />
                      </div>

                      {/* Content */}
                      <div className="p-6 flex flex-col flex-1">
                        <Label className="uppercase text-orange text-xs mb-3">
                          {relatedPost.category}
                        </Label>
                        <h3 className="text-lg font-bold text-ivory mb-3 hover:text-orange transition-colors line-clamp-2">
                          {relatedPost.title}
                        </h3>
                        <p className="text-sm text-gray mb-6 flex-1">
                          {relatedPost.excerpt}
                        </p>
                        <Metadata className="text-xs">
                          {relatedPost.readTime} min read
                        </Metadata>
                      </div>
                    </article>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Section>
      )}

      {/* CTA */}
      <Section bgColor="secondary" padding="xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="text-center"
        >
          <motion.div variants={itemVariants} className="mb-8">
            <Heading level="h2">Ready to Build?</Heading>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-8">
            <Body color="secondary" className="mx-auto max-w-2xl">
              We&apos;ve helped many companies transform their ideas into reality.
              Let&apos;s discuss how we can help you.
            </Body>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Button variant="primary" size="lg">
              Start a Project →
            </Button>
          </motion.div>
        </motion.div>
      </Section>
    </>
  );
};