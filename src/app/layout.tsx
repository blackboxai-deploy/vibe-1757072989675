import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'MAA Real Estate - Find Your Perfect Home in Thane',
  description: 'Discover your dream property in Thane with MAA Real Estate. Personalized tours, honest advice, and expert guidance. Browse curated listings with advanced filtering. No pressure, no surprises - just results.',
  keywords: 'MAA Real Estate, Thane real estate, property in Thane, Thane homes, Thane apartments, property search Thane, real estate agents Thane',
  openGraph: {
    title: 'MAA Real Estate - Find Your Perfect Home in Thane',
    description: 'Discover your dream property in Thane with MAA Real Estate. Personalized tours and expert guidance. Browse our curated listings today.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-white">
          {children}
        </div>
      </body>
    </html>
  );
}