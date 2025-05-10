import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/global/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Akash Thakur | Portfolio',
  description: 'Full Stack Developer. Terminal-first. Cinematic Design. SaaS Builder.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white`}>
        <Navbar />
        <main className="min-h-screen flex flex-col justify-between">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}