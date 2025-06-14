import type {Metadata} from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/app/ui/navbar";


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
        <>
        <NavBar/>
        <html lang="en">
        <body className="bg-background-primary text-foreground-primary">
            <div className="min-h-screen flex flex-col">
                {children}
            </div>
        </body>
    </html>
            </>
    );
}
