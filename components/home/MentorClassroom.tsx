'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import {
  BookOpen,
  Brain,
  Search,
  PenTool,
  Scale,
  Award,
  ArrowDown,
  Sparkles,
  CheckCircle2,
} from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { mentorClassroomStages, MentorClassroomStage } from '@/data/mentorship'

const stepIcons = [
  <BookOpen key="know" size={18} />,
  <Brain key="think" size={18} />,
  <Search key="analyse" size={18} />,
  <PenTool key="write" size={18} />,
  <Scale key="judge" size={18} />,
  <Award key="lead" size={18} />,
]

export function MentorClassroom() {
  const [activeStepIndex, setActiveStepIndex] = useState(0)
  const activeStep: MentorClassroomStage = mentorClassroomStages[activeStepIndex]

  return (
    <section
      id="mentor-classroom"
      className="py-12 lg:py-22 bg-[#1A041E] text-white relative overflow-hidden border-t border-b border-[#D4AF6A]/30"
    >
      {/* Cinematic ambient background glow */}
      <div className="absolute top-1/4 right-0 w-[550px] h-[550px] bg-[#7B2A7A]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[500px] h-[500px] bg-[#D4AF6A]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-pattern-dark opacity-30 pointer-events-none" />

      <Container className="relative z-10">
        <SectionHeading
          align="center"
          kicker="06 / The Pedagogical Crucible"
          title={
            <>
              The Mentor&apos;s Classroom —{' '}
              <span className="font-serif italic font-normal text-[#E6CFA5]">
                Knowledge is Only the Beginning
              </span>
            </>
          }
          description="In standard coaching institutions, preparation ends with syllabus completion. In the Sarathii classroom, knowledge is merely the raw material. The purpose of mentorship is to transform that knowledge into the calm, authoritative judgement of a public servant."
          theme="dark"
        />

        <div className="mt-12 lg:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* ============================================================= */}
          {/* LEFT: DIGITAL CLASSROOM TEACHING VISUAL (6 cols) */}
          {/* ============================================================= */}
          <div className="lg:col-span-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative aspect-[4/3] rounded-3xl overflow-hidden border-2 border-[#D4AF6A]/40 shadow-2xl bg-[#2A0932] group"
              data-cursor="explore"
            >
              <Image
                src="/images/digitalboard.png"
                alt="Founder & Chief Mentor Jay Prakash Singh in the Sarathii Digital Classroom"
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                priority
              />

              {/* Subtle glass reflection gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A041E] via-transparent to-transparent opacity-80 pointer-events-none" />

              {/* Visual Caption Pill */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 p-3 sm:p-4 rounded-2xl bg-[#1A041E]/85 backdrop-blur-md border border-[#D4AF6A]/30 text-xs sm:text-sm text-[#E5DDD8] flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#D4AF6A] animate-pulse" />
                  <span className="font-semibold text-white">
                    Direct Diagnostic Boardroom Mentorship
                  </span>
                </div>
                <span className="text-xs text-[#E6CFA5] font-mono font-medium">
                  Jay Prakash Singh
                </span>
              </div>
            </motion.div>
          </div>

          {/* ============================================================= */}
          {/* RIGHT: INTERACTIVE 6-STAGE TRANSFORMATION FLOW (6 cols) */}
          {/* ============================================================= */}
          <div className="lg:col-span-6 space-y-4">
            <div className="text-xs font-bold uppercase tracking-widest text-[#D4AF6A] flex items-center gap-2">
              <Sparkles size={14} />
              <span>The Transformation Pathway: Select a Stage</span>
            </div>

            {/* Stages Stack */}
            <div className="space-y-2.5">
              {mentorClassroomStages.map((stage, idx) => {
                const isActive = activeStepIndex === idx
                const isPassed = activeStepIndex > idx

                return (
                  <button
                    key={stage.step}
                    onClick={() => setActiveStepIndex(idx)}
                    className={`w-full text-left p-3.5 sm:p-4 rounded-2xl transition-all duration-300 border flex items-center justify-between cursor-pointer focus:outline-none ${
                      isActive
                        ? 'bg-[#2A0932] text-white border-[#D4AF6A] shadow-lg ring-1 ring-[#D4AF6A]/50'
                        : isPassed
                        ? 'bg-white/5 text-[#E5DDD8]/90 border-white/10 hover:border-[#D4AF6A]/40'
                        : 'bg-white/[0.02] text-[#E5DDD8]/60 border-white/5 hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      <div
                        className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                          isActive
                            ? 'bg-[#D4AF6A] text-[#2A0932]'
                            : isPassed
                            ? 'bg-white/10 text-[#E6CFA5]'
                            : 'bg-white/5 text-[#E5DDD8]/40'
                        }`}
                      >
                        {stepIcons[idx]}
                      </div>

                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <span
                            className={`text-[11px] font-mono font-bold uppercase ${
                              isActive ? 'text-[#D4AF6A]' : 'text-[#E5DDD8]/50'
                            }`}
                          >
                            Stage {stage.step}
                          </span>
                          <span className="text-xs text-[#E5DDD8]/50 font-medium">·</span>
                          <span
                            className={`text-xs truncate ${
                              isActive ? 'text-[#E6CFA5]' : 'text-[#E5DDD8]/60'
                            }`}
                          >
                            {stage.concept}
                          </span>
                        </div>
                        <h4
                          className={`font-serif text-base sm:text-lg font-semibold tracking-wide truncate ${
                            isActive ? 'text-white' : 'text-[#E5DDD8]'
                          }`}
                        >
                          {stage.name}
                        </h4>
                      </div>
                    </div>

                    <span
                      className={`text-xs font-semibold px-2.5 py-1 rounded-full shrink-0 transition-colors ${
                        isActive
                          ? 'bg-[#D4AF6A] text-[#2A0932]'
                          : 'bg-white/5 text-[#E5DDD8]/60'
                      }`}
                    >
                      {isActive ? 'Active Lens' : 'Explore'}
                    </span>
                  </button>
                )
              })}
            </div>

            {/* Active Stage Callout Box */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep.step}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-[#4B1458]/70 to-[#2A0932]/90 border border-[#D4AF6A]/30 shadow-xl space-y-3"
              >
                <div className="flex items-center justify-between">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#D4AF6A]">
                    Transformation Directive
                  </div>
                  <span className="text-xs text-[#E6CFA5] font-mono">
                    Stage {activeStep.step} / 06
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#E5DDD8] leading-relaxed">
                  {activeStep.description}
                </p>

                <div className="pt-2 border-t border-white/10 flex items-center gap-2 text-xs sm:text-sm font-serif italic text-[#E6CFA5]">
                  <CheckCircle2 size={16} className="text-[#D4AF6A] shrink-0" />
                  <span>&ldquo;{activeStep.transformation}&rdquo;</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </section>
  )
}
