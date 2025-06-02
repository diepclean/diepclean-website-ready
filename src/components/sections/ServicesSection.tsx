
import { Droplets, Car, Bed, PawPrint, Sofa } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { OfferteDialog } from "@/components/OfferteForm";

export const ServicesSection = () => {
  const services = [
    {
      icon: <Sofa className="w-8 h-8" />,
      title: "Meubelreiniging",
      description: "Professionele reiniging van banken, stoelen en andere meubels"
    },
    {
      icon: <Droplets className="w-8 h-8" />,
      title: "Tapijtreiniging", 
      description: "Diepe reiniging van tapijten en vloerkleden"
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: "Auto Interieur",
      description: "Complete reiniging van auto-interieur en bekleding"
    },
    {
      icon: <PawPrint className="w-8 h-8" />,
      title: "Dierlijke Geuren",
      description: "Specialistische behandeling tegen dierlijke geuren"
    },
    {
      icon: <Bed className="w-8 h-8" />,
      title: "Matrasreiniging",
      description: "Hygiënische reiniging van matrassen en bedden"
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
            <Card key={index} className="hover:shadow-lg transition-shadow border-2 hover:border-blue-200 bg-white">
              <CardContent className="p-8 text-center">
                <div className="text-blue-600 mb-4 flex justify-center">
                  {service.icon}
                </div>
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
