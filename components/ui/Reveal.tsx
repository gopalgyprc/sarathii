'use client'

import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'

interface RevealProps {
  children: React.ReactNode
  delay?: number
  duration?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  className?: string
  width?: 'fit-content' | '100%'
}

export function Reveal({
  children,
  delay = 0,
  duration = 0.6,
  direction = 'up',
  className = '',
  width = '100%',
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion()

  const getVariants = () => {
    if (shouldReduceMotion) {
      return {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }
    }

    switch (direction) {
      case 'up':
        return {
          hidden: { opacity: 0, y: 28 },
          visible: { opacity: 1, y: 0 },
        }
      case 'down':
        return {
          hidden: { opacity: 0, y: -28 },
          visible: { opacity: 1, y: 0 },
        }
      case 'left':
        return {
          hidden: { opacity: 0, x: 28 },
          visible: { opacity: 1, x: 0 },
        }
      case 'right':
        return {
          hidden: { opacity: 0, x: -28 },
          visible: { opacity: 1, x: 0 },
        }
      case 'none':
      default:
        return {
          hidden: { opacity: 0, scale: 0.96 },
          visible: { opacity: 1, scale: 1 },
        }
    }
  }

  return (
    <motion.div
      variants={getVariants()}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        duration: shouldReduceMotion ? 0.2 : duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={className}
      style={{ width }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerContainer({
  children,
  className = '',
  staggerDelay = 0.1,
}: {
  children: React.ReactNode
  className?: string
  staggerDelay?: number
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      transition={{ staggerChildren: staggerDelay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
