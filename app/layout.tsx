import './globals.css';

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || '';

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
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
      <script
                dangerouslySetInnerHTML={{
                  __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', ${GA_TRACKING_ID}, {
              page_path: window.location.pathname,
            });
        `,
                }}
              />
      <body className={`${notoSansJP.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
