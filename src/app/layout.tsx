import { Plus_Jakarta_Sans } from 'next/font/google'

import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'

import './globals.scss'

const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'], weight: ['400'] })
export const metadata = {
  title: 'Devlife',
  description: `Let's have some fun`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={jakarta.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
