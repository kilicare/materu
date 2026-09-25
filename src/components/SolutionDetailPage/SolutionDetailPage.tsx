'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Heading, Body, Label } from '@/components/Typography';
import { Section, Grid } from '@/components/Container';
import { Button } from '@/components/Button';
import { ImageReveal } from '@/components/ImageReveal';
import { Badge } from '@/components/Badge';
import { SolutionDetail } from '@/lib/solutionDetails';

interface SolutionDetailPageProps {
  solution: SolutionDetail;
}

export const SolutionDetailPage: React.FC<SolutionDetailPageProps> = ({
  solution,
}) => {
  const getBackgroundImage = (slug: string) => {
    const imageMap: Record<string, string> = {
      websites: '/images/website_background.jpg',
      applications: '/images/applications_background.jpg',
      'business-systems': '/images/system_background.jpg',
      saas: '/images/saas_background.jpg',
      ecommerce: '/images/ecomarce_background.jpg',
    };
    return imageMap[slug] || '/images/solution_background.jpg';
  };

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
    },
  };

  return (
    <>
      {/* Hero Section */}
      <Section bgColor="transparent" hasBackgroundImage padding="xl" className="relative">
        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src={getBackgroundImage(solution.slug)}
            alt={`${solution.title} Background`}
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
          className="text-center relative z-10"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <span className="text-6xl">{solution.icon}</span>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-6">
            <Heading level="h1">{solution.title}</Heading>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-12 mx-auto max-w-3xl">
            <Body color="secondary" className="text-xl">
              {solution.longDescription}
            </Body>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Button variant="primary" size="lg" href="/start-a-project">
              {solution.cta} →
            </Button>
          </motion.div>
        </motion.div>
      </Section>

      {/* Hero Image */}
      <Section bgColor="secondary" padding="lg">
        <ImageReveal
          src={solution.heroImage}
          alt={solution.title}
          width={1200}
          height={600}
          className="rounded-2xl overflow-hidden"
        />
      </Section>

      {/* Features Section */}
      <Section bgColor="primary" padding="xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-20 text-center"
        >
          <motion.div variants={itemVariants}>
            <Heading level="h2" className="mb-6">
              WHY CHOOSE OUR {solution.title.toUpperCase()}?
            </Heading>
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Grid columns={3} gap="lg">
            {solution.features.map((feature) => (
              <motion.div
                key={feature.id}
                variants={itemVariants}
                className="rounded-2xl border border-border bg-surface p-8 hover:border-brand/50 transition-all duration-base hover:shadow-lg"
              >
                <div className="mb-4 text-5xl">{feature.icon}</div>
                <h3 className="mb-3 text-xl font-bold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm text-text-secondary">{feature.description}</p>
              </motion.div>
            ))}
          </Grid>
        </motion.div>
      </Section>

      {/* Use Cases Section */}
      <Section bgColor="secondary" padding="xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-20 text-center"
        >
          <motion.div variants={itemVariants}>
            <Heading level="h2" className="mb-6">
              USE CASES
            </Heading>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Body color="secondary" className="mx-auto max-w-2xl">
              Real problems solved with {solution.title.toLowerCase()}
            </Body>
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Grid columns={1} gap="lg">
            {solution.useCases.map((useCase) => (
              <motion.div
                key={useCase.id}
                variants={itemVariants}
                className="rounded-3xl border border-light-greige bg-warm-ivory p-8 md:p-12 shadow-xl text-[#1A1917]"
              >
                <div className="grid gap-8 md:grid-cols-2">
                  {/* Left Side */}
                  <div>
                    <div className="mb-4 text-5xl">{useCase.icon}</div>
                    <h3 className="mb-2 text-2xl font-bold text-[#1A1917]">
                      {useCase.title}
                    </h3>
                    <span className="inline-block px-3 py-1 rounded-full bg-light-greige text-xs font-mono font-bold uppercase tracking-wider text-[#4A453E] mb-4">
                      {useCase.industry}
                    </span>

                    <div className="mt-4 space-y-4">
                      <div>
                        <span className="text-xs font-mono font-bold text-brand uppercase tracking-wider">
                          Business Challenge
                        </span>
                        <p className="mt-2 text-[#57534E] leading-relaxed">{useCase.problem}</p>
                      </div>
                    </div>
                  </div>

                  {/* Right Side */}
                  <div className="flex items-center">
                    <div className="space-y-4 w-full p-6 rounded-2xl bg-white/60 border border-light-greige">
                      <div className="flex items-start gap-4">
                        <span className="text-2xl text-brand font-bold">✓</span>
                        <div>
                          <span className="text-xs font-mono font-bold text-brand uppercase tracking-wider">
                            Architectural Solution
                          </span>
                          <p className="mt-2 text-[#1A1917] font-medium leading-relaxed">{useCase.solution}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </Grid>
        </motion.div>
      </Section>

      {/* Technology Stack */}
      <Section bgColor="primary" padding="xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center"
        >
          <motion.div variants={itemVariants} className="mb-12">
            <Heading level="h2">TECHNOLOGY STACK</Heading>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="flex flex-wrap justify-center gap-4"
          >
            {solution.technologies.map((tech, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="rounded-full bg-brand/10 px-6 py-3 border border-brand/20"
              >
                <span className="font-semibold text-brand">{tech}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="mt-12">
            <p className="text-text-secondary">
              Industries we serve:{' '}
              <span className="text-foreground font-medium">
                {solution.industries.join(', ')}
              </span>
            </p>
          </motion.div>
        </motion.div>
      </Section>

      {/* Final CTA */}
      <Section bgColor="secondary" padding="xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="text-center"
        >
          <motion.div variants={itemVariants} className="mb-8">
            <Heading level="h2">Ready to Get Started?</Heading>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-8">
            <Body color="secondary" className="mx-auto max-w-2xl">
              Let&apos;s discuss how {solution.title.toLowerCase()} can transform
              your business.
            </Body>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex gap-4 justify-center flex-wrap"
          >
            <Button variant="primary" size="lg" href="/start-a-project">
              {solution.cta} →
            </Button>
            <Button variant="secondary" size="lg" href="/contact">
              Schedule a Demo
            </Button>
          </motion.div>
        </motion.div>
      </Section>
    </>
  );
};
