import React from 'react';
import { Quote, ExternalLink } from 'lucide-react';

const Results: React.FC = () => {
  const caseStudies = [
    {
      organization: "Grow Remote",
      sector: "Nonprofit",
      challenge: "Scale from concept to sustainable revenue",
      result: "€1M+ ARR from Year 1",
      details: "Built Europe's largest products and services for the remote work sector",
      metrics: ["6,878 jobs unlocked", "122 communities", "4.7/5 team satisfaction"]
    },
    {
      organization: "Bank of Ireland",
      sector: "Financial Services",
      challenge: "Launch regional innovation program",
      result: "First Regional Tech Incubator",
      details: "Launched a national incubator for Ireland's largest bank",
      metrics: ["Supported 200+ startups", "Ran national pre-accelerators", "Full pipeline management for multiple cohorts"]
    },
    {
      organization: "Multiple Startups",
      sector: "Cross-Sector",
      challenge: "Strategic alignment and funding",
      result: "Outcome driven",
      details: "I have a generalist skillset which has been used to build websites, set up companies, and drive national sales.",
      metrics: ["Launched 3 government strategies", "Forbes, RTE, Harvard Business Review", "Tripled KPIs - 10x market average", "Raised 1.5M+ in corporate sponsorships, philanthropic, government funding and debt funding"]
    }
  ];

  const testimonials = [
    {
      quote: "This is the best course we've ever run. Tracy's strategic approach to stakeholder alignment has been exceptional.",
      author: "SOLAS",
      role: "Ireland's Further Education & Training Authority",
      highlight: true
    },
    {
      quote: "Tracy built our team culture where we rate loving coming to work 4.7/5 while tripling our performance targets.",
      author: "Grow Remote Team",
      role: "12-person International Team",
      highlight: false
    }
  ];

  return (
    <section id="results" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
              Proven Results Across Sectors
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              From startups to government agencies, here's the measurable impact of strategic leadership and stakeholder alignment.
            </p>
          </div>

          {/* Case Studies */}
          <div className="space-y-8 mb-16">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-sm border border-gray-100"
              >
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <div className="text-sm text-blue-600 font-medium mb-2">{study.sector}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{study.organization}</h3>
                    <p className="text-gray-600 text-sm mb-4">{study.challenge}</p>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600 mb-2">{study.result}</div>
                    <p className="text-gray-700 leading-relaxed">{study.details}</p>
                  </div>
                  <div>
                    <div className="space-y-2">
                      {study.metrics.map((metric, i) => (
                        <div key={i} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span className="text-sm text-gray-600">{metric}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Testimonials */}
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`rounded-xl p-8 ${
                  testimonial.highlight 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-white border border-gray-100'
                }`}
              >
                <Quote className={`w-8 h-8 mb-4 ${
                  testimonial.highlight ? 'text-blue-200' : 'text-gray-300'
                }`} />
                <p className={`text-lg leading-relaxed mb-6 ${
                  testimonial.highlight ? 'text-white' : 'text-gray-700'
                }`}>
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className={`font-semibold ${
                      testimonial.highlight ? 'text-white' : 'text-gray-900'
                    }`}>
                      {testimonial.author}
                    </div>
                    <div className={`text-sm ${
                      testimonial.highlight ? 'text-blue-200' : 'text-gray-600'
                    }`}>
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Numbers */}
          <div className="mt-16 bg-white rounded-xl p-8 shadow-sm border border-gray-100">
            <h3 className="text-2xl font-semibold text-gray-900 text-center mb-8">By the Numbers</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">10+</div>
                <div className="text-sm text-gray-600">Years Strategic Leadership</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">€1M+</div>
                <div className="text-sm text-gray-600">ARR Achieved</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">3</div>
                <div className="text-sm text-gray-600">Board Seats</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">4</div>
                <div className="text-sm text-gray-600">Sectors</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;