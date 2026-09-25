'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Heading, Body } from '@/components/Typography';
import { Section, Grid } from '@/components/Container';
import { Badge } from '@/components/Badge';
import { Button } from '@/components/Button';
import { solutionDetails } from '@/lib/solutionDetails';

export default function SolutionsPage() {
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

  const solutions = Object.values(solutionDetails);

  return (
    <>
      {/* Hero */}
      <Section bgColor="transparent" hasBackgroundImage padding="xl" className="relative">
        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/solution_background.jpg"
            alt="Solutions Background"
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
          className="text-center mb-20 relative z-10"
        >
          <motion.div variants={itemVariants}>
            <Heading level="h1" className="mb-6">
              SOLUTIONS
            </Heading>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Body color="secondary" className="mx-auto max-w-2xl text-lg">
              We build digital products, platforms, and systems tailored to your
              specific needs. Explore our solutions to find what fits your
              business.
            </Body>
          </motion.div>
        </motion.div>
      </Section>

      {/* Solutions Grid */}
      <Section bgColor="secondary" padding="xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Grid columns={1} gap="lg" className="md:grid-cols-2 lg:grid-cols-3">
            {solutions.map((solution) => (
              <motion.div
                key={solution.id}
                variants={itemVariants}
                className="group"
              >
                <Link href={`/solutions/${solution.slug}`} className="block">
                  <div className="rounded-3xl border border-border bg-surface p-8 hover:border-brand/50 hover:shadow-[0_20px_40px_-15px_rgba(249,115,22,0.15)] transition-all duration-300 h-full group-hover:-translate-y-1">
                    <div className="mb-6 text-6xl">{solution.icon}</div>
                    <h3 className="mb-3 text-2xl font-bold text-foreground group-hover:text-brand transition-colors">
                      {solution.title}
                    </h3>
                    <p className="mb-6 text-sm text-text-secondary">
                      {solution.subtitle}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {solution.technologies.slice(0, 3).map((tech, index) => (
                        <Badge key={index} variant="brand" size="sm">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </Grid>
        </motion.div>
      </Section>

      {/* Final CTA */}
      <Section bgColor="primary" padding="xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="text-center"
        >
          <motion.div variants={itemVariants} className="mb-8">
            <Heading level="h2">Not Sure What You Need?</Heading>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-8">
            <Body color="secondary" className="mx-auto max-w-2xl">
              We can help you figure out the right solution for your business.
              Let&apos;s discuss your challenges and goals.
            </Body>
          </motion.div>

          <motion.div variants={itemVariants} className="flex gap-4 justify-center flex-wrap">
            <Button variant="primary" size="lg" href="/start-a-project">
              Start a Project →
            </Button>
            <Button variant="secondary" size="lg" href="/contact">
              Schedule a Consultation
            </Button>
          </motion.div>
        </motion.div>
      </Section>
    </>
  );
}
