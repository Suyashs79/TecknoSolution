import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Noto_Sans,
  Playfair_Display,
} from "next/font/google";

import "./globals.css";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
});

const notoSans = Noto_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Teckno Space",
    template: "%s | Teckno Space",
  },
  description:
    "A unified workspace for managing enterprise applications, tools and workflows.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`
        ${geistSans.variable}
        ${geistMono.variable}
        ${notoSans.variable}
        ${playfairDisplay.variable}
        antialiased
      `}
    >
      <body className="min-h-screen bg-white font-sans text-slate-900">
        <ClerkProvider>{children}</ClerkProvider>
      </body>
    </html>
  );
}