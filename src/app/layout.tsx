import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HassanBarber",
  description: "Nous proposons des services complets pour homme : coupes, tailles de barbe, soins du visage et coiffage sur mesure. Pour un entretien ou un relooking, notre équipe vous accueille dans un cadre raffiné pour une expérience grooming haut de gamme",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
           <link rel="icon" href="logo.ico" />
        
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}

      >
          <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
