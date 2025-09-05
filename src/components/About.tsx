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

          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 text-left">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Proven Results Across Sectors:</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600"><strong>€1M ARR in Year 1</strong> - Scaled Grow Remote from concept to €1M+ traded income</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600"><strong>6,878 Jobs Unlocked</strong> - Created location-independent opportunities across 81 communities</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600"><strong>Tripled KPIs</strong> - 10x the market average of Irish nonprofits through customer-centric R&D</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600"><strong>4.7/5 Team Satisfaction</strong> - Built high-performing teams that love their work</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600"><strong>3 Government Strategies Launched</strong> - Including Oireachtas briefings and national programmes</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600"><strong>Europe's Largest Remote Training</strong> - Recognised by SOLAS as among their strongest programmes</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600"><strong>Bank of Ireland's First Tech Incubator</strong> - West Region innovation hub across 8 counties</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600"><strong>Forbes, RTÉ, Harvard Business Review</strong> - High-profile media coverage and speaking</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600"><strong>€1M+ Fundraising</strong> - Government, philanthropic, and VC funding secured</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600"><strong>3 Board Chairs</strong> - Currently holding 3 board seats with 2 chairman roles</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600"><strong>International Expansion</strong> - Scaled operations to Spain and across 122 European communities</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;