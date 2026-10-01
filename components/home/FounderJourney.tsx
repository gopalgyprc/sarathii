'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Shield,
  Briefcase,
  Scale,
  Feather,
  Compass,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Quote,
} from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { founderJourneyStages, FounderJourneyStage } from '@/data/mentorship'

const iconMap = {
  Shield: Shield,
  Briefcase: Briefcase,
  Scale: Scale,
  Feather: Feather,
  Compass: Compass,
}

export function FounderJourney() {
  const [activeStageIndex, setActiveStageIndex] = useState(0)
  const activeStage: FounderJourneyStage = founderJourneyStages[activeStageIndex]
  const ActiveIcon = iconMap[activeStage.iconName]

  return (
    <section
      id="founder-journey"
      className="py-12 lg:py-20 bg-[#FFFDF9] relative overflow-hidden border-t border-[#E5DDD8]/60"
    >
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-[#4B1458]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-[#D4AF6A]/10 rounded-full blur-3xl pointer-events-none" />

      <Container>
        <SectionHeading
          align="center"
          kicker="07 / Five Decades of Grounded Service"
          title={
            <>
              The Journey Behind Sarathii —{' '}
              <span className="font-serif italic font-normal text-[#7B2A7A]">
                Different Worlds of Service. One Philosophy of Leadership.
              </span>
            </>
          }
          description="The Sarathii Method was not born in a commercial coaching hub. It is the synthesis of fifty years across national defence, frontline administrative governance, judicial dispute resolution, and civilizational literature."
        />

        {/* ================================================================= */}
        {/* DESKTOP HORIZONTAL TIMELINE NAVIGATOR (Hidden on Mobile) */}
        {/* ================================================================= */}
        <div className="hidden lg:block mt-12 mb-10">
          <div className="relative">
            {/* Background connecting track */}
            <div className="absolute top-8 left-12 right-12 h-0.5 bg-[#E5DDD8] -z-0" />

            {/* Active connecting line fill */}
            <motion.div
              className="absolute top-8 left-12 h-0.5 bg-gradient-to-r from-[#4B1458] via-[#7B2A7A] to-[#D4AF6A] -z-0 origin-left"
              initial={{ scaleX: 0 }}
              animate={{
                scaleX: activeStageIndex / (founderJourneyStages.length - 1),
              }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              style={{
                width: 'calc(100% - 6rem)',
                transformOrigin: '0% 50%',
              }}
            />

            {/* 5 Stage Nodes */}
            <div className="grid grid-cols-5 gap-4 relative z-10">
              {founderJourneyStages.map((stage, idx) => {
                const isActive = activeStageIndex === idx
                const isPassed = activeStageIndex >= idx
                const StageIcon = iconMap[stage.iconName]

                return (
                  <button
                    key={stage.id}
                    onClick={() => setActiveStageIndex(idx)}
                    className="flex flex-col items-center text-center group cursor-pointer focus:outline-none"
                    data-cursor="explore"
                    aria-label={`Select stage ${stage.number}: ${stage.title}`}
                  >
                    {/* Node circle */}
                    <div
                      className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 border-2 shadow-sm ${
                        isActive
                          ? 'bg-[#4B1458] border-[#D4AF6A] text-[#E6CFA5] scale-110 shadow-lg ring-4 ring-[#D4AF6A]/20'
                          : isPassed
                          ? 'bg-[#F8F5F2] border-[#4B1458] text-[#4B1458] hover:border-[#D4AF6A]'
                          : 'bg-white border-[#E5DDD8] text-[#8C7D8F] hover:border-[#D4AF6A]'
                      }`}
                    >
                      <StageIcon size={22} />
                    </div>

                    {/* Stage number & title */}
                    <div className="mt-3.5 space-y-1">
                      <span
                        className={`text-xs font-bold tracking-widest uppercase transition-colors ${
                          isActive
                            ? 'text-[#D4AF6A]'
                            : isPassed
                            ? 'text-[#7B2A7A]'
                            : 'text-[#8C7D8F]'
                        }`}
                      >
                        STAGE {stage.number}
                      </span>
                      <h4
                        className={`font-serif text-sm font-semibold tracking-wide transition-colors ${
                          isActive
                            ? 'text-[#2A0932] font-bold'
                            : 'text-[#5D5060] group-hover:text-[#2A0932]'
                        }`}
                      >
                        {stage.title}
                      </h4>
                      <p className="text-[11px] text-[#6E6271] line-clamp-1 max-w-[140px] mx-auto font-medium">
                        {stage.discipline}
                      </p>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>
        </div>

        {/* ================================================================= */}
        {/* MOBILE VERTICAL TIMELINE TABS (Visible only on Mobile & Tablet) */}
        {/* ================================================================= */}
        <div className="lg:hidden mt-8 mb-6">
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
            {founderJourneyStages.map((stage, idx) => {
              const isActive = activeStageIndex === idx
              const StageIcon = iconMap[stage.iconName]

              return (
                <button
                  key={stage.id}
                  onClick={() => setActiveStageIndex(idx)}
                  className={`p-3 rounded-xl flex items-center gap-2.5 transition-all text-left border ${
                    isActive
                      ? 'bg-[#4B1458] text-white border-[#4B1458] shadow-sm'
                      : 'bg-[#F8F5F2] text-[#4A3E4D] border-[#E5DDD8]'
                  }`}
                >
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                      isActive ? 'bg-[#D4AF6A] text-[#2A0932]' : 'bg-white text-[#7B2A7A]'
                    }`}
                  >
                    <StageIcon size={14} />
                  </div>
                  <div className="min-w-0">
                    <span
                      className={`text-[10px] uppercase font-bold tracking-wider block ${
                        isActive ? 'text-[#E6CFA5]' : 'text-[#8C7D8F]'
                      }`}
                    >
                      {stage.number}
                    </span>
                    <span className="text-xs font-semibold truncate block">
                      {stage.title}
                    </span>
                  </div>
                </button>
              )
            })}
          </div>
        </div>

        {/* ================================================================= */}
        {/* ACTIVE STAGE SHOWCASE PANEL */}
        {/* ================================================================= */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStage.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="bg-white rounded-3xl border border-[#E5DDD8] shadow-xl p-6 sm:p-8 lg:p-10 relative overflow-hidden"
          >
            {/* Top gold accent line */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#4B1458] via-[#D4AF6A] to-[#4B1458]" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
              {/* Left Column: Number, Title, Discipline & Authentic Context (7 cols) */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#F8F5F2] border border-[#D4AF6A]/40 flex items-center justify-center text-[#4B1458] shadow-inner shrink-0">
                    <ActiveIcon size={30} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs uppercase font-extrabold tracking-[0.2em] text-[#D4AF6A] bg-[#2A0932] px-2.5 py-0.5 rounded-full">
                        STAGE {activeStage.number}
                      </span>
                      <span className="text-xs text-[#7B2A7A] font-semibold uppercase tracking-wider">
                        {activeStage.subtitle}
                      </span>
                    </div>
                    <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-[#2A0932] mt-1">
                      {activeStage.title}{' '}
                      <span className="italic font-light text-[#7B2A7A] block sm:inline text-xl sm:text-2xl">
                        — {activeStage.discipline}
                      </span>
                    </h3>
                  </div>
                </div>

                {/* Core description */}
                <p className="text-base sm:text-lg text-[#3D3140] leading-relaxed font-normal">
                  {activeStage.description}
                </p>

                {/* Authentic Context Pill */}
                <div className="p-4 rounded-2xl bg-[#F8F5F2] border border-[#E5DDD8] text-xs sm:text-sm text-[#5D5060] flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-[#D4AF6A] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#2A0932] font-semibold block mb-0.5">
                      Authentic Documented Record:
                    </strong>
                    {activeStage.authenticContext}
                  </div>
                </div>

                {/* Core Competencies badges */}
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-[#7B2A7A] mb-2.5">
                    Hallmarks Inculcated in Aspirants
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {activeStage.qualities.map((q) => (
                      <span
                        key={q}
                        className="px-3.5 py-1.5 rounded-full bg-[#FFFDF9] border border-[#D4AF6A]/50 text-xs sm:text-sm font-semibold text-[#2A0932] shadow-sm"
                      >
                        {q}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Supporting Philosophy & Translation to Mentorship (5 cols) */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-6 bg-[#2A0932] text-white rounded-2xl p-6 sm:p-8 border border-[#D4AF6A]/30 shadow-lg">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#D4AF6A]">
                    <Sparkles size={14} />
                    <span>Supporting Philosophy</span>
                  </div>

                  <blockquote className="font-serif text-lg sm:text-xl italic text-[#E6CFA5] leading-relaxed relative pl-4 border-l-2 border-[#D4AF6A]">
                    &ldquo;{activeStage.supportingPhilosophy}&rdquo;
                  </blockquote>
                </div>

                <div className="pt-4 border-t border-white/10 space-y-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#E5DDD8]">
                    Translation to Sarathii Mentorship:
                  </div>
                  <p className="text-xs sm:text-sm text-[#E5DDD8]/90 leading-relaxed font-normal">
                    {activeStage.coreCompetency}
                  </p>
                </div>

                {/* Stage switcher navigation buttons */}
                <div className="flex items-center justify-between pt-2">
                  <button
                    onClick={() =>
                      setActiveStageIndex((prev) =>
                        prev > 0 ? prev - 1 : founderJourneyStages.length - 1
                      )
                    }
                    className="text-xs text-[#E6CFA5] hover:text-white transition-colors flex items-center gap-1 font-semibold"
                  >
                    ← Previous Stage
                  </button>

                  <span className="text-xs text-[#E5DDD8]/60 font-mono">
                    0{activeStageIndex + 1} / 0{founderJourneyStages.length}
                  </span>

                  <button
                    onClick={() =>
                      setActiveStageIndex((prev) =>
                        prev < founderJourneyStages.length - 1 ? prev + 1 : 0
                      )
                    }
                    className="text-xs text-[#D4AF6A] hover:text-white transition-colors flex items-center gap-1 font-semibold"
                  >
                    Next Stage →
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </Container>
    </section>
  )
}
