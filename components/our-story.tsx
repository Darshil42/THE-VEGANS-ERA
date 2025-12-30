export function OurStory() {
  return (
    <section id="story" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gold/10 rounded-2xl transform rotate-2 transition-transform group-hover:rotate-0" />
            <div className="relative aspect-square overflow-hidden rounded-xl shadow-2xl border-8 border-navy/5">
              <Image src="/images/20230125140449-img-8085.jpeg" alt="Inside the shop" fill className="object-cover" />
            </div>
          </div>

          <div className="space-y-8">
            <div className="inline-block border-b-2 border-gold pb-2">
              <span className="text-navy font-bold uppercase tracking-[0.3em] text-sm">Established with Passion</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-navy leading-tight">
              A New Era of <span className="text-gold italic">Gourmet Living</span>
            </h2>
            <div className="space-y-6 text-navy/70 leading-relaxed text-lg">
              <p>
                The Vegans Era was born from a simple realization: the world's most exquisite flavors should be
                accessible to everyone, right in their neighborhood. We aren't just a shop; we are a passport to
                international culinary excellence.
              </p>
              <p>
                From the crisp, nostalgic snap of imported Cheetos to the sophisticated depths of premium non-alcoholic
                wines, every item on our shelves is hand-selected. We believe that snacking and dining should be an
                experience of discovery and joy.
              </p>
              <p className="font-serif italic text-navy font-semibold border-l-4 border-gold pl-6 py-2">
                "Our mission is to bring the House of Gourmet Foods to your table, bridging continents one flavor at a
                time."
              </p>
            </div>
            <button className="bg-navy text-gold px-8 py-4 rounded-lg font-bold uppercase tracking-widest hover:bg-navy/90 transition-colors shadow-lg">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
