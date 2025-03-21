import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'BooStocks - Investing for Young Adults',
  description: 'The premier investing platform designed for young adults with parental guidance. Learn to invest, build wealth, and secure your financial future.',
  keywords: ['investing', 'stocks', 'teens', 'young adults', 'financial education', 'parent-approved'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
