'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Heading, Body, Metadata } from '@/components/Typography';
import { Section, Grid } from '@/components/Container';
import { Button } from '@/components/Button';
import { Badge } from '@/components/Badge';
import { Link } from '@/components/Link';
import { CaseStudy } from '@/lib/caseStudies';

interface CaseStudyPageProps {
  caseStudy: CaseStudy;
  allCaseStudies: CaseStudy[];
}

export const CaseStudyPage: React.FC<CaseStudyPageProps> = ({
  caseStudy,
  allCaseStudies,
}) => {
  const getBackgroundImage = (category: string) => {
    const imageMap: Record<string, string> = {
      'business-system': '/images/system_background.jpg',
      ecommerce: '/images/ecomarce_background.jpg',
      saas: '/images/saas_background.jpg',
      application: '/images/applications_background.jpg',
      website: '/images/website_background.jpg',
    };
    return imageMap[category] || '/images/work_background.jpg';
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

  // Get related projects
  const related = allCaseStudies.filter(
    cs =>
      cs.slug !== caseStudy.slug &&
      (caseStudy.relatedProjects?.includes(cs.slug) || cs.category === caseStudy.category)
  ).slice(0, 3);

  return (
    <>
      {/* Breadcrumb */}
      <Section bgColor="primary" padding="md">
        <div className="flex items-center gap-3 text-sm">
          <Link href="/work" underline={false}>
            <span className="text-gray hover:text-orange">All Work</span>
          </Link>
          <span className="text-gray">/</span>
          <span className="text-ivory">{caseStudy.title}</span>
        </div>
      </Section>

      {/* Hero Section */}
      <Section bgColor="transparent" hasBackgroundImage padding="xl" className="relative">
        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src={getBackgroundImage(caseStudy.category)}
            alt={`${caseStudy.title} Background`}
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
          className="text-center mb-12 relative z-10"
        >
          <motion.div variants={itemVariants} className="mb-4">
            <Badge variant="orange" size="md">
              {caseStudy.category}
            </Badge>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-6">
            <Heading level="h1">{caseStudy.title}</Heading>
          </motion.div>

          <motion.div variants={itemVariants} className="mx-auto max-w-3xl">
            <Body color="secondary" className="text-lg">
              {caseStudy.fullDescription}
            </Body>
          </motion.div>
        </motion.div>

        {/* Hero Image */}
        <div className="relative h-96 w-full overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
          <Image
            src={caseStudy.heroImage}
            alt={caseStudy.imageAlt}
            fill
            className="object-cover"
            priority
          />
        </div>
      </Section>

      {/* Challenge & Solution Section */}
      <Section bgColor="secondary" padding="xl">
        <div className="grid gap-16 md:grid-cols-2">
          {/* Challenge */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={itemVariants} className="mb-8">
              <Heading level="h3" className="flex items-center gap-3">
                <span className="text-3xl">🎯</span>
                THE CHALLENGE
              </Heading>
            </motion.div>

            <div className="space-y-6">
              {caseStudy.challenges.map((challenge, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="border-l-4 border-orange pl-6"
                >
                  <h4 className="mb-2 font-bold text-ivory">
                    {challenge.title}
                  </h4>
                  <p className="text-gray">{challenge.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Solution */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={itemVariants} className="mb-8">
              <Heading level="h3" className="flex items-center gap-3">
                <span className="text-3xl">💡</span>
                OUR SOLUTION
              </Heading>
            </motion.div>

            <div className="space-y-6">
              {caseStudy.solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="rounded-lg bg-bg-surface p-6 border border-orange/20"
                >
                  <div className="mb-3 text-3xl">{solution.icon}</div>
                  <h4 className="mb-2 font-bold text-ivory">
                    {solution.title}
                  </h4>
                  <p className="text-sm text-gray">{solution.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Outcomes / Results */}
      <Section bgColor="primary" padding="xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-16 text-center"
        >
          <motion.div variants={itemVariants}>
            <Heading level="h2" className="mb-6">
              THE RESULTS
            </Heading>
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Grid columns={2} gap="lg">
            {caseStudy.outcomes.map((outcome, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="rounded-2xl bg-bg-surface border border-orange/20 p-8 text-center"
              >
                <div className="mb-4 text-5xl font-bold text-orange">
                  {outcome.value}
                </div>
                <h4 className="mb-2 font-bold text-ivory">{outcome.metric}</h4>
                <p className="text-sm text-gray">{outcome.description}</p>
              </motion.div>
            ))}
          </Grid>
        </motion.div>
      </Section>

      {/* Features & Technologies */}
      <Section bgColor="secondary" padding="xl">
        <div className="grid gap-12 md:grid-cols-2">
          {/* Features */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={itemVariants} className="mb-8">
              <Heading level="h3">FEATURES BUILT</Heading>
            </motion.div>

            <motion.div variants={containerVariants} className="space-y-3">
              {caseStudy.features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-center gap-3"
                >
                  <span className="text-orange">✓</span>
                  <span className="text-ivory">{feature}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Technologies */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={itemVariants} className="mb-8">
              <Heading level="h3">TECHNOLOGY STACK</Heading>
            </motion.div>

            <motion.div
              variants={containerVariants}
              className="flex flex-wrap gap-3"
            >
              {caseStudy.technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="rounded-full bg-orange/10 px-4 py-2 border border-orange/20"
                >
                  <span className="text-sm font-semibold text-orange">{tech}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </Section>

      {/* Testimonial */}
      {caseStudy.testimonial && (
        <Section bgColor="primary" padding="xl">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.div variants={itemVariants} className="mb-8 text-5xl">
              &ldquo;
            </motion.div>

            <motion.div variants={itemVariants} className="mb-8">
              <p className="text-xl text-ivory leading-relaxed">
                {caseStudy.testimonial.text}
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="font-bold text-orange">{caseStudy.testimonial.author}</p>
              <Metadata>
                {caseStudy.testimonial.role} at {caseStudy.testimonial.company}
              </Metadata>
            </motion.div>
          </motion.div>
        </Section>
      )}

      {/* Related Projects */}
      {related.length > 0 && (
        <Section bgColor="secondary" padding="xl">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mb-16 text-center"
          >
            <motion.div variants={itemVariants}>
              <Heading level="h2" className="mb-6">
                RELATED PROJECTS
              </Heading>
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <Grid columns={1} gap="lg" className="md:grid-cols-3">
              {related.map((project) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  className="group cursor-pointer"
                >
                  <Link href={`/work/${project.slug}`} underline={false}>
                    <div className="rounded-3xl overflow-hidden bg-bg-surface border border-white/[0.08] hover:border-orange/50 hover:shadow-[0_20px_40px_-15px_rgba(255,90,54,0.15)] transition-all duration-300 hover:-translate-y-1">
                      <div className="relative h-48 overflow-hidden rounded-t-3xl">
                        <Image
                          src={project.imageUrl}
                          alt={project.imageAlt}
                          fill
                          className="object-cover group-hover:scale-106 transition-transform duration-500 ease-out"
                        />
                      </div>
                      <div className="p-6 bg-bg-surface">
                        <Badge variant="orange" size="sm" className="mb-3">
                          {project.category}
                        </Badge>
                        <h3 className="font-bold text-ivory group-hover:text-orange transition-colors">
                          {project.title}
                        </h3>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </Grid>
          </motion.div>
        </Section>
      )}

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
            <Heading level="h2">Ready to Build Your Project?</Heading>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-8">
            <Body color="secondary" className="mx-auto max-w-2xl">
              We&apos;re ready to help you achieve similar results. Let&apos;s discuss
              your project and create something amazing together.
            </Body>
          </motion.div>

          <motion.div variants={itemVariants} className="flex gap-4 justify-center flex-wrap">
            <Button variant="primary" size="lg">
              Start a Project →
            </Button>
            <Button variant="secondary" size="lg">
              Schedule a Demo
            </Button>
          </motion.div>
        </motion.div>
      </Section>
    </>
  );
};
