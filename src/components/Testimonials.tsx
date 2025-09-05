import React from 'react';
import { Quote, Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "This is the best course we've ever run. Tracy's remote work training programme has been exceptional.",
      author: "SOLAS",
      role: "Ireland's Further Education & Training Authority",
      rating: 5
    },
    {
      quote: "Tracy built our team culture where we rate loving coming to work 4.7/5 every day while tripling our performance targets.",
      author: "Grow Remote Team",
      role: "12-person International Team",
      rating: 5
    },
    {
      quote: "Tracy delivered Ireland's first regional tech incubator for Bank of Ireland, creating a thriving innovation hub across 8 counties.",
      author: "Bank of Ireland",
      role: "Innovation Division",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-4">
              Client Results
            </h2>
            <p className="text-xl text-gray-600">What organizations say about working with me</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative"
              >
                <Quote className="w-8 h-8 text-blue-400 mb-4 opacity-60" />
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <p className="text-gray-600 mb-6 italic leading-relaxed">
                  "{testimonial.quote}"
                </p>

                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-800">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">By The Numbers</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">€1M+</div>
                  <div className="text-sm text-gray-600">ARR Achieved</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">6,878</div>
                  <div className="text-sm text-gray-600">Jobs Unlocked</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">122</div>
                  <div className="text-sm text-gray-600">Communities</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">4.7/5</div>
                  <div className="text-sm text-gray-600">Team Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;