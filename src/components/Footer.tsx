import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/30 border-t border-border/50">
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img src={logo} alt="The Vegans Era Logo" className="h-16 w-auto" />
              <div>
                <p className="font-display text-xl text-primary">The Vegans Era</p>
                <p className="text-xs text-muted-foreground tracking-widest uppercase">House of Gourmet Foods</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Your premier destination for imported gourmet foods, non-alcoholic wines, 
              exotic beverages, and international delicacies. Experience the world's 
              finest flavors under one roof.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg text-foreground mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "Our Story", "Items We Serve", "Gallery", "Why Choose Us", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(/ /g, "-")}`}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 link-underline"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg text-foreground mb-6">Contact</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li>info@thevegansera.com</li>
              <li>+1 234 567 8900</li>
              <li>Mon-Sat: 10AM - 9PM</li>
              <li>Sun: 11AM - 7PM</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border/30">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © {currentYear} The Vegans Era - House of Gourmet Foods. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
