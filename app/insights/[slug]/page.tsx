import React from 'react'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Clock, Calendar, ArrowLeft, ArrowRight, Share2, Sparkles, Quote, CheckCircle2 } from 'lucide-react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Container } from '@/components/ui/Container'
import { articles, getArticleBySlug, getRelatedArticles } from '@/data/articles'
import { siteConfig } from '@/data/site'

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const article = getArticleBySlug(slug)

  if (!article) {
    return {
      title: 'Article Not Found | Sarathii',
    }
  }

  return {
    title: `${article.title} | Sarathii Insights`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: 'article',
      publishedTime: article.date,
      authors: [article.author],
      images: [
        {
          url: article.image,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
  }
}

export default async function SingleArticlePage({ params }: PageProps) {
  const { slug } = await params
  const article = getArticleBySlug(slug)

  if (!article) {
    notFound()
  }

  const relatedArticles = getRelatedArticles(slug)

  return (
    <div className="flex flex-col min-h-screen bg-[#FFFDF9]">
      <Header />

      <main className="flex-grow pt-28 sm:pt-36">
        {/* Article Header Section */}
        <article className="pb-20">
          <Container size="sm">
            {/* Back Button */}
            <div className="pt-8 pb-6">
              <Link
                href="/insights"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#6E6271] hover:text-[#4B1458] transition-colors"
              >
                <ArrowLeft size={14} />
                <span>Back to All Insights</span>
              </Link>
            </div>

            {/* Meta Tags */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#4B1458]/10 text-xs uppercase tracking-widest font-bold text-[#7B2A7A]">
                <span>{article.category}</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#2A0932] font-normal leading-[1.1] tracking-tight">
                {article.title}
              </h1>

              <p className="font-serif text-lg sm:text-xl italic text-[#6E6271] leading-relaxed">
                {article.subtitle}
              </p>

              {/* Author and Date Bar */}
              <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-[#E5DDD8] text-xs sm:text-sm text-[#6E6271]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#4B1458] text-[#E6CFA5] font-serif flex items-center justify-center font-bold">
                    JPS
                  </div>
                  <div>
                    <div className="font-semibold text-[#1F1722]">{article.author}</div>
                    <div className="text-[11px] text-[#6E6271]">{article.authorRole}</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-xs">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={13} />
                    {article.formattedDate}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={13} />
                    {article.readTime}
                  </span>
                </div>
              </div>
            </div>

            {/* Featured Image */}
            <div className="my-8 relative w-full h-72 sm:h-96 md:h-[440px] rounded-3xl overflow-hidden shadow-lg bg-[#E8DCCF]">
              <Image
                src={article.image}
                alt={article.title}
                fill
                sizes="(max-width: 1024px) 100vw, 800px"
                className="object-cover"
                priority
              />
            </div>

            {/* Article Body Content */}
            <div className="space-y-8 text-base sm:text-lg text-[#3D3141] leading-relaxed font-normal">
              <p className="font-serif text-xl sm:text-2xl text-[#2A0932] leading-relaxed italic border-l-2 border-[#D4AF6A] pl-5">
                {article.content.intro}
              </p>

              {article.content.sections.map((section) => (
                <div key={section.heading} className="space-y-4 pt-4">
                  <h2 className="font-serif text-2xl sm:text-3xl text-[#2A0932] font-semibold">
                    {section.heading}
                  </h2>

                  {section.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}

                  {section.callout && (
                    <div className="bg-[#F8F5F2] rounded-2xl p-6 border-l-4 border-[#7B2A7A] space-y-2 my-6">
                      <Quote size={20} className="text-[#7B2A7A]" />
                      <p className="font-serif text-lg italic text-[#2A0932] leading-snug">
                        {section.callout}
                      </p>
                    </div>
                  )}
                </div>
              ))}

              <div className="pt-4 space-y-3">
                <h3 className="font-serif text-2xl text-[#2A0932] font-semibold">
                  Conclusion
                </h3>
                <p>{article.content.conclusion}</p>
              </div>

              {/* Key Takeaways Card */}
              <div className="bg-[#2A0932] text-[#FFFDF9] rounded-3xl p-8 border border-[#D4AF6A]/30 space-y-4 shadow-md my-10">
                <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#D4AF6A] font-bold">
                  <Sparkles size={14} />
                  <span>Key Strategic Takeaways</span>
                </div>
                <div className="space-y-3">
                  {article.content.takeaways.map((item, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm sm:text-base text-[#E5DDD8]">
                      <CheckCircle2 size={18} className="text-[#D4AF6A] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Author Profile Footer Card */}
            <div className="mt-12 p-8 rounded-3xl bg-[#F8F5F2] border border-[#E5DDD8] flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
              <div className="relative w-20 h-20 rounded-full overflow-hidden bg-[#E8DCCF] shrink-0 border-2 border-[#D4AF6A]">
                <Image
                  src={siteConfig.founderPortrait}
                  alt={siteConfig.name}
                  fill
                  sizes="80px"
                  className="object-cover object-top"
                />
              </div>
              <div className="space-y-2">
                <div className="text-xs uppercase tracking-widest text-[#7B2A7A] font-bold">
                  Written by the Mentor
                </div>
                <h4 className="font-serif text-2xl text-[#2A0932] font-semibold">
                  Jay Prakash Singh
                </h4>
                <p className="text-xs sm:text-sm text-[#6E6271] leading-relaxed">
                  Founder & Chief Mentor at Sarathii. Former member of the Indian Administrative Service, Armed Forces, and Judicial Tribunals. Author of &ldquo;जिन राहों पर सियाराम चले&rdquo;.
                </p>
                <div className="pt-2">
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#4B1458] hover:text-[#7B2A7A]"
                  >
                    <span>Read full biography</span>
                    <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            </div>
          </Container>
        </article>

        {/* Related Articles Strip */}
        <section className="py-16 bg-[#F8F5F2] border-t border-[#E5DDD8]">
          <Container>
            <div className="text-xs uppercase tracking-[0.2em] text-[#7B2A7A] font-bold mb-6">
              More Insights
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedArticles.slice(0, 2).map((rel) => (
                <div
                  key={rel.slug}
                  className="bg-white rounded-3xl p-6 border border-[#E5DDD8] hover:border-[#D4AF6A] transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <span className="text-[10px] uppercase tracking-wider text-[#D4AF6A] font-bold">
                      {rel.category}
                    </span>
                    <h4 className="font-serif text-2xl text-[#2A0932] font-semibold hover:text-[#4B1458] transition-colors">
                      <Link href={`/insights/${rel.slug}`}>{rel.title}</Link>
                    </h4>
                    <p className="text-xs sm:text-sm text-[#6E6271] line-clamp-2 leading-relaxed">
                      {rel.excerpt}
                    </p>
                  </div>

                  <div className="pt-4">
                    <Link
                      href={`/insights/${rel.slug}`}
                      className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-bold text-[#7B2A7A] hover:text-[#4B1458]"
                    >
                      <span>Read Essay</span>
                      <ArrowRight size={12} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  )
}
