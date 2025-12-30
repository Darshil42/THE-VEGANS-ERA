import { Globe, ShieldCheck, Heart, Sparkles } from "lucide-react"

const reasons = [
  {
    icon: <Globe className="w-10 h-10 text-gold" />,
    title: "Global Reach",
    desc: "Exclusive imports from over 25 countries, bringing world flavors to your doorstep.",
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-gold" />,
    title: "Authentic Quality",
    desc: "Every product is verified for authenticity and stored in optimal conditions.",
  },
  {
    icon: <Sparkles className="w-10 h-10 text-gold" />,
    title: "Curated Experience",
    desc: "We don't just sell food; we curate experiences for the discerning gourmet.",
  },
  {
    icon: <Heart className="w-10 h-10 text-gold" />,
    title: "Passion Driven",
    desc: "Family owned and operated, with a genuine love for gourmet food and drinks.",
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-navy overflow-hidden relative">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-gold mb-6">Why Choose Us?</h2>
          <p className="text-gold/60 max-w-2xl mx-auto italic text-lg font-light">
            More than just a store, we are the standard for international gourmet excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {reasons.map((reason, idx) => (
            <div
              key={idx}
              className="group text-center space-y-6 p-8 rounded-2xl hover:bg-white/5 transition-all duration-300"
            >
              <div className="mx-auto w-20 h-20 bg-white/5 rounded-full flex items-center justify-center border border-gold/20 group-hover:scale-110 group-hover:bg-gold/10 transition-all">
                {reason.icon}
              </div>
              <h3 className="text-2xl font-serif font-bold text-gold">{reason.title}</h3>
              <p className="text-gold/60 leading-relaxed font-light">{reason.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
