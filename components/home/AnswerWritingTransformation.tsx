'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FileText,
  LayoutGrid,
  ArrowRight,
  Scale,
  Award,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  TrendingUp,
} from 'lucide-react'
import { answerWritingTransformationSteps } from '@/data/philosophy'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'

const stepIcons = [
  <FileText key="raw" size={20} />,
  <LayoutGrid key="struct" size={20} />,
  <ArrowRight key="logic" size={20} />,
  <Scale key="balance" size={20} />,
  <Award key="precise" size={20} />,
]

export function AnswerWritingTransformation() {
  const [activeStepIndex, setActiveStepIndex] = useState(0)

  const activeStep = answerWritingTransformationSteps[activeStepIndex]

  return (
    <section className="py-10 lg:py-14 bg-[#FFFDF9] relative overflow-hidden border-t border-b border-[#E5DDD8]/60">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 left-0 w-[450px] h-[450px] bg-[#4B1458]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[450px] h-[450px] bg-[#D4AF6A]/10 rounded-full blur-3xl pointer-events-none" />

      <Container>
        <SectionHeading
          align="center"
          kicker="03 / The Sarathii Expression Standard"
          title={
            <>
              Knowledge Is Not Enough —{' '}
              <span className="font-serif italic font-normal text-[#7B2A7A]">
                The Examiner Sees What You Communicate
              </span>
            </>
          }
          description="In UPSC Mains, the examiner never meets you in person. They only see your 150 or 250 words on paper. See how the Sarathii Method transforms scattered raw facts into high-scoring administrative answers."
        />

        {/* 5-Step Process Pipeline */}
        <div className="mt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4">
            {answerWritingTransformationSteps.map((step, idx) => {
              const isSelected = activeStepIndex === idx
              const isPassed = activeStepIndex > idx

              return (
                <button
                  key={step.number}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`p-4 sm:p-5 rounded-2xl text-left transition-all duration-300 border flex flex-col justify-between relative ${
                    isSelected
                      ? 'bg-[#4B1458] text-white border-[#4B1458] shadow-md -translate-y-1 ring-2 ring-[#D4AF6A]/50'
                      : 'bg-[#FBF8F4] hover:bg-white text-[#1F1722] border-[#E5DDD8] hover:border-[#D4AF6A]'
                  }`}
                  data-cursor="explore"
                >
                  <div className="flex items-center justify-between mb-3 w-full">
                    <span
                      className={`text-xs sm:text-sm font-bold uppercase tracking-wider ${
                        isSelected ? 'text-[#D4AF6A]' : 'text-[#7B2A7A]'
                      }`}
                    >
                      Stage {step.number}
                    </span>

                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                        isSelected
                          ? 'bg-[#E6CFA5] text-[#2A0932] shadow-sm'
                          : isPassed
                          ? 'bg-[#4B1458]/10 text-[#4B1458]'
                          : 'bg-white text-[#6E6271]'
                      }`}
                    >
                      {stepIcons[idx]}
                    </div>
                  </div>

                  <div>
                    <h3
                      className={`text-base sm:text-lg font-bold tracking-tight leading-snug ${
                        isSelected ? 'text-white' : 'text-[#2A0932]'
                      }`}
                    >
                      {step.title}
                    </h3>
                    <p
                      className={`text-xs sm:text-sm mt-1 line-clamp-1 ${
                        isSelected ? 'text-[#E6CFA5]' : 'text-[#6E6271]'
                      }`}
                    >
                      {step.subtitle}
                    </p>
                  </div>
                </button>
              )
            })}
          </div>
        </div>

        {/* Dynamic Step Detail Card */}
        <div className="mt-5 max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep.number}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-[#E5DDD8] shadow-xl relative overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
                {/* Left Description Column */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#4B1458]/10 text-[#4B1458] text-xs sm:text-sm uppercase tracking-wider font-bold border border-[#4B1458]/20">
                    <Sparkles size={13} className="text-[#D4AF6A]" />
                    <span>Writing Progression · Step {activeStep.number} of 05</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl lg:text-[2.4rem] font-bold text-[#2A0932] leading-tight">
                    {activeStep.title} —{' '}
                    <span className="font-serif italic font-normal text-[#7B2A7A]">
                      {activeStep.subtitle}
                    </span>
                  </h3>

                  <p className="text-sm sm:text-base lg:text-[1.05rem] text-[#6E6271] leading-relaxed font-normal">
                    {activeStep.description}
                  </p>

                  <div className="flex items-center gap-3 pt-2">
                    <button
                      onClick={() =>
                        setActiveStepIndex((prev) =>
                          prev < answerWritingTransformationSteps.length - 1 ? prev + 1 : 0
                        )
                      }
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm uppercase tracking-wider font-bold text-white bg-[#4B1458] hover:bg-[#350C3E] transition-all shadow-md hover:scale-105 active:scale-95"
                    >
                      <span>
                        {activeStepIndex === answerWritingTransformationSteps.length - 1
                          ? 'Restart Flow'
                          : 'Next Transformation Stage'}
                      </span>
                      <ArrowRight size={15} />
                    </button>
                  </div>
                </div>

                {/* Right Examiner Impact Column */}
                <div className="lg:col-span-5 bg-[#FBF8F4] rounded-2xl p-6 sm:p-7 border border-[#E5DDD8] space-y-3.5 shadow-inner">
                  <div className="flex items-center gap-2 text-xs sm:text-sm uppercase tracking-wider text-[#7B2A7A] font-bold">
                    <TrendingUp size={16} className="text-[#D4AF6A]" />
                    <span>Examiner Impact & Perception</span>
                  </div>

                  <blockquote className="font-serif italic text-base sm:text-lg lg:text-xl text-[#2A0932] leading-snug border-l-2 border-[#D4AF6A] pl-3.5 py-1">
                    &ldquo;{activeStep.examinerImpact}&rdquo;
                  </blockquote>

                  <p className="text-xs sm:text-sm text-[#6E6271] leading-relaxed pt-1 font-normal">
                    The difference between an average score and a top-bracket rank is structural framing and judicial balance.
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Guiding Principle Banner */}
        <div className="mt-6 bg-gradient-to-r from-[#2A0932] via-[#4B1458] to-[#2A0932] text-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-center shadow-lg border border-[#D4AF6A]/30 max-w-4xl mx-auto">
          <p className="font-serif italic text-xl sm:text-2xl lg:text-[1.85rem] text-[#FFFDF9] font-normal leading-relaxed">
            &ldquo;Clear writing is the mirror of a clear mind. Structure is what turns raw knowledge into persuasive administrative reasoning.&rdquo;
          </p>
          <span className="text-xs sm:text-sm uppercase tracking-widest text-[#E6CFA5] font-bold block mt-3">
            — Jay Prakash Singh, Founder & Chief Mentor
          </span>
        </div>
      </Container>
    </section>
  )
}
