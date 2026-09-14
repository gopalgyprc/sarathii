import React from 'react'

interface SectionHeadingProps {
  kicker?: string
  title: React.ReactNode
  subtitle?: string
  description?: string
  align?: 'left' | 'center' | 'right'
  theme?: 'light' | 'dark'
  className?: string
  children?: React.ReactNode
}

export function SectionHeading({
  kicker,
  title,
  subtitle,
  description,
  align = 'left',
  theme = 'light',
  className = '',
  children,
}: SectionHeadingProps) {
  const isCenter = align === 'center'
  const isRight = align === 'right'
  const isDark = theme === 'dark'

  return (
    <div
      className={`mb-12 md:mb-14 ${
        isCenter
          ? 'text-center mx-auto max-w-4xl'
          : isRight
          ? 'text-right ml-auto max-w-4xl'
          : 'max-w-4xl'
      } ${className}`}
    >
      {kicker && (
        <div
          className={`inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold mb-3 ${
            isDark ? 'text-[#D4AF6A]' : 'text-[#7B2A7A]'
          }`}
        >
          <span
            className={`w-6 h-px ${
              isDark ? 'bg-[#D4AF6A]' : 'bg-[#D4AF6A]'
            }`}
          />
          <span>{kicker}</span>
        </div>
      )}

      <h2
        className={`font-serif text-3xl sm:text-4xl md:text-5xl lg:text-5xl tracking-tight leading-[1.1] font-normal mb-4 ${
          isDark ? 'text-[#FFFDF9]' : 'text-[#2A0932]'
        }`}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={`font-serif text-lg sm:text-xl italic font-normal mb-3 ${
            isDark ? 'text-[#E6CFA5]' : 'text-[#7B2A7A]'
          }`}
        >
          {subtitle}
        </p>
      )}

      {description && (
        <p
          className={`text-sm sm:text-base leading-relaxed ${
            isDark ? 'text-[#E5DDD8]/80' : 'text-[#6E6271]'
          } ${isCenter ? 'mx-auto' : ''}`}
        >
          {description}
        </p>
      )}

      {children}
    </div>
  )
}
