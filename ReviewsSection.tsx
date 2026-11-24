import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Quote, Star } from 'lucide-react'
import { BUSINESS, GUEST_REVIEWS } from '../data/homestayData'
import { TopographicBg } from './TopographicBg'

export const ReviewsSection: React.FC = () => {
  // Duplicate for seamless infinite marquee loop
  const track = [...GUEST_REVIEWS, ...GUEST_REVIEWS]

  return (
    <section
      id="reviews"
      className="relative overflow-hidden bg-[#0A1410] py-20 sm:py-28 lg:py-32 text-[#F6F2EA]"
    >
      <TopographicBg
        stroke="#4F8A69"
        opacity={0.07}
        className="absolute inset-0 h-full w-full"
      />
      <div className="pointer-events-none absolute top-0 left-1/2 h-[320px] w-[620px] -translate-x-1/2 rounded-full bg-[#D4A24C]/10 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top Rating Summary Header */}
        <div className="grid grid-cols-1 items-end gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#D4A24C]/35 bg-[#D4A24C]/12 px-3.5 py-1 font-mono text-[11px] uppercase tracking-[0.22em] text-[#E7C076]">
              Guest Voices · Verified Reputation
            </span>
            <h2 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-[3.5rem] font-semibold leading-[1.06] text-[#F6F2EA]">
              Loved by{' '}
              <span className="italic text-[#E7C076]">203+ Trekkers</span> &amp;
              Families
            </h2>
            <p className="mt-4 max-w-2xl text-base sm:text-lg leading-relaxed text-[#F6F2EA]/72">
              Guests consistently praise Abhilasha Anna &amp; Sharadha Amma for
              family-like warmth, midnight 4x4 jeep reliability, spotless
              hygiene, and unforgettable Malnad food.
            </p>
          </div>

          {/* Google Rating Badge Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5"
          >
            <div className="flex items-center justify-between gap-4 rounded-3xl border border-white/12 bg-gradient-to-br from-[#162C23] to-[#0E1B16] p-6 shadow-2xl">
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="font-serif text-5xl font-bold text-[#F6F2EA]">
                    {BUSINESS.rating}
                  </span>
                  <span className="text-sm text-[#F6F2EA]/55">/ 5.0</span>
                </div>
                <div className="mt-1.5 flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-[#D4A24C] text-[#D4A24C]"
                    />
                  ))}
                </div>
                <p className="mt-2 text-xs text-[#F6F2EA]/70">
                  Based on <strong className="text-[#F6F2EA]">{BUSINESS.reviewCount} Google Reviews</strong>
                </p>
              </div>

              <a
                href={BUSINESS.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-[#D4A24C]/40 bg-[#D4A24C]/12 px-4 py-2.5 text-xs font-semibold text-[#E7C076] transition hover:bg-[#D4A24C] hover:text-[#0E1B16]"
              >
                <span>View on Maps</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Smooth Infinite Review Marquee */}
      <div className="relative z-10 mt-14 w-full overflow-hidden">
        {/* Edge Fade Masks */}
        <div className="pointer-events-none absolute top-0 bottom-0 left-0 z-20 w-16 sm:w-28 bg-gradient-to-r from-[#0A1410] to-transparent" />
        <div className="pointer-events-none absolute top-0 bottom-0 right-0 z-20 w-16 sm:w-28 bg-gradient-to-l from-[#0A1410] to-transparent" />

        <div className="animate-marquee gap-5 px-4">
          {track.map((review, index) => (
            <article
              key={`${review.id}-${index}`}
              className="flex w-[320px] sm:w-[390px] shrink-0 flex-col justify-between rounded-3xl border border-white/10 bg-[#13251E]/85 p-6 sm:p-7 backdrop-blur-md transition-colors duration-300 hover:border-[#C85A2B]/55"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-[#C85A2B]/18 px-3 py-1 text-[11px] font-semibold text-[#E0723F]">
                    {review.highlight}
                  </span>
                  <Quote className="h-5 w-5 text-[#D4A24C]/45" />
                </div>

                <div className="mt-4 flex items-center gap-0.5">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-3.5 w-3.5 fill-[#D4A24C] text-[#D4A24C]"
                    />
                  ))}
                </div>

                <p className="mt-3.5 text-sm leading-relaxed text-[#F6F2EA]/85">
                  “{review.text}”
                </p>
              </div>

              <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#C85A2B] to-[#D4A24C] font-serif text-lg font-bold text-[#0E1B16]">
                  {review.author.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#F6F2EA]">
                    {review.author}
                  </p>
                  <p className="text-[11px] text-[#F6F2EA]/58">{review.tag}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Subtle Hover Hint */}
      <p className="relative z-10 mt-6 text-center font-mono text-[10px] uppercase tracking-[0.24em] text-[#F6F2EA]/40">
        Hover any card to pause · All themes verified from real Mullodi guest feedback
      </p>
    </section>
  )
}
