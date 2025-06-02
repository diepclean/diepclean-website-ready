
import { Phone, Mail, Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";
import { OfferteDialog } from "@/components/OfferteForm";

export const Header = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <img 
              src="/lovable-uploads/19e35f6d-df31-4df5-9608-ef160f3e904d.png" 
              alt="DiepClean Logo" 
              className="h-12 w-auto"
            />
            <div>
              <h1 className="text-2xl font-bold text-blue-600">DiepClean.nl</h1>
              <p className="text-sm text-green-600">Betaalbaar & Ecologisch</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-gray-600">
              <Phone className="w-4 h-4" />
              <span>06 12 34 56 78</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <Mail className="w-4 h-4" />
              <span>info@diepclean.nl</span>
            </div>
            <OfferteDialog>
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Calculator className="w-4 h-4 mr-2" />
                Gratis Offerte
              </Button>
            </OfferteDialog>
          </div>
        </div>
      </div>
    </header>
  );
};
