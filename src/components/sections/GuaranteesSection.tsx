
import { Shield, Clock, Award } from "lucide-react";

export const GuaranteesSection = () => {
  const garanties = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Eerst een test",
      description: "Zodat u het resultaat vooraf ziet"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "24/7 Spoedhulp",
      description: "Ook in het weekend en 's avonds beschikbaar"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Erkend & Verzekerd",
      description: "Volledig verzekerd bedrijf met 5+ jaar ervaring"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {garanties.map((garantie, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                {garantie.icon}
              </div>
              <h4 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                {garantie.title}
              </h4>
              <p className="text-gray-600 leading-relaxed text-lg">
                {garantie.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
