'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Shield,
  Briefcase,
  Scale,
  Feather,
  Compass,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Building2,
  Target,
} from 'lucide-react'
import { proofDomains, ProofDomain } from '@/data/about'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'

const iconMap: Record<string, React.ReactNode> = {
  Shield: <Shield size={20} />,
  Briefcase: <Briefcase size={20} />,
  Scale: <Scale size={20} />,
  Feather: <Feather size={20} />,
  Compass: <Compass size={20} />,
}

export function ProofOfExperience() {
  const [selectedDomainId, setSelectedDomainId] = useState<string>(proofDomains[0].id)

  const activeDomain = proofDomains.find((d) => d.id === selectedDomainId) || proofDomains[0]

  return (
    <section className="py-10 lg:py-14 bg-[#F8F5F2] relative overflow-hidden bg-pattern-subtle">
      {/* Background glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#7B2A7A]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#D4AF6A]/10 rounded-full blur-3xl pointer-events-none" />

      <Container>
        <SectionHeading
          align="center"
          kicker="06 / Real-World Authority"
          title={
            <>
              Experience That Cannot Be{' '}
              <span className="font-serif italic font-normal text-[#7B2A7A]">
                Taught From a Textbook
              </span>
            </>
          }
          description="Most coaching institutes teach theory derived from books. Sarathii’s mentorship is rooted in decades of executive command, public infrastructure policy, judicial tribunals, and civilizational research under Chief Mentor Jay Prakash Singh."
        />

        {/* Domain Selection Tabs */}
        <div className="mt-5 flex flex-wrap justify-center gap-2.5 sm:gap-3.5">
          {proofDomains.map((domain) => {
            const isSelected = domain.id === activeDomain.id
            return (
              <button
                key={domain.id}
                onClick={() => setSelectedDomainId(domain.id)}
                className={`flex items-center gap-2.5 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full text-sm sm:text-base font-bold transition-all duration-300 border ${
                  isSelected
                    ? 'bg-[#4B1458] text-white border-[#4B1458] shadow-md scale-105'
                    : 'bg-white hover:bg-[#FFFDF9] text-[#2A0932] border-[#E5DDD8] hover:border-[#D4AF6A]'
                }`}
                data-cursor="explore"
              >
                <span className={isSelected ? 'text-[#D4AF6A]' : 'text-[#7B2A7A]'}>
                  {iconMap[domain.icon]}
                </span>
                <span>{domain.title}</span>
              </button>
            )
          })}
        </div>

        {/* Active Domain Deep-Dive Card */}
        <div className="mt-5">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeDomain.id}
              initial={{ opacity: 0, scale: 0.98, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: -15 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-[#E5DDD8] shadow-xl relative overflow-hidden"
            >
              {/* Header Badges */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-[#E5DDD8]">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-[#4B1458]/10 text-[#4B1458] flex items-center justify-center">
                    {iconMap[activeDomain.icon]}
                  </div>
                  <div>
                    <span className="text-xs sm:text-sm uppercase tracking-wider font-bold text-[#7B2A7A]">
                      Domain Archive
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#2A0932]">
                      {activeDomain.title}
                    </h3>
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F8F5F2] border border-[#E5DDD8] text-xs sm:text-sm font-semibold text-[#6E6271]">
                  <Building2 size={14} className="text-[#D4AF6A]" />
                  <span>{activeDomain.institution}</span>
                </div>
              </div>

              {/* Subtitle & Overview */}
              <div className="mt-5 space-y-3">
                <h4 className="font-serif italic text-2xl sm:text-3xl text-[#4B1458] font-normal leading-snug">
                  &ldquo;{activeDomain.subtitle}&rdquo;
                </h4>
                <p className="text-sm sm:text-base lg:text-[1.05rem] text-[#6E6271] leading-relaxed font-normal">
                  {activeDomain.overview}
                </p>
              </div>

              {/* Comparison Grid: Real World Impact vs Mentorship Translation */}
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                {/* Real World Impact */}
                <div className="p-6 rounded-2xl bg-[#FBF8F4] border border-[#E5DDD8]/80 space-y-2.5">
                  <div className="flex items-center gap-2 text-xs sm:text-sm uppercase tracking-wider font-bold text-[#4B1458]">
                    <Target size={16} className="text-[#D4AF6A]" />
                    <span>Lived Administrative Impact</span>
                  </div>
                  <p className="text-sm sm:text-base text-[#2A0932] leading-relaxed font-medium">
                    {activeDomain.realWorldImpact}
                  </p>
                </div>

                {/* Mentorship Translation */}
                <div className="p-6 rounded-2xl bg-[#350C3E] text-white border border-[#4B1458] space-y-2.5 shadow-md">
                  <div className="flex items-center gap-2 text-xs sm:text-sm uppercase tracking-wider font-bold text-[#E6CFA5]">
                    <Sparkles size={16} className="text-[#D4AF6A]" />
                    <span>Translation into Sarathii Mentorship</span>
                  </div>
                  <p className="text-sm sm:text-base text-[#E5DDD8] leading-relaxed font-normal">
                    {activeDomain.mentorshipTranslation}
                  </p>
                </div>
              </div>

              {/* Domain Key Highlights */}
              <div className="mt-6 pt-5 border-t border-[#E5DDD8]">
                <span className="text-xs sm:text-sm uppercase tracking-wider font-bold text-[#6E6271] block mb-3">
                  Key Competencies Instilled in Aspirants:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {activeDomain.highlights.map((h, i) => (
                    <div
                      key={i}
                      className="p-3.5 rounded-xl bg-[#F8F5F2] border border-[#E5DDD8] flex items-start gap-2.5 text-xs sm:text-sm text-[#2A0932] font-semibold leading-relaxed"
                    >
                      <CheckCircle2 size={16} className="text-[#7B2A7A] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>
    </section>
  )
}
