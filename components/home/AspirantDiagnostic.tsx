'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Compass,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  Target,
  FileText,
  Clock,
  Award,
  Layers,
} from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import {
  aspirantDiagnosticStages,
  AspirantDiagnosticStage,
} from '@/data/mentorship'

const stageIcons = [
  <Layers key="start" size={16} />,
  <Target key="pre" size={16} />,
  <FileText key="mains" size={16} />,
  <FileText key="write" size={16} />,
  <Clock key="work" size={16} />,
  <Compass key="strat" size={16} />,
  <Award key="lead" size={16} />,
]

export function AspirantDiagnostic() {
  const [selectedStageId, setSelectedStageId] = useState<string>('mains-focus')

  const activeStage: AspirantDiagnosticStage =
    aspirantDiagnosticStages.find((s) => s.id === selectedStageId) ||
    aspirantDiagnosticStages[0]

  return (
    <section
      id="aspirant-diagnostic"
      className="py-12 lg:py-20 bg-[#FFFDF9] relative overflow-hidden border-t border-[#E5DDD8]/60"
    >
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-[#4B1458]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-[#D4AF6A]/10 rounded-full blur-3xl pointer-events-none" />

      <Container>
        <SectionHeading
          align="center"
          kicker="11 / Personalized Academic Guidance"
          title={
            <>
              Where Are You In Your Journey? —{' '}
              <span className="font-serif italic font-normal text-[#7B2A7A]">
                Explore the Sarathii Approach for Your Stage
              </span>
            </>
          }
          description="Preparation is not one-size-fits-all. A beginner requires foundational conceptual grounding; a repeat candidate requires forensic diagnostic evaluation of writing blind spots. Select your current phase to review targeted guidance."
        />

        {/* 7 Interactive Stage Selectors Grid */}
        <div className="mt-10 mb-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-2.5">
          {aspirantDiagnosticStages.map((stage, idx) => {
            const isSelected = selectedStageId === stage.id

            return (
              <button
                key={stage.id}
                onClick={() => setSelectedStageId(stage.id)}
                className={`p-3 sm:p-4 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between cursor-pointer focus:outline-none ${
                  isSelected
                    ? 'bg-[#4B1458] text-white border-[#4B1458] shadow-md ring-2 ring-[#D4AF6A]/50 -translate-y-1'
                    : 'bg-[#F8F5F2] hover:bg-white text-[#2A0932] border-[#E5DDD8] hover:border-[#D4AF6A]'
                }`}
                data-cursor="explore"
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`text-[10px] font-mono font-bold ${
                      isSelected ? 'text-[#D4AF6A]' : 'text-[#7B2A7A]'
                    }`}
                  >
                    {stage.number}
                  </span>
                  <div
                    className={`w-6 h-6 rounded-lg flex items-center justify-center ${
                      isSelected ? 'bg-[#D4AF6A] text-[#2A0932]' : 'bg-white text-[#5D5060]'
                    }`}
                  >
                    {stageIcons[idx]}
                  </div>
                </div>

                <div className="font-serif text-xs sm:text-sm font-semibold leading-snug line-clamp-2">
                  {stage.title}
                </div>
              </button>
            )
          })}
        </div>

        {/* ================================================================= */}
        {/* ACTIVE STAGE DIAGNOSTIC REPORT CARD */}
        {/* ================================================================= */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStage.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-3xl border border-[#E5DDD8] shadow-xl p-6 sm:p-8 lg:p-10 space-y-6"
          >
            {/* Header */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#E5DDD8]">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF6A] bg-[#2A0932] px-3 py-1 rounded-full">
                  Stage {activeStage.number} Diagnostic
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#2A0932] font-semibold mt-2">
                  {activeStage.title}{' '}
                  <span className="italic font-light text-[#7B2A7A] block sm:inline text-xl">
                    — {activeStage.subtitle}
                  </span>
                </h3>
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#E6CFA5] text-[#2A0932] hover:bg-[#FFFDF9] border border-[#D4AF6A] text-xs font-bold uppercase tracking-wider transition-all shadow-sm"
              >
                <span>Request Diagnostic Session</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            {/* 2-Column Split: Frictions vs Sarathii Approach */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
              {/* Left: Common Friction Points (5 cols) */}
              <div className="lg:col-span-5 p-5 rounded-2xl bg-[#FEF2F2]/50 border border-[#DC2626]/20 space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-[#991B1B] flex items-center gap-1.5">
                  <AlertCircle size={15} />
                  <span>Typical Challenges in This Phase:</span>
                </div>
                <div className="space-y-2">
                  {activeStage.typicalFrictions.map((f, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-xl bg-white border border-[#E5DDD8] text-xs sm:text-sm text-[#4A3E4D] leading-snug flex items-start gap-2.5"
                    >
                      <span className="text-[#DC2626] font-bold shrink-0">•</span>
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Sarathii Strategic Approach (7 cols) */}
              <div className="lg:col-span-7 space-y-4">
                <div className="p-5 rounded-2xl bg-[#F8F5F2] border border-[#D4AF6A]/30 space-y-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#7B2A7A] flex items-center gap-1.5">
                    <Sparkles size={14} className="text-[#D4AF6A]" />
                    <span>The Sarathii Approach for This Phase:</span>
                  </div>
                  <p className="text-sm sm:text-base text-[#3D3140] leading-relaxed font-normal">
                    {activeStage.sarathiiApproach}
                  </p>
                </div>

                {/* Key Focus Areas */}
                <div className="space-y-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#2A0932]">
                    High-Yield Focus Areas:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {activeStage.keyFocusAreas.map((area) => (
                      <span
                        key={area}
                        className="px-3.5 py-1.5 rounded-full bg-white border border-[#D4AF6A]/60 text-xs sm:text-sm font-semibold text-[#4B1458] shadow-sm flex items-center gap-1.5"
                      >
                        <CheckCircle2 size={14} className="text-[#D4AF6A]" />
                        <span>{area}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Mentor Recommendation Quote */}
                <div className="p-4 rounded-2xl bg-[#2A0932] text-white border border-[#D4AF6A]/30 flex items-start gap-3 shadow-md">
                  <Compass size={20} className="text-[#D4AF6A] shrink-0 mt-1" />
                  <div>
                    <div className="text-[11px] uppercase font-bold text-[#E6CFA5] tracking-wider mb-0.5">
                      Chief Mentor’s Direct Counsel:
                    </div>
                    <p className="text-xs sm:text-sm font-serif italic text-[#FFFDF9] leading-relaxed">
                      &ldquo;{activeStage.mentorRecommendation}&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </Container>
    </section>
  )
}
