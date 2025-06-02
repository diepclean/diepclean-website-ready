
import { MessageCircle } from "lucide-react";
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
        <MessageCircle className="w-6 h-6" />
      </Button>
    </div>
  );
};
