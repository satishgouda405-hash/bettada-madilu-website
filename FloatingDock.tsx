import React from 'react'
import { motion } from 'framer-motion'
import { MessageCircle, Phone } from 'lucide-react'
import { BUSINESS, buildWhatsAppLink } from '../data/homestayData'

export const FloatingDock: React.FC = () => {
  const waUrl = buildWhatsAppLink(
    'Hello Abhilash Anna! I would like to enquire about staying at Bettada Madilu Homestay, Mullodi.'
  )

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.3, duration: 0.6 }}
      className="fixed right-4 bottom-5 sm:right-6 sm:bottom-6 z-40 flex flex-col items-end gap-2.5"
    >
      <a
        href={`tel:+${BUSINESS.phoneRaw}`}
        aria-label="Call Bettada Madilu Homestay"
        className="group flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-[#0E1B16]/90 text-[#E7C076] shadow-xl backdrop-blur-md transition-all hover:scale-105 hover:bg-[#C85A2B] hover:text-[#F6F2EA]"
      >
        <Phone className="h-5 w-5" />
      </a>

      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with Bettada Madilu Homestay"
        className="group relative flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-xs sm:text-sm font-bold text-[#09120E] shadow-[0_12px_35px_rgba(37,211,102,0.4)] transition-all hover:scale-105 hover:brightness-105"
      >
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/35 blur-md opacity-70 group-hover:opacity-100 transition-opacity -z-10" />
        <MessageCircle className="h-5 w-5" />
        <span className="hidden sm:inline">WhatsApp Us</span>
      </a>
    </motion.div>
  )
}
