'use client'

import React, { useEffect, useState } from 'react'
import { motion, useSpring, useMotionValue } from 'framer-motion'

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false)
  const [cursorText, setCursorText] = useState('')
  const [cursorVariant, setCursorVariant] = useState<'default' | 'hover' | 'explore' | 'read' | 'open'>('default')

  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)

  const springConfig = { damping: 28, stiffness: 350, mass: 0.5 }
  const cursorX = useSpring(mouseX, springConfig)
  const cursorY = useSpring(mouseY, springConfig)

  useEffect(() => {
    // Disable on touch / mobile devices
    if (typeof window === 'undefined' || window.matchMedia('(pointer: coarse)').matches) {
      return
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
      if (!isVisible) setIsVisible(true)

      const target = e.target as HTMLElement | null
      if (!target) return

      // Contextual cursor states
      const clickable = target.closest('button, a, input, select, textarea, [role="button"]')
      const exploreTarget = target.closest('[data-cursor="explore"]')
      const readTarget = target.closest('[data-cursor="read"]')
      const openTarget = target.closest('[data-cursor="open"]')

      if (exploreTarget) {
        setCursorVariant('explore')
        setCursorText('EXPLORE')
      } else if (readTarget) {
        setCursorVariant('read')
        setCursorText('READ')
      } else if (openTarget) {
        setCursorVariant('open')
        setCursorText('OPEN')
      } else if (clickable) {
        setCursorVariant('hover')
        setCursorText('')
      } else {
        setCursorVariant('default')
        setCursorText('')
      }
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [mouseX, mouseY, isVisible])

  if (!isVisible) return null

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-[9999] hidden lg:flex items-center justify-center -translate-x-1/2 -translate-y-1/2 rounded-full font-sans select-none"
      style={{
        x: cursorX,
        y: cursorY,
      }}
      animate={{
        width: cursorVariant === 'default' ? 12 : cursorVariant === 'hover' ? 36 : 64,
        height: cursorVariant === 'default' ? 12 : cursorVariant === 'hover' ? 36 : 64,
        backgroundColor:
          cursorVariant === 'default'
            ? 'rgba(212, 175, 106, 0.75)'
            : cursorVariant === 'hover'
            ? 'rgba(75, 20, 88, 0.2)'
            : 'rgba(75, 20, 88, 0.9)',
        border:
          cursorVariant === 'hover'
            ? '1.5px solid rgba(212, 175, 106, 0.8)'
            : cursorVariant !== 'default'
            ? '1.5px solid rgba(230, 207, 165, 0.9)'
            : 'none',
        backdropFilter: cursorVariant !== 'default' ? 'blur(4px)' : 'none',
      }}
      transition={{ type: 'spring', damping: 25, stiffness: 300 }}
    >
      {cursorText && (
        <motion.span
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.6 }}
          className="text-[9px] uppercase tracking-widest font-extrabold text-[#E6CFA5]"
        >
          {cursorText}
        </motion.span>
      )}
    </motion.div>
  )
}
