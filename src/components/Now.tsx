import React from 'react';
import { Cpu, Building2, Rocket, Users } from 'lucide-react';

const Now: React.FC = () => {
  const activities = [
    {
      icon: <Cpu className="w-6 h-6" />,
      text: 'In the weeds of GTM at AI tools',
      color: 'text-blue-600'
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      text: 'Working across social enterprise, private equity, large enterprise, and VC backed early stage',
      color: 'text-purple-600'
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      text: 'Building and launching quick prototypes',
      color: 'text-orange-600'
    },
    {
      icon: <Users className="w-6 h-6" />,
      text: 'Non Exec director at 2 companies',
      color: 'text-green-600'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-4">Now</h2>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <p className="text-xl text-gray-700 mb-8 font-medium">Right now I'm:</p>
            
            <div className="space-y-6">
              {activities.map((activity, index) => (
                <div 
                  key={index}
                  className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200 group"
                >
                  <div className={`${activity.color} group-hover:scale-110 transition-transform duration-200 flex-shrink-0 mt-1`}>
                    {activity.icon}
                  </div>
                  <p className="text-lg text-gray-700 group-hover:text-gray-900 transition-colors duration-200 leading-relaxed">
                    {activity.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Now;