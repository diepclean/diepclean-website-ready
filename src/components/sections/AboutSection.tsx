
import { Droplets, Star, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AboutSectionProps {
  onWhatsApp: () => void;
  onCall: () => void;
}

export const AboutSection = ({ onWhatsApp, onCall }: AboutSectionProps) => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img 
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=400&q=80"
                  alt="Professionele reinigingsspecialist aan het werk"
                  className="w-full h-48 object-cover rounded-lg shadow-md"
                />
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400&q=80"
                  alt="Voor en na reiniging resultaten"
                  className="w-full h-32 object-cover rounded-lg shadow-md"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=400&q=80"
                  alt="Moderne reinigingsapparatuur"
                  className="w-full h-32 object-cover rounded-lg shadow-md"
                />
                <img 
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=400&q=80"
                  alt="Eco-vriendelijke reinigingsproducten"
                  className="w-full h-48 object-cover rounded-lg shadow-md"
                />
              </div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
              10+ Jaar Ervaring
            </div>
          </div>

          {/* Content Section */}
          <div className="order-1 lg:order-2">
            <h3 className="text-4xl font-bold text-gray-800 mb-6">Waarom DiepClean.nl?</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Droplets className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">Eco-vriendelijke Methoden</h4>
                  <p className="text-gray-600">Wij gebruiken alleen milieuvriendelijke en veilige reinigingsproducten.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Star className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">Jarenlange Ervaring</h4>
                  <p className="text-gray-600">Meer dan 10 jaar ervaring in professionele reiniging in de Randstad.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">24/7 Bereikbaar</h4>
                  <p className="text-gray-600">Wij zijn altijd bereikbaar voor spoedeisende reinigingsklussen.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-green-50 p-6 rounded-2xl mt-8">
              <h4 className="text-2xl font-bold text-gray-800 mb-4">Gratis Offerte</h4>
              <p className="text-gray-600 mb-6">
                Krijg binnen 24 uur een vrijblijvende offerte op maat. Geen verborgen kosten, altijd transparant.
              </p>
              <div className="space-y-4">
                <Button 
                  onClick={onWhatsApp}
                  className="bg-green-500 hover:bg-green-600 w-full py-3"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp Offerte
                </Button>
                <Button 
                  onClick={onCall}
                  variant="outline"
                  className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white w-full py-3"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Bel voor Offerte
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
