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
                className="text-lg text-text-secondary leading-relaxed font-medium"
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

            {/* Studio Architectural & Milestones Card */}
            <motion.div variants={itemVariants}>
              <div className="relative overflow-hidden rounded-3xl border border-light-greige bg-warm-sand p-8 md:p-10 shadow-2xl text-[#1A1917]">
                {/* Decorative header badge */}
                <div className="flex items-center justify-between gap-4 mb-6 pb-4 border-b border-light-greige/80">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-light-greige text-xs font-mono font-bold uppercase tracking-wider text-[#4A453E]">
                    <span className="w-2 h-2 rounded-full bg-brand animate-pulse" />
                    Studio Manifesto & Spec
                  </div>
                  <span className="text-xs font-mono font-bold text-[#7A7368]">
                    EST. UDOM 2027
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-extrabold text-[#1A1917] mb-3 tracking-tight">
                  Engineering Without Compromise
                </h3>
                <p className="text-sm text-[#524B42] leading-relaxed mb-6">
                  Rooted in rigorous computer science and software engineering at the University of Dodoma, MATERU converts complex business problems into reliable, high-performing digital platforms.
                </p>

                {/* Spec Milestones Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  <div className="p-3.5 rounded-2xl bg-white/70 border border-light-greige shadow-sm">
                    <p className="text-[10px] font-mono uppercase tracking-wider text-[#7A7368] font-bold">
                      Foundation & Alumni
                    </p>
                    <p className="text-sm font-bold text-[#1A1917] mt-0.5">
                      UDOM (Class of 2027)
                    </p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-white/70 border border-light-greige shadow-sm">
                    <p className="text-[10px] font-mono uppercase tracking-wider text-[#7A7368] font-bold">
                      Engineering Philosophy
                    </p>
                    <p className="text-sm font-bold text-[#1A1917] mt-0.5">
                      100% Custom Code
                    </p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-white/70 border border-light-greige shadow-sm">
                    <p className="text-[10px] font-mono uppercase tracking-wider text-[#7A7368] font-bold">
                      Primary Tech Stack
                    </p>
                    <p className="text-sm font-bold text-[#1A1917] mt-0.5">
                      Next.js 16 • TS • Postgres
                    </p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-white/70 border border-light-greige shadow-sm">
                    <p className="text-[10px] font-mono uppercase tracking-wider text-[#7A7368] font-bold">
                      Core Specialty
                    </p>
                    <p className="text-sm font-bold text-[#1A1917] mt-0.5">
                      Health ERPs & Custom SaaS
                    </p>
                  </div>
                </div>

                {/* Quote / Pledge */}
                <div className="p-4 rounded-2xl bg-light-greige/40 border border-light-greige/80">
                  <p className="text-xs italic text-[#3C3833] leading-relaxed">
                    &ldquo;We do not build generic template wrappers. We engineer durable, scalable software systems that companies rely on for mission-critical operations.&rdquo;
                  </p>
                  <p className="text-[11px] font-bold font-mono text-brand mt-2">
                    — Gervas Materu, Founder
                  </p>
                </div>
              </div>
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
            {/* Founder Visual Portrait & Spec Card */}
            <motion.div variants={itemVariants} className="order-2 md:order-1">
              <div className="group relative overflow-hidden rounded-3xl border border-border bg-surface shadow-2xl transition-all duration-300 hover:border-brand/50">
                {/* Photo Container */}
                <div className="relative h-[380px] sm:h-[440px] w-full overflow-hidden bg-surface-secondary/40">
                  <Image
                    src={aboutContent.founder.image}
                    alt={aboutContent.founder.name}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Subtle Gradient Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/10 to-transparent" />
                  
                  {/* Floating Founder Badge */}
                  <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-background/85 backdrop-blur-md border border-border/80 text-xs font-mono font-bold text-foreground shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-brand animate-pulse" />
                    Founder & Principal Architect
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/90 backdrop-blur-md text-white text-xs font-mono font-bold uppercase tracking-wider shadow-md">
                      UDOM Class of 2027
                    </div>
                  </div>
                </div>

                {/* Academic & Engineering Specs */}
                <div className="p-6 md:p-8 pt-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 rounded-2xl bg-surface-secondary/60 border border-border/50">
                      <p className="text-[10px] font-mono text-text-tertiary uppercase font-bold">
                        Alma Mater
                      </p>
                      <p className="text-xs font-semibold text-foreground mt-0.5">
                        Univ. of Dodoma
                      </p>
                    </div>
                    <div className="p-3 rounded-2xl bg-surface-secondary/60 border border-border/50">
                      <p className="text-[10px] font-mono text-text-tertiary uppercase font-bold">
                        Graduation
                      </p>
                      <p className="text-xs font-semibold text-foreground mt-0.5">
                        Class of 2027
                      </p>
                    </div>
                    <div className="p-3 rounded-2xl bg-surface-secondary/60 border border-border/50">
                      <p className="text-[10px] font-mono text-text-tertiary uppercase font-bold">
                        Discipline
                      </p>
                      <p className="text-xs font-semibold text-foreground mt-0.5">
                        Software Engineering
                      </p>
                    </div>
                    <div className="p-3 rounded-2xl bg-surface-secondary/60 border border-border/50">
                      <p className="text-[10px] font-mono text-text-tertiary uppercase font-bold">
                        Focus
                      </p>
                      <p className="text-xs font-semibold text-foreground mt-0.5">
                        Enterprise Architecture
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Bio */}
            <motion.div
              variants={containerVariants}
              className="order-1 md:order-2 space-y-6 rounded-3xl border border-light-greige bg-warm-ivory p-8 md:p-12 shadow-2xl text-[#1A1917]"
            >
              <motion.div variants={itemVariants}>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-light-greige text-xs font-mono font-bold uppercase tracking-wider text-[#4A453E] mb-3">
                  Studio Leadership
                </div>
                <h3 className="text-3xl md:text-4xl font-extrabold text-[#1A1917]">
                  {aboutContent.founder.name}
                </h3>
                <p className="text-brand font-bold mt-1 text-base">
                  {aboutContent.founder.role}
                </p>
              </motion.div>

              <motion.p
                variants={itemVariants}
                className="text-lg text-[#3C3833] leading-relaxed font-medium"
              >
                {aboutContent.founder.bio}
              </motion.p>

              <motion.p
                variants={itemVariants}
                className="text-sm text-[#6B655C] leading-relaxed pt-4 border-t border-light-greige"
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
              OUR TEAM & COLLABORATORS
            </Heading>
            <Body color="secondary" className="mx-auto max-w-2xl">
              Talented engineers, designers, and domain specialists collaborating on next-generation systems.
            </Body>
          </motion.div>

          <Grid columns={2} gap="lg">
            {aboutContent.team.map((member) => (
              <motion.div
                key={member.id}
                variants={itemVariants}
                className="group rounded-3xl overflow-hidden bg-surface border border-border hover:border-brand/50 transition-all duration-300 shadow-md hover:shadow-[0_20px_40px_-15px_rgba(249,115,22,0.15)] hover:-translate-y-1.5 p-6 md:p-8 flex flex-col justify-between"
              >
                {/* Header with Monogram Badge */}
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-brand/10 border border-brand/20 flex items-center justify-center text-brand font-mono font-bold text-lg group-hover:scale-105 transition-transform">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-foreground group-hover:text-brand transition-colors duration-240">
                        {member.name}
                      </h4>
                      <p className="text-brand font-semibold text-xs">
                        {member.role}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm text-text-secondary mb-6 leading-relaxed">
                    {member.bio}
                  </p>
                </div>

                {/* Expertise Tags */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-border/50">
                  {member.expertise.map((exp, idx) => (
                    <span
                      key={idx}
                      className="inline-block rounded-full bg-brand/10 border border-brand/20 px-3 py-1 text-xs text-brand font-semibold"
                    >
                      {exp}
                    </span>
                  ))}
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