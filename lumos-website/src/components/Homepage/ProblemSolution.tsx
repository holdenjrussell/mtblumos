import React from 'react';

const ProblemSolution: React.FC = () => {
  const problemItems = [
    {
      icon: '❌',
      text: 'Razor burn & ingrowns',
      detail: 'Daily irritation and painful bumps'
    },
    {
      icon: '❌',
      text: '$470/year on razors',
      detail: 'Endless recurring costs'
    },
    {
      icon: '❌',
      text: 'Daily time waste',
      detail: '30+ minutes every morning'
    },
    {
      icon: '❌',
      text: 'Painful waxing appointments',
      detail: 'Expensive and uncomfortable'
    }
  ];

  const solutionItems = [
    {
      icon: '✅',
      text: 'Smooth skin 24/7',
      detail: 'No more daily maintenance'
    },
    {
      icon: '✅',
      text: 'One-time $169 investment',
      detail: 'Save thousands long-term'
    },
    {
      icon: '✅',
      text: '10 minutes weekly',
      detail: 'Quick and convenient'
    },
    {
      icon: '✅',
      text: 'Pain-free at home',
      detail: 'COOLMAX 50°F technology'
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto container-padding">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Stop the <span className="gradient-text-coral">Daily Struggle</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your hair removal routine from a daily chore to a weekly luxury
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - The Problem */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold text-red-600 mb-4">
                Still doing this? 😫
              </h3>
              <div className="aspect-4/3 bg-red-50 rounded-2xl flex items-center justify-center text-red-400 text-sm mb-6 border-2 border-red-100">
                [Placeholder: Traditional methods imagery - collage showing woman shaving with razor burns, waxing appointment, frustrated expression, pile of disposable razors]
              </div>
            </div>
            
            <div className="space-y-4">
              {problemItems.map((item, index) => (
                <div 
                  key={index}
                  className="flex items-start space-x-4 p-4 bg-red-50 rounded-xl border border-red-100 animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="text-2xl flex-shrink-0">{item.icon}</span>
                  <div>
                    <div className="font-semibold text-red-700">{item.text}</div>
                    <div className="text-sm text-red-600">{item.detail}</div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center lg:text-left">
              <div className="inline-block bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-semibold">
                💸 Annual Cost: $2,000+ (razors, waxing, time)
              </div>
            </div>
          </div>

          {/* Right Side - The Solution */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold text-green-600 mb-4">
                When you could do this! ✨
              </h3>
              <div className="aspect-4/3 bg-lavender-50 rounded-2xl flex items-center justify-center text-lavender-400 text-sm mb-6 border-2 border-lavender-100">
                [Placeholder: Lumos lifestyle shot - relaxed woman using Lumos IPL device in luxury bathroom, smooth skin, confident smile, modern setting]
              </div>
            </div>
            
            <div className="space-y-4">
              {solutionItems.map((item, index) => (
                <div 
                  key={index}
                  className="flex items-start space-x-4 p-4 bg-green-50 rounded-xl border border-green-100 animate-slide-up"
                  style={{ animationDelay: `${(index + 4) * 100}ms` }}
                >
                  <span className="text-2xl flex-shrink-0">{item.icon}</span>
                  <div>
                    <div className="font-semibold text-green-700">{item.text}</div>
                    <div className="text-sm text-green-600">{item.detail}</div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center lg:text-left space-y-4">
              <div className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
                🎉 One-time Cost: $169 (save $1,831/year)
              </div>
              
              <div className="pt-4">
                <button className="btn-primary w-full sm:w-auto">
                  Make the Switch - $169
                </button>
                <div className="mt-2 text-xs text-gray-500 text-center sm:text-left">
                  30-day money-back guarantee
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-lavender-50 to-coral-50 rounded-3xl p-8">
          <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Routine?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Join over 1 million women who've made the smart switch to Lumos IPL
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary text-lg">
              Start Your Journey - $169
            </button>
            <button className="btn-secondary text-lg">
              See Real Results
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;