import React, { useState, useRef } from 'react';

interface Feature {
  title: string;
  description: string;
  icon: string;
}

const BannerGenerator: React.FC = () => {
  const [companyName, setCompanyName] = useState('SPREMT LABS');
  const [eventType, setEventType] = useState('HANDS-ON WORKSHOP');
  const [mainTitle, setMainTitle] = useState('Turn Your Idea Into Reality');
  const [subtitle, setSubtitle] = useState('Build a working prototype in under 1 hour — no coding experience needed');
  const [features, setFeatures] = useState<Feature[]>([
    { title: 'AI-Powered Tools', description: 'Use Cursor, Bolt, Lovable & Claude to build fast.', icon: '⚡' },
    { title: 'Leave With Results', description: 'Walk away with a live, working prototype.', icon: '🚀' },
    { title: 'For Everyone', description: 'Founders, professionals & creative thinkers.', icon: '💡' }
  ]);
  const [primaryColor, setPrimaryColor] = useState('#667eea');
  const [secondaryColor, setSecondaryColor] = useState('#764ba2');
  const [bannerSize, setBannerSize] = useState<'eventbrite' | 'social'>('eventbrite');
  const [uploadedLogo, setUploadedLogo] = useState<string | null>(null);
  const [logoFile, setLogoFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleLogoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedLogo(e.target?.result as string);
        setLogoFile(file);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeLogo = () => {
    setUploadedLogo(null);
    setLogoFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const addFeature = () => {
    setFeatures([...features, { title: '', description: '', icon: '✨' }]);
  };

  const removeFeature = (index: number) => {
    setFeatures(features.filter((_, i) => i !== index));
  };

  const updateFeature = (index: number, field: keyof Feature, value: string) => {
    const newFeatures = features.map((feature, i) => 
      i === index ? { ...feature, [field]: value } : feature
    );
    setFeatures(newFeatures);
  };

  const applyTemplate = (template: string) => {
    switch (template) {
      case 'workshop':
        setEventType('HANDS-ON WORKSHOP');
        setMainTitle('Turn Your Idea Into Reality');
        setSubtitle('Build a working prototype in under 1 hour — no coding experience needed');
        setFeatures([
          { title: 'AI-Powered Tools', description: 'Use Cursor, Bolt, Lovable & Claude to build fast.', icon: '⚡' },
          { title: 'Leave With Results', description: 'Walk away with a live, working prototype.', icon: '🚀' },
          { title: 'For Everyone', description: 'Founders, professionals & creative thinkers.', icon: '💡' }
        ]);
        setPrimaryColor('#667eea');
        setSecondaryColor('#764ba2');
        break;
      case 'conference':
        setEventType('CONFERENCE');
        setMainTitle('The Future of AI');
        setSubtitle('Join industry leaders exploring the latest in artificial intelligence');
        setFeatures([
          { title: 'Expert Speakers', description: 'Learn from top AI researchers and practitioners.', icon: '🎤' },
          { title: 'Networking', description: 'Connect with like-minded professionals.', icon: '🤝' },
          { title: 'Latest Trends', description: 'Discover cutting-edge AI technologies.', icon: '🚀' }
        ]);
        setPrimaryColor('#ff6b6b');
        setSecondaryColor('#4ecdc4');
        break;
      case 'product':
        setEventType('PRODUCT LAUNCH');
        setMainTitle('Introducing Our Latest Innovation');
        setSubtitle('Revolutionary technology that changes everything');
        setFeatures([
          { title: 'Breakthrough Features', description: 'See what makes this product special.', icon: '✨' },
          { title: 'Live Demo', description: 'Experience the product in action.', icon: '🎮' },
          { title: 'Early Access', description: 'Be among the first to try it.', icon: '🔑' }
        ]);
        setPrimaryColor('#a8edea');
        setSecondaryColor('#fed6e3');
        break;
    }
  };

  const updateColors = (colorType: 'primary' | 'secondary', color: string) => {
    if (colorType === 'primary') {
      setPrimaryColor(color);
    } else {
      setSecondaryColor(color);
    }
  };

  const handleSizeChange = (size: 'eventbrite' | 'social') => {
    setBannerSize(size);
  };

  const downloadBanner = () => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    if (!ctx) return;

    // Set canvas size based on banner type
    if (bannerSize === 'eventbrite') {
      canvas.width = 1920;
      canvas.height = 1080;
    } else {
      canvas.width = 1200;
      canvas.height = 630;
    }

    // Create gradient background
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, primaryColor);
    gradient.addColorStop(1, secondaryColor);
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Add logo if uploaded
    if (uploadedLogo) {
      const logoImg = new Image();
      logoImg.onload = () => {
        const logoSize = Math.min(canvas.width * 0.15, canvas.height * 0.15);
        const logoX = canvas.width * 0.05;
        const logoY = canvas.height * 0.05;
        ctx.drawImage(logoImg, logoX, logoY, logoSize, logoSize);
        drawTextElements(ctx, canvas.width, canvas.height);
      };
      logoImg.src = uploadedLogo;
    } else {
      drawTextElements(ctx, canvas.width, canvas.height);
    }

    function drawTextElements(ctx: CanvasRenderingContext2D, width: number, height: number) {
      // Event type badge
      ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
      ctx.fillRect(width * 0.05, height * 0.15, width * 0.25, height * 0.08);
      
      ctx.fillStyle = 'white';
      ctx.font = `bold ${height * 0.025}px Arial`;
      ctx.textAlign = 'center';
      ctx.fillText(eventType, width * 0.175, height * 0.195);

      // Main title
      ctx.font = `bold ${height * 0.08}px Arial`;
      ctx.fillText(mainTitle, width * 0.5, height * 0.4);

      // Subtitle
      ctx.font = `${height * 0.03}px Arial`;
      ctx.fillText(subtitle, width * 0.5, height * 0.5);

      // Features
      const featureWidth = width * 0.25;
      const featureHeight = height * 0.15;
      const startX = width * 0.05;
      const startY = height * 0.7;

      features.forEach((feature, index) => {
        const x = startX + (index * (featureWidth + width * 0.05));
        
        // Feature card background
        ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
        ctx.fillRect(x, startY, featureWidth, featureHeight);
        
        // Feature icon
        ctx.font = `${height * 0.04}px Arial`;
        ctx.fillText(feature.icon, x + featureWidth * 0.5, startY + height * 0.03);
        
        // Feature title
        ctx.font = `bold ${height * 0.025}px Arial`;
        ctx.fillText(feature.title, x + featureWidth * 0.5, startY + height * 0.06);
        
        // Feature description
        ctx.font = `${height * 0.02}px Arial`;
        ctx.fillText(feature.description, x + featureWidth * 0.5, startY + height * 0.09);
      });

      // Download the image
      const link = document.createElement('a');
      link.download = `banner-${Date.now()}.png`;
      link.href = canvas.toDataURL();
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-light text-gray-800 mb-4">
              Visual Banner Designer
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Design professional banners like Claude does - with code and templates, but add your own images and customize everything.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Controls Panel */}
            <div className="lg:col-span-1 space-y-6">
              
              {/* Logo Upload */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Company Logo</h3>
                
                {!uploadedLogo ? (
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors">
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      onChange={handleLogoUpload}
                      className="hidden"
                    />
                    <button
                      onClick={() => fileInputRef.current?.click()}
                      className="text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Upload Logo
                    </button>
                    <p className="text-gray-500 text-sm mt-2">
                      PNG, JPG up to 5MB
                    </p>
                  </div>
                ) : (
                  <div className="relative">
                    <img
                      src={uploadedLogo}
                      alt="Logo"
                      className="w-full h-32 object-contain rounded-lg"
                    />
                    <button
                      onClick={removeLogo}
                      className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-red-600 transition-colors"
                    >
                      ×
                    </button>
                  </div>
                )}
              </div>

              {/* Quick Templates */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Templates</h3>
                <div className="space-y-2">
                  <button
                    onClick={() => applyTemplate('workshop')}
                    className="w-full text-left p-3 rounded-lg border border-gray-200 hover:border-blue-400 hover:bg-blue-50 transition-colors"
                  >
                    <div className="font-medium">Workshop</div>
                    <div className="text-sm text-gray-600">AI tools, prototyping</div>
                  </button>
                  <button
                    onClick={() => applyTemplate('conference')}
                    className="w-full text-left p-3 rounded-lg border border-gray-200 hover:border-blue-400 hover:bg-blue-50 transition-colors"
                  >
                    <div className="font-medium">Conference</div>
                    <div className="text-sm text-gray-600">Speaking, networking</div>
                  </button>
                  <button
                    onClick={() => applyTemplate('product')}
                    className="w-full text-left p-3 rounded-lg border border-gray-200 hover:border-blue-400 hover:bg-blue-50 transition-colors"
                  >
                    <div className="font-medium">Product Launch</div>
                    <div className="text-sm text-gray-600">New features, demos</div>
                  </button>
                </div>
              </div>

              {/* Basic Info */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Basic Info</h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                    <input
                      type="text"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Event Type</label>
                    <input
                      type="text"
                      value={eventType}
                      onChange={(e) => setEventType(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Main Title</label>
                    <input
                      type="text"
                      value={mainTitle}
                      onChange={(e) => setMainTitle(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Subtitle</label>
                    <textarea
                      value={subtitle}
                      onChange={(e) => setSubtitle(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      rows={3}
                    />
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-800">Features</h3>
                  <button
                    onClick={addFeature}
                    className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                  >
                    + Add Feature
                  </button>
                </div>
                
                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-medium text-gray-700">Feature {index + 1}</span>
                        <button
                          onClick={() => removeFeature(index)}
                          className="text-red-500 hover:text-red-700 text-sm"
                        >
                          Remove
                        </button>
                      </div>
                      
                      <div className="space-y-3">
                        <input
                          type="text"
                          value={feature.icon}
                          onChange={(e) => updateFeature(index, 'icon', e.target.value)}
                          placeholder="Icon (emoji)"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-center"
                        />
                        <input
                          type="text"
                          value={feature.title}
                          onChange={(e) => updateFeature(index, 'title', e.target.value)}
                          placeholder="Feature title"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                        <textarea
                          value={feature.description}
                          onChange={(e) => updateFeature(index, 'description', e.target.value)}
                          placeholder="Feature description"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                          rows={2}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Colors */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Colors</h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Primary Color</label>
                    <div className="flex items-center gap-3">
                      <input
                        type="color"
                        value={primaryColor}
                        onChange={(e) => updateColors('primary', e.target.value)}
                        className="w-12 h-10 border border-gray-300 rounded cursor-pointer"
                      />
                      <input
                        type="text"
                        value={primaryColor}
                        onChange={(e) => updateColors('primary', e.target.value)}
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-mono text-sm"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Secondary Color</label>
                    <div className="flex items-center gap-3">
                      <input
                        type="color"
                        value={secondaryColor}
                        onChange={(e) => updateColors('secondary', e.target.value)}
                        className="w-12 h-10 border border-gray-300 rounded cursor-pointer"
                      />
                      <input
                        type="text"
                        value={secondaryColor}
                        onChange={(e) => updateColors('secondary', e.target.value)}
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-mono text-sm"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Size */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Banner Size</h3>
                
                <div className="space-y-2">
                  <label className="flex items-center p-3 rounded-lg border border-gray-200 hover:border-blue-400 hover:bg-blue-50 transition-colors cursor-pointer">
                    <input
                      type="radio"
                      name="size"
                      value="eventbrite"
                      checked={bannerSize === 'eventbrite'}
                      onChange={(e) => handleSizeChange(e.target.value as 'eventbrite')}
                      className="mr-3"
                    />
                    <div>
                      <div className="font-medium">Eventbrite (1920×1080)</div>
                      <div className="text-sm text-gray-600">Standard event banner</div>
                    </div>
                  </label>
                  
                  <label className="flex items-center p-3 rounded-lg border border-gray-200 hover:border-blue-400 hover:bg-blue-50 transition-colors cursor-pointer">
                    <input
                      type="radio"
                      name="size"
                      value="social"
                      checked={bannerSize === 'social'}
                      onChange={(e) => handleSizeChange(e.target.value as 'social')}
                      className="mr-3"
                    />
                    <div>
                      <div className="font-medium">Social Media (1200×630)</div>
                      <div className="text-sm text-gray-600">Facebook, LinkedIn</div>
                    </div>
                  </label>
                </div>
              </div>

              {/* Download */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <button
                  onClick={downloadBanner}
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Download Banner
                </button>
                <p className="text-gray-600 text-sm mt-2 text-center">
                  High-quality PNG image
                </p>
              </div>
            </div>

            {/* Preview Panel */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sticky top-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Live Preview</h3>
                
                <div className="relative overflow-hidden rounded-xl border border-gray-200" style={{ aspectRatio: bannerSize === 'eventbrite' ? '16/9' : '1.91/1' }}>
                  <div 
                    className="w-full h-full relative"
                    style={{
                      background: `linear-gradient(135deg, ${primaryColor} 0%, ${secondaryColor} 100%)`,
                      minHeight: bannerSize === 'eventbrite' ? '400px' : '300px'
                    }}
                  >
                    {/* Logo */}
                    {uploadedLogo && (
                      <div className="absolute top-4 left-4">
                        <img
                          src={uploadedLogo}
                          alt="Logo"
                          className="h-12 w-auto object-contain"
                        />
                      </div>
                    )}

                    {/* Event Type Badge */}
                    <div className="absolute top-16 left-4 bg-white bg-opacity-20 backdrop-blur-sm px-4 py-2 rounded-full">
                      <span className="text-white text-sm font-semibold">{eventType}</span>
                    </div>

                    {/* Main Title */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-8">
                      <h1 className="text-white text-2xl md:text-4xl font-bold mb-4 leading-tight">
                        {mainTitle}
                      </h1>
                      <p className="text-white text-lg opacity-90 leading-relaxed">
                        {subtitle}
                      </p>
                    </div>

                    {/* Features */}
                    <div className="absolute bottom-4 left-4 right-4 flex gap-4">
                      {features.map((feature, index) => (
                        <div key={index} className="flex-1 bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4">
                          <div className="text-white text-center">
                            <div className="text-2xl mb-2">{feature.icon}</div>
                            <div className="font-semibold text-sm mb-1">{feature.title}</div>
                            <div className="text-xs opacity-80">{feature.description}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerGenerator;