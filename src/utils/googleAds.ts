
// Google Ads conversion tracking utilities

declare global {
  interface Window {
    dataLayer: any[];
    gtag_report_quote_conversion?: (url?: string) => boolean;
    gtag_report_phone_conversion?: (url?: string) => boolean;
    gtag_report_whatsapp_conversion?: (url?: string) => boolean;
  }
}

export const trackQuoteConversion = () => {
  // Track quote request conversion
  if (typeof window !== 'undefined' && window.gtag_report_quote_conversion) {
    window.gtag_report_quote_conversion();
  }
  
  // Push event to dataLayer for Google Tag Manager
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      'event': 'quote_request',
      'event_category': 'conversion',
      'event_label': 'offerte_aanvraag',
      'value': 1
    });
  }
};

export const trackPhoneConversion = () => {
  // Track phone call conversion
  if (typeof window !== 'undefined' && window.gtag_report_phone_conversion) {
    window.gtag_report_phone_conversion();
  }
  
  // Push event to dataLayer for Google Tag Manager
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      'event': 'phone_call',
      'event_category': 'conversion',
      'event_label': 'telefoon_gesprek',
      'value': 1
    });
  }
};

export const trackWhatsAppConversion = () => {
  // Track WhatsApp contact conversion
  if (typeof window !== 'undefined' && window.gtag_report_whatsapp_conversion) {
    window.gtag_report_whatsapp_conversion();
  }
  
  // Push event to dataLayer for Google Tag Manager
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      'event': 'whatsapp_contact',
      'event_category': 'conversion',
      'event_label': 'whatsapp_chat',
      'value': 1
    });
  }
};

export const trackPageView = (pageName: string) => {
  // Track page views for Google Ads
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      'event': 'page_view',
      'page_title': pageName,
      'page_location': window.location.href
    });
  }
};

export const trackServiceInterest = (serviceName: string) => {
  // Track interest in specific services
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      'event': 'service_interest',
      'event_category': 'engagement',
      'event_label': serviceName,
      'service_name': serviceName
    });
  }
};
