import React, { useState, useEffect } from 'react';

interface ABTestResult {
  testName: string;
  variant: string;
  assignments: number;
  conversions: number;
  conversionRate: number;
}

const ABTestDashboard: React.FC = () => {
  const [results, setResults] = useState<ABTestResult[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Listen for A/B test events
    const handleABTestEvent = (event: any) => {
      if (event.detail) {
        updateResults(event.detail);
      }
    };

    window.addEventListener('ab_test_assignment', handleABTestEvent);
    window.addEventListener('ab_test_conversion', handleABTestEvent);

    return () => {
      window.removeEventListener('ab_test_assignment', handleABTestEvent);
      window.removeEventListener('ab_test_conversion', handleABTestEvent);
    };
  }, []);

  const updateResults = (data: any) => {
    // This is a simplified version - in production you'd send to a real analytics service
    console.log('A/B Test Event:', data);
  };

  // Only show in development or when accessed with special URL parameter
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const isDev = process.env.NODE_ENV === 'development';
    const showDashboard = urlParams.get('ab_dashboard') === 'true';
    
    setIsVisible(isDev || showDashboard);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-white border border-gray-300 rounded-lg shadow-lg p-4 max-w-sm z-50">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-semibold text-sm">A/B Test Dashboard</h3>
        <button 
          onClick={() => setIsVisible(false)}
          className="text-gray-500 hover:text-gray-700 text-sm"
        >
          ×
        </button>
      </div>
      
      <div className="text-xs text-gray-600 mb-2">
        Current Test: Services Hover Effect
      </div>
      
      <div className="space-y-2 text-xs">
        <div className="flex justify-between">
          <span>Variant A (Current):</span>
          <span className="font-mono">50%</span>
        </div>
        <div className="flex justify-between">
          <span>Variant B (Top Highlight):</span>
          <span className="font-mono">50%</span>
        </div>
      </div>
      
      <div className="mt-3 pt-2 border-t border-gray-200">
        <div className="text-xs text-gray-500">
          Your variant: {localStorage.getItem('ab_test_services_hover_effect') || 'Loading...'}
        </div>
      </div>
      
      <div className="mt-2">
        <button 
          onClick={() => {
            localStorage.removeItem('ab_test_services_hover_effect');
            window.location.reload();
          }}
          className="text-xs bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
        >
          Reset Test
        </button>
      </div>
    </div>
  );
};

export default ABTestDashboard;