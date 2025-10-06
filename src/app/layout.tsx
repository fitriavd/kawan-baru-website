import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kawan Baru Coffee & Kitchen — Café Tropis-Industrial di Baranangsiang, Bogor",
  description: "Kawan Baru Bogor — café tropis-industrial dengan area indoor & outdoor, kolam ikan, photobooth, menu kopi & mixology, cocok untuk nongkrong, WFH, dan event kecil. Buka 08.00–23.00.",
  keywords: "cafe bogor, kopi bogor, kawan baru, coffee shop, tropis industrial, baranangsiang, WFH cafe",
  icons: {
    icon: '/images/logo.jpg',
    shortcut: '/images/logo.jpg',
    apple: '/images/logo.jpg',
  },
  openGraph: {
    title: "Kawan Baru Coffee & Kitchen",
    description: "Café tropis-industrial di Baranangsiang, Bogor dengan menu kopi, mixology, dan suasana instagramable",
    type: "website",
    locale: "id_ID",
    images: ['/images/logo.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <link rel="icon" href="/images/logo.jpg" sizes="any" />
        <link rel="icon" href="/images/logo.jpg" type="image/jpeg" />
        <link rel="apple-touch-icon" href="/images/logo.jpg" />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>{children}</body>
    </html>
  );
}
