import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import {
  Calendar,
  CheckCircle2,
  Clock,
  ExternalLink,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  User,
  Users,
} from 'lucide-react'
import { BUSINESS, STAY_OPTIONS, buildWhatsAppLink } from '../data/homestayData'

interface ContactSectionProps {
  preselectedStay: string
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  preselectedStay,
}) => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [guests, setGuests] = useState('4')
  const [stayType, setStayType] = useState(STAY_OPTIONS[0].name)
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    if (preselectedStay) {
      setStayType(preselectedStay)
    }
  }, [preselectedStay])

  const buildEnquirySummary = () => {
    const lines = [
      `Hello Abhilash Anna! New stay enquiry for *Bettada Madilu Homestay*:`,
      `• Name: ${name || 'Guest'}`,
      `• Phone: ${phone || 'Not provided'}`,
      `• Stay Preference: ${stayType}`,
      `• Check-in: ${checkIn || 'Flexible'}`,
      `• Check-out: ${checkOut || 'Flexible'}`,
      `• Guests: ${guests || 'Not specified'}`,
    ]
    if (message.trim()) {
      lines.push(`• Message: ${message.trim()}`)
    }
    return lines.join('\n')
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const waDirectUrl = buildWhatsAppLink(buildEnquirySummary())

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#F6F2EA] py-20 sm:py-28 lg:py-32 text-[#0E1B16]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#C85A2B]/30 bg-[#C85A2B]/10 px-3.5 py-1 font-mono text-[11px] uppercase tracking-[0.22em] text-[#A8461D]">
            Contact &amp; Enquiry · Open 24 Hours
          </span>
          <h2 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-[3.5rem] font-semibold leading-[1.06] text-[#0E1B16]">
            Plan Your{' '}
            <span className="italic text-[#C85A2B]">Kudremukh Stay</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-[#0E1B16]/75">
            Speak directly with{' '}
            <strong className="font-semibold text-[#0E1B16]">
              Abhilash &amp; family
            </strong>{' '}
            for room availability, 4-meal trek packages, and 4x4 Jeep pickups in
            Mullodi. Fast responses via Call or WhatsApp.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Left Column: Direct Contact Cards + Google Map */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-5 lg:col-span-5"
          >
            {/* Primary Direct Call & WhatsApp Card */}
            <div className="rounded-[2rem] border border-[#0E1B16]/10 bg-[#0E1B16] p-6 sm:p-7 text-[#F6F2EA] shadow-xl">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#D4A24C]">
                Direct Homestay Desk
              </p>
              <h3 className="mt-2 font-serif text-2xl sm:text-3xl font-semibold">
                {BUSINESS.name}
              </h3>
              <p className="mt-1 text-xs text-[#F6F2EA]/65">
                Hosted by {BUSINESS.hosts}
              </p>

              <div className="mt-6 space-y-4 text-sm">
                <a
                  href={`tel:+${BUSINESS.phoneRaw}`}
                  className="flex items-start gap-3.5 rounded-2xl border border-white/10 bg-white/[0.04] p-3.5 transition hover:border-[#D4A24C]/50 hover:bg-white/[0.08]"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#C85A2B] text-[#F6F2EA]">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs text-[#F6F2EA]/60">Call / WhatsApp</p>
                    <p className="font-semibold text-[#F6F2EA]">
                      {BUSINESS.phoneDisplay}
                    </p>
                    <p className="text-[11px] text-[#D4A24C]">
                      Local: {BUSINESS.phoneLocal}
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-3.5 rounded-2xl border border-white/10 bg-white/[0.04] p-3.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#2E5A44] text-[#F6F2EA]">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs text-[#F6F2EA]/60">Address</p>
                    <p className="font-semibold text-[#F6F2EA]">
                      {BUSINESS.address}
                    </p>
                    <p className="text-[11px] text-[#F6F2EA]/65">
                      {BUSINESS.landmark}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 rounded-2xl border border-white/10 bg-white/[0.04] p-3.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#D4A24C]/20 text-[#E7C076]">
                    <Clock className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs text-[#F6F2EA]/60">Operating Hours</p>
                    <p className="font-semibold text-[#F6F2EA]">
                      {BUSINESS.hours}
                    </p>
                    <p className="text-[11px] text-emerald-300">
                      Midnight 4x4 Jeep arrivals supported
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Embedded Google Map Pin */}
            <div className="overflow-hidden rounded-[2rem] border border-[#0E1B16]/12 bg-[#EDE6D8] shadow-lg">
              <div className="relative h-60 w-full">
                <iframe
                  title="Bettada Madilu Homestay Mullodi Kudremukh Map"
                  src={BUSINESS.mapsEmbedUrl}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-full w-full border-0"
                />
              </div>
              <div className="flex items-center justify-between gap-3 bg-[#FAF8F3] px-5 py-3.5">
                <div>
                  <p className="text-xs font-semibold text-[#0E1B16]">
                    Mullodi, Kudremukh (577124)
                  </p>
                  <p className="font-mono text-[10px] text-[#0E1B16]/60">
                    {BUSINESS.coordinates}
                  </p>
                </div>
                <a
                  href={BUSINESS.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-[#0E1B16] px-3.5 py-2 text-xs font-semibold text-[#F6F2EA] transition hover:bg-[#C85A2B]"
                >
                  <span>Directions</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Simple, Fast Conversion Enquiry Form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="h-full rounded-[2rem] border border-[#0E1B16]/12 bg-[#FAF8F3] p-6 sm:p-9 shadow-[0_24px_65px_rgba(14,27,22,0.08)]">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#0E1B16]/10 pb-5">
                <div>
                  <h3 className="font-serif text-3xl font-semibold text-[#0E1B16]">
                    Send a Stay Enquiry
                  </h3>
                  <p className="mt-1 text-sm text-[#0E1B16]/68">
                    No prepayment needed — tell us your dates and group size and
                    we’ll reply promptly.
                  </p>
                </div>
                <span className="rounded-full bg-[#2E5A44]/12 px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-[#2E5A44]">
                  Instant WhatsApp Ready
                </span>
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mt-8 rounded-3xl border border-[#2E5A44]/25 bg-[#2E5A44]/8 p-6 sm:p-8 text-center"
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#2E5A44] text-[#F6F2EA] shadow-lg">
                    <CheckCircle2 className="h-7 w-7" />
                  </div>
                  <h4 className="mt-4 font-serif text-3xl font-semibold text-[#0E1B16]">
                    Enquiry Ready for Abhilash Anna!
                  </h4>
                  <p className="mx-auto mt-2 max-w-md text-sm text-[#0E1B16]/75">
                    Thank you, <strong>{name || 'friend'}</strong>. Tap below to
                    send your exact dates &amp; group details directly to our
                    WhatsApp desk for the fastest confirmation, or call us
                    anytime.
                  </p>

                  <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                    <a
                      href={waDirectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-shimmer inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-[#09120E] shadow-lg transition hover:brightness-105"
                    >
                      <MessageCircle className="h-4 w-4" />
                      <span>Send Details on WhatsApp</span>
                    </a>
                    <a
                      href={`tel:+${BUSINESS.phoneRaw}`}
                      className="inline-flex items-center gap-2 rounded-full border border-[#0E1B16]/20 bg-white px-5 py-3.5 text-sm font-semibold text-[#0E1B16] transition hover:bg-[#EDE6D8]"
                    >
                      <Phone className="h-4 w-4 text-[#C85A2B]" />
                      <span>Call {BUSINESS.phoneDisplay}</span>
                    </a>
                  </div>

                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-5 text-xs font-medium text-[#0E1B16]/60 underline hover:text-[#C85A2B] cursor-pointer"
                  >
                    Edit enquiry details
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="enq-name"
                        className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-[#0E1B16]/70"
                      >
                        Your Name *
                      </label>
                      <div className="relative">
                        <User className="pointer-events-none absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-[#0E1B16]/40" />
                        <input
                          id="enq-name"
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="e.g. Karthik Sharma"
                          className="w-full rounded-xl border border-[#0E1B16]/15 bg-white py-3 pr-4 pl-10 text-sm text-[#0E1B16] placeholder:text-[#0E1B16]/35 outline-none transition focus:border-[#C85A2B] focus:ring-2 focus:ring-[#C85A2B]/15"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="enq-phone"
                        className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-[#0E1B16]/70"
                      >
                        Phone / WhatsApp Number *
                      </label>
                      <div className="relative">
                        <Phone className="pointer-events-none absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-[#0E1B16]/40" />
                        <input
                          id="enq-phone"
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+91 98XXX XXXXX"
                          className="w-full rounded-xl border border-[#0E1B16]/15 bg-white py-3 pr-4 pl-10 text-sm text-[#0E1B16] placeholder:text-[#0E1B16]/35 outline-none transition focus:border-[#C85A2B] focus:ring-2 focus:ring-[#C85A2B]/15"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Check-in & Check-out */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="enq-checkin"
                        className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-[#0E1B16]/70"
                      >
                        Check-in Date *
                      </label>
                      <div className="relative">
                        <Calendar className="pointer-events-none absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-[#0E1B16]/40" />
                        <input
                          id="enq-checkin"
                          type="date"
                          required
                          value={checkIn}
                          onChange={(e) => setCheckIn(e.target.value)}
                          className="w-full rounded-xl border border-[#0E1B16]/15 bg-white py-3 pr-4 pl-10 text-sm text-[#0E1B16] outline-none transition focus:border-[#C85A2B] focus:ring-2 focus:ring-[#C85A2B]/15"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="enq-checkout"
                        className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-[#0E1B16]/70"
                      >
                        Check-out Date *
                      </label>
                      <div className="relative">
                        <Calendar className="pointer-events-none absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-[#0E1B16]/40" />
                        <input
                          id="enq-checkout"
                          type="date"
                          required
                          value={checkOut}
                          onChange={(e) => setCheckOut(e.target.value)}
                          className="w-full rounded-xl border border-[#0E1B16]/15 bg-white py-3 pr-4 pl-10 text-sm text-[#0E1B16] outline-none transition focus:border-[#C85A2B] focus:ring-2 focus:ring-[#C85A2B]/15"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Guests & Stay Option */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="enq-guests"
                        className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-[#0E1B16]/70"
                      >
                        Number of Guests (20+ Welcome)
                      </label>
                      <div className="relative">
                        <Users className="pointer-events-none absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-[#0E1B16]/40" />
                        <input
                          id="enq-guests"
                          type="number"
                          min="1"
                          max="40"
                          value={guests}
                          onChange={(e) => setGuests(e.target.value)}
                          className="w-full rounded-xl border border-[#0E1B16]/15 bg-white py-3 pr-4 pl-10 text-sm text-[#0E1B16] outline-none transition focus:border-[#C85A2B] focus:ring-2 focus:ring-[#C85A2B]/15"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="enq-stay"
                        className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-[#0E1B16]/70"
                      >
                        Stay Preference
                      </label>
                      <select
                        id="enq-stay"
                        value={stayType}
                        onChange={(e) => setStayType(e.target.value)}
                        className="w-full rounded-xl border border-[#0E1B16]/15 bg-white py-3 px-4 text-sm text-[#0E1B16] outline-none transition focus:border-[#C85A2B] focus:ring-2 focus:ring-[#C85A2B]/15"
                      >
                        {STAY_OPTIONS.map((opt) => (
                          <option key={opt.id} value={opt.name}>
                            {opt.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="enq-message"
                      className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-[#0E1B16]/70"
                    >
                      Message (Trek Plan, 4x4 Jeep Arrival Time, Meal Preference)
                    </label>
                    <textarea
                      id="enq-message"
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="e.g. Arriving around 11:30 PM at Samse, need 4x4 jeep pickup & 4-meal Kudremukh trek package (including Pork Pepper Dry)..."
                      className="w-full rounded-xl border border-[#0E1B16]/15 bg-white p-3.5 text-sm text-[#0E1B16] placeholder:text-[#0E1B16]/35 outline-none transition focus:border-[#C85A2B] focus:ring-2 focus:ring-[#C85A2B]/15"
                    />
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                    <button
                      type="submit"
                      className="btn-shimmer flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-[#C85A2B] px-6 py-3.5 text-sm font-semibold text-[#F6F2EA] shadow-lg shadow-[#C85A2B]/25 transition hover:bg-[#DF6A37] cursor-pointer"
                    >
                      <Send className="h-4 w-4" />
                      <span>Submit Enquiry</span>
                    </button>

                    <a
                      href={waDirectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-[#0E1B16]/20 bg-[#0E1B16] px-6 py-3.5 text-sm font-semibold text-[#F6F2EA] transition hover:bg-[#1A352A]"
                    >
                      <MessageCircle className="h-4 w-4 text-[#4ADE80]" />
                      <span>WhatsApp Directly</span>
                    </a>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
