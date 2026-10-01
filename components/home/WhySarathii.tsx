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
  Quote,
  ShieldCheck,
  Compass,
  Award,
  HelpCircle,
} from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { sarathiiGenesis } from '@/data/philosophy'

const iconMap = [PenTool, Brain, Search, Target, Sparkles, Sun]

// Background tint per pillar to provide subtle dynamic background feel
const pillarBackgroundAccents = [
  'radial-gradient(ellipse at 80% 20%, rgba(75, 20, 88, 0.08), transparent 60%)',
  'radial-gradient(ellipse at 80% 20%, rgba(212, 175, 106, 0.12), transparent 60%)',
  'radial-gradient(ellipse at 80% 20%, rgba(123, 42, 122, 0.09), transparent 60%)',
  'radial-gradient(ellipse at 80% 20%, rgba(42, 9, 50, 0.08), transparent 60%)',
  'radial-gradient(ellipse at 80% 20%, rgba(212, 175, 106, 0.15), transparent 60%)',
  'radial-gradient(ellipse at 80% 20%, rgba(75, 20, 88, 0.10), transparent 60%)',
]

export function WhySarathii() {
  const [activePillarIndex, setActivePillarIndex] = useState(0)
  const { sixPillars, sarathiiPromise } = sarathiiGenesis
  const activePillar = sixPillars[activePillarIndex]
  const ActiveIcon = iconMap[activePillarIndex]

  return (
    <section id="why-sarathii" className="py-12 lg:py-20 bg-[#FFFDF9] relative overflow-hidden border-t border-[#E5DDD8]/60">
      {/* Ambient background glows */}
      <div className="absolute top-10 right-0 w-[450px] h-[450px] bg-[#4B1458]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[450px] h-[450px] bg-[#D4AF6A]/10 rounded-full blur-3xl pointer-events-none" />

      <Container>
        <SectionHeading
          align="center"
          kicker="03 / The Sarathii Standard"
          title={
            <>
              The Six Pillars of the{' '}
              <span className="font-serif italic font-normal text-[#7B2A7A]">
                Sarathii Method
              </span>
            </>
          }
          description="Every successful candidate develops knowledge. Only a few develop the ability to apply that knowledge effectively under examination conditions. The Sarathii Method is built upon six fundamental pillars that transform an aspirant from a student into a successful Civil Services candidate."
        />

        {/* ================================================================= */}
        {/* INTERACTIVE KNOWLEDGE SYSTEM: LEFT LIST + RIGHT LARGE PANEL */}
        {/* ================================================================= */}
        <div className="mt-10 lg:mt-14 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* LEFT COLUMN: Vertical list of 6 items (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-2.5 sm:gap-3">
            {sixPillars.map((pillar, idx) => {
              const isActive = activePillarIndex === idx
              const PillarIcon = iconMap[idx]

              return (
                <button
                  key={pillar.number}
                  onClick={() => setActivePillarIndex(idx)}
                  className={`w-full text-left p-4 sm:p-4.5 rounded-2xl transition-all duration-300 border flex items-center justify-between group cursor-pointer focus:outline-none ${
                    isActive
                      ? 'bg-[#4B1458] text-white border-[#4B1458] shadow-lg -translate-x-0.5 ring-2 ring-[#D4AF6A]/50'
                      : 'bg-[#F8F5F2] hover:bg-white text-[#2A0932] border-[#E5DDD8] hover:border-[#D4AF6A]'
                  }`}
                  data-cursor="explore"
                  aria-selected={isActive}
                  role="tab"
                >
                  <div className="flex items-center gap-3.5 sm:gap-4 min-w-0">
                    {/* Stage number */}
                    <span
                      className={`text-xs sm:text-sm font-extrabold tracking-widest uppercase shrink-0 font-serif ${
                        isActive ? 'text-[#D4AF6A]' : 'text-[#7B2A7A]'
                      }`}
                    >
                      Pillar {pillar.number}
                    </span>

                    {/* Icon container */}
                    <div
                      className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                        isActive
                          ? 'bg-[#D4AF6A] text-[#2A0932] shadow-sm'
                          : 'bg-white text-[#4B1458] group-hover:bg-[#4B1458]/10'
                      }`}
                    >
                      <PillarIcon size={18} />
                    </div>

                    {/* Title & Subtitle */}
                    <div className="min-w-0">
                      <div
                        className={`font-serif text-base sm:text-lg font-semibold tracking-wide truncate ${
                          isActive ? 'text-white' : 'text-[#2A0932]'
                        }`}
                      >
                        {pillar.title}
                      </div>
                      <div
                        className={`text-xs truncate ${
                          isActive ? 'text-[#E6CFA5]' : 'text-[#6E6271]'
                        }`}
                      >
                        {pillar.subtitle}
                      </div>
                    </div>
                  </div>

                  {/* Active Indicator Arrow */}
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center transition-all ${
                      isActive
                        ? 'bg-white/20 text-[#D4AF6A]'
                        : 'opacity-0 group-hover:opacity-100 text-[#7B2A7A]'
                    }`}
                  >
                    <ArrowRight size={14} />
                  </div>
                </button>
              )
            })}
          </div>

          {/* RIGHT COLUMN: Large Active Content Panel (7 cols) */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activePillar.number}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                style={{
                  background: pillarBackgroundAccents[activePillarIndex],
                }}
                className="h-full bg-white rounded-3xl border border-[#E5DDD8] shadow-xl p-6 sm:p-8 lg:p-10 flex flex-col justify-between relative overflow-hidden"
              >
                {/* Header of Active Panel */}
                <div className="space-y-6">
                  {/* Top Badge Strip */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#E5DDD8]">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2A0932] text-xs font-bold uppercase tracking-widest text-[#D4AF6A]">
                      <span>PILLAR {activePillar.number}</span>
                      <span>·</span>
                      <span>{activePillar.subtitle}</span>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs font-semibold text-[#7B2A7A]">
                      <ShieldCheck size={14} className="text-[#D4AF6A]" />
                      <span>The Sarathii Method</span>
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <div>
                    <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#2A0932] font-normal leading-tight">
                      {activePillar.title}
                    </h3>
                    <p className="font-serif text-lg sm:text-xl italic text-[#7B2A7A] mt-2 leading-relaxed">
                      &ldquo;{activePillar.tagline}&rdquo;
                    </p>
                  </div>

                  {/* Detailed Description */}
                  <p className="text-sm sm:text-base text-[#4A3E4D] leading-relaxed">
                    {activePillar.description}
                  </p>

                  {/* If Pillar IV, render the 4 Essential Questions */}
                  {activePillar.fourQuestions && (
                    <div className="space-y-3 pt-2">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#2A0932] flex items-center gap-2">
                        <HelpCircle size={15} className="text-[#D4AF6A]" />
                        Four Essential Strategic Questions:
                      </h4>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {activePillar.fourQuestions.map((q, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-3 p-3 rounded-xl bg-[#F8F5F2] border border-[#E5DDD8] text-xs sm:text-sm font-semibold text-[#2A0932]"
                          >
                            <span className="w-6 h-6 rounded-full bg-[#4B1458] text-white flex items-center justify-center text-xs shrink-0 font-mono">
                              0{i + 1}
                            </span>
                            <span>{q}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Core Takeaway Box */}
                  <div className="bg-[#F8F5F2] rounded-2xl p-4 sm:p-5 border-l-4 border-[#D4AF6A] flex items-start gap-3">
                    <Quote size={20} className="text-[#D4AF6A] shrink-0 mt-0.5" />
                    <p className="text-xs sm:text-sm font-medium text-[#2A0932] leading-relaxed italic font-serif">
                      &ldquo;{activePillar.coreTakeaway}&rdquo;
                    </p>
                  </div>
                </div>

                {/* Golden Maxim Box */}
                <div className="mt-8 pt-6 border-t border-[#E5DDD8] bg-gradient-to-r from-[#2A0932] to-[#4B1458] text-white rounded-2xl p-5 sm:p-6 shadow-md flex items-center justify-between gap-4">
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-widest text-[#D4AF6A] mb-1">
                      Sarathii Axiom:
                    </div>
                    <p className="text-sm sm:text-base font-serif italic text-[#FFFDF9] leading-relaxed">
                      &ldquo;{activePillar.quote}&rdquo;
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-[#D4AF6A] shrink-0">
                    <ActiveIcon size={20} />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* ================================================================= */}
        {/* THE SARATHII PROMISE: ILLUMINATED LUXURY BANNER */}
        {/* ================================================================= */}
        <div className="mt-14 sm:mt-16 bg-gradient-to-br from-[#1A041E] via-[#2A0932] to-[#17031A] text-white rounded-3xl p-8 sm:p-10 lg:p-12 border-2 border-[#D4AF6A]/40 shadow-2xl relative overflow-hidden">
          {/* Ambient decorative glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF6A]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#7B2A7A]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E6CFA5]/15 border border-[#D4AF6A]/40 text-xs uppercase tracking-[0.2em] font-bold text-[#E6CFA5]">
              <Award size={14} className="text-[#D4AF6A]" />
              <span>{sarathiiPromise.title}</span>
            </div>

            <p className="font-serif text-xl sm:text-2xl md:text-3xl text-white font-normal leading-relaxed italic">
              &ldquo;{sarathiiPromise.paragraphs[0]}&rdquo;
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
              <div className="px-6 py-3 rounded-full bg-[#E6CFA5] text-[#2A0932] font-serif text-sm sm:text-base font-bold shadow-lg tracking-wide">
                {sarathiiPromise.credo}
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs uppercase tracking-widest text-[#E5DDD8]/80 font-semibold">
              <span className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-[#D4AF6A]" />
                Disciplined Thinking
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-[#D4AF6A]" />
                Effective Communication
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-[#D4AF6A]" />
                Balanced Judgment
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-[#D4AF6A]" />
                Emotional Strength
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-[#D4AF6A]" />
                Purposeful Leadership
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
