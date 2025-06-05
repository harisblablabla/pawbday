import type { Metadata } from "next";
import { Fredoka } from "next/font/google";
import "./globals.css";

const fredoka = Fredoka({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
  variable: '--font-fredoka', // optional for Tailwind integration
});

export const metadata: Metadata = {
  title: "Selamat Ulang Tahun!!",
  description: "Created by Haris",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fredoka.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
