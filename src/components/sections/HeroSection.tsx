import { Phone, Calculator } from "lucide-react";
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
        backgroundImage: `url('/lovable-uploads/b7182bff-16ed-430c-9610-1cc4153a0c46.png')`
      }}
      aria-label="Hero sectie met hoofdboodschap en contact opties"
    >
      {/* Optimized overlay for better performance and readability */}
      <div className="absolute inset-0 bg-white/60" aria-hidden="true"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Optimized heading for LCP with proper heading hierarchy */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            <span style={{ color: '#16a34a' }}>Professionele</span> <span className="text-blue-700">Reiniging</span> <span style={{ color: '#16a34a' }}>Services</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-800 mb-8 leading-relaxed font-medium">
            DiepClean.nl is uw specialist in meubelreiniging, tapijtreiniging, trapreiniging, auto-interieur en matrasreiniging. 
            Wij maken alles weer als nieuw met onze eco-vriendelijke methoden.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center mb-12 md:mb-16">
            <OfferteDialog>
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 md:px-10 py-4 md:py-6 text-lg md:text-xl shadow-xl rounded-xl w-full sm:w-auto min-h-[56px] touch-manipulation"
                aria-label="Gratis offerte aanvragen - opent formulier"
              >
                <Calculator className="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3" aria-hidden="true" />
                Gratis Offerte Aanvragen
              </Button>
            </OfferteDialog>
            <Button 
              size="lg" 
              onClick={onWhatsApp}
              className="text-white px-6 md:px-10 py-4 md:py-6 text-lg md:text-xl shadow-xl rounded-xl w-full sm:w-auto min-h-[56px] touch-manipulation"
              style={{ backgroundColor: '#16a34a' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#15803d'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#16a34a'}
              aria-label="Contact via WhatsApp - telefoon 06 34 27 37 02"
            >
              <svg 
                className="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3" 
                fill="white" 
                viewBox="0 0 24 24"
                aria-hidden="true"
                role="img"
              >
                <title>WhatsApp icoon</title>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.486z"/>
              </svg>
              WhatsApp Contact
            </Button>
            <Button 
              size="lg"
              onClick={onCall}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 md:px-10 py-4 md:py-6 text-lg md:text-xl shadow-xl rounded-xl w-full sm:w-auto min-h-[56px] touch-manipulation"
              aria-label="Bel direct naar DiepClean op telefoonnummer 06 34 27 37 02"
            >
              <Phone className="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3" aria-hidden="true" />
              <span className="hidden sm:inline">Bel Direct: 06 34 27 37 02</span>
              <span className="sm:hidden">Bel Direct</span>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-3xl mx-auto" role="region" aria-label="Bedrijfsstatistieken">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold" style={{ color: '#16a34a' }} aria-label="300 plus tevreden klanten">300+</div>
              <div className="text-gray-800 text-base md:text-lg font-medium">Tevreden Klanten</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold" style={{ color: '#16a34a' }} aria-label="24 uur per dag, 7 dagen per week service">24/7</div>
              <div className="text-gray-800 text-base md:text-lg font-medium">Service Beschikbaar</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold" style={{ color: '#16a34a' }} aria-label="5 plus jaar ervaring">5+</div>
              <div className="text-gray-800 text-base md:text-lg font-medium">Jaar Ervaring</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
