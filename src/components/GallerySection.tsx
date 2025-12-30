import { useState, useEffect } from "react";
import snacksImg from "@/assets/gallery-snacks.jpg";
import winesImg from "@/assets/gallery-wines.jpg";
import drinksImg from "@/assets/gallery-drinks.jpg";
import chocolatesImg from "@/assets/gallery-chocolates.jpg";
import saucesImg from "@/assets/gallery-sauces.jpg";

const galleryItems = [
  { image: snacksImg, title: "Premium Snacks", subtitle: "International Flavors" },
  { image: winesImg, title: "Non-Alcoholic Wines", subtitle: "Elegant Selections" },
  { image: drinksImg, title: "Exotic Beverages", subtitle: "Global Refreshments" },
  { image: chocolatesImg, title: "Fine Chocolates", subtitle: "Artisan Creations" },
  { image: saucesImg, title: "Gourmet Sauces", subtitle: "Culinary Excellence" },
];

const GallerySection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % galleryItems.length);
        setIsTransitioning(false);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    if (index !== currentIndex) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex(index);
        setIsTransitioning(false);
      }, 500);
    }
  };

  return (
    <section id="gallery" className="section-padding bg-gradient-to-b from-background via-secondary/10 to-background overflow-hidden">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-heading text-primary text-lg tracking-[0.3em] uppercase mb-4">
            Visual Journey
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            Food & Drink Gallery
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Feast your eyes on our stunning collection of premium gourmet treasures.
          </p>
        </div>

        {/* Main Gallery Display */}
        <div className="relative max-w-5xl mx-auto">
          {/* Main Image */}
          <div className="relative aspect-[16/10] overflow-hidden rounded-lg gold-border-glow">
            <div
              className={`absolute inset-0 transition-all duration-700 ease-out ${
                isTransitioning
                  ? "opacity-0 scale-110"
                  : "opacity-100 scale-100"
              }`}
            >
              <img
                src={galleryItems[currentIndex].image}
                alt={galleryItems[currentIndex].title}
                className="w-full h-full object-cover"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
            </div>

            {/* Title Overlay */}
            <div
              className={`absolute bottom-0 left-0 right-0 p-8 md:p-12 transition-all duration-700 ${
                isTransitioning
                  ? "opacity-0 translate-y-8"
                  : "opacity-100 translate-y-0"
              }`}
            >
              <p className="font-heading text-primary text-sm md:text-base tracking-[0.2em] uppercase mb-2">
                {galleryItems[currentIndex].subtitle}
              </p>
              <h3 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground">
                {galleryItems[currentIndex].title}
              </h3>
            </div>

            {/* Decorative Frame */}
            <div className="absolute top-6 left-6 w-16 h-16 border-t-2 border-l-2 border-primary/40 rounded-tl-lg" />
            <div className="absolute bottom-6 right-6 w-16 h-16 border-b-2 border-r-2 border-primary/40 rounded-br-lg" />
          </div>

          {/* Thumbnail Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            {galleryItems.map((item, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`relative w-20 h-20 md:w-24 md:h-24 overflow-hidden rounded-lg transition-all duration-300 ${
                  index === currentIndex
                    ? "ring-2 ring-primary scale-105 shadow-gold"
                    : "opacity-60 hover:opacity-100 hover:scale-105"
                }`}
                aria-label={`Go to ${item.title}`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-background/30" />
              </button>
            ))}
          </div>

          {/* Progress Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {galleryItems.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? "w-8 h-2 bg-primary"
                    : "w-2 h-2 bg-primary/30 hover:bg-primary/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
