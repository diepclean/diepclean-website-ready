
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/19e35f6d-df31-4df5-9608-ef160f3e904d.png" 
              alt="DiepClean.nl Logo" 
              className="h-10 w-auto"
              width="40"
              height="40"
            />
            <span className="ml-2 text-xl font-bold text-blue-600">DiepClean.nl</span>
          </div>

          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('diensten')}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Diensten
            </button>
            <button 
              onClick={() => scrollToSection('reviews')}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Reviews
            </button>
            <button 
              onClick={() => scrollToSection('over-ons')}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Over Ons
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Contact
            </button>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="tel:+31634273702" 
              className="flex items-center text-blue-600 hover:text-blue-700"
            >
              <Phone className="w-4 h-4 mr-1" />
              06 34 27 37 02
            </a>
          </div>

          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-700 hover:text-blue-600"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="py-2 space-y-1">
              <button 
                onClick={() => scrollToSection('home')}
                className="block px-4 py-2 text-gray-700 hover:text-blue-600 w-full text-left"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('diensten')}
                className="block px-4 py-2 text-gray-700 hover:text-blue-600 w-full text-left"
              >
                Diensten
              </button>
              <button 
                onClick={() => scrollToSection('reviews')}
                className="block px-4 py-2 text-gray-700 hover:text-blue-600 w-full text-left"
              >
                Reviews
              </button>
              <button 
                onClick={() => scrollToSection('over-ons')}
                className="block px-4 py-2 text-gray-700 hover:text-blue-600 w-full text-left"
              >
                Over Ons
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block px-4 py-2 text-gray-700 hover:text-blue-600 w-full text-left"
              >
                Contact
              </button>
              <div className="px-4 py-2">
                <a 
                  href="tel:+31634273702" 
                  className="flex items-center text-blue-600 hover:text-blue-700"
                >
                  <Phone className="w-4 h-4 mr-1" />
                  06 34 27 37 02
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
