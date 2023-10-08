import { Footer, Navbar } from '@/Components'
import './globals.css'
import type { Metadata } from 'next'
import { Anybody } from 'next/font/google'

const anybody = Anybody({ subsets: ['latin'] })


export const metadata: Metadata = {
  title: 'Cars ShowCase',
  description: 'Cars Show Case',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={anybody.className}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
