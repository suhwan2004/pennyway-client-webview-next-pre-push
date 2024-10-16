import type { Metadata } from 'next';

import { QueryProvider } from '@/app/provider';
import './globals.css';

export const metadata: Metadata = {
  title: 'Pennyway',
  description: '💰 Pennyway : 지출 내역을 관리하고 공유하는 플랫폼',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
