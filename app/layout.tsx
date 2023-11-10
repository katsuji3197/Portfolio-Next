import './globals.css';

import type { Metadata } from 'next';
import { Noto_Sans_JP } from 'next/font/google';

import { Header } from '../ui/Header';
import { Footer } from '@/ui/Footer';

const notoSansJP = Noto_Sans_JP({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'N.Motoki Poerfolio',
    template: '%s | Portfolio of NAKATSUJI Motoki',
  },
  description:
    'とある学生のポートフォリオ',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className={`${notoSansJP.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
