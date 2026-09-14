'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Mail, MapPin } from 'lucide-react'
import { siteConfig } from '@/data/site'
import { Container } from '@/components/ui/Container'

export function FinalCTA() {
  return (
    <section className="py-20 lg:py-28 bg-[#FFFDF9] relative">
      <Container>
        <div className="bg-gradient-to-br from-[#4B1458] via-[#2A0932] to-[#1A051F] rounded-[2.5rem] p-8 sm:p-12 lg:p-20 text-[#FFFDF9] text-center relative overflow-hidden border border-[#D4AF6A]/30 shadow-2xl">
          {/* Subtle Ambient Decorative Glows */}
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#7B2A7A]/30 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#D4AF6A]/15 rounded-full blur-3xl pointer-events-none" />

          {/* Center Content */}
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs uppercase tracking-[0.2em] font-semibold text-[#E6CFA5]">
              <Sparkles size={13} className="text-[#D4AF6A]" />
              <span>Take The First Step</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#FFFDF9] font-normal leading-[1.05] tracking-tight">
              Your journey to excellence begins with a{' '}
              <span className="italic font-normal text-[#E6CFA5]">
                conversation.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-[#E5DDD8]/85 max-w-xl mx-auto leading-relaxed">
              Reach out today and let&apos;s begin the deliberate process of transforming your potential into impactful, ethical excellence.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-9 py-4 rounded-full text-xs uppercase tracking-[0.16em] font-semibold text-[#2A0932] bg-[#E6CFA5] hover:bg-[#FFFDF9] shadow-lg shadow-black/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Request a Free Consultation</span>
                <ArrowRight size={16} />
              </Link>

              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-xs uppercase tracking-[0.16em] font-semibold text-white border border-white/20 hover:border-white hover:bg-white/5 transition-all"
              >
                <Mail size={15} />
                <span>{siteConfig.contact.email}</span>
              </a>
            </div>

            <div className="pt-6 flex items-center justify-center gap-2 text-xs text-[#E5DDD8]/60 font-serif italic">
              <MapPin size={13} className="text-[#D4AF6A]" />
              <span>Spectrum Metro, Sector-75, Noida • In-person and remote consultations available</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
