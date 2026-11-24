import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion'
import { Menu, Mountain, Phone, MessageCircle, X } from 'lucide-react'
import { BUSINESS, buildWhatsAppLink } from '../data/homestayData'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Stay', href: '#stay' },
  { label: 'Trek & Food', href: '#trek-food' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
]

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [elevation, setElevation] = useState(850)
  const { scrollYProgress } = useScroll()
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight
      const ratio = docHeight > 0 ? Math.min(1, Math.max(0, window.scrollY / docHeight)) : 0
      setElevation(Math.round(850 + ratio * (1894 - 850)))
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const waUrl = buildWhatsAppLink(
    'Hello Abhilash Anna! I visited the Bettada Madilu Homestay website and would like to enquire about a stay in Mullodi, Kudremukh.'
  )

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#0E1B16]/88 backdrop-blur-xl border-b border-white/10 py-3 shadow-[0_12px_40px_rgba(0,0,0,0.35)]'
            : 'bg-gradient-to-b from-[#09120E]/80 via-[#09120E]/35 to-transparent py-5'
        }`}
      >
        {/* Scroll Ascent Progress Line */}
        <motion.div
          style={{ scaleX, transformOrigin: 'left' }}
          className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#C85A2B] via-[#D4A24C] to-[#4F8A69]"
        />

        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Brand Logo */}
          <a href="#home" className="group flex items-center gap-3">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#C85A2B] to-[#963E18] text-[#F6F2EA] shadow-lg shadow-[#C85A2B]/25 transition-transform duration-300 group-hover:scale-105">
              <Mountain className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-2.5 w-2.5 rounded-full bg-[#D4A24C] ring-2 ring-[#0E1B16]" />
            </div>
            <div>
              <span className="block font-serif text-xl sm:text-2xl font-semibold leading-none tracking-wide text-[#F6F2EA]">
                Bettada Madilu
              </span>
              <span className="mt-1 flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-[#D4A24C]">
                <span>Mullodi · Kudremukh</span>
                <span className="hidden sm:inline text-white/35">|</span>
                <span className="hidden sm:inline text-[#F6F2EA]/75">{elevation}m</span>
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] px-2 py-1.5 backdrop-blur-md">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-3.5 py-1.5 text-[13px] font-medium text-[#F6F2EA]/80 transition-all duration-200 hover:bg-white/10 hover:text-[#F6F2EA]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Quick Actions */}
          <div className="hidden md:flex items-center gap-2.5">
            <a
              href={`tel:+${BUSINESS.phoneRaw}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.05] px-3.5 py-2 text-xs font-medium text-[#F6F2EA] transition-all hover:border-[#D4A24C]/60 hover:bg-white/10"
            >
              <Phone className="h-3.5 w-3.5 text-[#D4A24C]" />
              <span>{BUSINESS.phoneDisplay}</span>
            </a>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shimmer inline-flex items-center gap-2 rounded-full bg-[#C85A2B] px-4 py-2 text-xs font-semibold tracking-wide text-[#F6F2EA] shadow-lg shadow-[#C85A2B]/30 transition-all hover:bg-[#DF6A37]"
            >
              <MessageCircle className="h-3.5 w-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            className="flex lg:hidden h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-[#F6F2EA] transition hover:bg-white/15"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] bg-black/70 backdrop-blur-sm lg:hidden"
            onClick={() => setMobileOpen(false)}
          >
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
              onClick={(e) => e.stopPropagation()}
              className="ml-auto flex h-full w-[82%] max-w-sm flex-col justify-between border-l border-white/10 bg-[#0E1B16] p-6 shadow-2xl"
            >
              <div>
                <div className="flex items-center justify-between border-b border-white/10 pb-5">
                  <div>
                    <p className="font-serif text-2xl font-semibold text-[#F6F2EA]">
                      Bettada Madilu
                    </p>
                    <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#D4A24C]">
                      Mullodi · Kudremukh
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setMobileOpen(false)}
                    aria-label="Close menu"
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 text-[#F6F2EA]"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <nav className="mt-6 flex flex-col gap-1.5">
                  {NAV_LINKS.map((link, idx) => (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * idx }}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium text-[#F6F2EA]/85 transition hover:bg-white/8 hover:text-[#F6F2EA]"
                    >
                      <span>{link.label}</span>
                      <span className="font-mono text-[11px] text-[#D4A24C]/70">
                        0{idx + 1}
                      </span>
                    </motion.a>
                  ))}
                </nav>
              </div>

              <div className="space-y-3 border-t border-white/10 pt-5">
                <p className="text-xs text-[#F6F2EA]/60">
                  Open 24 Hours · Midnight 4x4 Jeep Support
                </p>
                <a
                  href={`tel:+${BUSINESS.phoneRaw}`}
                  className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 py-3 text-sm font-medium text-[#F6F2EA]"
                >
                  <Phone className="h-4 w-4 text-[#D4A24C]" />
                  <span>Call {BUSINESS.phoneDisplay}</span>
                </a>
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#C85A2B] py-3 text-sm font-semibold text-[#F6F2EA] shadow-lg shadow-[#C85A2B]/30"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
