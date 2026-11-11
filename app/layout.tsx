import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: { default: 'Organizer', template: '%s · Organizer' },
  description: 'Track your spendings, subscriptions, routine. All in one place.',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#0d0401',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-dvh flex flex-col bg-background text-foreground">{children}</body>
    </html>
  );
}
