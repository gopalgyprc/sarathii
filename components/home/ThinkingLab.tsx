'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Brain,
  Building2,
  Coins,
  Scale,
  Users,
  TrendingUp,
  Sparkles,
  HelpCircle,
  CheckCircle2,
  ArrowRight,
  Shield,
  Lightbulb,
} from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import {
  defaultThinkingLabScenario,
  ThinkingPerspective,
} from '@/data/mentorship'

const perspectiveIconMap = {
  Building2: Building2,
  Coins: Coins,
  Scale: Scale,
  Users: Users,
  TrendingUp: TrendingUp,
}

export function ThinkingLab() {
  const scenario = defaultThinkingLabScenario
  const [activeModeId, setActiveModeId] = useState('analyse')
  const [activePerspectiveId, setActivePerspectiveId] = useState('administration')

  const activeMode = scenario.modes.find((m) => m.id === activeModeId) || scenario.modes[0]
  const activePerspective =
    scenario.perspectives.find((p) => p.id === activePerspectiveId) ||
    scenario.perspectives[0]
  const ActiveIcon = perspectiveIconMap[activePerspective.iconName]

  return (
    <section
      id="thinking-lab"
      className="py-12 lg:py-20 bg-[#FFFDF9] relative overflow-hidden border-t border-[#E5DDD8]/60"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#7B2A7A]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[450px] h-[450px] bg-[#D4AF6A]/10 rounded-full blur-3xl pointer-events-none" />

      <Container>
        <SectionHeading
          align="center"
          kicker="09 / Interactive Analytical Simulation"
          title={
            <>
              The Sarathii Thinking Lab —{' '}
              <span className="font-serif italic font-normal text-[#7B2A7A]">
                Learn to Approach a Problem from More than One Angle
              </span>
            </>
          }
          description="A civil servant cannot afford unidimensional thinking. Whether addressing a natural disaster, agricultural unrest, or public health crisis, sound governance demands the synthesis of administrative realism, economic prudence, constitutional ethics, and long-term sustainability."
        />

        {/* ================================================================= */}
        {/* INTERACTIVE THINKING MODES NAVIGATOR */}
        {/* ================================================================= */}
        <div className="mt-8 mb-8 flex justify-center">
          <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl sm:rounded-full bg-[#F0EBE5] border border-[#E5DDD8] shadow-inner">
            {scenario.modes.map((mode) => {
              const isActive = activeModeId === mode.id

              return (
                <button
                  key={mode.id}
                  onClick={() => setActiveModeId(mode.id)}
                  className={`py-2 px-4 sm:px-5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-[#4B1458] text-white shadow-md'
                      : 'text-[#5D5060] hover:text-[#2A0932]'
                  }`}
                  data-cursor="explore"
                >
                  {mode.title}
                </button>
              )
            })}
          </div>
        </div>

        {/* Selected Mode Summary Line */}
        <div className="text-center max-w-xl mx-auto mb-8">
          <p className="text-xs sm:text-sm text-[#7B2A7A] font-semibold flex items-center justify-center gap-2">
            <Sparkles size={14} className="text-[#D4AF6A]" />
            <span>Mode: {activeMode.title}</span> —{' '}
            <span className="text-[#5D5060] font-normal">{activeMode.description}</span>
          </p>
        </div>

        {/* ================================================================= */}
        {/* EDUCATIONAL SCENARIO CARD */}
        {/* ================================================================= */}
        <div className="bg-[#F8F5F2] rounded-3xl border border-[#D4AF6A]/40 p-6 sm:p-8 mb-8 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-[#E5DDD8]">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF6A] bg-[#2A0932] px-3 py-1 rounded-full">
                Educational Simulation
              </span>
              <span className="text-xs font-semibold text-[#7B2A7A]">
                {scenario.districtContext}
              </span>
            </div>
            <span className="text-[11px] text-[#8C7D8F] italic">
              {scenario.fictionalDisclaimer}
            </span>
          </div>

          <div className="mt-4">
            <h3 className="font-serif text-xl sm:text-2xl text-[#2A0932] font-semibold">
              {scenario.scenarioTitle}
            </h3>
            <p className="text-sm sm:text-base text-[#4A3E4D] mt-2 leading-relaxed">
              {scenario.problemStatement}
            </p>
          </div>
        </div>

        {/* ================================================================= */}
        {/* 5 MULTI-PERSPECTIVE SELECTOR TABS */}
        {/* ================================================================= */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 sm:gap-3 mb-6">
          {scenario.perspectives.map((perspective) => {
            const isActive = activePerspectiveId === perspective.id
            const Icon = perspectiveIconMap[perspective.iconName]

            return (
              <button
                key={perspective.id}
                onClick={() => setActivePerspectiveId(perspective.id)}
                className={`p-3.5 sm:p-4 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                  isActive
                    ? 'bg-[#2A0932] text-white border-[#D4AF6A] shadow-lg ring-2 ring-[#D4AF6A]/30 -translate-y-0.5'
                    : 'bg-white hover:bg-[#F8F5F2] text-[#2A0932] border-[#E5DDD8]'
                }`}
                data-cursor="explore"
              >
                <div className="flex items-center justify-between mb-2">
                  <div
                    className={`w-8 h-8 rounded-xl flex items-center justify-center ${
                      isActive ? 'bg-[#D4AF6A] text-[#2A0932]' : 'bg-[#F8F5F2] text-[#4B1458]'
                    }`}
                  >
                    <Icon size={16} />
                  </div>
                  <span
                    className={`text-[10px] font-mono uppercase font-bold ${
                      isActive ? 'text-[#E6CFA5]' : 'text-[#8C7D8F]'
                    }`}
                  >
                    Lens
                  </span>
                </div>
                <div className="font-serif text-xs sm:text-sm font-semibold truncate">
                  {perspective.title}
                </div>
              </button>
            )
          })}
        </div>

        {/* ================================================================= */}
        {/* ACTIVE PERSPECTIVE DEEP DIVE PANEL */}
        {/* ================================================================= */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activePerspective.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-3xl border border-[#E5DDD8] shadow-xl p-6 sm:p-8 lg:p-10 space-y-6"
          >
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#E5DDD8]">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-[#4B1458] text-[#E6CFA5] flex items-center justify-center shadow-md">
                  <ActiveIcon size={24} />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#7B2A7A]">
                    Administrative Lens
                  </span>
                  <h4 className="font-serif text-2xl text-[#2A0932] font-semibold">
                    {activePerspective.title} —{' '}
                    <span className="italic font-normal text-[#7B2A7A] text-xl">
                      {activePerspective.shortHeadline}
                    </span>
                  </h4>
                </div>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F8F5F2] border border-[#D4AF6A]/50 text-xs font-semibold text-[#A8823B]">
                <Lightbulb size={13} />
                <span>Balanced Inquiry</span>
              </div>
            </div>

            {/* Questions to Probe */}
            <div className="space-y-3">
              <h5 className="text-xs font-bold uppercase tracking-wider text-[#2A0932]">
                Key Administrative Questions to Investigate:
              </h5>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {activePerspective.keyQuestions.map((q, i) => (
                  <div
                    key={i}
                    className="p-3.5 rounded-xl bg-[#F8F5F2] border border-[#E5DDD8] text-xs sm:text-sm text-[#3D3140] leading-snug flex items-start gap-2.5"
                  >
                    <HelpCircle size={15} className="text-[#D4AF6A] shrink-0 mt-0.5" />
                    <span>{q}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Two-Column Deep Insight & Concrete Recommendation */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-2">
              <div className="p-5 rounded-2xl bg-[#FFFDF9] border border-[#E5DDD8] space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-[#7B2A7A] flex items-center gap-1.5">
                  <Brain size={14} />
                  <span>The Administrative Insight:</span>
                </div>
                <p className="text-xs sm:text-sm text-[#4A3E4D] leading-relaxed">
                  {activePerspective.administrativeInsight}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#ECFDF5] border border-[#059669]/30 space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-[#065F46] flex items-center gap-1.5">
                  <CheckCircle2 size={14} />
                  <span>Concrete Administrative Action:</span>
                </div>
                <p className="text-xs sm:text-sm text-[#065F46] leading-relaxed font-medium">
                  {activePerspective.concreteRecommendation}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Mentor Synthesis Quote Box */}
        <div className="mt-8 bg-gradient-to-r from-[#2A0932] via-[#4B1458] to-[#2A0932] text-white rounded-3xl p-6 sm:p-8 border border-[#D4AF6A]/40 shadow-xl text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF6A]">
            Administrative Synthesis
          </span>
          <blockquote className="font-serif text-lg sm:text-xl italic text-[#E6CFA5] leading-relaxed">
            &ldquo;{scenario.mentorSynthesis}&rdquo;
          </blockquote>
          <p className="text-xs text-[#E5DDD8]/70 font-mono">
            — Jay Prakash Singh, Founder & Chief Mentor
          </p>
        </div>
      </Container>
    </section>
  )
}
