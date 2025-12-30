"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Our Story", href: "#story" },
  { name: "Items", href: "#items" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 px-6 py-4",
        scrolled ? "bg-navy/95 backdrop-blur-md shadow-lg py-3" : "bg-transparent",
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link href="#home" className="flex items-center gap-2">
          <div className="relative w-12 h-12">
            <Image src="/images/2025-06-24.png" alt="Logo" fill className="object-contain" />
          </div>
          <span className="font-serif text-xl font-bold tracking-tight text-gold hidden sm:block">THE VEGANS ERA</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium uppercase tracking-widest text-gold/80 hover:text-gold transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <button className="bg-gold text-navy px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider hover:bg-gold/90 transition-transform active:scale-95">
          Order Now
        </button>
      </div>
    </nav>
  )
}
