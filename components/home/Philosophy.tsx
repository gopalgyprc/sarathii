'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import {
  Compass,
  Scale,
  Feather,
  ShieldCheck,
  ArrowRight,
  Sparkles,
  Quote,
  BookOpen,
  X,
  CheckCircle2,
  Shield,
  Briefcase,
  PenTool,
} from 'lucide-react'
import {
  philosophyConcepts,
  sarathiiPhilosophySections,
  sarathiiMantras,
  fullPhilosophyText,
} from '@/data/philosophy'
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
  const [manifestoModalOpen, setManifestoModalOpen] = useState(false)

  return (
    <section id="philosophy" className="py-12 lg:py-16 bg-[#F8F5F2] relative overflow-hidden bg-pattern-subtle">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#4B1458]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#D4AF6A]/10 rounded-full blur-3xl pointer-events-none" />

      <Container>
        {/* Section Header */}
        <SectionHeading
          align="center"
          kicker="01 / The Sarathii Philosophy"
          title={
            <>
              Success is not just about what you know.{' '}
              <br className="hidden sm:inline" />
              <span className="font-serif italic font-normal text-[#7B2A7A]">
                It is about how you think.
              </span>
            </>
          }
          description="The Sarathii Method is founded on the belief that excellence is not an accident. It is the outcome of disciplined preparation, logical thinking, strategic planning, emotional resilience, and unwavering self-belief."
        />

        {/* =================================================================== */}
        {/* EDITORIAL MANIFESTO BANNER: The School of Thought with Chamber Image */}
        {/* =================================================================== */}
        <div className="mt-8 mb-10 bg-gradient-to-br from-[#2A0932] via-[#380D41] to-[#1A051F] text-[#FFFDF9] rounded-3xl p-6 sm:p-8 lg:p-10 border border-[#D4AF6A]/30 relative overflow-hidden shadow-2xl">
          {/* Subtle Ambient Decorative Gradients */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#7B2A7A]/25 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#D4AF6A]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left Col: Authentic Thinking Chamber Imagery (5 cols) */}
            <div className="lg:col-span-5 space-y-3">
              <div className="relative w-full aspect-[16/10] sm:aspect-[4/3] rounded-2xl overflow-hidden border-2 border-[#D4AF6A]/60 shadow-2xl group">
                <Image
                  src="/images/sarathii-philosophy-chamber.jpg"
                  alt="The Sarathii Thinking Chamber - Sanctuary of Civil Service Philosophy & Leadership"
                  fill
                  sizes="(max-width: 1024px) 100vw, 420px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A051F]/90 via-black/20 to-transparent pointer-events-none" />
                
                {/* Floating Tag */}
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#1A051F]/80 backdrop-blur-md border border-[#D4AF6A]/40 text-[10px] uppercase tracking-widest font-bold text-[#E6CFA5]">
                  The Thinking Chamber
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-3 left-3 right-3 text-left">
                  <div className="text-xs font-serif italic text-[#FFFDF9] leading-snug">
                    Sanctuary of Civil Services & Leadership Philosophy
                  </div>
                  <div className="text-[10px] text-[#E6CFA5] font-medium mt-0.5">
                    Forging discipline, judicial balance & administrative vision
                  </div>
                </div>
              </div>

              <div className="text-[11px] text-[#E5DDD8]/70 italic text-center lg:text-left px-1">
                &ldquo;Excellence is not an accident. It is the deliberate outcome of disciplined preparation.&rdquo;
              </div>
            </div>

            {/* Right Col: Editorial Credo & Confluence (7 cols) */}
            <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-white/10 pb-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/15 text-[11px] uppercase tracking-[0.2em] font-semibold text-[#E6CFA5]">
                  <Sparkles size={12} className="text-[#D4AF6A]" />
                  <span>The Sarathii Credo</span>
                </div>
                <button
                  onClick={() => setManifestoModalOpen(true)}
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.14em] font-semibold text-[#E6CFA5] hover:text-white transition-colors group focus-visible:outline-none"
                >
                  <BookOpen size={14} className="text-[#D4AF6A]" />
                  <span className="underline underline-offset-4 decoration-[#D4AF6A]/60 group-hover:decoration-white">
                    Read Full Philosophy Manifesto
                  </span>
                  <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Central Philosophy Paragraph */}
              <p className="font-serif text-lg sm:text-xl md:text-2xl text-[#FFFDF9] font-normal leading-relaxed italic">
                &ldquo;Every year, thousands of aspirants study the same books, attend the same lectures, and read the same current affairs. Yet only a few succeed. The difference lies not merely in what they know, but in how they think, how they write, and how they approach the examination. <strong className="text-[#E6CFA5] not-italic font-semibold">Sarathii seeks to bridge that difference.</strong>&rdquo;
              </p>

              {/* The 4-Fold Confluence */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-left border-t border-white/10 pt-4">
                <div className="p-3 rounded-2xl bg-white/[0.04] border border-white/10">
                  <span className="text-xs uppercase tracking-wider text-[#D4AF6A] font-bold block mb-1">
                    Discipline
                  </span>
                  <span className="text-sm sm:text-base text-white font-semibold">
                    Of a Soldier
                  </span>
                </div>
                <div className="p-3 rounded-2xl bg-white/[0.04] border border-white/10">
                  <span className="text-xs uppercase tracking-wider text-[#D4AF6A] font-bold block mb-1">
                    Vision
                  </span>
                  <span className="text-sm sm:text-base text-white font-semibold">
                    Of an Administrator
                  </span>
                </div>
                <div className="p-3 rounded-2xl bg-white/[0.04] border border-white/10">
                  <span className="text-xs uppercase tracking-wider text-[#D4AF6A] font-bold block mb-1">
                    Balance
                  </span>
                  <span className="text-sm sm:text-base text-white font-semibold">
                    Of a Judge
                  </span>
                </div>
                <div className="p-3 rounded-2xl bg-white/[0.04] border border-white/10">
                  <span className="text-xs uppercase tracking-wider text-[#D4AF6A] font-bold block mb-1">
                    Sensitivity
                  </span>
                  <span className="text-sm sm:text-base text-white font-semibold">
                    Of a Writer
                  </span>
                </div>
              </div>

              {/* Closing Dual Mantras */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-6 text-sm sm:text-base font-serif italic text-[#E6CFA5]">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF6A]" />
                  <span>Sarathii is not merely a classroom. It is a school of thought.</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF6A]" />
                  <span>Sarathii is not merely a mentor. It is a lifelong guide.</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =================================================================== */}
        {/* THE FOUR COGNITIVE PILLARS (Interactive Grid) */}
        {/* =================================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* Left: Interactive 4 Principles Nav (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            <div className="flex items-center justify-between mb-2">
              <p className="text-xs sm:text-sm uppercase tracking-[0.18em] font-bold text-[#7B2A7A]">
                The Four Cognitive Disciplines
              </p>
              <span className="text-xs text-[#6E6271] font-mono font-medium">
                04 Core Pillars
              </span>
            </div>

            {philosophyConcepts.map((concept, index) => {
              const isActive = activeConcept === index
              return (
                <button
                  key={concept.id}
                  onClick={() => setActiveConcept(index)}
                  className={`w-full text-left p-4 sm:p-4.5 rounded-2xl transition-all duration-300 flex items-center justify-between border ${
                    isActive
                      ? 'bg-[#4B1458] text-white border-[#4B1458] shadow-md -translate-y-0.5'
                      : 'bg-white/80 hover:bg-white text-[#1F1722] border-[#E5DDD8] hover:border-[#D4AF6A]'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                        isActive
                          ? 'bg-white/15 text-[#E6CFA5]'
                          : 'bg-[#F8F5F2] text-[#4B1458]'
                      }`}
                    >
                      {iconMap[concept.iconName]}
                    </div>
                    <div>
                      <div className="font-serif text-lg sm:text-xl font-bold leading-snug">
                        {concept.title}
                      </div>
                      <div
                        className={`text-xs sm:text-sm tracking-wide mt-0.5 ${
                          isActive ? 'text-[#E6CFA5]' : 'text-[#6E6271]'
                        }`}
                      >
                        {concept.subtitle}
                      </div>
                    </div>
                  </div>
                  <ArrowRight
                    size={18}
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
                <span className="absolute top-4 right-8 font-serif text-8xl lg:text-9xl font-bold text-[#4B1458]/5 pointer-events-none select-none">
                  0{activeConcept + 1}
                </span>

                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D4AF6A]/15 text-[#A8823B] text-xs uppercase tracking-widest font-bold mb-4">
                  <Sparkles size={13} />
                  <span>Principle 0{activeConcept + 1} of 04</span>
                </div>

                <h3 className="font-serif text-3xl sm:text-4xl text-[#2A0932] font-normal mb-1.5">
                  {philosophyConcepts[activeConcept].title}
                </h3>
                <p className="text-xs sm:text-sm font-bold text-[#7B2A7A] uppercase tracking-wider mb-4">
                  {philosophyConcepts[activeConcept].subtitle}
                </p>

                <p className="text-base sm:text-lg text-[#3D3141] leading-relaxed mb-6">
                  {philosophyConcepts[activeConcept].description}
                </p>

                {/* Core Ethos Callout Box */}
                <div className="bg-[#F8F5F2] rounded-2xl p-5 sm:p-6 border-l-4 border-[#D4AF6A] relative">
                  <Quote size={20} className="text-[#D4AF6A] mb-2" />
                  <p className="font-serif text-base sm:text-lg lg:text-xl italic text-[#2A0932] leading-relaxed">
                    &ldquo;Success in the Civil Services Examination is not determined solely by the amount of knowledge one possesses. It is determined by the ability to think clearly, analyse objectively, express precisely, and perform confidently under pressure.&rdquo;
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Container>

      {/* =================================================================== */}
      {/* FULL PHILOSOPHY MANIFESTO MODAL */}
      {/* =================================================================== */}
      <AnimatePresence>
        {manifestoModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setManifestoModalOpen(false)}
              className="absolute inset-0 bg-black/75 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#FFFDF9] text-[#1F1722] rounded-3xl p-6 sm:p-10 border border-[#D4AF6A]/50 shadow-2xl z-10"
            >
              {/* Close Button */}
              <button
                onClick={() => setManifestoModalOpen(false)}
                className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#F8F5F2] hover:bg-[#E5DDD8] text-[#1F1722] flex items-center justify-center transition-colors"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>

              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#4B1458]/10 text-xs uppercase tracking-widest font-bold text-[#7B2A7A]">
                  <Sparkles size={13} className="text-[#D4AF6A]" />
                  <span>The Official Manifesto</span>
                </div>

                <div>
                  <h2 className="font-serif text-3xl sm:text-4xl text-[#2A0932] font-normal leading-tight">
                    The Sarathii Philosophy
                  </h2>
                  <p className="text-xs uppercase tracking-widest text-[#7B2A7A] mt-1 font-semibold">
                    A School of Thought • A Lifelong Guide
                  </p>
                </div>

                <div className="h-0.5 bg-gradient-to-r from-[#D4AF6A] via-[#E5DDD8] to-transparent" />

                {/* Structured Sections */}
                <div className="space-y-5 text-sm sm:text-base text-[#3D3141] leading-relaxed">
                  {sarathiiPhilosophySections.map((sec, idx) => (
                    <div key={idx} className="space-y-1.5">
                      <h3 className="text-xs uppercase tracking-wider font-bold text-[#7B2A7A]">
                        {sec.heading}
                      </h3>
                      <p className="font-normal">{sec.content}</p>
                    </div>
                  ))}
                </div>

                {/* Closing Dual Mantras */}
                <div className="mt-8 p-5 rounded-2xl bg-[#2A0932] text-[#FFFDF9] border border-[#D4AF6A]/30 space-y-2">
                  <p className="font-serif text-base sm:text-lg italic text-[#E6CFA5]">
                    &ldquo;For Sarathii, success is measured not only by the number of selections it produces, but also by the quality of officers it helps shape.&rdquo;
                  </p>
                  <div className="pt-2 border-t border-white/10 flex flex-col sm:flex-row gap-3 text-xs text-[#E5DDD8]/90">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 size={13} className="text-[#D4AF6A]" />
                      Sarathii is not merely a classroom. It is a school of thought.
                    </span>
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 size={13} className="text-[#D4AF6A]" />
                      Sarathii is not merely a mentor. It is a lifelong guide.
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}

