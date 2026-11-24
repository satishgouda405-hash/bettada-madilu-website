import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  MapPin,
  MessageCircle,
  Mountain,
  Phone,
  Star,
  X,
} from 'lucide-react'
import { BUSINESS, buildWhatsAppLink } from '../data/homestayData'

export const Footer: React.FC = () => {
  const [modalType, setModalType] = useState<'guidelines' | 'privacy' | null>(
    null
  )

  const waUrl = buildWhatsAppLink(
    'Hello Abhilash Anna! Reaching out from the Bettada Madilu Homestay website.'
  )

  return (
    <footer className="relative bg-[#09120E] text-[#F6F2EA] border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand Summary */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#C85A2B] to-[#963E18] text-[#F6F2EA]">
                <Mountain className="h-5 w-5" />
              </div>
              <div>
                <p className="font-serif text-2xl font-semibold">
                  {BUSINESS.name}
                </p>
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#D4A24C]">
                  {BUSINESS.alternateName} · Mullodi
                </p>
              </div>
            </div>

            <p className="mt-4 max-w-md text-sm leading-relaxed text-[#F6F2EA]/70">
              Your warm, family-run Malnad basecamp to Kudremukh Peak. Hosted by{' '}
              <strong className="text-[#F6F2EA]">{BUSINESS.hosts}</strong> with
              scenic hill-view rooms, tents, 4-meal home-cooked food, and 24/7
              4x4 Jeep support.
            </p>

            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-xs">
              <Star className="h-3.5 w-3.5 fill-[#D4A24C] text-[#D4A24C]" />
              <span className="font-semibold text-[#F6F2EA]">
                {BUSINESS.rating} / 5
              </span>
              <span className="text-[#F6F2EA]/55">
                ({BUSINESS.reviewCount} Google Reviews)
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#D4A24C]">
              Explore
            </p>
            <ul className="mt-4 space-y-2.5 text-sm text-[#F6F2EA]/75">
              {[
                { label: 'Home', href: '#home' },
                { label: 'About Our Family', href: '#about' },
                { label: 'Stay & Rooms', href: '#stay' },
                { label: 'Trek & 4-Meal Plan', href: '#trek-food' },
                { label: 'Photo Gallery', href: '#gallery' },
                { label: 'Guest Reviews', href: '#reviews' },
                { label: 'Contact & Map', href: '#contact' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="transition hover:text-[#E7C076]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#D4A24C]">
              Reach Us 24/7
            </p>
            <div className="mt-4 space-y-3 text-sm text-[#F6F2EA]/78">
              <p className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#C85A2B]" />
                <span>
                  {BUSINESS.address}
                  <br />
                  <span className="text-xs text-[#F6F2EA]/55">
                    {BUSINESS.landmark}
                  </span>
                </span>
              </p>
              <a
                href={`tel:+${BUSINESS.phoneRaw}`}
                className="flex items-center gap-2.5 transition hover:text-[#E7C076]"
              >
                <Phone className="h-4 w-4 shrink-0 text-[#D4A24C]" />
                <span>{BUSINESS.phoneDisplay}</span>
              </a>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 transition hover:text-[#4ADE80]"
              >
                <MessageCircle className="h-4 w-4 shrink-0 text-[#4ADE80]" />
                <span>WhatsApp Instant Enquiry</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Policies */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-7 text-xs text-[#F6F2EA]/50 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {BUSINESS.name}, Mullodi, Kudremukh.
            All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <button
              type="button"
              onClick={() => setModalType('guidelines')}
              className="transition hover:text-[#F6F2EA] cursor-pointer"
            >
              House Guidelines
            </button>
            <button
              type="button"
              onClick={() => setModalType('privacy')}
              className="transition hover:text-[#F6F2EA] cursor-pointer"
            >
              Privacy Note
            </button>
          </div>
        </div>
      </div>

      {/* Simple Info Modal */}
      <AnimatePresence>
        {modalType && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModalType(null)}
            className="fixed inset-0 z-[85] flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-lg rounded-3xl border border-white/15 bg-[#0E1B16] p-6 sm:p-7 text-[#F6F2EA] shadow-2xl"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <h3 className="font-serif text-2xl font-semibold">
                  {modalType === 'guidelines'
                    ? 'Homestay & Eco-Trek Guidelines'
                    : 'Privacy Note'}
                </h3>
                <button
                  type="button"
                  onClick={() => setModalType(null)}
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 hover:bg-[#C85A2B] cursor-pointer"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {modalType === 'guidelines' ? (
                <ul className="mt-4 space-y-2.5 text-sm text-[#F6F2EA]/80 list-disc pl-5">
                  <li>
                    Inform Abhilash in advance if arriving late at night so your
                    4x4 Jeep transfer from Samse/checkpost road is arranged on
                    time.
                  </li>
                  <li>
                    Carry valid government photo ID for Kudremukh National Park
                    Forest Checkpost permissions.
                  </li>
                  <li>
                    Please respect Mullodi’s serene Western Ghats ecosystem —
                    avoid littering plastic on the trail or near the waterfall
                    stream.
                  </li>
                  <li>
                    Let Sharadha Amma know your veg/non-veg meal preferences
                    (including Pork Pepper Dry requests) before arrival.
                  </li>
                </ul>
              ) : (
                <p className="mt-4 text-sm leading-relaxed text-[#F6F2EA]/80">
                  Bettada Madilu Homestay uses your enquiry details (name, phone
                  number, travel dates, and group size) solely to respond to your
                  stay and 4x4 Jeep transfer enquiry over WhatsApp or phone. We
                  do not sell or share guest contact details with third parties.
                </p>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  )
}
