"use client";

import { useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface BeforeAfterSliderProps {
  beforeSrc: string;
  afterSrc: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export default function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeLabel = "Antes",
  afterLabel = "Con FUTURA",
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.min(100, Math.max(0, (x / rect.width) * 100));
    setPosition(percent);
  }, []);

  const handlePointerDown = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      isDragging.current = true;
      (e.target as HTMLElement).setPointerCapture(e.pointerId);
      updatePosition(e.clientX);
    },
    [updatePosition]
  );

  const handlePointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (!isDragging.current) return;
      updatePosition(e.clientX);
    },
    [updatePosition]
  );

  const handlePointerUp = useCallback(() => {
    isDragging.current = false;
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      ref={containerRef}
      className="relative select-none overflow-hidden rounded-2xl aspect-[9/7] w-full cursor-ew-resize"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
    >
      {/* After image (full background) */}
      <Image
        src={afterSrc}
        alt={afterLabel}
        fill
        className="object-cover pointer-events-none"
        style={{ clipPath: `inset(0 0 0 ${position}%)` }}
        draggable={false}
      />

      {/* Before image (clipped from right) */}
      <Image
        src={beforeSrc}
        alt={beforeLabel}
        fill
        className="object-cover pointer-events-none"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        draggable={false}
      />

      {/* Divider line */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-[#7C3AED] pointer-events-none z-10"
        style={{ left: `${position}%`, transform: "translateX(-50%)" }}
      >
        {/* Handle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#7C3AED] flex items-center justify-center shadow-lg">
          <span className="text-white text-sm font-bold select-none">↔</span>
        </div>
      </div>

      {/* Before label */}
      <div className="absolute top-3 left-3 z-10 pointer-events-none">
        <span className="rounded-md bg-black/60 px-2.5 py-1 text-xs font-medium text-white">
          {beforeLabel}
        </span>
      </div>

      {/* After label */}
      <div className="absolute top-3 right-3 z-10 pointer-events-none">
        <span className="rounded-md bg-black/60 px-2.5 py-1 text-xs font-medium text-white">
          {afterLabel}
        </span>
      </div>
    </motion.div>
  );
}
