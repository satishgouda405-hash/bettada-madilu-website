import React, { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import {
  ArrowDownRight,
  Compass,
  Flame,
  MapPin,
  MessageCircle,
  Phone,
  Star,
  Truck,
  Users,
  UtensilsCrossed,
} from 'lucide-react'
import { BUSINESS, buildWhatsAppLink } from '../data/homestayData'

interface HeroProps {
  onEnquireClick: () => void
}

export const Hero: React.FC<HeroProps> = ({ onEnquireClick }) => {
  const heroRef = useRef<HTMLElement>(null)
  const [gifLoaded, setGifLoaded] = useState(false)

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })

  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '22%'])
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.03, 1.16])
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.15])

  const waUrl = buildWhatsAppLink(
    'Hi Abhilash Anna! I would like to check availability & packages at Bettada Madilu Homestay, Mullodi (Kudremukh).'
  )

  const telemetry = [
    {
      icon: Flame,
      label: 'Starting Tariff',
      value: '₹2,000 / night',
      sub: 'Budget-friendly packages',
    },
    {
      icon: Users,
      label: 'Group Capacity',
      value: '20+ Guests',
      sub: '4 Bedrooms + Tents',
    },
    {
      icon: UtensilsCrossed,
      label: 'Malnad Food Plan',
      value: '4-Meal Cycle',
      sub: 'Includes Packed Trek Lunch',
    },
    {
      icon: Truck,
      label: '4x4 Jeep Support',
      value: 'Open 24 Hours',
      sub: 'Midnight Pickup & Drop',
    },
  ]

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative flex min-h-screen w-full flex-col justify-between overflow-hidden bg-[#09120E] pt-28 pb-10 sm:pt-32"
    >
      {/* Full-bleed Parallax Media Stack */}
      <motion.div
        style={{ y: bgY, scale: bgScale }}
        className="pointer-events-none absolute inset-0 z-0"
      >
        {/* Instant Crisp Poster Fallback */}
        <img
          src="/images/hero-poster.jpg"
          alt="Bettada Madilu Homestay nestled in misty Mullodi hills, Kudremukh"
          className="h-full w-full object-cover object-center brightness-[0.68] saturate-[1.08]"
        />
        {/* Live Animated Panoramic GIF Layer */}
        <img
          src="/images/hero-pan.gif"
          alt="Live panoramic view of Bettada Madilu Homestay in Mullodi, Kudremukh"
          onLoad={() => setGifLoaded(true)}
          className={`absolute inset-0 h-full w-full object-cover object-center brightness-[0.72] contrast-[1.05] saturate-[1.12] transition-opacity duration-1000 ${
            gifLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Atmospheric Color Grading & Editorial Vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#09120E]/80 via-[#0E1B16]/40 to-[#0E1B16]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#09120E]/85 via-[#09120E]/35 to-transparent" />

        {/* Subtle Drifting Western Ghats Mist Clouds */}
        <div className="animate-mist absolute -top-20 -left-1/4 h-[520px] w-[140%] rounded-full bg-gradient-to-r from-transparent via-[#F6F2EA]/12 to-transparent blur-[90px]" />
        <div className="animate-mist-slow absolute bottom-10 -right-1/4 h-[360px] w-[120%] rounded-full bg-gradient-to-r from-transparent via-[#C85A2B]/14 to-transparent blur-[110px]" />
      </motion.div>

      {/* Subtle Editorial Grain */}
      <div className="grain-overlay absolute inset-0 z-[1]" />

      {/* Main Hero Content */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 mx-auto my-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12"
      >
        <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-12">
          {/* Left Editorial Column */}
          <div className="lg:col-span-8">
            {/* Live Location & Rating Pill */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mb-6 inline-flex flex-wrap items-center gap-2.5 rounded-full border border-white/15 bg-[#0E1B16]/70 px-4 py-2 backdrop-blur-md shadow-xl"
            >
              <span className="flex items-center gap-1.5 text-xs font-semibold text-[#D4A24C]">
                <Star className="h-3.5 w-3.5 fill-[#D4A24C] text-[#D4A24C]" />
                {BUSINESS.rating} / 5
              </span>
              <span className="text-white/25">•</span>
              <span className="text-xs font-medium text-[#F6F2EA]/90">
                {BUSINESS.reviewCount}+ Google Reviews
              </span>
              <span className="hidden sm:inline text-white/25">•</span>
              <span className="hidden sm:flex items-center gap-1 font-mono text-[11px] uppercase tracking-wider text-[#F6F2EA]/75">
                <MapPin className="h-3 w-3 text-[#C85A2B]" />
                Mullodi, Kudremukh
              </span>
            </motion.div>

            {/* Monumental Display Headline */}
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: 55, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.9,
                  delay: 0.3,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[5.25rem] font-semibold leading-[0.98] tracking-tight text-[#F6F2EA]"
              >
                Your Basecamp to{' '}
                <span className="relative inline-block italic font-normal text-[#E7C076]">
                  Kudremukh Peak
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 280 14"
                    className="absolute -bottom-2 left-0 w-full text-[#C85A2B]"
                    fill="none"
                  >
                    <motion.path
                      d="M3 10 C 75 2, 185 2, 277 10"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1.1, delay: 0.85 }}
                    />
                  </svg>
                </span>
              </motion.h1>
            </div>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.48 }}
              className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-[#F6F2EA]/82"
            >
              Authentic family-run Malnad hospitality in{' '}
              <span className="font-semibold text-[#F6F2EA]">Mullodi</span>, minutes
              from the Kudremukh Forest Checkpost. Hosted with warmth by{' '}
              <span className="text-[#E7C076] font-medium">
                Abhilash &amp; Sharadha Amma
              </span>{' '}
              — featuring scenic hill-view rooms, starlit tents, 4-meal home-cooked
              Malnad food, and midnight 4x4 Jeep pickups.
            </motion.p>

            {/* Primary & Secondary CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.62 }}
              className="mt-8 flex flex-wrap items-center gap-3.5"
            >
              <button
                type="button"
                onClick={onEnquireClick}
                className="btn-shimmer group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#C85A2B] to-[#D96934] px-7 py-4 text-sm sm:text-base font-semibold text-[#F6F2EA] shadow-[0_14px_38px_rgba(200,90,43,0.42)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_46px_rgba(200,90,43,0.58)] cursor-pointer"
              >
                <span>Enquire Now</span>
                <ArrowDownRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </button>

              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 rounded-full border border-[#F6F2EA]/25 bg-[#0E1B16]/65 px-7 py-4 text-sm sm:text-base font-semibold text-[#F6F2EA] backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-[#25D366]/70 hover:bg-[#25D366]/15"
              >
                <MessageCircle className="h-4 w-4 text-[#4ADE80] transition-transform group-hover:scale-110" />
                <span>WhatsApp</span>
              </a>

              <a
                href={`tel:+${BUSINESS.phoneRaw}`}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-4 text-sm font-medium text-[#F6F2EA]/90 backdrop-blur-sm transition hover:bg-white/10"
              >
                <Phone className="h-4 w-4 text-[#D4A24C]" />
                <span>{BUSINESS.phoneDisplay}</span>
              </a>
            </motion.div>
          </div>

          {/* Right Floating Atmospheric Coordinates Card */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85, delay: 0.72 }}
            className="hidden lg:block lg:col-span-4"
          >
            <div className="rounded-3xl border border-white/15 bg-[#0E1B16]/65 p-5 backdrop-blur-xl shadow-2xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-3.5">
                <span className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-[#D4A24C]">
                  <Compass className="h-3.5 w-3.5" />
                  Western Ghats · Karnataka
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 px-2.5 py-0.5 text-[11px] font-medium text-emerald-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Open 24/7
                </span>
              </div>

              <div className="mt-4 overflow-hidden rounded-2xl border border-white/10">
                <img
                  src="/images/tents-house.jpg"
                  alt="Bettada Madilu Homestay and camping tents facing Kudremukh valley"
                  className="h-36 w-full object-cover transition duration-700 hover:scale-105"
                />
              </div>

              <div className="mt-4 flex items-center justify-between">
                <div>
                  <p className="font-serif text-xl font-semibold text-[#F6F2EA]">
                    Bettada Madilu
                  </p>
                  <p className="text-xs text-[#F6F2EA]/65">
                    “{BUSINESS.kannadaMeaning}”
                  </p>
                </div>
                <div className="text-right font-mono">
                  <p className="text-xs text-[#D4A24C]">{BUSINESS.peakElevation}</p>
                  <p className="text-[10px] text-[#F6F2EA]/55">Peak Summit</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom Floating Telemetry Ribbon */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.78 }}
        className="relative z-10 mx-auto mt-6 w-full max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          {telemetry.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.label}
                className="group rounded-2xl border border-white/12 bg-[#0E1B16]/72 p-4 backdrop-blur-xl transition-all duration-300 hover:border-[#C85A2B]/55 hover:bg-[#152921]/85"
              >
                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#C85A2B]/18 text-[#E0723F] transition-colors group-hover:bg-[#C85A2B] group-hover:text-[#F6F2EA]">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#F6F2EA]/55">
                      {item.label}
                    </p>
                    <p className="mt-0.5 text-sm sm:text-base font-semibold text-[#F6F2EA]">
                      {item.value}
                    </p>
                    <p className="mt-0.5 truncate text-[11px] text-[#D4A24C]/90">
                      {item.sub}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}
