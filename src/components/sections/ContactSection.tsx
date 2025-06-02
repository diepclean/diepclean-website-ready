
import { Phone, MessageCircle, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ContactSectionProps {
  onWhatsApp: () => void;
}

export const ContactSection = ({ onWhatsApp }: ContactSectionProps) => {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold mb-4">Contact</h3>
          <p className="text-xl text-gray-300">
            Neem vandaag nog contact met ons op voor een vrijblijvende offerte
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-semibold mb-2">Telefoon</h4>
            <p className="text-gray-300">06 12 34 56 78</p>
            <p className="text-sm text-gray-400">24/7 bereikbaar</p>
          </div>

          <div>
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-semibold mb-2">WhatsApp</h4>
            <p className="text-gray-300">06 12 34 56 78</p>
            <p className="text-sm text-gray-400">Snelle reactie</p>
          </div>

          <div>
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-semibold mb-2">Email</h4>
            <p className="text-gray-300">info@diepclean.nl</p>
            <p className="text-sm text-gray-400">Binnen 24u reactie</p>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg"
            onClick={onWhatsApp}
            className="bg-green-500 hover:bg-green-600 px-8 py-4 text-lg"
          >
            <MessageCircle className="w-6 h-6 mr-2" />
            Start WhatsApp Chat
          </Button>
        </div>
      </div>
    </section>
  );
};
