"use client"

import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export default function CustomCursor() {
  const [isMobile, setIsMobile] = useState(true)
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  const dotX = useSpring(cursorX, { stiffness: 800, damping: 50 })
  const dotY = useSpring(cursorY, { stiffness: 800, damping: 50 })
  const ringX = useSpring(cursorX, { stiffness: 120, damping: 18 })
  const ringY = useSpring(cursorY, { stiffness: 120, damping: 18 })

  useEffect(() => {
    const hasHover = window.matchMedia('(hover: hover)').matches
    setIsMobile(!hasHover)
    if (!hasHover) return

    document.body.style.cursor = 'none'
    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }
    window.addEventListener('mousemove', move)
    return () => {
      document.body.style.cursor = 'auto'
      window.removeEventListener('mousemove', move)
    }
  }, [cursorX, cursorY])

  if (isMobile) return null

  return (
    <>
      {/* Dot */}
      <motion.div
        style={{ x: dotX, y: dotY, translateX: '-50%', translateY: '-50%' }}
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-white z-[9999] pointer-events-none mix-blend-difference"
      />
      {/* Ring */}
      <motion.div
        style={{ x: ringX, y: ringY, translateX: '-50%', translateY: '-50%' }}
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-white/30 z-[9999] pointer-events-none mix-blend-difference"
      />
    </>
  )
}
