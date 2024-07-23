import type { Metadata } from 'next'
import { Roboto_Condensed } from 'next/font/google'
import './globals.css'
import { Toaster } from 'sonner'
import { Analytics } from '@vercel/analytics/react'

const inter = Roboto_Condensed({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Steven's Portfolio - Front end Developer",
  description: 'Front-end developer for people who need a functional and attractive project.'
}

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html className="dark" lang="en">
      <body className={`${inter.className} `}>
        {children}
        <Toaster richColors/>
        <Analytics />
      </body>
    </html>
  )
}
