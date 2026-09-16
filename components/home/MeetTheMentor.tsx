'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Shield,
  Briefcase,
  Scale,
  Feather,
  Compass,
  ArrowRight,
  Sparkles,
  Award,
  Quote,
} from 'lucide-react'
import { journeySteps } from '@/data/about'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'

const iconMap: Record<string, React.ReactNode> = {
  Shield: <Shield size={22} />,
  Briefcase: <Briefcase size={22} />,
  Scale: <Scale size={22} />,
  Feather: <Feather size={22} />,
  Compass: <Compass size={22} />,
}

export function MeetTheMentor() {
  const [activeStep, setActiveStep] = useState(0)

  const currentStep = journeySteps[activeStep]

  return (
    <section className="py-10 lg:py-14 bg-[#FFFDF9] relative overflow-hidden border-b border-[#E5DDD8]/60">
      {/* Background ambient accents */}
      <div className="absolute top-10 right-0 w-[500px] h-[500px] bg-[#4B1458]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[450px] h-[450px] bg-[#D4AF6A]/10 rounded-full blur-3xl pointer-events-none" />

      <Container>
        {/* Section Header */}
        <SectionHeading
          align="center"
          kicker="01 / The Journey of the Charioteer"
          title={
            <>
              Meet Your Mentor:{' '}
              <span className="font-serif italic font-normal text-[#7B2A7A]">
                Jay Prakash Singh
              </span>
            </>
          }
          description="A rare confluence of tactical armed forces discipline, senior civil administrative leadership, judicial tribunal integrity, and classical civilizational authorship."
        />

        {/* 5-Stage Visual Timeline Stepper */}
        <div className="mt-6 relative">
          {/* Horizontal Track (Desktop) */}
          <div className="hidden lg:block absolute top-7 left-[8%] right-[8%] h-[2px] bg-[#E5DDD8] z-0">
            <motion.div
              className="h-full bg-gradient-to-r from-[#4B1458] via-[#7B2A7A] to-[#D4AF6A]"
              initial={false}
              animate={{ width: `${(activeStep / (journeySteps.length - 1)) * 100}%` }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
            />
          </div>

          {/* Stepper Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 relative z-10">
            {journeySteps.map((step, index) => {
              const isActive = activeStep === index
              const isPast = activeStep > index

              return (
                <button
                  key={step.number}
                  onClick={() => setActiveStep(index)}
                  className={`group p-3.5 sm:p-4 rounded-2xl text-left transition-all duration-300 border flex flex-col justify-between ${
                    isActive
                      ? 'bg-[#4B1458] text-white border-[#4B1458] shadow-lg shadow-[#4B1458]/20 -translate-y-1 ring-2 ring-[#D4AF6A]/50'
                      : 'bg-[#FBF8F4] hover:bg-white text-[#1F1722] border-[#E5DDD8] hover:border-[#D4AF6A] shadow-sm'
                  }`}
                  data-cursor="explore"
                >
                  <div className="flex items-center justify-between mb-2 w-full">
                    <span
                      className={`text-[11px] font-bold uppercase tracking-widest ${
                        isActive ? 'text-[#D4AF6A]' : 'text-[#7B2A7A]'
                      }`}
                    >
                      Stage {step.number}
                    </span>

                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                        isActive
                          ? 'bg-[#E6CFA5] text-[#2A0932] shadow-md scale-105'
                          : isPast
                          ? 'bg-[#4B1458]/10 text-[#4B1458]'
                          : 'bg-white text-[#6E6271] group-hover:text-[#4B1458]'
                      }`}
                    >
                      {iconMap[step.icon]}
                    </div>
                  </div>

                  <div>
                    <h3
                      className={`text-sm sm:text-base font-bold tracking-tight ${
                        isActive ? 'text-white' : 'text-[#2A0932]'
                      }`}
                    >
                      {step.title}
                    </h3>
                    <p
                      className={`text-[11px] line-clamp-1 mt-0.5 ${
                        isActive ? 'text-[#E6CFA5]' : 'text-[#6E6271]'
                      }`}
                    >
                      {step.role}
                    </p>
                  </div>
                </button>
              )
            })}
          </div>
        </div>

        {/* Dynamic Detail Card */}
        <div className="mt-5">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className="bg-gradient-to-br from-[#2A0932] via-[#3B0E45] to-[#1F0724] text-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-[#D4AF6A]/30 shadow-xl relative overflow-hidden"
            >
              {/* Watermark Number */}
              <span className="absolute top-4 right-8 font-black text-8xl sm:text-9xl text-white/[0.03] pointer-events-none select-none">
                {currentStep.number}
              </span>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center relative z-10">
                {/* Left Side: Journey Context & Essence */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-white/10 text-[#E6CFA5] text-[11px] uppercase tracking-widest font-bold border border-white/15">
                    <Sparkles size={12} className="text-[#D4AF6A]" />
                    <span>{currentStep.role}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight">
                    {currentStep.title} —{' '}
                    <span className="font-serif italic font-normal text-[#E6CFA5]">
                      {currentStep.essence}
                    </span>
                  </h3>

                  <p className="text-xs sm:text-sm text-[#E5DDD8]/90 leading-relaxed">
                    {currentStep.description}
                  </p>

                  <div className="pt-1 flex flex-wrap items-center gap-3">
                    <Link
                      href="/about"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-bold text-[#2A0932] bg-[#E6CFA5] hover:bg-white transition-all shadow-md hover:scale-105 active:scale-95"
                    >
                      <span>Read Chapter {currentStep.number} in Biography</span>
                      <ArrowRight size={13} />
                    </Link>

                    <span className="text-xs text-[#E5DDD8]/60">
                      Phase {activeStep + 1} of {journeySteps.length}
                    </span>
                  </div>
                </div>

                {/* Right Side: What this means for your UPSC preparation */}
                <div className="lg:col-span-5 bg-white/[0.06] backdrop-blur-md rounded-2xl p-5 sm:p-6 border border-[#D4AF6A]/30 space-y-3 shadow-inner">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#D4AF6A] font-bold">
                    <Award size={15} />
                    <span>Direct Translation for Aspirants</span>
                  </div>

                  <blockquote className="font-serif italic text-base sm:text-lg text-[#FFFDF9] leading-snug border-l-2 border-[#D4AF6A] pl-3 py-0.5">
                    &ldquo;{currentStep.lessonForAspirants}&rdquo;
                  </blockquote>

                  <p className="text-[11px] text-[#E5DDD8]/80 leading-relaxed pt-1">
                    Mentorship at Sarathii is not based on theoretical summaries. It is guided by the exact mental instincts forged across this lived experience.
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Founder Authority Teaser Bar */}
        <div className="mt-6 bg-[#F8F5F2] rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-[#E5DDD8] flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-5">
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 border-[#D4AF6A]/40 shrink-0 bg-[#350C3E]">
              <Image
                src="/images/withboard.png"
                alt="Jay Prakash Singh"
                fill
                className="object-cover object-center"
              />
            </div>
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#7B2A7A]">
                <Quote size={13} className="text-[#D4AF6A]" />
                <span>Founder & Chief Mentor</span>
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-[#2A0932] mt-0.5">
                Jay Prakash Singh
              </h4>
              <p className="text-xs sm:text-sm text-[#6E6271] mt-0.5">
                Ex-Defence Commander · Former Senior Civil Administrator · Judicial Tribunal Member · Author
              </p>
            </div>
          </div>

          <Link
            href="/about"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs uppercase tracking-wider font-bold text-[#4B1458] border border-[#4B1458]/30 hover:bg-[#4B1458] hover:text-white transition-all shrink-0"
          >
            <span>Explore Complete Profile</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </Container>
    </section>
  )
}
