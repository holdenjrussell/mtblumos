import React, { useState } from 'react';

interface BundleItem {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  image: string;
  description: string;
  benefits: string[];
}

interface Bundle {
  id: string;
  name: string;
  items: BundleItem[];
  totalPrice: number;
  originalPrice: number;
  savings: number;
  badge?: string;
  popular?: boolean;
}

const BundleSection: React.FC = () => {
  const [selectedBundle, setSelectedBundle] = useState('complete');

  const bundleItems: BundleItem[] = [
    {
      id: 'lumos-device',
      name: 'Lumos IPL Device',
      price: 169,
      originalPrice: 249,
      image: '[Placeholder: Lumos IPL device product shot]',
      description: 'Revolutionary COOLMAX IPL hair removal device',
      benefits: ['999,999 flashes', 'COOLMAX 50°F cooling', '9 intensity levels']
    },
    {
      id: 'soothing-serum',
      name: 'Post-Treatment Soothing Serum',
      price: 24,
      originalPrice: 35,
      image: '[Placeholder: Soothing serum bottle]',
      description: 'Gentle aloe-based serum for post-treatment care',
      benefits: ['Reduces redness', 'Hydrates skin', 'Accelerates healing']
    },
    {
      id: 'extra-glasses',
      name: 'Extra Safety Glasses',
      price: 12,
      originalPrice: 20,
      image: '[Placeholder: Safety glasses]',
      description: 'Additional UV-protection safety glasses',
      benefits: ['UV protection', 'Comfortable fit', 'Easy to clean']
    },
    {
      id: 'travel-case',
      name: 'Premium Travel Case',
      price: 18,
      originalPrice: 30,
      image: '[Placeholder: Travel case]',
      description: 'Protective carrying case for your Lumos IPL',
      benefits: ['Shock resistant', 'Compact design', 'Premium materials']
    }
  ];

  const bundles: Bundle[] = [
    {
      id: 'device-only',
      name: 'Lumos IPL Only',
      items: [bundleItems[0]],
      totalPrice: 169,
      originalPrice: 249,
      savings: 80,
      badge: 'Most Basic'
    },
    {
      id: 'essential',
      name: 'Essential Bundle',
      items: [bundleItems[0], bundleItems[1]],
      totalPrice: 189,
      originalPrice: 284,
      savings: 95,
      badge: 'Great Value'
    },
    {
      id: 'complete',
      name: 'Complete Bundle',
      items: [bundleItems[0], bundleItems[1], bundleItems[2]],
      totalPrice: 199,
      originalPrice: 304,
      savings: 105,
      badge: 'Best Value',
      popular: true
    },
    {
      id: 'ultimate',
      name: 'Ultimate Bundle',
      items: bundleItems,
      totalPrice: 219,
      originalPrice: 334,
      savings: 115,
      badge: 'Premium'
    }
  ];

  const selectedBundleData = bundles.find(bundle => bundle.id === selectedBundle);

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Complete Your <span className="gradient-text">Hair-Free Journey</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect bundle to maximize your results and savings
          </p>
        </div>

        {/* Bundle Selection */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {bundles.map((bundle) => (
            <div
              key={bundle.id}
              className={`relative bg-white rounded-2xl shadow-md p-6 cursor-pointer transition-all duration-300 ${
                selectedBundle === bundle.id
                  ? 'ring-2 ring-lavender-500 shadow-lg scale-105 bg-lavender-50'
                  : 'hover:shadow-lg hover:-translate-y-1'
              } ${bundle.popular ? 'border-2 border-lavender-300' : ''}`}
              onClick={() => setSelectedBundle(bundle.id)}
            >
              {/* Popular Badge */}
              {bundle.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-lavender-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                    🎆 MOST POPULAR
                  </div>
                </div>
              )}

              {/* Badge */}
              <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 ${
                bundle.badge === 'Best Value' ? 'bg-green-100 text-green-800' :
                bundle.badge === 'Great Value' ? 'bg-blue-100 text-blue-800' :
                bundle.badge === 'Premium' ? 'bg-purple-100 text-purple-800' :
                'bg-gray-100 text-gray-800'
              }`}>
                {bundle.badge}
              </div>

              <h3 className="text-xl font-bold mb-3">{bundle.name}</h3>
              
              {/* Pricing */}
              <div className="mb-4">
                <div className="flex items-baseline space-x-2">
                  <span className="text-3xl font-bold text-lavender-600">${bundle.totalPrice}</span>
                  <span className="text-lg text-gray-400 line-through">${bundle.originalPrice}</span>
                </div>
                <div className="text-sm text-green-600 font-semibold">
                  Save ${bundle.savings}
                </div>
              </div>

              {/* Items Preview */}
              <div className="space-y-2 mb-4">
                {bundle.items.map((item) => (
                  <div key={item.id} className="flex items-center space-x-2 text-sm text-gray-600">
                    <span className="text-green-500">✓</span>
                    <span>{item.name}</span>
                  </div>
                ))}
              </div>

              {/* Selection Indicator */}
              <div className={`w-4 h-4 rounded-full border-2 mx-auto transition-all duration-200 ${
                selectedBundle === bundle.id
                  ? 'bg-lavender-500 border-lavender-500'
                  : 'border-gray-300'
              }`}>
                {selectedBundle === bundle.id && (
                  <div className="w-full h-full bg-white rounded-full transform scale-50"></div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Selected Bundle Details */}
        {selectedBundleData && (
          <div className="bg-white rounded-2xl shadow-soft overflow-hidden mb-8">
            <div className="bg-gradient-to-r from-lavender-500 to-purple-600 text-white p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold">{selectedBundleData.name}</h3>
                  <p className="opacity-90">Everything you need for professional results</p>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold">${selectedBundleData.totalPrice}</div>
                  <div className="text-sm opacity-75 line-through">
                    ${selectedBundleData.originalPrice}
                  </div>
                  <div className="text-sm font-semibold">
                    Save ${selectedBundleData.savings}
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {selectedBundleData.items.map((item) => (
                  <div key={item.id} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl">
                    <div className="w-16 h-16 bg-gray-200 rounded-lg flex-shrink-0 flex items-center justify-center text-xs text-gray-500 text-center">
                      {item.image}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-gray-900 mb-1">{item.name}</h4>
                      <p className="text-sm text-gray-600 mb-2">{item.description}</p>
                      <ul className="space-y-1">
                        {item.benefits.map((benefit, index) => (
                          <li key={index} className="text-xs text-green-600 flex items-center space-x-1">
                            <span>✓</span>
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-2 flex items-center space-x-2">
                        <span className="text-lg font-bold text-lavender-600">${item.price}</span>
                        <span className="text-sm text-gray-400 line-through">${item.originalPrice}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Add to Cart Section */}
        <div className="bg-white rounded-2xl shadow-soft p-8 text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold mb-2">
              Ready to Transform Your Skin?
            </h3>
            <p className="text-gray-600">
              Join thousands of satisfied customers who chose Lumos IPL
            </p>
          </div>

          {/* Summary */}
          <div className="bg-lavender-50 rounded-xl p-6 mb-6 max-w-md mx-auto">
            <div className="flex items-center justify-between mb-4">
              <span className="font-semibold">{selectedBundleData?.name}</span>
              <span className="font-bold text-lavender-600">${selectedBundleData?.totalPrice}</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Original Price:</span>
              <span className="line-through text-gray-400">${selectedBundleData?.originalPrice}</span>
            </div>
            <div className="flex items-center justify-between text-sm border-t pt-2 mt-2">
              <span className="font-semibold text-green-800">You Save:</span>
              <span className="font-bold text-green-600">${selectedBundleData?.savings}</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-4">
            <button className="w-full max-w-md btn-primary text-lg py-4 relative overflow-hidden group">
              <span className="relative z-10">
                🛍️ Add {selectedBundleData?.name} to Cart - ${selectedBundleData?.totalPrice}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-lavender-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <div className="flex flex-col sm:flex-row gap-2 justify-center text-sm text-gray-600">
              <div className="flex items-center space-x-1">
                <span>✅</span>
                <span>30-Day Money-Back Guarantee</span>
              </div>
              <div className="flex items-center space-x-1">
                <span>🚚</span>
                <span>Free Shipping</span>
              </div>
              <div className="flex items-center space-x-1">
                <span>💳</span>
                <span>Secure Checkout</span>
              </div>
            </div>
          </div>
        </div>

        {/* Guarantee Section */}
        <div className="mt-12 text-center">
          <div className="bg-green-50 border border-green-200 rounded-2xl p-8">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <span className="text-3xl">🛡️</span>
              <h3 className="text-2xl font-bold text-green-800">Risk-Free Guarantee</h3>
            </div>
            <p className="text-green-700 text-lg leading-relaxed max-w-3xl mx-auto">
              Try Lumos IPL risk-free for 30 days. If you don't see the results you expected, 
              return it for a <strong>full refund, no questions asked</strong>.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default BundleSection;