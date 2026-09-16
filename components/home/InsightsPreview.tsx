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
    <section className="py-10 lg:py-14 bg-[#FFFDF9] relative">
      <Container>
        <SectionHeading
          align="center"
          kicker="10 / Journal & Strategic Notes"
          title={
            <>
              Recent Insights for the{' '}
              <span className="italic font-normal text-[#7B2A7A]">
                Journey Ahead
              </span>
            </>
          }
          description="Thoughtful perspectives on strategic exam preparation, administrative temperament, and mental fortitude written by Jay Prakash Singh."
        />

        {/* 3 Editorial Article Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {articles.slice(0, 3).map((article, index) => (
            <motion.article
              key={article.slug}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group flex flex-col justify-between bg-white rounded-3xl overflow-hidden border border-[#E5DDD8] hover:border-[#D4AF6A] transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div>
                {/* Image Container with Hover Zoom */}
                <div className="relative w-full h-44 sm:h-48 overflow-hidden bg-[#F8F5F2]">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-white/95 backdrop-blur-md text-[10px] uppercase tracking-widest font-bold text-[#4B1458] shadow-sm">
                    {article.category}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 space-y-2.5">
                  <div className="flex items-center gap-3 text-xs text-[#6E6271]">
                    <span>{article.formattedDate}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} />
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg sm:text-xl text-[#2A0932] font-semibold group-hover:text-[#4B1458] transition-colors line-clamp-2 leading-snug">
                    <Link href={`/insights/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h3>

                  <p className="text-xs text-[#6E6271] leading-relaxed line-clamp-2">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              {/* Card Footer Link */}
              <div className="px-5 pb-5 pt-1">
                <Link
                  href={`/insights/${article.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-bold text-[#7B2A7A] group-hover:text-[#4B1458] transition-colors"
                >
                  <span>Read Article</span>
                  <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Centered Explore Action */}
        <div className="mt-8 text-center">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs uppercase tracking-[0.16em] font-semibold text-white bg-[#4B1458] hover:bg-[#2A0932] shadow-md transition-all hover:scale-105 active:scale-95 group"
          >
            <span>Explore All Journal Essays</span>
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </Container>
    </section>
  )
}
