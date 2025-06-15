
import { Phone, Mail, Calculator, Menu, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { OfferteDialog } from "@/components/OfferteForm";
import { trackQuoteConversion, trackWhatsAppConversion } from "@/utils/googleAds";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOfferteClick = () => {
    trackQuoteConversion();
  };

  const handleWhatsAppClick = () => {
    trackWhatsAppConversion();
    window.open("https://wa.me/31634273702?text=Hallo,%20ik%20heb%20interesse%20in%20jullie%20reinigingsdiensten", "_blank");
  };

  return (
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
              <p className="text-sm" style={{ color: '#16a34a' }}>Betaalbaar & Ecologisch</p>
            </div>
          </div>

          {/* Navigation Menu */}
          <div className="hidden lg:flex">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    className={navigationMenuTriggerStyle()}
                    onClick={() => scrollToSection('home')}
                    style={{ cursor: 'pointer' }}
                  >
                    Home
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    className={navigationMenuTriggerStyle()}
                    onClick={() => scrollToSection('diensten')}
                    style={{ cursor: 'pointer' }}
                  >
                    Diensten
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    className={navigationMenuTriggerStyle()}
                    onClick={() => scrollToSection('resultaten')}
                    style={{ cursor: 'pointer' }}
                  >
                    Resultaten
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    className={navigationMenuTriggerStyle()}
                    onClick={() => scrollToSection('reviews')}
                    style={{ cursor: 'pointer' }}
                  >
                    Reviews
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    className={navigationMenuTriggerStyle()}
                    onClick={() => scrollToSection('over-ons')}
                    style={{ cursor: 'pointer' }}
                  >
                    Over Ons
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    className={navigationMenuTriggerStyle()}
                    onClick={() => scrollToSection('contact')}
                    style={{ cursor: 'pointer' }}
                  >
                    Contact
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <div 
              className="flex items-center space-x-2 text-gray-600 cursor-pointer hover:text-green-600 transition-colors"
              onClick={handleWhatsAppClick}
            >
              <MessageCircle className="w-4 h-4" />
              <span>06 34 27 37 02</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <Mail className="w-4 h-4" />
              <span>info@diepclean.nl</span>
            </div>
            <OfferteDialog>
              <Button className="bg-blue-600 hover:bg-blue-700" onClick={handleOfferteClick}>
                <Calculator className="w-4 h-4 mr-2" />
                Gratis Offerte
              </Button>
            </OfferteDialog>
          </div>
        </div>
      </div>
    </header>
  );
};
