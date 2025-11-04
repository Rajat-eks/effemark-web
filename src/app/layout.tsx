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
  description:
    "Secure your intellectual property with expert trademark services. Relied upon by legal professionals & enterprises globally. Quick, reliable & top-tier trademark solutions. Reach Out Today!",
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
        {/* Microsoft Clarity */}
        <Script
          id="microsoft-clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "tqeua0loir");
            `,
          }}
        />
        <meta
          name="google-site-verification"
          content="6Hu81IiEcY5Lin5bqYcwscx_0hZDtqmO5I0spEWUV4Q"
        />
        {/* Tidio Chat Bot */}
        <Script
          src="https://code.tidio.co/uplzcklxy5qk02tcd9t4wbq1weyxfodo.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
