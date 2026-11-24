import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export const Preloader: React.FC = () => {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 1150)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="preloader"
          initial={{ y: 0, opacity: 1 }}
          exit={{
            y: '-100%',
            transition: { duration: 0.78, ease: [0.76, 0, 0.24, 1] },
          }}
          onClick={() => setVisible(false)}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#09120E] px-6 cursor-pointer overflow-hidden"
        >
          {/* Ambient radial terracotta glow */}
          <div className="pointer-events-none absolute h-[420px] w-[420px] rounded-full bg-[#C85A2B]/15 blur-[120px]" />

          <motion.svg
            width="150"
            height="64"
            viewBox="0 0 150 64"
            fill="none"
            className="mb-5"
          >
            <motion.path
              d="M6 54 L42 18 L66 40 L94 10 L144 54"
              stroke="#C85A2B"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0, opacity: 0.4 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
            />
            <motion.path
              d="M24 54 L56 27 L82 48 L112 24 L138 54"
              stroke="#D4A24C"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.8 }}
              transition={{ duration: 0.85, delay: 0.12, ease: 'easeInOut' }}
            />
          </motion.svg>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="text-center"
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.38em] text-[#D4A24C]">
              Mullodi · Kudremukh · 1,894m
            </p>
            <h2 className="mt-2 font-serif text-3xl sm:text-4xl font-semibold tracking-wide text-[#F6F2EA]">
              Bettada Madilu
            </h2>
          </motion.div>

          {/* Expanding terracotta progress line */}
          <div className="mt-6 h-[2px] w-36 overflow-hidden rounded-full bg-white/10">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformOrigin: 'left' }}
              className="h-full w-full bg-gradient-to-r from-[#C85A2B] via-[#D4A24C] to-[#F6F2EA]"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
