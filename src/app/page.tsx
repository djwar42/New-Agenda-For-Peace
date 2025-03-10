'use client'
import React from 'react'
import HomeSection from './sections/HomeSection'
import OriginsSection from './sections/OriginsSection'
import PrinciplesSection from './sections/PrinciplesSection'
import ActionsSection from './sections/ActionsSection'
import ReformsSection from './sections/ReformsSection'

export default function Home() {
  return (
    <main className='min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 text-[#1F2A44] font-sans leading-relaxed'>
      <HomeSection />
      <div className='grid grid-cols-1 gap-12 px-4 md:px-6 lg:px-12'>
        <OriginsSection />
        <PrinciplesSection />
        <ActionsSection />
        <ReformsSection />
      </div>
    </main>
  )
}
