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
  ShieldCheck,
  Calendar,
  Compass,
  FileText,
  Video,
  Building,
  HelpCircle,
  ChevronDown,
  ArrowRight,
  ExternalLink,
} from 'lucide-react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { siteConfig } from '@/data/site'

const MENTORSHIP_MODALITIES = [
  {
    icon: Building,
    title: 'In-Person Diagnostics',
    description:
      'One-on-one strategic evaluation at the Noida Head Office in Spectrum Metro.',
    badge: 'Noida HQ',
  },
  {
    icon: Video,
    title: 'Digital High-Definition Sessions',
    description:
      'Live interactive video consultations for outstation and overseas aspirants.',
    badge: 'Pan-India / Global',
  },
  {
    icon: FileText,
    title: 'Answer-Writing & GS-4 Audit',
    description:
      'Detailed analytical review of your Mains test copies with micro-level mark scoring.',
    badge: 'Mains & Ethics',
  },
]

const CONSULTATION_STEPS = [
  {
    step: '01',
    title: 'Diagnostic Intake Review',
    description:
      'The Chief Mentor’s secretariat reviews your academic history, optional subject, and previous examination attempts.',
  },
  {
    step: '02',
    title: 'Personalized Strategy Session',
    description:
      'A structured 1-on-1 consultation to diagnose cognitive bottlenecks, study plateaus, and answer-writing deficiencies.',
  },
  {
    step: '03',
    title: 'Actionable Strategic Blueprint',
    description:
      'Receive a curated preparation timeline, minimal source recommendation, and tactical revision schedule.',
  },
]

const FAQS = [
  {
    q: 'How is 1-on-1 mentorship conducted at Sarathii?',
    a: 'Mentorship at Sarathii is strictly customized and guided by Founder & Chief Mentor Jay Prakash Singh. Rather than generic classroom lectures, sessions focus on individualized diagnostics: dissecting your specific weaknesses in GS papers, refining ethical frameworks in GS-4, and evaluating answer articulation under examination constraints.',
  },
  {
    q: 'Is digital consultation available for outstation aspirants?',
    a: 'Yes. For aspirants located outside Delhi-NCR, high-definition digital video consultations are scheduled with identical diagnostic rigor and follow-up support.',
  },
  {
    q: 'Can working professionals schedule weekend consultation slots?',
    a: 'Yes. Dedicated evening and weekend slots (Saturday & Sunday) are reserved for working civil services aspirants to accommodate demanding professional schedules.',
  },
  {
    q: 'What should I prepare or submit prior to the diagnostic session?',
    a: 'Candidates are encouraged to share their recent Mains mock test answers, optional subject choice, previous attempt scores (if applicable), and specific pain points in their daily schedule.',
  },
  {
    q: 'Is my personal and preparation data kept confidential?',
    a: 'Strictly confidential. In accordance with civil service integrity standards, all evaluated copies, marks, and personal discussions remain private between you and the mentorship board.',
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    examTarget: 'UPSC CSE 2026',
    subject: 'UPSC Mentorship Consultation',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrorMsg('')

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.mobile.trim() ||
      !formData.message.trim()
    ) {
      setErrorMsg('Please fill in all required fields.')
      return
    }

    setIsSubmitting(true)

    // Simulate clean API-ready submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 900)
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#FFFDF9]">
      <Header />

      <main className="flex-grow">
        {/* Contact Hero Section */}
        <section className="relative pt-28 pb-14 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-24 bg-[#1A041E] text-white border-b border-[#D4AF6A]/30 text-center overflow-hidden">
          {/* Ambient Lighting */}
          <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#7B2A7A]/25 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-[450px] h-[450px] bg-[#D4AF6A]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute inset-0 bg-pattern-dark opacity-40 pointer-events-none" />

          <Container className="relative z-10">
            <div className="max-w-3xl mx-auto space-y-4">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#2A0932]/90 border border-[#D4AF6A]/40 text-xs uppercase tracking-[0.2em] font-semibold text-[#E6CFA5] shadow-lg backdrop-blur-md">
                <Sparkles size={13} className="text-[#D4AF6A] animate-pulse" />
                <span>Sarathii Admissions & Diagnostic Mentorship</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-[4rem] text-[#FFFDF9] font-normal leading-[1.05] tracking-tight">
                Connect with{' '}
                <span className="italic text-[#E6CFA5]">
                  Sarathii
                </span>
              </h1>

              <p className="text-base sm:text-lg text-[#E5DDD8]/90 leading-relaxed max-w-2xl mx-auto font-normal">
                Direct diagnostic guidance, personalized answer-writing evaluation, and strategic civil services roadmap consultations with Founder & Chief Mentor Jay Prakash Singh.
              </p>

              <div className="pt-2">
                <p className="font-serif text-sm sm:text-base text-[#E6CFA5] italic max-w-xl mx-auto">
                  &ldquo;At Sarathii, we believe that the right guidance at the right time can change the course of a lifetime.&rdquo;
                </p>
                <cite className="block text-xs uppercase tracking-widest text-[#E5DDD8]/70 not-italic mt-1">
                  — Sarathii Institutional Philosophy
                </cite>
              </div>
            </div>
          </Container>

          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF6A]/60 to-transparent" />
        </section>

        {/* 2-Column Balanced Intake & Secretariat Section */}
        <section className="py-12 lg:py-18 bg-[#FFFDF9]">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
              {/* Left Column: Institutional Secretariat & Modalities (5 cols) */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                {/* Office & Secretariat Card */}
                <div className="bg-[#F8F5F2] rounded-3xl p-6 sm:p-8 border border-[#E5DDD8] shadow-sm space-y-6">
                  <div className="flex items-center justify-between border-b border-[#E5DDD8] pb-4">
                    <div className="text-xs uppercase tracking-[0.2em] text-[#7B2A7A] font-bold">
                      Institutional Secretariat
                    </div>
                    <span className="px-3 py-1 rounded-full bg-[#4B1458]/10 text-[#4B1458] text-xs uppercase tracking-wider font-bold">
                      Noida HQ
                    </span>
                  </div>

                  <div className="space-y-5 text-sm text-[#1F1722]/90 leading-relaxed">
                    {/* Address */}
                    <div className="flex items-start gap-3.5">
                      <div className="w-11 h-11 rounded-2xl bg-[#4B1458] text-[#E6CFA5] flex items-center justify-center shrink-0 shadow-md">
                        <MapPin size={20} />
                      </div>
                      <div>
                        <strong className="block text-[#2A0932] font-semibold text-base font-serif">
                          Head Office & Advisory Chambers
                        </strong>
                        <p className="text-[#5D5060] text-sm mt-0.5 leading-relaxed">
                          1601, A Block, Spectrum Metro, Sector-75,
                          <br />
                          Gautam Buddha Nagar, Noida, UP 201301
                        </p>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-start gap-3.5">
                      <div className="w-11 h-11 rounded-2xl bg-[#4B1458] text-[#E6CFA5] flex items-center justify-center shrink-0 shadow-md">
                        <Mail size={20} />
                      </div>
                      <div>
                        <strong className="block text-[#2A0932] font-semibold text-base font-serif">
                          Direct Mentorship Desk
                        </strong>
                        <a
                          href={`mailto:${siteConfig.contact.email}`}
                          className="text-[#4B1458] hover:text-[#7B2A7A] text-sm font-medium transition-colors"
                        >
                          {siteConfig.contact.email}
                        </a>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-start gap-3.5">
                      <div className="w-11 h-11 rounded-2xl bg-[#4B1458] text-[#E6CFA5] flex items-center justify-center shrink-0 shadow-md">
                        <Phone size={20} />
                      </div>
                      <div>
                        <strong className="block text-[#2A0932] font-semibold text-base font-serif">
                          Consultation Helpline
                        </strong>
                        <a
                          href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, '')}`}
                          className="text-[#4B1458] hover:text-[#7B2A7A] text-sm font-medium transition-colors"
                        >
                          {siteConfig.contact.phone}
                        </a>
                      </div>
                    </div>

                    {/* Working Hours */}
                    <div className="flex items-start gap-3.5">
                      <div className="w-11 h-11 rounded-2xl bg-[#4B1458] text-[#E6CFA5] flex items-center justify-center shrink-0 shadow-md">
                        <Clock size={20} />
                      </div>
                      <div>
                        <strong className="block text-[#2A0932] font-semibold text-base font-serif">
                          Diagnostic Hours
                        </strong>
                        <p className="text-[#5D5060] text-sm">
                          {siteConfig.contact.hours} (Prior Appointment)
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* 24-Hour Response Guarantee Badge */}
                  <div className="pt-4 border-t border-[#E5DDD8] flex items-center gap-3 bg-white p-4 rounded-2xl border border-[#E5DDD8]/80">
                    <ShieldCheck size={22} className="text-[#A8823B] shrink-0" />
                    <p className="text-xs text-[#5D5060] leading-snug">
                      <strong className="text-[#2A0932] font-semibold">
                        Prompt Response Commitment:
                      </strong>{' '}
                      All diagnostic queries are acknowledged within 24 business hours.
                    </p>
                  </div>
                </div>

                {/* Mentorship Modalities Cards */}
                <div className="bg-[#F8F5F2] rounded-3xl p-6 sm:p-8 border border-[#E5DDD8] shadow-sm space-y-4">
                  <div className="text-xs uppercase tracking-[0.2em] text-[#7B2A7A] font-bold">
                    Diagnostic Modalities
                  </div>

                  <div className="space-y-3">
                    {MENTORSHIP_MODALITIES.map((item) => (
                      <div
                        key={item.title}
                        className="bg-white rounded-2xl p-4 border border-[#E5DDD8] hover:border-[#D4AF6A] transition-all flex items-start gap-3.5"
                      >
                        <div className="w-9 h-9 rounded-xl bg-[#2A0932]/5 text-[#4B1458] flex items-center justify-center shrink-0 mt-0.5">
                          <item.icon size={18} />
                        </div>
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <h4 className="text-sm font-semibold text-[#2A0932]">
                              {item.title}
                            </h4>
                            <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-[#D4AF6A]/20 text-[#A8823B] font-bold">
                              {item.badge}
                            </span>
                          </div>
                          <p className="text-xs sm:text-sm text-[#5D5060] leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Premium Diagnostic Intake Form (7 cols) */}
              <div className="lg:col-span-7 flex flex-col">
                <div className="bg-gradient-to-br from-[#2A0932] via-[#1F0725] to-[#150319] text-[#FFFDF9] rounded-3xl p-7 sm:p-10 lg:p-12 border-2 border-[#D4AF6A]/40 shadow-2xl relative overflow-hidden flex-grow flex flex-col justify-between">
                  <div className="absolute top-0 right-0 w-80 h-80 bg-[#7B2A7A]/20 rounded-full blur-3xl pointer-events-none" />
                  <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#D4AF6A]/10 rounded-full blur-3xl pointer-events-none" />

                  <div className="relative z-10 space-y-6">
                    <div>
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs uppercase tracking-widest text-[#E6CFA5] font-semibold border border-[#D4AF6A]/30">
                        <Sparkles size={12} className="text-[#D4AF6A]" />
                        <span>Confidential Consultation Intake</span>
                      </div>
                      <h2 className="font-serif text-3xl sm:text-4xl text-[#FFFDF9] font-normal mt-2">
                        Schedule a Strategic Diagnostic
                      </h2>
                      <p className="text-xs sm:text-sm text-[#E5DDD8]/80 mt-1">
                        Share your preparation background below. Your diagnostic request is personally reviewed by the Chief Mentor’s office.
                      </p>
                    </div>

                    <AnimatePresence mode="wait">
                      {isSubmitted ? (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          className="bg-white/10 rounded-2xl p-8 sm:p-10 text-center border border-[#D4AF6A]/40 space-y-5 my-auto"
                        >
                          <div className="w-16 h-16 rounded-full bg-[#D4AF6A] text-[#2A0932] mx-auto flex items-center justify-center shadow-lg">
                            <CheckCircle2 size={32} />
                          </div>
                          <h3 className="font-serif text-2xl sm:text-3xl text-white">
                            Intake Form Received
                          </h3>
                          <p className="text-xs sm:text-sm text-[#E5DDD8]/90 max-w-md mx-auto leading-relaxed">
                            Thank you, <strong className="text-white">{formData.name}</strong>. Your mentorship inquiry for <strong className="text-[#E6CFA5]">{formData.subject}</strong> has been transmitted. The advisory secretariat will contact you via phone/email within 24 hours to finalize your diagnostic slot.
                          </p>
                          <div className="pt-2">
                            <button
                              onClick={() => {
                                setIsSubmitted(false)
                                setFormData({
                                  name: '',
                                  email: '',
                                  mobile: '',
                                  examTarget: 'UPSC CSE 2026',
                                  subject: 'UPSC Mentorship Consultation',
                                  message: '',
                                })
                              }}
                              className="px-6 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold text-[#2A0932] bg-[#E6CFA5] hover:bg-white transition-all shadow-md"
                            >
                              Submit Another Inquiry
                            </button>
                          </div>
                        </motion.div>
                      ) : (
                        <form onSubmit={handleSubmit} className="space-y-4">
                          {errorMsg && (
                            <div className="p-3 bg-red-900/60 border border-red-500/50 rounded-xl text-xs text-red-200">
                              {errorMsg}
                            </div>
                          )}

                          {/* Row 1: Name & Mobile */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="space-y-1.5">
                              <label
                                htmlFor="name"
                                className="block text-xs uppercase tracking-wider text-[#E6CFA5] font-semibold"
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
                                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 focus:border-[#D4AF6A] focus:bg-white/15 text-white placeholder-white/40 text-sm outline-none transition-all"
                              />
                            </div>

                            <div className="space-y-1.5">
                              <label
                                htmlFor="mobile"
                                className="block text-xs uppercase tracking-wider text-[#E6CFA5] font-semibold"
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
                                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 focus:border-[#D4AF6A] focus:bg-white/15 text-white placeholder-white/40 text-sm outline-none transition-all"
                              />
                            </div>
                          </div>

                          {/* Row 2: Email & Target Exam */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="space-y-1.5">
                              <label
                                htmlFor="email"
                                className="block text-xs uppercase tracking-wider text-[#E6CFA5] font-semibold"
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
                                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 focus:border-[#D4AF6A] focus:bg-white/15 text-white placeholder-white/40 text-sm outline-none transition-all"
                              />
                            </div>

                            <div className="space-y-1.5">
                              <label
                                htmlFor="examTarget"
                                className="block text-xs uppercase tracking-wider text-[#E6CFA5] font-semibold"
                              >
                                Target Exam & Year
                              </label>
                              <select
                                id="examTarget"
                                name="examTarget"
                                value={formData.examTarget}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-xl bg-[#2A0932] border border-white/20 focus:border-[#D4AF6A] text-white text-sm outline-none transition-all"
                              >
                                <option value="UPSC CSE 2026">UPSC CSE 2026</option>
                                <option value="UPSC CSE 2027">UPSC CSE 2027</option>
                                <option value="State PSC (UPPCS / BPSC / RAS)">
                                  State PSC (UPPCS / BPSC / RAS)
                                </option>
                                <option value="Executive / Judicial Services">
                                  Executive / Judicial Services
                                </option>
                              </select>
                            </div>
                          </div>

                          {/* Area of Mentorship Focus */}
                          <div className="space-y-1.5">
                            <label
                              htmlFor="subject"
                              className="block text-xs uppercase tracking-wider text-[#E6CFA5] font-semibold"
                            >
                              Primary Consultation Focus
                            </label>
                            <select
                              id="subject"
                              name="subject"
                              value={formData.subject}
                              onChange={handleChange}
                              className="w-full px-4 py-3 rounded-xl bg-[#2A0932] border border-white/20 focus:border-[#D4AF6A] text-white text-sm outline-none transition-all"
                            >
                              <option value="UPSC Mentorship Consultation">
                                Comprehensive UPSC Mentorship Consultation
                              </option>
                              <option value="GS-4 Ethics & Case Study Audit">
                                GS-4 Ethics & Case Study Mastery Audit
                              </option>
                              <option value="Answer-Writing Diagnostic & Copy Evaluation">
                                Answer-Writing Diagnostic & Copy Evaluation
                              </option>
                              <option value="Personality Test & Interview Board Poise">
                                Personality Test & Interview Board Poise
                              </option>
                              <option value="Literature & Civilizational Work Inquiry">
                                Literary & &ldquo;जिन राहों पर सियाराम चले&rdquo; Inquiry
                              </option>
                            </select>
                          </div>

                          {/* Message / Diagnostic Details */}
                          <div className="space-y-1.5">
                            <label
                              htmlFor="message"
                              className="block text-xs uppercase tracking-wider text-[#E6CFA5] font-semibold"
                            >
                              Current Preparation Stage & Specific Questions{' '}
                              <span className="text-[#D4AF6A]">*</span>
                            </label>
                            <textarea
                              id="message"
                              name="message"
                              rows={3}
                              required
                              value={formData.message}
                              onChange={handleChange}
                              placeholder="Please share your optional subject, number of previous attempts, and the specific bottlenecks you wish to resolve..."
                              className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 focus:border-[#D4AF6A] focus:bg-white/15 text-white placeholder-white/40 text-sm outline-none transition-all resize-y"
                            />
                          </div>

                          {/* Submit Button */}
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full inline-flex items-center justify-center gap-3 py-4 rounded-xl text-xs uppercase tracking-[0.16em] font-bold text-[#2A0932] bg-[#E6CFA5] hover:bg-[#FFFDF9] disabled:opacity-50 transition-all shadow-xl shadow-black/40 mt-3 hover:scale-[1.01] active:scale-[0.99]"
                          >
                            {isSubmitting ? (
                              <span>Transmitting Intake Data...</span>
                            ) : (
                              <>
                                <Send size={15} />
                                <span>Schedule Strategic Consultation</span>
                              </>
                            )}
                          </button>

                          <div className="flex items-center justify-center gap-2 text-xs text-[#E5DDD8]/80 text-center pt-2">
                            <ShieldCheck size={14} className="text-[#D4AF6A]" />
                            <span>
                              Strict confidentiality guaranteed under civil service advisory standards.
                            </span>
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

        {/* 3-Step Consultation Protocol Section */}
        <section className="py-14 lg:py-20 bg-[#F8F5F2] border-t border-[#E5DDD8]">
          <Container>
            <SectionHeading
              align="center"
              kicker="The Mentorship Process"
              title="What to Expect from Your Diagnostic"
              description="A structured three-phase consultative protocol designed to convert preparation anxiety into deliberate, systematic execution."
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-10">
              {CONSULTATION_STEPS.map((step) => (
                <div
                  key={step.step}
                  className="bg-white rounded-3xl p-7 sm:p-8 border border-[#E5DDD8] hover:border-[#D4AF6A] transition-all duration-300 hover:shadow-lg space-y-4 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-2xl bg-[#4B1458] text-[#E6CFA5] font-serif font-bold text-lg flex items-center justify-center shadow-md">
                      {step.step}
                    </div>
                    <h3 className="font-serif text-xl sm:text-2xl text-[#2A0932] font-semibold">
                      {step.title}
                    </h3>
                    <p className="text-sm text-[#5D5060] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Consultation FAQ Accordion Section */}
        <section className="py-14 lg:py-20 bg-[#FFFDF9] border-t border-[#E5DDD8]">
          <Container size="sm">
            <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
              <div className="text-xs uppercase tracking-[0.2em] text-[#7B2A7A] font-bold">
                Clear Answers
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#2A0932] font-normal">
                Frequently Asked Questions
              </h2>
              <p className="text-sm text-[#6E6271]">
                Everything you need to know about scheduling, format, and preparation for your diagnostic consultation.
              </p>
            </div>

            <div className="space-y-3">
              {FAQS.map((faq, index) => {
                const isOpen = openFaq === index
                return (
                  <div
                    key={faq.q}
                    className="bg-[#F8F5F2] rounded-2xl border border-[#E5DDD8] overflow-hidden transition-colors"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="w-full px-6 py-4.5 text-left flex items-center justify-between gap-4"
                    >
                      <span className="font-serif text-base sm:text-lg text-[#2A0932] font-semibold">
                        {faq.q}
                      </span>
                      <ChevronDown
                        size={18}
                        className={`text-[#7B2A7A] transition-transform duration-300 shrink-0 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                        >
                          <div className="px-6 pb-5 pt-1 text-sm sm:text-base text-[#4A3E4D] leading-relaxed border-t border-[#E5DDD8]/60">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              })}
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  )
}
