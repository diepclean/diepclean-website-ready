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
      
      setIsSubmitted(true);
      toast({
        title: "Offerte aanvraag verzonden!",
        description: "Uw aanvraag is verzonden. Wij nemen binnen 2 uur contact op.",
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

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/31634273702?text=Hallo,%20ik%20heb%20interesse%20in%20jullie%20reinigingsdiensten", "_blank");
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
          <div className="text-center space-y-2 mb-4">
            <p className="text-sm text-gray-600">U kunt ook eenvoudig en snel foto's sturen via WhatsApp.</p>
            <div 
              className="flex items-center justify-center space-x-2 cursor-pointer hover:bg-green-50 p-2 rounded-lg transition-colors"
              onClick={handleWhatsAppClick}
            >
              <svg 
                className="w-5 h-5" 
                fill="#25D366" 
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.486z"/>
              </svg>
              <span className="font-medium text-green-600 hover:text-green-700">06 34 27 37 02</span>
            </div>
          </div>
          <DialogClose asChild>
            <Button 
              variant="outline"
              className="w-full"
            >
              Sluiten
            </Button>
          </DialogClose>
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
          <div className="flex items-center justify-center text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <svg 
                className="w-4 h-4" 
                fill="#25D366" 
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.486z"/>
              </svg>
              <span>06 34 27 37 02</span>
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
