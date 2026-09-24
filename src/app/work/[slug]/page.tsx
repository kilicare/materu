import React from 'react';
import { notFound } from 'next/navigation';
import { CaseStudyPage } from '@/components/CaseStudyPage';
import { caseStudies } from '@/lib/caseStudies';

export async function generateStaticParams() {
  return caseStudies.map(cs => ({
    slug: cs.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const caseStudy = caseStudies.find(cs => cs.slug === slug);

  if (!caseStudy) {
    return {};
  }

  return {
    title: `${caseStudy.title} - Case Study - MATERU`,
    description: caseStudy.fullDescription,
    openGraph: {
      title: `${caseStudy.title} - MATERU`,
      description: caseStudy.fullDescription,
      url: `https://materu.com/work/${caseStudy.slug}`,
      images: [
        {
          url: caseStudy.imageUrl,
          width: 1200,
          height: 630,
          alt: caseStudy.imageAlt,
        },
      ],
    },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const caseStudy = caseStudies.find(cs => cs.slug === slug);

  if (!caseStudy) {
    notFound();
  }

  return <CaseStudyPage caseStudy={caseStudy} allCaseStudies={caseStudies} />;
}
