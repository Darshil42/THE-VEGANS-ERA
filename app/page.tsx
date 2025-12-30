import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { OurStory } from "@/components/our-story"
import { ItemsGrid } from "@/components/items-grid"
import { Gallery } from "@/components/gallery"
import { WhyChooseUs } from "@/components/why-choose-us"
import { Contact } from "@/components/contact"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <OurStory />
      <WhyChooseUs />
      <ItemsGrid />
      <Gallery />
      <Contact />

      {/* Footer */}
      <footer className="bg-navy py-12 border-t border-gold/20">
        <div className="container mx-auto px-4 text-center">
          <Image
            src="/images/2025-06-24.png"
            alt="The Vegans Era Logo"
            width={150}
            height={150}
            className="mx-auto mb-6 opacity-80"
          />
          <p className="text-gold/60 text-sm">
            © {new Date().getFullYear()} The Vegans Era - House Of Gourmet Foods. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  )
}
