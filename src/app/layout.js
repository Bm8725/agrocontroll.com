import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "./header/header";
import Footer from "./footer/footer";
import "./globals.css";

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
  description: "Industrial automation, embedded systems, and analytics for smart livestock and commercial farms.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Navbar />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
      <Footer />
    </html>
  );
}
