import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-4">404 - Seite nicht gefunden</h1>
      <p className="text-lg mb-4">Die gesuchte Seite konnte nicht gefunden werden.</p>
      <Button asChild>
        <Link href="/">
          Zurück zur Startseite
        </Link>
      </Button>
    </div>
  );
} 