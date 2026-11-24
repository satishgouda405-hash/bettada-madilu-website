import React, { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Clock,
  HeartHandshake,
  MapPin,
  ShieldCheck,
  Sparkles,
  Truck,
} from 'lucide-react'
import { BUSINESS } from '../data/homestayData'
import { TopographicBg } from './TopographicBg'

interface CounterProps {
  target: number
  decimals?: number
  suffix?: string
}

const AnimatedCounter: React.FC<CounterProps> = ({
  target,
  decimals = 0,
  suffix = '',
}) => {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const [val, setVal] = useState(0)

  useEffect(() => {
    if (!inView) return
    const duration = 1200
    const start = performance.now()
    let rafId = 0

    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / duration)
      const eased = 1 - Math.pow(1 - progress, 3)
      setVal(eased * target)
      if (progress < 1) {
        rafId = requestAnimationFrame(tick)
      }
    }
    rafId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafId)
  }, [inView, target])

  return (
    <span ref={ref}>
      {decimals > 0 ? val.toFixed(decimals) : Math.round(val)}
      {suffix}
    </span>
  )
}

export const AboutStory: React.FC = () => {
  const pillars = [
    {
      icon: HeartHandshake,
      title: 'Treated Like Family',
      desc: 'Warm, personal care by Abhilash (Abhilasha Anna) and Sharadha Amma — safe, welcoming, and genuine for solo trekkers, friend groups, and families alike.',
    },
    {
      icon: MapPin,
      title: 'Minutes to Checkpost',
      desc: 'Situated right in Mullodi, steps from the Kudremukh Forest Checkpost — letting your group begin the summit trek early without tiring morning travel.',
    },
    {
      icon: Truck,
      title: 'Midnight 4x4 Jeep Support',
      desc: 'Arriving at 1 AM? Pre-arranged off-road 4x4 jeeps pick you up reliably at odd hours and drop you right to the trek base camp in the morning.',
    },
    {
      icon: ShieldCheck,
      title: 'Hygienic & High Value',
      desc: 'Spotless, simple rooms and clean washrooms paired with generous home-cooked Malnad meals at honest, budget-friendly Mullodi tariffs.',
    },
  ]

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#F6F2EA] text-[#0E1B16] py-20 sm:py-28 lg:py-32"
    >
      {/* Subtle Architectural Scallop Accent inspired by Bettada Madilu's veranda */}
      <div className="malnad-scallop absolute top-0 left-0 right-0 h-3 opacity-35" />

      {/* Topographic Contours */}
      <TopographicBg
        stroke="#0E1B16"
        opacity={0.055}
        className="absolute inset-0 h-full w-full"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Editorial Image Collage */}
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative lg:col-span-6"
          >
            {/* Primary Horizontal Frame */}
            <div className="relative overflow-hidden rounded-[2rem] border border-[#0E1B16]/10 bg-[#EDE6D8] shadow-[0_28px_70px_rgba(14,27,22,0.16)]">
              <img
                src="/images/guests-balcony.jpg"
                alt="Guests standing on Bettada Madilu veranda with panoramic Kudremukh green hills behind"
                className="h-[340px] sm:h-[430px] w-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E1B16]/65 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-[#F6F2EA]">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#E7C076]">
                    Veranda View · Mullodi
                  </p>
                  <p className="font-serif text-xl sm:text-2xl font-medium">
                    Kudremukh Ridges Right Outside Your Door
                  </p>
                </div>
              </div>
            </div>

            {/* Overlapping Floating Secondary Photo */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, delay: 0.25 }}
              className="mt-4 sm:mt-0 sm:absolute sm:-bottom-10 sm:-right-6 w-full sm:w-56 overflow-hidden rounded-2xl border-4 border-[#F6F2EA] bg-[#0E1B16] shadow-2xl"
            >
              <img
                src="/images/group-front.jpg"
                alt="Happy trekking squad outside Bettada Madilu Homestay"
                className="h-44 sm:h-48 w-full object-cover object-top"
              />
              <div className="bg-[#0E1B16] px-3.5 py-2.5 text-[#F6F2EA]">
                <p className="font-mono text-[10px] uppercase tracking-wider text-[#D4A24C]">
                  20+ Group Friendly
                </p>
                <p className="text-xs font-medium text-[#F6F2EA]/85">
                  Trekking batches &amp; families
                </p>
              </div>
            </motion.div>

            {/* Floating Host Seal */}
            <div className="hidden sm:flex absolute -top-5 -left-5 items-center gap-3 rounded-2xl border border-[#0E1B16]/10 bg-[#F6F2EA]/95 px-4 py-3 shadow-xl backdrop-blur-md">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#C85A2B] text-[#F6F2EA]">
                <Sparkles className="h-5 w-5" />
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#C85A2B]">
                  Family-Run Stay
                </p>
                <p className="text-xs font-semibold text-[#0E1B16]">
                  Abhilash &amp; Sharadha Amma
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Editorial Story Copy */}
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, delay: 0.12 }}
            className="lg:col-span-6 lg:pl-4"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-[#C85A2B]/30 bg-[#C85A2B]/10 px-3.5 py-1 font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-[#A8461D]">
              Our Story · About Bettada Madilu
            </span>

            <h2 className="mt-5 font-serif text-4xl sm:text-5xl lg:text-[3.4rem] font-semibold leading-[1.06] text-[#0E1B16]">
              Literally meaning{' '}
              <span className="italic text-[#C85A2B]">
                “In the Lap of the Hills”
              </span>
            </h2>

            <p className="mt-5 text-base sm:text-lg leading-relaxed text-[#0E1B16]/78">
              Tucked into the lush emerald folds of{' '}
              <strong className="font-semibold text-[#0E1B16]">
                Mullodi, Kudremukh
              </strong>
              , Bettada Madilu Homestay isn’t a commercial resort — it is a warm
              Malnad family home built for mountain lovers, summit chasers, and
              peace-seeking families.
            </p>

            <p className="mt-4 text-base leading-relaxed text-[#0E1B16]/72">
              Run lovingly by{' '}
              <strong className="font-semibold text-[#0E1B16]">
                {BUSINESS.hosts}
              </strong>
              , our hospitality philosophy is simple: whether your 4x4 jeep rolls
              in at midnight or you return soaked and smiling from Kudremukh Peak,
              you are welcomed with a hot meal, spotless rooms, and the comfort of
              home.
            </p>

            {/* Count-Up Metrics Strip */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 rounded-2xl border border-[#0E1B16]/10 bg-[#EDE6D8]/75 p-5">
              <div>
                <p className="font-serif text-3xl sm:text-4xl font-bold text-[#C85A2B]">
                  <AnimatedCounter target={4.9} decimals={1} suffix="★" />
                </p>
                <p className="mt-1 text-xs font-medium text-[#0E1B16]/70">
                  Google Rating
                </p>
              </div>
              <div>
                <p className="font-serif text-3xl sm:text-4xl font-bold text-[#0E1B16]">
                  <AnimatedCounter target={203} suffix="+" />
                </p>
                <p className="mt-1 text-xs font-medium text-[#0E1B16]/70">
                  Guest Reviews
                </p>
              </div>
              <div>
                <p className="font-serif text-3xl sm:text-4xl font-bold text-[#2E5A44]">
                  <AnimatedCounter target={20} suffix="+" />
                </p>
                <p className="mt-1 text-xs font-medium text-[#0E1B16]/70">
                  Group Capacity
                </p>
              </div>
              <div>
                <p className="font-serif text-3xl sm:text-4xl font-bold text-[#0E1B16]">
                  24/7
                </p>
                <p className="mt-1 flex items-center gap-1 text-xs font-medium text-[#0E1B16]/70">
                  <Clock className="h-3 w-3 text-[#C85A2B]" /> Check-in
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 4 Hospitality Pillars ("Why Stay With Us") */}
        <div className="mt-20 sm:mt-24 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                className="group rounded-3xl border border-[#0E1B16]/10 bg-[#FAF8F3] p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[#C85A2B]/40 hover:shadow-[0_18px_40px_rgba(14,27,22,0.1)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0E1B16] text-[#E7C076] transition-colors duration-300 group-hover:bg-[#C85A2B] group-hover:text-[#F6F2EA]">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-serif text-2xl font-semibold text-[#0E1B16]">
                  {pillar.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-[#0E1B16]/72">
                  {pillar.desc}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
