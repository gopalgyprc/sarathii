'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Search,
  Map,
  Shield,
  RefreshCw,
  Trophy,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  CheckCircle2,
  ChevronRight,
} from 'lucide-react'
import { sarathiiMethodSteps } from '@/data/philosophy'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'

const stepIcons = [
  <Search key="search" size={20} />,
  <Map key="map" size={20} />,
  <Shield key="shield" size={20} />,
  <RefreshCw key="refresh" size={20} />,
  <Trophy key="trophy" size={20} />,
]

export function SarathiiMethod() {
  const [selectedStep, setSelectedStep] = useState(0)

  const handleNext = () => {
    setSelectedStep((prev) => (prev < sarathiiMethodSteps.length - 1 ? prev + 1 : 0))
  }

  const handlePrev = () => {
    setSelectedStep((prev) => (prev > 0 ? prev - 1 : sarathiiMethodSteps.length - 1))
  }

  return (
    <section id="method" className="py-20 lg:py-28 bg-[#F8F5F2] relative overflow-hidden bg-pattern-subtle">
      {/* Subtle background ambient lighting */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#7B2A7A]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#D4AF6A]/8 rounded-full blur-3xl pointer-events-none" />

      <Container>
        <SectionHeading
          align="center"
          kicker="03 / The Sarathii Method"
          title={
            <>
              A Systematic Framework for{' '}
              <span className="italic font-normal text-[#7B2A7A]">
                Predictable Excellence
              </span>
            </>
          }
          description="Clarity is not an accidental personality trait; it is an engineered discipline. The Sarathii Method breaks down the long preparation journey into five structured, high-yield phases."
        />

        {/* Interactive Step Navigator with Connecting Gold Line */}
        <div className="mt-14 mb-10 relative">
          {/* Connecting Track Line behind steps (desktop) */}
          <div className="hidden lg:block absolute top-[28px] left-[6%] right-[6%] h-[3px] bg-[#E5DDD8] z-0">
            <motion.div
              className="h-full bg-gradient-to-r from-[#4B1458] via-[#7B2A7A] to-[#D4AF6A]"
              initial={false}
              animate={{ width: `${(selectedStep / 4) * 100}%` }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
            />
          </div>

          {/* Step Pill Buttons Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 relative z-10">
            {sarathiiMethodSteps.map((step, index) => {
              const isSelected = selectedStep === index
              const isCompleted = selectedStep > index

              return (
                <button
                  key={step.step}
                  onClick={() => setSelectedStep(index)}
                  className={`group relative p-4 sm:p-5 rounded-2xl sm:rounded-3xl text-left transition-all duration-300 border flex flex-col justify-between ${
                    isSelected
                      ? 'bg-[#4B1458] text-white border-[#4B1458] shadow-xl shadow-[#4B1458]/20 -translate-y-1.5 ring-2 ring-[#D4AF6A]/40'
                      : 'bg-white hover:bg-[#FFFDF9] text-[#1F1722] border-[#E5DDD8] hover:border-[#D4AF6A] shadow-sm hover:shadow-md'
                  }`}
                >
                  {/* Step Header with Number & Animated Node */}
                  <div className="flex items-center justify-between mb-3 w-full">
                    <span
                      style={{ fontFamily: "var(--font-sans), 'Poppins', sans-serif" }}
                      className={`text-[11px] font-bold uppercase tracking-widest ${
                        isSelected ? 'text-[#D4AF6A]' : 'text-[#7B2A7A]'
                      }`}
                    >
                      Step {step.step}
                    </span>

                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                        isSelected
                          ? 'bg-[#E6CFA5] text-[#2A0932] shadow-md scale-110'
                          : isCompleted
                          ? 'bg-[#4B1458]/10 text-[#4B1458]'
                          : 'bg-[#F8F5F2] text-[#6E6271] group-hover:text-[#4B1458]'
                      }`}
                    >
                      {stepIcons[index]}
                    </div>
                  </div>

                  {/* Step Name */}
                  <div className="space-y-0.5">
                    <h3
                      style={{ fontFamily: "var(--font-sans), 'Poppins', sans-serif" }}
                      className={`text-lg sm:text-xl font-bold tracking-tight ${
                        isSelected ? 'text-white' : 'text-[#2A0932]'
                      }`}
                    >
                      {step.name}
                    </h3>
                    <p
                      style={{ fontFamily: "var(--font-sans), 'Poppins', sans-serif" }}
                      className={`text-xs line-clamp-1 leading-normal ${
                        isSelected ? 'text-[#E6CFA5]' : 'text-[#6E6271]'
                      }`}
                    >
                      {step.tagline}
                    </p>
                  </div>
                </button>
              )
            })}
          </div>
        </div>

        {/* Active Stage Deep-Dive Showcase Card */}
        <div className="mt-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedStep}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className="bg-gradient-to-br from-[#350C3E] via-[#2A0932] to-[#1F0724] text-[#FFFDF9] rounded-3xl p-8 sm:p-10 lg:p-12 border border-[#D4AF6A]/30 shadow-2xl relative overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
            >
              {/* Background ambient lighting and watermark number */}
              <div className="absolute top-0 right-10 w-96 h-96 bg-[#7B2A7A]/25 rounded-full blur-3xl pointer-events-none" />
              <span
                style={{ fontFamily: "var(--font-sans), 'Poppins', sans-serif" }}
                className="absolute top-4 right-8 font-black text-8xl sm:text-9xl text-white/[0.04] pointer-events-none select-none"
              >
                {sarathiiMethodSteps[selectedStep].step}
              </span>

              {/* Left Column: Narrative & Purpose (7 cols) */}
              <div className="lg:col-span-7 space-y-5 relative z-10">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-[#E6CFA5] text-xs uppercase tracking-widest font-bold border border-white/15">
                  <Sparkles size={13} className="text-[#D4AF6A]" />
                  <span>Phase {sarathiiMethodSteps[selectedStep].step} of 05</span>
                </div>

                <h3
                  style={{ fontFamily: "var(--font-sans), 'Poppins', sans-serif" }}
                  className="text-3xl sm:text-4xl lg:text-5xl text-[#FFFDF9] font-bold tracking-tight leading-tight"
                >
                  {sarathiiMethodSteps[selectedStep].name} —{' '}
                  <span className="font-serif italic font-normal text-[#E6CFA5]">
                    {sarathiiMethodSteps[selectedStep].tagline}
                  </span>
                </h3>

                <p
                  style={{ fontFamily: "var(--font-sans), 'Poppins', sans-serif" }}
                  className="text-sm sm:text-base text-[#E5DDD8]/90 leading-relaxed font-normal"
                >
                  {sarathiiMethodSteps[selectedStep].description}
                </p>

                {/* Navigation Buttons inside showcase */}
                <div className="flex items-center gap-3 pt-4">
                  <button
                    onClick={handlePrev}
                    className="p-3 rounded-full bg-white/5 hover:bg-white/15 border border-white/15 text-white transition-all hover:scale-105 active:scale-95 flex items-center justify-center"
                    aria-label="Previous step"
                  >
                    <ArrowLeft size={16} />
                  </button>

                  <button
                    onClick={handleNext}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs uppercase tracking-wider font-bold text-[#2A0932] bg-[#E6CFA5] hover:bg-[#FFFDF9] transition-all shadow-md hover:scale-105 active:scale-95"
                  >
                    <span>Next Phase</span>
                    <ArrowRight size={14} />
                  </button>

                  <span className="text-xs text-[#E5DDD8]/60 ml-2">
                    {selectedStep + 1} / 5
                  </span>
                </div>
              </div>

              {/* Right Column: Key Execution Protocols (5 cols) */}
              <div className="lg:col-span-5 bg-white/[0.05] backdrop-blur-md rounded-2xl sm:rounded-3xl p-6 sm:p-7 border border-[#D4AF6A]/25 space-y-4 relative z-10 shadow-inner">
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#D4AF6A] font-bold">
                  <CheckCircle2 size={16} />
                  <span>Execution Protocols</span>
                </div>

                <div className="space-y-3">
                  {sarathiiMethodSteps[selectedStep].details.map((detail, i) => (
                    <div
                      key={detail}
                      className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 flex items-start gap-3 text-xs sm:text-sm text-[#E5DDD8] leading-relaxed group hover:border-[#D4AF6A]/40 transition-colors"
                    >
                      <span className="w-5 h-5 rounded-full bg-[#4B1458] border border-[#D4AF6A]/30 flex items-center justify-center text-[10px] text-[#E6CFA5] shrink-0 font-bold mt-0.5">
                        {i + 1}
                      </span>
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>
    </section>
  )
}
