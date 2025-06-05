
import { Droplets, Car, Bed, PawPrint, Sofa } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { OfferteDialog } from "@/components/OfferteForm";

export const ServicesSection = () => {
  const services = [
    {
      icon: <Sofa className="w-8 h-8" />,
      title: "Meubelreiniging",
      description: "Professionele reiniging van banken, stoelen en andere meubels",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=400&q=80"
    },
    {
      icon: <Droplets className="w-8 h-8" />,
      title: "Tapijtreiniging", 
      description: "Diepe reiniging van tapijten en vloerkleden",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=400&q=80"
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: "Auto Interieur",
      description: "Complete reiniging van auto-interieur en bekleding",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?auto=format&fit=crop&w=400&q=80"
    },
    {
      icon: <PawPrint className="w-8 h-8" />,
      title: "Dierlijke Geuren",
      description: "Specialistische behandeling tegen dierlijke geuren",
      image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=400&q=80"
    },
    {
      icon: <Bed className="w-8 h-8" />,
      title: "Matrasreiniging",
      description: "Hygiënische reiniging van matrassen en bedden",
      image: "https://images.unsplash.com/photo-1631049035182-249067d7618e?auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-gray-800 mb-4">Onze Services</h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Wij bieden een complete range aan professionele reinigingsdiensten voor particulieren en bedrijven.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-blue-200 bg-white overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-4 left-4 w-12 h-12 bg-white rounded-full flex items-center justify-center text-blue-600 shadow-lg">
                  {service.icon}
                </div>
              </div>
              <CardContent className="p-6 text-center">
                <h4 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h4>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <OfferteDialog>
                  <Button className="bg-green-500 hover:bg-green-600 w-full">
                    Offerte Aanvragen
                  </Button>
                </OfferteDialog>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
