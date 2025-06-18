
import { Button } from "@/components/ui/button";

interface CTASectionProps {
  onWhatsApp: () => void;
}

export const CTASection = ({ onWhatsApp }: CTASectionProps) => {
  return (
    <section className="py-16 bg-blue-600">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Klaar Voor Een Gratis Offerte?
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Neem vandaag nog contact met ons op en ontdek hoe wij uw meubels 
          weer als nieuw kunnen maken.
        </p>
        <Button 
          onClick={onWhatsApp}
          size="lg"
          className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg"
        >
          WhatsApp Contact
        </Button>
      </div>
    </section>
  );
};
