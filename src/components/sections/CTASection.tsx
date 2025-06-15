
import { MessageCircle, Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";
import { OfferteDialog } from "@/components/OfferteForm";

interface CTASectionProps {
  onWhatsApp: () => void;
}

export const CTASection = ({ onWhatsApp }: CTASectionProps) => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-green-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-4xl font-bold mb-6">Klaar voor een Gratis Offerte?</h3>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Geen verborgen kosten, geen verplichtingen. Binnen 2 uur een offerte op maat in uw WhatsApp.
        </p>
        <OfferteDialog>
          <Button 
            size="lg"
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg mr-4"
          >
            <Calculator className="w-6 h-6 mr-2" />
            Start Offerte Aanvraag
          </Button>
        </OfferteDialog>
        <Button 
          size="lg"
          onClick={onWhatsApp}
          variant="outline"
          className="border-white text-gray-800 bg-white hover:bg-gray-100 hover:text-gray-900 px-8 py-4 text-lg"
        >
          <MessageCircle className="w-6 h-6 mr-2" />
          Direct Contact
        </Button>
      </div>
    </section>
  );
};
