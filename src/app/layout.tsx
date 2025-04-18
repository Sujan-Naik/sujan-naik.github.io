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
                <div className="flex-grow bg-background-primary px-4 py-4 md:px-8">
                    <div className="bg-background-tertiary rounded-lg shadow-md p-4 mx-auto max-w-4xl">
                        {children}
                    </div>
                </div>
            </div>
        </body>
    </html>
            </>
    );
}
