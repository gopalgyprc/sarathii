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
    <section className="py-20 lg:py-28 bg-[#FFFDF9] relative">
      <Container>
        <SectionHeading
          kicker="05 / Alignment"
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mt-12">
          {targetAudiences.map((audience, index) => (
            <motion.div
              key={audience.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#F8F5F2] rounded-3xl p-8 border border-[#E5DDD8] hover:border-[#D4AF6A] transition-all duration-300 hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#4B1458] text-[#E6CFA5] flex items-center justify-center">
                    {iconMap[audience.icon]}
                  </div>
                  <span className="text-xs uppercase tracking-widest text-[#7B2A7A] font-semibold">
                    Profile 0{index + 1}
                  </span>
                </div>

                <h3 className="font-serif text-2xl text-[#2A0932] font-semibold mb-3">
                  {audience.title}
                </h3>

                <p className="text-sm text-[#6E6271] leading-relaxed mb-6">
                  {audience.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#E5DDD8] flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#4B1458]">
                  <CheckCircle2 size={15} className="text-[#D4AF6A]" />
                  <span>{audience.idealFor}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Action Callout */}
        <div className="mt-12 p-8 rounded-3xl bg-[#F8F5F2] border border-[#E5DDD8] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-serif text-xl text-[#2A0932] font-medium">
              Ready to evaluate your current preparation roadmap?
            </h4>
            <p className="text-xs sm:text-sm text-[#6E6271]">
              Book an initial diagnostic discussion with Jay Prakash Singh.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-xs uppercase tracking-[0.14em] font-semibold text-white bg-[#4B1458] hover:bg-[#2A0932] shadow-md transition-all shrink-0"
          >
            <span>Request Diagnostic Session</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </Container>
    </section>
  )
}
