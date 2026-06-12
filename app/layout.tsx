import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Edwin John | Computer Science Student & Cloud Computing Enthusiast",
  description:
    "Portfolio of Edwin John — a Computer Science student passionate about cloud computing, software development, AI, and building innovative solutions through technology.",
  keywords: [
    "Edwin John",
    "Computer Science",
    "Cloud Computing",
    "Portfolio",
    "Software Developer",
    "AI",
    "Programming",
  ],
  authors: [{ name: "Edwin John" }],
  openGraph: {
    title: "Edwin John | Portfolio",
    description:
      "Computer Science student passionate about cloud computing, software development, and innovative technology solutions.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Edwin John | Portfolio",
    description:
      "Computer Science student passionate about cloud computing, software development, and innovative technology solutions.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
