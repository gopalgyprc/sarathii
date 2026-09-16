'use client'

import React, { useEffect, useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Award, Landmark, Compass, Target, Sparkles } from 'lucide-react'
import { Container } from '@/components/ui/Container'

const statIcons = [
  <Award key="award" size={22} className="text-[#D4AF6A]" />,
  <Landmark key="landmark" size={22} className="text-[#D4AF6A]" />,
  <Compass key="compass" size={22} className="text-[#D4AF6A]" />,
  <Target key="target" size={22} className="text-[#D4AF6A]" />,
]

const statsData = [
  {
    value: '50+',
    label: 'Years of Experience',
    description: 'Across Public Administration, Armed Forces & Judicial Service',
    numericTarget: 50,
    suffix: '+',
  },
  {
    value: '5',
    label: 'Domains of Service',
    description: 'IAS, Armed Forces, Judiciary, Literature & Policy Reform',
    numericTarget: 5,
    suffix: '',
  },
  {
    value: '100%',
    label: 'Leadership Mindset',
    description: 'Cultivating strategic, ethical, and calm decision-making',
    numericTarget: 100,
    suffix: '%',
  },
  {
    value: '1:1',
    label: 'Outcome Mentorship',
    description: 'Bespoke strategic roadmaps tailored for serious aspirants',
    numericTarget: 0,
    suffix: '',
  },
]

function AnimatedStatNumber({
  value,
  numericTarget,
  suffix,
}: {
  value: string
  numericTarget: number
  suffix: string
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })
  const [displayNumber, setDisplayNumber] = useState(numericTarget > 0 ? '0' : value)

  useEffect(() => {
    if (!isInView || numericTarget === 0) return

    let current = 0
    const duration = 1400
    const stepTime = 30
    const steps = duration / stepTime
    const increment = numericTarget / steps

    const timer = setInterval(() => {
      current += increment
      if (current >= numericTarget) {
        setDisplayNumber(`${numericTarget}${suffix}`)
        clearInterval(timer)
      } else {
        setDisplayNumber(`${Math.floor(current)}${suffix}`)
      }
    }, stepTime)

    return () => clearInterval(timer)
  }, [isInView, numericTarget, suffix])

  return (
    <span
      ref={ref}
      style={{ fontFamily: "var(--font-sans), 'Poppins', sans-serif" }}
      className="font-sans font-extrabold text-4xl sm:text-5xl lg:text-[3.4rem] tracking-tight bg-gradient-to-b from-[#FFFDF9] via-[#F3EDE7] to-[#E6CFA5] bg-clip-text text-transparent leading-none select-none drop-shadow-sm"
    >
      {numericTarget > 0 ? displayNumber : value}
    </span>
  )
}

export function ImpactStrip() {
  return (
    <section className="bg-gradient-to-b from-[#350C3E] via-[#2A0932] to-[#1F0724] text-[#FFFDF9] py-8 sm:py-12 relative overflow-hidden">
      {/* Decorative Gold Border Dividers */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF6A]/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF6A]/30 to-transparent" />

      {/* Ambient Radial Lighting in Background */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#7B2A7A]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-[#D4AF6A]/10 rounded-full blur-3xl pointer-events-none" />

      <Container>
        {/* 4 Luxury Stat Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {statsData.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="group relative bg-white/[0.04] hover:bg-white/[0.08] backdrop-blur-md rounded-2xl sm:rounded-3xl p-6 sm:p-7 border border-[#D4AF6A]/20 hover:border-[#D4AF6A]/50 transition-all duration-300 shadow-[0_8px_24px_rgba(0,0,0,0.2)] flex flex-col items-center text-center overflow-hidden"
            >
              {/* Subtle top-right golden shimmer accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#D4AF6A]/10 to-transparent rounded-bl-full pointer-events-none" />

              {/* Icon Container with Gold Glow */}
              <div className="w-12 h-12 rounded-2xl bg-[#4B1458] border border-[#D4AF6A]/35 flex items-center justify-center mb-5 shadow-inner group-hover:scale-110 group-hover:border-[#D4AF6A] transition-all duration-300">
                {statIcons[index]}
              </div>

              {/* Number with Poppins Font & Count-Up Animation */}
              <div className="mb-2.5 flex items-center justify-center">
                <AnimatedStatNumber
                  value={stat.value}
                  numericTarget={stat.numericTarget}
                  suffix={stat.suffix}
                />
              </div>

              {/* Label */}
              <div
                style={{ fontFamily: "var(--font-sans), 'Poppins', sans-serif" }}
                className="font-sans text-xs sm:text-sm uppercase tracking-[0.16em] font-bold text-[#FFFDF9] mt-1 group-hover:text-[#E6CFA5] transition-colors"
              >
                {stat.label}
              </div>

              {/* Description */}
              <p
                style={{ fontFamily: "var(--font-sans), 'Poppins', sans-serif" }}
                className="font-sans text-xs text-[#E5DDD8]/75 mt-2 max-w-[240px] leading-relaxed"
              >
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
