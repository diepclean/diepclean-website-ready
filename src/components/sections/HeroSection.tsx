
import { Phone, MessageCircle, Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";
import { OfferteDialog } from "@/components/OfferteForm";

interface HeroSectionProps {
  onWhatsApp: () => void;
  onCall: () => void;
}

export const HeroSection = ({ onWhatsApp, onCall }: HeroSectionProps) => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-green-50 py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-5xl font-bold text-gray-800 mb-6">
          Professionele <span className="text-blue-600">Reiniging</span> Services
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          DiepClean.nl is uw specialist in meubelreiniging, tapijtreiniging, auto-interieur en matrasreiniging. 
          Wij maken alles weer als nieuw met onze eco-vriendelijke methoden.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <OfferteDialog>
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg"
            >
              <Calculator className="w-5 h-5 mr-2" />
              Gratis Offerte
            </Button>
          </OfferteDialog>
          <Button 
            size="lg" 
            onClick={onWhatsApp}
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 text-lg"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            WhatsApp Contact
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            onClick={onCall}
            className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 text-lg"
          >
            <Phone className="w-5 h-5 mr-2" />
            Bel Direct
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600">500+</div>
            <div className="text-gray-600">Tevreden Klanten</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600">24/7</div>
            <div className="text-gray-600">Service Beschikbaar</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600">100%</div>
            <div className="text-gray-600">Tevredenheidsgarantie</div>
          </div>
        </div>
      </div>
    </section>
  );
};
