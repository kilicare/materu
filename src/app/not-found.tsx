import { Heading } from '@/components/Typography';
import { Button } from '@/components/Button';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background text-foreground px-4">
      <Heading level="h1" className="text-6xl mb-6">
        404
      </Heading>
      <p className="text-text-secondary text-lg mb-8 text-center max-w-md">
        Page not found. The digital product you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link href="/">
        <Button variant="primary" size="md">
          Return Home
        </Button>
      </Link>
    </div>
  );
}
