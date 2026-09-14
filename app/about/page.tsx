import React from 'react'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  Shield,
  Briefcase,
  Scale,
  BookOpen,
  Train,
  ShieldAlert,
  Medal,
  Award,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Quote,
} from 'lucide-react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import {
  founderProfile,
  careerMilestones,
  verifiedAchievements,
  majorProjects,
} from '@/data/about'

export const metadata: Metadata = {
  title: 'About Sarathii & Founder Jay Prakash Singh',
  description:
    'Discover the journey of Jay Prakash Singh—from village roots to national service across the Armed Forces, Indian Administrative Service, Judiciary, and literature.',
}

const achievementIconMap: Record<string, React.ReactNode> = {
  Medal: <Medal size={24} />,
  Train: <Train size={24} />,
  ShieldAlert: <ShieldAlert size={24} />,
  Scale: <Scale size={24} />,
  BookOpen: <BookOpen size={24} />,
}

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FFFDF9]">
      <Header />

      <main className="flex-grow pt-28 sm:pt-36">
        {/* About Hero Section */}
        <section className="py-16 sm:py-24 bg-radial-hero relative overflow-hidden border-b border-[#E5DDD8]">
          <Container>
            <div className="max-w-4xl space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#4B1458]/10 text-xs uppercase tracking-[0.2em] font-semibold text-[#7B2A7A]">
                <Sparkles size={13} className="text-[#D4AF6A]" />
                <span>The Charioteer Behind Sarathii</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl text-[#2A0932] font-normal leading-[1.05] tracking-tight">
                From Village Soil to National Service —{' '}
                <span className="italic text-[#7B2A7A]">
                  A Life of Discipline, Reform & Leadership.
                </span>
              </h1>

              <p className="text-base sm:text-xl text-[#6E6271] leading-relaxed max-w-2xl font-normal">
                Sarathii is grounded in five decades of uncompromised dedication across national defense, administrative governance, judicial equilibrium, and civilizational literature.
              </p>
            </div>
          </Container>
        </section>

        {/* Founder Editorial Biography */}
        <section className="py-20 lg:py-28 bg-[#FFFDF9]">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              {/* Founder Visual Frame (5 cols) */}
              <div className="lg:col-span-5 relative">
                <div className="sticky top-28 bg-[#F8F5F2] rounded-3xl p-6 border border-[#E5DDD8] shadow-sm space-y-6 text-center">
                  <div className="relative w-full h-[400px] sm:h-[480px] rounded-2xl overflow-hidden bg-gradient-to-b from-[#E8DCCF] to-transparent">
                    <Image
                      src={founderProfile.portraitUrl}
                      alt={founderProfile.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 400px"
                      className="object-contain object-bottom"
                      priority
                    />
                  </div>

                  <div className="space-y-1 text-left pt-2 border-t border-[#E5DDD8]">
                    <div className="text-xs uppercase tracking-widest text-[#D4AF6A] font-bold">
                      Founder & Chief Mentor
                    </div>
                    <div className="font-serif text-2xl text-[#2A0932] font-semibold">
                      {founderProfile.name}
                    </div>
                    <div className="text-xs text-[#6E6271]">
                      Former Member of Armed Forces, IAS & Judicial Tribunals
                    </div>
                  </div>

                  {/* Credentials Badges */}
                  <div className="grid grid-cols-2 gap-2 text-left pt-2">
                    <div className="p-3 bg-white rounded-xl border border-[#E5DDD8] text-xs">
                      <strong className="text-[#4B1458] block font-serif text-sm">50+ Years</strong>
                      <span className="text-[#6E6271]">Public Service</span>
                    </div>
                    <div className="p-3 bg-white rounded-xl border border-[#E5DDD8] text-xs">
                      <strong className="text-[#4B1458] block font-serif text-sm">Author</strong>
                      <span className="text-[#6E6271]">Civilizational Literature</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Biography Narrative (7 cols) */}
              <div className="lg:col-span-7 space-y-8">
                <SectionHeading
                  kicker="The Founder's Story"
                  title="A Synthesis of India's Most Demanding Public Disciplines"
                  description="A life forged through duty, ethical governance, and the relentless pursuit of institutional excellence."
                />

                <div className="space-y-6 text-base sm:text-lg text-[#6E6271] leading-relaxed">
                  {founderProfile.bioParagraphs.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>

                {/* Founder Quote Band */}
                <div className="bg-[#2A0932] text-[#FFFDF9] rounded-3xl p-8 sm:p-10 border border-[#D4AF6A]/40 relative overflow-hidden space-y-4 shadow-lg">
                  <Quote size={28} className="text-[#D4AF6A]" />
                  <p className="font-serif text-xl sm:text-2xl italic leading-snug text-[#FFFDF9]">
                    “True leadership is not the exercise of authority; it is the quiet stewardship of principles in moments when compromise seems convenient.”
                  </p>
                  <cite className="block text-xs uppercase tracking-widest text-[#E6CFA5] font-semibold not-italic">
                    — Jay Prakash Singh
                  </cite>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Career Timeline & Milestones */}
        <section className="py-20 lg:py-28 bg-[#F8F5F2] border-t border-[#E5DDD8] bg-pattern-subtle">
          <Container>
            <SectionHeading
              align="center"
              kicker="Inspirational Journey"
              title="Career Milestones & Public Stewardship"
              description="A progressive trajectory of public service, policy innovation, and nationwide impact."
            />

            <div className="mt-14 max-w-4xl mx-auto space-y-8 relative before:absolute before:inset-0 before:left-4 sm:before:left-1/2 before:w-0.5 before:bg-[#D4AF6A]/40">
              {careerMilestones.map((milestone, index) => {
                const isEven = index % 2 === 0
                return (
                  <div
                    key={milestone.title}
                    className={`relative flex flex-col sm:flex-row items-start ${
                      isEven ? 'sm:flex-row-reverse' : ''
                    } gap-6 sm:gap-12`}
                  >
                    {/* Timeline Node Point */}
                    <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#4B1458] border-4 border-[#FFFDF9] flex items-center justify-center text-white text-[10px] shadow-md z-10">
                      <div className="w-2 h-2 rounded-full bg-[#D4AF6A]" />
                    </div>

                    {/* Content Card */}
                    <div className="ml-10 sm:ml-0 sm:w-1/2 bg-white rounded-3xl p-6 sm:p-8 border border-[#E5DDD8] shadow-sm space-y-2 hover:border-[#D4AF6A] transition-colors">
                      <span className="text-xs uppercase tracking-widest text-[#7B2A7A] font-bold">
                        {milestone.year}
                      </span>
                      <h3 className="font-serif text-2xl text-[#2A0932] font-semibold">
                        {milestone.title}
                      </h3>
                      <div className="text-xs font-semibold text-[#4B1458]">
                        {milestone.role}
                      </div>
                      <p className="text-xs sm:text-sm text-[#6E6271] leading-relaxed pt-1">
                        {milestone.description}
                      </p>
                      <div className="pt-2 text-[11px] text-[#A8823B] font-semibold border-t border-[#E5DDD8]">
                        Impact: {milestone.impact}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </Container>
        </section>

        {/* Verified Achievements & Honors */}
        <section className="py-20 lg:py-28 bg-[#FFFDF9]">
          <Container>
            <SectionHeading
              kicker="Distinguished Record"
              title="Verified Achievements & Honors"
              description="Real-world leadership honors earned through integrity, reform, and uncompromising service."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {verifiedAchievements.map((achievement) => (
                <div
                  key={achievement.title}
                  className="bg-[#F8F5F2] rounded-3xl p-7 border border-[#E5DDD8] hover:border-[#D4AF6A] transition-all hover:shadow-md flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#4B1458] text-[#E6CFA5] flex items-center justify-center">
                      {achievementIconMap[achievement.icon]}
                    </div>
                    <div className="text-[11px] uppercase tracking-widest text-[#7B2A7A] font-bold">
                      {achievement.domain}
                    </div>
                    <h3 className="font-serif text-xl sm:text-2xl text-[#2A0932] font-semibold leading-snug">
                      {achievement.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#6E6271] leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Major Projects & Public Policy Innovations */}
        <section className="py-20 lg:py-28 bg-[#2A0932] text-[#FFFDF9] bg-pattern-dark">
          <Container>
            <SectionHeading
              theme="dark"
              kicker="Policy & Infrastructure"
              title="Major Projects & Innovations"
              description="Pioneering systemic administrative reforms that set national benchmarks in public amenities, transparency, and governance."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {majorProjects.map((project) => (
                <div
                  key={project.name}
                  className="bg-white/5 border border-white/10 hover:border-[#D4AF6A]/40 rounded-3xl p-7 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="text-[10px] uppercase tracking-widest text-[#D4AF6A] font-semibold">
                      {project.category}
                    </div>
                    <h3 className="font-serif text-2xl text-white font-normal">
                      {project.name}
                    </h3>
                    <div className="text-xs text-[#E6CFA5] italic font-serif">
                      {project.tagline}
                    </div>
                    <p className="text-xs sm:text-sm text-[#E5DDD8]/80 leading-relaxed pt-2">
                      {project.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10 text-xs text-[#D4AF6A] font-semibold">
                    Metric: {project.impactMetric}
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Final CTA Strip */}
        <section className="py-16 bg-[#FFFDF9]">
          <Container>
            <div className="bg-[#F8F5F2] rounded-3xl p-8 sm:p-12 border border-[#E5DDD8] flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="space-y-2 text-center sm:text-left">
                <h3 className="font-serif text-2xl sm:text-3xl text-[#2A0932] font-normal">
                  Seek Guidance from a Lifelong Charioteer
                </h3>
                <p className="text-xs sm:text-sm text-[#6E6271]">
                  Begin with a focused evaluation of your preparation, writing, and leadership goals.
                </p>
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-xs uppercase tracking-[0.14em] font-semibold text-white bg-[#4B1458] hover:bg-[#2A0932] shadow-md transition-all shrink-0"
              >
                <span>Connect With J. P. Singh</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  )
}
