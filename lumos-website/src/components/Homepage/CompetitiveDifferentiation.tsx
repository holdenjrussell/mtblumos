import React, { useState } from 'react';

interface ComparisonData {
  feature: string;
  lumos: string | JSX.Element;
  ulike: string;
  nood: string;
  lumosAdvantage: boolean;
}

const CompetitiveDifferentiation: React.FC = () => {
  const [savingsAmount, setSavingsAmount] = useState(180);

  const comparisonData: ComparisonData[] = [
    {
      feature: 'Price',
      lumos: (
        <div className="flex items-center space-x-2">
          <span className="text-green-600 font-bold text-lg">$169</span>
          <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-semibold">💰</span>
        </div>
      ),
      ulike: '$349',
      nood: '$199',
      lumosAdvantage: true
    },
    {
      feature: 'Cooling Technology',
      lumos: (
        <div className="flex items-center space-x-2">
          <span className="text-coolmax-blue font-bold">50°F COOLMAX</span>
          <span className="text-coolmax-blue text-xl">❄️</span>
        </div>
      ),
      ulike: '65°F Sapphire',
      nood: 'None',
      lumosAdvantage: true
    },
    {
      feature: 'Flashes',
      lumos: (
        <div className="flex items-center space-x-2">
          <span className="font-bold text-purple-600">999,999</span>
          <span className="text-xs text-purple-600">(Lifetime)</span>
        </div>
      ),
      ulike: 'Not specified',
      nood: 'Not specified',
      lumosAdvantage: true
    },
    {
      feature: 'Energy Levels',
      lumos: (
        <div className="flex items-center space-x-2">
          <span className="font-bold">9 Levels</span>
          <span className="text-green-600">⚡</span>
        </div>
      ),
      ulike: '5 Levels',
      nood: '7 Settings',
      lumosAdvantage: true
    },
    {
      feature: 'Treatment Time',
      lumos: '10 minutes',
      ulike: '10 minutes',
      nood: '10 minutes',
      lumosAdvantage: false
    },
    {
      feature: 'Money-Back Guarantee',
      lumos: (
        <div className="flex items-center space-x-2">
          <span className="font-bold text-green-600">30 Days</span>
          <span className="text-green-600">✅</span>
        </div>
      ),
      ulike: 'Not specified',
      nood: '90 Days',
      lumosAdvantage: true
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto container-padding">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Why Pay <span className="gradient-text-coral">More for Less?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how Lumos delivers superior technology at an unbeatable price
          </p>
        </div>

        {/* Live Savings Calculator */}
        <div className="mb-12 bg-white rounded-2xl shadow-soft p-8 text-center border border-gray-100">
          <h3 className="text-2xl font-bold mb-4">Live Savings Calculator</h3>
          <div className="max-w-md mx-auto">
            <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-4">
              <div className="text-sm font-medium text-red-600 mb-2">At Ulike prices, you'd pay:</div>
              <div className="text-3xl font-bold text-red-600">$349</div>
            </div>
            <div className="text-2xl font-bold text-gray-400 mb-4">VS</div>
            <div className="bg-lavender-50 border border-lavender-200 rounded-xl p-4 mb-4">
              <div className="text-sm font-medium text-lavender-600 mb-2">With Lumos, you pay:</div>
              <div className="text-3xl font-bold text-lavender-600">$169</div>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-xl p-4">
              <div className="text-sm font-medium text-green-600 mb-2">You save instantly:</div>
              <div className="text-4xl font-bold text-green-600 animate-pulse">${savingsAmount}</div>
            </div>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-2xl shadow-soft overflow-hidden border border-gray-100">
          {/* Header */}
          <div className="bg-gradient-to-r from-lavender-500 to-coral-500 p-6">
            <div className="grid grid-cols-4 gap-4 text-white text-center font-bold">
              <div>Feature</div>
              <div className="flex items-center justify-center space-x-2">
                <span>LUMOS IPL</span>
                <span className="text-yellow-300">🏆</span>
              </div>
              <div>Ulike Air 10</div>
              <div>Nood Flasher</div>
            </div>
          </div>

          {/* Body */}
          <div className="divide-y divide-gray-100">
            {comparisonData.map((row, index) => (
              <div
                key={index}
                className={`grid grid-cols-4 gap-4 p-6 text-center items-center transition-all duration-300 hover:bg-gray-50 ${
                  row.lumosAdvantage ? 'bg-green-50/50' : ''
                }`}
              >
                <div className="font-semibold text-gray-900 text-left">
                  {row.feature}
                </div>
                <div className="flex items-center justify-center space-x-2">
                  {row.lumos}
                  {row.lumosAdvantage && (
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  )}
                </div>
                <div className="text-gray-600">{row.ulike}</div>
                <div className="text-gray-600">{row.nood}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-lavender-500 to-coral-500 text-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold mb-4">
              Choose the Clear Winner
            </h3>
            <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
              Superior cooling technology, more flashes, better price, and stronger guarantee. 
              The choice is obvious.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-lavender-600 font-bold py-3 px-8 rounded-full hover:bg-gray-50 transition-colors duration-300 shadow-lg">
                Order Lumos Now - $169
              </button>
              <button className="border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-lavender-600 transition-colors duration-300">
                Compare Full Specs
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompetitiveDifferentiation;