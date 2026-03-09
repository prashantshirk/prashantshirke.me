import type { Metadata } from "next"
import { Geist_Mono } from "next/font/google"
import "./globals.css"
import { Navbar } from "../components/navbar"
import { Analytics } from "@vercel/analytics/next"
const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-mono",
})

// ── PERSONAL INFO ────────────────────────────────────────────────────────────
// YOUR DOMAIN: prashantshirke.me
// Edit the values below to update your name or tagline.
// ─────────────────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL("https://prashantshirke.me"),
  title: {
    default: "Prashant Shirke",                               // YOUR NAME
    template: "%s | Prashant Shirke",                         // YOUR NAME
  },
  description: "BSc IT Student | Aspiring Machine Learning Engineer.", // YOUR TAGLINE
  openGraph: {
    title: "Prashant Shirke",                                 // YOUR NAME
    description: "BSc IT Student | Aspiring Machine Learning Engineer.", // YOUR TAGLINE
    url: "https://prashantshirke.me",
    siteName: "Prashant Shirke",                              // YOUR NAME
    locale: "en_US",
    type: "website",
    images: ["https://prashantshirke.me/og/home"],
  },
  robots: {
    index: true,
    follow: true,
    "max-video-preview": -1,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
  twitter: {
    title: "Prashant Shirke",                                 // YOUR NAME
    card: "summary_large_image",
    creator: "@prashantshirke_",                                 // TODO: add your Twitter handle if you have one
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${geistMono.variable} antialiased min-h-screen font-mono`}
      >
        <div className="max-w-4xl mx-auto px-4 py-8">
          <Navbar />
          {children}
        </div>
      </body>
      <Analytics />
    </html>
  )
}
