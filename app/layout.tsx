import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sanctum Estates & Architecture — Mahakarya Hunian & Warisan Keluarga",
  description:
    "Koleksi hunian ikonik terkurasi: The Grand Pavilion, Pineview Hillside, Luminary Sky Suite, dan lainnya. Struktur tahan gempa SNI, material batu karang purba & kayu ulin lestari.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" className={`${playfair.variable} ${inter.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
