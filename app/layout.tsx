import { Alata } from "next/font/google";
import "./globals.css";
import type { Metadata } from "next";

const alata = Alata({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "DemanualAI",
  description: "Put Your Business on Autopilot & Reclaim Your Time",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={alata.className}>
        {children}
      </body>
    </html>
  );
}
