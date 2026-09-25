'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Heading, Body, Label } from '@/components/Typography';
import { Section, Grid } from '@/components/Container';
import { Button } from '@/components/Button';
import { ImageReveal } from '@/components/ImageReveal';
import { aboutContent } from '@/lib/about';

export default function AboutPage() {
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
            src="/images/about us _background.svg"
            alt="About Background"
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
              BUILDING FOR A BIGGER TOMORROW
            </Heading>
          </motion.div>

          <motion.div variants={itemVariants} className="mx-auto max-w-3xl">
            <Body color="secondary" className="text-lg">
              We&apos;re a team of designers, developers, and strategists dedicated
              to building digital products that solve real problems and create
              meaningful impact.
            </Body>
          </motion.div>
        </motion.div>
      </Section>

      {/* Our Story */}
      <Section bgColor="secondary" padding="xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={itemVariants} className="mb-16 text-center">
            <Heading level="h2">{aboutContent.story.title}</Heading>
          </motion.div>

          <div className="grid gap-16 md:grid-cols-2 mb-16 items-center">
            {/* Story Text */}
            <motion.div
              variants={containerVariants}
              className="space-y-6"
            >
              <motion.p
                variants={itemVariants}
                className="text-lg text-text-secondary leading-relaxed"
              >
                {aboutContent.story.intro}
              </motion.p>

              {aboutContent.story.paragraphs.map((paragraph, index) => (
                <motion.p
                  key={index}
                  variants={itemVariants}
                  className="text-text-secondary leading-relaxed"
                >
                  {paragraph}
                </motion.p>
              ))}
            </motion.div>

            {/* Story Image */}
            <motion.div variants={itemVariants}>
              <ImageReveal
                src="/about/office.webp"
                alt="MATERU Office"
                width={500}
                height={600}
                delay={0.3}
                className="rounded-2xl border border-border"
              />
            </motion.div>
          </div>
        </motion.div>
      </Section>

      {/* Philosophy & Values */}
      <Section bgColor="primary" padding="xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={itemVariants} className="mb-16 text-center">
            <Heading level="h2" className="mb-6">
              {aboutContent.philosophy.title}
            </Heading>
            <Body color="secondary" className="mx-auto max-w-2xl">
              {aboutContent.philosophy.description}
            </Body>
          </motion.div>

          <Grid columns={2} gap="lg">
            {aboutContent.philosophy.values.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="rounded-2xl border border-border bg-surface p-8 hover:border-brand/50 transition-all shadow-sm"
              >
                <div className="mb-4 text-5xl">{value.icon}</div>
                <h4 className="mb-3 text-xl font-bold text-foreground">
                  {value.title}
                </h4>
                <p className="text-text-secondary">{value.description}</p>
              </motion.div>
            ))}
          </Grid>
        </motion.div>
      </Section>

      {/* Founder */}
      <Section bgColor="secondary" padding="xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={itemVariants} className="mb-16 text-center">
            <Heading level="h2" className="mb-6">
              MEET THE FOUNDER
            </Heading>
          </motion.div>

          <div className="grid gap-12 md:grid-cols-2 items-center">
            {/* Image */}
            <motion.div variants={itemVariants} className="order-2 md:order-1">
              <ImageReveal
                src={aboutContent.founder.image}
                alt={aboutContent.founder.name}
                width={500}
                height={600}
                delay={0.2}
                className="rounded-2xl border border-border"
              />
            </motion.div>

            {/* Bio */}
            <motion.div
              variants={containerVariants}
              className="order-1 md:order-2 space-y-6"
            >
              <motion.div variants={itemVariants}>
                <Label className="uppercase text-brand font-semibold mb-2">Founder</Label>
                <Heading level="h3">{aboutContent.founder.name}</Heading>
                <p className="text-brand font-semibold mt-2">
                  {aboutContent.founder.role}
                </p>
              </motion.div>

              <motion.p
                variants={itemVariants}
                className="text-lg text-text-secondary leading-relaxed"
              >
                {aboutContent.founder.bio}
              </motion.p>

              <motion.p
                variants={itemVariants}
                className="text-text-secondary leading-relaxed"
              >
                {aboutContent.founder.background}
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      </Section>

      {/* Team */}
      <Section bgColor="primary" padding="xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={itemVariants} className="mb-16 text-center">
            <Heading level="h2" className="mb-6">
              OUR TEAM
            </Heading>
            <Body color="secondary" className="mx-auto max-w-2xl">
              Talented individuals working toward a common mission.
            </Body>
          </motion.div>

          <Grid columns={2} gap="lg">
            {aboutContent.team.map((member) => (
              <motion.div
                key={member.id}
                variants={itemVariants}
                className="group rounded-3xl overflow-hidden bg-surface border border-border hover:border-brand/50 transition-all duration-300 shadow-md hover:shadow-[0_20px_40px_-15px_rgba(249,115,22,0.15)] hover:-translate-y-1.5"
              >
                {/* Image */}
                <div className="relative h-80 overflow-hidden rounded-t-3xl">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-106 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-70" />
                </div>

                {/* Info */}
                <div className="p-6 md:p-8">
                  <h4 className="text-xl font-bold text-foreground mb-1 group-hover:text-brand transition-colors duration-240">
                    {member.name}
                  </h4>
                  <p className="text-brand font-semibold text-sm mb-3">
                    {member.role}
                  </p>
                  <p className="text-sm text-text-secondary mb-4">{member.bio}</p>

                  {/* Expertise Tags */}
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.slice(0, 3).map((exp, idx) => (
                      <span
                        key={idx}
                        className="inline-block rounded-full bg-brand/10 border border-brand/20 px-3 py-1 text-xs text-brand font-semibold"
                      >
                        {exp}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </Grid>
        </motion.div>
      </Section>

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
            <Heading level="h2">Ready to Work With Us?</Heading>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-8">
            <Body color="secondary" className="mx-auto max-w-2xl">
              Let&apos;s discuss your project and see how MATERU can help you build
              something amazing.
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
}