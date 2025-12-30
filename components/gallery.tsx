"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

const images = [
  { url: "/gourmet-food-display-shop.jpg", title: "Global Delights" },
  { url: "/premium-drink-bottles-luxury.jpg", title: "Premium Sips" },
  { url: "/luxury-gift-hampers-food.jpg", title: "Artisan Hampers" },
  { url: "/gourmet-store-interior-aesthetic.jpg", title: "Our Ambience" },
]

export function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-navy">Food & Drink Gallery</h2>
            <p className="text-navy/50 uppercase tracking-widest text-sm font-bold">The Art of the Gourmet Store</p>
          </div>
          <div className="flex gap-4">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-1 transition-all duration-300 rounded-full ${currentIndex === idx ? "w-12 bg-gold" : "w-6 bg-navy/10"}`}
              />
            ))}
          </div>
        </div>

        <div className="relative aspect-video md:aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl bg-navy">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="absolute inset-0"
            >
              <Image
                src={images[currentIndex].url || "/placeholder.svg"}
                alt={images[currentIndex].title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-navy/80 via-transparent to-transparent" />
              <div className="absolute bottom-10 left-10 text-white">
                <motion.h3
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-3xl md:text-5xl font-serif font-bold text-gold"
                >
                  {images[currentIndex].title}
                </motion.h3>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
