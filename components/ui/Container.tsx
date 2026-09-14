import React from 'react'

interface ContainerProps {
  children: React.ReactNode
  className?: string
  size?: 'sm' | 'default' | 'lg' | 'full'
}

export function Container({
  children,
  className = '',
  size = 'default',
}: ContainerProps) {
  const sizeClasses = {
    sm: 'max-w-4xl',
    default: 'max-w-[1420px]',
    lg: 'max-w-[1560px]',
    full: 'max-w-full',
  }

  return (
    <div
      className={`w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-10 ${sizeClasses[size]} ${className}`}
    >
      {children}
    </div>
  )
}
