
import { Droplets, Car, Bed, PawPrint, Sofa, Home, Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { OfferteDialog } from "@/components/OfferteForm";

export const ServicesSection = () => {
  const services = [
    {
      icon: <Sofa className="w-8 h-8" />,
      title: "Meubelreiniging",
      description: "Professionele reiniging van banken, stoelen en andere stoffering",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=400&q=80",
      features: ["Diepe reiniging", "Vlekverwijdering", "Geurbestrijding"]
    },
    {
      icon: <Droplets className="w-8 h-8" />,
      title: "Tapijtreiniging", 
      description: "Grondige reiniging van tapijten en vloerkleden van alle maten",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=400&q=80",
      features: ["Extractie methode", "Snelle droging", "Allergenen verwijdering"]
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: "Trapreiniging",
      description: "Specialistische reiniging van trapbekleding en trapleuningen",
      image: "https://images.unsplash.com/photo-1599311239875-94b8b3ef54d4?auto=format&fit=crop&w=400&q=80",
      features: ["Veilige toegang", "Grondige reiniging", "Snelle service"]
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: "Auto Interieur",
      description: "Complete reiniging van autostoelen, vloermatten en interieur",
      image: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=400&q=80",
      features: ["Lederen stoelen", "Stoffering", "Dashboard reiniging"]
    },
    {
      icon: <PawPrint className="w-8 h-8" />,
      title: "Dierlijke Geuren",
      description: "Effectieve behandeling tegen hardnekkige diergeuren en vlekken",
      image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=400&q=80",
      features: ["Enzymatische reiniging", "Geurbestrijding", "Hygiënische behandeling"]
    },
    {
      icon: <Bed className="w-8 h-8" />,
      title: "Matrasreiniging",
      description: "Hygiënische en grondige reiniging voor een gezonde nachtrust",
      image: "https://images.unsplash.com/photo-1631049035182-249067d7618e?auto=format&fit=crop&w=400&q=80",
      features: ["Anti-allergie", "Vlekverwijdering", "Desinfectie"]
    }
  ];

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
            <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 bg-white overflow-hidden rounded-2xl">
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={`${service.title} service door DiepClean.nl`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 left-4 w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-blue-600 shadow-xl transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                <div className="mb-6">
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <OfferteDialog>
                  <Button className="bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 text-white w-full py-4 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 text-lg">
                    Offerte Aanvragen
                  </Button>
                </OfferteDialog>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Voor en Na Sectie */}
        <div className="bg-white rounded-3xl p-12 shadow-2xl">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-800 mb-4">Voor & Na Resultaten</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Bekijk de indrukwekkende resultaten van onze professionele reinigingsdiensten. 
              Van zwaar vervuilde meubels tot als-nieuw resultaten.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Voor & Na Set 1 */}
            <div className="space-y-6">
              <h4 className="text-2xl font-semibold text-center text-gray-800">Hoekbank Reiniging</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="relative rounded-2xl overflow-hidden shadow-lg">
                    <img 
                      src="/lovable-uploads/5848e504-b92d-41ea-8484-9f50c51736a7.png" 
                      alt="Voor reiniging - vervuilde hoekbank"
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      VOOR
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="relative rounded-2xl overflow-hidden shadow-lg">
                    <img 
                      src="/lovable-uploads/3345aa2a-9676-4c6f-8165-3094f0b61e64.png" 
                      alt="Na reiniging - schone hoekbank"
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      NA
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Voor & Na Set 2 */}
            <div className="space-y-6">
              <h4 className="text-2xl font-semibold text-center text-gray-800">Moderne Bank Reiniging</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="relative rounded-2xl overflow-hidden shadow-lg">
                    <img 
                      src="/lovable-uploads/e56a3918-1b53-4a21-8e0a-0077dc126ec0.png" 
                      alt="Voor reiniging - vervuilde moderne bank"
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      VOOR
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="relative rounded-2xl overflow-hidden shadow-lg">
                    <img 
                      src="/lovable-uploads/bfb40231-b2ac-47db-918d-12435e022e1b.png" 
                      alt="Na reiniging - schone moderne bank"
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      NA
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Voor & Na Set 3 */}
            <div className="space-y-6 lg:col-span-2">
              <h4 className="text-2xl font-semibold text-center text-gray-800">Grote Hoeksectie Reiniging</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="relative rounded-2xl overflow-hidden shadow-lg">
                    <img 
                      src="/lovable-uploads/f7fe24b8-647f-4401-88df-bc13759437e5.png" 
                      alt="Voor reiniging - grote hoeksectie met vlekken"
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      VOOR
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="relative rounded-2xl overflow-hidden shadow-lg">
                    <img 
                      src="/lovable-uploads/82fac395-f36b-407a-9d7d-61dd3f0efafe.png" 
                      alt="Na reiniging - grote hoeksectie volledig schoon"
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      NA
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="relative rounded-2xl overflow-hidden shadow-lg">
                    <img 
                      src="/lovable-uploads/7295c6a1-bcc0-433e-bb43-15aed506be59.png" 
                      alt="Eindresultaat - perfect gereinigde hoeksectie"
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      RESULTAAT
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <OfferteDialog>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 text-white px-12 py-6 text-xl shadow-xl rounded-xl"
              >
                <Calculator className="w-6 h-6 mr-3" />
                Ook zo'n resultaat? Vraag offerte aan!
              </Button>
            </OfferteDialog>
          </div>
        </div>
      </div>
    </section>
  );
};
