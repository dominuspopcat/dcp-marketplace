import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./Header/page";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DCP MARKETPLACE",
  description: "At DCP Productions, developers and animators unite to share their skills and projects. We create original Roblox games, produce custom animations, and support each other through teamwork and feedback. Join us to learn, create, and grow with fellow creators!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`} style={{ paddingTop: '2rem' }}>
        <>
          <Header />
          {children}
        </>
      </body>
    </html>
  );
}
