import React from 'react'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  BedDouble,
  CheckCircle2,
  Droplets,
  Flame,
  MessageCircle,
  Mountain,
  ShieldCheck,
  Truck,
  Users,
  Utensils,
} from 'lucide-react'
import { STAY_OPTIONS, buildWhatsAppLink } from '../data/homestayData'
import { TopographicBg } from './TopographicBg'

interface StayRoomsProps {
  onSelectStay: (stayName: string) => void
}

const KEY_AMENITIES = [
  { icon: Mountain, label: 'Scenic Hill Views' },
  { icon: ShieldCheck, label: 'Hygienic Washrooms' },
  { icon: Flame, label: 'Evening Bonfire' },
  { icon: Droplets, label: 'Natural Waterfall Stream' },
  { icon: Utensils, label: '4-Meal Malnad Food' },
  { icon: Truck, label: '24/7 4x4 Jeep Support' },
]

export const StayRooms: React.FC<StayRoomsProps> = ({ onSelectStay }) => {
  return (
    <section
      id="stay"
      className="relative overflow-hidden bg-[#0E1B16] py-20 sm:py-28 lg:py-32 text-[#F6F2EA]"
    >
      {/* Ambient Radial Forest & Ember Glows */}
      <div className="pointer-events-none absolute top-10 left-1/2 h-[480px] w-[720px] -translate-x-1/2 rounded-full bg-[#2E5A44]/20 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[360px] w-[360px] rounded-full bg-[#C85A2B]/12 blur-[120px]" />
      <TopographicBg
        stroke="#D4A24C"
        opacity={0.055}
        className="absolute inset-0 h-full w-full"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#D4A24C]/30 bg-[#D4A24C]/10 px-3.5 py-1 font-mono text-[11px] uppercase tracking-[0.22em] text-[#E7C076]">
              Stay &amp; Accommodation · Mullodi
            </span>
            <h2 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-[3.5rem] font-semibold leading-[1.06] text-[#F6F2EA]">
              Wake Up Above the{' '}
              <span className="italic text-[#E7C076]">Shola Clouds</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-[#F6F2EA]/75">
              Simple, clean, hygienic spaces designed for trekkers, friend
              circles, and families of 20+ guests — offering unbeatable comfort
              and honest value in the Samse–Mullodi belt.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 backdrop-blur-md">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#D4A24C]">
              Direct Family Tariff
            </p>
            <p className="mt-1 font-serif text-2xl font-semibold text-[#F6F2EA]">
              Starting ₹2,000 <span className="text-sm font-sans font-normal text-[#F6F2EA]/65">/ night</span>
            </p>
            <p className="text-xs text-[#F6F2EA]/60">
              Custom all-inclusive trekker &amp; meal packages on enquiry
            </p>
          </div>
        </div>

        {/* Key Amenities Strip */}
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {KEY_AMENITIES.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.label}
                className="flex items-center gap-2.5 rounded-2xl border border-white/10 bg-[#152921]/75 px-3.5 py-3 text-xs font-medium text-[#F6F2EA]/90 transition hover:border-[#D4A24C]/40"
              >
                <Icon className="h-4 w-4 shrink-0 text-[#E0723F]" />
                <span>{item.label}</span>
              </div>
            )
          })}
        </div>

        {/* Accommodation Cards */}
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {STAY_OPTIONS.map((stay, idx) => {
            const waStayUrl = buildWhatsAppLink(
              `Hello Abhilash Anna! I'd like to enquire about "${stay.name}" at Bettada Madilu Homestay, Mullodi.`
            )

            return (
              <motion.article
                key={stay.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, delay: idx * 0.1 }}
                className={`group relative flex flex-col overflow-hidden rounded-[2rem] border transition-all duration-500 hover:-translate-y-2 ${
                  stay.featured
                    ? 'border-[#C85A2B]/60 bg-gradient-to-b from-[#172E25] to-[#101F19] shadow-[0_24px_60px_rgba(0,0,0,0.45)]'
                    : 'border-white/12 bg-[#13251E]/85 shadow-[0_18px_45px_rgba(0,0,0,0.3)] hover:border-[#D4A24C]/40'
                }`}
              >
                {/* Image Header */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={stay.image}
                    alt={stay.name}
                    className={`h-full w-full object-cover ${
                      stay.imagePosition || 'object-center'
                    } transition-transform duration-700 group-hover:scale-108`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#101F19] via-[#101F19]/25 to-transparent" />

                  {/* Badge */}
                  <span
                    className={`absolute top-4 left-4 rounded-full px-3.5 py-1 text-[11px] font-semibold backdrop-blur-md ${
                      stay.featured
                        ? 'bg-[#C85A2B] text-[#F6F2EA] shadow-lg'
                        : 'border border-white/20 bg-[#0E1B16]/75 text-[#E7C076]'
                    }`}
                  >
                    {stay.badge}
                  </span>

                  {/* Price Overlay */}
                  <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between">
                    <div>
                      <p className="font-serif text-3xl font-bold text-[#F6F2EA]">
                        {stay.price}
                      </p>
                      <p className="text-[11px] text-[#F6F2EA]/75">
                        {stay.priceNote}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
                  <div>
                    <h3 className="font-serif text-2xl sm:text-[1.75rem] font-semibold text-[#F6F2EA]">
                      {stay.name}
                    </h3>
                    <p className="mt-1 font-mono text-[11px] uppercase tracking-wider text-[#D4A24C]">
                      {stay.subtitle}
                    </p>
                    <p className="mt-3.5 text-sm leading-relaxed text-[#F6F2EA]/75">
                      {stay.description}
                    </p>

                    {/* Capacity & Bed Meta */}
                    <div className="mt-5 grid grid-cols-1 gap-2.5 rounded-2xl border border-white/10 bg-[#0E1B16]/60 p-3.5 text-xs">
                      <div className="flex items-center gap-2.5 text-[#F6F2EA]/90">
                        <Users className="h-4 w-4 shrink-0 text-[#E0723F]" />
                        <span>
                          <strong className="text-[#F6F2EA]">Capacity:</strong>{' '}
                          {stay.capacity}
                        </span>
                      </div>
                      <div className="flex items-center gap-2.5 text-[#F6F2EA]/90">
                        <BedDouble className="h-4 w-4 shrink-0 text-[#D4A24C]" />
                        <span>
                          <strong className="text-[#F6F2EA]">Setup:</strong>{' '}
                          {stay.bedType}
                        </span>
                      </div>
                    </div>

                    {/* Amenities List */}
                    <ul className="mt-5 grid grid-cols-1 gap-2 text-xs text-[#F6F2EA]/80">
                      {stay.amenities.map((amenity) => (
                        <li key={amenity} className="flex items-center gap-2">
                          <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-[#4F8A69]" />
                          <span>{amenity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Card Footer CTAs */}
                  <div className="mt-7 flex items-center gap-2.5 pt-4 border-t border-white/10">
                    <button
                      type="button"
                      onClick={() => onSelectStay(stay.name)}
                      className="btn-shimmer flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-[#C85A2B] px-5 py-3 text-xs sm:text-sm font-semibold text-[#F6F2EA] shadow-lg shadow-[#C85A2B]/25 transition hover:bg-[#DF6A37] cursor-pointer"
                    >
                      <span>Enquire Now</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                    <a
                      href={waStayUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`WhatsApp enquiry for ${stay.name}`}
                      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.05] text-[#4ADE80] transition hover:border-[#25D366]/60 hover:bg-[#25D366]/15"
                    >
                      <MessageCircle className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
