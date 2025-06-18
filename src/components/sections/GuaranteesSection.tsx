
import { Shield, Clock, Star, Recycle } from "lucide-react";

export const GuaranteesSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Onze Garanties
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Wij staan voor kwaliteit en betrouwbaarheid in al onze diensten
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">100% Garantie</h3>
            <p className="text-gray-600">Niet tevreden? Geld terug garantie</p>
          </div>

          <div className="text-center">
            <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Clock className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">24/7 Service</h3>
            <p className="text-gray-600">Altijd bereikbaar voor noodgevallen</p>
          </div>

          <div className="text-center">
            <div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Star className="h-8 w-8 text-yellow-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">5 Sterren Service</h3>
            <p className="text-gray-600">Beoordeeld door 300+ klanten</p>
          </div>

          <div className="text-center">
            <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Recycle className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Eco-Vriendelijk</h3>
            <p className="text-gray-600">Milieuvriendelijke reinigingsmiddelen</p>
          </div>
        </div>
      </div>
    </section>
  );
};
