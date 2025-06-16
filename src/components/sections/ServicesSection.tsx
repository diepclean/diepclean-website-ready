import { Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";
import { OfferteDialog } from "@/components/OfferteForm";
import { ServiceCard } from "./ServiceCard";
import { BeforeAfterCarousel } from "./BeforeAfterCarousel";
import { CityCard } from "./CityCard";
import { services, beforeAfterSlides, cities } from "./ServicesSectionData";

export const ServicesSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-800 mb-6">Onze Professionele Services</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Wij bieden een complete range aan professionele reinigingsdiensten voor particulieren en bedrijven in de Randstad. 
            Met jarenlange ervaring en moderne apparatuur zorgen wij voor perfecte resultaten bij elke klus.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={<service.icon className="w-8 h-8" />}
              title={service.title}
              description={service.description}
              image={service.image}
              features={service.features}
              index={index}
            />
          ))}
        </div>

        <div id="resultaten">
          <BeforeAfterCarousel slides={beforeAfterSlides} />
        </div>

        <div className="bg-white rounded-3xl p-12 shadow-2xl">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-800 mb-4">Wij zijn werkzaam in diverse regio</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {cities.map((city, index) => (
              <CityCard
                key={index}
                name={city.name}
                description={city.description}
                image={city.image}
                index={index}
              />
            ))}
          </div>

          <div className="flex justify-center items-center w-full">
            <OfferteDialog>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 text-white px-10 py-5 text-xl shadow-xl rounded-xl min-h-[48px] touch-manipulation"
              >
                <Calculator className="w-6 h-6 mr-3" />
                Vraag Offerte Aan
              </Button>
            </OfferteDialog>
          </div>
        </div>
      </div>
    </section>
  );
};
