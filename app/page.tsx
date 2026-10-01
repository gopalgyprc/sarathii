import React from 'react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/home/Hero'
import { ImpactStrip } from '@/components/home/ImpactStrip'
import { WhatIsSarathii } from '@/components/home/WhatIsSarathii'
import { Philosophy } from '@/components/home/Philosophy'
import { WhySarathii } from '@/components/home/WhySarathii'
import { AnswerWritingSimulator } from '@/components/home/AnswerWritingSimulator'
import { SarathiiMethod } from '@/components/home/SarathiiMethod'
import { MentorClassroom } from '@/components/home/MentorClassroom'
import { FounderJourney } from '@/components/home/FounderJourney'
import { ExperienceBridge } from '@/components/home/ExperienceBridge'
import { ThinkingLab } from '@/components/home/ThinkingLab'
import { MentorshipDNA } from '@/components/home/MentorshipDNA'
import { AspirantDiagnostic } from '@/components/home/AspirantDiagnostic'
import { MeetTheMentor } from '@/components/home/MeetTheMentor'
import { BookShowcase } from '@/components/home/BookShowcase'
import { InsightsPreview } from '@/components/home/InsightsPreview'
import { FinalCTA } from '@/components/home/FinalCTA'
import { ScrollChapterNav } from '@/components/home/ScrollChapterNav'

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FFFDF9]">
      <Header />

      {/* Desktop Floating Subtle Chapter Navigator */}
      <ScrollChapterNav />

      <main className="flex-grow">
        {/* 01: HERO & IMPACT STRIP */}
        <Hero />
        <ImpactStrip />

        {/* 02: WHAT IS A SARATHII? — THE POWER OF A GUIDE & CIVIL SERVICES AS MAHABHARATA */}
        <WhatIsSarathii />

        {/* 03: SARATHII PHILOSOPHY */}
        <Philosophy />

        {/* 03: WHY SARATHII — 6 DISCIPLINES INTERACTIVE KNOWLEDGE SYSTEM */}
        <WhySarathii />

        {/* 04: ANSWER WRITING SIMULATOR (BEFORE / METHOD / AFTER) */}
        <AnswerWritingSimulator />

        {/* 05: THE SARATHII METHOD */}
        <SarathiiMethod />

        {/* 06: MENTOR CLASSROOM (DIGITAL BOARD & 6-STAGE TRANSFORMATION FLOW) */}
        <MentorClassroom />

        {/* 07: THE JOURNEY BEHIND SARATHII (5-STAGE TIMELINE: DEFENCE -> MENTORSHIP) */}
        <FounderJourney />

        {/* 08: FROM EXPERIENCE TO MENTORSHIP (VISUAL CONTINUUM BRIDGE) */}
        <ExperienceBridge />

        {/* 09: SARATHII THINKING LAB (MULTI-PERSPECTIVE SIMULATION) */}
        <ThinkingLab />

        {/* 10: MENTORSHIP DNA (ILLUMINATED SEQUENCE) */}
        <MentorshipDNA />

        {/* 11: ASPIRANT DIAGNOSTIC (WHERE ARE YOU IN YOUR JOURNEY?) */}
        <AspirantDiagnostic />

        {/* MEET THE CHIEF MENTOR */}
        <MeetTheMentor />

        {/* 12: BOOK SHOWCASE ("जिन राहों पर सियाराम चले") */}
        <BookShowcase />

        {/* 13: SARATHII JOURNAL & MONOGRAPHS */}
        <InsightsPreview />

        {/* 14: FINAL CTA */}
        <FinalCTA />
      </main>

      <Footer />
    </div>
  )
}
