import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const scrollToStory = () => {
    const element = document.querySelector("#story");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background/95" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-primary/20 rounded-full animate-float opacity-30" />
      <div className="absolute bottom-32 right-20 w-48 h-48 border border-primary/10 rounded-full animate-float animation-delay-500 opacity-20" />

      {/* Content */}
      <div className="relative z-10 container-custom text-center px-4">
        <div className="max-w-4xl mx-auto">
          {/* Decorative Line */}
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-8 animate-fade-in-down" />

          {/* Tagline */}
          <p className="font-heading text-primary text-lg md:text-xl tracking-[0.3em] uppercase mb-6 animate-fade-in-down animation-delay-100">
            Welcome to
          </p>

          {/* Main Title */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground mb-4 animate-fade-in-up animation-delay-200">
            The Vegans Era
          </h1>

          {/* Subtitle */}
          <p className="font-heading text-2xl md:text-3xl lg:text-4xl text-primary mb-8 animate-fade-in-up animation-delay-300 italic">
            House of Gourmet Foods
          </p>

          {/* Description */}
          <p className="font-body text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-up animation-delay-400">
            Discover a world of premium imported delicacies, artisan snacks, 
            non-alcoholic wines, and exotic beverages curated for the discerning palate.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-500">
            <Button
              variant="hero"
              size="xl"
              onClick={() => document.querySelector("#items")?.scrollIntoView({ behavior: "smooth" })}
            >
              Explore Our Collection
            </Button>
            <Button
              variant="elegant"
              size="xl"
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Visit Our Store
            </Button>
          </div>

          {/* Decorative Line */}
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-16 animate-fade-in-up animation-delay-600" />
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToStory}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-primary/70 hover:text-primary transition-colors duration-300 animate-float"
        aria-label="Scroll to next section"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default HeroSection;
