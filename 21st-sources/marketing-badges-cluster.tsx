// Source: 21st.dev — Marketing Badges
// Query: "sticker badge marquee patches"
// Date: 2026-04-30
// Borrowed: rotated overlapping pill badges with shadow stacks,
// hover rotates-to-zero + lift, gradient-to-b fills with inner highlight,
// per-badge offsetX/Y to place them in a sticker-pile composition.
// We use this for the "Always One of a Kind" badge cluster and as the
// "WHAT YOU'LL FIND HERE" sticker sheet section.

"use client"
import { useState } from "react"
import { cn } from "@/lib/utils"

interface Badge {
  id: string
  label: string
  color: string
  size: "sm" | "md" | "lg"
  rotation: number
  zIndex: number
  offsetX: number
  offsetY: number
}

const sizeClasses = {
  sm: "px-6 py-2.5 text-base",
  md: "px-8 py-3 text-lg",
  lg: "px-10 py-3.5 text-xl",
}

export function MarketingBadges({ badges }: { badges: Badge[] }) {
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  return (
    <div className="relative flex h-[400px] w-full items-center justify-center">
      {badges.map((badge) => {
        const isHovered = hoveredId === badge.id
        const isOtherHovered = hoveredId !== null && hoveredId !== badge.id

        return (
          <div
            key={badge.id}
            className={cn(
              "absolute cursor-pointer select-none rounded-full font-semibold transition-all duration-500 ease-out",
              "bg-gradient-to-b shadow-lg",
              badge.color,
              sizeClasses[badge.size],
            )}
            style={{
              transform: `
                translate(${badge.offsetX}px, ${badge.offsetY}px)
                rotate(${isHovered ? 0 : badge.rotation}deg)
                scale(${isHovered ? 1.08 : isOtherHovered ? 0.95 : 1})
                translateY(${isHovered ? -8 : 0}px)
              `,
              zIndex: isHovered ? 100 : badge.zIndex,
              boxShadow: isHovered
                ? "0 25px 50px -12px rgba(0, 0, 0, 0.25), inset 0 2px 4px rgba(255, 255, 255, 0.3)"
                : "0 10px 25px -5px rgba(0, 0, 0, 0.15), inset 0 1px 2px rgba(255, 255, 255, 0.2)",
            }}
            onMouseEnter={() => setHoveredId(badge.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <span className="relative block text-slate-800 drop-shadow-[0_1px_1px_rgba(255,255,255,0.3)]">
              {badge.label}
            </span>
            <div
              className="pointer-events-none absolute inset-0 rounded-full opacity-50"
              style={{
                background: "linear-gradient(180deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 50%)",
              }}
            />
          </div>
        )
      })}
    </div>
  )
}
