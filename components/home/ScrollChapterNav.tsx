'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface Chapter {
  id: string
  number: string
  label: string
}

const chapters: Chapter[] = [
  { id: 'what-is-sarathii', number: '01', label: 'SARATHII' },
  { id: 'philosophy', number: '02', label: 'PHILOSOPHY' },
  { id: 'why-sarathii', number: '03', label: 'PILLARS' },
  { id: 'answer-simulator', number: '04', label: 'WRITING' },
  { id: 'sarathii-method', number: '05', label: 'METHOD' },
  { id: 'mentor-classroom', number: '06', label: 'CLASSROOM' },
  { id: 'founder-journey', number: '07', label: 'EXPERIENCE' },
]

export function ScrollChapterNav() {
  const [activeChapterId, setActiveChapterId] = useState<string>('what-is-sarathii')
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero (e.g. 280px)
      if (window.scrollY > 280) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }

      // Detect which section is in viewport
      const scrollPosition = window.scrollY + window.innerHeight * 0.35

      for (let i = chapters.length - 1; i >= 0; i--) {
        const el = document.getElementById(chapters[i].id)
        if (el && el.offsetTop <= scrollPosition) {
          setActiveChapterId(chapters[i].id)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  if (!isVisible) return null

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.3 }}
      className="fixed right-4 xl:right-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-end gap-3 pointer-events-auto select-none"
    >
      <div className="bg-[#1A041E]/92 backdrop-blur-md p-3.5 rounded-2xl border border-[#D4AF6A]/40 shadow-2xl flex flex-col gap-1.5 w-44">
        {/* Header */}
        <div className="flex items-center justify-between pb-2 border-b border-white/10 mb-1 px-1">
          <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-[#E6CFA5]">
            CHAPTER INDEX
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF6A] animate-pulse" />
        </div>

        {/* All Chapters Always Visible */}
        {chapters.map((chapter) => {
          const isActive = activeChapterId === chapter.id

          return (
            <button
              key={chapter.id}
              onClick={() => scrollToSection(chapter.id)}
              className={`group flex items-center justify-between gap-2.5 w-full text-left px-2 py-1.5 rounded-xl transition-all duration-200 cursor-pointer focus:outline-none ${
                isActive
                  ? 'bg-white/10 border border-[#D4AF6A]/50 shadow-sm'
                  : 'hover:bg-white/5 border border-transparent'
              }`}
              aria-label={`Scroll to chapter ${chapter.number}: ${chapter.label}`}
              data-cursor="explore"
            >
              {/* Number and Label */}
              <div className="flex items-center gap-1.5 min-w-0">
                <span
                  className={`text-[10px] font-mono font-bold shrink-0 transition-colors ${
                    isActive ? 'text-[#D4AF6A]' : 'text-[#E6CFA5]/70 group-hover:text-[#E6CFA5]'
                  }`}
                >
                  {chapter.number}
                </span>
                <span
                  className={`text-[10px] font-bold tracking-wide truncate transition-colors font-mono ${
                    isActive
                      ? 'text-[#FFFDF9] font-extrabold'
                      : 'text-[#E5DDD8]/80 group-hover:text-white'
                  }`}
                >
                  {chapter.label}
                </span>
              </div>

              {/* Indicator Pip */}
              <div
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 shrink-0 ${
                  isActive
                    ? 'bg-[#D4AF6A] scale-125 ring-2 ring-[#D4AF6A]/60 shadow-[0_0_8px_#D4AF6A]'
                    : 'bg-white/25 group-hover:bg-[#D4AF6A]/60'
                }`}
              />
            </button>
          )
        })}
      </div>
    </motion.div>
  )
}
