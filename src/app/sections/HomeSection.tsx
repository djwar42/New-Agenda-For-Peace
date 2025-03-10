'use client'
import React from 'react'
import { motion } from 'motion/react'
import { Earth, ArrowDown } from 'lucide-react'

export default function HomeSection() {
  const scrollToNext = () =>
    document
      .getElementById('origins-scrollplace')
      ?.scrollIntoView({ behavior: 'smooth' })

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className='bg-[radial-gradient(circle_at_center_top,_#009EDB,_#4DB6E6,_#1F2A44)] text-white flex items-center justify-center py-20'
    >
      <div className='max-w-7xl mx-auto px-4 md:px-6 lg:px-12 text-center'>
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3 }}
          className='mb-12 inline-block'
        >
          <Earth size={180} color='#FFFFFF' />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className='text-6xl md:text-8xl font-extrabold mb-8'
        >
          A New Agenda for Peace
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='text-2xl md:text-3xl max-w-5xl mx-auto mb-12'
        >
          Unveiled on 20 July 2023 by UN Secretary-General António Guterres,
          this transformative policy brief presents a comprehensive strategy to
          bolster multilateral efforts for peace. Stemming from{' '}
          <i>Our Common Agenda</i> and the 75th anniversary declaration, it
          confronts a world marked by geopolitical shifts, escalating tensions,
          and climate crises. It calls for renewed global cooperation to address
          these intertwined challenges, emphasizing the urgency of collective
          action to fulfill the UN Charter’s promise of peace, sustainable
          development, and human rights for all.
        </motion.p>
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          className='cursor-pointer mb-12 inline-block'
          onClick={scrollToNext}
        >
          <ArrowDown size={60} color='#FFFFFF' />
        </motion.div>
        <div id='origins-scrollplace'></div>
      </div>
    </motion.div>
  )
}
