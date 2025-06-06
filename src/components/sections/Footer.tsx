
import { Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-14">
      <div className="container mx-auto px-4">
        {/* Ervaring en USP sectie */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="flex flex-col items-center text-center">
            <img 
              src="/lovable-uploads/91887335-5381-444c-a724-8985d46076b1.png" 
              alt="Meer dan 5 jaar ervaring" 
              className="h-40 w-auto mb-6"
            />
            <h4 className="text-xl font-semibold text-white mb-3">Jarenlange Ervaring</h4>
            <p className="text-gray-300">
              Meer dan 5 jaar ervaring in professionele reiniging in de Randstad. 
              Onze expertise garandeert perfecte resultaten bij elke klus.
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <img 
              src="/lovable-uploads/dc1f9819-60b1-495a-9b50-23729ceef6a1.png" 
              alt="24/7 Service" 
              className="h-40 w-auto mb-6"
            />
            <h4 className="text-xl font-semibold text-white mb-3">24/7 Service</h4>
            <p className="text-gray-300">
              Altijd beschikbaar voor al uw reinigingsbehoeften. 
              Wij staan klaar om u te helpen wanneer het u uitkomt.
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <img 
              src="/lovable-uploads/0fc5c91b-edc6-40c6-b091-a26fd0d55760.png" 
              alt="Milieuvriendelijk" 
              className="h-40 w-auto mb-6"
            />
            <h4 className="text-xl font-semibold text-white mb-3">Milieuvriendelijk</h4>
            <p className="text-gray-300">
              Wij gebruiken uitsluitend eco-vriendelijke reinigingsmiddelen en -methodes 
              om onze impact op het milieu te minimaliseren.
            </p>
          </div>
        </div>

        {/* Footer info */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-8">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <img 
              src="/lovable-uploads/19e35f6d-df31-4df5-9608-ef160f3e904d.png" 
              alt="DiepClean Logo" 
              className="h-8 w-auto"
            />
            <div>
              <div className="font-semibold">DiepClean.nl</div>
              <div className="text-sm">Professionele Reiniging Services</div>
            </div>
          </div>
          
          <div className="flex items-center mb-4 md:mb-0">
            <a href="tel:+31612345678" className="flex items-center text-white hover:text-green-400 transition-colors">
              <Phone className="w-5 h-5 mr-2" />
              <span>06-12345678</span>
            </a>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-sm">© 2024 DiepClean.nl - Alle rechten voorbehouden</p>
            <p className="text-xs text-gray-400">BTW: NL123456789B01 | KvK: 12345678</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
