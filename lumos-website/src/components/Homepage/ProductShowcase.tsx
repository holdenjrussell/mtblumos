import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ProductShowcase: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState(0);

  const productImages = [
    '[Placeholder: 360° rotating product view - main hero shot of Lumos IPL device in lavender color]',
    '[Placeholder: Close-up of cooling technology - detailed shot of COOLMAX vents with blue highlights]',
    '[Placeholder: In-hand scale reference - woman holding device showing ergonomic design]',
    '[Placeholder: Unboxing shot - all components laid out including device, glasses, charger, guide]'
  ];

  const includedItems = [
    { name: 'Lumos IPL Device', icon: '✨' },
    { name: 'Safety Glasses', icon: '🥽' },
    { name: 'Power Adapter', icon: '🔌' },
    { name: 'Premium Razor', icon: '🪒' },
    { name: 'Storage Pouch', icon: '🎒' },
    { name: 'Quick Start Guide', icon: '📚' }
  ];

  const features = [
    {
      icon: '❄️',
      title: 'COOLMAX 50°F Cooling',
      description: 'Ice-cold comfort during treatment'
    },
    {
      icon: '⚡',
      title: '999,999 Lifetime Flashes',
      description: 'Never needs replacement'
    },
    {
      icon: '🎯',
      title: '9 Energy Levels',
      description: 'Perfect for all skin types'
    },
    {
      icon: '🛡️',
      title: 'FDA Cleared & Safe',
      description: 'Clinically tested and approved'
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto container-padding">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            <span className="gradient-text">LUMOS IPL</span>
            <br />Permanent Hair Removal System
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Product Images */}
          <div className="space-y-6">
            {/* Main Product Display */}
            <div className="aspect-square bg-gradient-to-br from-lavender-100 to-coral-100 rounded-3xl p-8 shadow-soft">
              <div className="w-full h-full bg-white/80 backdrop-blur-sm rounded-2xl flex items-center justify-center text-gray-600 text-sm p-4">
                {productImages[selectedImage]}
              </div>
            </div>
            
            {/* Image Thumbnails */}
            <div className="grid grid-cols-4 gap-4">
              {productImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square bg-gray-100 rounded-lg p-2 transition-all duration-200 ${
                    selectedImage === index
                      ? 'ring-2 ring-lavender-500 bg-lavender-50'
                      : 'hover:bg-gray-200'
                  }`}
                >
                  <div className="w-full h-full bg-white rounded flex items-center justify-center text-xs text-gray-500">
                    View {index + 1}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right Side - Product Info */}
          <div className="space-y-8">
            
            {/* Pricing */}
            <div className="space-y-4">
              <div className="flex items-baseline space-x-4">
                <span className="text-5xl font-bold text-lavender-600">$169</span>
                <span className="text-2xl text-gray-400 line-through">$249</span>
                <span className="bg-coral-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-pulse">
                  Save $80
                </span>
              </div>
              <div className="text-gray-600">
                or 4 payments of $42.25
              </div>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-xl card-hover">
                  <span className="text-2xl flex-shrink-0">{feature.icon}</span>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">{feature.title}</div>
                    <div className="text-xs text-gray-600">{feature.description}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="space-y-4">
              <Link to="/product" className="btn-primary w-full text-lg justify-center">
                ADD TO CART - $169
              </Link>
              <button className="btn-secondary w-full text-lg justify-center">
                LEARN MORE
              </button>
            </div>

            {/* What's Included */}
            <div className="bg-lavender-50 rounded-2xl p-6">
              <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                <span className="mr-2">📦</span>
                What's Included:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {includedItems.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <span className="text-lg">{item.icon}</span>
                    <span className="text-sm font-medium text-gray-700">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span>Free Shipping</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                <span>30-Day Returns</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                <span>2-Year Warranty</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-coral-500 rounded-full"></span>
                <span>Secure Checkout</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;