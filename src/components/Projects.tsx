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

const Projects: React.FC = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const services: Service[] = [
    {
      id: 'startup-strategy',
      title: 'Startup Strategy & Scale',
      description: 'Scale from €0 to €1M+ ARR in 12-18 months. I\'ve done it 3 times across different sectors - nonprofit, fintech, and consulting. Get the proven playbook.',
      icon: <TrendingUp className="w-6 h-6" />,
      color: 'hover:border-t-blue-500'
    },
    {
      id: 'stakeholder-alignment',
      title: 'Stakeholder Alignment',
      description: 'Align government, corporate, and startup stakeholders to triple your KPIs. I\'ve coordinated across 122 communities and 3 government departments.',
      icon: <UserCheck className="w-6 h-6" />,
      color: 'hover:border-t-purple-500',
      isHighlighted: true
    },
    {
      id: 'innovation-programs',
      title: 'Innovation Programs',
      description: 'Launch tech incubators and innovation hubs that become regional leaders. Built Ireland\'s first regional bank tech incubator across 8 counties.',
      icon: <Lightbulb className="w-6 h-6" />,
      color: 'hover:border-t-orange-500'
    },
    {
      id: 'fundraising-partnerships',
      title: 'Fundraising & Partnerships',
      description: 'Secure €1M+ in funding across government, philanthropic, and VC sources. Track record includes partnerships with SOLAS, IDA, Enterprise Ireland.',
      icon: <DollarSign className="w-6 h-6" />,
      color: 'hover:border-t-green-500'
    },
    {
      id: 'board-advisory',
      title: 'Board Advisory & Governance',
      description: 'Build boards from scratch or optimize existing governance. Currently chairing 2 boards, built 2 from inception to high-performing teams.',
      icon: <Target className="w-6 h-6" />,
      color: 'hover:border-t-indigo-500'
    },
    {
      id: 'team-leadership',
      title: 'Team Building & Leadership',
      description: 'Build teams that rate 4.7/5 for loving their work while tripling performance targets. Hired and led teams of 12+ across multiple countries.',
      icon: <Users className="w-6 h-6" />,
      color: 'hover:border-t-cyan-500'
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
              className={`relative bg-white rounded-lg p-6 border border-t-4 border-t-transparent transition-all duration-300 cursor-pointer hover:shadow-lg ${service.color} border-gray-200`}
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

export default Projects;