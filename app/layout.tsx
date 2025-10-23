import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import InstituteNavbar from "./components/Navbar";
import Footer from "./components/Footer";
import ClientWrapper from "./components/ClientWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vithupro AI Institute - The Future of Intelligence",
  description:
    "The most advanced and popular AI institute in the world - Learn, Build, Ship",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClientWrapper>
          <InstituteNavbar />
          {children}
          <Footer />
        </ClientWrapper>
      </body>
    </html>
  );
}
