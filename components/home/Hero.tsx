'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, type Variants } from 'framer-motion'
import { ArrowRight, Sparkles, Award, Shield } from 'lucide-react'
import { Container } from '@/components/ui/Container'

const headlineVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
}

export function Hero() {
  return (
    <section className="relative min-h-[90vh] lg:min-h-[95vh] pt-28 pb-0 sm:pt-32 lg:pt-36 flex flex-col justify-between overflow-hidden bg-[#1A041E]">
      {/* Desktop-Only Full-bleed Hero Background Image with Crisp Clarity & Full Headroom */}
      <div className="hidden lg:block absolute inset-0 z-0">
        <Image
          src="/images/withboard.png"
          alt="Jay Prakash Singh - Founder & Chief Mentor of Sarathii conducting a session"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[80%_top] filter brightness-[1.02] contrast-[1.02]"
        />

        {/* Clean Opaque Velvet Scrim: completely blocks out distracting chalkboard text behind UI copy on desktop */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A041E] from-42% via-[#1A041E] via-54% to-transparent w-[62%] pointer-events-none z-[1]" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#1A041E] to-transparent pointer-events-none z-[1]" />
      </div>

      {/* Subtle Mobile Ambient Glow */}
      <div className="lg:hidden absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#2A0932] via-[#1A041E] to-[#1A041E] pointer-events-none z-0" />

      {/* Main Hero Content Container */}
      <Container className="relative z-10 my-auto py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Editorial Copy (7 cols) */}
          <motion.div
            variants={headlineVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 space-y-5 sm:space-y-6 text-center lg:text-left max-w-2xl mx-auto lg:mx-0"
          >
            {/* Eyebrow Tag with Subtle Shimmer */}
            <motion.div variants={itemVariants} className="inline-block">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#2A0932]/90 border border-[#D4AF6A]/40 text-xs uppercase tracking-[0.2em] font-semibold text-[#E6CFA5] shadow-lg backdrop-blur-md relative overflow-hidden group">
                <motion.div
                  animate={{ x: ['-100%', '200%'] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', repeatDelay: 1.5 }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none"
                />
                <Sparkles size={13} className="text-[#D4AF6A] animate-pulse" />
                <span>Sarathii · School of Thought & Leadership Mentorship</span>
              </div>
            </motion.div>

            {/* Main Editorial Headline */}
            <motion.h1
              variants={itemVariants}
              className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-[4.8rem] xl:text-[5.4rem] tracking-tight leading-[0.96] text-[#FFFDF9] font-normal"
            >
              Transform your <br className="hidden sm:inline" />
              <span className="italic font-normal text-[#E6CFA5] relative inline-block">
                potential
                <svg
                  className="absolute -bottom-2 left-0 w-full text-[#D4AF6A] overflow-visible"
                  height="10"
                  viewBox="0 0 120 10"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <motion.path
                    d="M3 8 C 35 1, 85 1, 117 8"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.85 }}
                    transition={{ duration: 1.2, delay: 0.8, ease: 'easeOut' }}
                  />
                </svg>
              </span>{' '}
              into <br />
              <span className="text-[#FFFDF9] font-serif">excellence.</span>
            </motion.h1>

            {/* Mobile / Tablet Featured Mentor Portrait Card */}
            <motion.div variants={itemVariants} className="lg:hidden w-full max-w-sm mx-auto my-3">
              <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border-2 border-[#D4AF6A]/50 shadow-2xl bg-[#1A041E]">
                <Image
                  src="/images/withboard.png"
                  alt="Sarathii Mentorship conducted by Chief Mentor Jay Prakash Singh"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover object-[78%_top]"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A041E]/95 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-2.5 left-3.5 right-3.5 flex items-center justify-between text-left">
                  <div>
                    <div className="text-xs uppercase tracking-wider text-[#D4AF6A] font-bold">
                      Sarathii Mentorship
                    </div>
                    <div className="text-sm font-serif font-bold text-white leading-tight mt-0.5">
                      Jay Prakash Singh · Chief Mentor
                    </div>
                  </div>
                  <span className="text-[10px] sm:text-xs uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-[#2A0932] border border-[#D4AF6A]/40 text-[#E6CFA5]">
                    50+ Yrs Exp
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Supporting Paragraph */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg lg:text-xl text-[#E5DDD8]/95 leading-relaxed font-normal"
            >
              <strong className="text-white font-bold">Sarathii</strong> is a premier civil services mentorship institution founded on the belief that excellence is not an accident. Guided by Founder &amp; Chief Mentor <span className="text-[#E6CFA5] font-semibold">Jay Prakash Singh</span>, Sarathii prepares candidates not merely to complete a syllabus, but to{' '}
              <strong className="text-white font-semibold">think clearly</strong>,{' '}
              <strong className="text-white font-semibold">analyse objectively</strong>,{' '}
              <strong className="text-white font-semibold">express precisely</strong>, and{' '}
              <strong className="text-white font-semibold">perform confidently</strong> under pressure.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2"
            >
              <Link
                href="/contact"
                className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-sm sm:text-base uppercase tracking-[0.14em] font-bold text-[#2A0932] bg-[#E6CFA5] hover:bg-[#FFFDF9] shadow-lg shadow-black/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 overflow-hidden"
              >
                <motion.div
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none"
                />
                <span>Begin Your Journey with Sarathii</span>
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1.5"
                />
              </Link>

              <Link
                href="/about"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm sm:text-base uppercase tracking-[0.14em] font-bold text-white bg-white/10 backdrop-blur-md border border-white/20 hover:border-[#D4AF6A] hover:bg-white/15 transition-all duration-300 hover:-translate-y-0.5"
              >
                <span>Discover Sarathii</span>
              </Link>
            </motion.div>

            {/* Trust Note */}
            <motion.div
              variants={itemVariants}
              className="pt-3 flex items-center justify-center lg:justify-start gap-3 text-sm sm:text-base text-[#E5DDD8]/90 font-serif italic"
            >
              <span className="w-8 h-px bg-[#D4AF6A]" />
              <span>Sarathii is founded on five decades of lived public administration, defense &amp; judicial service.</span>
            </motion.div>
          </motion.div>

          {/* Right Column: Kept completely clean so the mentor portrait and quote on the board are unobstructed */}
          <div className="lg:col-span-5 hidden lg:block" />
        </div>
      </Container>

      {/* Bottom Credential Bar spanning the full width cleanly */}
      <div className="relative z-10 w-full border-t border-white/10 bg-[#1A041E]/90 backdrop-blur-md py-4 sm:py-5">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center divide-x-0 md:divide-x divide-white/10">
            <div className="flex flex-col items-center justify-center px-2">
              <span className="text-lg sm:text-xl font-bold text-[#E6CFA5] font-serif">The Sarathii Method</span>
              <span className="text-xs sm:text-sm text-[#E5DDD8]/90 uppercase tracking-wider font-semibold mt-0.5">Structured Pedagogy</span>
            </div>
            <div className="flex flex-col items-center justify-center px-2">
              <span className="text-lg sm:text-xl font-bold text-[#FFFDF9] font-serif">1:1 Mentorship</span>
              <span className="text-xs sm:text-sm text-[#E5DDD8]/90 uppercase tracking-wider font-semibold mt-0.5">Personalized Evaluation</span>
            </div>
            <div className="flex flex-col items-center justify-center px-2">
              <span className="text-lg sm:text-xl font-bold text-[#E6CFA5] font-serif">50+ Years Lived</span>
              <span className="text-xs sm:text-sm text-[#E5DDD8]/90 uppercase tracking-wider font-semibold mt-0.5">Defence &amp; Civil Service</span>
            </div>
            <div className="flex flex-col items-center justify-center px-2">
              <span className="text-lg sm:text-xl font-bold text-[#FFFDF9] font-serif">School of Thought</span>
              <span className="text-xs sm:text-sm text-[#E5DDD8]/90 uppercase tracking-wider font-semibold mt-0.5">Lifelong Guidance</span>
            </div>
          </div>
        </Container>
      </div>

      {/* Decorative Gold Accent Line */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF6A]/60 to-transparent z-20" />
    </section>
  )
}

