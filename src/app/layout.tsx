import type { Metadata } from 'next';
import { Cormorant_Garamond, Nunito } from 'next/font/google';
import './globals.css';
import { CartProvider } from '@/context/CartContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const cormorant = Cormorant_Garamond({
  variable: '--font-cormorant',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  display: 'swap',
});

const nunito = Nunito({
  variable: '--font-nunito',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'mint & elli – Handgemachte Kinderkleidung',
    template: '%s | mint & elli',
  },
  description:
    'Mit Liebe handgemachte Einzelstücke für Kinder von Größe 50–128. Oekotex100-zertifiziert, teilweise GOTS Bio-Qualität. Personalisierbar. Aus Hilden.',
  keywords: ['handmade', 'Kinderkleidung', 'handgemacht', 'Hilden', 'Oekotex', 'GOTS', 'Unikate', 'personalisiert'],
  openGraph: {
    title: 'mint & elli – Handgemachte Kinderkleidung',
    description: 'Mit Liebe handgemachte Einzelstücke für kleine Schätze.',
    locale: 'de_DE',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${cormorant.variable} ${nunito.variable}`}>
      <body className="antialiased min-h-screen flex flex-col">
        <CartProvider>
          <Navbar />
          <main className="flex-1 pt-20">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
