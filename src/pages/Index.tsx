
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
import { trackWhatsAppConversion, trackPhoneConversion } from "@/utils/googleAds";

const Index = () => {
  const handleWhatsApp = () => {
    trackWhatsAppConversion();
    window.open("https://wa.me/31612345678?text=Hallo,%20ik%20heb%20interesse%20in%20jullie%20reinigingsdiensten", "_blank");
  };

  const handleCall = () => {
    trackPhoneConversion();
    window.open("tel:+31612345678");
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div id="home">
        <HeroSection onWhatsApp={handleWhatsApp} onCall={handleCall} />
      </div>
      <GuaranteesSection />
      <div id="diensten">
        <ServicesSection />
      </div>
      <div id="reviews">
        <ReviewsSection />
      </div>
      <div id="over-ons">
        <AboutSection onWhatsApp={handleWhatsApp} onCall={handleCall} />
      </div>
      <CTASection onWhatsApp={handleWhatsApp} />
      <div id="contact">
        <ContactSection onWhatsApp={handleWhatsApp} />
      </div>
      <Footer />
      <FloatingWhatsApp onWhatsApp={handleWhatsApp} />
    </div>
  );
};

export default Index;
