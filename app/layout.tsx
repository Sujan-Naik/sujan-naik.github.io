import {Pixelify_Sans} from 'next/font/google'
import "./globals.css"

const pixelify = Pixelify_Sans({
    subsets: ['latin'],
    display: 'swap',
})

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className={pixelify.className}>
        <body>{children}</body>
        </html>
    )
}