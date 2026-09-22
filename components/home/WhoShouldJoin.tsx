'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Award, FileText, MapPin, Users, CheckCircle2, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { targetAudiences } from '@/data/philosophy'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'

const iconMap: Record<string, React.ReactNode> = {
  Award: <Award size={24} />,
  FileText: <FileText size={24} />,
  MapPin: <MapPin size={24} />,
  Users: <Users size={24} />,
}

export function WhoShouldJoin() {
  return (
    <section className="py-10 lg:py-14 bg-[#FFFDF9] relative">
      <Container>
        <SectionHeading
          align="center"
          kicker="08 / Alignment & Eligibility"
          title={
            <>
              Who Should Join{' '}
              <span className="italic font-normal text-[#7B2A7A]">
                Sarathii Mentorship?
              </span>
            </>
          }
          description="Sarathii is intentionally designed for disciplined, serious individuals who demand more than superficial tips—those seeking profound intellectual clarity, mastery of written expression, and lifelong leadership principles."
        />

        {/* 4 Audience Profiles in an Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-6">
          {targetAudiences.map((audience, index) => (
            <motion.div
              key={audience.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="bg-[#F8F5F2] rounded-3xl p-5 sm:p-6 border border-[#E5DDD8] hover:border-[#D4AF6A] transition-all duration-300 hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-2xl bg-[#4B1458] text-[#E6CFA5] flex items-center justify-center">
                    {iconMap[audience.icon]}
                  </div>
                  <span className="text-xs uppercase tracking-widest text-[#7B2A7A] font-bold">
                    Profile 0{index + 1}
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl text-[#2A0932] font-semibold mb-2.5">
                  {audience.title}
                </h3>

                <p className="text-base sm:text-lg text-[#3D3141] leading-relaxed mb-4">
                  {audience.description}
                </p>
              </div>

              <div className="pt-3.5 border-t border-[#E5DDD8] flex items-center justify-between">
                <div className="flex items-center gap-2.5 text-sm sm:text-base font-bold text-[#4B1458]">
                  <CheckCircle2 size={16} className="text-[#D4AF6A] shrink-0" />
                  <span>{audience.idealFor}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Action Callout */}
        <div className="mt-8 p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-[#F8F5F2] border border-[#E5DDD8] flex flex-col sm:flex-row items-center justify-between gap-5">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-serif text-xl sm:text-2xl text-[#2A0932] font-semibold">
              Ready to evaluate your current preparation roadmap?
            </h4>
            <p className="text-sm sm:text-base text-[#5E5261]">
              Book an initial diagnostic discussion with Jay Prakash Singh.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-sm uppercase tracking-[0.14em] font-bold text-white bg-[#4B1458] hover:bg-[#2A0932] shadow-md transition-all shrink-0 hover:scale-105 active:scale-95"
          >
            <span>Request Diagnostic Session</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </Container>
    </section>
  )
}
