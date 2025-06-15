
import { Phone, MessageCircle, Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";
import { OfferteDialog } from "@/components/OfferteForm";

interface HeroSectionProps {
  onWhatsApp: () => void;
  onCall: () => void;
}

export const HeroSection = ({ onWhatsApp, onCall }: HeroSectionProps) => {
  return (
    <section 
      className="relative py-20 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('/lovable-uploads/606849a5-f03a-4be4-a30e-1450519d012d.png')`
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-white/40 backdrop-blur-[1px]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl font-bold text-gray-800 mb-6">
            <span style={{ color: '#16a34a' }}>Professionele</span> <span className="text-blue-600">Reiniging</span> <span style={{ color: '#16a34a' }}>Services</span>
          </h1>
          <p className="text-2xl text-gray-600 mb-8 leading-relaxed">
            DiepClean.nl is uw specialist in meubelreiniging, tapijtreiniging, trapreiniging, auto-interieur en matrasreiniging. 
            Wij maken alles weer als nieuw met onze eco-vriendelijke methoden.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <OfferteDialog>
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-6 text-xl shadow-xl rounded-xl"
              >
                <Calculator className="w-6 h-6 mr-3" />
                Gratis Offerte Aanvragen
              </Button>
            </OfferteDialog>
            <Button 
              size="lg" 
              onClick={onWhatsApp}
              className="bg-green-500 hover:bg-green-600 text-white px-10 py-6 text-xl shadow-xl rounded-xl"
            >
              <MessageCircle className="w-6 h-6 mr-3" />
              WhatsApp Contact
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={onCall}
              className="border-3 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-10 py-6 text-xl shadow-xl rounded-xl"
            >
              <Phone className="w-6 h-6 mr-3" />
              Bel Direct: 06-12345678
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600">300+</div>
              <div className="text-gray-600 text-lg">Tevreden Klanten</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600">24/7</div>
              <div className="text-gray-600 text-lg">Service Beschikbaar</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600">5+</div>
              <div className="text-gray-600 text-lg">Jaar Ervaring</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
