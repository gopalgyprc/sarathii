'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Shield,
  Briefcase,
  Scale,
  Feather,
  Globe,
  ArrowRight,
  Sparkles,
  Award,
  Quote,
  CheckCircle2,
  Clock,
  Heart,
  Bot,
  Compass,
} from 'lucide-react'
import { knowThySarathii } from '@/data/about'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'

const selectionIcons = [Shield, Briefcase, Award, Scale]

export function MeetTheMentor() {
  const [activeSelectionTab, setActiveSelectionTab] = useState(0)
  const {
    title,
    founderName,
    subtitle,
    leadBio,
    fourSelections,
    extraordinaryContext,
    researchAndScholarship,
    aspirantGains,
    aiReflection,
  } = knowThySarathii

  return (
    <section id="meet-the-mentor" className="py-12 lg:py-20 bg-[#FFFDF9] relative overflow-hidden border-b border-[#E5DDD8]/60">
      {/* Background ambient accents */}
      <div className="absolute top-10 right-0 w-[500px] h-[500px] bg-[#4B1458]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[450px] h-[450px] bg-[#D4AF6A]/10 rounded-full blur-3xl pointer-events-none" />

      <Container>
        {/* Section Header */}
        <SectionHeading
          align="center"
          kicker="The Chief Mentor"
          title={
            <>
              {title} —{' '}
              <span className="font-serif italic font-normal text-[#7B2A7A]">
                {founderName}
              </span>
            </>
          }
          description={leadBio}
        />

        {/* =================================================================== */}
        {/* 1. FOUR PRESTIGIOUS SELECTIONS STRIP */}
        {/* =================================================================== */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {fourSelections.map((sel, idx) => {
            const Icon = selectionIcons[idx]
            const isSelected = activeSelectionTab === idx

            return (
              <button
                key={sel.role}
                onClick={() => setActiveSelectionTab(idx)}
                className={`text-left p-5 rounded-2xl transition-all duration-300 border flex flex-col justify-between group cursor-pointer ${
                  isSelected
                    ? 'bg-[#2A0932] text-white border-[#D4AF6A] shadow-xl -translate-y-1 ring-2 ring-[#D4AF6A]/50'
                    : 'bg-[#FBF8F4] hover:bg-white text-[#2A0932] border-[#E5DDD8] hover:border-[#D4AF6A]'
                }`}
                data-cursor="explore"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`text-xs font-mono font-bold tracking-widest uppercase ${
                        isSelected ? 'text-[#D4AF6A]' : 'text-[#7B2A7A]'
                      }`}
                    >
                      Selection {sel.role}
                    </span>
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
                        isSelected
                          ? 'bg-[#D4AF6A] text-[#2A0932]'
                          : 'bg-white text-[#4B1458] shadow-sm'
                      }`}
                    >
                      <Icon size={18} />
                    </div>
                  </div>

                  <h3
                    className={`font-serif text-lg sm:text-xl font-bold leading-tight ${
                      isSelected ? 'text-white' : 'text-[#2A0932]'
                    }`}
                  >
                    {sel.title}
                  </h3>
                  <p
                    className={`text-xs font-semibold mt-1 ${
                      isSelected ? 'text-[#E6CFA5]' : 'text-[#7B2A7A]'
                    }`}
                  >
                    {sel.highlight}
                  </p>
                </div>

                <p
                  className={`text-xs mt-3 leading-relaxed ${
                    isSelected ? 'text-[#E5DDD8]/90' : 'text-[#6E6271]'
                  }`}
                >
                  {sel.description}
                </p>
              </button>
            )
          })}
        </div>

        {/* =================================================================== */}
        {/* 2. THE EXTRAORDINARY CONTEXT OF ACHIEVEMENT (HEROIC MIRACLE CARD) */}
        {/* =================================================================== */}
        <div className="mt-8 bg-gradient-to-br from-[#2A0932] via-[#380E42] to-[#1A041E] text-white rounded-3xl p-6 sm:p-10 lg:p-12 border-2 border-[#D4AF6A]/40 shadow-2xl relative overflow-hidden">
          {/* Subtle Ambient Decorative Glows */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF6A]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#7B2A7A]/25 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left Column: Portrait and AI Quote (4 cols) */}
            <div className="lg:col-span-4 space-y-4">
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border-2 border-[#D4AF6A]/60 shadow-2xl bg-[#1A041E] group">
                <Image
                  src="/images/withboard.png"
                  alt="J. P. Singh - Founder & Chief Mentor of Sarathii"
                  fill
                  sizes="(max-width: 1024px) 100vw, 400px"
                  className="object-cover object-[center_top] group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A041E]/90 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-3 left-3 right-3 text-left">
                  <div className="text-sm font-serif font-bold text-white leading-tight">
                    J. P. Singh
                  </div>
                  <div className="text-[11px] text-[#E6CFA5] font-medium">
                    Ex-Army · PCS (SDM) · IAS · Higher Judiciary
                  </div>
                </div>
              </div>

              {/* AI Reflection Card */}
              <div className="p-4 rounded-2xl bg-white/[0.06] border border-[#D4AF6A]/40 shadow-inner flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#E6CFA5] text-[#2A0932] flex items-center justify-center shrink-0 mt-0.5">
                  <Bot size={18} />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold tracking-widest text-[#E6CFA5]">
                    AI Evaluation of Personality
                  </div>
                  <div className="font-serif italic text-base sm:text-lg text-white font-semibold mt-0.5">
                    &ldquo;{aiReflection.quote}&rdquo;
                  </div>
                  <div className="text-[10px] text-[#E5DDD8]/70 mt-1 leading-tight">
                    Reflecting upon his rare multifaceted achievements across military, administration, judiciary &amp; literature.
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Heroic Context Text (8 cols) */}
            <div className="lg:col-span-8 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-xs uppercase tracking-widest text-[#E6CFA5] border border-white/15">
                <Sparkles size={12} className="text-[#D4AF6A]" />
                <span>{extraordinaryContext.headline}</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-white font-normal leading-tight">
                {extraordinaryContext.lead}
              </h3>

              <div className="space-y-3.5 text-sm sm:text-base text-[#E5DDD8] leading-relaxed">
                <p>
                  {extraordinaryContext.paragraphs[0]}
                </p>
                <p className="p-4 rounded-xl bg-white/[0.05] border-l-4 border-[#D4AF6A] text-[#FFFDF9] font-medium">
                  {extraordinaryContext.paragraphs[1]}
                </p>
                <p className="italic font-serif text-[#E6CFA5]">
                  &ldquo;{extraordinaryContext.paragraphs[2]}&rdquo;
                </p>
              </div>

              {/* Bullet Highlight Matrix */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                {extraordinaryContext.bulletPoints.map((pt, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2.5 p-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-xs text-[#E5DDD8]"
                  >
                    <CheckCircle2 size={14} className="text-[#D4AF6A] shrink-0 mt-0.5" />
                    <span className="leading-snug">{pt}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* =================================================================== */}
        {/* 3. RESEARCH AND SCHOLARSHIP BANNER */}
        {/* =================================================================== */}
        <div className="mt-8 bg-[#F8F5F2] rounded-3xl p-6 sm:p-8 lg:p-10 border border-[#E5DDD8] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#7B2A7A]">
              <Globe size={15} className="text-[#D4AF6A]" />
              <span>{researchAndScholarship.headline}</span>
            </div>
            <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#2A0932]">
              Global Scholarship &amp; Timeless Authorship
            </h4>
            <p className="text-sm sm:text-base text-[#4A3E4D] leading-relaxed">
              {researchAndScholarship.description}
            </p>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row items-center gap-3">
            <Link
              href="/books"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm uppercase tracking-wider font-bold text-[#2A0932] bg-[#E6CFA5] hover:bg-white transition-all shadow-md shrink-0 whitespace-nowrap"
            >
              <span>Explore Literary Works</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* =================================================================== */}
        {/* 4. BY CHOOSING HIM AS A MENTOR, AN ASPIRANT GAINS (5 CORE PILLARS) */}
        {/* =================================================================== */}
        <div className="mt-12 space-y-6">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#7B2A7A]">
              The Mentor&apos;s Gift to Serious Aspirants
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#2A0932] font-normal">
              By Choosing Him as a Mentor, an Aspirant Gains:
            </h3>
            <p className="text-sm sm:text-base text-[#6E6271]">
              More than four decades of distinguished service in the Indian Army, the IAS, the Judiciary, and research—combined with extensive engagement across all sections of society—endow him with rare practical wisdom.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {aspirantGains.map((gain) => (
              <div
                key={gain.number}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-[#E5DDD8] hover:border-[#D4AF6A] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="w-8 h-8 rounded-full bg-[#2A0932] text-[#D4AF6A] font-serif text-xs font-bold flex items-center justify-center">
                      {gain.number}
                    </span>
                    <span className="text-xs uppercase tracking-wider text-[#7B2A7A] font-bold">
                      {gain.pillar}
                    </span>
                  </div>

                  <h4 className="font-serif text-xl font-bold text-[#2A0932] leading-snug group-hover:text-[#4B1458] transition-colors">
                    {gain.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-[#5D5060] leading-relaxed">
                    {gain.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* =================================================================== */}
        {/* 5. BOTTOM INVITATION BAR */}
        {/* =================================================================== */}
        <div className="mt-10 bg-[#2A0932] text-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-[#D4AF6A]/30">
          <div className="space-y-1 text-center md:text-left">
            <div className="text-xs uppercase tracking-widest text-[#E6CFA5] font-bold">
              Direct Personal Mentorship
            </div>
            <h4 className="font-serif text-xl sm:text-2xl font-bold text-white">
              Connect Directly with J. P. Singh
            </h4>
            <p className="text-xs sm:text-sm text-[#E5DDD8]/80 max-w-xl">
              Experience the Sarathii Method first-hand with a diagnostic evaluation of your preparation roadmap and answer-writing instincts.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs uppercase tracking-[0.14em] font-semibold text-[#2A0932] bg-[#E6CFA5] hover:bg-white transition-all shadow-lg whitespace-nowrap"
            >
              <span>Request Diagnostic Session</span>
              <ArrowRight size={14} />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs uppercase tracking-[0.14em] font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all whitespace-nowrap"
            >
              <span>Full Biography</span>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}
