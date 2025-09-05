import React from 'react';
import { Award, Users, TrendingUp, Globe } from 'lucide-react';

const About: React.FC = () => {
  const credentials = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "3 Board Seats",
      description: "Currently chairing 2 boards, built 2 from scratch"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Cross-Sector Experience",
      description: "Nonprofit, fintech, banking, government partnerships"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Proven Results",
      description: "€1M+ ARR achieved across multiple organizations"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "International Impact",
      description: "Operations across Ireland, Spain, and Europe"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
                Strategic Leadership Born from Real Experience
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  I'm Tracy Keogh, and I've spent 10+ years solving the exact challenges you're facing. 
                  Not from a textbook—from the trenches of building, scaling, and leading organizations 
                  from concept to €1M+ ARR.
                </p>
                <p>
                  My approach comes from being the founder who had to figure out stakeholder alignment 
                  when government agencies, corporate partners, and startup teams all had different priorities. 
                  The CEO who had to build systems that could scale without breaking. The board chair who 
                  had to guide organizations through complex strategic decisions.
                </p>
                <p>
                  <strong>What makes me different?</strong> I've been where you are. I know what it feels 
                  like when growth stalls, when stakeholders aren't aligned, when you're drowning in operations 
                  instead of leading strategically. More importantly, I know how to solve it.
                </p>
              </div>
            </div>

            <div>
              <div className="grid grid-cols-2 gap-6">
                {credentials.map((credential, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 rounded-xl p-6 text-center"
                  >
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mx-auto mb-4">
                      {credential.icon}
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {credential.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {credential.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Philosophy */}
          <div className="mt-16 bg-blue-50 rounded-2xl p-8 lg:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                My Philosophy
              </h3>
              <blockquote className="text-xl text-gray-700 leading-relaxed italic">
                "Execution without clarity is just expensive chaos. My job is to bring clarity to your 
                vision, alignment to your stakeholders, and systems to your growth—so you can focus on 
                what only you can do as a leader."
              </blockquote>
              <div className="mt-6 text-gray-600">
                — Tracy Keogh
              </div>
            </div>
          </div>

          {/* Media Mentions */}
          <div className="mt-16 text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-8">
              Featured In
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <span className="text-lg font-medium text-gray-600">Forbes</span>
              <span className="text-lg font-medium text-gray-600">RTE</span>
              <span className="text-lg font-medium text-gray-600">Harvard Business Review</span>
              <span className="text-lg font-medium text-gray-600">Ireland AM</span>
              <span className="text-lg font-medium text-gray-600">EuroNews</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;