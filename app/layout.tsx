import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "DigitalCraft - Premium Web Design & Development Agency",
    template: "%s | DigitalCraft"
  },
  description: "Transform your business with custom web design and development. We create fast, SEO-optimized websites that convert visitors into customers.",
  keywords: ["web design", "web development", "digital agency", "SEO", "responsive design", "custom websites"],
  authors: [{ name: "DigitalCraft Team" }],
  creator: "DigitalCraft",
  publisher: "DigitalCraft",
  metadataBase: new URL("https://digitalcraft.agency"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://digitalcraft.agency",
    siteName: "DigitalCraft",
    title: "DigitalCraft - Premium Web Design & Development Agency",
    description: "Transform your business with custom web design and development. We create fast, SEO-optimized websites that convert visitors into customers.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "DigitalCraft - Web Design & Development Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DigitalCraft - Premium Web Design & Development Agency",
    description: "Transform your business with custom web design and development. We create fast, SEO-optimized websites that convert visitors into customers.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${inter.className} antialiased bg-white text-gray-900`}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
