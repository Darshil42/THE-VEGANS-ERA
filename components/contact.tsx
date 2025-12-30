import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-navy rounded-[3rem] overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-12 md:p-20 space-y-10 text-white">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-6xl font-serif font-bold text-gold">Contact Us</h2>
                <p className="text-gold/60 uppercase tracking-widest text-sm">Visit the House of Gourmet Foods</p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start gap-6 group">
                  <div className="p-3 bg-white/5 rounded-lg border border-gold/20 group-hover:bg-gold/20 transition-colors">
                    <MapPin className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gold mb-1 uppercase tracking-wider text-xs">Our Location</h4>
                    <p className="text-gold/80 text-lg">Gourmet Plaza, Shop 42, International Street</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="p-3 bg-white/5 rounded-lg border border-gold/20 group-hover:bg-gold/20 transition-colors">
                    <Phone className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gold mb-1 uppercase tracking-wider text-xs">Call Us</h4>
                    <p className="text-gold/80 text-lg">+1 (234) 567-890</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="p-3 bg-white/5 rounded-lg border border-gold/20 group-hover:bg-gold/20 transition-colors">
                    <Mail className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gold mb-1 uppercase tracking-wider text-xs">Email Us</h4>
                    <p className="text-gold/80 text-lg">hello@thevegansera.com</p>
                  </div>
                </div>
              </div>

              <div className="pt-10 flex gap-6">
                <a
                  href="#"
                  className="w-12 h-12 rounded-full border border-gold/20 flex items-center justify-center text-gold hover:bg-gold hover:text-navy transition-all"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-full border border-gold/20 flex items-center justify-center text-gold hover:bg-gold hover:text-navy transition-all"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-full border border-gold/20 flex items-center justify-center text-gold hover:bg-gold hover:text-navy transition-all"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div className="p-8 md:p-12 bg-white/5 border-l border-white/10">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest font-bold text-gold/60 ml-1">Name</label>
                    <input
                      type="text"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:border-gold outline-none transition-all"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest font-bold text-gold/60 ml-1">Email</label>
                    <input
                      type="email"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:border-gold outline-none transition-all"
                      placeholder="Your Email"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-gold/60 ml-1">Subject</label>
                  <input
                    type="text"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:border-gold outline-none transition-all"
                    placeholder="How can we help?"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-gold/60 ml-1">Message</label>
                  <textarea
                    rows={5}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:border-gold outline-none transition-all"
                    placeholder="Your Message..."
                  ></textarea>
                </div>
                <button className="w-full bg-gold text-navy py-5 rounded-xl font-bold uppercase tracking-[0.3em] hover:scale-[1.02] active:scale-95 transition-all shadow-xl">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
