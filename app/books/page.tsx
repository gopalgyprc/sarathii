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
  title: 'Books & Civilizational Works by Jay Prakash Singh',
  description:
    'Explore "जिन राहों पर सियाराम चले" (वन में और जीवन में) by J.P. Singh—a profound exploration of ethical leadership, fortitude, and purpose through the exile of Shri Ram.',
}

export default function BooksPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FFFDF9]">
      <Header />

      <main className="flex-grow pt-28 sm:pt-36">
        {/* Books Hero Section */}
        <section className="py-16 sm:py-24 bg-radial-hero border-b border-[#E5DDD8] relative overflow-hidden">
          <Container>
            <div className="max-w-4xl space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#4B1458]/10 text-xs uppercase tracking-[0.2em] font-semibold text-[#7B2A7A]">
                <Sparkles size={13} className="text-[#D4AF6A]" />
                <span>Civilizational Literature & Leadership</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl text-[#2A0932] font-normal leading-[1.05]">
                Books by{' '}
                <span className="italic text-[#7B2A7A]">
                  Jay Prakash Singh
                </span>
              </h1>

              <p className="text-base sm:text-xl text-[#6E6271] leading-relaxed max-w-2xl font-normal">
                Synthesizing classical Indian civilizational wisdom with five decades of real-world administrative, military, and judicial leadership.
              </p>
            </div>
          </Container>
        </section>

        {/* Featured Book Major Showcase */}
        <section className="py-20 lg:py-28 bg-[#FFFDF9]">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              {/* 3D Book Visual (5 cols) */}
              <div className="lg:col-span-5 flex justify-center sticky top-28">
                <div className="relative w-full max-w-[340px] aspect-[3/4.2] rounded-3xl overflow-hidden border-2 border-[#D4AF6A] shadow-2xl bg-[#1A051F]">
                  <Image
                    src={featuredBook.coverImage}
                    alt={featuredBook.englishTitle}
                    fill
                    sizes="(max-width: 768px) 100vw, 340px"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />
                  <div className="absolute bottom-6 left-6 right-6 text-center z-10">
                    <span className="text-xs uppercase tracking-widest text-[#E6CFA5] font-semibold bg-[#2A0932]/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-[#D4AF6A]/30">
                      {featuredBook.authorHindi} • {featuredBook.englishSubtitle}
                    </span>
                  </div>
                </div>
              </div>

              {/* Book Overview & Narrative (7 cols) */}
              <div className="lg:col-span-7 space-y-10">
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-[#7B2A7A] font-semibold mb-2">
                    About The Masterwork
                  </div>
                  <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2A0932] font-normal leading-tight mb-4">
                    {featuredBook.hindiTitle}{' '}
                    <span className="italic text-[#7B2A7A] text-2xl sm:text-3xl block sm:inline">
                      ({featuredBook.hindiSubtitle})
                    </span>
                  </h3>
                  <p className="text-base text-[#6E6271] leading-relaxed">
                    {featuredBook.summary}
                  </p>
                </div>

                {/* Extended Summary Paragraphs */}
                <div className="space-y-4 text-sm sm:text-base text-[#6E6271] leading-relaxed border-l-2 border-[#D4AF6A] pl-6">
                  {featuredBook.extendedSummary.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>

                {/* Core Themes Grid */}
                <div className="space-y-4">
                  <h4 className="font-serif text-2xl text-[#2A0932] font-semibold">
                    Core Conceptual Themes
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {featuredBook.themes.map((theme) => (
                      <div
                        key={theme.title}
                        className="bg-[#F8F5F2] rounded-2xl p-5 border border-[#E5DDD8] space-y-2"
                      >
                        <div className="font-serif text-lg text-[#4B1458] font-semibold">
                          {theme.title}
                        </div>
                        <p className="text-xs text-[#6E6271] leading-relaxed">
                          {theme.description}
                        </p>
                        <div className="pt-2 text-[11px] text-[#A8823B] font-semibold border-t border-[#E5DDD8]">
                          Aspirant Acumen: {theme.relevanceToAspirants}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quotes from the Book */}
                <div className="bg-[#2A0932] text-[#FFFDF9] rounded-3xl p-8 border border-[#D4AF6A]/30 space-y-4 shadow-md">
                  <Quote size={24} className="text-[#D4AF6A]" />
                  <div className="space-y-3 font-serif text-lg italic text-[#E6CFA5]">
                    {featuredBook.quotes.map((quote, i) => (
                      <p key={i}>{quote}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Complete Prastavana (Preface) Section */}
        <section className="py-20 lg:py-28 bg-[#F8F5F2] border-t border-[#E5DDD8]">
          <Container size="sm">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="text-xs uppercase tracking-[0.2em] text-[#7B2A7A] font-semibold mb-2">
                मूल प्रस्तावना
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#2A0932] font-normal">
                ग्रंथ की प्रस्तावना एवं दर्शन
              </h2>
              <p className="text-xs sm:text-sm text-[#6E6271] mt-2">
                From the preface of &ldquo;जिन राहों पर सियाराम चले&rdquo; by Jay Prakash Singh
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E5DDD8] shadow-md space-y-8">
              {/* Hindi Preface Text */}
              <div className="space-y-6 font-serif text-lg sm:text-xl leading-relaxed text-[#2A0932] border-b border-[#E5DDD8] pb-8">
                {featuredBook.prastavanaHindi.map((para, i) => (
                  <p key={i} className="first-letter:text-3xl first-letter:font-bold first-letter:text-[#4B1458]">
                    {para}
                  </p>
                ))}
              </div>

              {/* English Reflection */}
              <div className="space-y-4">
                <h4 className="text-xs uppercase tracking-widest text-[#7B2A7A] font-bold">
                  English Reflection & Synthesis
                </h4>
                <div className="space-y-4 text-sm sm:text-base text-[#6E6271] leading-relaxed">
                  {featuredBook.prastavanaEnglishReflection.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Chapters Overview */}
        <section className="py-20 lg:py-28 bg-[#FFFDF9]">
          <Container>
            <SectionHeading
              align="center"
              kicker="Table of Contents"
              title="Chapter Architecture & Journey"
              description="A progressive thematic exploration across the pivotal stages of the epic journey."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {featuredBook.chapters.map((chapter) => (
                <div
                  key={chapter.number}
                  className="bg-[#F8F5F2] rounded-3xl p-7 border border-[#E5DDD8] hover:border-[#D4AF6A] transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <span className="text-xs uppercase tracking-widest text-[#D4AF6A] font-bold">
                      अध्याय {chapter.number}
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl text-[#2A0932] font-semibold">
                      {chapter.hindiTitle}
                    </h3>
                    <div className="text-xs text-[#7B2A7A] italic font-serif">
                      {chapter.englishTitle}
                    </div>
                    <p className="text-xs sm:text-sm text-[#6E6271] leading-relaxed pt-2">
                      {chapter.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Inquire for Copy CTA */}
            <div className="mt-16 text-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-xs uppercase tracking-[0.14em] font-semibold text-white bg-[#4B1458] hover:bg-[#2A0932] shadow-md transition-all"
              >
                <span>Request Reading Copy / Inquire</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  )
}
