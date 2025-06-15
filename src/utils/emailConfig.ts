
// EmailJS configuratie
// Om dit te laten werken moet je:
// 1. Een account aanmaken op emailjs.com
// 2. Een email service toevoegen (Gmail, Outlook, etc.)
// 3. Een email template maken
// 4. De onderstaande waardes vervangen met je eigen EmailJS gegevens

export const emailConfig = {
  serviceId: 'YOUR_SERVICE_ID', // Vervang met je EmailJS service ID
  templateId: 'YOUR_TEMPLATE_ID', // Vervang met je EmailJS template ID
  publicKey: 'YOUR_PUBLIC_KEY', // Vervang met je EmailJS public key
};

// Voorbeeld template voor EmailJS:
/*
Template Name: offerte_aanvraag
Template Content:

Onderwerp: Nieuwe Offerte Aanvraag - {{from_name}}

Beste DiepClean team,

Er is een nieuwe offerte aanvraag binnengekomen via de website:

KLANTGEGEVENS:
- Naam: {{from_name}}
- Telefoon: {{phone}}
- Email: {{from_email}}
- Postcode: {{postcode}}

SERVICE DETAILS:
- Gewenste service: {{service}}
- Oppervlakte/aantal: {{oppervlakte}}
- Spoed: {{spoed}}

BESCHRIJVING:
{{beschrijving}}

Verzonden op: {{timestamp}}

Met vriendelijke groet,
DiepClean.nl Website
*/
