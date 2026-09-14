'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Clock } from 'lucide-react'
import { articles } from '@/data/articles'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'

export function InsightsPreview() {
  return (
    <section className="py-20 lg:py-28 bg-[#FFFDF9] relative">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading
            kicker="07 / Journal & Analysis"
            title={
              <>
                Recent Insights for the{' '}
                <span className="italic font-normal text-[#7B2A7A]">
                  Journey Ahead
                </span>
              </>
            }
            description="Thoughtful perspectives on strategic exam preparation, administrative temperament, and mental fortitude written by Jay Prakash Singh."
            className="mb-0 md:mb-0"
          />

          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] font-bold text-[#4B1458] hover:text-[#7B2A7A] transition-colors shrink-0 group"
          >
            <span>View All Insights</span>
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 3 Editorial Article Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {articles.map((article, index) => (
            <motion.article
              key={article.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col justify-between bg-white rounded-3xl overflow-hidden border border-[#E5DDD8] hover:border-[#D4AF6A] transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div>
                {/* Image Container with Hover Zoom */}
                <div className="relative w-full h-52 sm:h-56 overflow-hidden bg-[#F8F5F2]">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[10px] uppercase tracking-widest font-bold text-[#4B1458] shadow-sm">
                    {article.category}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-7 space-y-3">
                  <div className="flex items-center gap-3 text-xs text-[#6E6271]">
                    <span>{article.formattedDate}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} />
                      {article.readTime}
                    </span>
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

              {/* Card Footer Link */}
              <div className="px-6 sm:px-7 pb-6 sm:pb-7 pt-2">
                <Link
                  href={`/insights/${article.slug}`}
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-bold text-[#7B2A7A] group-hover:text-[#4B1458] transition-colors"
                >
                  <span>Read Article</span>
                  <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  )
}
