import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const description =
  "Betaalbare, flexibele Managed Cloud & Betaalbare IT-diensten voor het MKB, waaronder beheerde cloud, cyberbeveiliging en meer.";

export const metadata: Metadata = {
  metadataBase: new URL("https://cloudconnected.nl"),
  title: "Managed Cloud & Betaalbare IT-diensten voor het MKB",
  description,
  alternates: {
    canonical: "/",
    languages: { nl: "https://cloudconnected.nl/", en: "https://en.cloudconnected.nl/" },
  },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: "/",
    siteName: "CloudConnected",
    title: "Managed Cloud & Betaalbare IT-diensten voor het MKB",
    description,
    images: [{ url: "/images/og-image.webp", width: 1280, height: 720 }],
  },
  twitter: { card: "summary_large_image" },
  icons: {
    icon: "/images/cropped-logo-full-color-svg-1-32x32.webp",
    apple: "/images/cropped-logo-full-color-svg-1-180x180.webp",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="nl" className={montserrat.variable} suppressHydrationWarning>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
