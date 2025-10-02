// Google Analytics utility functions
// Replace 'GA_MEASUREMENT_ID' with your actual Google Analytics 4 Measurement ID

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

// Your Google Analytics 4 Measurement ID
// You'll need to replace this with your actual GA4 Measurement ID
export const GA_MEASUREMENT_ID = 'GA_MEASUREMENT_ID';

// Initialize Google Analytics
export const initGA = () => {
  // gtag is already initialized in the HTML head
  console.log('Google Analytics initialized');
};

// Track page views
export const trackPageView = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: url,
    });
  }
};

// Track custom events
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track button clicks
export const trackButtonClick = (buttonName: string) => {
  trackEvent('click', 'button', buttonName);
};

// Track form submissions
export const trackFormSubmission = (formName: string) => {
  trackEvent('submit', 'form', formName);
};

// Track contact attempts
export const trackContact = (method: string) => {
  trackEvent('contact', 'engagement', method);
};