import { Globe, Award, Heart, Truck, Shield, Sparkles } from "lucide-react";

const reasons = [
  {
    icon: Globe,
    title: "Global Sourcing",
    description: "We travel the world to bring you the finest gourmet treasures from over 30 countries.",
  },
  {
    icon: Award,
    title: "Premium Quality",
    description: "Every product is carefully vetted to ensure exceptional quality and authentic taste.",
  },
  {
    icon: Heart,
    title: "Curated with Love",
    description: "Our passionate team handpicks each item, ensuring only the best reaches your table.",
  },
  {
    icon: Shield,
    title: "Authentic Products",
    description: "100% genuine imported goods with verified origins and quality certifications.",
  },
  {
    icon: Sparkles,
    title: "Unique Selection",
    description: "Discover rare and exclusive items you won't find in ordinary stores.",
  },
  {
    icon: Truck,
    title: "Fresh Stock",
    description: "Regular imports ensure our products are always fresh and at their best.",
  },
];

const WhyChooseSection = () => {
  return (
    <section id="why-us" className="section-padding bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 border border-primary rounded-full" />
        <div className="absolute bottom-20 right-20 w-96 h-96 border border-primary rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-primary rounded-full" />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-heading text-primary text-lg tracking-[0.3em] uppercase mb-4">
            Excellence Defined
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            Why Choose Us?
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            At The Vegans Era, we're committed to delivering an unparalleled 
            gourmet experience that exceeds your expectations.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="group relative text-center p-8 hover-lift"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Animated Border */}
              <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-primary/30 transition-colors duration-500" />
              
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/5 to-transparent" />

              {/* Icon */}
              <div className="relative w-20 h-20 mx-auto mb-6">
                <div className="absolute inset-0 rounded-full border border-primary/20 group-hover:border-primary/50 group-hover:scale-110 transition-all duration-500" />
                <div className="absolute inset-2 rounded-full bg-gradient-to-br from-primary/10 to-transparent group-hover:from-primary/20 transition-colors duration-500" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <reason.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
              </div>

              {/* Content */}
              <h3 className="font-display text-xl text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                {reason.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {reason.description}
              </p>

              {/* Number Badge */}
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full border border-primary/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-primary text-xs font-display">{String(index + 1).padStart(2, '0')}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-block p-8 border border-border/50 rounded-lg bg-gradient-to-br from-card/50 to-transparent">
            <p className="font-heading text-lg text-muted-foreground mb-4">
              Ready to Experience Gourmet Excellence?
            </p>
            <p className="font-display text-3xl text-foreground mb-4">
              Visit Our Store <span className="text-primary">Today</span>
            </p>
            <div className="w-16 h-px bg-primary mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
