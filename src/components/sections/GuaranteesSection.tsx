
import { Shield, Clock, Award } from "lucide-react";

export const GuaranteesSection = () => {
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

  return (
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
  );
};
