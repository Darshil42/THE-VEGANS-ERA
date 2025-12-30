import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StorySection from "@/components/StorySection";
import ItemsSection from "@/components/ItemsSection";
import GallerySection from "@/components/GallerySection";
import WhyChooseSection from "@/components/WhyChooseSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <StorySection />
      <ItemsSection />
      <GallerySection />
      <WhyChooseSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
