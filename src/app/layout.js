import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "./header/header";
import Footer from "./footer/footer";
import "./globals.css";
import GDPRBanner from "./gdpr/gdpr";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "agro-controll.com. Smart solutions into smart world.",
  description:
    "Industrial automation, embedded systems, and analytics for smart livestock and commercial farms.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Crisp Chat Script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.$crisp = [];
              window.CRISP_WEBSITE_ID = "7541a482-977d-4867-9a96-944d7c8b4871";
              (function(){
                var d = document;
                var s = d.createElement("script");
                s.src = "https://client.crisp.chat/l.js";
                s.async = 1;
                d.getElementsByTagName("head")[0].appendChild(s);
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen bg-[#0f111a] text-white`}
      >
        {/* Navbar */}
        <Navbar />

        {/* Main content */}
        <main className="flex-1">{children}</main>
        {/* GDPR Banner */}
        <GDPRBanner />
        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
