import Image from "next/image"

const items = [
  {
    name: "Imported Snacks",
    desc: "Cheetos, Doritos, and unique chips from Japan, USA, and beyond.",
    image: "/gourmet-chips-imported.jpg",
    category: "Food",
  },
  {
    name: "Rare Sodas & Drinks",
    desc: "Limited edition Cokes, exotic Fantas, and premium sparkling waters.",
    image: "/exotic-soda-bottles-luxury.jpg",
    category: "Drinks",
  },
  {
    name: "Non-Alcoholic Wines",
    desc: "The finest dealcoholized vintages with complex, sophisticated profiles.",
    image: "/non-alcoholic-wine-bottle-elegant.jpg",
    category: "Premium",
  },
  {
    name: "Gourmet Chocolates",
    desc: "Artisan bars and truffles from Swiss and Belgian master chocolatiers.",
    image: "/luxury-chocolate-box.jpg",
    category: "Sweets",
  },
]

export function ItemsGrid() {
  return (
    <section id="items" className="py-24 bg-navy text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-gold">Items We Serve</h2>
          <div className="h-1 w-24 bg-gold mx-auto rounded-full" />
          <p className="text-gold/60 max-w-xl mx-auto uppercase tracking-widest text-sm">A Curated World of Flavor</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="group relative bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-gold/50 transition-all duration-500"
            >
              <div className="aspect-[4/5] relative overflow-hidden">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-navy via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                <div className="absolute top-4 left-4">
                  <span className="bg-gold text-navy text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                </div>
              </div>
              <div className="p-6 relative">
                <h3 className="text-xl font-serif font-bold text-gold mb-2">{item.name}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                <button className="mt-4 text-gold text-xs font-bold uppercase tracking-[0.2em] border-b border-gold/0 hover:border-gold/100 transition-all">
                  View Category →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
