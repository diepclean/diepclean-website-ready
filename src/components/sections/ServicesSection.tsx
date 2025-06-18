
import { Sofa, Car, Home, Bed } from "lucide-react";

export const ServicesSection = () => {
  const services = [
    {
      icon: Sofa,
      title: "Meubelreiniging",
      description: "Professionele reiniging van banken, stoelen en andere meubels",
      price: "Vanaf €45"
    },
    {
      icon: Home,
      title: "Tapijtreiniging", 
      description: "Diepe reiniging van tapijten en vloerkleden",
      price: "Vanaf €25/m²"
    },
    {
      icon: Car,
      title: "Auto Interieur",
      description: "Complete interieurreiniging van uw auto",
      price: "Vanaf €75"
    },
    {
      icon: Bed,
      title: "Matrasreiniging",
      description: "Hygiënische reiniging van matrassen",
      price: "Vanaf €35"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Onze Diensten
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Wij bieden professionele reinigingsdiensten voor al uw behoeften
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <service.icon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <p className="text-blue-600 font-semibold">{service.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
