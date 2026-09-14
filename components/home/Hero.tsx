'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Award, Shield, CheckCircle2, Compass, BookOpen } from 'lucide-react'
import { siteConfig } from '@/data/site'
import { Container } from '@/components/ui/Container'

const headlineVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
}

export function Hero() {
  return (
    <section className="relative min-h-[92vh] lg:min-h-[96vh] pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center bg-radial-hero overflow-hidden">
      {/* Animated Ambient background radiance */}
      <motion.div
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.08, 0.16, 0.08],
        }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 left-1/3 -translate-x-1/2 w-[700px] h-[700px] bg-[#7B2A7A] rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1, 1.18, 1],
          opacity: [0.1, 0.22, 0.1],
        }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute bottom-12 right-1/4 w-[550px] h-[550px] bg-[#D4AF6A] rounded-full blur-3xl pointer-events-none"
      />

      {/* Subtle Floating Ambient Particles */}
      <motion.div
        animate={{ y: [-10, 10, -10], rotate: [0, 90, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-32 right-16 w-3 h-3 rounded-full bg-[#D4AF6A]/30 blur-[1px] pointer-events-none hidden md:block"
      />
      <motion.div
        animate={{ y: [12, -12, 12], rotate: [0, -180, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-36 left-20 w-4 h-4 rounded-full bg-[#7B2A7A]/20 blur-[1px] pointer-events-none hidden md:block"
      />

      {/* Decorative Gold Accent Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D4AF6A]/40 to-transparent" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Editorial Copy (7 cols) with Stagger Animation */}
          <motion.div
            variants={headlineVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 space-y-6 sm:space-y-7 text-center lg:text-left z-10"
          >
            {/* Eyebrow Tag with Subtle Shimmer */}
            <motion.div variants={itemVariants} className="inline-block">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#4B1458]/5 border border-[#4B1458]/15 text-xs uppercase tracking-[0.2em] font-semibold text-[#7B2A7A] shadow-sm relative overflow-hidden group">
                <motion.div
                  animate={{ x: ['-100%', '200%'] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', repeatDelay: 1.5 }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none"
                />
                <Sparkles size={13} className="text-[#D4AF6A] animate-pulse" />
                <span>Civil Services & Leadership Mentorship</span>
              </div>
            </motion.div>

            {/* Main Editorial Headline with Animated SVG Underline */}
            <motion.h1
              variants={itemVariants}
              className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-[5.2rem] xl:text-[5.6rem] tracking-tight leading-[0.96] text-[#2A0932] font-normal"
            >
              Transform your <br className="hidden sm:inline" />
              <span className="italic font-normal text-[#7B2A7A] relative inline-block">
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
              <span className="text-[#4B1458] font-serif">excellence.</span>
            </motion.h1>

            {/* Supporting Paragraph */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-[#6E6271] leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal"
            >
              Success in the Civil Services Examination is not determined solely by the volume of knowledge you possess. It is determined by the ability to{' '}
              <strong className="text-[#1F1722] font-semibold">think clearly</strong>,{' '}
              <strong className="text-[#1F1722] font-semibold">analyse objectively</strong>,{' '}
              <strong className="text-[#1F1722] font-semibold">express precisely</strong>, and{' '}
              <strong className="text-[#1F1722] font-semibold">perform confidently</strong> under pressure.
            </motion.p>

            {/* Action Buttons with Micro-interactions */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-1"
            >
              <Link
                href="/contact"
                className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-xs uppercase tracking-[0.16em] font-semibold text-white bg-[#4B1458] hover:bg-[#2A0932] shadow-lg shadow-[#4B1458]/25 hover:shadow-xl hover:shadow-[#4B1458]/35 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 overflow-hidden"
              >
                {/* Button light sweep animation */}
                <motion.div
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none"
                />
                <span>Begin Your Journey</span>
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1.5"
                />
              </Link>

              <Link
                href="/about"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-xs uppercase tracking-[0.16em] font-semibold text-[#4B1458] bg-white/80 border border-[#4B1458]/20 hover:border-[#4B1458] hover:bg-white transition-all duration-300 hover:-translate-y-0.5"
              >
                <span>Discover Sarathii</span>
              </Link>
            </motion.div>

            {/* Trust Note */}
            <motion.div
              variants={itemVariants}
              className="pt-2 flex items-center justify-center lg:justify-start gap-3 text-xs text-[#6E6271] font-serif italic"
            >
              <span className="w-8 h-px bg-[#D4AF6A]" />
              <span>Mentorship grounded in five decades of public administration, defense & judiciary.</span>
            </motion.div>
          </motion.div>

          {/* Right Column: Animated Founder Portrait (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative flex justify-center items-center"
          >
            <div className="relative w-full max-w-[460px] aspect-[4/5] flex items-center justify-center">
              {/* Architectural Soft Arch & Radiant Pulsing Aura */}
              <motion.div
                animate={{ scale: [1, 1.06, 1], opacity: [0.6, 0.85, 0.6] }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute inset-x-8 bottom-0 top-6 rounded-t-full bg-gradient-to-b from-[#E8DCCF]/80 via-[#F3EDE7]/50 to-transparent blur-sm -z-10"
              />
              <motion.div
                animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.35, 0.2] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute inset-0 m-auto w-[340px] sm:w-[400px] h-[340px] sm:h-[400px] rounded-full bg-gradient-to-tr from-[#D4AF6A]/25 via-[#7B2A7A]/20 to-transparent blur-2xl -z-10"
              />

              {/* Dual Rotating Concentric Celestial Orbital Rings */}
              <div className="absolute inset-0 m-auto w-[330px] sm:w-[390px] h-[330px] sm:h-[390px] rounded-full border border-[#D4AF6A]/40 animate-spin-slow pointer-events-none">
                {/* Glowing Satellite Bead */}
                <div className="w-2.5 h-2.5 rounded-full bg-[#D4AF6A] shadow-[0_0_10px_#D4AF6A] absolute top-2 left-1/2 -translate-x-1/2" />
              </div>
              <div className="absolute inset-0 m-auto w-[370px] sm:w-[430px] h-[370px] sm:h-[430px] rounded-full border border-dashed border-[#7B2A7A]/30 animate-spin-slow-reverse pointer-events-none">
                {/* Secondary Satellite Bead */}
                <div className="w-2 h-2 rounded-full bg-[#7B2A7A] shadow-[0_0_8px_#7B2A7A] absolute bottom-4 right-1/4" />
              </div>

              {/* Floating Founder Portrait with Subtle Gentle Breathing Float */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="relative w-full h-[470px] sm:h-[530px] z-10 flex items-end justify-center"
              >
                <div className="relative w-full h-full [mask-image:linear-gradient(to_bottom,black_70%,transparent_98%)] [-webkit-mask-image:linear-gradient(to_bottom,black_70%,transparent_98%)]">
                  <Image
                    src={siteConfig.founderPortrait}
                    alt="Jay Prakash Singh - Founder of Sarathii"
                    fill
                    sizes="(max-width: 768px) 100vw, 460px"
                    className="object-contain object-bottom filter drop-shadow-[0_15px_25px_rgba(75,20,88,0.14)]"
                    priority
                  />
                </div>
              </motion.div>

              {/* Floating Credential Micro-Badge (Top-Left) */}
              <motion.div
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-12 -left-3 sm:-left-6 z-20 glass-card px-3.5 py-2 rounded-2xl shadow-lg border border-[#D4AF6A]/40 flex items-center gap-2 hidden sm:flex"
              >
                <div className="w-7 h-7 rounded-xl bg-[#4B1458] text-[#E6CFA5] flex items-center justify-center text-xs">
                  <Award size={14} />
                </div>
                <div className="text-left">
                  <div className="text-[10px] uppercase font-bold text-[#A8823B] tracking-wider">
                    50+ Years
                  </div>
                  <div className="text-[11px] font-semibold text-[#2A0932]">
                    Public Service
                  </div>
                </div>
              </motion.div>

              {/* Floating Credential Micro-Badge (Right-Center) */}
              <motion.div
                animate={{ y: [4, -4, 4] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute top-28 -right-2 sm:-right-6 z-20 glass-card px-3.5 py-2 rounded-2xl shadow-lg border border-[#D4AF6A]/40 flex items-center gap-2 hidden sm:flex"
              >
                <div className="w-7 h-7 rounded-xl bg-[#4B1458] text-[#E6CFA5] flex items-center justify-center text-xs">
                  <Shield size={14} />
                </div>
                <div className="text-left">
                  <div className="text-[10px] uppercase font-bold text-[#A8823B] tracking-wider">
                    Governance
                  </div>
                  <div className="text-[11px] font-semibold text-[#2A0932]">
                    IAS & Defence
                  </div>
                </div>
              </motion.div>

              {/* Editorial Nameplate Badge - Anchored with Smooth Entrance */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20 glass-card px-6 py-3 rounded-2xl shadow-xl border border-[#D4AF6A]/40 text-center w-[90%] max-w-[320px]"
              >
                <div className="flex items-center justify-center gap-1.5 text-[10px] uppercase tracking-widest text-[#A8823B] font-bold">
                  <Award size={12} className="text-[#D4AF6A]" />
                  <span>Chief Mentor • Founder</span>
                </div>
                <div className="font-serif text-lg text-[#2A0932] font-semibold">
                  Jay Prakash Singh
                </div>
                <div className="text-[11px] text-[#6E6271] tracking-wide">
                  Former IAS • Defence • Judiciary
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
