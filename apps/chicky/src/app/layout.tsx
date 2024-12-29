import type { Metadata } from "next";
import { Geist, Geist_Mono, Bricolage_Grotesque } from "next/font/google";
import { cookies } from "next/headers";

import "./globals.css";

import TrpcProvider from "@/lib/trpc/Provider";
import ThemeProvider from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const grotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-grotesque",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${grotesque.variable} ${geistSans.className} antialiased`}
        suppressHydrationWarning
      >
        <TrpcProvider cookies={cookieStore.toString()}>
          <ThemeProvider>{children}</ThemeProvider>
        </TrpcProvider>
      </body>
    </html>
  );
}