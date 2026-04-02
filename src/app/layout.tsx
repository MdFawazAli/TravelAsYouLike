import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import StickyContactBar from "@/components/StickyContactBar";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Travel As You Like | Luxury Hotel Booking",
  description:
    "Discover and book handpicked hotels worldwide. Curated luxury stays, exclusive deals, and seamless booking.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-surface text-neutral-900 font-body antialiased">
        {children}
        <StickyContactBar />
      </body>
    </html>
  );
}
