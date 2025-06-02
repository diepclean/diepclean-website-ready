import { Phone, Mail, MapPin, Star, Droplets, Car, Bed, PawPrint, Sofa, MessageCircle, Calculator, Shield, Clock, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { OfferteDialog } from "@/components/OfferteForm";

const Index = () => {
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

  const reviews = [
    {
      name: "Marina van der Berg",
      location: "Amsterdam",
      rating: 5,
      text: "Fantastische service! Mijn bank ziet er weer uit als nieuw. Zeer professioneel en betrouwbaar.",
      date: "2 weken geleden"
    },
    {
      name: "Peter Janssen", 
      location: "Rotterdam",
      rating: 5,
      text: "DiepClean heeft mijn tapijt perfect schoongemaakt. Alle vlekken zijn verdwenen. Aanrader!",
      date: "1 maand geleden"
    },
    {
      name: "Sarah de Wit",
      location: "Utrecht", 
      rating: 5,
      text: "Auto-interieur reiniging was top! Zelfs de hardnekkigste vlekken zijn weg. Zeer tevreden.",
      date: "3 weken geleden"
    },
    {
      name: "Mark Verhoeven",
      location: "Den Haag",
      rating: 5,
      text: "Problemen met dierlijke geuren opgelost! Professioneel team, eerlijke prijs. 5 sterren!",
      date: "2 maanden geleden"
    },
    {
      name: "Linda Bakker",
      location: "Haarlem", 
      rating: 5,
      text: "Matras reiniging perfect uitgevoerd. Snelle service en zeer vriendelijk personeel.",
      date: "1 maand geleden"
    },
    {
      name: "Rob van Dijk",
      location: "Leiden",
      rating: 5,
      text: "Al jaren klant bij DiepClean. Altijd tevreden over de kwaliteit en service!",
      date: "1 week geleden"
    }
  ];

  const garanties = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "100% Tevredenheidsgarantie",
      description: "Niet tevreden? Dan maken we het kosteloos opnieuw!"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "24/7 Spoedhulp",
      description: "Ook in het weekend en 's avonds beschikbaar"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Erkend & Verzekerd",
      description: "Volledig verzekerd bedrijf met 10+ jaar ervaring"
    }
  ];

  const handleWhatsApp = () => {
    window.open("https://wa.me/31612345678?text=Hallo,%20ik%20heb%20interesse%20in%20jullie%20reinigingsdiensten", "_blank");
  };

  const handleCall = () => {
    window.open("tel:+31612345678");
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <img 
                src="/lovable-uploads/19e35f6d-df31-4df5-9608-ef160f3e904d.png" 
                alt="DiepClean Logo" 
                className="h-12 w-auto"
              />
              <div>
                <h1 className="text-2xl font-bold text-blue-600">DiepClean.nl</h1>
                <p className="text-sm text-green-600">Betaalbaar & Ecologisch</p>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-gray-600">
                <Phone className="w-4 h-4" />
                <span>06 12 34 56 78</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Mail className="w-4 h-4" />
                <span>info@diepclean.nl</span>
              </div>
              <OfferteDialog>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Calculator className="w-4 h-4 mr-2" />
                  Gratis Offerte
                </Button>
              </OfferteDialog>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-green-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold text-gray-800 mb-6">
            Professionele <span className="text-blue-600">Reiniging</span> Services
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            DiepClean.nl is uw specialist in meubelreiniging, tapijtreiniging, auto-interieur en matrasreiniging. 
            Wij maken alles weer als nieuw met onze eco-vriendelijke methoden.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <OfferteDialog>
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg"
              >
                <Calculator className="w-5 h-5 mr-2" />
                Gratis Offerte
              </Button>
            </OfferteDialog>
            <Button 
              size="lg" 
              onClick={handleWhatsApp}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 text-lg"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp Contact
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={handleCall}
              className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 text-lg"
            >
              <Phone className="w-5 h-5 mr-2" />
              Bel Direct
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">500+</div>
              <div className="text-gray-600">Tevreden Klanten</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">24/7</div>
              <div className="text-gray-600">Service Beschikbaar</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">100%</div>
              <div className="text-gray-600">Tevredenheidsgarantie</div>
            </div>
          </div>
        </div>
      </section>

      {/* Garanties Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {garanties.map((garantie, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                  {garantie.icon}
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">{garantie.title}</h4>
                <p className="text-gray-600">{garantie.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
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

      {/* Reviews Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-800 mb-4">Wat Onze Klanten Zeggen</h3>
            <div className="flex justify-center items-center space-x-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="text-xl font-semibold text-gray-700 ml-2">4.9/5 (127 reviews)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="bg-white">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{review.text}"</p>
                  <div className="border-t pt-4">
                    <div className="font-semibold text-gray-800">{review.name}</div>
                    <div className="text-sm text-gray-600">{review.location}</div>
                    <div className="text-xs text-gray-500">{review.date}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-bold text-gray-800 mb-6">Waarom DiepClean.nl?</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Droplets className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-2">Eco-vriendelijke Methoden</h4>
                    <p className="text-gray-600">Wij gebruiken alleen milieuvriendelijke en veilige reinigingsproducten.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Star className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-2">Jarenlange Ervaring</h4>
                    <p className="text-gray-600">Meer dan 10 jaar ervaring in professionele reiniging in de Randstad.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-2">24/7 Bereikbaar</h4>
                    <p className="text-gray-600">Wij zijn altijd bereikbaar voor spoedeisende reinigingsklussen.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-green-50 p-8 rounded-2xl">
              <h4 className="text-2xl font-bold text-gray-800 mb-6">Gratis Offerte</h4>
              <p className="text-gray-600 mb-6">
                Krijg binnen 24 uur een vrijblijvende offerte op maat. Geen verborgen kosten, altijd transparant.
              </p>
              <div className="space-y-4">
                <Button 
                  onClick={handleWhatsApp}
                  className="bg-green-500 hover:bg-green-600 w-full py-3"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp Offerte
                </Button>
                <Button 
                  onClick={handleCall}
                  variant="outline"
                  className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white w-full py-3"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Bel voor Offerte
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-4xl font-bold mb-6">Klaar voor een Gratis Offerte?</h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Geen verborgen kosten, geen verplichtingen. Binnen 2 uur een offerte op maat in uw WhatsApp.
          </p>
          <OfferteDialog>
            <Button 
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg mr-4"
            >
              <Calculator className="w-6 h-6 mr-2" />
              Start Offerte Aanvraag
            </Button>
          </OfferteDialog>
          <Button 
            size="lg"
            onClick={handleWhatsApp}
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg"
          >
            <MessageCircle className="w-6 h-6 mr-2" />
            Direct Contact
          </Button>
        </div>
      </section>

      {/* Contact Section */}
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
              onClick={handleWhatsApp}
              className="bg-green-500 hover:bg-green-600 px-8 py-4 text-lg"
            >
              <MessageCircle className="w-6 h-6 mr-2" />
              Start WhatsApp Chat
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <img 
                src="/lovable-uploads/19e35f6d-df31-4df5-9608-ef160f3e904d.png" 
                alt="DiepClean Logo" 
                className="h-8 w-auto"
              />
              <div>
                <div className="font-semibold">DiepClean.nl</div>
                <div className="text-sm">Professionele Reiniging Services</div>
              </div>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-sm">© 2024 DiepClean.nl - Alle rechten voorbehouden</p>
              <p className="text-xs text-gray-400">BTW: NL123456789B01 | KvK: 12345678</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={handleWhatsApp}
          className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all"
          size="lg"
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      </div>
    </div>
  );
};

export default Index;
