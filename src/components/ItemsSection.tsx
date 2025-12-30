import { Sparkles, Wine, Coffee, Candy, Package, Leaf } from "lucide-react";

const categories = [
  {
    icon: Package,
    title: "Premium Snacks",
    description: "International chips, crackers, and savory treats from renowned brands worldwide.",
    items: ["Imported Chips", "Gourmet Crackers", "Exotic Nuts", "Artisan Pretzels"],
  },
  {
    icon: Wine,
    title: "Non-Alcoholic Wines",
    description: "Elegant sparkling and still wines, perfect for every celebration without the alcohol.",
    items: ["Sparkling Wines", "Red Varieties", "White Selections", "Rosé Collection"],
  },
  {
    icon: Coffee,
    title: "Exotic Beverages",
    description: "Curated selection of premium sodas, juices, and specialty drinks from around the globe.",
    items: ["Craft Sodas", "Premium Juices", "Energy Drinks", "Specialty Teas"],
  },
  {
    icon: Candy,
    title: "Fine Chocolates",
    description: "Luxurious chocolates and confectionery from master chocolatiers worldwide.",
    items: ["Belgian Chocolates", "Swiss Truffles", "Artisan Bars", "Gift Boxes"],
  },
  {
    icon: Sparkles,
    title: "Gourmet Sauces",
    description: "Authentic sauces, condiments, and seasonings to elevate your culinary creations.",
    items: ["Hot Sauces", "BBQ Sauces", "Asian Marinades", "Premium Oils"],
  },
  {
    icon: Leaf,
    title: "Specialty Foods",
    description: "Unique delicacies including organic options, superfoods, and rare finds.",
    items: ["Organic Snacks", "Superfood Bars", "Dried Fruits", "Specialty Spreads"],
  },
];

const ItemsSection = () => {
  return (
    <section id="items" className="section-padding bg-background">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-heading text-primary text-lg tracking-[0.3em] uppercase mb-4">
            Our Collection
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            Items We Serve
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Discover our exquisite range of imported gourmet foods, carefully selected 
            to bring you the finest flavors from around the world.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div
              key={category.title}
              className="group relative p-8 bg-gradient-to-br from-card to-secondary/30 border border-border/50 rounded-lg hover-lift hover:border-primary/50 transition-all duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <category.icon className="w-8 h-8 text-primary" />
              </div>

              {/* Title */}
              <h3 className="font-display text-2xl text-foreground mb-4 group-hover:text-primary transition-colors">
                {category.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {category.description}
              </p>

              {/* Items List */}
              <ul className="space-y-2">
                {category.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Decorative Corner */}
              <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-primary/20 rounded-tr-lg opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-b border-l border-primary/20 rounded-bl-lg opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ItemsSection;
