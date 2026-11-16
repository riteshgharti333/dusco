import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MarqueeStrip from "./components/MarqueeStrip";
import JoinCTA from "./components/JoinCTA";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "DUCSO — Dhaka University Christian Students' Organization",
    template: "%s | DUCSO",
  },
  description:
    "Dhaka University Christian Students' Organization (DUCSO) — a community of faith, fellowship, learning and service at the University of Dhaka.",
  icons: {
    icon: "/ducso-logo.jpg",
    shortcut: "/ducso-logo.jpg",
    apple: "/ducso-logo.jpg",
  },
  openGraph: {
    title: "DUCSO — Dhaka University Christian Students' Organization",
    description:
      "A community of faith, fellowship, learning and service at the University of Dhaka.",
    images: ["/ducso-logo.jpg"],
  },
};

export const viewport = {
  themeColor: "#0b2137",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="min-h-full flex flex-col">
        <Navbar />

        <main id="main" className="flex-1">
          {children}
        </main>

        <JoinCTA />
        {/* <MarqueeStrip /> */}
        <Footer />
      </body>
    </html>
  );
}
