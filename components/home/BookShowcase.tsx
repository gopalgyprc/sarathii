'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { BookOpen, X, Sparkles, ArrowRight, Quote } from 'lucide-react'
import { featuredBook } from '@/data/books'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'

export function BookShowcase() {
  const [prastavanaOpen, setPrastavanaOpen] = useState(false)

  return (
    <section className="py-10 lg:py-14 bg-[#F8F5F2] relative overflow-hidden bg-pattern-subtle">
      <Container>
        <SectionHeading
          align="center"
          kicker="09 / Literary & Civilizational Work"
          title={
            <>
              Author & Scholar:{' '}
              <span className="italic font-normal text-[#7B2A7A]">
                Wisdom of the Epic
              </span>
            </>
          }
          description="In addition to five decades in national administration and defence, Jay Prakash Singh is an accomplished author exploring ethical leadership, statesmanship, and composure through classical Indian narratives."
        />

        {/* 3D Book Showcase Composition */}
        <div className="mt-6 bg-[#2A0932] text-[#FFFDF9] rounded-3xl p-6 sm:p-8 lg:p-10 border border-[#D4AF6A]/30 relative overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-10 w-96 h-96 bg-[#7B2A7A]/25 rounded-full blur-3xl pointer-events-none" />

          {/* Left Column: 3D Book Display (5 cols) */}
          <div className="lg:col-span-5 flex justify-center book-container">
            <motion.div
              whileHover={{ rotateY: -8, rotateX: 4, y: -6 }}
              transition={{ duration: 0.4 }}
              className="relative w-56 sm:w-64 aspect-[2/3] rounded-2xl overflow-hidden border-2 border-[#D4AF6A] shadow-2xl book-card-3d bg-[#1A051F]"
            >
              <Image
                src={featuredBook.coverImage}
                alt={featuredBook.englishTitle}
                fill
                sizes="(max-width: 768px) 100vw, 300px"
                className="object-cover object-center"
                priority
              />
              {/* Subtle book spine edge shadow & gloss highlight */}
              <div className="absolute inset-y-0 left-0 w-3.5 bg-gradient-to-r from-black/40 via-white/10 to-transparent pointer-events-none" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/20 rounded-2xl pointer-events-none" />
            </motion.div>
          </div>

          {/* Right Column: Editorial Synopsis & Actions (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-white/10 text-[#E6CFA5] text-[11px] uppercase tracking-widest font-semibold">
              <Sparkles size={12} className="text-[#D4AF6A]" />
              <span>Civilizational Treatise on Leadership</span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#FFFDF9] font-normal leading-tight">
              &ldquo;{featuredBook.hindiTitle}&rdquo;
            </h3>

            <p className="text-xs sm:text-sm text-[#E5DDD8]/90 leading-relaxed font-normal">
              {featuredBook.summary}
            </p>

            {/* Key Book Themes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
              {featuredBook.themes.slice(0, 2).map((theme) => (
                <div
                  key={theme.title}
                  className="bg-white/5 border border-white/10 rounded-2xl p-3.5 space-y-1"
                >
                  <div className="text-xs font-serif text-[#E6CFA5] font-semibold">
                    {theme.title}
                  </div>
                  <div className="text-[11px] text-[#E5DDD8]/75 leading-relaxed">
                    {theme.description}
                  </div>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => setPrastavanaOpen(true)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs uppercase tracking-[0.14em] font-semibold text-[#2A0932] bg-[#E6CFA5] hover:bg-[#FFFDF9] transition-all shadow-md"
              >
                <BookOpen size={14} />
                <span>Read Prastavana (Preface)</span>
              </button>

              <Link
                href="/books"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs uppercase tracking-[0.14em] font-semibold text-white border border-white/20 hover:border-white hover:bg-white/5 transition-all"
              >
                <span>Full Book Details</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      </Container>

      {/* Prastavana Interactive Modal */}
      <AnimatePresence>
        {prastavanaOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
            onClick={() => setPrastavanaOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#FFFDF9] text-[#1F1722] rounded-3xl max-w-3xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-10 border border-[#D4AF6A]/40 shadow-2xl relative"
            >
              <button
                onClick={() => setPrastavanaOpen(false)}
                className="absolute top-6 right-6 p-2 rounded-full text-[#6E6271] hover:text-[#4B1458] hover:bg-[#F8F5F2] transition-colors"
                aria-label="Close modal"
              >
                <X size={22} />
              </button>

              <div className="space-y-6">
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-[#7B2A7A] font-semibold mb-1">
                    ग्रंथ प्रस्तावना (Author&apos;s Preface)
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#2A0932]">
                    {featuredBook.hindiTitle}
                  </h3>
                  <p className="text-xs text-[#6E6271] italic">
                    लेखक: {featuredBook.authorHindi}
                  </p>
                </div>

                <div className="bg-[#F8F5F2] p-5 rounded-2xl border-l-4 border-[#D4AF6A] space-y-3 font-serif text-base sm:text-lg leading-relaxed text-[#2A0932]">
                  {featuredBook.prastavanaHindi.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>

                <div className="space-y-3 pt-2">
                  <h4 className="text-xs uppercase tracking-widest text-[#7B2A7A] font-bold">
                    English Reflection & Synthesis
                  </h4>
                  <div className="space-y-3 text-sm text-[#6E6271] leading-relaxed">
                    {featuredBook.prastavanaEnglishReflection.map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E5DDD8] flex justify-end">
                  <button
                    onClick={() => setPrastavanaOpen(false)}
                    className="px-6 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold text-white bg-[#4B1458] hover:bg-[#2A0932] transition-all"
                  >
                    Close Preview
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
