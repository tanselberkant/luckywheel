import Navigation from '@/components/Navigation';
import '../styles/global.css';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';

// const inter = Inter({
//   subsets: ['latin'],
//   display: 'swap',
//   weight: ['400', '500', '700', '900'],
// });

// const jua = Jua({
//   subsets: ['latin'],
//   weight: ['400'],
// });

const inconsolata = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
});

export const metadata: Metadata = {
  title: 'Lucky Draw',
  description: 'Lucky Wheel',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inconsolata.className} suppressHydrationWarning>
      <body className={inconsolata.className}>
        {/* <Navigation /> */}
        {children}
      </body>
    </html>
  );
}
