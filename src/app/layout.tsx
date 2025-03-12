'use client'
import React from 'react'
import { Inter } from 'next/font/google'
import { motion } from 'motion/react'
import { Bird } from 'lucide-react'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' href='/favicon.svg' type='image/svg+xml' />
        <title>A New Agenda for Peace</title>
      </head>
      <body className={inter.className}>
        <nav className='fixed top-0 w-screen bg-[#009EDB] text-white p-6 shadow-lg flex items-center z-20'>
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: 5 }}
            transition={{
              duration: 0.3,
              repeat: Infinity,
              repeatType: 'reverse'
            }}
            className='mr-4'
          >
            <Bird size={50} color='#FFFFFF' />
          </motion.div>
          <span className='text-3xl font-bold'>A New Agenda for Peace</span>
        </nav>
        <main className='pt-24'>{children}</main>
        <footer className='bg-[#1F2A44] text-white p-6 text-center'>
          <p className='text-lg'>
            A New Agenda for Peace | Website by{' '}
            <a target='_BLANK' href='https://github.com/djwar42'>
              Daniel Warner
            </a>
          </p>
        </footer>
      </body>
    </html>
  )
}
