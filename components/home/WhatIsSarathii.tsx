'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Sparkles,
  Compass,
  Shield,
  BookOpen,
  Sword,
  Target,
  ArrowRight,
  Quote,
  CheckCircle2,
  Crown,
} from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { sarathiiGenesis } from '@/data/philosophy'

type GenesisTab = 'definition' | 'arjuna' | 'battlefield'

export function WhatIsSarathii() {
  const [activeTab, setActiveTab] = useState<GenesisTab>('definition')
  const { whatIsSarathii, thePowerOfAGuide, civilServicesMahabharata } = sarathiiGenesis

  return (
    <section
      id="what-is-sarathii"
      className="py-12 lg:py-20 bg-[#1A041E] text-white relative overflow-hidden border-t border-b border-[#D4AF6A]/30"
    >
      {/* Ambient background glows */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#7B2A7A]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[450px] h-[450px] bg-[#D4AF6A]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-pattern-dark opacity-30 pointer-events-none" />

      <Container className="relative z-10">
        <SectionHeading
          align="center"
          kicker="The Genesis · Parthasarathii"
          title={
            <>
              What is a Sarathii? —{' '}
              <span className="font-serif italic font-normal text-[#E6CFA5]">
                The Power of a Guide
              </span>
            </>
          }
          description="In the epic tradition of Kurukshetra, the outcome of the war was determined not merely by mighty weapons or vast armies, but by the subtle, strategic wisdom of the charioteer. Today, the Civil Services Examination mirrors that same battlefield."
          theme="dark"
        />

        {/* 3 Master Selector Tabs */}
        <div className="mt-8 mb-10 flex justify-center">
          <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl sm:rounded-full bg-[#2A0932] border border-[#D4AF6A]/40 shadow-inner max-w-2xl w-full">
            <button
              onClick={() => setActiveTab('definition')}
              className={`flex-1 py-3 px-4 rounded-xl sm:rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer ${
                activeTab === 'definition'
                  ? 'bg-[#E6CFA5] text-[#2A0932] shadow-lg'
                  : 'text-[#E5DDD8]/80 hover:text-white'
              }`}
              data-cursor="explore"
            >
              <Compass size={15} />
              <span>01. What is a Sarathii?</span>
            </button>

            <button
              onClick={() => setActiveTab('arjuna')}
              className={`flex-1 py-3 px-4 rounded-xl sm:rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer ${
                activeTab === 'arjuna'
                  ? 'bg-[#E6CFA5] text-[#2A0932] shadow-lg'
                  : 'text-[#E5DDD8]/80 hover:text-white'
              }`}
              data-cursor="explore"
            >
              <Crown size={15} />
              <span>02. The Power of a Guide</span>
            </button>

            <button
              onClick={() => setActiveTab('battlefield')}
              className={`flex-1 py-3 px-4 rounded-xl sm:rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer ${
                activeTab === 'battlefield'
                  ? 'bg-[#E6CFA5] text-[#2A0932] shadow-lg'
                  : 'text-[#E5DDD8]/80 hover:text-white'
              }`}
              data-cursor="explore"
            >
              <Target size={15} />
              <span>03. The Modern Mahabharata</span>
            </button>
          </div>
        </div>

        {/* Dynamic Interactive Panel */}
        <AnimatePresence mode="wait">
          {activeTab === 'definition' && (
            <motion.div
              key="definition"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="bg-gradient-to-br from-[#2A0932] via-[#350C3E] to-[#1F0724] rounded-3xl p-6 sm:p-10 lg:p-12 border border-[#D4AF6A]/40 shadow-2xl space-y-8"
            >
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-white/10">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-xs uppercase tracking-widest text-[#E6CFA5] border border-white/15">
                  <Sparkles size={12} className="text-[#D4AF6A]" />
                  <span>The Sacred Meaning</span>
                </div>
                <span className="text-xs font-serif italic text-[#E6CFA5]">
                  Shri Krishna as Parthasarathii
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8 space-y-5">
                  <h3 className="font-serif text-3xl sm:text-4xl lg:text-[2.6rem] text-white font-normal leading-tight">
                    More than a Charioteer —{' '}
                    <span className="italic text-[#E6CFA5]">
                      The Warrior&apos;s Confidant &amp; Strategist
                    </span>
                  </h3>

                  <p className="text-base sm:text-lg lg:text-xl text-[#E5DDD8] leading-relaxed font-light">
                    {whatIsSarathii.definition}
                  </p>

                  <div className="pt-2 p-5 rounded-2xl bg-white/[0.05] border border-[#D4AF6A]/30 flex items-start gap-4">
                    <Quote size={28} className="text-[#D4AF6A] shrink-0 mt-1" />
                    <div>
                      <div className="font-serif text-lg sm:text-xl text-[#E6CFA5] italic leading-snug">
                        &ldquo;{whatIsSarathii.idealExample}&rdquo;
                      </div>
                      <div className="text-xs text-[#E5DDD8]/70 uppercase tracking-widest font-semibold mt-2">
                        The Eternal Benchmark of Mentorship
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-4 bg-white/[0.04] p-6 sm:p-7 rounded-2xl border border-white/10 space-y-4 text-center lg:text-left">
                  <div className="w-12 h-12 rounded-xl bg-[#E6CFA5] text-[#2A0932] flex items-center justify-center font-serif text-xl font-bold mx-auto lg:mx-0 shadow-lg">
                    सारथि
                  </div>
                  <h4 className="font-serif text-xl text-white font-semibold">
                    The 3 Facets of a Sarathii
                  </h4>
                  <ul className="space-y-3 text-xs sm:text-sm text-[#E5DDD8]/90">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 size={16} className="text-[#D4AF6A] shrink-0 mt-0.5" />
                      <span><strong>The Confidant:</strong> Understands the inner mind, doubts, and emotional state of the warrior.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 size={16} className="text-[#D4AF6A] shrink-0 mt-0.5" />
                      <span><strong>The Strategist:</strong> Knows the entire terrain, opponent psychology, and optimal timing.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 size={16} className="text-[#D4AF6A] shrink-0 mt-0.5" />
                      <span><strong>The Guide:</strong> Does not fight the war, but makes victory possible through timeless judgment.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'arjuna' && (
            <motion.div
              key="arjuna"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="bg-gradient-to-br from-[#2A0932] via-[#350C3E] to-[#1F0724] rounded-3xl p-6 sm:p-10 lg:p-12 border border-[#D4AF6A]/40 shadow-2xl space-y-8"
            >
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-white/10">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-xs uppercase tracking-widest text-[#E6CFA5] border border-white/15">
                  <Crown size={12} className="text-[#D4AF6A]" />
                  <span>The Kurukshetra Lesson</span>
                </div>
                <span className="text-xs font-serif italic text-[#E6CFA5]">
                  Wisdom Over Numbers · Clarity Over Brute Strength
                </span>
              </div>

              <div className="space-y-6">
                <h3 className="font-serif text-3xl sm:text-4xl text-white font-normal leading-tight max-w-3xl">
                  {thePowerOfAGuide.title} —{' '}
                  <span className="italic text-[#E6CFA5]">
                    When Capability Alone Is Not Enough
                  </span>
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 rounded-2xl bg-white/[0.04] border border-white/10 space-y-3">
                    <div className="text-xs uppercase tracking-widest text-[#D4AF6A] font-bold">
                      The Illusion of Capability
                    </div>
                    <p className="text-sm sm:text-base text-[#E5DDD8] leading-relaxed">
                      {thePowerOfAGuide.arjunaContext}
                    </p>
                    <p className="text-sm sm:text-base text-[#E5DDD8] leading-relaxed">
                      {thePowerOfAGuide.deeperTruth}
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-white/[0.04] border border-white/10 space-y-3">
                    <div className="text-xs uppercase tracking-widest text-[#D4AF6A] font-bold">
                      The Defining Choice
                    </div>
                    <p className="text-sm sm:text-base text-[#E5DDD8] leading-relaxed">
                      {thePowerOfAGuide.theChoice}
                    </p>
                    <p className="text-sm sm:text-base text-[#E6CFA5] italic font-serif leading-relaxed border-t border-white/10 pt-3">
                      &ldquo;{thePowerOfAGuide.kurukshetraDecisiveFactor}&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'battlefield' && (
            <motion.div
              key="battlefield"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="bg-gradient-to-br from-[#2A0932] via-[#350C3E] to-[#1F0724] rounded-3xl p-6 sm:p-10 lg:p-12 border border-[#D4AF6A]/40 shadow-2xl space-y-8"
            >
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-white/10">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-xs uppercase tracking-widest text-[#E6CFA5] border border-white/15">
                  <Target size={12} className="text-[#D4AF6A]" />
                  <span>The Contemporary Parallels</span>
                </div>
                <span className="text-xs font-serif italic text-[#E6CFA5]">
                  UPSC CSE &amp; The Kurukshetra of the Mind
                </span>
              </div>

              <div className="space-y-6">
                <h3 className="font-serif text-3xl sm:text-4xl text-white font-normal leading-tight max-w-3xl">
                  {civilServicesMahabharata.title}
                </h3>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                  <div className="p-6 rounded-2xl bg-white/[0.04] border border-white/10 space-y-3">
                    <span className="text-xs uppercase tracking-widest text-[#D4AF6A] font-bold block">
                      The Battleground
                    </span>
                    <p className="text-sm text-[#E5DDD8] leading-relaxed">
                      {civilServicesMahabharata.battlefieldComparison}
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-white/[0.04] border border-white/10 space-y-3">
                    <span className="text-xs uppercase tracking-widest text-[#D4AF6A] font-bold block">
                      The True Requirement
                    </span>
                    <p className="text-sm text-[#E5DDD8] leading-relaxed">
                      {civilServicesMahabharata.aspirantNeed}
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-white/[0.04] border border-white/10 space-y-3">
                    <span className="text-xs uppercase tracking-widest text-[#D4AF6A] font-bold block">
                      Where Sarathii Enters
                    </span>
                    <p className="text-sm text-[#E5DDD8] leading-relaxed">
                      {civilServicesMahabharata.sarathiiRole}
                    </p>
                  </div>
                </div>

                {/* Closing Maxim Banner */}
                <div className="mt-6 p-5 sm:p-6 rounded-2xl bg-[#E6CFA5] text-[#2A0932] shadow-xl text-center">
                  <p className="font-serif text-base sm:text-xl font-bold leading-relaxed">
                    &ldquo;{civilServicesMahabharata.closingMaxim}&rdquo;
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </section>
  )
}
