
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const ReviewsSection = () => {
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

  return (
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
  );
};
