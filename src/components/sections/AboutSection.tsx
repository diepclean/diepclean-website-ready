
import { Droplets, Star, Phone, MessageCircle, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AboutSectionProps {
  onWhatsApp: () => void;
  onCall: () => void;
}

export const AboutSection = ({ onWhatsApp, onCall }: AboutSectionProps) => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <div className="relative order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
                  <img 
                    src="https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&w=400&q=80"
                    alt="Professionele reinigingsspecialist aan het werk"
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
                  <img 
                    src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=400&q=80"
                    alt="Voor en na reiniging resultaten"
                    className="w-full h-32 object-cover"
                  />
                </div>
              </div>
              <div className="space-y-6 pt-8">
                <div className="rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
                  <img 
                    src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=400&q=80"
                    alt="Moderne reinigingsapparatuur"
                    className="w-full h-32 object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
                  <img 
                    src="https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?auto=format&fit=crop&w=400&q=80"
                    alt="Eco-vriendelijke reinigingsproducten"
                    className="w-full h-48 object-cover"
                  />
                </div>
              </div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-600 to-green-500 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-2xl transform hover:scale-110 transition-transform duration-300">
              10+ Jaar Ervaring
            </div>
          </div>

          {/* Content Section */}
          <div className="order-1 lg:order-2">
            <h3 className="text-4xl font-bold text-gray-800 mb-8">Waarom DiepClean.nl?</h3>
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Droplets className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-3">Eco-vriendelijke Methoden</h4>
                  <p className="text-gray-600 leading-relaxed">Wij gebruiken alleen milieuvriendelijke en veilige reinigingsproducten die effectief zijn maar geen schade toebrengen aan uw gezondheid of het milieu.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-gradient-to-r from-green-100 to-green-200 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Star className="w-8 h-8 text-green-600" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-3">Jarenlange Ervaring</h4>
                  <p className="text-gray-600 leading-relaxed">Meer dan 10 jaar ervaring in professionele reiniging in de Randstad. Onze expertise garandeert perfecte resultaten bij elke klus.</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Clock className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-3">24/7 Bereikbaar</h4>
                  <p className="text-gray-600 leading-relaxed">Wij zijn altijd bereikbaar voor spoedeisende reinigingsklussen en bieden flexibele afspraken die bij uw schema passen.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-green-50 p-8 rounded-3xl mt-10 border border-blue-100 shadow-lg">
              <h4 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <Shield className="w-6 h-6 text-green-600 mr-2" />
                Gratis Offerte & Garantie
              </h4>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Krijg binnen 24 uur een vrijblijvende offerte op maat. Geen verborgen kosten, altijd transparant. 
                Met 100% tevredenheidsgarantie op al onze diensten.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={onWhatsApp}
                  className="bg-green-500 hover:bg-green-600 flex-1 py-4 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp Offerte
                </Button>
                <Button 
                  onClick={onCall}
                  variant="outline"
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white flex-1 py-4 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
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
