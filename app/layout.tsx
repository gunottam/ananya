import type { Metadata } from "next";
import "./globals.css";
import Cursor from "@/components/Cursor";
import { MusicProvider } from "@/components/MusicProvider";
import { Playfair_Display, Inter, Dancing_Script, Kalam } from 'next/font/google';

const playfair = Playfair_Display({ subsets: ['latin'], weight: ['400','600','700'], variable: '--font-serif' });
const inter = Inter({ subsets: ['latin'], weight: ['300','400','500'], variable: '--font-sans' });
const dancing = Dancing_Script({ subsets: ['latin'], weight: ['400','600'], variable: '--font-script' });
const kalam = Kalam({ subsets: ['latin'], weight: ['300','400','700'], variable: '--font-kalam' });

export const metadata: Metadata = {
  title: "Happy Birthday",
  description: "A special birthday celebration",
  icons: {
    icon: "/gift.png",
    shortcut: "/gift.png",
    apple: "/gift.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} ${dancing.variable} ${kalam.variable}`}>
      <body className="antialiased">
        <Cursor />
        <MusicProvider>
          {children}
        </MusicProvider>
      </body>
    </html>
  );
}

