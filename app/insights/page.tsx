import React from 'react'
import type { Metadata } from 'next'
import { Sparkles, Compass } from 'lucide-react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Container } from '@/components/ui/Container'
import { articles } from '@/data/articles'
import { InsightsExplorer } from '@/components/insights/InsightsExplorer'

export const metadata: Metadata = {
  title: 'Insights & Strategy Journal | Sarathii',
  description:
    'Essays and strategic notes on UPSC preparation, administrative leadership, mental resilience, and answer-writing by Jay Prakash Singh.',
}

export default function InsightsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FFFDF9]">
      <Header />

      <main className="flex-grow">
        {/* Subpage Hero Section */}
        <section className="relative pt-28 pb-14 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-24 bg-[#1A041E] text-white border-b border-[#D4AF6A]/30 text-center overflow-hidden">
          {/* Ambient Lighting Gradients */}
          <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#7B2A7A]/25 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-[450px] h-[450px] bg-[#D4AF6A]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute inset-0 bg-pattern-dark opacity-40 pointer-events-none" />

          <Container className="relative z-10">
            <div className="max-w-3xl mx-auto space-y-4">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#2A0932]/90 border border-[#D4AF6A]/40 text-xs uppercase tracking-[0.2em] font-semibold text-[#E6CFA5] shadow-lg backdrop-blur-md">
                <Sparkles size={13} className="text-[#D4AF6A] animate-pulse" />
                <span>The Sarathii Journal</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-[4rem] text-[#FFFDF9] font-normal leading-[1.05] tracking-tight">
                Notes for the{' '}
                <span className="italic text-[#E6CFA5]">
                  Journey Ahead
                </span>
              </h1>

              <p className="text-base sm:text-lg text-[#E5DDD8]/90 leading-relaxed max-w-2xl mx-auto font-normal">
                Strategic monographs on high-yield exam preparation, administrative statesmanship, constitutional ethics, and mental fortitude by Jay Prakash Singh.
              </p>
            </div>
          </Container>

          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF6A]/60 to-transparent" />
        </section>

        {/* Dynamic Interactive Explorer & Archive */}
        <div className="py-10 lg:py-14">
          <InsightsExplorer articles={articles} />
        </div>
      </main>

      <Footer />
    </div>
  )
}
