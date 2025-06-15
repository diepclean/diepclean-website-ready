
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
    // Track WhatsApp conversion
    if (typeof gtag_report_whatsapp_conversion === 'function') {
      gtag_report_whatsapp_conversion();
    }
    
    // Push event to dataLayer for Google Tag Manager
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        'event': 'whatsapp_click',
        'event_category': 'contact',
        'event_label': 'whatsapp_contact'
      });
    }
    
    window.open("https://wa.me/31612345678?text=Hallo,%20ik%20heb%20interesse%20in%20jullie%20reinigingsdiensten", "_blank");
  };

  const handleCall = () => {
    // Track phone conversion
    if (typeof gtag_report_phone_conversion === 'function') {
      gtag_report_phone_conversion();
    }
    
    // Push event to dataLayer for Google Tag Manager
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        'event': 'phone_click',
        'event_category': 'contact',
        'event_label': 'phone_call'
      });
    }
    
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
