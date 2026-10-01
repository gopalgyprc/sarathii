'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FileText,
  AlertTriangle,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ShieldAlert,
  HelpCircle,
  TrendingUp,
  Scale,
  Award,
} from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import {
  answerWritingSimulationData,
  AnswerDefect,
  AnswerMerit,
} from '@/data/mentorship'

type SimulatorTab = 'before' | 'method' | 'after'

export function AnswerWritingSimulator() {
  const [activeTab, setActiveTab] = useState<SimulatorTab>('before')
  const [selectedDefect, setSelectedDefect] = useState<string | null>(null)
  const [selectedMerit, setSelectedMerit] = useState<string | null>(null)

  const data = answerWritingSimulationData

  return (
    <section
      id="answer-simulator"
      className="py-12 lg:py-20 bg-[#FFFDF9] relative overflow-hidden border-t border-[#E5DDD8]/60"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-0 w-[450px] h-[450px] bg-[#4B1458]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[450px] h-[450px] bg-[#D4AF6A]/10 rounded-full blur-3xl pointer-events-none" />

      <Container>
        <SectionHeading
          align="center"
          kicker="04 / The Sarathii Expression Standard"
          title={
            <>
              Knowledge Is Not Enough —{' '}
              <span className="font-serif italic font-normal text-[#7B2A7A]">
                The Examiner Sees What You Communicate
              </span>
            </>
          }
          description="In UPSC Mains, the examiner never meets you in person. They see only your handwriting, your structure, and your precision in 150 or 250 words. Examine the interactive educational simulation below to witness how the Sarathii Method transforms scattered raw facts into high-scoring administrative answers."
        />

        {/* Fictional Question Card */}
        <div className="mt-8 mb-8 p-5 sm:p-6 rounded-2xl bg-[#F8F5F2] border border-[#D4AF6A]/40 shadow-sm max-w-4xl mx-auto">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
            <span className="text-xs font-bold uppercase tracking-wider text-[#7B2A7A] bg-white px-2.5 py-1 rounded-md border border-[#E5DDD8]">
              Simulation Question · {data.wordLimit}
            </span>
            <span className="text-xs font-semibold text-[#8C7D8F]">
              Directive: <strong className="text-[#2A0932]">{data.directive}</strong> ({data.marks})
            </span>
          </div>
          <p className="font-serif text-base sm:text-lg text-[#2A0932] font-semibold leading-snug">
            &ldquo;{data.question}&rdquo;
          </p>
        </div>

        {/* ================================================================= */}
        {/* 3-STAGE MASTER SELECTOR TABS: BEFORE | METHOD | AFTER */}
        {/* ================================================================= */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1.5 rounded-full bg-[#F0EBE5] border border-[#E5DDD8] shadow-inner max-w-md w-full">
            <button
              onClick={() => {
                setActiveTab('before')
                setSelectedDefect(null)
              }}
              className={`flex-1 py-3 px-4 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 ${
                activeTab === 'before'
                  ? 'bg-[#DC2626] text-white shadow-md'
                  : 'text-[#5D5060] hover:text-[#2A0932]'
              }`}
            >
              <AlertTriangle size={15} />
              <span>01. BEFORE</span>
            </button>

            <button
              onClick={() => setActiveTab('method')}
              className={`flex-1 py-3 px-4 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 ${
                activeTab === 'method'
                  ? 'bg-[#4B1458] text-white shadow-md'
                  : 'text-[#5D5060] hover:text-[#2A0932]'
              }`}
            >
              <Sparkles size={15} />
              <span>02. METHOD</span>
            </button>

            <button
              onClick={() => {
                setActiveTab('after')
                setSelectedMerit(null)
              }}
              className={`flex-1 py-3 px-4 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 ${
                activeTab === 'after'
                  ? 'bg-[#059669] text-white shadow-md'
                  : 'text-[#5D5060] hover:text-[#2A0932]'
              }`}
            >
              <CheckCircle2 size={15} />
              <span>03. AFTER</span>
            </button>
          </div>
        </div>

        {/* ================================================================= */}
        {/* TAB PANELS */}
        {/* ================================================================= */}
        <AnimatePresence mode="wait">
          {/* 1. BEFORE PANEL */}
          {activeTab === 'before' && (
            <motion.div
              key="before-panel"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start"
            >
              {/* Left Column: Weak Answer Paper (7 cols) */}
              <div className="lg:col-span-7 bg-white rounded-3xl border border-[#DC2626]/30 shadow-lg p-6 sm:p-8 space-y-4 relative">
                <div className="flex items-center justify-between pb-3 border-b border-[#F0EBE5]">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase text-[#DC2626]">
                    <AlertTriangle size={16} />
                    <span>Unstructured Draft · Typical Coaching Pitfall</span>
                  </div>
                  <span className="text-xs text-[#8C7D8F] font-mono">Word Count: ~210 words</span>
                </div>

                <div className="space-y-4 text-sm sm:text-base text-[#4A3E4D] leading-relaxed font-sans">
                  {data.before.paragraphs.map((p, idx) => {
                    const isHighlighted = selectedDefect && p.defectTag === selectedDefect

                    return (
                      <p
                        key={idx}
                        className={`p-3 rounded-xl transition-all duration-200 border ${
                          isHighlighted
                            ? 'bg-[#FEF2F2] border-[#DC2626] font-medium text-[#991B1B] shadow-sm'
                            : 'bg-[#FFFDF9] border-transparent hover:border-[#E5DDD8]'
                        }`}
                      >
                        {p.text}
                      </p>
                    )
                  })}
                </div>

                {/* Critique verdict footer */}
                <div className="mt-4 p-4 rounded-2xl bg-[#FEF2F2] border border-[#DC2626]/20 text-xs sm:text-sm text-[#991B1B]">
                  <strong>Examiner Impression: </strong>
                  {data.before.critique}
                </div>
              </div>

              {/* Right Column: Defect Diagnostic Inspector (5 cols) */}
              <div className="lg:col-span-5 space-y-3.5">
                <div className="text-xs font-bold uppercase tracking-wider text-[#7B2A7A] flex items-center gap-1.5">
                  <ShieldAlert size={15} />
                  <span>Click a Defect to Highlight in Draft:</span>
                </div>

                {data.before.defects.map((defect) => {
                  const isSelected = selectedDefect === defect.id

                  return (
                    <button
                      key={defect.id}
                      onClick={() =>
                        setSelectedDefect(isSelected ? null : defect.id)
                      }
                      className={`w-full text-left p-4 rounded-2xl border transition-all duration-200 cursor-pointer ${
                        isSelected
                          ? 'bg-[#FEF2F2] border-[#DC2626] shadow-md ring-2 ring-[#DC2626]/20'
                          : 'bg-white border-[#E5DDD8] hover:border-[#DC2626]/50'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-bold text-[#DC2626] flex items-center gap-2">
                          <span
                            className="w-2.5 h-2.5 rounded-full"
                            style={{ backgroundColor: defect.color }}
                          />
                          {defect.label}
                        </span>
                        <span className="text-xs text-[#8C7D8F] font-mono">
                          {isSelected ? 'Active' : 'Inspect'}
                        </span>
                      </div>
                      <p className="text-xs text-[#5D5060] leading-snug">
                        {defect.description}
                      </p>
                    </button>
                  )
                })}

                <button
                  onClick={() => setActiveTab('method')}
                  className="w-full mt-4 py-3.5 px-6 rounded-2xl bg-[#4B1458] text-white hover:bg-[#2A0932] transition-all text-xs uppercase tracking-wider font-bold flex items-center justify-center gap-2 shadow-md cursor-pointer"
                >
                  <span>See Sarathii Method Pipeline</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </motion.div>
          )}

          {/* 2. METHOD PANEL */}
          {activeTab === 'method' && (
            <motion.div
              key="method-panel"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.35 }}
              className="bg-white rounded-3xl border border-[#E5DDD8] shadow-xl p-6 sm:p-10 max-w-4xl mx-auto space-y-8"
            >
              <div className="text-center max-w-2xl mx-auto space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF6A] bg-[#2A0932] px-3 py-1 rounded-full">
                  The Transformation Pipeline
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#2A0932]">
                  How the Sarathii Method Restructures Your Thinking
                </h3>
                <p className="text-xs sm:text-sm text-[#5D5060]">
                  Moving step-by-step from raw memory recall to structured administrative synthesis.
                </p>
              </div>

              {/* 5-Step Animated Sequence */}
              <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 relative">
                {data.methodSteps.map((step, idx) => (
                  <div
                    key={step.number}
                    className="p-4 sm:p-5 rounded-2xl bg-[#F8F5F2] border border-[#E5DDD8] text-center space-y-2 relative group hover:border-[#D4AF6A] transition-all"
                  >
                    <span className="text-xs font-mono font-bold text-[#D4AF6A] block">
                      {step.number}
                    </span>
                    <h4 className="font-serif text-base font-bold text-[#2A0932]">
                      {step.name}
                    </h4>
                    <div className="text-[11px] font-semibold text-[#7B2A7A] uppercase tracking-wider">
                      {step.tagline}
                    </div>
                    <p className="text-xs text-[#5D5060] leading-snug pt-1">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="text-center pt-2">
                <button
                  onClick={() => setActiveTab('after')}
                  className="inline-flex items-center gap-2 py-3.5 px-8 rounded-full bg-[#059669] text-white hover:bg-[#047857] transition-all text-xs uppercase tracking-wider font-bold shadow-lg cursor-pointer hover:scale-105"
                >
                  <span>Review High-Scoring Standard Answer</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </motion.div>
          )}

          {/* 3. AFTER PANEL */}
          {activeTab === 'after' && (
            <motion.div
              key="after-panel"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start"
            >
              {/* Left Column: Structured Answer Paper (7 cols) */}
              <div className="lg:col-span-7 bg-white rounded-3xl border border-[#059669]/30 shadow-xl p-6 sm:p-8 space-y-5 relative">
                <div className="flex items-center justify-between pb-3 border-b border-[#F0EBE5]">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase text-[#059669]">
                    <CheckCircle2 size={16} />
                    <span>The Sarathii Administrative Standard</span>
                  </div>
                  <span className="text-xs text-[#8C7D8F] font-mono">Word Count: ~245 words</span>
                </div>

                <div className="space-y-4 text-xs sm:text-sm text-[#2A0932] leading-relaxed">
                  {data.after.paragraphs.map((p, idx) => {
                    const isHighlighted = selectedMerit && p.meritTag === selectedMerit

                    return (
                      <div
                        key={idx}
                        className={`p-3.5 rounded-xl transition-all duration-200 border ${
                          isHighlighted
                            ? 'bg-[#ECFDF5] border-[#059669] shadow-sm'
                            : 'bg-[#FFFDF9] border-[#E5DDD8]/60'
                        }`}
                      >
                        {p.heading && (
                          <h4 className="font-serif text-sm sm:text-base font-bold text-[#4B1458] mb-1.5 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF6A]" />
                            {p.heading}
                          </h4>
                        )}
                        <p className="whitespace-pre-line text-[#3D3140] leading-relaxed">
                          {p.text}
                        </p>
                      </div>
                    )
                  })}
                </div>

                <div className="mt-4 p-4 rounded-2xl bg-[#ECFDF5] border border-[#059669]/20 text-xs sm:text-sm text-[#065F46]">
                  <strong>Examiner Assessment: </strong>
                  {data.after.summary}
                </div>
              </div>

              {/* Right Column: Merit Inspector (5 cols) */}
              <div className="lg:col-span-5 space-y-3.5">
                <div className="text-xs font-bold uppercase tracking-wider text-[#059669] flex items-center gap-1.5">
                  <Sparkles size={15} />
                  <span>Click an Excellence Hallmark to Inspect:</span>
                </div>

                {data.after.merits.map((merit) => {
                  const isSelected = selectedMerit === merit.id

                  return (
                    <button
                      key={merit.id}
                      onClick={() =>
                        setSelectedMerit(isSelected ? null : merit.id)
                      }
                      className={`w-full text-left p-4 rounded-2xl border transition-all duration-200 cursor-pointer ${
                        isSelected
                          ? 'bg-[#ECFDF5] border-[#059669] shadow-md ring-2 ring-[#059669]/20'
                          : 'bg-white border-[#E5DDD8] hover:border-[#059669]/50'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-bold text-[#065F46] flex items-center gap-2">
                          <span
                            className="w-2.5 h-2.5 rounded-full"
                            style={{ backgroundColor: merit.color }}
                          />
                          {merit.label}
                        </span>
                        <span className="text-xs text-[#8C7D8F] font-mono">
                          {isSelected ? 'Active' : 'Inspect'}
                        </span>
                      </div>
                      <p className="text-xs text-[#5D5060] leading-snug">
                        {merit.description}
                      </p>
                    </button>
                  )
                })}

                <button
                  onClick={() => setActiveTab('before')}
                  className="w-full mt-4 py-3.5 px-6 rounded-2xl bg-[#F8F5F2] text-[#2A0932] hover:bg-[#EAE4DD] border border-[#E5DDD8] transition-all text-xs uppercase tracking-wider font-bold flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Compare with Draft Before</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Clear Educational Simulation Disclaimer */}
        <div className="mt-10 p-4 rounded-2xl bg-[#F8F5F2] border border-[#E5DDD8] text-center max-w-2xl mx-auto text-xs text-[#8C7D8F]">
          <strong>Educational Demonstration:</strong> This simulation is provided solely for educational and structural analysis in Civil Services answer writing. It does not claim or guarantee examination selection or marks.
        </div>
      </Container>
    </section>
  )
}
