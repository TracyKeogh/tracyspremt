import { useState, useEffect } from 'react';

export interface ABTestConfig {
  testName: string;
  variants: string[];
  weights?: number[]; // Optional weights for each variant (defaults to equal distribution)
}

export const useABTest = (config: ABTestConfig): string => {
  const [variant, setVariant] = useState<string>('');

  useEffect(() => {
    const { testName, variants, weights } = config;
    
    // Check if user already has a variant assigned for this test
    const storageKey = `ab_test_${testName}`;
    const existingVariant = localStorage.getItem(storageKey);
    
    if (existingVariant && variants.includes(existingVariant)) {
      setVariant(existingVariant);
      return;
    }

    // Assign new variant based on weights or equal distribution
    let selectedVariant: string;
    
    if (weights && weights.length === variants.length) {
      // Use weighted distribution
      const totalWeight = weights.reduce((sum, weight) => sum + weight, 0);
      const random = Math.random() * totalWeight;
      let currentWeight = 0;
      
      for (let i = 0; i < variants.length; i++) {
        currentWeight += weights[i];
        if (random <= currentWeight) {
          selectedVariant = variants[i];
          break;
        }
      }
    } else {
      // Use equal distribution
      const randomIndex = Math.floor(Math.random() * variants.length);
      selectedVariant = variants[randomIndex];
    }
    
    // Store the variant assignment
    localStorage.setItem(storageKey, selectedVariant);
    setVariant(selectedVariant);
    
    // Track the assignment (you can integrate with analytics here)
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'ab_test_assignment', {
        test_name: testName,
        variant: selectedVariant,
      });
    }
    
  }, [config.testName, config.variants, config.weights]);

  return variant;
};

// Helper function to track A/B test conversions
export const trackABTestConversion = (testName: string, conversionType: string = 'conversion') => {
  const storageKey = `ab_test_${testName}`;
  const variant = localStorage.getItem(storageKey);
  
  if (variant && typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'ab_test_conversion', {
      test_name: testName,
      variant: variant,
      conversion_type: conversionType,
    });
  }
  
  // You can also send to your own analytics endpoint
  console.log(`A/B Test Conversion: ${testName} - ${variant} - ${conversionType}`);
};