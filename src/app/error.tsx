'use client';

import { Heading } from '@/components/Typography';
import { Button } from '@/components/Button';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  // Log error for debugging
  console.error('Error occurred:', error);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background text-foreground px-4">
      <Heading level="h1" className="text-6xl mb-6">
        Something went wrong
      </Heading>
      <p className="text-text-secondary text-lg mb-8 text-center max-w-md">
        An unexpected error occurred. Please try again later.
      </p>
      <Button variant="primary" size="md" onClick={reset}>
        Try again
      </Button>
    </div>
  );
}
