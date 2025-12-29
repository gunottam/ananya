import type { Metadata } from "next";
import "./globals.css";
import Cursor from "@/components/Cursor";
import { MusicProvider } from "@/components/MusicProvider";

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
    <html lang="en">
      <body className="antialiased">
        <Cursor />
        <MusicProvider>
          {children}
        </MusicProvider>
      </body>
    </html>
  );
}

