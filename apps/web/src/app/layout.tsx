import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import StoreProvider from './StoreProvider';
import { Toaster } from 'react-hot-toast';
import Footer from '@/components/Footer';
import NavbarHome from '@/components/NavbarHome';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {' '}
        <StoreProvider>
          <Toaster />
          <NavbarHome />
          {children}
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
