import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'سوالف — تعرف على أصدقاء جدد',
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
      <body>{children}</body>
    </html>
  );
}
