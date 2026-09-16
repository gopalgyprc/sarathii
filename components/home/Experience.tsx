'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Shield, Briefcase, Scale, Feather, Quote, Sparkles, CheckCircle2 } from 'lucide-react'
import { experiencePillars } from '@/data/about'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'

const iconMap: Record<string, React.ReactNode> = {
  Shield: <Shield size={24} />,
  Briefcase: <Briefcase size={24} />,
  Scale: <Scale size={24} />,
  Feather: <Feather size={24} />,
}

export function Experience() {
  const [hoveredPillar, setHoveredPillar] = useState<number | null>(null)

  return (
    <section className="py-10 lg:py-14 bg-[#2A0932] text-[#FFFDF9] relative overflow-hidden bg-pattern-dark">
      {/* Decorative ambient radiance */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-[#7B2A7A]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#D4AF6A]/10 rounded-full blur-3xl pointer-events-none" />

      <Container>
        <SectionHeading
          align="center"
          theme="dark"
          kicker="07 / Four Defining Disciplines"
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-6">
          {experiencePillars.map((pillar, index) => {
            const isHovered = hoveredPillar === index

            return (
              <motion.div
                key={pillar.title}
                onMouseEnter={() => setHoveredPillar(index)}
                onMouseLeave={() => setHoveredPillar(null)}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className={`rounded-3xl p-5 sm:p-6 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden border ${
                  isHovered
                    ? 'bg-white/[0.08] border-[#D4AF6A] -translate-y-1.5 shadow-xl shadow-black/40'
                    : 'bg-white/[0.04] border-white/10 hover:border-[#D4AF6A]/50'
                }`}
              >
                {/* Subtle top corner shimmer */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[#D4AF6A]/10 to-transparent rounded-bl-full pointer-events-none" />

                <div className="space-y-3 relative z-10">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-2xl bg-[#4B1458] border border-[#D4AF6A]/30 flex items-center justify-center text-[#E6CFA5] shadow-inner group-hover:scale-110 transition-transform">
                      {iconMap[pillar.icon]}
                    </div>
                    <span
                      style={{ fontFamily: "var(--font-sans), 'Poppins', sans-serif" }}
                      className="text-[11px] uppercase tracking-widest text-[#D4AF6A] font-bold"
                    >
                      Pillar 0{index + 1}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl font-normal text-white mb-0.5">
                      {pillar.title}
                    </h3>
                    <div className="text-xs text-[#E6CFA5] italic font-serif">
                      {pillar.subtitle}
                    </div>
                  </div>

                  <p className="text-xs text-[#E5DDD8]/80 leading-relaxed font-normal">
                    {pillar.description}
                  </p>

                  <div className="bg-black/20 rounded-xl p-2.5 border-l-2 border-[#D4AF6A]/60">
                    <p className="font-serif text-[11px] italic text-[#E6CFA5]/90 leading-snug">
                      &ldquo;{pillar.quote}&rdquo;
                    </p>
                  </div>
                </div>

                <div className="pt-3 mt-3 border-t border-white/10 space-y-1.5 relative z-10">
                  <div className="text-[10px] uppercase tracking-widest text-[#D4AF6A] font-bold">
                    Executive Acumen:
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {pillar.qualities.map((q) => (
                      <span
                        key={q}
                        className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-[10px] text-[#E5DDD8]"
                      >
                        {q}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Central Synthesis Quote */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-6 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#4B1458] via-[#2A0932] to-[#4B1458] border border-[#D4AF6A]/30 text-center relative overflow-hidden shadow-xl"
        >
          <Quote size={24} className="text-[#D4AF6A] mx-auto mb-2 opacity-90" />
          <blockquote className="font-serif text-lg sm:text-xl lg:text-2xl text-[#FFFDF9] max-w-3xl mx-auto leading-snug font-normal italic">
            &ldquo;The discipline of a soldier. The vision of an administrator. The balance of a judge. The sensitivity of a writer.&rdquo;
          </blockquote>
          <cite className="block mt-2 text-[11px] uppercase tracking-widest text-[#D4AF6A] font-bold not-italic">
            — The Sarathii Philosophy of Leadership
          </cite>
        </motion.div>
      </Container>
    </section>
  )
}
