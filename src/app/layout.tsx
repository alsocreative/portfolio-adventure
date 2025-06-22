import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "🎮 Shaswat's RPG Portfolio - Interactive Adventure",
  description: "Explore my skills, projects, and experience through a retro 2D RPG adventure game. Built with Next.js, TypeScript, and creativity!",
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', type: 'image/x-icon' }
    ],
    apple: '/favicon.svg'
  },
  keywords: ["portfolio", "RPG", "game", "developer", "React", "Next.js", "TypeScript", "interactive"],
  authors: [{ name: "Shaswat Raj" }],
  creator: "Shaswat Raj",
  openGraph: {
    title: "🎮 Shaswat's RPG Portfolio",
    description: "Interactive RPG-style portfolio showcasing development skills",
    type: "website",
    url: "https://shaswat.live"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
