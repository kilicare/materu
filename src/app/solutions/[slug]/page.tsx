import React from 'react';
import { notFound } from 'next/navigation';
import { SolutionDetailPage } from '@/components/SolutionDetailPage';
import { solutionDetails } from '@/lib/solutionDetails';

export async function generateStaticParams() {
  return Object.keys(solutionDetails).map(slug => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const solution = solutionDetails[slug];

  if (!solution) {
    return {};
  }

  return {
    title: `${solution.title} - MATERU`,
    description: solution.longDescription,
    openGraph: {
      title: `${solution.title} - MATERU`,
      description: solution.longDescription,
      url: `https://materu.com/solutions/${solution.slug}`,
    },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const solution = solutionDetails[slug];

  if (!solution) {
    notFound();
  }

  return <SolutionDetailPage solution={solution} />;
}
