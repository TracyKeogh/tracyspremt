import React from 'react';
import { useABTest, ABTestConfig } from '../hooks/useABTest';

interface ABTestWrapperProps {
  config: ABTestConfig;
  variants: Record<string, React.ReactNode>;
  fallback?: React.ReactNode;
}

const ABTestWrapper: React.FC<ABTestWrapperProps> = ({ config, variants, fallback }) => {
  const selectedVariant = useABTest(config);
  
  // Show fallback while variant is being determined
  if (!selectedVariant) {
    return <>{fallback || variants[config.variants[0]]}</>;
  }
  
  // Render the selected variant
  return <>{variants[selectedVariant] || fallback || variants[config.variants[0]]}</>;
};

export default ABTestWrapper;