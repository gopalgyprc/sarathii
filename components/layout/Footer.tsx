import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  MapPin,
  Mail,
  Phone,
  ArrowUpRight,
  Sparkles,
  ArrowRight,
} from 'lucide-react'
import { siteConfig } from '@/data/site'
import { articles } from '@/data/articles'
import { Container } from '@/components/ui/Container'

export function Footer() {
  return (
    <footer className="bg-[#2A0932] text-[#FFFDF9] pt-10 md:pt-14 pb-8 border-t border-[#D4AF6A]/20 relative overflow-hidden bg-pattern-dark">
      {/* Subtle decorative glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#7B2A7A]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#D4AF6A]/10 rounded-full blur-3xl pointer-events-none" />

      <Container>
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-8 border-b border-white/10">
          {/* Col 1: Brand & Philosophy (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="inline-block focus:outline-none group">
              <div className="relative w-28 h-16 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src={siteConfig.logo}
                  alt="Sarathii Logo"
                  fill
                  sizes="112px"
                  className="object-contain"
                />
              </div>
            </Link>

            <p className="text-sm leading-relaxed text-[#E5DDD8]/80 max-w-sm">
              <strong className="text-white font-medium">Sarathii</strong> represents the steady charioteer guiding ambitious civil services aspirants and emerging leaders through clarity, strategic preparation, and ethical conviction.
            </p>

            <div className="pt-2 flex items-center gap-3 text-xs text-[#D4AF6A]">
              <Sparkles size={14} className="text-[#D4AF6A] shrink-0" />
              <span>Founded on five decades of distinguished public service.</span>
            </div>

            {/* Social Links */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://www.linkedin.com/in/jay-prakash-singh-87381a66/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#E5DDD8] hover:text-[#D4AF6A] hover:border-[#D4AF6A]/40 transition-colors"
                aria-label="LinkedIn Profile of Jay Prakash Singh"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.6 1.6 0 0 0-1.6 1.6 1.6 1.6 0 0 0 1.6 1.6 1.6 1.6 0 0 0 1.6-1.6 1.6 1.6 0 0 0-1.6-1.6Z" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#E5DDD8] hover:text-[#D4AF6A] hover:border-[#D4AF6A]/40 transition-colors"
                aria-label="Twitter"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#E5DDD8] hover:text-[#D4AF6A] hover:border-[#D4AF6A]/40 transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#E5DDD8] hover:text-[#D4AF6A] hover:border-[#D4AF6A]/40 transition-colors"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Useful Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-serif text-lg text-[#E6CFA5] font-normal tracking-wide">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              {siteConfig.navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[#E5DDD8]/75 hover:text-white transition-colors duration-200 inline-flex items-center gap-1 group"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 group-hover:opacity-100 transition-opacity text-[#D4AF6A]"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Latest Insights (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-lg text-[#E6CFA5] font-normal tracking-wide">
              Latest Insights
            </h4>
            <div className="space-y-3">
              {articles.slice(0, 3).map((article) => (
                <Link
                  key={article.slug}
                  href={`/insights/${article.slug}`}
                  className="group block space-y-1"
                >
                  <span className="text-[10px] uppercase tracking-wider text-[#D4AF6A] font-semibold">
                    {article.category}
                  </span>
                  <p className="text-xs text-[#E5DDD8]/85 group-hover:text-white group-hover:underline underline-offset-2 transition-colors line-clamp-2 leading-relaxed">
                    {article.title}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          {/* Col 4: Contact & Office (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-lg text-[#E6CFA5] font-normal tracking-wide">
              Connect
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-[#E5DDD8]/80 leading-relaxed">
              <div className="flex items-start gap-2.5">
                <MapPin size={16} className="text-[#D4AF6A] shrink-0 mt-0.5" />
                <span>
                  1601, A Block, Spectrum Metro,
                  <br />
                  Sector-75, Noida,
                  <br />
                  Gautam Buddha Nagar, UP 201301
                </span>
              </div>

              <div className="flex items-center gap-2.5 pt-1">
                <Mail size={16} className="text-[#D4AF6A] shrink-0" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone size={16} className="text-[#D4AF6A] shrink-0" />
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, '')}`}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.contact.phone}
                </a>
              </div>

              <div className="pt-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs uppercase tracking-wider font-semibold text-[#2A0932] bg-[#E6CFA5] hover:bg-[#FFFDF9] transition-all"
                >
                  <span>Request Consultation</span>
                  <ArrowRight size={12} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#E5DDD8]/60">
          <div>
            © {new Date().getFullYear()} Sarathii (India). All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>Leadership • Life • Legacy</span>
            <span className="hidden sm:inline">•</span>
            <span>Crafted for purposeful excellence</span>
          </div>
        </div>
      </Container>
    </footer>
  )
}
