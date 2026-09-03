import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';
import './globals.css';

const rubik = Rubik({
  subsets: ['arabic', 'latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://sawalif.online'),
  title: 'سوالف — سوالف جديدة كل يوم',
  description:
    'سوالف: تطبيق دردشة عربي للتعارف على أصدقاء جدد كتابة أو صوت، مع صور تختفي وطلبات صداقة، بكل خصوصية وأمان.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={rubik.className}>
        <div className="aurora" aria-hidden>
          <span className="blob blob-1" />
          <span className="blob blob-2" />
          <span className="blob blob-3" />
        </div>
        {children}
      </body>
    </html>
  );
}
