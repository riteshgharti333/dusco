import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MarqueeStrip from "./components/MarqueeStrip";
import JoinCTA from "./components/JoinCTA";

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
    default: "DUCSO — Dhaka University Christian Students' Organisation",
    template: "%s | DUCSO",
  },
  description:
    "The official website of the Dhaka University Christian Students' Organisation (DUCSO) — a community of believers gathering weekly to worship, grow, and serve on campus.",
  icons: {
    icon: "/dusco-logo.jpg",
    shortcut: "/dusco-logo.jpg",
    apple: "/dusco-logo.jpg",
  },
  openGraph: {
    title: "DUCSO — Dhaka University Christian Students' Organisation",
    description:
      "A community of believers at Dhaka University gathering weekly to worship, grow, and serve.",
    images: ["/dusco-logo.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-gray-900">
        <Navbar />
        <main className="flex-1">{children}</main>
        <JoinCTA />
        <MarqueeStrip />
        <Footer />
      </body>
    </html>
  );
}