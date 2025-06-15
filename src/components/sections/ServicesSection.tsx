import { Droplets, Car, Bed, PawPrint, Sofa, Home, Calculator, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { OfferteDialog } from "@/components/OfferteForm";
import { useState } from "react";

export const ServicesSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const services = [
    {
      icon: <Sofa className="w-8 h-8" />,
      title: "Meubelreiniging",
      description: "Professionele reiniging van banken, stoelen en andere stoffering",
      image: "/lovable-uploads/d6e39dec-02a3-4ebe-976b-5c889ad7fdf3.png",
      features: ["Diepe reiniging", "Vlekverwijdering", "Geurbestrijding"]
    },
    {
      icon: <Droplets className="w-8 h-8" />,
      title: "Tapijtreiniging", 
      description: "Grondige reiniging van tapijten en vloerkleden van alle maten",
      image: "/lovable-uploads/f12addc9-052a-4293-976c-66b349bfd745.png",
      features: ["Extractie methode", "Snelle droging", "Allergenen verwijdering"]
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: "Trapreiniging",
      description: "Specialistische reiniging van trapbekleding en trapleuningen",
      image: "/lovable-uploads/a8d470f5-33d3-48e9-83c3-743b90a6ead2.png",
      features: ["Veilige toegang", "Grondige reiniging", "Snelle service"]
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: "Auto Interieur",
      description: "Complete reiniging van autostoelen, vloermatten en interieur",
      image: "/lovable-uploads/b8450079-1c4d-4b4a-b08a-fe9d73108543.png",
      features: ["Lederen stoelen", "Stoffering", "Dashboard reiniging"]
    },
    {
      icon: <PawPrint className="w-8 h-8" />,
      title: "Dierlijke Geuren",
      description: "Effectieve behandeling tegen hardnekkige diergeuren en vlekken",
      image: "/lovable-uploads/d4c95481-e883-4552-9418-0f9d0df5e087.png",
      features: ["Enzymatische reiniging", "Geurbestrijding", "Hygiënische behandeling"]
    },
    {
      icon: <Bed className="w-8 h-8" />,
      title: "Matrasreiniging",
      description: "Hygiënische en grondige reiniging voor een gezonde nachtrust",
      image: "/lovable-uploads/c3ee6927-2469-4aee-95a3-65bbc645ce7f.png",
      features: ["Anti-allergie", "Vlekverwijdering", "Desinfectie"]
    }
  ];

  const beforeAfterSlides = [
    {
      title: "Hoekbank Reiniging",
      before: "/lovable-uploads/66cd836e-690f-479a-bee9-d025cb74823c.png",
      after: "/lovable-uploads/82a1bf7a-87be-4f91-b794-69dbfc5d440c.png"
    },
    {
      title: "Moderne Bank Reiniging", 
      before: "/lovable-uploads/24ee282d-dbee-405e-b117-dcaaa28a6ea3.png",
      after: "/lovable-uploads/442b9a57-a2cc-4d29-a416-91c39d5a546e.png"
    },
    {
      title: "Bank Met Chaise Longue", 
      before: "/lovable-uploads/c7ea61b3-c460-4fb7-8ce9-e48400bad7e0.png",
      after: "/lovable-uploads/9a33605c-206a-4774-8dbf-ebb44554b144.png"
    },
    {
      title: "L-Vormige Bank Reiniging", 
      before: "/lovable-uploads/798740fc-b765-42c5-a763-86714aec273d.png",
      after: "/lovable-uploads/32255eac-2a64-423d-ba0d-67c6f1cdb734.png"
    }
  ];

  const cities = [
    {
      name: "Amsterdam",
      description: "Reiniging in heel Amsterdam",
      image: "/lovable-uploads/58a4c6a5-c0d4-43ee-9f24-8982998d8f6b.png"
    },
    {
      name: "Rotterdam",
      description: "Service beschikbaar in Rotterdam",
      image: "/lovable-uploads/d9f7ca2c-e6b3-4abb-b66f-aee4736f18ff.png"
    },
    {
      name: "Den Haag",
      description: "Professionele reiniging in Den Haag",
      image: "/lovable-uploads/46945a64-cf88-4e50-860a-1a00af816f5a.png"
    },
    {
      name: "Utrecht",
      description: "Snelle service in Utrecht en omgeving",
      image: "/lovable-uploads/5bc2263c-99f2-4c3a-aef1-2739c61f81d9.png"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % beforeAfterSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + beforeAfterSlides.length) % beforeAfterSlides.length);
  };

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

        {/* Voor en Na Sectie met Carousel */}
        <div id="resultaten" className="bg-white rounded-3xl p-12 shadow-2xl mb-20">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-800 mb-4">Voor & Na Resultaten</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Bekijk de indrukwekkende resultaten van onze professionele reinigingsdiensten. 
              Van zwaar vervuilde meubels tot als-nieuw resultaten.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Carousel Container */}
            <div className="overflow-hidden rounded-2xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {beforeAfterSlides.map((slide, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="space-y-6 px-4">
                      <h4 className="text-2xl font-semibold text-center text-gray-800">{slide.title}</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="text-center">
                          <div className="relative rounded-2xl overflow-hidden shadow-lg">
                            <img 
                              src={slide.before}
                              alt="Voor reiniging"
                              className="w-full h-64 object-cover"
                            />
                            <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                              VOOR
                            </div>
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="relative rounded-2xl overflow-hidden shadow-lg">
                            <img 
                              src={slide.after}
                              alt="Na reiniging"
                              className="w-full h-64 object-cover"
                            />
                            <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                              NA
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 z-10"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 z-10"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center space-x-2 mt-8">
              {beforeAfterSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <OfferteDialog>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 text-white px-8 py-4 text-lg shadow-xl rounded-xl w-full max-w-xs mx-auto md:px-12 md:py-6 md:text-xl md:max-w-none"
              >
                <Calculator className="w-6 h-6 mr-3" />
                Ook zo'n resultaat? Vraag offerte aan!
              </Button>
            </OfferteDialog>
          </div>
        </div>

        {/* Wij zijn werkzaam in diverse regio Sectie */}
        <div className="bg-white rounded-3xl p-12 shadow-2xl">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-800 mb-4">Wij zijn werkzaam in diverse regio</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {cities.map((city, index) => (
              <div key={index} className="relative overflow-hidden rounded-2xl shadow-lg group">
                <img 
                  src={city.image}
                  alt={`DiepClean in ${city.name}`}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h4 className="text-2xl font-bold mb-1">{city.name}</h4>
                    <p className="text-sm text-gray-200">{city.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <OfferteDialog>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 text-white px-12 py-6 text-xl shadow-xl rounded-xl"
              >
                <Calculator className="w-6 h-6 mr-3" />
                Vraag nu een vrijblijvende offerte aan
              </Button>
            </OfferteDialog>
          </div>
        </div>
      </div>
    </section>
  );
};
