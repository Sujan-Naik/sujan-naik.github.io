import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {pixelifySans} from "@/app/ui/fonts";



export const metadata: Metadata = {
  title: "Sujan Naik",
  description: "Sujan Naik personal website",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
