'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  BookOpen,
  ArrowRight,
  ArrowLeft,
  Quote,
  Sparkles,
  Award,
  Compass,
} from 'lucide-react'
import { biographyChapters, BiographyChapter } from '@/data/about'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'

export function BiographyChapters() {
  const [activeChapterIndex, setActiveChapterIndex] = useState(0)

  const chapter = biographyChapters[activeChapterIndex]

  const handleNext = () => {
    setActiveChapterIndex((prev) => (prev < biographyChapters.length - 1 ? prev + 1 : 0))
  }

  const handlePrev = () => {
    setActiveChapterIndex((prev) => (prev > 0 ? prev - 1 : biographyChapters.length - 1))
  }

  return (
    <section className="py-12 lg:py-18 bg-[#FFFDF9] relative overflow-hidden border-b border-[#E5DDD8]">
      {/* Background ambient lighting */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-[#4B1458]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-[450px] h-[450px] bg-[#D4AF6A]/10 rounded-full blur-3xl pointer-events-none" />

      <Container>
        <SectionHeading
          align="center"
          kicker="Sarathii Provenance · Biography Chapters"
          title={
            <>
              Six Chapters of{' '}
              <span className="font-serif italic font-normal text-[#7B2A7A]">
                Lived Leadership
              </span>
            </>
          }
          description="Trace how five decades of public leadership by Sarathii's Founder & Chief Mentor, Jay Prakash Singh, forged the foundational principles of the Sarathii Method."
        />

        {/* Chapter Selection Bar */}
        <div className="mt-8 flex flex-wrap justify-center gap-2 sm:gap-3">
          {biographyChapters.map((ch, idx) => {
            const isSelected = activeChapterIndex === idx
            return (
              <button
                key={ch.number}
                onClick={() => setActiveChapterIndex(idx)}
                className={`px-4 sm:px-5 py-2.5 rounded-full text-xs font-semibold transition-all duration-300 border flex items-center gap-2 ${
                  isSelected
                    ? 'bg-[#2A0932] text-white border-[#D4AF6A] shadow-lg shadow-[#2A0932]/20 scale-105 ring-2 ring-[#D4AF6A]/40 font-bold'
                    : 'bg-white hover:bg-[#F8F5F2] text-[#2A0932] border-[#E5DDD8] hover:border-[#D4AF6A] shadow-sm'
                }`}
                data-cursor="read"
              >
                <span className={`text-xs uppercase font-bold tracking-wider ${isSelected ? 'text-[#E6CFA5]' : 'text-[#7B2A7A]'}`}>
                  Ch. {ch.number}
                </span>
                <span className="hidden sm:inline">· {ch.title}</span>
              </button>
            )
          })}
        </div>

        {/* Active Chapter Reading Room */}
        <div className="mt-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={chapter.number}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-[#E5DDD8] shadow-2xl relative overflow-hidden"
            >
              {/* Background Chapter Number Watermark */}
              <span className="absolute top-4 right-8 font-black text-8xl sm:text-9xl text-[#4B1458]/[0.03] pointer-events-none select-none">
                {chapter.number}
              </span>

              {/* Chapter Metadata Header */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#E5DDD8] relative z-10">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-2xl bg-[#2A0932] text-[#E6CFA5] border border-[#D4AF6A]/30 flex items-center justify-center font-bold text-sm shadow-md">
                    {chapter.number}
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-widest font-bold text-[#7B2A7A] block">
                      Chapter {chapter.number} · {chapter.period}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-serif text-[#2A0932] font-semibold mt-0.5">
                      {chapter.title}
                    </h3>
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F8F5F2] border border-[#E5DDD8] text-xs font-semibold text-[#4B1458] shadow-sm">
                  <Compass size={14} className="text-[#D4AF6A]" />
                  <span>{chapter.subtitle}</span>
                </div>
              </div>

              {/* Chapter Quote Moment */}
              <div className="my-6 p-6 sm:p-7 rounded-2xl bg-gradient-to-r from-[#2A0932] to-[#3B0E45] text-white border border-[#D4AF6A]/40 relative shadow-lg">
                <Quote size={22} className="text-[#D4AF6A] mb-2" />
                <p className="font-serif italic text-base sm:text-xl text-[#FFFDF9] leading-relaxed">
                  &ldquo;{chapter.quote}&rdquo;
                </p>
                <span className="text-xs uppercase tracking-widest text-[#E6CFA5] font-bold block mt-3">
                  — Jay Prakash Singh · Founder & Chief Mentor, Sarathii
                </span>
              </div>

              {/* Chapter Editorial Content */}
              <div className="space-y-4 text-sm sm:text-base text-[#4A3E4D] leading-relaxed relative z-10">
                {chapter.content.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              {/* Mentorship Lesson Takeaway Box */}
              <div className="mt-6 p-5 sm:p-6 rounded-2xl bg-[#FBF8F4] border-2 border-[#D4AF6A]/40 space-y-2 shadow-sm">
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-bold text-[#7B2A7A]">
                  <Award size={16} className="text-[#D4AF6A]" />
                  <span>Strategic Takeaway for Future Civil Servants</span>
                </div>
                <p className="text-sm text-[#2A0932] font-semibold leading-relaxed">
                  {chapter.takeaway}
                </p>
              </div>

              {/* Chapter Navigation Controls */}
              <div className="mt-8 pt-5 border-t border-[#E5DDD8] flex flex-wrap items-center justify-between gap-4">
                <button
                  onClick={handlePrev}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-bold text-[#2A0932] bg-[#F8F5F2] hover:bg-[#E5DDD8] border border-[#E5DDD8] transition-all"
                >
                  <ArrowLeft size={13} />
                  <span>Previous Chapter</span>
                </button>

                <div className="text-xs text-[#7B2A7A] font-bold uppercase tracking-wider">
                  Chapter {activeChapterIndex + 1} of {biographyChapters.length}
                </div>

                <button
                  onClick={handleNext}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs uppercase tracking-wider font-bold text-[#2A0932] bg-[#E6CFA5] hover:bg-[#FFFDF9] transition-all shadow-md hover:scale-105 active:scale-95"
                >
                  <span>Next Chapter</span>
                  <ArrowRight size={13} />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>
    </section>
  )
}

