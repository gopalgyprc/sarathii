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
    <section id="why-sarathii" className="py-10 lg:py-14 bg-[#FFFDF9] relative">
      <Container>
        <SectionHeading
          align="center"
          kicker="04 / The Thinking Laboratory"
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

        {/* Interactive Layout (Selector on Left with Indicator, Deep Editorial Showcase on Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start mt-6">
          {/* Left Column: 6 Pillars Selector (5 cols) with Active Track Indicator */}
          <div className="lg:col-span-5 relative space-y-2">
            {whatSarathiiOffers.map((pillar, index) => {
              const isActive = activePillar === index
              return (
                <button
                  key={pillar.number}
                  onClick={() => setActivePillar(index)}
                  className={`w-full text-left p-3 sm:p-3.5 rounded-2xl transition-all duration-300 flex items-center justify-between border relative overflow-hidden group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7B2A7A] ${
                    isActive
                      ? 'bg-[#4B1458] text-white border-[#4B1458] shadow-md -translate-y-0.5'
                      : 'bg-[#F8F5F2]/80 hover:bg-[#F8F5F2] text-[#1F1722] border-[#E5DDD8]/70 hover:border-[#D4AF6A]'
                  }`}
                >
                  {/* Left Active Indicator Bar */}
                  {isActive && (
                    <motion.div
                      layoutId="pillarActiveIndicator"
                      className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#D4AF6A]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}

                  <div className="flex items-center gap-3 pl-1.5">
                    <span
                      style={{ fontFamily: "var(--font-sans), 'Poppins', sans-serif" }}
                      className={`text-xs font-bold tracking-widest ${
                        isActive ? 'text-[#D4AF6A]' : 'text-[#7B2A7A]'
                      }`}
                    >
                      {pillar.number}
                    </span>
                    <span className="font-serif text-sm sm:text-base font-medium">
                      {pillar.title}
                    </span>
                  </div>

                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isActive
                        ? 'bg-white/20 text-[#E6CFA5] scale-105'
                        : 'text-[#6E6271] group-hover:text-[#4B1458]'
                    }`}
                  >
                    {iconMap[pillar.icon]}
                  </div>
                </button>
              )
            })}
          </div>

          {/* Right Column: Deep Editorial Feature Panel (7 cols, Sticky on Desktop) */}
          <div className="lg:col-span-7 lg:sticky lg:top-24">
            <AnimatePresence mode="wait">
              <motion.div
                key={activePillar}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: 'easeInOut' }}
                className="bg-gradient-to-br from-[#350C3E] via-[#2A0932] to-[#1F0724] text-[#FFFDF9] rounded-3xl p-6 sm:p-8 lg:p-10 border border-[#D4AF6A]/30 relative overflow-hidden shadow-xl"
              >
                {/* Decorative ambient aura and number watermark */}
                <div className="absolute top-0 right-0 w-72 h-72 bg-[#7B2A7A]/25 rounded-full blur-3xl pointer-events-none" />
                <span
                  style={{ fontFamily: "var(--font-sans), 'Poppins', sans-serif" }}
                  className="absolute top-4 right-8 font-black text-8xl sm:text-9xl text-white/[0.04] pointer-events-none select-none"
                >
                  {whatSarathiiOffers[activePillar].number}
                </span>

                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#D4AF6A] font-bold mb-3 relative z-10">
                  <Sparkles size={12} className="text-[#D4AF6A]" />
                  <span>Discipline {whatSarathiiOffers[activePillar].number} of 06</span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl text-[#FFFDF9] font-normal leading-snug mb-3 relative z-10">
                  {whatSarathiiOffers[activePillar].title}
                </h3>

                <p className="font-serif text-sm sm:text-base text-[#E6CFA5] italic leading-relaxed mb-4 relative z-10 border-l-2 border-[#D4AF6A]/60 pl-3">
                  &ldquo;{whatSarathiiOffers[activePillar].headline}&rdquo;
                </p>

                <p className="text-xs sm:text-sm text-[#E5DDD8]/90 leading-relaxed mb-5 relative z-10 font-normal">
                  {whatSarathiiOffers[activePillar].description}
                </p>

                {/* Key Focus Bullet Areas */}
                <div className="space-y-2 pt-4 border-t border-white/10 relative z-10">
                  <div className="text-[11px] uppercase tracking-wider text-[#D4AF6A] font-bold flex items-center gap-1.5">
                    <CheckCircle2 size={13} />
                    <span>Key Mentorship Focus Areas:</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                    {whatSarathiiOffers[activePillar].keyPoints.map((point) => (
                      <div key={point} className="flex items-start gap-2 text-xs text-[#E5DDD8]/90">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF6A] shrink-0 mt-1.5" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pillar Quote */}
                <div className="mt-5 pt-4 border-t border-white/10 text-xs font-serif italic text-[#E6CFA5]/90 relative z-10">
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
