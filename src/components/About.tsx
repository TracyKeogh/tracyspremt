import React from 'react';
import { ArrowRight, RefreshCw } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-8 mb-12">
            <div className="flex items-center space-x-4 text-lg font-medium text-gray-700">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                <span>Spot</span>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-400" />
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse delay-300"></div>
                <span>Build</span>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-400" />
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse delay-600"></div>
                <span>Scale</span>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-400" />
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse delay-900"></div>
                <span>Exit</span>
              </div>
              <RefreshCw className="w-5 h-5 text-gray-400 animate-spin" style={{ animationDuration: '3s' }} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;