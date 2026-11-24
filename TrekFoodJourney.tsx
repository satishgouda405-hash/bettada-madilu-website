import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  Check,
  Clock,
  Compass,
  Flame,
  MessageCircle,
  Sparkles,
  Truck,
  UtensilsCrossed,
} from 'lucide-react'
import { TREK_JOURNEY, buildWhatsAppLink } from '../data/homestayData'

export const TrekFoodJourney: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(1) // Default to Bonfire & Malnad Dinner visual impact
  const activeStep = TREK_JOURNEY[activeIndex]

  const waPackageUrl = buildWhatsAppLink(
    'Hello Abhilash Anna! I want to enquire about the All-Inclusive Kudremukh Trek Package (Stay + 4-Meal Malnad Plan + 4x4 Jeep Pickup/Drop) at Bettada Madilu Homestay.'
  )

  return (
    <section
      id="trek-food"
      className="relative overflow-hidden bg-gradient-to-b from-[#0E1B16] via-[#13241D] to-[#0E1B16] py-20 sm:py-28 lg:py-32 text-[#F6F2EA]"
    >
      {/* Warm Bonfire Ambient Glow */}
      <div className="animate-ember pointer-events-none absolute top-1/3 -left-24 h-[420px] w-[420px] rounded-full bg-[#C85A2B]/18 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-10 right-0 h-[360px] w-[360px] rounded-full bg-[#D4A24C]/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#C85A2B]/40 bg-[#C85A2B]/15 px-3.5 py-1 font-mono text-[11px] uppercase tracking-[0.22em] text-[#E0723F]">
            <Compass className="h-3.5 w-3.5" />
            All-Inclusive Trekker’s Package
          </span>
          <h2 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-[3.5rem] font-semibold leading-[1.06] text-[#F6F2EA]">
            4-Meal Malnad Feast &amp;{' '}
            <span className="italic text-[#E7C076]">4x4 Jeep Logistics</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-[#F6F2EA]/75">
            From midnight 4x4 jeep pickups to packed peak lunch boxes and
            post-trek waterfall dips — we take care of every single detail so
            you only focus on conquering Kudremukh.
          </p>
        </div>

        {/* Interactive 24-Hour Trekker Timeline */}
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-stretch">
          {/* Left Interactive Step Selector */}
          <div className="flex flex-col gap-3 lg:col-span-6">
            {TREK_JOURNEY.map((item, idx) => {
              const isActive = idx === activeIndex
              return (
                <button
                  key={item.step}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  className={`group relative w-full rounded-3xl border p-5 text-left transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'border-[#C85A2B]/70 bg-gradient-to-r from-[#1A3329] to-[#142720] shadow-[0_16px_42px_rgba(0,0,0,0.35)]'
                      : 'border-white/10 bg-white/[0.03] hover:border-white/25 hover:bg-white/[0.06]'
                  }`}
                >
                  {/* Active Left Glow Bar */}
                  {isActive && (
                    <motion.span
                      layoutId="activeStepBar"
                      className="absolute top-4 bottom-4 left-0 w-1 rounded-r-full bg-gradient-to-b from-[#E0723F] to-[#D4A24C]"
                    />
                  )}

                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <span
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl font-mono text-xs font-semibold transition-colors ${
                          isActive
                            ? 'bg-[#C85A2B] text-[#F6F2EA]'
                            : 'bg-white/8 text-[#D4A24C] group-hover:bg-white/15'
                        }`}
                      >
                        {item.step}
                      </span>
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-[0.16em] text-[#D4A24C]">
                            <Clock className="h-3 w-3" />
                            {item.time}
                          </span>
                          <span className="rounded-full bg-white/8 px-2.5 py-0.5 text-[10px] font-medium text-[#F6F2EA]/80">
                            {item.tag}
                          </span>
                        </div>
                        <h3 className="mt-1.5 font-serif text-xl sm:text-2xl font-semibold text-[#F6F2EA]">
                          {item.title}
                        </h3>
                        <p
                          className={`mt-1.5 text-xs sm:text-sm leading-relaxed transition-colors ${
                            isActive ? 'text-[#F6F2EA]/82' : 'text-[#F6F2EA]/58 line-clamp-2'
                          }`}
                        >
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </button>
              )
            })}
          </div>

          {/* Right Dynamic Visual Stage */}
          <div className="lg:col-span-6">
            <div className="relative h-full min-h-[440px] overflow-hidden rounded-[2rem] border border-white/15 bg-[#09120E] shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep.step}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  className="relative flex h-full min-h-[440px] flex-col justify-end"
                >
                  <img
                    src={activeStep.image}
                    alt={activeStep.title}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#09120E] via-[#09120E]/55 to-transparent" />

                  <div className="relative z-10 p-6 sm:p-8">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#C85A2B] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-[#F6F2EA]">
                      Phase {activeStep.step} · {activeStep.tag}
                    </span>
                    <h3 className="mt-3 font-serif text-3xl sm:text-4xl font-semibold text-[#F6F2EA]">
                      {activeStep.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-[#F6F2EA]/82">
                      {activeStep.description}
                    </p>

                    <ul className="mt-5 space-y-2">
                      {activeStep.highlights.map((h) => (
                        <li
                          key={h}
                          className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-[#E7C076]"
                        >
                          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#D4A24C]/20 text-[#E7C076]">
                            <Check className="h-3 w-3" />
                          </span>
                          <span className="text-[#F6F2EA]/92">{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Bottom Editorial Highlight Cards: Sharadha Amma's Malnad Kitchen + 4x4 Jeep Support */}
        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Malnad Food Spotlight */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-[2rem] border border-[#D4A24C]/30 bg-gradient-to-br from-[#1B3328] via-[#14261E] to-[#1A1A16] p-7 sm:p-8 lg:col-span-7"
          >
            <div className="pointer-events-none absolute -top-12 -right-12 h-48 w-48 rounded-full bg-[#C85A2B]/25 blur-[70px]" />

            <div className="relative z-10">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-[#E7C076]">
                  <UtensilsCrossed className="h-4 w-4 text-[#E0723F]" />
                  Sharadha Amma’s Malnad Kitchen
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[#E0723F]/40 bg-[#C85A2B]/20 px-3 py-1 text-[11px] font-semibold text-[#F6F2EA]">
                  <Flame className="h-3.5 w-3.5 text-[#E0723F]" />
                  Guest Favorite: Pork Pepper Dry
                </span>
              </div>

              <h3 className="mt-4 font-serif text-3xl sm:text-4xl font-semibold text-[#F6F2EA]">
                The Complete 4-Meal Trekking Feast
              </h3>
              <p className="mt-2.5 text-sm sm:text-base leading-relaxed text-[#F6F2EA]/78">
                Homely, fresh, hygienic Malnad-style food served in generous
                portions — cooked with local spices and mountain warmth so no
                trekker ever climbs hungry.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {[
                  { num: '01', title: 'Arrival Dinner', sub: 'Malnad Veg & Non-Veg' },
                  { num: '02', title: 'Early Breakfast', sub: 'Pre-trek morning fuel' },
                  { num: '03', title: 'Packed Lunch', sub: 'Carried to Kudremukh Peak' },
                  { num: '04', title: 'Evening Snacks', sub: 'Hot tea & post-hike bites' },
                ].map((meal) => (
                  <div
                    key={meal.num}
                    className="rounded-2xl border border-white/10 bg-[#0E1B16]/70 p-3.5"
                  >
                    <p className="font-mono text-[10px] text-[#D4A24C]">{meal.num}</p>
                    <p className="mt-1 text-sm font-semibold text-[#F6F2EA]">
                      {meal.title}
                    </p>
                    <p className="mt-0.5 text-[11px] text-[#F6F2EA]/60">
                      {meal.sub}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* 4x4 Jeep & Trek Permission Card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex flex-col justify-between rounded-[2rem] border border-white/12 bg-[#14261E]/90 p-7 sm:p-8 lg:col-span-5"
          >
            <div>
              <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-[#D4A24C]">
                <Truck className="h-4 w-4 text-[#E0723F]" />
                End-to-End Trek Coordination
              </span>
              <h3 className="mt-4 font-serif text-3xl font-semibold text-[#F6F2EA]">
                4x4 Jeeps &amp; Checkpost Access
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-[#F6F2EA]/80">
                <li className="flex items-start gap-2.5">
                  <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-[#E0723F]" />
                  <span>
                    <strong className="text-[#F6F2EA]">Odd-Hour Pickups:</strong>{' '}
                    Proven midnight jeep pickups from Samse / Kudremukh road up to
                    Mullodi.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-[#D4A24C]" />
                  <span>
                    <strong className="text-[#F6F2EA]">Early Head-Start:</strong>{' '}
                    Close to the Kudremukh Forest Checkpost with morning jeep drop
                    to the trek base.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-[#4F8A69]" />
                  <span>
                    <strong className="text-[#F6F2EA]">Trek Guidance:</strong>{' '}
                    Abhilash assists with trek permissions, timings, and trail
                    amenities.
                  </span>
                </li>
              </ul>
            </div>

            <a
              href={waPackageUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shimmer mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#C85A2B] px-6 py-3.5 text-sm font-semibold text-[#F6F2EA] shadow-lg shadow-[#C85A2B]/30 transition hover:bg-[#DF6A37]"
            >
              <MessageCircle className="h-4 w-4" />
              <span>Ask About Trek &amp; Jeep Package</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
