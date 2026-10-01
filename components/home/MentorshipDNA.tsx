'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Sparkles, ArrowDown, CheckCircle2 } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { mentorshipDnaSteps, MentorshipDnaStep } from '@/data/mentorship'

export function MentorshipDNA() {
  const [activeStepIndex, setActiveStepIndex] = useState(3)

  return (
    <section
      id="mentorship-dna"
      className="py-12 lg:py-20 bg-[#1A041E] text-white relative overflow-hidden border-t border-b border-[#D4AF6A]/30"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#7B2A7A]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-pattern-dark opacity-30 pointer-events-none" />

      <Container className="relative z-10">
        <SectionHeading
          align="center"
          kicker="10 / The Intellectual Genome"
          title={
            <>
              The Sarathii Mentorship DNA —{' '}
              <span className="font-serif italic font-normal text-[#E6CFA5]">
                From Raw Experience to Principled Leadership
              </span>
            </>
          }
          description="Excellence is neither accidental nor mystical. It is an unbroken sequential continuum. Observe the eight genetic strands that forge an ordinary candidate into an extraordinary public servant."
          theme="dark"
        />

        {/* ================================================================= */}
        {/* PROGRESSIVELY ILLUMINATED DNA CHAIN */}
        {/* ================================================================= */}
        <div className="mt-12 lg:mt-16 max-w-4xl mx-auto relative">
          {/* Vertical Center Track (Desktop) */}
          <div className="hidden md:block absolute top-6 bottom-6 left-1/2 -translate-x-1/2 w-0.5 bg-white/10" />

          {/* Active Illuminated Gold Track */}
          <motion.div
            className="hidden md:block absolute top-6 left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-[#D4AF6A] via-[#E6CFA5] to-[#D4AF6A] origin-top shadow-[0_0_12px_#D4AF6A]"
            initial={{ height: 0 }}
            animate={{
              height: `${(activeStepIndex / (mentorshipDnaSteps.length - 1)) * 100}%`,
            }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          />

          <div className="space-y-6 md:space-y-10 relative">
            {mentorshipDnaSteps.map((step, idx) => {
              const isIlluminated = activeStepIndex >= idx
              const isCurrent = activeStepIndex === idx
              const isEven = idx % 2 === 0

              return (
                <div
                  key={step.step}
                  className={`flex flex-col md:flex-row items-center cursor-pointer group ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                  onClick={() => setActiveStepIndex(idx)}
                >
                  {/* Content Card (Left or Right on desktop) */}
                  <div className="w-full md:w-5/12">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className={`p-4 sm:p-5 rounded-2xl border transition-all duration-300 ${
                        isCurrent
                          ? 'bg-[#2A0932] border-[#D4AF6A] shadow-lg ring-2 ring-[#D4AF6A]/30'
                          : isIlluminated
                          ? 'bg-white/10 border-[#D4AF6A]/40 text-white'
                          : 'bg-white/5 border-white/10 text-white/60 hover:border-white/20'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span
                          className={`text-xs font-mono font-bold tracking-widest ${
                            isIlluminated ? 'text-[#D4AF6A]' : 'text-white/40'
                          }`}
                        >
                          STRAND {step.step}
                        </span>
                        <span
                          className={`text-xs font-semibold ${
                            isIlluminated ? 'text-[#E6CFA5]' : 'text-white/40'
                          }`}
                        >
                          {step.concept}
                        </span>
                      </div>

                      <h4
                        className={`font-serif text-lg sm:text-xl font-bold tracking-wide ${
                          isIlluminated ? 'text-white' : 'text-white/70'
                        }`}
                      >
                        {step.name}
                      </h4>

                      <p
                        className={`text-xs sm:text-sm mt-1 leading-relaxed ${
                          isIlluminated ? 'text-[#E5DDD8]' : 'text-white/50'
                        }`}
                      >
                        {step.essence}
                      </p>
                    </motion.div>
                  </div>

                  {/* Center Node Indicator */}
                  <div className="w-full md:w-2/12 flex justify-center py-2 md:py-0 relative z-20">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-mono text-xs font-bold transition-all duration-300 border-2 ${
                        isCurrent
                          ? 'bg-[#D4AF6A] text-[#1A041E] border-white scale-125 shadow-[0_0_15px_#D4AF6A]'
                          : isIlluminated
                          ? 'bg-[#4B1458] text-[#E6CFA5] border-[#D4AF6A]'
                          : 'bg-[#1A041E] text-white/40 border-white/20'
                      }`}
                    >
                      {step.step}
                    </div>
                  </div>

                  {/* Empty Spacer Column on opposite side */}
                  <div className="hidden md:block md:w-5/12" />
                </div>
              )
            })}
          </div>
        </div>

        {/* Minimal Bottom Controller */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-4 px-6 py-2.5 rounded-full bg-white/5 border border-white/10 text-xs text-[#E5DDD8]/80">
            <span>Click any strand to illuminate DNA progression</span>
            <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF6A] animate-ping" />
          </div>
        </div>
      </Container>
    </section>
  )
}
