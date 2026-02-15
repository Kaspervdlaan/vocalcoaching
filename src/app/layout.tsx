import type { Metadata } from "next";
import { EB_Garamond, Proza_Libre } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const prozaLibre = Proza_Libre({
  variable: "--font-proza-libre",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vocalcoaching in Utrecht - Holistische zang",
  description:
    "Zanglessen in Utrecht met Anna. Ontdek de kracht van je stem door holistische zangcoaching. Voor alle niveaus.",
  keywords: "zangles, Utrecht, vocal coaching, holistische zang, zangtechniek",
  openGraph: {
    title: "Vocalcoaching Utrecht",
    description: "Ontdek de kracht van je stem met holistische zangcoaching in Utrecht.",
    url: "https://vocalcoachingutrecht.nl",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body
        className={`${ebGaramond.variable} ${prozaLibre.variable} font-body antialiased`}
      >
        <Header />
        <main className="pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
