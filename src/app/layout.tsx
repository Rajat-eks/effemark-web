import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ReduxProvider from "@/components/ReduxProvider";

import { Poppins } from "next/font/google";
import Head from "next/head";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"], // You can specify the weights you want
  variable: "--font-poppins", // Optional: to use as a CSS variable
});

export const metadata: Metadata = {
  title: "Effemark",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>
          EffeMark | Professional Trademark Search and Brand Monitoring
        </title>
        <meta
          name="description"
          content="Secure your intellectual property with expert trademark services. Relied upon by legal professionals & enterprises globally. Quick, reliable & top-tier trademark solutions. Reach Out Today!"
        />
        <meta
          name="keywords"
          content="Trademark Search, Trademark Monitoring, Trademark Watch"
        />
      </Head>
      <body className={`${poppins.variable}`}>
        <ReduxProvider>
          <Header />
          {children}
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
