
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { OfferteDialog } from "@/components/OfferteForm";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
  features: string[];
  index: number;
}

export const ServiceCard = ({ icon, title, description, image, features, index }: ServiceCardProps) => {
  return (
    <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 bg-white overflow-hidden rounded-2xl">
      <div className="relative h-56 overflow-hidden">
        <img 
          src={image} 
          alt={`${title} service door DiepClean.nl`}
          width="400"
          height="224"
          loading={index < 3 ? "eager" : "lazy"}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute top-4 left-4 w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-blue-600 shadow-xl transform group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
      </div>
      <CardContent className="p-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">{title}</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
        
        <div className="mb-6">
          <ul className="space-y-2">
            {features.map((feature, idx) => (
              <li key={idx} className="text-sm text-gray-600 flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <OfferteDialog>
          <Button className="bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 text-white w-full py-4 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 text-lg min-h-[48px] touch-manipulation">
            Offerte Aanvragen
          </Button>
        </OfferteDialog>
      </CardContent>
    </Card>
  );
};
