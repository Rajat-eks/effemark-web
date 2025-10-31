import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ReduxProvider from "@/components/ReduxProvider";
import ScrollToTop from "@/components/ScrollToTop";
import Script from "next/script";

import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"], // You can specify the weights you want
  variable: "--font-poppins", // Optional: to use as a CSS variable
});

export const metadata: Metadata = {
  title: "EffeMark | Professional Trademark Search and Brand Monitoring",
  description: "Secure your intellectual property with expert trademark services. Relied upon by legal professionals & enterprises globally. Quick, reliable & top-tier trademark solutions. Reach Out Today!",
  keywords: "Trademark Search, Trademark Monitoring, Trademark Watch",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable}`}>
        <ReduxProvider>
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </ReduxProvider>
        <Script
          src="//code.tidio.co/uplzcklxy5qk02tcd9t4wbq1weyxfodo.js"
          async
        ></Script>
      </body>
    </html>
  );
}
