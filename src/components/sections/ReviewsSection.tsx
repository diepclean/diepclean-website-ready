
import { Star } from "lucide-react";

export const ReviewsSection = () => {
  const reviews = [
    {
      name: "Maria van der Berg",
      rating: 5,
      text: "Fantastische service! Mijn bank ziet er weer uit als nieuw.",
      location: "Amsterdam"
    },
    {
      name: "Jan Smit", 
      rating: 5,
      text: "Professioneel en snel. Zeer tevreden met het resultaat.",
      location: "Rotterdam"
    },
    {
      name: "Linda de Vries",
      rating: 5, 
      text: "Vriendelijk personeel en uitstekende kwaliteit.",
      location: "Den Haag"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Wat Onze Klanten Zeggen
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Meer dan 300 tevreden klanten gingen u voor
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">"{review.text}"</p>
              <div>
                <p className="font-semibold text-gray-900">{review.name}</p>
                <p className="text-gray-500 text-sm">{review.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
