import React from 'react'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { BookOpen, Sparkles, Quote, ArrowRight, CheckCircle2, Bookmark } from 'lucide-react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { featuredBook } from '@/data/books'

export const metadata: Metadata = {
  title: 'Sarathii Publications | Civilizational Works by Founder Jay Prakash Singh',
  description:
    'Explore "जिन राहों पर सियाराम चले" (वन में और जीवन में) by Sarathii Founder & Chief Mentor Jay Prakash Singh—a profound exploration of ethical leadership, fortitude, and purpose.',
}

export default function BooksPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FFFDF9]">
      <Header />

      <main className="flex-grow">
        {/* Books Hero Section */}
        <section className="relative pt-28 pb-14 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-24 bg-[#1A041E] text-white border-b border-[#D4AF6A]/30 text-center overflow-hidden">
          <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#7B2A7A]/25 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-[450px] h-[450px] bg-[#D4AF6A]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute inset-0 bg-pattern-dark opacity-40 pointer-events-none" />

          <Container className="relative z-10">
            <div className="max-w-3xl mx-auto space-y-4">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#2A0932]/90 border border-[#D4AF6A]/40 text-xs uppercase tracking-[0.2em] font-semibold text-[#E6CFA5] shadow-lg backdrop-blur-md">
                <Sparkles size={13} className="text-[#D4AF6A] animate-pulse" />
                <span>Sarathii Publications · Ethical Foundations</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-[4rem] text-[#FFFDF9] font-normal leading-[1.05] tracking-tight">
                Civilizational Works by <br className="hidden sm:inline" />
                <span className="italic text-[#E6CFA5]">
                  Founder Jay Prakash Singh
                </span>
              </h1>

              <p className="text-base sm:text-lg text-[#E5DDD8]/90 leading-relaxed max-w-2xl mx-auto font-normal">
                At Sarathii, Civil Services preparation is incomplete without moral fortitude and ethical clarity. The literary works authored by our Chief Mentor synthesize classical civilizational wisdom with five decades of real-world administrative and judicial leadership.
              </p>
            </div>
          </Container>

          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF6A]/60 to-transparent" />
        </section>

        {/* Featured Book Major Showcase */}
        <section className="py-12 lg:py-18 bg-[#FFFDF9]">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              {/* 3D Book Visual (5 cols) */}
              <div className="lg:col-span-5 flex justify-center sticky top-28">
                <div className="relative w-full max-w-[340px] aspect-[2/3] rounded-2xl overflow-hidden border-2 border-[#D4AF6A] shadow-2xl bg-[#1A051F] group hover:scale-[1.02] transition-transform duration-300">
                  <Image
                    src={featuredBook.coverImage}
                    alt={featuredBook.englishTitle}
                    fill
                    sizes="(max-width: 768px) 100vw, 340px"
                    className="object-cover object-center"
                    priority
                  />
                  {/* Subtle book spine edge shadow & gloss highlight */}
                  <div className="absolute inset-y-0 left-0 w-4 bg-gradient-to-r from-black/40 via-white/10 to-transparent pointer-events-none" />
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/20 rounded-2xl pointer-events-none" />
                </div>
              </div>

              {/* Book Overview & Narrative (7 cols) */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-[#7B2A7A] font-bold mb-2">
                    01 / Essential Reading for Civil Services Ethics
                  </div>
                  <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#2A0932] font-normal leading-tight mb-3">
                    {featuredBook.hindiTitle}{' '}
                    <span className="italic text-[#7B2A7A] text-xl sm:text-2xl block sm:inline">
                      ({featuredBook.hindiSubtitle})
                    </span>
                  </h2>
                  <p className="text-base sm:text-lg text-[#4A3E4D] leading-relaxed">
                    {featuredBook.summary}
                  </p>
                </div>

                {/* Extended Summary Paragraphs */}
                <div className="space-y-3.5 text-sm sm:text-base text-[#4A3E4D] leading-relaxed border-l-2 border-[#D4AF6A] pl-5">
                  {featuredBook.extendedSummary.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>

                {/* Core Themes Grid */}
                <div className="space-y-3 pt-2">
                  <h3 className="font-serif text-xl sm:text-2xl text-[#2A0932] font-semibold">
                    Core Conceptual Themes for Administrators
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {featuredBook.themes.map((theme) => (
                      <div
                        key={theme.title}
                        className="bg-[#F8F5F2] rounded-2xl p-5 border border-[#E5DDD8] space-y-2 hover:border-[#D4AF6A] transition-colors"
                      >
                        <div className="font-serif text-lg text-[#4B1458] font-semibold">
                          {theme.title}
                        </div>
                        <p className="text-xs sm:text-sm text-[#5D5060] leading-relaxed">
                          {theme.description}
                        </p>
                        <div className="pt-2 text-xs text-[#A8823B] font-semibold border-t border-[#E5DDD8]">
                          Aspirant Acumen: {theme.relevanceToAspirants}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quotes from the Book */}
                <div className="bg-[#2A0932] text-[#FFFDF9] rounded-3xl p-6 sm:p-8 border border-[#D4AF6A]/30 space-y-3 shadow-md">
                  <Quote size={22} className="text-[#D4AF6A]" />
                  <div className="space-y-2 font-serif text-base sm:text-xl italic text-[#E6CFA5]">
                    {featuredBook.quotes.map((quote, i) => (
                      <p key={i}>&ldquo;{quote}&rdquo;</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Complete Prastavana (Preface) Section */}
        <section className="py-12 lg:py-18 bg-[#F8F5F2] border-t border-[#E5DDD8]">
          <Container size="sm">
            <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
              <div className="text-xs uppercase tracking-[0.2em] text-[#7B2A7A] font-bold">
                मूल प्रस्तावना
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#2A0932] font-normal">
                ग्रंथ की प्रस्तावना एवं दर्शन
              </h2>
              <p className="text-xs sm:text-sm text-[#6E6271]">
                From the preface of &ldquo;जिन राहों पर सियाराम चले&rdquo; by Founder Jay Prakash Singh
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E5DDD8] shadow-md space-y-8">
              {/* Hindi Preface Text */}
              <div className="space-y-5 font-serif text-lg sm:text-xl leading-relaxed text-[#2A0932] border-b border-[#E5DDD8] pb-6">
                {featuredBook.prastavanaHindi.map((para, i) => (
                  <p key={i} className="first-letter:text-3xl first-letter:font-bold first-letter:text-[#4B1458]">
                    {para}
                  </p>
                ))}
              </div>

              {/* English Reflection */}
              <div className="space-y-4">
                <h4 className="text-xs uppercase tracking-widest text-[#7B2A7A] font-bold">
                  English Reflection & Administrative Synthesis
                </h4>
                <div className="space-y-3.5 text-sm sm:text-base text-[#4A3E4D] leading-relaxed">
                  {featuredBook.prastavanaEnglishReflection.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Chapters Overview */}
        <section className="py-12 lg:py-18 bg-[#FFFDF9]">
          <Container>
            <SectionHeading
              align="center"
              kicker="Table of Contents"
              title="Chapter Architecture & Thematic Journey"
              description="A progressive thematic exploration across the pivotal stages of the epic exile, serving as an ethical template for administrative life."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {featuredBook.chapters.map((chapter) => (
                <div
                  key={chapter.number}
                  className="bg-[#F8F5F2] rounded-3xl p-6 sm:p-7 border border-[#E5DDD8] hover:border-[#D4AF6A] transition-all flex flex-col justify-between"
                >
                  <div className="space-y-2.5">
                    <span className="text-xs uppercase tracking-widest text-[#D4AF6A] font-bold">
                      अध्याय {chapter.number}
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl text-[#2A0932] font-semibold">
                      {chapter.hindiTitle}
                    </h3>
                    <div className="text-xs sm:text-sm text-[#7B2A7A] italic font-serif">
                      {chapter.englishTitle}
                    </div>
                    <p className="text-xs sm:text-sm text-[#5D5060] leading-relaxed pt-1">
                      {chapter.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Inquire for Copy CTA */}
            <div className="mt-12 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-xs uppercase tracking-[0.14em] font-semibold text-[#2A0932] bg-[#E6CFA5] hover:bg-[#FFFDF9] shadow-lg transition-all shrink-0 hover:scale-105 active:scale-95"
              >
                <span>Request Reading Copy / Ethics Consultation</span>
                <ArrowRight size={14} />
              </Link>
              <Link
                href="/insights"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full text-xs uppercase tracking-[0.14em] font-semibold text-[#2A0932] bg-[#F8F5F2] hover:bg-[#EAE4DD] border border-[#E5DDD8] transition-all"
              >
                <span>Explore Strategic Insights</span>
              </Link>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  )
}
