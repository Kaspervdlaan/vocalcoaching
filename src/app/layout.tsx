import type { Metadata } from "next";
import { EB_Garamond, Proza_Libre } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";
import JsonLd from "@/components/JsonLd";
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

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://vocalcoachingutrecht.nl";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Zangles Utrecht | Holistische Vocal Coaching - Anna",
    template: "%s | Anna Vocal Coaching Utrecht",
  },
  description:
    "Zanglessen in Utrecht met Anna. Ontdek de kracht van je stem door holistische zangcoaching. Les op maat voor elk niveau — van beginner tot podium.",
  keywords: "zangles, Utrecht, vocal coaching, holistische zang, zangtechniek",
  openGraph: {
    title: "Anna Vocal Coaching — Zangles in Utrecht",
    description:
      "Ontdek de kracht van je stem. Holistische zangcoaching in Utrecht, les op maat voor elk niveau. Boek een proefles en laat je stem stralen.",
    url: siteUrl,
    siteName: "Anna Vocal Coaching",
    type: "website",
    locale: "nl_NL",
    images: [
      {
        url: `${siteUrl}/assets/Logo_Tekst.png`,
        width: 1200,
        height: 1200,
        alt: "Anna Vocal Coaching — Zangles in Utrecht",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anna Vocal Coaching — Zangles in Utrecht",
    description:
      "Ontdek de kracht van je stem. Holistische zangcoaching in Utrecht, les op maat voor elk niveau.",
    images: [`${siteUrl}/assets/Logo_Tekst.png`],
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
        <JsonLd />
        <Header />
        <main className="pt-24">
          <PageBackground>{children}</PageBackground>
        </main>
        <Footer />
      </body>
    </html>
  );
}
