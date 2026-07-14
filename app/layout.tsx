import type { Metadata } from 'next';
import { Geist } from 'next/font/google';

import './globals.css';

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://aarleyzin.dev'),
  title: {
    default: 'Arlindo Orsini | Software Engineer',
    template: '%s | Arlindo Orsini',
  },
  description:
    'Software Engineer building scalable web, mobile and AI-powered products with clean architecture and thoughtful user experiences.',
  keywords: [
    'Arlindo Orsini',
    'Software Engineer',
    'Product Engineer',
    'Next.js',
    'React Native',
    'AI products',
  ],
  authors: [{ name: 'Arlindo Orsini', url: 'https://aarleyzin.dev' }],
  creator: 'Arlindo Orsini',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://aarleyzin.dev',
    siteName: 'Arlindo Orsini',
    title: 'Arlindo Orsini | Software Engineer',
    description:
      'Building scalable web, mobile and AI-powered products with clean architecture and thoughtful user experiences.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arlindo Orsini | Software Engineer',
    description: 'Building software that solves real-world problems.',
  },
  alternates: { canonical: '/' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geist.variable} font-sans antialiased`}>{children}</body>
    </html>
  );
}
