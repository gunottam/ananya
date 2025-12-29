import type { Metadata } from "next";
import "./globals.css";
import Cursor from "@/components/Cursor";

export const metadata: Metadata = {
  title: "Happy Birthday",
  description: "A special birthday celebration",
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
        {children}
      </body>
    </html>
  );
}

