'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Compass, Scale, Feather, ShieldCheck, ArrowRight, Sparkles, Quote } from 'lucide-react'
import { philosophyConcepts } from '@/data/philosophy'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'

const iconMap: Record<string, React.ReactNode> = {
  Compass: <Compass size={24} />,
  Scale: <Scale size={24} />,
  Feather: <Feather size={24} />,
  ShieldCheck: <ShieldCheck size={24} />,
}

export function Philosophy() {
  const [activeConcept, setActiveConcept] = useState(0)

  return (
    <section id="philosophy" className="py-10 lg:py-14 bg-[#F8F5F2] relative overflow-hidden bg-pattern-subtle">
      {/* Subtle background ornamentation */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#4B1458]/5 rounded-full blur-3xl pointer-events-none" />

      <Container>
        {/* Section Header */}
        <SectionHeading
          align="center"
          kicker="03 / The Four Tenets"
          title={
            <>
              Success is not just about what you know.{' '}
              <br className="hidden sm:inline" />
              <span className="italic font-normal text-[#7B2A7A]">
                It is about how you think.
              </span>
            </>
          }
          description="Every year, thousands of aspirants study the same books and attend the same lectures. The defining difference lies in clarity of thought, objectivity of analysis, and composure under pressure."
        />

        {/* Philosophy Composition Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start mt-6">
          {/* Left: Interactive 4 Principles Nav (5 cols) */}
          <div className="lg:col-span-5 space-y-2.5">
            <p className="text-xs uppercase tracking-[0.16em] font-semibold text-[#7B2A7A] mb-2">
              The Four Cognitive Pillars
            </p>
            {philosophyConcepts.map((concept, index) => {
              const isActive = activeConcept === index
              return (
                <button
                  key={concept.id}
                  onClick={() => setActiveConcept(index)}
                  className={`w-full text-left p-3.5 sm:p-4 rounded-2xl transition-all duration-300 flex items-center justify-between border ${
                    isActive
                      ? 'bg-[#4B1458] text-white border-[#4B1458] shadow-md -translate-y-0.5'
                      : 'bg-white/80 hover:bg-white text-[#1F1722] border-[#E5DDD8] hover:border-[#D4AF6A]'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
                        isActive
                          ? 'bg-white/15 text-[#E6CFA5]'
                          : 'bg-[#F8F5F2] text-[#4B1458]'
                      }`}
                    >
                      {iconMap[concept.iconName]}
                    </div>
                    <div>
                      <div className="font-serif text-base sm:text-lg font-semibold">
                        {concept.title}
                      </div>
                      <div
                        className={`text-xs tracking-wide ${
                          isActive ? 'text-[#E6CFA5]' : 'text-[#6E6271]'
                        }`}
                      >
                        {concept.subtitle}
                      </div>
                    </div>
                  </div>
                  <ArrowRight
                    size={16}
                    className={`transition-transform duration-300 ${
                      isActive ? 'translate-x-1 text-[#E6CFA5]' : 'opacity-30'
                    }`}
                  />
                </button>
              )
            })}
          </div>

          {/* Right: Detailed Focus Panel (7 cols) */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeConcept}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35, ease: 'easeInOut' }}
                className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-[#E5DDD8] shadow-sm relative overflow-hidden"
              >
                {/* Number Watermark */}
                <span className="absolute top-4 right-8 font-serif text-7xl lg:text-8xl font-bold text-[#4B1458]/5 pointer-events-none select-none">
                  0{activeConcept + 1}
                </span>

                <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-[#D4AF6A]/15 text-[#A8823B] text-[11px] uppercase tracking-widest font-semibold mb-4">
                  <Sparkles size={12} />
                  <span>Principle 0{activeConcept + 1}</span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl text-[#2A0932] font-normal mb-1">
                  {philosophyConcepts[activeConcept].title}
                </h3>
                <p className="text-xs font-semibold text-[#7B2A7A] uppercase tracking-wider mb-4">
                  {philosophyConcepts[activeConcept].subtitle}
                </p>

                <p className="text-xs sm:text-sm text-[#6E6271] leading-relaxed mb-6">
                  {philosophyConcepts[activeConcept].description}
                </p>

                {/* Core Ethos Callout Box */}
                <div className="bg-[#F8F5F2] rounded-2xl p-4 sm:p-5 border-l-4 border-[#D4AF6A] relative">
                  <Quote size={18} className="text-[#D4AF6A] mb-1.5" />
                  <p className="font-serif text-sm sm:text-base italic text-[#2A0932] leading-relaxed">
                    “The Sarathii Method is founded on the belief that excellence is not an accident. It is the deliberate outcome of disciplined preparation, logical thinking, and unwavering composure.”
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </section>
  )
}
