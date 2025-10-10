import React, { useState, useRef } from 'react';

const BannerGenerator: React.FC = () => {
  const [description, setDescription] = useState('');
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [apiKey, setApiKey] = useState('');
  const [showApiKeyInput, setShowApiKeyInput] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Check file size (max 10MB)
      if (file.size > 10 * 1024 * 1024) {
        setError('Image file is too large. Please choose an image under 10MB.');
        return;
      }
      
      setImageFile(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string);
        setError(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setUploadedImage(null);
    setImageFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const generateWithOpenAI = async () => {
    if (!description.trim()) {
      setError('Please enter a description for your image.');
      return;
    }

    if (!apiKey.trim()) {
      setError('Please provide your OpenAI API key. Click "Settings" to add it.');
      setShowApiKeyInput(true);
      return;
    }

    setIsGenerating(true);
    setError(null);

    try {
      let finalPrompt = description;
      
      // If user uploaded an image, we'll need to composite it
      // For now, we'll enhance the prompt to include the logo
      if (uploadedImage) {
        finalPrompt = `${description}. The image should include space for a company logo in the top left corner. Professional, modern design.`;
      }

      // Call OpenAI DALL-E API
      const response = await fetch('https://api.openai.com/v1/images/generations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model: 'dall-e-3',
          prompt: finalPrompt,
          n: 1,
          size: '1792x1024', // Closest to 1920x1080
          quality: 'hd'
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error?.message || 'Failed to generate image');
      }

      const data = await response.json();
      const generatedUrl = data.data[0].url;

      // If user uploaded a logo, composite it with the generated image
      if (uploadedImage) {
        await compositeLogoOnImage(generatedUrl);
      } else {
        setGeneratedImage(generatedUrl);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to generate image. Please check your API key and try again.');
      console.error('Generation error:', err);
    } finally {
      setIsGenerating(false);
    }
  };

  const compositeLogoOnImage = async (generatedImageUrl: string) => {
    try {
      // Create a canvas to composite the images
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      
      if (!ctx) {
        throw new Error('Failed to get canvas context');
      }

      // Load the generated image
      const bgImage = new Image();
      bgImage.crossOrigin = 'anonymous';
      
      await new Promise((resolve, reject) => {
        bgImage.onload = resolve;
        bgImage.onerror = reject;
        bgImage.src = generatedImageUrl;
      });

      // Set canvas size
      canvas.width = bgImage.width;
      canvas.height = bgImage.height;

      // Draw the generated image
      ctx.drawImage(bgImage, 0, 0);

      // Load and draw the logo
      if (uploadedImage) {
        const logoImage = new Image();
        
        await new Promise((resolve, reject) => {
          logoImage.onload = resolve;
          logoImage.onerror = reject;
          logoImage.src = uploadedImage;
        });

        // Position logo in top-left corner (adjust as needed)
        const logoSize = Math.min(canvas.width * 0.15, canvas.height * 0.15);
        const padding = canvas.width * 0.03;
        
        ctx.drawImage(logoImage, padding, padding, logoSize, logoSize);
      }

      // Convert to data URL
      const compositeImage = canvas.toDataURL('image/png');
      setGeneratedImage(compositeImage);
    } catch (err) {
      console.error('Error compositing image:', err);
      // If compositing fails, just show the generated image without logo
      setGeneratedImage(generatedImageUrl);
    }
  };

  const downloadImage = () => {
    if (!generatedImage) return;

    const link = document.createElement('a');
    link.download = `ai-generated-banner-${Date.now()}.png`;
    link.href = generatedImage;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleExample = (exampleText: string) => {
    setDescription(exampleText);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-light text-gray-800 mb-4">
              AI Image Maker
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Describe what you want, upload your logo, and let AI create a professional image for you.
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Powered by OpenAI DALL-E 3
            </p>
          </div>

          {/* API Key Settings */}
          {showApiKeyInput && (
            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-6">
              <div className="flex items-start gap-3">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">OpenAI API Key Required</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    To use AI image generation, you need an OpenAI API key. Get one at{' '}
                    <a href="https://platform.openai.com/api-keys" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      platform.openai.com/api-keys
                    </a>
                  </p>
                  <input
                    type="password"
                    value={apiKey}
                    onChange={(e) => setApiKey(e.target.value)}
                    placeholder="sk-..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-mono text-sm"
                  />
                  <p className="text-xs text-gray-500 mt-2">
                    Your API key is stored locally in your browser and never sent to our servers.
                  </p>
                </div>
                <button
                  onClick={() => setShowApiKeyInput(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              </div>
            </div>
          )}

          <div className="grid lg:grid-cols-2 gap-8">
            
            {/* Input Panel */}
            <div className="space-y-6">
              
              {/* Description Input */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Describe Your Image</h3>
                
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Example: Create an Eventbrite banner for a hands-on AI workshop. Modern, professional design with purple gradient background. Include space for company logo. Text should say 'Turn Your Idea Into Reality' as the main title and 'Build a working prototype in under 1 hour' as subtitle..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  rows={8}
                />
                
                <div className="mt-4">
                  <p className="text-sm font-medium text-gray-700 mb-2">Quick Examples:</p>
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => handleExample('Create an Eventbrite banner for a hands-on AI workshop. Modern, professional design with purple gradient background. Include space for company logo. Main title: "Turn Your Idea Into Reality". Subtitle: "Build a working prototype in under 1 hour - no coding experience needed". Include 3 feature cards at the bottom with icons for AI tools, results, and accessibility.')}
                      className="text-sm px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-700 transition-colors"
                    >
                      Workshop Banner
                    </button>
                    <button
                      onClick={() => handleExample('Create a social media banner for a tech conference. Futuristic design with blue and teal gradient. Space for logo in top left. Main heading: "The Future of AI". Subtitle: "Join industry leaders exploring artificial intelligence". Professional, clean, modern aesthetic.')}
                      className="text-sm px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-700 transition-colors"
                    >
                      Conference Banner
                    </button>
                    <button
                      onClick={() => handleExample('Create a product launch banner. Vibrant, eye-catching design. Space for company logo. Bold text: "Introducing Our Latest Innovation". Sleek, modern, premium feel. 1920x1080 dimensions.')}
                      className="text-sm px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-700 transition-colors"
                    >
                      Product Launch
                    </button>
                  </div>
                </div>
              </div>

              {/* Logo Upload */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Upload Your Logo <span className="text-sm font-normal text-gray-500">(Optional)</span>
                </h3>
                
                {!uploadedImage ? (
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-400 transition-colors cursor-pointer">
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                    <button
                      onClick={() => fileInputRef.current?.click()}
                      className="text-blue-600 hover:text-blue-700 font-medium"
                    >
                      📁 Choose File
                    </button>
                    <p className="text-gray-500 text-sm mt-2">
                      PNG, JPG up to 10MB
                    </p>
                    <p className="text-gray-400 text-xs mt-1">
                      Your logo will be integrated into the generated image
                    </p>
                  </div>
                ) : (
                  <div className="relative border border-gray-200 rounded-lg p-4">
                    <img
                      src={uploadedImage}
                      alt="Uploaded"
                      className="w-full h-32 object-contain rounded"
                    />
                    <button
                      onClick={removeImage}
                      className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-red-600 transition-colors shadow-lg"
                    >
                      ✕
                    </button>
                  </div>
                )}
              </div>

              {/* Settings */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">API Settings</h3>
                    <p className="text-sm text-gray-500">
                      {apiKey ? '✓ API key configured' : 'No API key set'}
                    </p>
                  </div>
                  <button
                    onClick={() => setShowApiKeyInput(!showApiKeyInput)}
                    className="text-blue-600 hover:text-blue-700 font-medium"
                  >
                    ⚙️ Settings
                  </button>
                </div>
              </div>

              {/* Generate Button */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <button
                  onClick={generateWithOpenAI}
                  disabled={isGenerating || !description.trim()}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                >
                  {isGenerating ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Generating with AI...
                    </span>
                  ) : (
                    '✨ Generate Image with AI'
                  )}
                </button>
                
                {error && (
                  <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-sm text-red-600">{error}</p>
                  </div>
                )}
              </div>
            </div>

            {/* Preview/Result Panel */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sticky top-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Generated Image</h3>
                
                {!generatedImage ? (
                  <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                    <div className="text-center text-gray-400">
                      <svg className="w-16 h-16 mx-auto mb-3 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <p className="text-sm">Your generated image will appear here</p>
                    </div>
                  </div>
                ) : (
                  <div>
                    <img
                      src={generatedImage}
                      alt="Generated"
                      className="w-full rounded-lg shadow-lg"
                    />
                    <button
                      onClick={downloadImage}
                      className="w-full mt-4 bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                    >
                      ⬇️ Download Image
                    </button>
                  </div>
                )}
              </div>

              {/* Tips */}
              <div className="bg-blue-50 rounded-2xl p-6">
                <h4 className="font-semibold text-gray-800 mb-3">💡 Tips for Best Results</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex gap-2">
                    <span>•</span>
                    <span>Be specific about colors, style, and layout</span>
                  </li>
                  <li className="flex gap-2">
                    <span>•</span>
                    <span>Mention exact text you want to appear</span>
                  </li>
                  <li className="flex gap-2">
                    <span>•</span>
                    <span>Include "space for logo" in your description</span>
                  </li>
                  <li className="flex gap-2">
                    <span>•</span>
                    <span>Specify dimensions (e.g., "1920x1080")</span>
                  </li>
                  <li className="flex gap-2">
                    <span>•</span>
                    <span>Describe the mood/feel (professional, fun, modern)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerGenerator;