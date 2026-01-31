import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/src/utils/Providers";
import { Navbar } from "@/src/components/common/navbar";
import { Footer } from "@/src/components/common/footer";
import UmamiAnalytics from "@/src/components/analytics/UmamiAnalytics";
import { getPageMetadata } from "@/src/config/Meta";
import { ViewTransitions } from 'next-view-transitions';
import { Visitors } from "@/src/components/common/Visitors";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = getPageMetadata("/")

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>

      <html lang="en" suppressHydrationWarning>

        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background [--pattern-fg:var(--color-gray-950)]/10 selection:bg-black selection:text-white dark:[--pattern-fg:var(--color-gray-100)]/10 dark:selection:bg-white dark:selection:text-black`}
        >
          <Providers>
            <Navbar />
            {children}
            <Visitors />
            <Footer />

            <UmamiAnalytics />
          </Providers>
        </body>
      </html>
    </ViewTransitions>
  );
}
