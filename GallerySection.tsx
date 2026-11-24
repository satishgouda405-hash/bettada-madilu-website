import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  Camera,
  ChevronLeft,
  ChevronRight,
  Expand,
  Play,
  X,
} from 'lucide-react'
import { GALLERY_PHOTOS, type GalleryPhoto } from '../data/homestayData'

const CATEGORIES = [
  'All',
  'The Stay',
  'Campfire & Nights',
  'Waterfall & Nature',
  'Happy Trekkers',
] as const

export const GallerySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] =
    useState<(typeof CATEGORIES)[number]>('All')
  const [lightboxPhoto, setLightboxPhoto] = useState<GalleryPhoto | null>(null)

  const filteredPhotos =
    selectedCategory === 'All'
      ? GALLERY_PHOTOS
      : GALLERY_PHOTOS.filter((p) => p.category === selectedCategory)

  useEffect(() => {
    if (!lightboxPhoto) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxPhoto(null)
      if (e.key === 'ArrowRight') navigateLightbox(1)
      if (e.key === 'ArrowLeft') navigateLightbox(-1)
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [lightboxPhoto, filteredPhotos])

  const navigateLightbox = (dir: number) => {
    if (!lightboxPhoto) return
    const idx = filteredPhotos.findIndex((p) => p.id === lightboxPhoto.id)
    if (idx === -1) return
    const nextIdx = (idx + dir + filteredPhotos.length) % filteredPhotos.length
    setLightboxPhoto(filteredPhotos[nextIdx])
  }

  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-[#EDE6D8] py-20 sm:py-28 lg:py-32 text-[#0E1B16]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading + Category Filter Pills */}
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#0E1B16]/15 bg-[#F6F2EA] px-3.5 py-1 font-mono text-[11px] uppercase tracking-[0.22em] text-[#A8461D]">
              <Camera className="h-3.5 w-3.5" />
              Real Moments at Bettada Madilu
            </span>
            <h2 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-[3.5rem] font-semibold leading-[1.06] text-[#0E1B16]">
              Glimpses of{' '}
              <span className="italic text-[#C85A2B]">Mullodi Life</span>
            </h2>
          </div>

          {/* Interactive Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => {
              const active = selectedCategory === cat
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`relative rounded-full px-4 py-2 text-xs sm:text-sm font-medium transition-colors cursor-pointer ${
                    active
                      ? 'text-[#F6F2EA]'
                      : 'bg-[#F6F2EA]/80 text-[#0E1B16]/75 hover:bg-[#F6F2EA] hover:text-[#0E1B16]'
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="galleryCategoryPill"
                      transition={{ type: 'spring', bounce: 0.22, duration: 0.5 }}
                      className="absolute inset-0 rounded-full bg-[#0E1B16]"
                    />
                  )}
                  <span className="relative z-10">{cat}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Editorial Bento Gallery Grid */}
        <motion.div
          layout
          className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-12"
        >
          <AnimatePresence mode="popLayout">
            {filteredPhotos.map((photo, idx) => {
              // Bento span styling for visual rhythm
              const spanClass =
                selectedCategory === 'All'
                  ? idx === 0
                    ? 'lg:col-span-7 h-[320px] sm:h-[380px]'
                    : idx === 1
                      ? 'lg:col-span-5 h-[320px] sm:h-[380px]'
                      : idx === 2
                        ? 'lg:col-span-5 h-[300px] sm:h-[340px]'
                        : idx === 3
                          ? 'lg:col-span-7 h-[300px] sm:h-[340px]'
                          : idx === 4
                            ? 'lg:col-span-7 h-[320px] sm:h-[360px]'
                            : 'lg:col-span-5 h-[320px] sm:h-[360px]'
                  : 'lg:col-span-6 h-[320px] sm:h-[360px]'

              return (
                <motion.div
                  layout
                  key={photo.id}
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  transition={{ duration: 0.45 }}
                  onClick={() => setLightboxPhoto(photo)}
                  className={`group relative overflow-hidden rounded-[1.75rem] border border-[#0E1B16]/10 bg-[#0E1B16] shadow-[0_18px_45px_rgba(14,27,22,0.12)] cursor-pointer ${spanClass}`}
                >
                  <img
                    src={photo.src}
                    alt={photo.title}
                    loading="lazy"
                    className={`h-full w-full object-cover transition-transform duration-700 group-hover:scale-108 ${
                      photo.id === 'group-front' ? 'object-top' : 'object-center'
                    }`}
                  />

                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#09120E]/85 via-[#09120E]/15 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-95" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="rounded-full bg-[#0E1B16]/75 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-[#E7C076] backdrop-blur-md">
                      {photo.category}
                    </span>

                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F6F2EA]/18 text-[#F6F2EA] backdrop-blur-md transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#C85A2B]">
                      {photo.isAnimated ? (
                        <Play className="h-4 w-4 fill-current" />
                      ) : (
                        <Expand className="h-4 w-4" />
                      )}
                    </span>
                  </div>

                  {/* Bottom Caption */}
                  <div className="absolute bottom-5 left-5 right-5 text-[#F6F2EA] transition-transform duration-300 group-hover:-translate-y-1">
                    <h3 className="font-serif text-2xl font-semibold leading-tight">
                      {photo.title}
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm text-[#F6F2EA]/80 line-clamp-2">
                      {photo.caption}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {lightboxPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxPhoto(null)}
            className="fixed inset-0 z-[90] flex items-center justify-center bg-[#09120E]/94 p-4 sm:p-8 backdrop-blur-xl"
          >
            <button
              type="button"
              onClick={() => setLightboxPhoto(null)}
              aria-label="Close lightbox"
              className="absolute top-5 right-5 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-[#F6F2EA] transition hover:bg-[#C85A2B] cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                navigateLightbox(-1)
              }}
              aria-label="Previous image"
              className="absolute left-3 sm:left-6 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-[#F6F2EA] transition hover:bg-[#C85A2B] cursor-pointer"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                navigateLightbox(1)
              }}
              aria-label="Next image"
              className="absolute right-3 sm:right-6 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-[#F6F2EA] transition hover:bg-[#C85A2B] cursor-pointer"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            <motion.div
              key={lightboxPhoto.id}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[88vh] w-full max-w-4xl overflow-hidden rounded-3xl border border-white/15 bg-[#0E1B16] shadow-2xl"
            >
              <img
                src={lightboxPhoto.src}
                alt={lightboxPhoto.title}
                className="max-h-[70vh] w-full object-contain bg-black/50"
              />
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-t border-white/10 px-6 py-4 text-[#F6F2EA]">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#D4A24C]">
                    {lightboxPhoto.category}
                  </span>
                  <h3 className="font-serif text-2xl font-semibold">
                    {lightboxPhoto.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#F6F2EA]/75">
                    {lightboxPhoto.caption}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
