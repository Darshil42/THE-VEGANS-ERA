import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-background via-secondary/20 to-background">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-heading text-primary text-lg tracking-[0.3em] uppercase mb-4">
            Get In Touch
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            Contact Us
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            We'd love to hear from you. Visit our store or reach out to us for any inquiries.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            {/* Location */}
            <div className="flex gap-6 group">
              <div className="w-14 h-14 rounded-full border border-primary/30 flex items-center justify-center flex-shrink-0 group-hover:border-primary group-hover:bg-primary/10 transition-all duration-300">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-xl text-foreground mb-2">Our Location</h3>
                <p className="text-muted-foreground">
                  The Vegans Era - House of Gourmet Foods<br />
                  Premium Shopping District<br />
                  Your City, Country
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-6 group">
              <div className="w-14 h-14 rounded-full border border-primary/30 flex items-center justify-center flex-shrink-0 group-hover:border-primary group-hover:bg-primary/10 transition-all duration-300">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-xl text-foreground mb-2">Phone</h3>
                <p className="text-muted-foreground">
                  +1 234 567 8900<br />
                  +1 234 567 8901
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-6 group">
              <div className="w-14 h-14 rounded-full border border-primary/30 flex items-center justify-center flex-shrink-0 group-hover:border-primary group-hover:bg-primary/10 transition-all duration-300">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-xl text-foreground mb-2">Email</h3>
                <p className="text-muted-foreground">
                  info@thevegansera.com<br />
                  orders@thevegansera.com
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex gap-6 group">
              <div className="w-14 h-14 rounded-full border border-primary/30 flex items-center justify-center flex-shrink-0 group-hover:border-primary group-hover:bg-primary/10 transition-all duration-300">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-xl text-foreground mb-2">Store Hours</h3>
                <p className="text-muted-foreground">
                  Monday - Saturday: 10:00 AM - 9:00 PM<br />
                  Sunday: 11:00 AM - 7:00 PM
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-6">
              <p className="font-heading text-primary text-sm tracking-widest uppercase mb-4">Follow Us</p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5 text-primary" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all duration-300"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5 text-primary" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-card to-secondary/30 p-8 md:p-10 rounded-lg border border-border/50">
            <h3 className="font-display text-2xl text-foreground mb-6">Send Us a Message</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm text-muted-foreground mb-2 uppercase tracking-wider">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-background/50 border border-border rounded-lg focus:border-primary focus:outline-none transition-colors text-foreground"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm text-muted-foreground mb-2 uppercase tracking-wider">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-background/50 border border-border rounded-lg focus:border-primary focus:outline-none transition-colors text-foreground"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm text-muted-foreground mb-2 uppercase tracking-wider">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 bg-background/50 border border-border rounded-lg focus:border-primary focus:outline-none transition-colors text-foreground"
                  placeholder="How can we help?"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm text-muted-foreground mb-2 uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 bg-background/50 border border-border rounded-lg focus:border-primary focus:outline-none transition-colors text-foreground resize-none"
                  placeholder="Your message..."
                />
              </div>
              <Button variant="gold" size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
