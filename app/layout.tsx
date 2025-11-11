import type { Metadata } from 'next'
import { Readex_Pro } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const readexPro = Readex_Pro({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-readex-pro',
})

export const metadata: Metadata = {
  title: 'Circular Shipping Company',
  description: 'Sustainable shipping solutions for a circular economy',
  icons: {
    icon: '/images/Icoon.png',
    shortcut: '/images/Icoon.png',
    apple: '/images/Icoon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={readexPro.variable}>
      <body className={`${readexPro.className} flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
