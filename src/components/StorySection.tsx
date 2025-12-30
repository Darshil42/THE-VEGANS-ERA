import storefront from "@/assets/storefront.jpg";

const StorySection = () => {
  return (
    <section id="story" className="section-padding bg-gradient-to-b from-background via-secondary/20 to-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative overflow-hidden rounded-lg gold-border">
              <img
                src={storefront}
                alt="The Vegans Era Storefront"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
            {/* Decorative Frame */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-primary/30 rounded-lg -z-10" />
            <div className="absolute -top-4 -left-4 w-24 h-24 border border-primary/20 rounded-lg -z-10" />
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <p className="font-heading text-primary text-lg tracking-[0.3em] uppercase mb-4">
              Our Story
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-8">
              A Legacy of <br />
              <span className="text-primary italic">Gourmet Excellence</span>
            </h2>
            <div className="w-20 h-px bg-gradient-to-r from-primary to-transparent mb-8" />
            
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                The Vegans Era - House of Gourmet Foods was born from a passion for 
                extraordinary flavors and a vision to bring the world's finest culinary 
                treasures to discerning food enthusiasts.
              </p>
              <p>
                Our carefully curated collection spans continents, featuring premium 
                imported snacks, artisan chocolates, exotic beverages, and elegant 
                non-alcoholic wines that transform everyday moments into celebrations.
              </p>
              <p>
                Step into our boutique and experience a sensory journey through the 
                finest gourmet offerings, each item selected with meticulous attention 
                to quality, authenticity, and exceptional taste.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12">
              <div className="text-center p-4 border border-border/50 rounded-lg hover-lift">
                <p className="font-display text-3xl md:text-4xl text-primary mb-2">500+</p>
                <p className="text-sm text-muted-foreground uppercase tracking-wider">Products</p>
              </div>
              <div className="text-center p-4 border border-border/50 rounded-lg hover-lift">
                <p className="font-display text-3xl md:text-4xl text-primary mb-2">30+</p>
                <p className="text-sm text-muted-foreground uppercase tracking-wider">Countries</p>
              </div>
              <div className="text-center p-4 border border-border/50 rounded-lg hover-lift">
                <p className="font-display text-3xl md:text-4xl text-primary mb-2">100%</p>
                <p className="text-sm text-muted-foreground uppercase tracking-wider">Quality</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
