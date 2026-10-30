import type { Metadata } from 'next';
import { Inter, Cormorant_Garamond } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'PT Citra Buana Prakarsa | Pioneer of Master-Planned Communities in Batam',
  description: 'Official website of PT Citra Buana Prakarsa (CBP Group). Premier developer of Harbour Bay Downtown, Union Square, Menara Aria, and Nirup Island in Batam, Indonesia since 1988.',
  keywords: ['Citra Buana Prakarsa', 'CBP Group', 'Harbour Bay Batam', 'Union Square Batam', 'Menara Aria', 'Nirup Island', 'Batam Real Estate', 'Batam Property Developer'],
  openGraph: {
    title: 'PT Citra Buana Prakarsa - Building The Future Since 1988',
    description: 'Premier property developer in Batam: Harbour Bay Downtown, Union Square Twin Tower, Menara Aria, and Nirup Island.',
    url: 'https://citrabuanaprakarsa.com',
    siteName: 'PT Citra Buana Prakarsa Group',
    images: [
      {
        url: 'https://citrabuanaprakarsa.com/wp-content/uploads/2019/12/slide-3.jpg',
        width: 1200,
        height: 630,
        alt: 'PT Citra Buana Prakarsa Landmark Developments',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable} scroll-smooth`}>
      <body className="bg-cbp-navy-950 text-slate-100 flex flex-col min-h-screen selection:bg-cbp-gold-500 selection:text-cbp-navy-950">
        <Navbar />
        <main className="flex-grow pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

