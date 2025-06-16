
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calculator, ChevronLeft, ChevronRight } from "lucide-react";
import { OfferteDialog } from "@/components/OfferteForm";

interface BeforeAfterSlide {
  title: string;
  before: string;
  after: string;
}

interface BeforeAfterCarouselProps {
  slides: BeforeAfterSlide[];
}

export const BeforeAfterCarousel = ({ slides }: BeforeAfterCarouselProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="bg-white rounded-3xl p-12 shadow-2xl mb-20">
      <div className="text-center mb-12">
        <h3 className="text-4xl font-bold text-gray-800 mb-4">Voor & Na Resultaten</h3>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Bekijk de indrukwekkende resultaten van onze professionele reinigingsdiensten. 
          Van zwaar vervuilde meubels tot als-nieuw resultaten.
        </p>
      </div>

      <div className="relative max-w-4xl mx-auto">
        <div className="overflow-hidden rounded-2xl">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <div className="space-y-6 px-4">
                  <h4 className="text-2xl font-semibold text-center text-gray-800">{slide.title}</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="relative rounded-2xl overflow-hidden shadow-lg">
                        <img 
                          src={slide.before}
                          alt="Voor reiniging"
                          width="400"
                          height="256"
                          loading="lazy"
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
                          width="400"
                          height="256"
                          loading="lazy"
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

        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 z-10 min-h-[48px] min-w-[48px] touch-manipulation"
          aria-label="Vorige afbeelding"
        >
          <ChevronLeft className="w-6 h-6 text-gray-600" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 z-10 min-h-[48px] min-w-[48px] touch-manipulation"
          aria-label="Volgende afbeelding"
        >
          <ChevronRight className="w-6 h-6 text-gray-600" />
        </button>

        <div className="flex justify-center space-x-2 mt-8">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-8 h-8 rounded-full transition-all duration-300 touch-manipulation ${
                currentSlide === index ? 'bg-blue-600' : 'bg-gray-300'
              }`}
              aria-label={`Ga naar slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="text-center mt-12">
        <OfferteDialog>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 text-white px-8 py-4 text-lg shadow-xl rounded-xl min-h-[48px] touch-manipulation"
          >
            <Calculator className="w-6 h-6 mr-3" />
            Vraag Offerte Aan
          </Button>
        </OfferteDialog>
      </div>
    </div>
  );
};
