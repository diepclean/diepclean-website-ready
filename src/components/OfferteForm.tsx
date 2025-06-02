
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger,
  DialogClose 
} from "@/components/ui/dialog";
import { Phone, Mail, MapPin, Calculator, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const OfferteForm = () => {
  const [formData, setFormData] = useState({
    naam: '',
    telefoon: '',
    email: '',
    postcode: '',
    service: '',
    oppervlakte: '',
    beschrijving: '',
    spoed: false
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const services = [
    'Bankreiniging',
    'Stoelreiniging', 
    'Tapijtreiniging',
    'Auto-interieur reiniging',
    'Matrasreiniging',
    'Dierlijke geurenbehandeling',
    'Complete woonkamer',
    'Kantoormeubels',
    'Anders'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // WhatsApp bericht samenstellen
    const message = `🧽 *GRATIS OFFERTE AANVRAAG*
    
*Klantgegevens:*
Naam: ${formData.naam}
Telefoon: ${formData.telefoon}
Email: ${formData.email}
Postcode: ${formData.postcode}

*Service Details:*
Service: ${formData.service}
Oppervlakte: ${formData.oppervlakte}
${formData.spoed ? '🚨 SPOED OPDRACHT' : ''}

*Beschrijving:*
${formData.beschrijving}

*Verzonden via DiepClean.nl*`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/31612345678?text=${encodedMessage}`, '_blank');
    
    setIsSubmitted(true);
    toast({
      title: "Offerte aanvraag verzonden!",
      description: "U wordt doorgestuurd naar WhatsApp. Wij nemen binnen 2 uur contact op.",
    });
  };

  if (isSubmitted) {
    return (
      <Card className="max-w-md mx-auto">
        <CardContent className="text-center p-8">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-gray-800 mb-2">Bedankt!</h3>
          <p className="text-gray-600 mb-4">
            Uw offerte aanvraag is verzonden. Wij nemen binnen 2 uur contact met u op.
          </p>
          <Button 
            onClick={() => setIsSubmitted(false)}
            variant="outline"
            className="w-full"
          >
            Nieuwe Aanvraag
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="max-w-2xl mx-auto shadow-lg">
      <CardHeader className="bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <CardTitle className="text-2xl text-center flex items-center justify-center">
          <Calculator className="w-6 h-6 mr-2" />
          Gratis Offerte Aanvragen
        </CardTitle>
        <p className="text-center text-blue-100">
          Binnen 2 uur een vrijblijvende offerte op maat
        </p>
      </CardHeader>
      
      <CardContent className="p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="naam" className="text-sm font-medium text-gray-700">
                Volledige naam *
              </Label>
              <Input
                id="naam"
                name="naam"
                value={formData.naam}
                onChange={handleInputChange}
                required
                className="mt-1"
                placeholder="Uw voor- en achternaam"
              />
            </div>
            
            <div>
              <Label htmlFor="telefoon" className="text-sm font-medium text-gray-700">
                Telefoonnummer *
              </Label>
              <Input
                id="telefoon"
                name="telefoon"
                type="tel"
                value={formData.telefoon}
                onChange={handleInputChange}
                required
                className="mt-1"
                placeholder="06 12 34 56 78"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                E-mailadres *
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="mt-1"
                placeholder="naam@voorbeeld.nl"
              />
            </div>
            
            <div>
              <Label htmlFor="postcode" className="text-sm font-medium text-gray-700">
                Postcode *
              </Label>
              <Input
                id="postcode"
                name="postcode"
                value={formData.postcode}
                onChange={handleInputChange}
                required
                className="mt-1"
                placeholder="1234 AB"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="service" className="text-sm font-medium text-gray-700">
                Gewenste service *
              </Label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleInputChange}
                required
                className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <option value="">Selecteer service</option>
                {services.map(service => (
                  <option key={service} value={service}>{service}</option>
                ))}
              </select>
            </div>
            
            <div>
              <Label htmlFor="oppervlakte" className="text-sm font-medium text-gray-700">
                Geschatte oppervlakte/aantal
              </Label>
              <Input
                id="oppervlakte"
                name="oppervlakte"
                value={formData.oppervlakte}
                onChange={handleInputChange}
                className="mt-1"
                placeholder="Bijv. 3-zits bank, 20m², 2 stoelen"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="beschrijving" className="text-sm font-medium text-gray-700">
              Beschrijving van de klus
            </Label>
            <Textarea
              id="beschrijving"
              name="beschrijving"
              value={formData.beschrijving}
              onChange={handleInputChange}
              className="mt-1"
              rows={4}
              placeholder="Beschrijf de staat van het meubilair, type vlekken, bijzonderheden, etc."
            />
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="spoed"
              name="spoed"
              checked={formData.spoed}
              onChange={handleInputChange}
              className="rounded border-gray-300"
            />
            <Label htmlFor="spoed" className="text-sm text-gray-700">
              Dit is een spoedopdracht (binnen 24 uur)
            </Label>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-800 mb-2">Wat krijgt u?</h4>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>✓ Gratis offerte binnen 2 uur</li>
              <li>✓ Transparante prijzen, geen verborgen kosten</li>
              <li>✓ Professioneel advies op maat</li>
              <li>✓ 100% vrijblijvend, geen verplichtingen</li>
            </ul>
          </div>

          <Button 
            type="submit" 
            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg"
            disabled={!formData.naam || !formData.telefoon || !formData.email || !formData.postcode || !formData.service}
          >
            📱 Verstuur via WhatsApp
          </Button>
        </form>

        <div className="mt-6 pt-6 border-t border-gray-200">
          <div className="flex items-center justify-center space-x-6 text-sm text-gray-600">
            <div className="flex items-center">
              <Phone className="w-4 h-4 mr-1" />
              <span>06 12 34 56 78</span>
            </div>
            <div className="flex items-center">
              <Mail className="w-4 h-4 mr-1" />
              <span>info@diepclean.nl</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export const OfferteDialog = ({ children }: { children: React.ReactNode }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="sr-only">Gratis Offerte Formulier</DialogTitle>
          <DialogDescription className="sr-only">
            Vraag een gratis offerte aan voor onze reinigingsdiensten
          </DialogDescription>
        </DialogHeader>
        <OfferteForm />
      </DialogContent>
    </Dialog>
  );
};

export default OfferteForm;
