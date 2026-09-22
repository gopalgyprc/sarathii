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
      className={`mb-6 sm:mb-8 ${
        isCenter
          ? 'text-center mx-auto max-w-4xl'
          : isRight
          ? 'text-right ml-auto max-w-4xl'
          : 'max-w-4xl'
      } ${className}`}
    >
      {kicker && (
        <div
          className={`inline-flex items-center gap-2 text-xs sm:text-sm uppercase tracking-[0.22em] font-bold mb-3 ${
            isDark ? 'text-[#D4AF6A]' : 'text-[#7B2A7A]'
          } ${isCenter ? 'justify-center' : ''}`}
        >
          <span
            className={`w-6 h-px ${
              isDark ? 'bg-[#D4AF6A]' : 'bg-[#D4AF6A]'
            }`}
          />
          <span>{kicker}</span>
          {isCenter && (
            <span
              className={`w-6 h-px ${
                isDark ? 'bg-[#D4AF6A]' : 'bg-[#D4AF6A]'
              }`}
            />
          )}
        </div>
      )}

      <h2
        className={`font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] tracking-tight leading-[1.12] font-normal mb-3.5 ${
          isDark ? 'text-[#FFFDF9]' : 'text-[#2A0932]'
        }`}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={`font-serif text-xl sm:text-2xl italic font-normal mb-3 ${
            isDark ? 'text-[#E6CFA5]' : 'text-[#7B2A7A]'
          }`}
        >
          {subtitle}
        </p>
      )}

      {description && (
        <p
          className={`text-base sm:text-lg lg:text-[1.15rem] leading-relaxed max-w-3xl ${
            isDark ? 'text-[#E5DDD8]/90' : 'text-[#5E5261]'
          } ${isCenter ? 'mx-auto' : ''}`}
        >
          {description}
        </p>
      )}

      {children}
    </div>
  )
}
