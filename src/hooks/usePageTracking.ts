import { useEffect } from 'react';
import { trackPageView } from '../utils/analytics';

// Hook to track page views automatically
export const usePageTracking = () => {
  useEffect(() => {
    // Track the initial page load
    const currentPath = window.location.pathname + window.location.search;
    trackPageView(currentPath);

    // Track browser back/forward navigation
    const handlePopState = () => {
      const newPath = window.location.pathname + window.location.search;
      trackPageView(newPath);
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);
};