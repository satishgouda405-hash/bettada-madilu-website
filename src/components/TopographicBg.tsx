import React from 'react'

interface TopographicBgProps {
  stroke?: string
  opacity?: number
  className?: string
}

export const TopographicBg: React.FC<TopographicBgProps> = ({
  stroke = '#D4A24C',
  opacity = 0.08,
  className = '',
}) => {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1200 600"
      fill="none"
      preserveAspectRatio="xMidYMid slice"
      className={`pointer-events-none select-none ${className}`}
      style={{ opacity }}
    >
      <path
        d="M-80 480 C 120 390, 260 520, 440 390 C 620 260, 740 360, 940 240 C 1090 150, 1180 220, 1300 130"
        stroke={stroke}
        strokeWidth="1.2"
      />
      <path
        d="M-80 430 C 140 330, 290 460, 470 330 C 650 200, 760 300, 960 180 C 1100 95, 1190 170, 1300 85"
        stroke={stroke}
        strokeWidth="1"
      />
      <path
        d="M-80 380 C 150 270, 320 400, 500 275 C 680 150, 790 245, 985 125 C 1110 50, 1200 115, 1300 40"
        stroke={stroke}
        strokeWidth="0.9"
      />
      <path
        d="M-80 540 C 160 440, 300 560, 500 450 C 700 340, 810 420, 1020 300 C 1140 230, 1220 290, 1300 210"
        stroke={stroke}
        strokeWidth="1"
      />
      <path
        d="M120 620 C 310 510, 450 580, 640 465 C 830 350, 940 430, 1140 320 C 1210 280, 1260 310, 1320 270"
        stroke={stroke}
        strokeWidth="0.85"
      />
      <ellipse
        cx="940"
        cy="185"
        rx="115"
        ry="52"
        transform="rotate(-14 940 185)"
        stroke={stroke}
        strokeWidth="0.9"
        strokeDasharray="4 6"
      />
      <ellipse
        cx="940"
        cy="185"
        rx="65"
        ry="28"
        transform="rotate(-14 940 185)"
        stroke={stroke}
        strokeWidth="0.8"
      />
    </svg>
  )
}
