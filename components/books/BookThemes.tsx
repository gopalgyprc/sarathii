'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  BookOpen,
  Sparkles,
  Quote,
  CheckCircle2,
  Bookmark,
  ArrowRight,
} from 'lucide-react'
import { bookThemesData, BookThemeDetail } from '@/data/mentorship'

export function BookThemes() {
  const [activeThemeId, setActiveThemeId] = useState<string>('duty')
  const currentTheme: BookThemeDetail =
    bookThemesData.find((t) => t.id === activeThemeId) || bookThemesData[0]

  return (
    <div className="w-full space-y-8">
      {/* Top Section Header with full width support */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-[#E5DDD8]">
        <div className="w-full sm:w-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-[#7B2A7A]">
            Interactive Civilizational Philosophy
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl text-[#2A0932] font-semibold mt-1">
            Six Foundational Themes of &ldquo;जिन राहों पर सियाराम चले&rdquo;
          </h3>
        </div>
        <div className="text-xs font-mono text-[#D4AF6A] bg-[#2A0932] px-3.5 py-1.5 rounded-full self-start sm:self-auto font-bold shrink-0">
          Select a Theme Below
        </div>
      </div>

      {/* 6 Theme Selectors: Displayed in one line per item, taking full width if needed */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-3">
        {bookThemesData.map((theme) => {
          const isActive = activeThemeId === theme.id

          return (
            <button
              key={theme.id}
              onClick={() => setActiveThemeId(theme.id)}
              className={`w-full p-3.5 sm:p-4 rounded-2xl border text-left transition-all duration-300 cursor-pointer flex items-center justify-between gap-3 ${
                isActive
                  ? 'bg-[#4B1458] text-white border-[#4B1458] shadow-md ring-2 ring-[#D4AF6A]/40 -translate-y-0.5'
                  : 'bg-[#F8F5F2] hover:bg-white text-[#2A0932] border-[#E5DDD8] hover:border-[#D4AF6A]'
              }`}
              data-cursor="explore"
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <span
                  className={`text-[10px] sm:text-[11px] font-mono font-bold tracking-widest uppercase shrink-0 px-2 py-0.5 rounded-md ${
                    isActive ? 'bg-white/15 text-[#D4AF6A]' : 'bg-[#4B1458]/10 text-[#7B2A7A]'
                  }`}
                >
                  {theme.tag}
                </span>
                <span className="font-serif text-xs sm:text-sm font-semibold truncate leading-tight">
                  {theme.hindiTitle}
                </span>
              </div>
              <ArrowRight
                size={14}
                className={`shrink-0 transition-transform ${
                  isActive ? 'text-[#D4AF6A] translate-x-0.5' : 'text-[#7B2A7A]/40'
                }`}
              />
            </button>
          )
        })}
      </div>

      {/* Dynamic Theme Content Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentTheme.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.3 }}
          className="w-full bg-white rounded-3xl border border-[#D4AF6A]/40 shadow-xl p-6 sm:p-8 lg:p-10 space-y-6"
        >
          {/* Card Top Metadata & Full-Width Single-Line Title */}
          <div className="space-y-3 pb-4 border-b border-[#E5DDD8]">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF6A] bg-[#2A0932] px-3.5 py-1 rounded-full shadow-sm">
                  Theme: {currentTheme.tag}
                </span>
                <span className="text-xs text-[#7B2A7A] font-semibold hidden sm:inline">
                  Foundational Principle
                </span>
              </div>

              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F8F5F2] border border-[#E5DDD8] text-xs font-semibold text-[#7B2A7A]">
                <Bookmark size={14} className="text-[#D4AF6A]" />
                <span>Civilizational Monograph</span>
              </div>
            </div>

            {/* Title takes full width so text stays in one line */}
            <div className="w-full">
              <h4 className="w-full font-serif text-2xl sm:text-3xl lg:text-[2.1rem] text-[#2A0932] font-semibold leading-tight">
                <span>{currentTheme.hindiTitle}</span>{' '}
                <span className="italic font-light text-[#7B2A7A] text-xl sm:text-2xl lg:text-[1.75rem]">
                  — {currentTheme.title}
                </span>
              </h4>
            </div>
          </div>

          {/* Core Concept */}
          <p className="w-full text-base sm:text-lg text-[#3D3140] leading-relaxed">
            {currentTheme.coreConcept}
          </p>

          {/* Hindi & English Quotes Box */}
          <div className="w-full bg-[#2A0932] text-white rounded-2xl p-6 sm:p-8 border border-[#D4AF6A]/30 space-y-4 shadow-lg">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D4AF6A]">
              <Quote size={18} />
              <span>मूल ग्रंथ से उद्धरण (Excerpt from the Text)</span>
            </div>

            <blockquote className="font-serif text-lg sm:text-2xl text-[#E6CFA5] leading-relaxed pl-4 border-l-2 border-[#D4AF6A]">
              &ldquo;{currentTheme.quoteHindi}&rdquo;
            </blockquote>

            <p className="text-xs sm:text-sm text-[#E5DDD8]/90 font-serif italic pl-4">
              &ldquo;{currentTheme.quoteEnglish}&rdquo;
            </p>
          </div>

          {/* 2-Column Split: Administrative Relevance vs Aspirant Takeaway */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="p-5 rounded-2xl bg-[#F8F5F2] border border-[#E5DDD8] space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-[#7B2A7A]">
                Administrative Governance Relevance:
              </div>
              <p className="text-xs sm:text-sm text-[#4A3E4D] leading-relaxed">
                {currentTheme.administrativeRelevance}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#FFFDF9] border border-[#D4AF6A]/50 space-y-2 shadow-sm">
              <div className="text-xs font-bold uppercase tracking-wider text-[#A8823B] flex items-center gap-1.5">
                <CheckCircle2 size={15} />
                <span>Civil Services Aspirant Acumen:</span>
              </div>
              <p className="text-xs sm:text-sm text-[#2A0932] leading-relaxed font-medium">
                {currentTheme.aspirantTakeaway}
              </p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
