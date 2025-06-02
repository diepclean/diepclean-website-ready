
import { Header } from "@/components/sections/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { GuaranteesSection } from "@/components/sections/GuaranteesSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { CTASection } from "@/components/sections/CTASection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/sections/Footer";
import { FloatingWhatsApp } from "@/components/sections/FloatingWhatsApp";

const Index = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/31612345678?text=Hallo,%20ik%20heb%20interesse%20in%20jullie%20reinigingsdiensten", "_blank");
  };

  const handleCall = () => {
    window.open("tel:+31612345678");
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection onWhatsApp={handleWhatsApp} onCall={handleCall} />
      <GuaranteesSection />
      <ServicesSection />
      <ReviewsSection />
      <AboutSection onWhatsApp={handleWhatsApp} onCall={handleCall} />
      <CTASection onWhatsApp={handleWhatsApp} />
      <ContactSection onWhatsApp={handleWhatsApp} />
      <Footer />
      <FloatingWhatsApp onWhatsApp={handleWhatsApp} />
    </div>
  );
};

export default Index;
