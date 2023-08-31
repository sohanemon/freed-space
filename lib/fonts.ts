import { Fira_Mono as FontMono } from 'next/font/google';
import localFont from 'next/font/local';

export const fontSans = localFont({
  src: './PingFang SC Regular.ttf',
  variable: '--font-sans',
});

export const fontMono = FontMono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '500', '700'],
});
