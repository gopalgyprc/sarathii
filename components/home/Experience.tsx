'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Briefcase, Scale, Feather, Quote } from 'lucide-react'
import { experiencePillars } from '@/data/about'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'

const iconMap: Record<string, React.ReactNode> = {
  Shield: <Shield size={26} />,
  Briefcase: <Briefcase size={26} />,
  Scale: <Scale size={26} />,
  Feather: <Feather size={26} />,
}

export function Experience() {
  return (
    <section className="py-20 lg:py-28 bg-[#2A0932] text-[#FFFDF9] relative overflow-hidden bg-pattern-dark">
      {/* Decorative ambient aura */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#7B2A7A]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#D4AF6A]/10 rounded-full blur-3xl pointer-events-none" />

      <Container>
        <SectionHeading
          theme="dark"
          kicker="04 / Distinct Foundation"
          title={
            <>
              Five Decades of Real-World Service.{' '}
              <br className="hidden sm:inline" />
              <span className="italic font-normal text-[#E6CFA5]">
                Four Defining Disciplines.
              </span>
            </>
          }
          description="Sarathii mentorship is not theoretical textbook advice. It combines half a century of leadership across national defense, civil administration, judicial tribunals, and literature."
        />

        {/* 4 Experience Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {experiencePillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 border border-white/10 hover:border-[#D4AF6A]/40 rounded-3xl p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group relative"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#4B1458] border border-[#D4AF6A]/30 flex items-center justify-center text-[#E6CFA5] mb-6 group-hover:scale-110 transition-transform">
                  {iconMap[pillar.icon]}
                </div>

                <div className="text-xs uppercase tracking-[0.16em] text-[#D4AF6A] font-semibold mb-1">
                  Discipline 0{index + 1}
                </div>

                <h3 className="font-serif text-2xl font-normal text-white mb-2">
                  {pillar.title}
                </h3>

                <div className="text-xs text-[#E6CFA5]/80 italic mb-4">
                  {pillar.subtitle}
                </div>

                <p className="text-xs sm:text-sm text-[#E5DDD8]/80 leading-relaxed mb-6">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 space-y-2">
                <div className="text-[11px] uppercase tracking-wider text-[#D4AF6A] font-semibold">
                  Core Acumen:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {pillar.qualities.map((q) => (
                    <span
                      key={q}
                      className="px-2.5 py-1 rounded-md bg-white/5 text-[11px] text-[#E5DDD8]"
                    >
                      {q}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Central Synthesis Quote */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-14 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#4B1458]/80 via-[#2A0932] to-[#4B1458]/80 border border-[#D4AF6A]/30 text-center relative"
        >
          <Quote size={28} className="text-[#D4AF6A] mx-auto mb-3 opacity-80" />
          <blockquote className="font-serif text-xl sm:text-2xl lg:text-3xl text-[#FFFDF9] max-w-3xl mx-auto leading-snug font-normal italic">
            “The discipline of a soldier. The vision of an administrator. The balance of a judge. The sensitivity of a writer.”
          </blockquote>
          <cite className="block mt-4 text-xs uppercase tracking-widest text-[#D4AF6A] font-semibold not-italic">
            — The Sarathii Philosophy of Leadership
          </cite>
        </motion.div>
      </Container>
    </section>
  )
}
