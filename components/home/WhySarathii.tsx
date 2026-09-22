'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
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
  Quote,
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
          kicker="02 / The Sarathii Standard"
          title={
            <>
              What Sarathii Offers{' '}
              <br className="hidden sm:inline" />
              <span className="italic font-normal text-[#7B2A7A]">
                That Others Do Not
              </span>
            </>
          }
          description="Sarathii does not offer generic, mass-market coaching. We provide transformative personal mentorship rooted in high-yield writing, strategic planning, and emotional mastery under Founder & Chief Mentor Jay Prakash Singh."
        />

        {/* 6-Pillar Interactive Navigation Tabs across Full Width (Eliminating Left Void) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-3.5 mt-6 mb-6">
          {whatSarathiiOffers.map((pillar, index) => {
            const isActive = activePillar === index
            return (
              <button
                key={pillar.number}
                onClick={() => setActivePillar(index)}
                className={`p-3.5 sm:p-4 rounded-2xl text-left transition-all duration-300 flex flex-col justify-between border relative overflow-hidden group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7B2A7A] ${
                  isActive
                    ? 'bg-[#4B1458] text-white border-[#D4AF6A] shadow-lg -translate-y-1 ring-2 ring-[#D4AF6A]/50'
                    : 'bg-white hover:bg-[#FFFDF9] text-[#1F1722] border-[#E5DDD8] hover:border-[#D4AF6A] shadow-sm'
                }`}
                data-cursor="explore"
              >
                {/* Active Gold Top Highlight */}
                {isActive && (
                  <motion.div
                    layoutId="pillarTopIndicator"
                    className="absolute top-0 left-0 right-0 h-1 bg-[#D4AF6A]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}

                <div className="flex items-center justify-between mb-2 w-full">
                  <span
                    style={{ fontFamily: "var(--font-sans), 'Plus Jakarta Sans', sans-serif" }}
                    className={`text-xs sm:text-sm font-bold tracking-widest ${
                      isActive ? 'text-[#D4AF6A]' : 'text-[#7B2A7A]'
                    }`}
                  >
                    Discipline {pillar.number}
                  </span>

                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isActive
                        ? 'bg-white/20 text-[#E6CFA5] scale-105'
                        : 'bg-[#F8F5F2] text-[#6E6271] group-hover:text-[#4B1458]'
                    }`}
                  >
                    {iconMap[pillar.icon]}
                  </div>
                </div>

                <div className="font-serif text-sm sm:text-base font-bold leading-snug line-clamp-2">
                  {pillar.title}
                </div>
              </button>
            )
          })}
        </div>

        {/* Full-Width Deep Editorial Feature Showcase Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activePillar}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="bg-gradient-to-br from-[#350C3E] via-[#2A0932] to-[#1F0724] text-[#FFFDF9] rounded-3xl p-6 sm:p-8 lg:p-10 border border-[#D4AF6A]/30 relative overflow-hidden shadow-2xl"
          >
            {/* Decorative ambient aura and number watermark */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#7B2A7A]/25 rounded-full blur-3xl pointer-events-none" />
            <span
              style={{ fontFamily: "var(--font-sans), 'Plus Jakarta Sans', sans-serif" }}
              className="absolute top-4 right-8 font-black text-8xl sm:text-9xl text-white/[0.04] pointer-events-none select-none"
            >
              {whatSarathiiOffers[activePillar].number}
            </span>

            {/* Top Bar inside Showcase */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-white/10 relative z-10">
              <div className="flex items-center gap-2 text-xs sm:text-sm uppercase tracking-[0.2em] text-[#D4AF6A] font-bold">
                <Sparkles size={15} className="text-[#D4AF6A]" />
                <span>Discipline {whatSarathiiOffers[activePillar].number} of 06 · The Sarathii Standard</span>
              </div>

              <div className="flex items-center gap-2 text-xs sm:text-sm text-[#E5DDD8]/70 font-medium">
                <span>Phase {activePillar + 1} of {whatSarathiiOffers.length}</span>
              </div>
            </div>

            {/* Balanced 2-Column Internal Grid (Zero Empty Space) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start relative z-10">
              {/* Left Column (5 cols): Title, Core Principle, Thematic Image & Pull Quote */}
              <div className="lg:col-span-5 space-y-4">
                <h3 className="font-serif text-3xl sm:text-4xl text-[#FFFDF9] font-normal leading-tight">
                  {whatSarathiiOffers[activePillar].title}
                </h3>

                <p className="font-serif text-base sm:text-lg lg:text-xl text-[#E6CFA5] italic leading-relaxed border-l-2 border-[#D4AF6A]/60 pl-4 py-0.5">
                  &ldquo;{whatSarathiiOffers[activePillar].headline}&rdquo;
                </p>

                {/* Thematic Imagery Spotlight for the Discipline */}
                <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-[#D4AF6A]/50 shadow-xl group">
                  <Image
                    src={
                      activePillar === 0
                        ? '/images/sarathii-writing-mastery.jpg'
                        : activePillar === 1 || activePillar === 2
                        ? '/images/sarathii-thinking-lab.jpg'
                        : '/images/sarathii-philosophy-chamber.jpg'
                    }
                    alt={whatSarathiiOffers[activePillar].title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 480px"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1F0724]/90 via-black/20 to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs sm:text-sm text-[#E6CFA5]">
                    <span className="font-serif italic font-medium">
                      {activePillar === 0
                        ? 'The Art of Concise Expression'
                        : activePillar === 1 || activePillar === 2
                        ? 'The Cognitive Laboratory'
                        : 'Sanctuary of Strategy & Fortitude'}
                    </span>
                    <span className="text-[10px] sm:text-xs uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-[#1A051F]/85 border border-[#D4AF6A]/40 text-[#E6CFA5]">
                      {activePillar === 0
                        ? 'UPSC Mains Mastery'
                        : activePillar === 1 || activePillar === 2
                        ? 'Coherent Logic'
                        : 'Leadership Mindset'}
                    </span>
                  </div>
                </div>

                {/* Core Takeaway Quote Box */}
                <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 flex items-start gap-3 text-xs sm:text-sm font-serif italic text-[#E6CFA5] shadow-inner">
                  <Quote size={18} className="text-[#D4AF6A] shrink-0 mt-0.5" />
                  <div>
                    <p className="leading-snug">&ldquo;{whatSarathiiOffers[activePillar].quote}&rdquo;</p>
                    <span className="block not-italic text-[11px] uppercase tracking-wider text-[#E5DDD8]/60 font-sans font-bold mt-2">
                      — Jay Prakash Singh, Founder & Chief Mentor
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column (7 cols): Full Narrative, Directives & Action Controls */}
              <div className="lg:col-span-7 space-y-4">
                {/* Narrative Paragraphs from the Chief Mentor */}
                <div className="space-y-3.5 text-sm sm:text-base lg:text-[1.05rem] text-[#E5DDD8]/95 leading-relaxed font-normal">
                  {whatSarathiiOffers[activePillar].paragraphs?.map((para, idx) => (
                    <p key={idx}>{para}</p>
                  )) || (
                    <p>{whatSarathiiOffers[activePillar].description}</p>
                  )}
                </div>

                {/* Specific Structured Criteria / Directives */}
                {whatSarathiiOffers[activePillar].bullets && (
                  <div className="p-5 sm:p-6 rounded-2xl bg-white/[0.05] border border-[#D4AF6A]/30 space-y-3 shadow-inner">
                    <div className="text-xs sm:text-sm uppercase tracking-wider text-[#E6CFA5] font-bold flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-[#D4AF6A]" />
                      <span>{whatSarathiiOffers[activePillar].bullets.title}</span>
                    </div>
                    <ul className="space-y-2 pt-1">
                      {whatSarathiiOffers[activePillar].bullets.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm lg:text-base text-[#E5DDD8]/90 leading-relaxed">
                          <span className="w-2 h-2 rounded-full bg-[#D4AF6A] shrink-0 mt-2" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Action Navigation Footer */}
                <div className="pt-3 flex flex-wrap items-center justify-between gap-4 border-t border-white/10">
                  <div className="flex items-center gap-2.5">
                    <button
                      onClick={() =>
                        setActivePillar((prev) => (prev > 0 ? prev - 1 : whatSarathiiOffers.length - 1))
                      }
                      className="px-4 py-2 rounded-full bg-white/5 hover:bg-white/15 border border-white/15 text-xs uppercase tracking-wider font-bold text-white transition-all hover:scale-105 active:scale-95"
                    >
                      ← Previous
                    </button>
                    <button
                      onClick={() =>
                        setActivePillar((prev) => (prev < whatSarathiiOffers.length - 1 ? prev + 1 : 0))
                      }
                      className="px-5 py-2 rounded-full bg-[#E6CFA5] hover:bg-white text-[#2A0932] text-xs uppercase tracking-wider font-bold transition-all shadow-md hover:scale-105 active:scale-95"
                    >
                      Next Discipline →
                    </button>
                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-xs sm:text-sm uppercase tracking-wider font-bold text-[#E6CFA5] hover:text-white transition-colors"
                  >
                    <span>Request Diagnostic Session</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </Container>
    </section>
  )
}
