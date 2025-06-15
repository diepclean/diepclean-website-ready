
import { Button } from "@/components/ui/button";

interface FloatingWhatsAppProps {
  onWhatsApp: () => void;
}

export const FloatingWhatsApp = ({ onWhatsApp }: FloatingWhatsAppProps) => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={onWhatsApp}
        className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all"
        size="lg"
      >
        <img 
          src="/lovable-uploads/301b00cd-c044-4fae-87fa-a1d141d638b0.png" 
          alt="WhatsApp" 
          className="w-6 h-6"
        />
      </Button>
    </div>
  );
};
