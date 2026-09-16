'use client'

import React, { useState, useMemo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Clock,
  ArrowRight,
  Sparkles,
  Search,
  BookOpen,
  Mail,
  CheckCircle2,
  X,
  Compass,
  Bookmark,
  Calendar,
} from 'lucide-react'
import { Article } from '@/data/articles'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'

interface InsightsExplorerProps {
  articles: Article[]
}

const CATEGORIES = ['All', 'Mindset', 'Leadership', 'Preparation', 'Ethics'] as const
type CategoryType = (typeof CATEGORIES)[number]

export function InsightsExplorer({ articles }: InsightsExplorerProps) {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  // Featured article is the first one in the list
  const featuredArticle = articles[0]

  // Filtered articles
  const filteredArticles = useMemo(() => {
    return articles.filter((article) => {
      const matchesCategory =
        selectedCategory === 'All' || article.category === selectedCategory

      const query = searchQuery.trim().toLowerCase()
      const matchesSearch =
        query === '' ||
        article.title.toLowerCase().includes(query) ||
        article.subtitle.toLowerCase().includes(query) ||
        article.excerpt.toLowerCase().includes(query) ||
        article.category.toLowerCase().includes(query)

      return matchesCategory && matchesSearch
    })
  }, [articles, selectedCategory, searchQuery])

  // Count per category
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: articles.length }
    articles.forEach((a) => {
      counts[a.category] = (counts[a.category] || 0) + 1
    })
    return counts
  }, [articles])

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email.trim()) {
      setSubscribed(true)
      setEmail('')
    }
  }

  const getCategoryBadgeClass = (category: string) => {
    switch (category) {
      case 'Mindset':
        return 'bg-[#7B2A7A]/10 text-[#7B2A7A] border-[#7B2A7A]/20'
      case 'Leadership':
        return 'bg-[#4B1458]/10 text-[#4B1458] border-[#4B1458]/20'
      case 'Preparation':
        return 'bg-[#A8823B]/10 text-[#A8823B] border-[#A8823B]/20'
      case 'Ethics':
        return 'bg-[#2A0932]/10 text-[#2A0932] border-[#2A0932]/20'
      default:
        return 'bg-[#2A0932]/10 text-[#2A0932] border-[#2A0932]/20'
    }
  }

  return (
    <div className="space-y-12 sm:space-y-16">
      {/* Featured Strategic Monograph (Editorial Centerpiece) */}
      {featuredArticle && selectedCategory === 'All' && !searchQuery && (
        <section className="bg-[#FFFDF9]">
          <Container>
            <SectionHeading
              align="center"
              kicker="01 / Editorial Spotlight"
              title={
                <>
                  Featured Strategic{' '}
                  <span className="italic font-normal text-[#7B2A7A]">
                    Monograph
                  </span>
                </>
              }
              description="A foundational deep-dive into the psychological and structural rigor required for Civil Services excellence."
            />

            <div className="mt-8 bg-gradient-to-br from-[#2A0932] via-[#1F0725] to-[#140218] rounded-3xl overflow-hidden border-2 border-[#D4AF6A]/40 shadow-2xl text-white grid grid-cols-1 lg:grid-cols-12 gap-0 relative group">
              {/* Subtle Ambient Gold Glow */}
              <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#D4AF6A]/10 rounded-full blur-3xl pointer-events-none" />

              {/* Left Image Showcase (6 cols) */}
              <div className="lg:col-span-6 relative min-h-[320px] sm:min-h-[400px] lg:min-h-full overflow-hidden">
                <Image
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                <div className="absolute top-5 left-5 flex items-center gap-2">
                  <span className="px-3.5 py-1 rounded-full bg-[#E6CFA5] text-[#2A0932] text-xs uppercase tracking-widest font-bold shadow-md">
                    ★ Editorial Spotlight
                  </span>
                  <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-xs uppercase tracking-wider font-semibold border border-white/20">
                    {featuredArticle.category}
                  </span>
                </div>
              </div>

              {/* Right Editorial Details (6 cols) */}
              <div className="lg:col-span-6 p-7 sm:p-10 lg:p-12 flex flex-col justify-between space-y-6 relative z-10">
                <div className="space-y-4">
                  {/* Meta Bar */}
                  <div className="flex items-center gap-3 text-xs text-[#E6CFA5] font-medium">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={13} />
                      {featuredArticle.formattedDate}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1.5">
                      <Clock size={13} />
                      {featuredArticle.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#FFFDF9] font-normal leading-tight group-hover:text-[#E6CFA5] transition-colors">
                    <Link href={`/insights/${featuredArticle.slug}`}>
                      {featuredArticle.title}
                    </Link>
                  </h2>

                  {/* Subtitle / Excerpt */}
                  <p className="text-sm sm:text-base text-[#E5DDD8]/90 leading-relaxed font-normal">
                    {featuredArticle.excerpt}
                  </p>

                  {/* Callout Highlight */}
                  <div className="bg-white/5 border-l-2 border-[#D4AF6A] rounded-r-2xl p-4 text-xs sm:text-sm text-[#E6CFA5] italic font-serif">
                    &ldquo;Under pressure, you do not rise to your expectations; you sink to the depth of your composure.&rdquo;
                  </div>
                </div>

                {/* Author attribution & CTA */}
                <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#D4AF6A] text-[#2A0932] font-serif font-bold text-sm flex items-center justify-center shadow-inner">
                      JPS
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white">
                        {featuredArticle.author}
                      </div>
                      <div className="text-[11px] text-[#D4AF6A]/80">
                        {featuredArticle.authorRole}
                      </div>
                    </div>
                  </div>

                  <Link
                    href={`/insights/${featuredArticle.slug}`}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs uppercase tracking-[0.14em] font-semibold text-[#2A0932] bg-[#E6CFA5] hover:bg-white transition-all shadow-lg hover:scale-105 active:scale-95"
                  >
                    <span>Read Full Essay</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* Interactive Library & Filters */}
      <section className="bg-[#FFFDF9] pt-2">
        <Container>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-[#E5DDD8]">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-[#7B2A7A] font-semibold mb-1">
                02 / Curated Monograph Archive
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#2A0932] font-normal">
                All Essays & Strategic Notes
              </h2>
              <p className="text-xs sm:text-sm text-[#6E6271] mt-1 max-w-xl">
                Filter by core administrative discipline or search across strategic themes.
              </p>
            </div>

            {/* Search Input Box */}
            <div className="relative w-full lg:w-80">
              <Search
                size={16}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#7B2A7A]"
              />
              <input
                type="text"
                placeholder="Search essays, topics, ethics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-10 py-3 rounded-full bg-[#F8F5F2] border border-[#E5DDD8] text-xs text-[#2A0932] placeholder-[#6E6271]/60 focus:outline-none focus:border-[#7B2A7A] focus:ring-1 focus:ring-[#7B2A7A] transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#6E6271] hover:text-[#2A0932] p-1"
                >
                  <X size={14} />
                </button>
              )}
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-6 pb-8">
            {CATEGORIES.map((cat) => {
              const count = categoryCounts[cat] || 0
              const isActive = selectedCategory === cat
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs uppercase tracking-wider font-semibold transition-all ${
                    isActive
                      ? 'bg-[#2A0932] text-[#E6CFA5] shadow-md scale-105 border border-[#D4AF6A]'
                      : 'bg-[#F8F5F2] text-[#6E6271] hover:text-[#2A0932] hover:bg-[#EAE4DD] border border-[#E5DDD8]'
                  }`}
                >
                  <span>{cat}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                      isActive
                        ? 'bg-[#D4AF6A] text-[#2A0932] font-bold'
                        : 'bg-[#E5DDD8] text-[#6E6271]'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              )
            })}
          </div>

          {/* Articles Grid */}
          {filteredArticles.length > 0 ? (
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8"
            >
              <AnimatePresence>
                {filteredArticles.map((article) => (
                  <motion.article
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    key={article.slug}
                    className="bg-[#F8F5F2] rounded-3xl overflow-hidden border border-[#E5DDD8] hover:border-[#D4AF6A] transition-all hover:shadow-xl flex flex-col justify-between group hover:-translate-y-1"
                  >
                    <div>
                      {/* Card Image */}
                      <div className="relative w-full h-52 sm:h-56 overflow-hidden bg-[#E8DCCF]">
                        <Image
                          src={article.image}
                          alt={article.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                        {/* Category Badge */}
                        <div className="absolute top-4 left-4">
                          <span
                            className={`px-3 py-1 rounded-full text-[10px] uppercase tracking-widest font-bold border backdrop-blur-md shadow-sm ${getCategoryBadgeClass(
                              article.category
                            )} bg-white/95`}
                          >
                            {article.category}
                          </span>
                        </div>

                        {/* Reading Time Pill */}
                        <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-[11px] text-[#E6CFA5] font-medium flex items-center gap-1 border border-white/10">
                          <Clock size={11} />
                          <span>{article.readTime}</span>
                        </div>
                      </div>

                      {/* Card Body */}
                      <div className="p-6 sm:p-7 space-y-3">
                        <div className="text-[11px] text-[#7B2A7A] font-semibold uppercase tracking-wider">
                          {article.formattedDate}
                        </div>

                        <h3 className="font-serif text-xl sm:text-2xl text-[#2A0932] font-semibold group-hover:text-[#4B1458] transition-colors line-clamp-2 leading-snug">
                          <Link href={`/insights/${article.slug}`}>
                            {article.title}
                          </Link>
                        </h3>

                        <p className="text-xs sm:text-sm text-[#6E6271] leading-relaxed line-clamp-3">
                          {article.excerpt}
                        </p>
                      </div>
                    </div>

                    {/* Card Footer */}
                    <div className="px-6 sm:px-7 pb-6 pt-2 border-t border-[#EAE4DD] flex items-center justify-between">
                      <span className="text-[11px] font-medium text-[#6E6271]">
                        By {article.author}
                      </span>
                      <Link
                        href={`/insights/${article.slug}`}
                        className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-bold text-[#7B2A7A] group-hover:text-[#4B1458] group-hover:translate-x-0.5 transition-all"
                      >
                        <span>Read Essay</span>
                        <ArrowRight size={13} />
                      </Link>
                    </div>
                  </motion.article>
                ))}
              </AnimatePresence>
            </motion.div>
          ) : (
            <div className="py-16 text-center bg-[#F8F5F2] rounded-3xl border border-[#E5DDD8] space-y-4">
              <Compass size={40} className="mx-auto text-[#7B2A7A]/60 animate-bounce" />
              <div className="font-serif text-2xl text-[#2A0932]">No monographs found</div>
              <p className="text-xs sm:text-sm text-[#6E6271] max-w-md mx-auto">
                No articles match your search &ldquo;{searchQuery}&rdquo; under the{' '}
                <span className="font-semibold text-[#2A0932]">{selectedCategory}</span> category.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('All')
                  setSearchQuery('')
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-bold bg-[#4B1458] text-white hover:bg-[#2A0932] transition-all"
              >
                <span>Reset Filters</span>
              </button>
            </div>
          )}
        </Container>
      </section>

      {/* The Sarathii Administrative Dispatch (VIP Monograph Subscription) */}
      <section className="bg-[#FFFDF9] pb-16 lg:pb-20">
        <Container>
          <div className="bg-gradient-to-br from-[#1A041E] via-[#2A0932] to-[#1F0725] rounded-3xl p-8 sm:p-12 lg:p-16 border-2 border-[#D4AF6A]/40 shadow-2xl relative overflow-hidden text-center text-white">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#7B2A7A]/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#D4AF6A]/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto space-y-5">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-xs uppercase tracking-widest font-semibold text-[#E6CFA5] border border-[#D4AF6A]/30">
                <Mail size={13} className="text-[#D4AF6A]" />
                <span>The Sarathii Administrative Dispatch</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#FFFDF9] font-normal leading-tight">
                Receive Strategic Notes in{' '}
                <span className="italic text-[#E6CFA5]">Your Inbox</span>
              </h2>

              <p className="text-xs sm:text-sm text-[#E5DDD8]/90 leading-relaxed font-normal">
                Monthly strategic monographs, ethical case study dissections, and civil services insights authored directly by J.P. Singh. No marketing noise—pure intellectual clarity.
              </p>

              {subscribed ? (
                <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#D4AF6A]/20 border border-[#D4AF6A] text-[#E6CFA5] text-xs uppercase tracking-widest font-bold animate-fade-in">
                  <CheckCircle2 size={16} className="text-[#D4AF6A]" />
                  <span>Welcome to the Sarathii Dispatch Circle</span>
                </div>
              ) : (
                <form
                  onSubmit={handleSubscribe}
                  className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2 max-w-md mx-auto"
                >
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full sm:flex-1 px-5 py-3.5 rounded-full bg-white/10 border border-white/20 text-xs text-white placeholder-white/50 focus:outline-none focus:border-[#D4AF6A] focus:ring-1 focus:ring-[#D4AF6A] transition-all"
                  />
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-7 py-3.5 rounded-full text-xs uppercase tracking-[0.14em] font-semibold text-[#2A0932] bg-[#E6CFA5] hover:bg-white transition-all shadow-lg hover:scale-105 active:scale-95 whitespace-nowrap"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}
