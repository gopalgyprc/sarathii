'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Compass,
  ArrowDown,
  Layers,
} from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { experienceBridgeSteps, ExperienceBridgeStep } from '@/data/mentorship'

export function ExperienceBridge() {
  const [activeStepIndex, setActiveStepIndex] = useState(0)
  const currentStep: ExperienceBridgeStep = experienceBridgeSteps[activeStepIndex]

  return (
    <section
      id="experience-bridge"
      className="py-12 lg:py-20 bg-[#FFFDF9] relative overflow-hidden border-t border-[#E5DDD8]/60"
    >
      <div className="absolute top-1/2 left-0 w-[450px] h-[450px] bg-[#4B1458]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-[#D4AF6A]/10 rounded-full blur-3xl pointer-events-none" />

      <Container>
        <SectionHeading
          align="center"
          kicker="08 / The Institutional Architecture"
          title={
            <>
              From Experience to Mentorship —{' '}
              <span className="font-serif italic font-normal text-[#7B2A7A]">
                The Complete Sarathii Continuum
              </span>
            </>
          }
          description="How half a century of frontline governance translates into purposeful preparation for future administrators. Follow the visual bridge explaining the entire Sarathii institution."
        />

        {/* ================================================================= */}
        {/* PROGRESSIVE VISUAL BRIDGE STEPPER */}
        {/* ================================================================= */}
        <div className="mt-12 lg:mt-16">
          {/* Top Horizontal Progression Nodes (Desktop) */}
          <div className="hidden lg:grid grid-cols-8 gap-2 relative mb-10">
            {/* Background track line */}
            <div className="absolute top-6 left-6 right-6 h-0.5 bg-[#E5DDD8] -z-0" />

            {/* Active filled line */}
            <motion.div
              className="absolute top-6 left-6 h-0.5 bg-gradient-to-r from-[#4B1458] via-[#7B2A7A] to-[#D4AF6A] -z-0"
              initial={{ width: 0 }}
              animate={{
                width: `${(activeStepIndex / (experienceBridgeSteps.length - 1)) * 100}%`,
              }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
            />

            {experienceBridgeSteps.map((step, idx) => {
              const isActive = activeStepIndex === idx
              const isPassed = activeStepIndex >= idx

              return (
                <button
                  key={step.step}
                  onClick={() => setActiveStepIndex(idx)}
                  className="flex flex-col items-center text-center group cursor-pointer focus:outline-none"
                  data-cursor="explore"
                >
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-mono text-xs font-bold transition-all duration-300 border-2 z-10 ${
                      isActive
                        ? 'bg-[#4B1458] border-[#D4AF6A] text-[#E6CFA5] scale-115 shadow-md ring-4 ring-[#D4AF6A]/20'
                        : isPassed
                        ? 'bg-[#F8F5F2] border-[#4B1458] text-[#4B1458]'
                        : 'bg-white border-[#E5DDD8] text-[#8C7D8F]'
                    }`}
                  >
                    {step.step}
                  </div>

                  <span
                    className={`mt-2.5 text-[11px] font-semibold uppercase tracking-wider transition-colors line-clamp-1 ${
                      isActive ? 'text-[#4B1458] font-bold' : 'text-[#8C7D8F]'
                    }`}
                  >
                    {step.role}
                  </span>
                </button>
              )
            })}
          </div>

          {/* Mobile Grid Navigator */}
          <div className="lg:hidden grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
            {experienceBridgeSteps.map((step, idx) => {
              const isActive = activeStepIndex === idx

              return (
                <button
                  key={step.step}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`p-2.5 rounded-xl border text-left transition-all ${
                    isActive
                      ? 'bg-[#4B1458] text-white border-[#4B1458] shadow-sm'
                      : 'bg-[#F8F5F2] text-[#4A3E4D] border-[#E5DDD8]'
                  }`}
                >
                  <span
                    className={`text-[10px] font-mono font-bold block ${
                      isActive ? 'text-[#E6CFA5]' : 'text-[#8C7D8F]'
                    }`}
                  >
                    Step {step.step}
                  </span>
                  <span className="text-xs font-semibold truncate block">
                    {step.role}
                  </span>
                </button>
              )
            })}
          </div>

          {/* Active Bridge Stage Display Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep.step}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl border border-[#E5DDD8] shadow-xl p-6 sm:p-10 max-w-3xl mx-auto text-center space-y-4 relative overflow-hidden"
            >
              {/* Top gradient accent */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#4B1458] via-[#D4AF6A] to-[#4B1458]" />

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F8F5F2] border border-[#D4AF6A]/40 text-xs font-mono font-bold text-[#7B2A7A]">
                <span>CONTINUUM STAGE {currentStep.step} OF 08</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-4xl text-[#2A0932] font-semibold">
                {currentStep.role}
              </h3>

              <div className="text-xs sm:text-sm font-semibold text-[#D4AF6A] bg-[#2A0932] inline-block px-4 py-1.5 rounded-full">
                {currentStep.subtext}
              </div>

              <p className="text-base sm:text-lg text-[#4A3E4D] leading-relaxed max-w-xl mx-auto pt-2">
                {currentStep.description}
              </p>

              {/* Prev / Next controls */}
              <div className="flex items-center justify-between pt-6 border-t border-[#E5DDD8] max-w-md mx-auto">
                <button
                  onClick={() =>
                    setActiveStepIndex((prev) =>
                      prev > 0 ? prev - 1 : experienceBridgeSteps.length - 1
                    )
                  }
                  className="text-xs font-bold uppercase tracking-wider text-[#7B2A7A] hover:text-[#4B1458] transition-colors"
                >
                  ← Previous
                </button>

                <div className="flex gap-1.5">
                  {experienceBridgeSteps.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveStepIndex(i)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        activeStepIndex === i
                          ? 'bg-[#4B1458] w-6'
                          : 'bg-[#E5DDD8] hover:bg-[#D4AF6A]'
                      }`}
                      aria-label={`Go to step ${i + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={() =>
                    setActiveStepIndex((prev) =>
                      prev < experienceBridgeSteps.length - 1 ? prev + 1 : 0
                    )
                  }
                  className="text-xs font-bold uppercase tracking-wider text-[#4B1458] hover:text-[#2A0932] transition-colors"
                >
                  Next →
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>
    </section>
  )
}
