'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Shield,
  Briefcase,
  Scale,
  Feather,
  Sparkles,
  CheckCircle2,
  Quote,
  Building2,
  Train,
  ShieldAlert,
  Award,
  Layers,
} from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import {
  proofDomains,
  majorProjects,
  verifiedAchievements,
  careerMilestones,
} from '@/data/about'

type ArchiveCategory = 'SERVICE' | 'ADMINISTRATION' | 'JUDICIARY' | 'LITERATURE' | 'REFORMS'

interface ArchiveCategoryConfig {
  id: ArchiveCategory
  label: string
  icon: React.ReactNode
  period: string
  headline: string
  description: string
  philosophy: string
  timelineItem: {
    year: string
    title: string
    role: string
    impact: string
  }
  relevantProjects: {
    name: string
    tagline: string
    description: string
    metric: string
  }[]
  relevantAchievement: {
    title: string
    domain: string
    description: string
  }
}

const archiveData: Record<ArchiveCategory, ArchiveCategoryConfig> = {
  SERVICE: {
    id: 'SERVICE',
    label: 'SERVICE',
    icon: <Shield size={18} />,
    period: 'National Defence Forces (1970s)',
    headline: 'Tactical Command & Composure Under Duress',
    description:
      'Commissioned defence service forging the operational discipline, emotional regulation, and mission-first execution that underlies the Sarathii Method.',
    philosophy:
      'The battle is won in the quiet chamber of the mind long before it is joined on the field. Stoic composure under intense pressure is a trained habit of mind.',
    timelineItem: {
      year: '1970s',
      title: 'Defence Service & Command',
      role: 'Armed Forces Officer',
      impact: 'Tactical command, situational awareness, and military-grade psychological fortitude.',
    },
    relevantProjects: [
      {
        name: 'Operational Command Protocols',
        tagline: 'Precision Under Uncertainty',
        description: 'Command stewardship in high-stress operational environments maintaining calm execution and clear communication.',
        metric: 'Mission-first leadership',
      },
    ],
    relevantAchievement: {
      title: 'Military Honor & Discipline',
      domain: 'National Defence',
      description: 'Recognized for distinguished operational fortitude, mental composure, and exemplary command stewardship in national defense.',
    },
  },
  ADMINISTRATION: {
    id: 'ADMINISTRATION',
    label: 'ADMINISTRATION',
    icon: <Briefcase size={18} />,
    period: 'Civil Services & Public Infrastructure (1980s–2000s)',
    headline: 'Systems Modernization & Scalable Public Stewardship',
    description:
      'Decades leading nationwide transportation arteries, passenger welfare amenities, and commercial policies—cutting through bureaucratic red tape to build lasting citizen-centric systems.',
    philosophy:
      'Administration is the art of turning administrative constraints into citizen-centric breakthroughs with fiscal prudence and unyielding integrity.',
    timelineItem: {
      year: '1980s - 2000s',
      title: 'Civil Services & Public Policy Leadership',
      role: 'Senior Executive Administrator',
      impact: 'Pioneered Deluxe Amenities schemes and anti-corruption vigilance frameworks across national transit arteries.',
    },
    relevantProjects: [
      {
        name: 'Deluxe Public Amenities & Sanitation',
        tagline: 'Standardising Public Dignity',
        description: 'Conceptualised and executed the landmark ‘Deluxe Toilets’ scheme across major railway terminals, setting a benchmark for cleanliness.',
        metric: 'Scaled across hundreds of major stations',
      },
      {
        name: 'Commercial Publicity Pioneer',
        tagline: 'Unlocking Latent Public Value',
        description: 'Architected innovative non-fare revenue monetization strategies across public transit assets that set commercial standards for decades.',
        metric: 'Multi-fold increase in non-tariff revenue',
      },
    ],
    relevantAchievement: {
      title: 'Railway Excellence & Modernization',
      domain: 'Public Infrastructure',
      description: 'Conferred top administrative honors for transforming public passenger amenities, station sanitation, and commercial revenue frameworks.',
    },
  },
  JUDICIARY: {
    id: 'JUDICIARY',
    label: 'JUDICIARY',
    icon: <Scale size={18} />,
    period: 'Administrative Tribunals (2010s)',
    headline: 'Constitutional Equity & Dialectical Balance',
    description:
      'Presiding over administrative tribunals with unwavering commitment to natural justice, constitutional morality, and balanced evidence appraisal in complex service disputes.',
    philosophy:
      'An administrative decision or answer must be balanced like a judicial decree—grounded in law, evidence, and constitutional equity.',
    timelineItem: {
      year: '2010s',
      title: 'Judicial Tribunal Adjudication',
      role: 'Tribunal Member & Adjudicator',
      impact: 'Authored landmark balanced decrees reconciling governmental efficiency with fundamental individual equity.',
    },
    relevantProjects: [
      {
        name: 'Administrative Dispute Resolution Protocols',
        tagline: 'Fast-Track Constitutional Equity',
        description: 'Pioneered structured evidentiary conciliation and streamlined tribunal procedures, accelerating fair justice in administrative governance.',
        metric: 'Over 1,000+ disputes resolved with zero overturns',
      },
    ],
    relevantAchievement: {
      title: 'Judicial Pinnacle',
      domain: 'Legal & Administrative Justice',
      description: 'Presided over administrative tribunals with unyielding adherence to natural justice, constitutional equity, and administrative jurisprudence.',
    },
  },
  LITERATURE: {
    id: 'LITERATURE',
    label: 'LITERATURE',
    icon: <Feather size={18} />,
    period: 'Civilizational Scholarship (2020s)',
    headline: 'Moral Synthesis & Timeless Leadership Wisdom',
    description:
      'Author of monumental literary works including "जिन राहों पर सियाराम चले" (वन में और जीवन में), exploring the epic exile as a crucible for character and ethical leadership.',
    philosophy:
      'Words are the bridge between your intellect and the examiner’s judgment. Concise, evocative, and luminous language reflects a lucid, disciplined mind.',
    timelineItem: {
      year: '2020s',
      title: 'Civilizational Authorship',
      role: 'Author & Scholar',
      impact: 'Bridged classical ethical philosophy with modern public governance and character development.',
    },
    relevantProjects: [
      {
        name: 'Treatise: "जिन राहों पर सियाराम चले"',
        tagline: 'Decoded Ethics for Public Life',
        description: 'Examines exile (Vanvaas) not as punishment, but as an active training crucible forging unyielding duty (Maryada) and emotional equanimity (Samatvam).',
        metric: 'Celebrated ethical treatise',
      },
    ],
    relevantAchievement: {
      title: 'Visionary Authorship',
      domain: 'Literature & Philosophy',
      description: 'Celebrated scholar and author exploring ethical leadership, character under adversity, and purposeful governance.',
    },
  },
  REFORMS: {
    id: 'REFORMS',
    label: 'REFORMS',
    icon: <Layers size={18} />,
    period: 'Administrative Innovation & Vigilance',
    headline: 'Frontline Public Welfare Breakthroughs',
    description:
      'Spearheaded monumental reforms in public amenities, public-private partnership models, and automated vigilance that protected citizens from tout syndicates.',
    philosophy:
      'Reforms must touch the everyday life of the common citizen. Governance is validated when ordinary people experience dignity and transparency.',
    timelineItem: {
      year: 'Key Reforms',
      title: 'Nationwide Public Amenities & Anti-Corruption Reforms',
      role: 'Senior Reform Architect',
      impact: 'Instituted transparent reservation tools and durable PPP frameworks safeguarding public revenue.',
    },
    relevantProjects: [
      {
        name: 'Transparency Tools & Anti-Touting Safeguards',
        tagline: 'Democratising Citizen Access',
        description: 'Formulated procedural reforms and monitoring tools that secured reservation quotas for ordinary citizens against illicit tout cartels.',
        metric: 'Millions of secured bookings',
      },
      {
        name: 'PPP Trailblazer in Amenities',
        tagline: 'Sustainable Public-Private Synergy',
        description: 'Pioneered Public-Private Partnership models in station infrastructure and passenger conveniences without burdening the public exchequer.',
        metric: '100% sustainable operation',
      },
    ],
    relevantAchievement: {
      title: 'Anti-Touting Revolution',
      domain: 'Governance & Vigilance',
      description: 'Spearheaded ruthless anti-corruption crackdowns and automated ticketing safeguards that eliminated parallel black markets.',
    },
  },
}

export function ExperienceArchive() {
  const [activeCategory, setActiveCategory] = useState<ArchiveCategory>('SERVICE')
  const current = archiveData[activeCategory]

  return (
    <section
      id="experience-archive"
      className="py-12 lg:py-20 bg-[#FFFDF9] relative overflow-hidden border-t border-[#E5DDD8]"
    >
      <Container>
        <SectionHeading
          align="center"
          kicker="Verified Institutional Provenance"
          title={
            <>
              The Experience Archive —{' '}
              <span className="font-serif italic font-normal text-[#7B2A7A]">
                Documented Evidence of Frontline Public Leadership
              </span>
            </>
          }
          description="Sarathii’s mentorship authority is founded upon authentic, documented public service spanning five decades. Explore the documented records across Defence, Civil Administration, Judiciary, Literature, and Institutional Reforms."
        />

        {/* 5-Category Master Tabs */}
        <div className="mt-10 mb-8 flex justify-center">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 p-1.5 rounded-2xl bg-[#F0EBE5] border border-[#E5DDD8] w-full max-w-3xl">
            {(Object.keys(archiveData) as ArchiveCategory[]).map((cat) => {
              const isActive = activeCategory === cat
              const item = archiveData[cat]

              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`py-3 px-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
                    isActive
                      ? 'bg-[#4B1458] text-white shadow-md'
                      : 'text-[#5D5060] hover:text-[#2A0932] hover:bg-white/60'
                  }`}
                  data-cursor="explore"
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Dynamic Category Showcase Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-3xl border border-[#E5DDD8] shadow-xl p-6 sm:p-8 lg:p-10 space-y-8"
          >
            {/* Header Strip */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#E5DDD8]">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF6A] bg-[#2A0932] px-3 py-1 rounded-full">
                    {current.period}
                  </span>
                  <span className="text-xs font-semibold text-[#7B2A7A]">
                    Archive Reference: {current.label}
                  </span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#2A0932] font-semibold mt-2">
                  {current.headline}
                </h3>
              </div>

              <div className="p-3 rounded-2xl bg-[#F8F5F2] border border-[#D4AF6A]/30 text-[#4B1458] flex items-center gap-2 text-xs font-semibold">
                {current.icon}
                <span>Authenticated Public Service</span>
              </div>
            </div>

            <p className="text-base sm:text-lg text-[#4A3E4D] leading-relaxed">
              {current.description}
            </p>

            {/* Supporting Philosophy Quote */}
            <div className="p-5 rounded-2xl bg-[#2A0932] text-white border border-[#D4AF6A]/30 space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-[#D4AF6A] flex items-center gap-1.5">
                <Quote size={14} />
                <span>Foundational Philosophy:</span>
              </div>
              <p className="font-serif text-base sm:text-lg italic text-[#E6CFA5] leading-relaxed">
                &ldquo;{current.philosophy}&rdquo;
              </p>
            </div>

            {/* 3-Column Split: Timeline Milestone, Documented Reforms/Projects, Verified Achievement */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              {/* Timeline item */}
              <div className="p-5 rounded-2xl bg-[#F8F5F2] border border-[#E5DDD8] space-y-2">
                <span className="text-xs font-mono font-bold text-[#7B2A7A] uppercase tracking-wider">
                  Timeline Milestone ({current.timelineItem.year})
                </span>
                <h4 className="font-serif text-base font-bold text-[#2A0932]">
                  {current.timelineItem.title}
                </h4>
                <div className="text-xs text-[#5D5060] font-semibold">
                  Role: {current.timelineItem.role}
                </div>
                <p className="text-xs text-[#6E6271] leading-relaxed pt-1">
                  {current.timelineItem.impact}
                </p>
              </div>

              {/* Projects/Reforms */}
              <div className="p-5 rounded-2xl bg-[#F8F5F2] border border-[#E5DDD8] space-y-2">
                <span className="text-xs font-mono font-bold text-[#7B2A7A] uppercase tracking-wider">
                  Documented Project / Reform
                </span>
                {current.relevantProjects.map((proj, i) => (
                  <div key={i} className="space-y-1 pt-1 border-t border-[#E5DDD8] first:border-none first:pt-0">
                    <h5 className="font-serif text-sm font-bold text-[#2A0932]">
                      {proj.name}
                    </h5>
                    <p className="text-xs text-[#5D5060] leading-snug">
                      {proj.description}
                    </p>
                    <div className="text-[11px] font-semibold text-[#A8823B]">
                      Impact: {proj.metric}
                    </div>
                  </div>
                ))}
              </div>

              {/* Verified Achievement */}
              <div className="p-5 rounded-2xl bg-[#FFFDF9] border border-[#D4AF6A]/50 space-y-2 shadow-sm">
                <span className="text-xs font-mono font-bold text-[#D4AF6A] uppercase tracking-wider flex items-center gap-1.5">
                  <Award size={14} />
                  <span>Public Recognition</span>
                </span>
                <h4 className="font-serif text-base font-bold text-[#2A0932]">
                  {current.relevantAchievement.title}
                </h4>
                <div className="text-xs text-[#7B2A7A] font-semibold">
                  Domain: {current.relevantAchievement.domain}
                </div>
                <p className="text-xs text-[#5D5060] leading-relaxed pt-1">
                  {current.relevantAchievement.description}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </Container>
    </section>
  )
}
