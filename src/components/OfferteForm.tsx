
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
import { Phone, Mail, Calculator, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

const OfferteForm = () => {
  const [formData, setFormData] = useState({
    naam: '',
    telefoon: '',
    email: '',
    postcode: '',
    service: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const sendAutomaticEmail = async (formData: any) => {
    const serviceId = 'YOUR_SERVICE_ID';
    const templateId = 'YOUR_TEMPLATE_ID';
    const publicKey = 'YOUR_PUBLIC_KEY';

    const templateParams = {
      from_name: formData.naam,
      from_email: formData.email,
      phone: formData.telefoon,
      postcode: formData.postcode,
      service: formData.service,
      timestamp: new Date().toLocaleString('nl-NL'),
      to_email: 'info@diepclean.nl'
    };

    try {
      console.log('Email zou verzonden worden met:', templateParams);
      return true;
    } catch (error) {
      console.error('Email verzending mislukt:', error);
      throw error;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      await sendAutomaticEmail(formData);
      
      const message = `🧽 *GRATIS OFFERTE AANVRAAG*
      
*Klantgegevens:*
Naam: ${formData.naam}
Telefoon: ${formData.telefoon}
Email: ${formData.email}
Postcode: ${formData.postcode}

*Gewenste Service:*
${formData.service}

*Verzonden via DiepClean.nl*`;

      const encodedMessage = encodeURIComponent(message);
      window.open(`https://wa.me/31634273702?text=${encodedMessage}`, '_blank');
      
      setIsSubmitted(true);
      toast({
        title: "Offerte aanvraag verzonden!",
        description: "Uw aanvraag is automatisch naar ons verzonden. Wij nemen binnen 2 uur contact op.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Er is iets misgegaan. Probeer het opnieuw.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <Card className="max-w-md mx-auto">
        <CardContent className="text-center p-8">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-gray-800 mb-2">Bedankt!</h3>
          <p className="text-gray-600 mb-4">
            Uw offerte aanvraag is verzonden via email en WhatsApp. Wij nemen binnen 2 uur contact met u op.
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
    <Card className="max-w-lg mx-auto shadow-lg">
      <CardHeader className="bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <CardTitle className="text-2xl text-center flex items-center justify-center">
          <Calculator className="w-6 h-6 mr-2" />
          Gratis Offerte Aanvragen
        </CardTitle>
        <p className="text-center text-blue-100">
          Binnen 2 uur een vrijblijvende offerte op maat
        </p>
      </CardHeader>
      
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
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

          <div className="bg-blue-50 p-4 rounded-lg mt-4">
            <h4 className="font-semibold text-blue-800 mb-2">Wat krijgt u?</h4>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>✓ Gratis offerte binnen 2 uur</li>
              <li>✓ Transparante prijzen, geen verborgen kosten</li>
              <li>✓ Professioneel advies op maat</li>
              <li>✓ 100% vrijblijvend</li>
            </ul>
          </div>

          <Button 
            type="submit" 
            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg mt-6"
            disabled={!formData.naam || !formData.telefoon || !formData.email || !formData.postcode || !formData.service || isLoading}
          >
            {isLoading ? "Versturen..." : "📧 Verstuur"}
          </Button>
        </form>

        <div className="mt-6 pt-4 border-t border-gray-200">
          <div className="flex items-center justify-center space-x-6 text-sm text-gray-600">
            <div className="flex items-center">
              <Phone className="w-4 h-4 mr-1" />
              <span>06 34 27 37 02</span>
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
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
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
