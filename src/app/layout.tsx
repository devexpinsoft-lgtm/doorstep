import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Doorstep – Professional Home Services On Demand",
    template: "%s | Doorstep",
  },
  description:
    "Doorstep connects you with certified home service professionals for cleaning, repairs, plumbing, electrical, and more. Book trusted services online in minutes.",
  keywords: [
    "home services",
    "book home services",
    "professional cleaning",
    "home repair",
    "plumbing service",
    "electrical services",
    "doorstep home services",
    "on-demand home services USA",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://doorstephome.com",
    siteName: "Doorstep",
    title: "Doorstep – Professional Home Services On Demand",
    description:
      "Book certified home service professionals for cleaning, repairs, plumbing, electrical, and more.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Doorstep – Professional Home Services On Demand",
    description:
      "Book certified home service professionals for cleaning, repairs, plumbing, electrical, and more.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`} suppressHydrationWarning>
      <body className="bg-white antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
