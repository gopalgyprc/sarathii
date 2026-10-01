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
  Crown,
  Target,
  Globe,
  Bot,
  HelpCircle,
  Brain,
  PenTool,
  Search,
  Sun,
} from 'lucide-react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { BiographyChapters } from '@/components/about/BiographyChapters'
import { ProjectArchive } from '@/components/about/ProjectArchive'
import { ExperienceArchive } from '@/components/about/ExperienceArchive'
import {
  founderProfile,
  careerMilestones,
  verifiedAchievements,
  knowThySarathii,
} from '@/data/about'
import {
  sarathiiGenesis,
  sarathiiPhilosophySections,
} from '@/data/philosophy'

export const metadata: Metadata = {
  title: 'Know Sarathii & Founder J. P. Singh | The Institution & The Mentor',
  description:
    'Sarathii is a premier civil services mentorship institution founded on five decades of lived public service by J. P. Singh—former Armed Forces officer, PCS (SDM in UP), IAS officer, and Judge in the Higher Judiciary.',
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

const pillarIconList = [PenTool, Brain, Search, Target, Sparkles, Sun]

export default function AboutPage() {
  const { whatIsSarathii, thePowerOfAGuide, civilServicesMahabharata, sixPillars, sarathiiPromise } =
    sarathiiGenesis

  return (
    <div className="flex flex-col min-h-screen bg-[#FFFDF9]">
      <Header />

      <main className="flex-grow">
        {/* =================================================================== */}
        {/* 1. CINEMATIC LUXURY SPLIT HERO SECTION WITH FOUNDER & INSTITUTION */}
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
                  <span>The Institution &amp; The Mentor</span>
                </div>

                {/* Main Headline */}
                <h1 className="font-serif text-3xl sm:text-4xl lg:text-[3.2rem] xl:text-[3.6rem] text-[#FFFDF9] font-normal leading-[1.05] tracking-tight">
                  A School of Thought Forged in <br className="hidden sm:inline" />
                  National Service —{' '}
                  <span className="italic text-[#E6CFA5] block sm:inline mt-0.5 sm:mt-0">
                    Discipline, Reform &amp; Principled Leadership.
                  </span>
                </h1>

                {/* Subheading Narrative */}
                <p className="text-base sm:text-lg text-[#E5DDD8]/90 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
                  Sarathii was established to cultivate habits of disciplined thinking and purposeful action in Civil Services aspirants. The institution is grounded in five decades of lived public leadership by its Founder &amp; Chief Mentor, <strong className="text-white font-medium">J. P. Singh</strong>, spanning military command, civil administration, judicial tribunals, and civilizational literature.
                </p>

                {/* 4-Column Metric Showcase Strip */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1 max-w-2xl mx-auto lg:mx-0">
                  <div className="bg-white/5 backdrop-blur-md py-2.5 px-3 rounded-2xl border border-white/10 text-center">
                    <div className="font-serif text-xl sm:text-2xl text-[#E6CFA5] font-bold">50+ Years</div>
                    <div className="text-xs text-[#E5DDD8]/90 uppercase tracking-wider font-semibold mt-0.5">Public Service</div>
                  </div>
                  <div className="bg-white/5 backdrop-blur-md py-2.5 px-3 rounded-2xl border border-white/10 text-center">
                    <div className="font-serif text-xl sm:text-2xl text-white font-bold">4 Pillars</div>
                    <div className="text-xs text-[#E5DDD8]/90 uppercase tracking-wider font-semibold mt-0.5">Lived Disciplines</div>
                  </div>
                  <div className="bg-white/5 backdrop-blur-md py-2.5 px-3 rounded-2xl border border-white/10 text-center">
                    <div className="font-serif text-xl sm:text-2xl text-[#E6CFA5] font-bold">1:1 Focus</div>
                    <div className="text-xs text-[#E5DDD8]/90 uppercase tracking-wider font-semibold mt-0.5">Direct Mentorship</div>
                  </div>
                  <div className="bg-white/5 backdrop-blur-md py-2.5 px-3 rounded-2xl border border-white/10 text-center">
                    <div className="font-serif text-xl sm:text-2xl text-white font-bold">Author</div>
                    <div className="text-xs text-[#E5DDD8]/90 uppercase tracking-wider font-semibold mt-0.5">Civilizational Work</div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
                  <a
                    href="#know-thy-sarathii"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs uppercase tracking-[0.14em] font-semibold text-[#2A0932] bg-[#E6CFA5] hover:bg-[#FFFDF9] shadow-lg transition-all hover:scale-105 active:scale-95 whitespace-nowrap"
                  >
                    <span>Know Thy Sarathii</span>
                    <ArrowRight size={13} />
                  </a>
                  <a
                    href="#six-pillars"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs uppercase tracking-[0.14em] font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all whitespace-nowrap"
                  >
                    <span>The Six Pillars</span>
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs uppercase tracking-[0.14em] font-semibold text-[#E6CFA5] hover:text-white bg-white/5 hover:bg-white/10 border border-[#D4AF6A]/40 transition-all whitespace-nowrap"
                  >
                    <span>Request Diagnostic Intake</span>
                  </Link>
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
                      alt="J. P. Singh - Founder & Chief Mentor of Sarathii"
                      fill
                      sizes="(max-width: 768px) 100vw, 550px"
                      className="object-cover object-[center_top] transition-transform duration-700 group-hover:scale-105"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A041E]/90 via-transparent to-transparent pointer-events-none" />

                    {/* Bottom Identity Clean Bar */}
                    <div className="absolute bottom-3 left-3 right-3 bg-[#1A041E]/85 backdrop-blur-md py-3 px-4 rounded-2xl border border-[#D4AF6A]/30 flex items-center justify-between text-left">
                      <div>
                        <div className="font-serif text-base sm:text-lg text-white font-bold leading-tight">
                          J. P. Singh
                        </div>
                        <div className="text-xs text-[#E5DDD8]/90 leading-tight mt-0.5">
                          Ex-Army · PCS (SDM in UP) · IAS · Higher Judiciary
                        </div>
                      </div>
                      <span className="text-xs uppercase tracking-wider font-bold text-[#E6CFA5] px-3 py-1 rounded-full bg-[#2A0932] border border-[#D4AF6A]/40 shrink-0">
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
        {/* 1.5 WHAT IS A SARATHII? — THE POWER OF A GUIDE & CIVIL SERVICES AS MAHABHARATA */}
        {/* =================================================================== */}
        <section id="what-is-sarathii" className="py-14 lg:py-20 bg-[#17031B] text-white relative overflow-hidden border-b border-[#D4AF6A]/30">
          <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#7B2A7A]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-[450px] h-[450px] bg-[#D4AF6A]/15 rounded-full blur-3xl pointer-events-none" />

          <Container className="relative z-10">
            <SectionHeading
              align="center"
              kicker="The Genesis · Parthasarathii"
              title={
                <>
                  What is a Sarathii? —{' '}
                  <span className="font-serif italic font-normal text-[#E6CFA5]">
                    The Power of a Guide
                  </span>
                </>
              }
              description="Standing on the brink of Kurukshetra, Arjuna possessed near invincibility. Yet he realized that when opponents are evenly matched, victory depends upon something greater than mere capability: guidance."
              theme="dark"
            />

            {/* Editorial Showcase Grid */}
            <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              
              {/* Definition Card (5 cols) */}
              <div className="lg:col-span-5 bg-gradient-to-br from-[#2A0932] via-[#350C3E] to-[#1F0724] rounded-3xl p-6 sm:p-8 lg:p-10 border border-[#D4AF6A]/40 shadow-2xl flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-xs uppercase tracking-widest text-[#E6CFA5] border border-white/15">
                    <Compass size={13} className="text-[#D4AF6A]" />
                    <span>{whatIsSarathii.title}</span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal leading-tight">
                    {whatIsSarathii.subtitle}
                  </h3>

                  <p className="text-sm sm:text-base text-[#E5DDD8] leading-relaxed font-light">
                    {whatIsSarathii.definition}
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-white/10 p-4 rounded-2xl bg-white/[0.04] border border-[#D4AF6A]/30">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#D4AF6A]">
                    <Crown size={14} />
                    <span>The Supreme Benchmark</span>
                  </div>
                  <p className="font-serif text-sm sm:text-base italic text-[#E6CFA5] mt-1">
                    &ldquo;{whatIsSarathii.idealExample}&rdquo;
                  </p>
                </div>
              </div>

              {/* Kurukshetra & The Modern Mahabharata (7 cols) */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* Arjuna & Krishna card */}
                <div className="bg-[#2A0932]/70 rounded-3xl p-6 sm:p-8 border border-white/10 space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <span className="text-xs uppercase tracking-widest text-[#D4AF6A] font-bold">
                      {thePowerOfAGuide.title}
                    </span>
                    <span className="text-xs font-serif italic text-[#E6CFA5]">
                      {thePowerOfAGuide.subtitle}
                    </span>
                  </div>

                  <p className="text-sm sm:text-base text-[#E5DDD8] leading-relaxed">
                    {thePowerOfAGuide.arjunaContext}
                  </p>
                  <p className="text-sm sm:text-base text-[#E5DDD8] leading-relaxed">
                    {thePowerOfAGuide.deeperTruth}
                  </p>
                  <p className="text-sm sm:text-base text-[#E5DDD8] leading-relaxed">
                    {thePowerOfAGuide.theChoice}
                  </p>
                  <p className="text-sm sm:text-base text-[#E6CFA5] italic font-serif leading-relaxed border-t border-white/10 pt-3">
                    &ldquo;{thePowerOfAGuide.kurukshetraDecisiveFactor}&rdquo;
                  </p>
                </div>

                {/* Civil Services Exam as Mahabharata */}
                <div className="bg-[#2A0932]/70 rounded-3xl p-6 sm:p-8 border border-[#D4AF6A]/40 space-y-4">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#D4AF6A]">
                    <Target size={15} />
                    <span>{civilServicesMahabharata.title}</span>
                  </div>

                  <p className="text-sm sm:text-base text-[#E5DDD8] leading-relaxed">
                    {civilServicesMahabharata.battlefieldComparison}
                  </p>
                  <p className="text-sm sm:text-base text-[#E5DDD8] leading-relaxed">
                    {civilServicesMahabharata.aspirantNeed}
                  </p>
                  <p className="text-sm sm:text-base text-[#E5DDD8] leading-relaxed">
                    {civilServicesMahabharata.sarathiiRole}
                  </p>

                  <div className="mt-4 p-4 rounded-2xl bg-[#E6CFA5] text-[#2A0932] shadow-lg text-center font-serif text-sm sm:text-base font-bold">
                    &ldquo;{civilServicesMahabharata.closingMaxim}&rdquo;
                  </div>
                </div>

              </div>

            </div>
          </Container>
        </section>

        {/* =================================================================== */}
        {/* 2. KNOW THY SARATHII — J. P. SINGH */}
        {/* =================================================================== */}
        <section id="know-thy-sarathii" className="py-14 lg:py-20 bg-[#FDFBF7] border-b border-[#E5DDD8]/70">
          <Container>
            <div className="max-w-4xl mx-auto text-center space-y-3 mb-10">
              <SectionHeading
                align="center"
                kicker="Chief Mentor Profile"
                title={
                  <>
                    {knowThySarathii.title} —{' '}
                    <span className="font-serif italic font-normal text-[#7B2A7A]">
                      {knowThySarathii.founderName}
                    </span>
                  </>
                }
                description={knowThySarathii.leadBio}
              />
            </div>

            {/* 4 Prestigious Selections Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {knowThySarathii.fourSelections.map((sel, idx) => (
                <div
                  key={sel.role}
                  className="bg-white p-6 rounded-3xl border border-[#E5DDD8] shadow-sm hover:border-[#D4AF6A] transition-all duration-300 hover:shadow-lg flex flex-col justify-between"
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs uppercase tracking-widest text-[#7B2A7A] font-bold">
                        Selection {sel.role}
                      </span>
                      <div className="w-8 h-8 rounded-lg bg-[#4B1458]/10 text-[#4B1458] flex items-center justify-center">
                        <Award size={16} />
                      </div>
                    </div>
                    <h4 className="font-serif text-xl font-bold text-[#2A0932]">
                      {sel.title}
                    </h4>
                    <p className="text-xs font-semibold text-[#A8823B]">
                      {sel.highlight}
                    </p>
                    <p className="text-xs text-[#5D5060] leading-relaxed pt-1">
                      {sel.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* The Extraordinary Context of Achievement Card */}
            <div className="mt-8 bg-gradient-to-br from-[#2A0932] via-[#380E42] to-[#1A041E] text-white rounded-3xl p-6 sm:p-10 lg:p-12 border-2 border-[#D4AF6A]/40 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF6A]/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#7B2A7A]/25 rounded-full blur-3xl pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                {/* Left Column: Portrait & AI Badge (4 cols) */}
                <div className="lg:col-span-4 space-y-4">
                  <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border-2 border-[#D4AF6A]/60 shadow-2xl bg-[#1A041E]">
                    <Image
                      src="/images/withboard.png"
                      alt="J. P. Singh"
                      fill
                      sizes="(max-width: 1024px) 100vw, 400px"
                      className="object-cover object-[center_top]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A041E]/90 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-3 left-3 right-3 text-left">
                      <div className="text-sm font-serif font-bold text-white">
                        J. P. Singh
                      </div>
                      <div className="text-[11px] text-[#E6CFA5]">
                        Army · PCS (SDM in UP) · IAS · Higher Judiciary
                      </div>
                    </div>
                  </div>

                  {/* AI reflection */}
                  <div className="p-4 rounded-2xl bg-white/[0.06] border border-[#D4AF6A]/40 shadow-inner flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#E6CFA5] text-[#2A0932] flex items-center justify-center shrink-0 mt-0.5">
                      <Bot size={18} />
                    </div>
                    <div>
                      <div className="text-[10px] uppercase font-bold tracking-widest text-[#E6CFA5]">
                        AI Evaluation
                      </div>
                      <div className="font-serif italic text-base text-white font-semibold mt-0.5">
                        &ldquo;{knowThySarathii.aiReflection.quote}&rdquo;
                      </div>
                      <div className="text-[10px] text-[#E5DDD8]/70 mt-1">
                        Reflecting upon his rare multifaceted achievements across military, administration, judiciary &amp; scholarship.
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column: Heroic Context Text (8 cols) */}
                <div className="lg:col-span-8 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-xs uppercase tracking-widest text-[#E6CFA5] border border-white/15">
                    <Sparkles size={12} className="text-[#D4AF6A]" />
                    <span>{knowThySarathii.extraordinaryContext.headline}</span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal leading-tight">
                    {knowThySarathii.extraordinaryContext.lead}
                  </h3>

                  <div className="space-y-3 text-sm sm:text-base text-[#E5DDD8] leading-relaxed">
                    <p>{knowThySarathii.extraordinaryContext.paragraphs[0]}</p>
                    <p className="p-3.5 rounded-xl bg-white/[0.05] border-l-4 border-[#D4AF6A] text-[#FFFDF9] font-medium">
                      {knowThySarathii.extraordinaryContext.paragraphs[1]}
                    </p>
                    <p className="italic font-serif text-[#E6CFA5]">
                      &ldquo;{knowThySarathii.extraordinaryContext.paragraphs[2]}&rdquo;
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                    {knowThySarathii.extraordinaryContext.bulletPoints.map((pt, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2.5 p-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-xs text-[#E5DDD8]"
                      >
                        <CheckCircle2 size={14} className="text-[#D4AF6A] shrink-0 mt-0.5" />
                        <span className="leading-snug">{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Research & Scholarship */}
            <div className="mt-8 bg-[#F8F5F2] rounded-3xl p-6 sm:p-8 lg:p-10 border border-[#E5DDD8] flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-3 max-w-3xl">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#7B2A7A]">
                  <Globe size={15} className="text-[#D4AF6A]" />
                  <span>{knowThySarathii.researchAndScholarship.headline}</span>
                </div>
                <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#2A0932]">
                  Global Scholarship &amp; Timeless Authorship
                </h4>
                <p className="text-sm sm:text-base text-[#4A3E4D] leading-relaxed">
                  {knowThySarathii.researchAndScholarship.description}
                </p>
              </div>

              <div className="shrink-0">
                <Link
                  href="/books"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm uppercase tracking-wider font-bold text-[#2A0932] bg-[#E6CFA5] hover:bg-white transition-all shadow-md whitespace-nowrap"
                >
                  <span>Explore Literary Works</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* By Choosing Him as a Mentor, an Aspirant Gains (5 Pillars) */}
            <div className="mt-12 space-y-6">
              <div className="text-center max-w-3xl mx-auto space-y-2">
                <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#7B2A7A]">
                  The Mentor&apos;s Gift to Serious Aspirants
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#2A0932] font-normal">
                  By Choosing Him as a Mentor, an Aspirant Gains:
                </h3>
                <p className="text-sm sm:text-base text-[#6E6271]">
                  More than four decades of distinguished service in the Indian Army, the IAS, the Judiciary, and research—combined with extensive engagement across all sections of society—endow him with rare practical wisdom.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {knowThySarathii.aspirantGains.map((gain) => (
                  <div
                    key={gain.number}
                    className="bg-white rounded-3xl p-6 sm:p-7 border border-[#E5DDD8] hover:border-[#D4AF6A] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="w-8 h-8 rounded-full bg-[#2A0932] text-[#D4AF6A] font-serif text-xs font-bold flex items-center justify-center">
                          {gain.number}
                        </span>
                        <span className="text-xs uppercase tracking-wider text-[#7B2A7A] font-bold">
                          {gain.pillar}
                        </span>
                      </div>

                      <h4 className="font-serif text-xl font-bold text-[#2A0932] leading-snug group-hover:text-[#4B1458] transition-colors">
                        {gain.title}
                      </h4>

                      <p className="text-xs sm:text-sm text-[#5D5060] leading-relaxed">
                        {gain.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* =================================================================== */}
        {/* 2.5 THE SIX PILLARS OF THE SARATHII METHOD & THE SARATHII PROMISE */}
        {/* =================================================================== */}
        <section id="six-pillars" className="py-14 lg:py-20 bg-[#FFFDF9] border-b border-[#E5DDD8]">
          <Container>
            <div className="max-w-4xl mx-auto text-center space-y-4 mb-12">
              <SectionHeading
                align="center"
                kicker="The Sarathii Standard"
                title="The Six Pillars of the Sarathii Method"
                description="Every successful candidate develops knowledge. Only a few develop the ability to apply that knowledge effectively under examination conditions. The Sarathii Method is built upon six fundamental pillars that transform an aspirant from a student into a successful Civil Services candidate."
              />
            </div>

            {/* 6 Pillars Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {sixPillars.map((pillar, idx) => {
                const PillarIcon = pillarIconList[idx] || Sparkles

                return (
                  <div
                    key={pillar.number}
                    className="bg-[#FDFBF7] rounded-3xl p-6 sm:p-8 border border-[#E5DDD8] hover:border-[#D4AF6A] transition-all duration-300 hover:shadow-lg flex flex-col justify-between"
                  >
                    <div className="space-y-3.5">
                      <div className="flex items-center justify-between">
                        <span className="text-xs uppercase tracking-widest text-[#7B2A7A] font-bold px-3 py-1 rounded-full bg-[#4B1458]/5 border border-[#4B1458]/10 font-serif">
                          Pillar {pillar.number}
                        </span>
                        <div className="w-8 h-8 rounded-lg bg-[#2A0932] text-[#D4AF6A] flex items-center justify-center">
                          <PillarIcon size={16} />
                        </div>
                      </div>

                      <h3 className="font-serif text-xl sm:text-2xl text-[#2A0932] font-semibold leading-snug">
                        {pillar.title}
                      </h3>

                      <p className="font-serif text-xs italic text-[#7B2A7A]">
                        &ldquo;{pillar.tagline}&rdquo;
                      </p>

                      <p className="text-sm text-[#4A3E4D] leading-relaxed">
                        {pillar.description}
                      </p>

                      {pillar.fourQuestions && (
                        <div className="pt-2 space-y-1.5 border-t border-[#E5DDD8]">
                          <div className="text-[11px] font-bold uppercase tracking-wider text-[#2A0932]">
                            Four Essential Questions:
                          </div>
                          <ul className="text-xs text-[#5D5060] space-y-1 list-disc list-inside">
                            {pillar.fourQuestions.map((q, i) => (
                              <li key={i}>{q}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>

                    <div className="mt-4 pt-3 border-t border-[#E5DDD8] text-xs font-serif italic text-[#A8823B]">
                      &ldquo;{pillar.quote}&rdquo;
                    </div>
                  </div>
                )
              })}
            </div>

            {/* The Sarathii Promise Banner */}
            <div className="mt-12 max-w-5xl mx-auto bg-gradient-to-r from-[#2A0932] via-[#350C3E] to-[#1F0724] text-white rounded-3xl p-8 sm:p-10 border-2 border-[#D4AF6A]/40 text-center space-y-4 shadow-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-xs uppercase tracking-widest text-[#E6CFA5] border border-white/15">
                <Award size={14} className="text-[#D4AF6A]" />
                <span>{sarathiiPromise.title}</span>
              </div>

              <p className="font-serif text-lg sm:text-2xl italic text-[#FFFDF9] max-w-3xl mx-auto leading-relaxed">
                &ldquo;{sarathiiPromise.paragraphs[0]}&rdquo;
              </p>

              <div className="pt-2 flex justify-center">
                <div className="px-6 py-2.5 rounded-full bg-[#E6CFA5] text-[#2A0932] font-serif text-sm sm:text-base font-bold shadow-md">
                  {sarathiiPromise.credo}
                </div>
              </div>
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
              kicker="Sarathii Foundation · Chronology of Service"
              title="Career Milestones &amp; Public Stewardship of Our Chief Mentor"
              description="A progressive trajectory of public service, policy innovation, and nationwide administrative impact that provides living case studies for Sarathii aspirants."
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
                        <span className="text-xs font-bold text-[#A8823B] flex items-center gap-1.5 bg-[#D4AF6A]/10 px-3 py-1 rounded-full border border-[#D4AF6A]/30">
                          <Sparkles size={12} className="text-[#D4AF6A]" />
                          <span>Verified Public Record</span>
                        </span>
                      </div>

                      <h3 className="font-serif text-2xl sm:text-3xl text-[#2A0932] font-semibold">
                        {milestone.title}
                      </h3>

                      <p className="text-sm sm:text-base text-[#4A3E4D] leading-relaxed font-normal">
                        {milestone.description}
                      </p>

                      <div className="pt-3.5 border-t border-[#E5DDD8] flex items-center gap-2 text-xs sm:text-sm text-[#2A0932] font-medium bg-[#FBF8F4] -mx-6 -mb-6 sm:-mx-8 sm:-mb-8 px-6 sm:px-8 py-4 rounded-b-3xl">
                        <Sparkles size={15} className="text-[#D4AF6A] shrink-0" />
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
              kicker="Distinguished Public Record"
              title="Verified Achievements &amp; Honors Guiding Sarathii"
              description="Real-world leadership honors earned through uncompromised integrity, systemic reform, and dedicated national service."
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
                      <span className="text-xs uppercase tracking-widest text-[#7B2A7A] font-bold px-3 py-1 rounded-full bg-[#4B1458]/5 border border-[#4B1458]/10">
                        {achievement.domain}
                      </span>
                    </div>

                    <h3 className="font-serif text-lg sm:text-xl text-[#2A0932] font-semibold leading-snug group-hover:text-[#4B1458] transition-colors">
                      {achievement.title}
                    </h3>

                    <p className="text-sm text-[#5D5060] leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* =================================================================== */}
        {/* 6. THE EXPERIENCE ARCHIVE (INTERACTIVE 5-CATEGORY ARCHIVE) */}
        {/* =================================================================== */}
        <ExperienceArchive />

        {/* =================================================================== */}
        {/* 7. MAJOR PUBLIC POLICY & REFORMS ARCHIVE */}
        {/* =================================================================== */}
        <ProjectArchive />

        {/* =================================================================== */}
        {/* 8. PRESIDENTIAL INTAKE INVITATION (FINAL CTA) */}
        {/* =================================================================== */}
        <section className="py-12 lg:py-16 bg-[#FFFDF9]">
          <Container>
            <div className="bg-gradient-to-r from-[#2A0932] via-[#3B0E45] to-[#1A041E] text-white rounded-3xl p-8 sm:p-12 lg:p-14 border border-[#D4AF6A]/40 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
              {/* Background ambient lighting */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-[#D4AF6A]/15 rounded-full blur-3xl pointer-events-none" />

              <div className="space-y-3 text-center lg:text-left max-w-2xl relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs uppercase tracking-widest font-bold text-[#E6CFA5] border border-white/15">
                  <Sparkles size={12} className="text-[#D4AF6A]" />
                  <span>Direct Mentorship at Sarathii</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#FFFDF9] font-normal leading-tight">
                  Seek Guidance from Sarathii &amp; Founder J. P. Singh
                </h3>
                <p className="text-sm sm:text-base text-[#E5DDD8]/90 leading-relaxed">
                  Begin with a focused diagnostic evaluation of your preparation trajectory, answer writing maturity, and administrative reasoning directly with Sarathii&apos;s Chief Mentor, J. P. Singh.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 relative z-10 shrink-0 w-full lg:w-auto justify-center">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3 rounded-full text-xs uppercase tracking-[0.12em] font-semibold text-[#2A0932] bg-[#E6CFA5] hover:bg-[#FFFDF9] shadow-xl transition-all hover:scale-105 active:scale-95 whitespace-nowrap shrink-0"
                >
                  <span className="whitespace-nowrap">Request Diagnostic Intake</span>
                  <ArrowRight size={14} />
                </Link>
                <Link
                  href="/books"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full text-xs uppercase tracking-[0.12em] font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all whitespace-nowrap shrink-0"
                >
                  <span className="whitespace-nowrap">Explore Literary Works</span>
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
