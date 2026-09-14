import React from 'react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/home/Hero'
import { ImpactStrip } from '@/components/home/ImpactStrip'
import { Philosophy } from '@/components/home/Philosophy'
import { WhySarathii } from '@/components/home/WhySarathii'
import { SarathiiMethod } from '@/components/home/SarathiiMethod'
import { Experience } from '@/components/home/Experience'
import { WhoShouldJoin } from '@/components/home/WhoShouldJoin'
import { BookShowcase } from '@/components/home/BookShowcase'
import { InsightsPreview } from '@/components/home/InsightsPreview'
import { FinalCTA } from '@/components/home/FinalCTA'

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FFFDF9]">
      <Header />
      <main className="flex-grow">
        <Hero />
        <ImpactStrip />
        <Philosophy />
        <WhySarathii />
        <SarathiiMethod />
        <Experience />
        <WhoShouldJoin />
        <BookShowcase />
        <InsightsPreview />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
