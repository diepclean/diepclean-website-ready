
// Google Ads conversion tracking functions
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

export const trackWhatsAppConversion = () => {
  try {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-CONVERSION_ID/WHATSAPP_CONVERSION_LABEL',
        'event_callback': () => {
          console.log('WhatsApp conversion tracked');
        }
      });
    }
  } catch (error) {
    console.error('Error tracking WhatsApp conversion:', error);
  }
};

export const trackPhoneConversion = () => {
  try {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-CONVERSION_ID/PHONE_CONVERSION_LABEL',
        'event_callback': () => {
          console.log('Phone conversion tracked');
        }
      });
    }
  } catch (error) {
    console.error('Error tracking phone conversion:', error);
  }
};
