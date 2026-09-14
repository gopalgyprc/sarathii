'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowRight, ArrowUpRight } from 'lucide-react'
import { siteConfig } from '@/data/site'
import { Container } from '@/components/ui/Container'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'glass-nav py-3 border-b border-[#E5DDD8]/80 shadow-[0_4px_20px_rgba(42,9,50,0.04)]'
            : 'bg-transparent py-5 sm:py-6'
        }`}
      >
        <Container>
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7B2A7A] rounded-lg p-1"
              aria-label="Sarathii Home"
            >
              <div className="relative w-20 sm:w-24 h-12 sm:h-14 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src={siteConfig.logo}
                  alt="Sarathii Logo"
                  fill
                  sizes="96px"
                  className="object-contain"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav
              className="hidden md:flex items-center gap-7 lg:gap-10"
              aria-label="Main Navigation"
            >
              {siteConfig.navItems.map((item) => {
                const isActive =
                  item.href === '/'
                    ? pathname === '/'
                    : pathname.startsWith(item.href)

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`relative text-xs lg:text-sm uppercase tracking-[0.14em] font-medium transition-colors duration-200 py-1 ${
                      isActive
                        ? 'text-[#4B1458] font-bold'
                        : 'text-[#6E6271] hover:text-[#4B1458]'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <motion.span
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#D4AF6A]"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                )
              })}
            </nav>

            {/* Header Right Action */}
            <div className="hidden md:flex items-center gap-4">
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full text-xs uppercase tracking-[0.12em] font-semibold text-white bg-[#4B1458] hover:bg-[#2A0932] shadow-[0_4px_14px_rgba(75,20,88,0.25)] transition-all duration-300 hover:shadow-[0_6px_20px_rgba(75,20,88,0.35)] hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Let&apos;s Talk</span>
                <ArrowRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2.5 rounded-full text-[#4B1458] hover:bg-[#F8F5F2] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7B2A7A]"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </Container>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="fixed inset-0 z-40 bg-[#FFFDF9] pt-24 pb-10 px-6 flex flex-col justify-between md:hidden overflow-y-auto"
          >
            <div className="space-y-6">
              <div className="text-xs uppercase tracking-[0.2em] text-[#7B2A7A] font-semibold border-b border-[#E5DDD8] pb-3">
                Navigation
              </div>
              <nav className="flex flex-col space-y-4">
                {siteConfig.navItems.map((item, index) => {
                  const isActive =
                    item.href === '/'
                      ? pathname === '/'
                      : pathname.startsWith(item.href)

                  return (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: -15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`flex items-center justify-between py-2 text-xl font-serif tracking-tight ${
                          isActive
                            ? 'text-[#4B1458] font-bold'
                            : 'text-[#1F1722] hover:text-[#4B1458]'
                        }`}
                      >
                        <span>{item.label}</span>
                        <ArrowUpRight
                          size={18}
                          className={isActive ? 'text-[#D4AF6A]' : 'text-[#6E6271]'}
                        />
                      </Link>
                    </motion.div>
                  )
                })}
              </nav>
            </div>

            <div className="pt-8 border-t border-[#E5DDD8] space-y-6">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-3 py-3.5 rounded-full text-sm uppercase tracking-[0.14em] font-semibold text-white bg-[#4B1458] shadow-lg shadow-[#4B1458]/20"
              >
                <span>Let&apos;s Talk</span>
                <ArrowRight size={16} />
              </Link>

              <div className="text-xs text-center text-[#6E6271] space-y-1">
                <p>Sector-75, Noida, Uttar Pradesh</p>
                <p className="text-[#4B1458] font-medium">{siteConfig.contact.email}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
