import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Video-IA Transcriber",
  description: "Generator transcriber by video",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='pt-Br'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
