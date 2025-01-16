import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { getGlobalData, getGlobalPageMetadata } from "@/data/loaders";
import "./globals.css";

import { Header } from "@/components/custom/header";
import { Footer } from "@/components/custom/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata: Metadata = {
//   title: "JSW Homes",
//   description: "JSW",
// };

export async function generateMetadata(): Promise<Metadata> {
  const metadata = await getGlobalPageMetadata();

  return {
    title: metadata?.data?.title ?? "JSW Homes",
    description: metadata?.data?.description ?? "JSW Homes",
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const globalData = await getGlobalData();
  // console.log("here!!");
  // console.dir(globalData, { depth: null });

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header data={globalData.data.header} />
        {children}
        <Footer data={globalData.data.footer} />
      </body>
    </html>
  );
}
