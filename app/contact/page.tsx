'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  Send,
  CheckCircle2,
  Sparkles,
} from 'lucide-react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Container } from '@/components/ui/Container'
import { siteConfig } from '@/data/site'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    subject: 'UPSC Mentorship Consultation',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrorMsg('')

    if (!formData.name || !formData.email || !formData.mobile || !formData.message) {
      setErrorMsg('Please fill in all required fields.')
      return
    }

    setIsSubmitting(true)

    // Simulate clean API-ready submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({
        name: '',
        email: '',
        mobile: '',
        subject: 'UPSC Mentorship Consultation',
        message: '',
      })
    }, 900)
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#FFFDF9]">
      <Header />

      <main className="flex-grow pt-28 sm:pt-36">
        {/* Contact Hero Section */}
        <section className="py-16 sm:py-20 bg-radial-hero border-b border-[#E5DDD8] relative overflow-hidden">
          <Container>
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#4B1458]/10 text-xs uppercase tracking-[0.2em] font-semibold text-[#7B2A7A]">
                <Sparkles size={13} className="text-[#D4AF6A]" />
                <span>Begin Your Journey</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-6xl text-[#2A0932] font-normal leading-tight">
                Contact Me
              </h1>

              <p className="font-serif text-xl sm:text-2xl text-[#7B2A7A] italic">
                Feel free to reach out for any questions, diagnostic guidance, and mentorship clarity.
              </p>

              <p className="text-sm sm:text-base text-[#6E6271] leading-relaxed max-w-xl">
                &ldquo;At Sarathii, we believe that the right guidance at the right time can change the course of a lifetime.&rdquo;
              </p>
            </div>
          </Container>
        </section>

        {/* 2-Column Contact & Form Section */}
        <section className="py-20 lg:py-28 bg-[#FFFDF9]">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              {/* Left Column: Contact Information & Location (5 cols) */}
              <div className="lg:col-span-5 space-y-8">
                <div className="bg-[#F8F5F2] rounded-3xl p-8 border border-[#E5DDD8] space-y-6">
                  <div className="text-xs uppercase tracking-widest text-[#7B2A7A] font-bold">
                    Office Location & Details
                  </div>

                  <div className="space-y-6 text-sm text-[#1F1722]/85 leading-relaxed">
                    {/* Address */}
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-[#4B1458] text-[#E6CFA5] flex items-center justify-center shrink-0 mt-0.5">
                        <MapPin size={20} />
                      </div>
                      <div>
                        <strong className="block text-[#2A0932] font-semibold text-base font-serif">
                          Noida Head Office
                        </strong>
                        <p className="text-[#6E6271] text-xs sm:text-sm mt-0.5">
                          1601, A Block, Spectrum Metro,
                          <br />
                          Sector-75, Noida,
                          <br />
                          Gautam Buddha Nagar, Uttar Pradesh 201301
                        </p>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-[#4B1458] text-[#E6CFA5] flex items-center justify-center shrink-0">
                        <Mail size={20} />
                      </div>
                      <div>
                        <strong className="block text-[#2A0932] font-semibold text-base font-serif">
                          Email Inquiries
                        </strong>
                        <a
                          href={`mailto:${siteConfig.contact.email}`}
                          className="text-[#4B1458] hover:text-[#7B2A7A] text-xs sm:text-sm font-medium"
                        >
                          {siteConfig.contact.email}
                        </a>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-[#4B1458] text-[#E6CFA5] flex items-center justify-center shrink-0">
                        <Phone size={20} />
                      </div>
                      <div>
                        <strong className="block text-[#2A0932] font-semibold text-base font-serif">
                          Direct Line
                        </strong>
                        <a
                          href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, '')}`}
                          className="text-[#4B1458] hover:text-[#7B2A7A] text-xs sm:text-sm font-medium"
                        >
                          {siteConfig.contact.phone}
                        </a>
                      </div>
                    </div>

                    {/* Working Hours */}
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-[#4B1458] text-[#E6CFA5] flex items-center justify-center shrink-0">
                        <Clock size={20} />
                      </div>
                      <div>
                        <strong className="block text-[#2A0932] font-semibold text-base font-serif">
                          Consultation Hours
                        </strong>
                        <p className="text-[#6E6271] text-xs sm:text-sm">
                          {siteConfig.contact.hours}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Social Channels */}
                  <div className="pt-6 border-t border-[#E5DDD8] space-y-3">
                    <div className="text-xs uppercase tracking-widest text-[#7B2A7A] font-bold">
                      Follow Sarathii
                    </div>
                    <div className="flex items-center gap-3">
                      <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-white border border-[#E5DDD8] flex items-center justify-center text-[#4B1458] hover:bg-[#4B1458] hover:text-white transition-colors"
                        aria-label="LinkedIn"
                      >
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.6 1.6 0 0 0-1.6 1.6 1.6 1.6 0 0 0 1.6 1.6 1.6 1.6 0 0 0 1.6-1.6 1.6 1.6 0 0 0-1.6-1.6Z" />
                        </svg>
                      </a>
                      <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-white border border-[#E5DDD8] flex items-center justify-center text-[#4B1458] hover:bg-[#4B1458] hover:text-white transition-colors"
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
                        className="w-10 h-10 rounded-full bg-white border border-[#E5DDD8] flex items-center justify-center text-[#4B1458] hover:bg-[#4B1458] hover:text-white transition-colors"
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
                        className="w-10 h-10 rounded-full bg-white border border-[#E5DDD8] flex items-center justify-center text-[#4B1458] hover:bg-[#4B1458] hover:text-white transition-colors"
                        aria-label="YouTube"
                      >
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Premium Interactive Contact Form (7 cols) */}
              <div className="lg:col-span-7">
                <div className="bg-[#2A0932] text-[#FFFDF9] rounded-3xl p-8 sm:p-12 border border-[#D4AF6A]/30 shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-80 h-80 bg-[#7B2A7A]/25 rounded-full blur-3xl pointer-events-none" />

                  <div className="relative z-10 space-y-6">
                    <div>
                      <span className="text-xs uppercase tracking-[0.2em] text-[#E6CFA5] font-semibold">
                        Direct Inquiries
                      </span>
                      <h2 className="font-serif text-3xl sm:text-4xl text-[#FFFDF9] font-normal mt-1">
                        Send a Message
                      </h2>
                      <p className="text-xs sm:text-sm text-[#E5DDD8]/80 mt-1">
                        Please share a little about your goals. We respond within one business day.
                      </p>
                    </div>

                    <AnimatePresence mode="wait">
                      {isSubmitted ? (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          className="bg-white/10 rounded-2xl p-8 text-center border border-[#D4AF6A]/40 space-y-4"
                        >
                          <div className="w-16 h-16 rounded-full bg-[#D4AF6A] text-[#2A0932] mx-auto flex items-center justify-center">
                            <CheckCircle2 size={32} />
                          </div>
                          <h3 className="font-serif text-2xl text-white">
                            Message Received
                          </h3>
                          <p className="text-sm text-[#E5DDD8]/90 max-w-md mx-auto leading-relaxed">
                            Thank you for reaching out. Jay Prakash Singh and the Sarathii advisory team will review your message and contact you shortly.
                          </p>
                          <button
                            onClick={() => setIsSubmitted(false)}
                            className="mt-4 px-6 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold text-[#2A0932] bg-[#E6CFA5] hover:bg-white transition-colors"
                          >
                            Send Another Message
                          </button>
                        </motion.div>
                      ) : (
                        <form onSubmit={handleSubmit} className="space-y-4">
                          {errorMsg && (
                            <div className="p-3 bg-red-900/50 border border-red-500/50 rounded-xl text-xs text-red-200">
                              {errorMsg}
                            </div>
                          )}

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {/* Name */}
                            <div className="space-y-1.5">
                              <label
                                htmlFor="name"
                                className="block text-[11px] uppercase tracking-wider text-[#E6CFA5] font-semibold"
                              >
                                Full Name <span className="text-[#D4AF6A]">*</span>
                              </label>
                              <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="e.g. Ananya Sharma"
                                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 focus:border-[#D4AF6A] focus:bg-white/10 text-white placeholder-white/40 text-sm outline-none transition-all"
                              />
                            </div>

                            {/* Mobile */}
                            <div className="space-y-1.5">
                              <label
                                htmlFor="mobile"
                                className="block text-[11px] uppercase tracking-wider text-[#E6CFA5] font-semibold"
                              >
                                Mobile Number <span className="text-[#D4AF6A]">*</span>
                              </label>
                              <input
                                type="tel"
                                id="mobile"
                                name="mobile"
                                required
                                value={formData.mobile}
                                onChange={handleChange}
                                placeholder="+91 98765 43210"
                                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 focus:border-[#D4AF6A] focus:bg-white/10 text-white placeholder-white/40 text-sm outline-none transition-all"
                              />
                            </div>
                          </div>

                          {/* Email */}
                          <div className="space-y-1.5">
                            <label
                              htmlFor="email"
                              className="block text-[11px] uppercase tracking-wider text-[#E6CFA5] font-semibold"
                            >
                              Email Address <span className="text-[#D4AF6A]">*</span>
                            </label>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              required
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="ananya@example.com"
                              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 focus:border-[#D4AF6A] focus:bg-white/10 text-white placeholder-white/40 text-sm outline-none transition-all"
                            />
                          </div>

                          {/* Subject / Purpose */}
                          <div className="space-y-1.5">
                            <label
                              htmlFor="subject"
                              className="block text-[11px] uppercase tracking-wider text-[#E6CFA5] font-semibold"
                            >
                              Area of Mentorship Focus
                            </label>
                            <select
                              id="subject"
                              name="subject"
                              value={formData.subject}
                              onChange={handleChange}
                              className="w-full px-4 py-3 rounded-xl bg-[#2A0932] border border-white/15 focus:border-[#D4AF6A] text-white text-sm outline-none transition-all"
                            >
                              <option value="UPSC Mentorship Consultation">
                                UPSC Mentorship Consultation
                              </option>
                              <option value="Answer-Writing Diagnostic">
                                Answer-Writing Diagnostic
                              </option>
                              <option value="Executive & Leadership Coaching">
                                Executive & Leadership Coaching
                              </option>
                              <option value="Book & Literature Inquiry">
                                Book & Literature Inquiry
                              </option>
                              <option value="Other Query">Other Query</option>
                            </select>
                          </div>

                          {/* Message */}
                          <div className="space-y-1.5">
                            <label
                              htmlFor="message"
                              className="block text-[11px] uppercase tracking-wider text-[#E6CFA5] font-semibold"
                            >
                              Your Message / Current Preparation Stage <span className="text-[#D4AF6A]">*</span>
                            </label>
                            <textarea
                              id="message"
                              name="message"
                              rows={4}
                              required
                              value={formData.message}
                              onChange={handleChange}
                              placeholder="Share your current preparation status, optional subjects, or specific areas where you seek guidance..."
                              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 focus:border-[#D4AF6A] focus:bg-white/10 text-white placeholder-white/40 text-sm outline-none transition-all resize-y"
                            />
                          </div>

                          {/* Submit Button */}
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full inline-flex items-center justify-center gap-3 py-4 rounded-xl text-xs uppercase tracking-[0.16em] font-bold text-[#2A0932] bg-[#E6CFA5] hover:bg-[#FFFDF9] disabled:opacity-50 transition-all shadow-lg shadow-black/30 mt-2"
                          >
                            {isSubmitting ? (
                              <span>Transmitting...</span>
                            ) : (
                              <>
                                <Send size={15} />
                                <span>SEND MESSAGE</span>
                              </>
                            )}
                          </button>

                          <div className="text-[11px] text-[#E5DDD8]/60 text-center pt-2">
                            Your information is treated with complete confidentiality.
                          </div>
                        </form>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  )
}
