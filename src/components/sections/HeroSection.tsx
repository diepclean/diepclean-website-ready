
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
      <div className="absolute inset-0 bg-white/50 backdrop-blur-[4px]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-6 drop-shadow-lg">
            <span style={{ color: '#16a34a' }}>Professionele</span> <span className="text-blue-700">Reiniging</span> <span style={{ color: '#16a34a' }}>Services</span>
          </h1>
          <p className="text-2xl text-gray-800 mb-8 leading-relaxed font-medium drop-shadow-md">
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
              className="text-white px-10 py-6 text-xl shadow-xl rounded-xl"
              style={{ backgroundColor: '#16a34a' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#15803d'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#16a34a'}
            >
              <MessageCircle className="w-6 h-6 mr-3" />
              WhatsApp Contact
            </Button>
            <Button 
              size="lg"
              onClick={onCall}
              className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-6 text-xl shadow-xl rounded-xl"
            >
              <Phone className="w-6 h-6 mr-3" />
              Bel Direct: 06 12 34 56 78
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold drop-shadow-md" style={{ color: '#16a34a' }}>300+</div>
              <div className="text-gray-800 text-lg font-medium">Tevreden Klanten</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold drop-shadow-md" style={{ color: '#16a34a' }}>24/7</div>
              <div className="text-gray-800 text-lg font-medium">Service Beschikbaar</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold drop-shadow-md" style={{ color: '#16a34a' }}>5+</div>
              <div className="text-gray-800 text-lg font-medium">Jaar Ervaring</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
