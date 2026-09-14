'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  PenTool,
  Brain,
  Search,
  Target,
  Sparkles,
  Sun,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
} from 'lucide-react'
import { whatSarathiiOffers } from '@/data/philosophy'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'

const iconMap: Record<string, React.ReactNode> = {
  PenTool: <PenTool size={22} />,
  Brain: <Brain size={22} />,
  Search: <Search size={22} />,
  Target: <Target size={22} />,
  Sparkles: <Sparkles size={22} />,
  Sun: <Sun size={22} />,
}

export function WhySarathii() {
  const [activePillar, setActivePillar] = useState(0)

  return (
    <section id="why-sarathii" className="py-20 lg:py-28 bg-[#FFFDF9] relative">
      <Container>
        <SectionHeading
          kicker="02 / What We Offer"
          title={
            <>
              What Sarathii Offers{' '}
              <br className="hidden sm:inline" />
              <span className="italic font-normal text-[#7B2A7A]">
                That Others Do Not
              </span>
            </>
          }
          description="We do not offer generic, mass-market coaching. We offer transformative personal mentorship rooted in high-yield writing, strategic planning, and emotional mastery."
        />

        {/* Desktop Interactive Layout (Tab system on Left, Full Editorial Showcase on Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mt-12">
          {/* Left Column: 6 Pillars Selector (5 cols) */}
          <div className="lg:col-span-5 space-y-2.5">
            {whatSarathiiOffers.map((pillar, index) => {
              const isActive = activePillar === index
              return (
                <button
                  key={pillar.number}
                  onClick={() => setActivePillar(index)}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl transition-all duration-300 flex items-center justify-between border ${
                    isActive
                      ? 'bg-[#4B1458] text-white border-[#4B1458] shadow-md shadow-[#4B1458]/15'
                      : 'bg-[#F8F5F2]/80 hover:bg-[#F8F5F2] text-[#1F1722] border-[#E5DDD8]/60 hover:border-[#D4AF6A]'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <span
                      className={`font-serif text-sm font-semibold tracking-wider ${
                        isActive ? 'text-[#D4AF6A]' : 'text-[#7B2A7A]'
                      }`}
                    >
                      {pillar.number}
                    </span>
                    <span className="font-serif text-base sm:text-lg font-medium">
                      {pillar.title}
                    </span>
                  </div>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center ${
                      isActive ? 'bg-white/20 text-[#E6CFA5]' : 'text-[#6E6271]'
                    }`}
                  >
                    {iconMap[pillar.icon]}
                  </div>
                </button>
              )
            })}
          </div>

          {/* Right Column: Deep Editorial Feature Panel (7 cols) */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activePillar}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="bg-[#2A0932] text-[#FFFDF9] rounded-3xl p-8 sm:p-10 lg:p-12 border border-[#D4AF6A]/30 relative overflow-hidden shadow-xl"
              >
                {/* Decorative glow and number watermark */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#7B2A7A]/25 rounded-full blur-3xl pointer-events-none" />
                <span className="absolute top-4 right-8 font-serif text-8xl font-bold text-white/5 pointer-events-none select-none">
                  {whatSarathiiOffers[activePillar].number}
                </span>

                <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-[#D4AF6A] font-semibold mb-4">
                  <span>Pillar {whatSarathiiOffers[activePillar].number}</span>
                  <span>•</span>
                  <span>Core Discipline</span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#FFFDF9] font-normal leading-snug mb-4">
                  {whatSarathiiOffers[activePillar].title}
                </h3>

                <p className="font-serif text-base sm:text-lg text-[#E6CFA5] italic leading-relaxed mb-6">
                  &ldquo;{whatSarathiiOffers[activePillar].headline}&rdquo;
                </p>

                <p className="text-sm sm:text-base text-[#E5DDD8]/90 leading-relaxed mb-8">
                  {whatSarathiiOffers[activePillar].description}
                </p>

                {/* Key Bullet Takeaways */}
                <div className="space-y-3 pt-4 border-t border-white/10">
                  <div className="text-xs uppercase tracking-wider text-[#D4AF6A] font-semibold">
                    Key Mentorship Focus Areas:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {whatSarathiiOffers[activePillar].keyPoints.map((point) => (
                      <div key={point} className="flex items-start gap-2 text-xs sm:text-sm text-[#E5DDD8]/85">
                        <CheckCircle2 size={15} className="text-[#D4AF6A] shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pillar Quote */}
                <div className="mt-8 pt-6 border-t border-white/10 text-xs sm:text-sm font-serif italic text-[#E6CFA5]/90">
                  {whatSarathiiOffers[activePillar].quote}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </section>
  )
}
