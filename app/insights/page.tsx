import React from 'react'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Clock, ArrowRight, Sparkles, BookOpen } from 'lucide-react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { articles } from '@/data/articles'

export const metadata: Metadata = {
  title: 'Insights & Strategy Journal | Sarathii',
  description:
    'Essays and strategic notes on UPSC preparation, administrative leadership, mental resilience, and answer-writing by Jay Prakash Singh.',
}

export default function InsightsPage() {
  const featuredArticle = articles[0]
  const regularArticles = articles.slice(1)

  return (
    <div className="flex flex-col min-h-screen bg-[#FFFDF9]">
      <Header />

      <main className="flex-grow pt-28 sm:pt-36">
        {/* Hero Section */}
        <section className="py-16 sm:py-24 bg-radial-hero border-b border-[#E5DDD8] relative overflow-hidden">
          <Container>
            <div className="max-w-4xl space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#4B1458]/10 text-xs uppercase tracking-[0.2em] font-semibold text-[#7B2A7A]">
                <Sparkles size={13} className="text-[#D4AF6A]" />
                <span>The Sarathii Journal</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl text-[#2A0932] font-normal leading-[1.05]">
                Notes for the{' '}
                <span className="italic text-[#7B2A7A]">
                  Journey Ahead
                </span>
              </h1>

              <p className="text-base sm:text-xl text-[#6E6271] leading-relaxed max-w-2xl font-normal">
                Perspectives on high-yield exam strategy, administrative mindset, mental resilience, and purposeful public service.
              </p>
            </div>
          </Container>
        </section>

        {/* Featured Article Banner */}
        <section className="py-16 lg:py-20 bg-[#FFFDF9]">
          <Container>
            <div className="text-xs uppercase tracking-[0.2em] text-[#7B2A7A] font-bold mb-6">
              Featured Essay
            </div>

            <div className="bg-[#F8F5F2] rounded-3xl overflow-hidden border border-[#E5DDD8] hover:border-[#D4AF6A] transition-all grid grid-cols-1 lg:grid-cols-12 gap-8 items-center group">
              {/* Image Frame (6 cols) */}
              <div className="lg:col-span-6 relative h-72 sm:h-96 w-full overflow-hidden bg-[#E8DCCF]">
                <Image
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority
                />
                <div className="absolute top-4 left-4 px-3.5 py-1 rounded-full bg-white/95 backdrop-blur-md text-xs uppercase tracking-widest font-bold text-[#4B1458]">
                  {featuredArticle.category}
                </div>
              </div>

              {/* Text Frame (6 cols) */}
              <div className="lg:col-span-6 p-6 sm:p-10 space-y-4">
                <div className="flex items-center gap-3 text-xs text-[#6E6271]">
                  <span>{featuredArticle.formattedDate}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock size={12} />
                    {featuredArticle.readTime}
                  </span>
                </div>

                <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#2A0932] font-semibold leading-tight group-hover:text-[#4B1458] transition-colors">
                  <Link href={`/insights/${featuredArticle.slug}`}>
                    {featuredArticle.title}
                  </Link>
                </h2>

                <p className="text-sm text-[#6E6271] leading-relaxed line-clamp-3">
                  {featuredArticle.excerpt}
                </p>

                <div className="pt-4">
                  <Link
                    href={`/insights/${featuredArticle.slug}`}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs uppercase tracking-[0.14em] font-semibold text-white bg-[#4B1458] hover:bg-[#2A0932] shadow-md transition-all"
                  >
                    <span>Read Full Essay</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Regular Articles Grid */}
        <section className="pb-24 bg-[#FFFDF9]">
          <Container>
            <div className="text-xs uppercase tracking-[0.2em] text-[#7B2A7A] font-bold mb-8">
              All Essays & Strategic Notes
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article) => (
                <article
                  key={article.slug}
                  className="bg-[#F8F5F2] rounded-3xl overflow-hidden border border-[#E5DDD8] hover:border-[#D4AF6A] transition-all hover:shadow-lg flex flex-col justify-between group"
                >
                  <div>
                    <div className="relative w-full h-52 overflow-hidden bg-[#E8DCCF]">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[10px] uppercase tracking-widest font-bold text-[#4B1458]">
                        {article.category}
                      </div>
                    </div>

                    <div className="p-6 space-y-3">
                      <div className="flex items-center gap-3 text-xs text-[#6E6271]">
                        <span>{article.formattedDate}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Clock size={12} />
                          {article.readTime}
                        </span>
                      </div>

                      <h3 className="font-serif text-xl sm:text-2xl text-[#2A0932] font-semibold group-hover:text-[#4B1458] transition-colors line-clamp-2">
                        <Link href={`/insights/${article.slug}`}>
                          {article.title}
                        </Link>
                      </h3>

                      <p className="text-xs sm:text-sm text-[#6E6271] leading-relaxed line-clamp-3">
                        {article.excerpt}
                      </p>
                    </div>
                  </div>

                  <div className="px-6 pb-6 pt-2">
                    <Link
                      href={`/insights/${article.slug}`}
                      className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-bold text-[#7B2A7A] group-hover:text-[#4B1458] transition-colors"
                    >
                      <span>Read Essay</span>
                      <ArrowRight size={13} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  )
}
