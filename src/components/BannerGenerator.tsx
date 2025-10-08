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
    const newFeatures = [...features];
    newFeatures[index] = { ...newFeatures[index], [field]: value };
    setFeatures(newFeatures);
  };

  const downloadBanner = async (format: 'png' | 'jpg' | 'svg' | '4k') => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    if (!ctx) return;

    const dimensions = bannerSize === 'eventbrite' 
      ? { width: 1920, height: 1080 }
      : { width: 1200, height: 630 };
    
    canvas.width = dimensions.width;
    canvas.height = dimensions.height;
    const scale = canvas.width / 800;

    // Draw background
    const bgGradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    bgGradient.addColorStop(0, '#000000');
    bgGradient.addColorStop(0.5, '#1a1a1a');
    bgGradient.addColorStop(1, '#000000');
    ctx.fillStyle = bgGradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw logo
    if (uploadedLogo) {
      const logoImg = new Image();
      logoImg.onload = () => {
        ctx.drawImage(logoImg, 80 * scale, 60 * scale, 400 * scale, 120 * scale);
        drawRemainingElements();
      };
      logoImg.src = uploadedLogo;
    } else {
      ctx.fillStyle = '#ffffff';
      ctx.font = `${Math.round(56 * scale)}px Space Grotesk, sans-serif`;
      ctx.fillText(companyName, 80 * scale, 120 * scale);
      drawRemainingElements();
    }

    const drawRemainingElements = () => {
      // Draw badge
      const badgeGradient = ctx.createLinearGradient(80 * scale, 160 * scale, 500 * scale, 160 * scale);
      badgeGradient.addColorStop(0, primaryColor);
      badgeGradient.addColorStop(1, secondaryColor);
      ctx.fillStyle = badgeGradient;
      
      const badgeX = 80 * scale;
      const badgeY = 160 * scale;
      const badgeW = 420 * scale;
      const badgeH = 50 * scale;
      const radius = 25 * scale;
      
      ctx.beginPath();
      ctx.moveTo(badgeX + radius, badgeY);
      ctx.lineTo(badgeX + badgeW - radius, badgeY);
      ctx.quadraticCurveTo(badgeX + badgeW, badgeY, badgeX + badgeW, badgeY + radius);
      ctx.lineTo(badgeX + badgeW, badgeY + badgeH - radius);
      ctx.quadraticCurveTo(badgeX + badgeW, badgeY + badgeH, badgeX + badgeW - radius, badgeY + badgeH);
      ctx.lineTo(badgeX + radius, badgeY + badgeH);
      ctx.quadraticCurveTo(badgeX, badgeY + badgeH, badgeX, badgeY + badgeH - radius);
      ctx.lineTo(badgeX, badgeY + radius);
      ctx.quadraticCurveTo(badgeX, badgeY, badgeX + radius, badgeY);
      ctx.closePath();
      ctx.fill();
      
      ctx.fillStyle = '#ffffff';
      ctx.font = `700 ${Math.round(20 * scale)}px Space Grotesk, sans-serif`;
      ctx.fillText(eventType, 100 * scale, 185 * scale);
      
      // Draw title
      ctx.fillStyle = '#ffffff';
      ctx.font = `900 ${Math.round(96 * scale)}px Space Grotesk, sans-serif`;
      ctx.fillText(mainTitle, 80 * scale, 350 * scale);
      
      // Draw subtitle
      ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
      ctx.font = `400 ${Math.round(36 * scale)}px Inter, sans-serif`;
      ctx.fillText(subtitle, 80 * scale, 420 * scale);
      
      // Draw features
      const featureY = 500 * scale;
      const featureHeight = 200 * scale;
      const featureWidth = (canvas.width - 240 * scale) / Math.min(features.length, 3);
      
      features.slice(0, 3).forEach((feature, i) => {
        if (!feature.title.trim()) return;
        
        const featureX = 80 * scale + (i * (featureWidth + 20 * scale));
        
        // Draw feature card
        ctx.fillStyle = 'rgba(255, 255, 255, 0.08)';
        ctx.beginPath();
        ctx.moveTo(featureX + 20 * scale, featureY);
        ctx.lineTo(featureX + featureWidth - 20 * scale, featureY);
        ctx.quadraticCurveTo(featureX + featureWidth, featureY, featureX + featureWidth, featureY + 20 * scale);
        ctx.lineTo(featureX + featureWidth, featureY + featureHeight - 20 * scale);
        ctx.quadraticCurveTo(featureX + featureWidth, featureY + featureHeight, featureX + featureWidth - 20 * scale, featureY + featureHeight);
        ctx.lineTo(featureX + 20 * scale, featureY + featureHeight);
        ctx.quadraticCurveTo(featureX, featureY + featureHeight, featureX, featureY + featureHeight - 20 * scale);
        ctx.lineTo(featureX, featureY + 20 * scale);
        ctx.quadraticCurveTo(featureX, featureY, featureX + 20 * scale, featureY);
        ctx.closePath();
        ctx.fill();
        
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
        ctx.lineWidth = 2 * scale;
        ctx.stroke();
        
        // Draw feature content
        ctx.fillStyle = '#FFD700';
        ctx.font = `700 ${Math.round(48 * scale)}px Space Grotesk, sans-serif`;
        ctx.fillText(feature.icon, featureX + 30 * scale, featureY + 60 * scale);
        
        ctx.fillStyle = '#ffffff';
        ctx.font = `700 ${Math.round(28 * scale)}px Space Grotesk, sans-serif`;
        ctx.fillText(feature.title, featureX + 30 * scale, featureY + 100 * scale);
        
        ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
        ctx.font = `400 ${Math.round(20 * scale)}px Inter, sans-serif`;
        ctx.fillText(feature.description, featureX + 30 * scale, featureY + 140 * scale);
      });
      
      // Download
      const link = document.createElement('a');
      let filename = 'custom-banner';
      let mimeType = 'image/png';
      
      if (format === 'jpg') {
        mimeType = 'image/jpeg';
        filename += '.jpg';
      } else if (format === 'svg') {
        mimeType = 'image/png'; // SVG would need different approach
        filename += '.png';
      } else if (format === '4k') {
        const scale4k = 2;
        const canvas4k = document.createElement('canvas');
        const ctx4k = canvas4k.getContext('2d');
        canvas4k.width = canvas.width * scale4k;
        canvas4k.height = canvas.height * scale4k;
        ctx4k!.imageSmoothingEnabled = true;
        ctx4k!.imageSmoothingQuality = 'high';
        ctx4k!.drawImage(canvas, 0, 0, canvas4k.width, canvas4k.height);
        filename = 'custom-banner-4k.png';
        link.href = canvas4k.toDataURL(mimeType);
      } else {
        filename += '.png';
        link.href = canvas.toDataURL(mimeType);
      }
      
      if (format !== '4k') {
        link.href = canvas.toDataURL(mimeType);
      }
      
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-purple-800 p-4">
      <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-8 text-center">
          <h1 className="text-4xl font-bold mb-2">🎨 AI Banner Generator</h1>
          <p className="text-lg opacity-90">Create stunning promotional banners with AI-powered customization</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-0">
          {/* Control Panel */}
          <div className="bg-gray-50 p-6 space-y-6">
            {/* Banner Size */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Banner Size</label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setBannerSize('eventbrite')}
                  className={`p-3 rounded-lg border-2 text-center transition-all ${
                    bannerSize === 'eventbrite'
                      ? 'border-purple-500 bg-purple-50 text-purple-700'
                      : 'border-gray-200 bg-white text-gray-600'
                  }`}
                >
                  <div className="font-semibold">Eventbrite</div>
                  <div className="text-xs">1920×1080</div>
                </button>
                <button
                  onClick={() => setBannerSize('social')}
                  className={`p-3 rounded-lg border-2 text-center transition-all ${
                    bannerSize === 'social'
                      ? 'border-purple-500 bg-purple-50 text-purple-700'
                      : 'border-gray-200 bg-white text-gray-600'
                  }`}
                >
                  <div className="font-semibold">Social Media</div>
                  <div className="text-xs">1200×630</div>
                </button>
              </div>
            </div>

            {/* Logo Upload */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Upload Your Logo</label>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleLogoUpload}
                className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none"
              />
              {uploadedLogo && (
                <div className="mt-3 flex items-center gap-3">
                  <img src={uploadedLogo} alt="Uploaded logo" className="h-12 rounded-lg" />
                  <button
                    onClick={removeLogo}
                    className="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600"
                  >
                    Remove
                  </button>
                </div>
              )}
            </div>

            {/* Company Name */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Company/Brand Name {!uploadedLogo && '(Fallback)'}
              </label>
              <input
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                placeholder="e.g., SPREMT LABS"
                className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none"
              />
            </div>

            {/* Event Type */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Event Type</label>
              <input
                type="text"
                value={eventType}
                onChange={(e) => setEventType(e.target.value)}
                placeholder="e.g., HANDS-ON WORKSHOP"
                className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none"
              />
            </div>

            {/* Main Title */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Main Title</label>
              <input
                type="text"
                value={mainTitle}
                onChange={(e) => setMainTitle(e.target.value)}
                placeholder="e.g., Turn Your Idea Into Reality"
                className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none"
              />
            </div>

            {/* Subtitle */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Subtitle</label>
              <textarea
                value={subtitle}
                onChange={(e) => setSubtitle(e.target.value)}
                placeholder="Describe your event or offering..."
                rows={3}
                className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none"
              />
            </div>

            {/* Features */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Features/Benefits (up to 3)</label>
              <div className="space-y-3 border border-gray-200 rounded-lg p-4 bg-white">
                {features.map((feature, index) => (
                  <div key={index} className="grid grid-cols-12 gap-2">
                    <input
                      type="text"
                      value={feature.title}
                      onChange={(e) => updateFeature(index, 'title', e.target.value)}
                      placeholder="Feature title"
                      className="col-span-10 p-2 border border-gray-200 rounded text-sm focus:border-purple-500 focus:outline-none"
                    />
                    <button
                      onClick={() => removeFeature(index)}
                      className="col-span-2 bg-red-500 text-white px-2 py-1 rounded text-sm hover:bg-red-600"
                    >
                      ×
                    </button>
                    <input
                      type="text"
                      value={feature.description}
                      onChange={(e) => updateFeature(index, 'description', e.target.value)}
                      placeholder="Feature description"
                      className="col-span-12 p-2 border border-gray-200 rounded text-sm focus:border-purple-500 focus:outline-none"
                    />
                  </div>
                ))}
                <button
                  onClick={addFeature}
                  className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition-colors"
                >
                  + Add Feature
                </button>
              </div>
            </div>

            {/* Colors */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Color Scheme</label>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs text-gray-600 mb-1">Primary Color</label>
                  <input
                    type="color"
                    value={primaryColor}
                    onChange={(e) => setPrimaryColor(e.target.value)}
                    className="w-full h-10 border border-gray-200 rounded cursor-pointer"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-600 mb-1">Secondary Color</label>
                  <input
                    type="color"
                    value={secondaryColor}
                    onChange={(e) => setSecondaryColor(e.target.value)}
                    className="w-full h-10 border border-gray-200 rounded cursor-pointer"
                  />
                </div>
              </div>
            </div>

            {/* Download Buttons */}
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <h3 className="font-semibold text-gray-700 mb-3">📥 Download Options</h3>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => downloadBanner('png')}
                  className="bg-blue-500 text-white py-2 px-3 rounded-lg text-sm hover:bg-blue-600 transition-colors"
                >
                  📄 PNG
                </button>
                <button
                  onClick={() => downloadBanner('jpg')}
                  className="bg-orange-500 text-white py-2 px-3 rounded-lg text-sm hover:bg-orange-600 transition-colors"
                >
                  🖼️ JPG
                </button>
                <button
                  onClick={() => downloadBanner('svg')}
                  className="bg-purple-500 text-white py-2 px-3 rounded-lg text-sm hover:bg-purple-600 transition-colors"
                >
                  🔷 SVG
                </button>
                <button
                  onClick={() => downloadBanner('4k')}
                  className="bg-red-500 text-white py-2 px-3 rounded-lg text-sm hover:bg-red-600 transition-colors"
                >
                  🔥 4K
                </button>
              </div>
            </div>
          </div>

          {/* Preview Panel */}
          <div className="bg-gray-100 p-6 flex items-center justify-center">
            <div className="transform scale-75 origin-center">
              <div className="w-96 h-54 bg-gradient-to-br from-black via-gray-900 to-black rounded-2xl shadow-2xl overflow-hidden relative">
                {/* Banner Content */}
                <div className="absolute inset-0 p-6 text-white">
                  {/* Logo */}
                  <div className="flex items-center gap-3 mb-4">
                    {uploadedLogo ? (
                      <img src={uploadedLogo} alt="Logo" className="h-8 object-contain" />
                    ) : (
                      <span className="text-xl font-bold">{companyName}</span>
                    )}
                  </div>

                  {/* Badge */}
                  <div
                    className="inline-block px-4 py-2 rounded-full text-xs font-bold mb-4 uppercase tracking-wider"
                    style={{
                      background: `linear-gradient(135deg, ${primaryColor} 0%, ${secondaryColor} 100%)`,
                    }}
                  >
                    {eventType}
                  </div>

                  {/* Title */}
                  <h1 className="text-2xl font-black mb-3 leading-tight">{mainTitle}</h1>

                  {/* Subtitle */}
                  <p className="text-sm opacity-90 mb-6 leading-relaxed">{subtitle}</p>

                  {/* Features */}
                  <div className="flex gap-3">
                    {features.slice(0, 3).map((feature, index) => (
                      <div key={index} className="flex-1 bg-white bg-opacity-10 backdrop-blur-sm border border-white border-opacity-20 rounded-lg p-3 text-center">
                        <div className="text-lg mb-2">{feature.icon}</div>
                        <div className="text-xs font-bold mb-1">{feature.title}</div>
                        <div className="text-xs opacity-80 leading-tight">{feature.description}</div>
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
  );
};

export default BannerGenerator;
