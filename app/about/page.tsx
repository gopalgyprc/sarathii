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
  Quote,
  Compass,
  CheckCircle2,
  Landmark,
  FileText,
} from 'lucide-react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { BiographyChapters } from '@/components/about/BiographyChapters'
import { ProjectArchive } from '@/components/about/ProjectArchive'
import {
  founderProfile,
  careerMilestones,
  verifiedAchievements,
} from '@/data/about'

export const metadata: Metadata = {
  title: 'Know Sarathii & Founder Jay Prakash Singh | Biography & Vision',
  description:
    'The official digital biography and leadership philosophy of Jay Prakash Singh—former Armed Forces officer, senior civil administrator, judicial tribunal member, and author.',
}

const achievementIconMap: Record<string, React.ReactNode> = {
  Medal: <Medal size={22} />,
  Train: <Train size={22} />,
  ShieldAlert: <ShieldAlert size={22} />,
  Scale: <Scale size={22} />,
  BookOpen: <BookOpen size={22} />,
  Award: <Award size={22} />,
  Sparkles: <Sparkles size={22} />,
  Compass: <Compass size={22} />,
}

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FFFDF9]">
      <Header />

      <main className="flex-grow">
        {/* =================================================================== */}
        {/* 1. CINEMATIC LUXURY SPLIT HERO SECTION WITH OWNER IMAGE */}
        {/* =================================================================== */}
        <section className="relative pt-20 pb-8 sm:pt-24 sm:pb-10 lg:pt-28 lg:pb-12 bg-[#1A041E] text-white overflow-hidden border-b border-[#D4AF6A]/30">
          {/* Ambient Lighting & Glow */}
          <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#7B2A7A]/25 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-[#D4AF6A]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute inset-0 bg-pattern-dark opacity-40 pointer-events-none" />

          <Container className="relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              {/* Left Column: Grand Editorial Copy & Metric Matrix (7 cols) */}
              <div className="lg:col-span-7 space-y-4 text-center lg:text-left">
                {/* Gold Eyebrow Shimmer Pill */}
                <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#2A0932]/90 border border-[#D4AF6A]/40 text-xs uppercase tracking-[0.2em] font-semibold text-[#E6CFA5] shadow-lg backdrop-blur-md">
                  <Sparkles size={13} className="text-[#D4AF6A] animate-pulse" />
                  <span>The Official Digital Biography</span>
                </div>

                {/* Main Headline */}
                <h1 className="font-serif text-3xl sm:text-4xl lg:text-[3.2rem] xl:text-[3.6rem] text-[#FFFDF9] font-normal leading-[1.05] tracking-tight">
                  From Village Soil to <br className="hidden sm:inline" />
                  National Service —{' '}
                  <span className="italic text-[#E6CFA5] block sm:inline mt-0.5 sm:mt-0">
                    A Life of Discipline, Reform & Leadership.
                  </span>
                </h1>

                {/* Subheading Narrative */}
                <p className="text-sm sm:text-base text-[#E5DDD8]/90 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
                  Sarathii is grounded in five decades of uncompromised stewardship across national defence command, systemic civil administration, judicial tribunal adjudication, and civilizational literature.
                </p>

                {/* 4-Column Metric Showcase Strip */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1 max-w-2xl mx-auto lg:mx-0">
                  <div className="bg-white/5 backdrop-blur-md py-2.5 px-3 rounded-2xl border border-white/10 text-center">
                    <div className="font-serif text-xl sm:text-2xl text-[#E6CFA5] font-bold">50+ Years</div>
                    <div className="text-[10px] text-[#E5DDD8]/80 uppercase tracking-wider mt-0.5">Public Service</div>
                  </div>
                  <div className="bg-white/5 backdrop-blur-md py-2.5 px-3 rounded-2xl border border-white/10 text-center">
                    <div className="font-serif text-xl sm:text-2xl text-white font-bold">4 Pillars</div>
                    <div className="text-[10px] text-[#E5DDD8]/80 uppercase tracking-wider mt-0.5">Lived Disciplines</div>
                  </div>
                  <div className="bg-white/5 backdrop-blur-md py-2.5 px-3 rounded-2xl border border-white/10 text-center">
                    <div className="font-serif text-xl sm:text-2xl text-[#E6CFA5] font-bold">1:1 Focus</div>
                    <div className="text-[10px] text-[#E5DDD8]/80 uppercase tracking-wider mt-0.5">Direct Mentorship</div>
                  </div>
                  <div className="bg-white/5 backdrop-blur-md py-2.5 px-3 rounded-2xl border border-white/10 text-center">
                    <div className="font-serif text-xl sm:text-2xl text-white font-bold">Author</div>
                    <div className="text-[10px] text-[#E5DDD8]/80 uppercase tracking-wider mt-0.5">Civilizational Work</div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
                  <a
                    href="#biography-chapters"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs uppercase tracking-[0.14em] font-semibold text-[#2A0932] bg-[#E6CFA5] hover:bg-[#FFFDF9] shadow-lg transition-all hover:scale-105 active:scale-95"
                  >
                    <span>Explore 6 Chapters</span>
                    <ArrowRight size={13} />
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs uppercase tracking-[0.14em] font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all"
                  >
                    <span>Request Diagnostic Intake</span>
                  </Link>
                  <a
                    href="https://www.linkedin.com/in/jay-prakash-singh-87381a66/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-3 rounded-full text-xs uppercase tracking-[0.14em] font-semibold text-[#E6CFA5] hover:text-white bg-white/5 hover:bg-white/10 border border-[#D4AF6A]/40 transition-all"
                    aria-label="LinkedIn Profile of Jay Prakash Singh"
                  >
                    <svg className="w-3.5 h-3.5 fill-current text-[#D4AF6A]" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.6 1.6 0 0 0-1.6 1.6 1.6 1.6 0 0 0 1.6 1.6 1.6 1.6 0 0 0 1.6-1.6 1.6 1.6 0 0 0-1.6-1.6Z" />
                    </svg>
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Natural Aspect Ratio Presidential Portrait Showcase (5 cols) */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-lg">
                  {/* Subtle Ambient Glow behind the Portrait */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#D4AF6A]/20 to-[#7B2A7A]/30 rounded-3xl blur-lg pointer-events-none" />

                  {/* Main Portrait Container */}
                  <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden border-2 border-[#D4AF6A]/50 shadow-2xl bg-[#1A041E] group">
                    <Image
                      src={founderProfile.portraitUrl}
                      alt="Jay Prakash Singh - Founder & Chief Mentor"
                      fill
                      sizes="(max-width: 768px) 100vw, 550px"
                      className="object-cover object-[center_top] transition-transform duration-700 group-hover:scale-105"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A041E]/90 via-transparent to-transparent pointer-events-none" />

                    {/* Bottom Identity Clean Bar */}
                    <div className="absolute bottom-3 left-3 right-3 bg-[#1A041E]/80 backdrop-blur-md py-2.5 px-4 rounded-2xl border border-[#D4AF6A]/30 flex items-center justify-between text-left">
                      <div>
                        <div className="font-serif text-base sm:text-lg text-white font-bold leading-tight">
                          Jay Prakash Singh
                        </div>
                        <div className="text-[10px] text-[#E5DDD8]/80 leading-tight">
                          Former Senior Administrator · Tribunal Member · Author
                        </div>
                      </div>
                      <span className="text-[10px] uppercase tracking-wider font-bold text-[#E6CFA5] px-2.5 py-1 rounded-full bg-[#2A0932] border border-[#D4AF6A]/40 shrink-0">
                        50+ Yrs Exp.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>

          {/* Bottom Gold Accent */}
          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF6A]/60 to-transparent" />
        </section>

        {/* =================================================================== */}
        {/* 2. THE FOURFOLD DISCIPLINE & FOUNDER'S STORY */}
        {/* =================================================================== */}
        <section className="py-12 lg:py-18 bg-[#FDFBF7] border-b border-[#E5DDD8]/70">
          <Container>
            <div className="max-w-4xl mx-auto text-center space-y-4 mb-10">
              <SectionHeading
                align="center"
                kicker="The Founder's Story"
                title="A Synthesis of India's Most Demanding Public Disciplines"
                description="A life forged through duty, ethical governance, and the relentless pursuit of institutional excellence."
              />
              <p className="text-base text-[#4A3E4D] leading-relaxed font-normal max-w-3xl mx-auto">
                Jay Prakash Singh brings a rare confluence of five decades across India’s most demanding public disciplines: the martial discipline and tactical grit of the Armed Forces, the complex systems modernization of the Indian Administrative Service, the dialectical balance of judicial tribunals, and the profound ethical synthesis of civilizational literature.
              </p>
            </div>

            {/* 4 Interactive Domain Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {/* Domain 1: Armed Forces */}
              <div className="bg-white p-6 rounded-3xl border border-[#E5DDD8] shadow-sm hover:border-[#D4AF6A] transition-all duration-300 space-y-3 hover:-translate-y-1 hover:shadow-lg flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-[#4B1458]/10 text-[#4B1458] flex items-center justify-center">
                    <Shield size={20} />
                  </div>
                  <span className="text-[11px] uppercase tracking-wider font-bold text-[#7B2A7A] block">
                    Armed Forces
                  </span>
                  <h4 className="font-serif text-lg font-semibold text-[#2A0932] leading-snug">
                    Command & Martial Composure
                  </h4>
                  <p className="text-xs text-[#6E6271] leading-relaxed">
                    Tactical situational awareness, iron discipline, and stoic mental stamina in high-pressure environments.
                  </p>
                </div>
              </div>

              {/* Domain 2: Civil Administration */}
              <div className="bg-white p-6 rounded-3xl border border-[#E5DDD8] shadow-sm hover:border-[#D4AF6A] transition-all duration-300 space-y-3 hover:-translate-y-1 hover:shadow-lg flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-[#4B1458]/10 text-[#4B1458] flex items-center justify-center">
                    <Briefcase size={20} />
                  </div>
                  <span className="text-[11px] uppercase tracking-wider font-bold text-[#7B2A7A] block">
                    Civil Administration
                  </span>
                  <h4 className="font-serif text-lg font-semibold text-[#2A0932] leading-snug">
                    Public Stewardship & Policy
                  </h4>
                  <p className="text-xs text-[#6E6271] leading-relaxed">
                    Pioneered nationwide sanitation protocols, PPP infrastructure frameworks, and transparent ticketing safeguards.
                  </p>
                </div>
              </div>

              {/* Domain 3: Judicial Tribunals */}
              <div className="bg-white p-6 rounded-3xl border border-[#E5DDD8] shadow-sm hover:border-[#D4AF6A] transition-all duration-300 space-y-3 hover:-translate-y-1 hover:shadow-lg flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-[#4B1458]/10 text-[#4B1458] flex items-center justify-center">
                    <Scale size={20} />
                  </div>
                  <span className="text-[11px] uppercase tracking-wider font-bold text-[#7B2A7A] block">
                    Judicial Tribunals
                  </span>
                  <h4 className="font-serif text-lg font-semibold text-[#2A0932] leading-snug">
                    Administrative Jurisprudence
                  </h4>
                  <p className="text-xs text-[#6E6271] leading-relaxed">
                    Adjudicated complex administrative disputes with constitutional equity, evidential balance, and deep neutrality.
                  </p>
                </div>
              </div>

              {/* Domain 4: Civilizational Literature */}
              <div className="bg-white p-6 rounded-3xl border border-[#E5DDD8] shadow-sm hover:border-[#D4AF6A] transition-all duration-300 space-y-3 hover:-translate-y-1 hover:shadow-lg flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-[#4B1458]/10 text-[#4B1458] flex items-center justify-center">
                    <BookOpen size={20} />
                  </div>
                  <span className="text-[11px] uppercase tracking-wider font-bold text-[#7B2A7A] block">
                    Literature & Philosophy
                  </span>
                  <h4 className="font-serif text-lg font-semibold text-[#2A0932] leading-snug">
                    Civilizational Authorship
                  </h4>
                  <p className="text-xs text-[#6E6271] leading-relaxed">
                    Author of &ldquo;जिन राहों पर सियाराम चले&rdquo;, decoding classical civilizational virtues into actionable governance principles.
                  </p>
                </div>
              </div>
            </div>

            {/* Presidential Pull Quote Box */}
            <div className="mt-10 max-w-4xl mx-auto bg-[#2A0932] text-[#FFFDF9] rounded-3xl p-6 sm:p-8 border border-[#D4AF6A]/40 relative overflow-hidden space-y-3 shadow-xl text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2 text-[#D4AF6A]">
                <Quote size={24} />
                <span className="text-xs uppercase tracking-widest font-bold text-[#E6CFA5]">Core Leadership Tenet</span>
              </div>
              <p className="font-serif text-lg sm:text-2xl italic leading-snug text-[#FFFDF9]">
                &ldquo;True leadership is not the exercise of authority; it is the quiet stewardship of principles in moments when compromise seems convenient.&rdquo;
              </p>
              <cite className="block text-xs uppercase tracking-widest text-[#E6CFA5] font-semibold not-italic">
                — Jay Prakash Singh · Founder, Sarathii
              </cite>
            </div>
          </Container>
        </section>

        {/* =================================================================== */}
        {/* 3. SIX CHAPTERS OF LIVED LEADERSHIP (DOCUMENTARY READING ROOM) */}
        {/* =================================================================== */}
        <div id="biography-chapters">
          <BiographyChapters />
        </div>

        {/* =================================================================== */}
        {/* 4. PRESTIGE CAREER CHRONOLOGY (NATURAL JOURNEY STREAM) */}
        {/* =================================================================== */}
        <section className="py-14 lg:py-20 bg-[#F8F5F2] border-b border-[#E5DDD8] bg-pattern-subtle">
          <Container>
            <SectionHeading
              align="center"
              kicker="Chronology of Service"
              title="Career Milestones & Public Stewardship"
              description="A progressive trajectory of public service, policy innovation, and nationwide administrative impact across five decades."
            />

            {/* Natural Connected Chronology Stream */}
            <div className="mt-10 max-w-4xl mx-auto relative pl-8 sm:pl-16 space-y-8 before:absolute before:top-6 before:bottom-6 before:left-4 sm:before:left-7 before:w-1 before:bg-gradient-to-b before:from-[#4B1458] before:via-[#D4AF6A] before:to-[#4B1458] before:rounded-full">
              {careerMilestones.map((milestone, index) => {
                const milestoneIcons = [
                  <Shield key="0" size={20} />,
                  <Briefcase key="1" size={20} />,
                  <Scale key="2" size={20} />,
                  <BookOpen key="3" size={20} />,
                  <Sparkles key="4" size={20} />,
                ]

                return (
                  <div key={milestone.title} className="relative group">
                    {/* Glowing Connected Node Seal */}
                    <div className="absolute -left-8 sm:-left-16 top-6 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#2A0932] border-4 border-[#FFFDF9] flex items-center justify-center text-[#E6CFA5] shadow-xl ring-2 ring-[#D4AF6A]/60 group-hover:scale-110 group-hover:ring-4 group-hover:ring-[#D4AF6A] transition-all duration-300 z-10">
                      {milestoneIcons[index] || <Sparkles size={18} />}
                    </div>

                    {/* Rich Milestone Card */}
                    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E5DDD8] shadow-md hover:border-[#D4AF6A] hover:shadow-2xl transition-all duration-300 space-y-3 group-hover:-translate-y-0.5">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="flex items-center gap-2.5">
                          <span className="px-3.5 py-1 rounded-full bg-[#2A0932] text-xs uppercase tracking-widest text-[#E6CFA5] font-bold shadow-sm">
                            {milestone.year}
                          </span>
                          <span className="text-xs font-bold text-[#7B2A7A] uppercase tracking-wider">
                            {milestone.role}
                          </span>
                        </div>
                        <span className="text-[11px] font-bold text-[#A8823B] flex items-center gap-1 bg-[#D4AF6A]/10 px-3 py-0.5 rounded-full border border-[#D4AF6A]/30">
                          <Sparkles size={11} className="text-[#D4AF6A]" />
                          <span>Verified Era</span>
                        </span>
                      </div>

                      <h3 className="font-serif text-2xl sm:text-3xl text-[#2A0932] font-semibold">
                        {milestone.title}
                      </h3>

                      <p className="text-sm sm:text-base text-[#4A3E4D] leading-relaxed font-normal">
                        {milestone.description}
                      </p>

                      <div className="pt-3.5 border-t border-[#E5DDD8] flex items-center gap-2 text-xs text-[#2A0932] font-medium bg-[#FBF8F4] -mx-6 -mb-6 sm:-mx-8 sm:-mb-8 px-6 sm:px-8 py-4 rounded-b-3xl">
                        <Sparkles size={14} className="text-[#D4AF6A] shrink-0" />
                        <span><strong>Key Systemic Impact:</strong> {milestone.impact}</span>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </Container>
        </section>

        {/* =================================================================== */}
        {/* 5. VERIFIED ACHIEVEMENTS & PUBLIC HONOURS */}
        {/* =================================================================== */}
        <section className="py-12 lg:py-16 bg-[#FFFDF9] border-b border-[#E5DDD8]">
          <Container>
            <SectionHeading
              align="center"
              kicker="Distinguished Record"
              title="Verified Achievements & Honors"
              description="Real-world leadership honors earned through uncompromised integrity, systemic reform, and dedicated service."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mt-8">
              {verifiedAchievements.map((achievement) => (
                <div
                  key={achievement.title}
                  className="bg-white rounded-3xl p-6 sm:p-7 border border-[#E5DDD8] hover:border-[#D4AF6A] transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between group"
                >
                  <div className="space-y-3.5">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-[#2A0932] text-[#E6CFA5] flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                        {achievementIconMap[achievement.icon]}
                      </div>
                      <span className="text-[10px] uppercase tracking-widest text-[#7B2A7A] font-bold px-2.5 py-1 rounded-full bg-[#4B1458]/5 border border-[#4B1458]/10">
                        {achievement.domain}
                      </span>
                    </div>

                    <h3 className="font-serif text-lg sm:text-xl text-[#2A0932] font-semibold leading-snug group-hover:text-[#4B1458] transition-colors">
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

        {/* =================================================================== */}
        {/* 6. MAJOR PUBLIC POLICY & REFORMS ARCHIVE */}
        {/* =================================================================== */}
        <ProjectArchive />

        {/* =================================================================== */}
        {/* 7. PRESIDENTIAL INTAKE INVITATION (FINAL CTA) */}
        {/* =================================================================== */}
        <section className="py-12 lg:py-16 bg-[#FFFDF9]">
          <Container>
            <div className="bg-gradient-to-r from-[#2A0932] via-[#3B0E45] to-[#1A041E] text-white rounded-3xl p-8 sm:p-12 lg:p-14 border border-[#D4AF6A]/40 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
              {/* Background ambient lighting */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-[#D4AF6A]/15 rounded-full blur-3xl pointer-events-none" />

              <div className="space-y-3 text-center lg:text-left max-w-2xl relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs uppercase tracking-widest font-bold text-[#E6CFA5] border border-white/15">
                  <Sparkles size={12} className="text-[#D4AF6A]" />
                  <span>Direct Personal Mentorship</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#FFFDF9] font-normal leading-tight">
                  Seek Guidance from a Lifelong Charioteer
                </h3>
                <p className="text-xs sm:text-sm text-[#E5DDD8]/90 leading-relaxed">
                  Begin with a focused diagnostic evaluation of your preparation trajectory, answer writing maturity, and administrative reasoning directly with Jay Prakash Singh.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4 relative z-10 shrink-0 w-full lg:w-auto justify-center">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-xs uppercase tracking-[0.14em] font-semibold text-[#2A0932] bg-[#E6CFA5] hover:bg-[#FFFDF9] shadow-xl transition-all hover:scale-105 active:scale-95"
                >
                  <span>Request Diagnostic Intake</span>
                  <ArrowRight size={15} />
                </Link>
                <Link
                  href="/books"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-xs uppercase tracking-[0.14em] font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all"
                >
                  <span>Explore Literary Works</span>
                </Link>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  )
}

