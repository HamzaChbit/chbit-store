
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import ModalProvider from '@/providers/modal-provider'
import ToastProvider from '@/providers/tosat-provider'





const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Store',
  description: 'Store',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
       
        <ModalProvider/>
        <ToastProvider/>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
