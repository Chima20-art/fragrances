import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";
import Head from "next/head";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Superbfragrance",
  description: "Parfums par 10 ml 5 ml et des parfums complet authentique gavec guarentie",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <Head>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <body className={inter.className}>
    <Providers>{children}</Providers>
        <FloatingWhatsAppButton />

      </body>
    </html>
  );
}
