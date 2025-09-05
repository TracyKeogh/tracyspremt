import React, { useState } from 'react';
import { Mail, Calendar, Linkedin, Twitter, CheckCircle, ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    challenge: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    const subject = `Strategic Consultation Request - ${formData.name}`;
    const body = `Name: ${formData.name}%0D%0ACompany: ${formData.company}%0D%0AEmail: ${formData.email}%0D%0AMain Challenge: ${formData.challenge}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
    window.location.href = `mailto:hello@spremtlabs.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light mb-6">
              Ready to Scale with Clarity?
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              If you're ready to move from operational chaos to strategic leadership, 
              let's start the conversation. I work with a limited number of clients to 
              ensure exceptional results.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 text-gray-900">
              <h3 className="text-2xl font-semibold mb-6">
                Tell Me About Your Scaling Challenge
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company *
                    </label>
                    <input
                      type="text"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    What's your biggest scaling challenge? *
                  </label>
                  <select
                    name="challenge"
                    required
                    value={formData.challenge}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select your main challenge</option>
                    <option value="growth-plateau">Growth has plateaued</option>
                    <option value="stakeholder-alignment">Stakeholder misalignment</option>
                    <option value="operational-overwhelm">Drowning in operations</option>
                    <option value="scaling-systems">Need scalable systems</option>
                    <option value="team-leadership">Team leadership challenges</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tell me more about your situation
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="What's your current revenue? What's your growth goal? What have you tried that hasn't worked?"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-4 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center group"
                >
                  Start the Conversation
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>

            {/* Contact Info & What to Expect */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6">
                  What to Expect
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-medium mb-1">Initial Response Within 24 Hours</div>
                      <div className="text-gray-300 text-sm">I personally review every inquiry and respond quickly to qualified prospects.</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-medium mb-1">30-Minute Strategy Call</div>
                      <div className="text-gray-300 text-sm">We'll discuss your challenges and I'll share initial insights—no sales pitch, just value.</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-medium mb-1">Custom Approach</div>
                      <div className="text-gray-300 text-sm">If we're a fit, I'll design a specific plan for your situation and goals.</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800 rounded-xl p-6">
                <h4 className="font-semibold mb-4">Direct Contact</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-blue-400" />
                    <a href="mailto:hello@spremtlabs.com" className="text-blue-400 hover:text-blue-300">
                      hello@spremtlabs.com
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Linkedin className="w-5 h-5 text-blue-400" />
                    <a href="https://www.linkedin.com/in/tracykeogh" className="text-blue-400 hover:text-blue-300">
                      LinkedIn
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Twitter className="w-5 h-5 text-blue-400" />
                    <a href="https://x.com/tracy_keogh" className="text-blue-400 hover:text-blue-300">
                      Twitter
                    </a>
                  </div>
                </div>
              </div>

              <div className="text-sm text-gray-400">
                <p>
                  I work with a limited number of clients to ensure exceptional results. 
                  Current availability: 2 new strategic engagements in Q1 2025.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;