'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Building2,
  TrendingUp,
  Landmark,
  ShieldCheck,
  FileSpreadsheet,
  Layers,
  Sparkles,
  ArrowUpRight,
} from 'lucide-react'
import { majorProjects, ProjectInnovation } from '@/data/about'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'

const categories = [
  'All Initiatives',
  'Public Infrastructure',
  'Policy & Finance',
  'Operations & Quality',
  'E-Governance & Vigilance',
  'Revenue & Asset Optimization',
]

const categoryIconMap: Record<string, React.ReactNode> = {
  'Public Infrastructure': <Building2 size={16} />,
  'Policy & Finance': <Landmark size={16} />,
  'Operations & Quality': <Layers size={16} />,
  'E-Governance & Vigilance': <ShieldCheck size={16} />,
  'Revenue & Asset Optimization': <FileSpreadsheet size={16} />,
}

export function ProjectArchive() {
  const [selectedCategory, setSelectedCategory] = useState('All Initiatives')

  const filteredProjects =
    selectedCategory === 'All Initiatives'
      ? majorProjects
      : majorProjects.filter((p) => p.category === selectedCategory)

  const getCategoryCount = (cat: string) => {
    if (cat === 'All Initiatives') return majorProjects.length
    return majorProjects.filter((p) => p.category === cat).length
  }

  return (
    <section className="py-14 lg:py-20 bg-[#1F0724] text-[#FFFDF9] bg-pattern-dark relative overflow-hidden border-b border-[#D4AF6A]/30">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-[#7B2A7A]/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-[#D4AF6A]/15 rounded-full blur-3xl pointer-events-none" />

      {/* Decorative Gold Accent Top Border */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF6A]/60 to-transparent" />
      <Container>
        <SectionHeading
          theme="dark"
          align="center"
          kicker="Policy & Infrastructure"
          title={
            <>
              Major Public Policy &{' '}
              <span className="font-serif italic font-normal text-[#E6CFA5]">
                Systemic Reforms
              </span>
            </>
          }
          description="Pioneering systemic administrative reforms that established nationwide benchmarks in passenger amenities, PPP frameworks, transparency tools, and non-tariff revenue optimization."
        />

        {/* Category Filters with Dynamic Counts */}
        <div className="mt-8 flex flex-wrap justify-center gap-2 sm:gap-3">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat
            const count = getCategoryCount(cat)
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 sm:px-5 py-2.5 rounded-full text-xs font-semibold transition-all duration-300 border flex items-center gap-2 ${isSelected
                    ? 'bg-[#E6CFA5] text-[#2A0932] border-[#E6CFA5] shadow-xl shadow-[#D4AF6A]/20 scale-105 font-bold ring-2 ring-[#D4AF6A]/50'
                    : 'bg-white/5 hover:bg-white/15 text-[#E5DDD8] border-white/15 hover:border-[#D4AF6A]/50 backdrop-blur-md'
                  }`}
                data-cursor="explore"
              >
                <span>{cat}</span>
                <span
                  className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${isSelected
                      ? 'bg-[#2A0932] text-[#E6CFA5]'
                      : 'bg-white/10 text-[#E5DDD8]/80'
                    }`}
                >
                  {count}
                </span>
              </button>
            )
          })}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-md border border-white/15 hover:border-[#D4AF6A] rounded-3xl p-7 sm:p-8 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between shadow-xl group hover:shadow-2xl hover:shadow-[#D4AF6A]/20"
              >
                <div className="space-y-3.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-widest text-[#E6CFA5] font-bold px-3 py-1 rounded-full bg-white/5 border border-white/10">
                      {project.category}
                    </span>
                    <div className="w-8 h-8 rounded-xl bg-white/10 text-[#D4AF6A] flex items-center justify-center border border-white/10 group-hover:scale-110 group-hover:bg-[#D4AF6A] group-hover:text-[#2A0932] transition-all">
                      {categoryIconMap[project.category] || <Building2 size={16} />}
                    </div>
                  </div>

                  <h3 className="font-serif text-2xl text-white font-normal group-hover:text-[#E6CFA5] transition-colors mt-1">
                    {project.name}
                  </h3>

                  <div className="text-xs text-[#E6CFA5] italic font-serif">
                    &ldquo;{project.tagline}&rdquo;
                  </div>

                  <p className="text-xs sm:text-sm text-[#E5DDD8]/85 leading-relaxed pt-1 font-normal">
                    {project.description}
                  </p>
                </div>

                <div className="pt-5 mt-6 border-t border-white/10 flex items-center justify-between gap-2 text-xs text-[#E6CFA5] font-semibold bg-black/20 -mx-7 -mb-7 sm:-mx-8 sm:-mb-8 px-6 py-4 rounded-b-3xl border-t border-white/10">
                  <div className="flex items-center gap-2">
                    <TrendingUp size={15} className="shrink-0 text-[#D4AF6A]" />
                    <span className="text-xs font-bold text-white">Impact: <span className="text-[#E6CFA5] font-normal">{project.impactMetric}</span></span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </Container>
    </section>
  )
}

