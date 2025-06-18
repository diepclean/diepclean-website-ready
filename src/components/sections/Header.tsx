import { Phone, Mail, Calculator, Menu } from "lucide-react";
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
              <h1 className="text-2xl font-bold text-blue-600">DiepClean</h1>
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
              className="text-center bg-green-50 p-3 rounded-lg border border-green-200 cursor-pointer hover:bg-green-100 transition-colors"
              onClick={handleWhatsAppClick}
            >
              <p className="text-sm font-semibold text-green-800 mb-1">Prijsopgave via WhatsApp</p>
              <div className="flex items-center justify-center space-x-2 text-green-700 font-bold text-lg">
                <svg 
                  className="w-5 h-5" 
                  fill="#25D366" 
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.486z"/>
                </svg>
                <span>06 34 27 37 02</span>
              </div>
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
