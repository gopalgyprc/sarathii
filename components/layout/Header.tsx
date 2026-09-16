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
            ? 'bg-[#1A041E]/95 backdrop-blur-xl py-3 border-b border-[#D4AF6A]/30 shadow-[0_8px_32px_rgba(0,0,0,0.35)]'
            : 'bg-gradient-to-b from-black/40 via-black/15 to-transparent py-4 sm:py-5'
        }`}
      >
        <Container>
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF6A] rounded-xl p-1 transition-transform duration-300 group-hover:scale-105"
              aria-label="Sarathii Home"
            >
              <div className="relative w-20 sm:w-24 h-12 sm:h-14 transition-transform duration-300">
                <Image
                  src={siteConfig.logo}
                  alt="Sarathii Logo"
                  fill
                  sizes="96px"
                  className="object-contain drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation - Clean, Sharp, Luminous Typography */}
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
                    className={`relative text-xs lg:text-sm uppercase tracking-[0.14em] transition-colors duration-200 py-1.5 ${
                      isActive
                        ? 'text-[#E6CFA5] font-bold'
                        : 'text-[#FFFDF9]/85 hover:text-[#E6CFA5] font-medium'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <motion.span
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-0 right-0 h-[2px] rounded-full bg-[#D4AF6A]"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                )
              })}
            </nav>

            {/* Header Right Action - Gold Luminous Button */}
            <div className="hidden md:flex items-center gap-4">
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full text-xs uppercase tracking-[0.14em] font-bold text-[#2A0932] bg-[#E6CFA5] hover:bg-[#FFFDF9] hover:text-[#1A041E] shadow-[0_4px_18px_rgba(212,175,106,0.35)] border border-[#D4AF6A]/50 transition-all duration-300 hover:shadow-[0_6px_24px_rgba(212,175,106,0.5)] hover:scale-105 active:scale-95"
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
              className="md:hidden p-2.5 rounded-full text-[#E6CFA5] hover:text-white bg-white/10 hover:bg-white/20 border border-white/15 backdrop-blur-md transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF6A]"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
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
            className="fixed inset-0 z-40 bg-gradient-to-b from-[#1A041E] via-[#2A0932] to-[#140218] text-white pt-24 pb-10 px-6 flex flex-col justify-between md:hidden overflow-y-auto border-b border-[#D4AF6A]/30"
          >
            <div className="space-y-6">
              <div className="text-xs uppercase tracking-[0.2em] text-[#D4AF6A] font-semibold border-b border-white/15 pb-3">
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
                        className={`flex items-center justify-between py-2 text-xl font-serif tracking-tight transition-colors ${
                          isActive
                            ? 'text-[#E6CFA5] font-bold'
                            : 'text-white/85 hover:text-[#E6CFA5]'
                        }`}
                      >
                        <span>{item.label}</span>
                        <ArrowUpRight
                          size={18}
                          className={isActive ? 'text-[#D4AF6A]' : 'text-white/40'}
                        />
                      </Link>
                    </motion.div>
                  )
                })}
              </nav>
            </div>

            <div className="pt-8 border-t border-white/15 space-y-6">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-3 py-3.5 rounded-full text-xs uppercase tracking-[0.16em] font-bold text-[#2A0932] bg-[#E6CFA5] hover:bg-white shadow-xl shadow-black/40 transition-all"
              >
                <span>Let&apos;s Talk</span>
                <ArrowRight size={16} />
              </Link>

              <div className="text-xs text-center text-[#E5DDD8]/80 space-y-1">
                <p>Sector-75, Noida, Uttar Pradesh</p>
                <p className="text-[#E6CFA5] font-medium">{siteConfig.contact.email}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
