import React, { useState, useEffect } from 'react';

interface ProductImage {
  id: number;
  src: string;
  alt: string;
  isVideo?: boolean;
}

const HeroSection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const productImages: ProductImage[] = [
    { id: 1, src: '[Placeholder: Lumos IPL Hero angle 3/4 view - device in lavender color against gradient background]', alt: 'Lumos IPL - Hero angle 3/4 view' },
    { id: 2, src: '[Placeholder: Lumos IPL Front view - showing control panel and COOLMAX vents]', alt: 'Lumos IPL - Front view' },
    { id: 3, src: '[Placeholder: Lumos IPL Side profile - ergonomic curves and cooling technology]', alt: 'Lumos IPL - Side profile' },
    { id: 4, src: '[Placeholder: Lumos IPL in hand showing scale - woman holding device demonstrating size]', alt: 'Lumos IPL - In hand showing scale' },
    { id: 5, src: '[Placeholder: Close-up treatment window - sapphire crystal with blue light]', alt: 'Lumos IPL - Close-up treatment window' },
    { id: 6, src: '[Placeholder: Lifestyle bathroom setting - device on marble counter in luxury bathroom]', alt: 'Lumos IPL - Lifestyle bathroom setting' },
  ];

  const testimonials = [
    { text: "Amazing results in just 2 weeks!", author: "Sarah M.", rating: 5 },
    { text: "No more razor burns!", author: "Jessica L.", rating: 5 },
    { text: "Worth every penny!", author: "Amanda K.", rating: 5 },
    { text: "Pain-free and actually works!", author: "Emma R.", rating: 5 },
    { text: "Better than salon treatments", author: "Lisa T.", rating: 5 }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`text-yellow-400 ${i < rating ? 'fill-current' : ''}`}>
        ★
      </span>
    ));
  };

  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-lavender-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Product Gallery */}
          <div className="space-y-4">
            {/* Main Product Image */}
            <div className="relative bg-gradient-to-br from-lavender-100 to-white rounded-2xl p-8 shadow-soft">
              <div className="relative group">
                <img
                  src={productImages[selectedImage].src}
                  alt={productImages[selectedImage].alt}
                  className="w-full h-96 object-contain transition-transform duration-500 group-hover:scale-105 animate-float"
                />
                
                {/* Floating badges */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-semibold text-lavender-600 shadow-md animate-pulse">
                  COOLMAX 50°F
                </div>
                <div className="absolute top-4 right-4 bg-green-500 text-white rounded-full px-3 py-1 text-sm font-semibold shadow-md">
                  999,999 Flashes
                </div>
              </div>
            </div>

            {/* Thumbnail Strip */}
            <div className="flex space-x-2 overflow-x-auto pb-2">
              {productImages.map((image, index) => (
                <button
                  key={image.id}
                  onClick={() => setSelectedImage(index)}
                  className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden transition-all duration-200 ${
                    selectedImage === index
                      ? 'ring-2 ring-lavender-500 shadow-lg scale-105'
                      : 'hover:shadow-md hover:scale-102'
                  }`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right Side - Product Information */}
          <div className="space-y-6">
            
            {/* Brand & Rating */}
            <div className="space-y-2">
              <h1 className="text-4xl lg:text-5xl font-bold">
                <span className="gradient-text">LUMOS</span> ✨
              </h1>
              <div className="flex items-center space-x-2">
                <div className="flex">
                  {renderStars(4)}
                  <span className="text-gray-400">☆</span>
                </div>
                <span className="text-sm text-gray-600">4.3 Stars (209 Reviews)</span>
              </div>
            </div>

            {/* Product Title */}
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                Lumos IPL
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Effective Permanent Full-Body At-Home IPL Laser Hair Removal, Pain-Free
              </p>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center space-x-2 p-3 bg-white rounded-lg shadow-sm card-hover">
                <span className="text-yellow-500 text-xl">🏆</span>
                <span className="text-sm font-medium">#1 Cooling Technology</span>
              </div>
              <div className="flex items-center space-x-2 p-3 bg-white rounded-lg shadow-sm card-hover">
                <span className="text-blue-500 text-xl">💎</span>
                <span className="text-sm font-medium">Lifetime Guarantee</span>
              </div>
              <div className="flex items-center space-x-2 p-3 bg-white rounded-lg shadow-sm card-hover">
                <span className="text-purple-500 text-xl">⚡</span>
                <span className="text-sm font-medium">999,999 Flashes</span>
              </div>
            </div>

            {/* Live Testimonial Ticker */}
            <div className="bg-gradient-to-r from-lavender-50 to-purple-50 p-4 rounded-lg border border-lavender-200">
              <div className="flex items-center space-x-2">
                <div className="flex">
                  {renderStars(testimonials[currentTestimonial].rating)}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900 animate-fade-in">
                    "{testimonials[currentTestimonial].text}"
                  </p>
                  <p className="text-xs text-gray-600 mt-1">
                    - {testimonials[currentTestimonial].author}
                  </p>
                </div>
              </div>
            </div>

            {/* Pricing */}
            <div className="space-y-2">
              <div className="flex items-baseline space-x-3">
                <span className="text-4xl font-bold text-lavender-600">$169</span>
                <span className="text-2xl text-gray-400 line-through">$249</span>
                <span className="bg-red-500 text-white px-2 py-1 rounded text-sm font-semibold animate-pulse">
                  SAVE 32%
                </span>
              </div>
              <div className="text-sm text-gray-600">
                30-Day Money-Back Guarantee • Free Shipping
              </div>
            </div>

            {/* Savings Calculator Preview */}
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <div className="text-sm text-green-800 font-semibold mb-1">
                🎯 Your 5-Year Savings vs Salon Laser:
              </div>
              <div className="text-2xl font-bold text-green-600">
                Save $2,331
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button className="w-full btn-primary text-lg py-4 relative overflow-hidden group">
                <span className="relative z-10">Add to Cart - $169</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-lavender-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              
              <button className="w-full btn-secondary">
                Buy Now - Pay Later Available
              </button>
            </div>

            {/* Stock & Social Proof */}
            <div className="flex items-center justify-between text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>23 people viewing this</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>⚡</span>
                <span>147 sold in last 24h</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;