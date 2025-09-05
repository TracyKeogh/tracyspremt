import React, { useState } from 'react';
import { ExternalLink, Users, TrendingUp, Lightbulb, Target, DollarSign, UserCheck } from 'lucide-react';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  isHighlighted?: boolean;
}

const ProjectsVariantB: React.FC = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const services: Service[] = [
    {
      id: 'startup-strategy',
      title: 'Startup Strategy & Scale',
      description: 'From concept to €1M+ ARR, I help startups develop winning strategies, secure funding, and scale operations effectively.',
      icon: <TrendingUp className="w-6 h-6" />,
      color: 'border-t-blue-500'
    },
    {
      id: 'stakeholder-alignment',
      title: 'Stakeholder Alignment',
      description: 'Expert in aligning diverse stakeholders across government, corporate, and startup ecosystems to drive results.',
      icon: <UserCheck className="w-6 h-6" />,
      color: 'border-t-purple-500',
      isHighlighted: true
    },
    {
      id: 'innovation-programs',
      title: 'Innovation Programs',
      description: 'Design and implement innovation initiatives, co-working spaces, and tech incubators that create thriving communities.',
      icon: <Lightbulb className="w-6 h-6" />,
      color: 'border-t-orange-500'
    },
    {
      id: 'fundraising-partnerships',
      title: 'Fundraising & Partnerships',
      description: 'Proven track record in securing philanthropic, government, and corporate funding while building strategic partnerships.',
      icon: <DollarSign className="w-6 h-6" />,
      color: 'border-t-green-500'
    },
    {
      id: 'board-advisory',
      title: 'Board Advisory',
      description: 'Currently holding 3 board seats with 2 chairman roles, I bring governance expertise and strategic oversight.',
      icon: <Target className="w-6 h-6" />,
      color: 'border-t-indigo-500'
    },
    {
      id: 'idea-prototyping',
      title: 'Idea Prototyping',
      description: 'Transform concepts into testable prototypes, validate ideas quickly, and iterate based on feedback to minimize risk.',
      icon: <Users className="w-6 h-6" />,
      color: 'border-t-cyan-500'
    }
  ];

  const handleServiceClick = (service: Service) => {
    setSelectedService(selectedService === service.id ? null : service.id);
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-4">
            How I Help
          </h2>
          <p className="text-xl text-gray-600">Strategic consulting across the startup ecosystem</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {services.map((service) => (
            <div
              key={service.id}
              className={`relative bg-white rounded-lg p-6 border border-t-4 border-t-transparent transition-all duration-300 cursor-pointer hover:shadow-lg hover:${service.color} ${
                service.isHighlighted 
                  ? 'border-blue-300 bg-gradient-to-br from-blue-50 to-purple-50' 
                  : 'border-gray-200'
              }`}
            >
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
              </div>

              <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsVariantB;