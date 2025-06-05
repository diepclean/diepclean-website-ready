
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
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=400&q=80"
    },
    {
      icon: <Droplets className="w-8 h-8" />,
      title: "Tapijtreiniging", 
      description: "Diepe reiniging van tapijten en vloerkleden",
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=400&q=80"
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: "Auto Interieur",
      description: "Complete reiniging van auto-interieur en bekleding",
      image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=400&q=80"
    },
    {
      icon: <PawPrint className="w-8 h-8" />,
      title: "Dierlijke Geuren",
      description: "Specialistische behandeling tegen dierlijke geuren",
      image: "https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?auto=format&fit=crop&w=400&q=80"
    },
    {
      icon: <Bed className="w-8 h-8" />,
      title: "Matrasreiniging",
      description: "Hygiënische reiniging van matrassen en bedden",
      image: "https://images.unsplash.com/photo-1631049035182-249067d7618e?auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-gray-800 mb-4">Onze Professionele Services</h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Wij bieden een complete range aan professionele reinigingsdiensten voor particulieren en bedrijven. 
            Met jarenlange ervaring en moderne apparatuur zorgen wij voor perfecte resultaten.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 bg-white overflow-hidden rounded-2xl">
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 left-4 w-14 h-14 bg-white rounded-full flex items-center justify-center text-blue-600 shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
              </div>
              <CardContent className="p-8 text-center">
                <h4 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">{service.title}</h4>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <OfferteDialog>
                  <Button className="bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 text-white w-full py-3 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
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
