
interface AboutSectionProps {
  onWhatsApp: () => void;
  onCall: () => void;
}

export const AboutSection = ({ onWhatsApp, onCall }: AboutSectionProps) => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Over DiepClean.nl
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Met meer dan 5 jaar ervaring zijn wij specialist in professionele reinigingsdiensten. 
              Onze missie is om uw meubels, tapijten en auto-interieurs weer als nieuw te maken 
              met behulp van eco-vriendelijke reinigingsmethoden.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                <span className="text-gray-700">Ervaren en gecertificeerde technici</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                <span className="text-gray-700">100% eco-vriendelijke producten</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                <span className="text-gray-700">Gratis offerte binnen 24 uur</span>
              </div>
            </div>
          </div>
          <div>
            <img 
              src="/lovable-uploads/301b00cd-c044-4fae-87fa-a1d141d638b0.png"
              alt="DiepClean.nl team aan het werk"
              className="rounded-lg shadow-lg w-full"
              width="500"
              height="400"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
