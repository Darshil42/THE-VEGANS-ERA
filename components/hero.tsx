"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-navy">
      {/* Background with storefront aesthetic overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/20230125140449-img-8085.jpeg"
          alt="The Vegans Era Storefront"
          fill
          className="object-cover opacity-30 grayscale-[0.2]"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-b from-navy/60 via-navy/40 to-navy" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="mb-6 inline-block">
            <Image src="/images/2025-06-24.png" alt="Logo" width={180} height={180} className="mx-auto" />
          </div>
          <h1 className="text-5xl md:text-8xl font-serif font-bold text-gold mb-4 tracking-tighter">
            House of Gourmet Foods
          </h1>
          <p className="text-gold/80 text-lg md:text-2xl font-light mb-8 max-w-2xl mx-auto leading-relaxed italic">
            Imported treasures, curated treats, and the finest non-alcoholic vintages from across the globe.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gold text-navy px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:scale-105 transition-transform shadow-xl">
              Explore Our Collection
            </button>
            <button className="border-2 border-gold text-gold px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-gold hover:text-navy transition-all shadow-xl">
              Our Story
            </button>
          </div>
        </motion.div>
      </div>

      {/* Decorative lines matching the logo flourishes */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-30">
        <svg width="200" height="40" viewBox="0 0 200 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 20C50 20 50 10 100 10C150 10 150 20 200 20" stroke="#d4af37" strokeWidth="2" />
          <path d="M0 30C50 30 50 20 100 20C150 20 150 30 200 30" stroke="#d4af37" strokeWidth="1" />
        </svg>
      </div>
    </section>
  )
}
