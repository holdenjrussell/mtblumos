import React, { useState, useEffect } from 'react';

interface SavingsData {
  method: string;
  monthlyEstimate: number;
  yearlyEstimate: number;
  fiveYearTotal: number;
  icon: string;
  color: string;
}

const CostCalculator: React.FC = () => {
  const [selectedMethod, setSelectedMethod] = useState('waxing');
  const [yearsOfUse, setYearsOfUse] = useState(5);
  const [animatedSavings, setAnimatedSavings] = useState(0);

  const lumosPrice = 169;

  const savingsData: Record<string, SavingsData> = {
    shaving: {
      method: 'Shaving',
      monthlyEstimate: 8,
      yearlyEstimate: 94,
      fiveYearTotal: 470,
      icon: '🪒',
      color: 'blue'
    },
    waxing: {
      method: 'Waxing',
      monthlyEstimate: 52,
      yearlyEstimate: 624,
      fiveYearTotal: 3120,
      icon: '🕯️',
      color: 'purple'
    },
    laser: {
      method: 'Professional Laser',
      monthlyEstimate: 42,
      yearlyEstimate: 500,
      fiveYearTotal: 2500,
      icon: '⚡',
      color: 'red'
    },
    epilator: {
      method: 'Epilator',
      monthlyEstimate: 3,
      yearlyEstimate: 35,
      fiveYearTotal: 175,
      icon: '🔌',
      color: 'green'
    }
  };

  const currentData = savingsData[selectedMethod];
  const totalCost = currentData.yearlyEstimate * yearsOfUse;
  const totalSavings = totalCost - lumosPrice;

  useEffect(() => {
    let start = 0;
    const end = totalSavings;
    const duration = 1500;
    const increment = end / (duration / 50);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setAnimatedSavings(end);
        clearInterval(timer);
      } else {
        setAnimatedSavings(Math.floor(start));
      }
    }, 50);

    return () => clearInterval(timer);
  }, [totalSavings]);

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: 'text-blue-600 bg-blue-50 border-blue-200',
      purple: 'text-purple-600 bg-purple-50 border-purple-200',
      red: 'text-red-600 bg-red-50 border-red-200',
      green: 'text-green-600 bg-green-50 border-green-200'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Calculate Your <span className="gradient-text">Savings</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how much money you'll save by choosing Lumos IPL over traditional hair removal methods
          </p>\n        </div>

        <div className="bg-white rounded-2xl shadow-soft overflow-hidden">
          
          {/* Calculator Interface */}
          <div className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* Input Controls */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold mb-6">Customize Your Calculation</h3>
                
                {/* Hair Removal Method Selection */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Current Hair Removal Method
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {Object.entries(savingsData).map(([key, data]) => (
                      <button
                        key={key}
                        onClick={() => setSelectedMethod(key)}
                        className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                          selectedMethod === key
                            ? `${getColorClasses(data.color)} border-2 scale-105 shadow-md`
                            : 'border-gray-200 hover:border-gray-300 bg-white'
                        }`}
                      >
                        <div className="text-2xl mb-2">{data.icon}</div>
                        <div className="font-semibold text-sm">{data.method}</div>
                        <div className="text-xs text-gray-500">${data.monthlyEstimate}/month</div>
                      </button>
                    ))}\n                  </div>\n                </div>

                {/* Years of Use Slider */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Years of Use: <span className="text-lavender-600">{yearsOfUse}</span>
                  </label>
                  <div className="relative">
                    <input
                      type="range"
                      min="1"
                      max="10"
                      value={yearsOfUse}
                      onChange={(e) => setYearsOfUse(parseInt(e.target.value))}
                      className="w-full h-3 bg-gradient-to-r from-lavender-300 to-purple-400 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-2">
                      <span>1 Year</span>
                      <span>5 Years</span>
                      <span>10 Years</span>
                    </div>
                  </div>
                </div>

                {/* Current Method Breakdown */}
                <div className={`p-4 rounded-lg border ${getColorClasses(currentData.color)}`}>
                  <h4 className="font-semibold mb-3 flex items-center">
                    <span className="text-2xl mr-2">{currentData.icon}</span>
                    {currentData.method} Costs
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Monthly:</span>
                      <span className="font-semibold">${currentData.monthlyEstimate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Yearly:</span>
                      <span className="font-semibold">${currentData.yearlyEstimate}</span>
                    </div>
                    <div className="flex justify-between border-t pt-2">
                      <span>{yearsOfUse} Year Total:</span>
                      <span className="font-bold">${totalCost.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Results Display */}
              <div className="space-y-6">
                
                {/* Savings Highlight */}
                <div className="text-center bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-200">
                  <div className="text-6xl mb-4">💰</div>
                  <div className="text-lg font-semibold text-green-800 mb-2">
                    Your {yearsOfUse}-Year Savings:
                  </div>
                  <div className="text-5xl font-bold text-green-600 mb-4">
                    ${animatedSavings.toLocaleString()}
                  </div>
                  <div className="text-sm text-green-700">
                    vs {currentData.method}
                  </div>
                </div>

                {/* Cost Breakdown */}
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-900 mb-4">Cost Breakdown</h4>
                  
                  {/* Current Method */}
                  <div className="flex items-center justify-between mb-3 p-3 bg-white rounded-lg">
                    <div className="flex items-center space-x-3">
                      <span className="text-xl">{currentData.icon}</span>
                      <span className="font-medium">{currentData.method}</span>
                    </div>
                    <span className="font-bold text-red-600">${totalCost.toLocaleString()}</span>
                  </div>

                  {/* Lumos IPL */}
                  <div className="flex items-center justify-between mb-4 p-3 bg-lavender-50 rounded-lg border border-lavender-200">
                    <div className="flex items-center space-x-3">
                      <span className="text-xl">✨</span>
                      <span className="font-medium">Lumos IPL</span>
                    </div>
                    <span className="font-bold text-lavender-600">${lumosPrice}</span>
                  </div>

                  {/* Savings */}
                  <div className="border-t pt-3">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-green-800">Total Savings:</span>
                      <span className="font-bold text-green-600 text-xl">
                        ${totalSavings.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Value Propositions */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                    <span className="text-blue-500">💎</span>
                    <span className="text-blue-700 text-sm">
                      <strong>999,999 flashes</strong> - lasts a lifetime
                    </span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                    <span className="text-green-500">🏠</span>
                    <span className="text-green-700 text-sm">
                      <strong>At-home convenience</strong> - no appointments needed
                    </span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-purple-50 rounded-lg">
                    <span className="text-purple-500">❄️</span>
                    <span className="text-purple-700 text-sm">
                      <strong>COOLMAX 50°F</strong> - pain-free treatments
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-lavender-500 to-purple-600 p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">
              Start Saving Money Today!
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Pay once, save ${animatedSavings.toLocaleString()} over {yearsOfUse} years
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-lavender-600 font-bold py-4 px-8 rounded-full hover:bg-gray-50 transition-colors duration-300 shadow-lg">
                Order Lumos IPL - $169
              </button>
              <button className="border-2 border-white text-white font-bold py-4 px-8 rounded-full hover:bg-white hover:text-lavender-600 transition-colors duration-300">
                30-Day Money-Back Guarantee
              </button>
            </div>
          </div>
        </div>

        {/* Additional Savings Info */}
        <div className="mt-12 text-center">
          <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-8">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <span className="text-3xl">💡</span>
              <h3 className="text-2xl font-bold text-yellow-800">Pro Tip</h3>
            </div>
            <p className="text-yellow-700 text-lg leading-relaxed max-w-3xl mx-auto">
              The average person spends <strong>$23,000+</strong> on hair removal over their lifetime. 
              With Lumos IPL's one-time investment of $169, you could save over <strong>$22,800</strong>!
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CostCalculator;