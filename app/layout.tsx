import './globals.css';

import type { Metadata } from 'next';
import { Noto_Sans_JP } from 'next/font/google';

import { Header } from '../ui/Header';
import { Footer } from '@/ui/Footer';
import { GA } from '@/ui/GA';

const notoSansJP = Noto_Sans_JP({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'N.Motoki Portfolio',
    template: '%s | Portfolio of NAKATSUJI Motoki',
  },
  description:
    '中辻基希のポートフォリオ',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className={`${notoSansJP.className}`}>
        <Header />
        <GA/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
