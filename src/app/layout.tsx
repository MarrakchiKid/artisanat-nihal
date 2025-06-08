import type { Metadata } from "next";
import "@/styles/globals.css";
import { Playfair_Display } from 'next/font/google'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-playfair',
  display: 'swap',
})


export const metadata: Metadata = {
  title: "Artisanat Nihal",
  description: "Découvrez des créations artisanales uniques, façonnées avec passion et savoir-faire.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={playfair.className}>
        {children}
      </body>
    </html>
  );
}
