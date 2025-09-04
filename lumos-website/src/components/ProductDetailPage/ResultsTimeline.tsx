import React, { useState, useEffect } from 'react';

interface TimelineStage {
  week: number;
  title: string;
  description: string;
  reduction: string;
  image: string;
  features: string[];
}

const ResultsTimeline: React.FC = () => {
  const [activeStage, setActiveStage] = useState(0);
  const [visibleStages, setVisibleStages] = useState<number[]>([]);

  const timelineStages: TimelineStage[] = [
    {
      week: 0,
      title: "Start Your Journey",
      description: "Begin your hair-free transformation with your first Lumos IPL treatment",
      reduction: "Day 1",
      image: "/api/placeholder/300/200",
      features: [
        "Initial treatment session",
        "Skin preparation tips",
        "Comfort from day one",
        "No burning sensation"
      ]
    },
    {
      week: 2,
      title: "Early Results",
      description: "Notice the first signs of hair reduction and slower regrowth",
      reduction: "30% Less Hair",
      image: "/api/placeholder/300/200",
      features: [
        "Visible hair reduction",
        "Slower regrowth rate",
        "Smoother skin texture",
        "Reduced ingrown hairs"
      ]
    },
    {
      week: 4,
      title: "Significant Progress",
      description: "Dramatic improvement with most hair follicles showing reduced activity",
      reduction: "70% Less Hair",
      image: "/api/placeholder/300/200",
      features: [
        "Major hair reduction",
        "Finer hair texture",
        "Longer-lasting smoothness",
        "Increased confidence"
      ]
    },
    {
      week: 8,
      title: "Near Complete Results",
      description: "Achieve silky smooth skin with minimal maintenance needed",
      reduction: "90% Hair Gone",
      image: "/api/placeholder/300/200",
      features: [
        "Nearly hair-free results",
        "Permanent hair reduction",
        "Minimal touch-ups needed",
        "Life-changing results"
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-stage') || '0');
            setVisibleStages(prev => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll('[data-stage]').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const progressPercentage = ((activeStage + 1) / timelineStages.length) * 100;

  return (
    <section className="py-16 bg-gradient-to-b from-white to-lavender-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Your Journey to <span className="gradient-text">Smooth Skin</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Track your progress week by week and see the amazing transformation 
            that thousands of customers have experienced
          </p>
        </div>

        {/* Progress Overview */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center space-x-4 bg-white rounded-full px-8 py-4 shadow-lg">
            {timelineStages.map((stage, index) => (
              <React.Fragment key={stage.week}>
                <button
                  onClick={() => setActiveStage(index)}
                  className={`flex flex-col items-center space-y-1 transition-all duration-300 ${
                    activeStage === index ? 'scale-110' : 'hover:scale-105'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${
                    activeStage === index 
                      ? 'bg-gradient-to-r from-lavender-500 to-purple-600 text-white shadow-lg' 
                      : activeStage > index 
                        ? 'bg-green-500 text-white'
                        : 'bg-gray-200 text-gray-600'
                  }`}>
                    {stage.week === 0 ? 'START' : `W${stage.week}`}
                  </div>
                  <span className={`text-xs font-medium ${
                    activeStage === index ? 'text-lavender-600' : 'text-gray-500'
                  }`}>
                    {stage.reduction}
                  </span>
                </button>
                {index < timelineStages.length - 1 && (
                  <div className={`h-1 w-8 rounded transition-colors duration-500 ${
                    activeStage > index ? 'bg-green-500' : 'bg-gray-200'
                  }`}></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Active Stage Details */}
        <div className="bg-white rounded-2xl shadow-soft overflow-hidden mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            {/* Image */}
            <div className="relative h-80 lg:h-auto">
              <img
                src={timelineStages[activeStage].image}
                alt={`Week ${timelineStages[activeStage].week} results`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <div className="text-3xl font-bold">{timelineStages[activeStage].reduction}</div>
                <div className="text-sm opacity-90">Week {timelineStages[activeStage].week} Results</div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-lavender-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {timelineStages[activeStage].week}
                </div>
                <h3 className="text-2xl font-bold">{timelineStages[activeStage].title}</h3>
              </div>
              
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                {timelineStages[activeStage].description}
              </p>

              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900 mb-3">What to Expect:</h4>
                {timelineStages[activeStage].features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {timelineStages.map((stage, index) => (
            <div
              key={stage.week}
              data-stage={index}
              className={`bg-white rounded-xl shadow-md p-6 cursor-pointer transition-all duration-500 card-hover ${
                visibleStages.includes(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              } ${activeStage === index ? 'ring-2 ring-lavender-500 shadow-lg scale-105' : ''}`}
              onClick={() => setActiveStage(index)}
            >
              <div className="text-center">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center font-bold text-lg ${
                  activeStage === index 
                    ? 'bg-gradient-to-r from-lavender-500 to-purple-600 text-white' 
                    : 'bg-gray-100 text-gray-600'
                }`}>
                  {stage.week === 0 ? 'START' : `W${stage.week}`}
                </div>
                <h4 className="font-bold text-gray-900 mb-2">{stage.title}</h4>
                <div className="text-2xl font-bold text-lavender-600 mb-2">{stage.reduction}</div>
                <p className="text-sm text-gray-600">{stage.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Progress Bar */}
        <div className="bg-white rounded-2xl shadow-soft p-8 text-center">
          <h3 className="text-2xl font-bold mb-6">Your Progress Tracking</h3>
          <div className="max-w-2xl mx-auto">
            <div className="bg-gray-200 rounded-full h-4 mb-4 overflow-hidden">
              <div 
                className="bg-gradient-to-r from-lavender-500 to-purple-600 h-full rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
            <div className="flex justify-between text-sm text-gray-600">
              <span>Start (0%)</span>
              <span>2 Weeks (30%)</span>
              <span>4 Weeks (70%)</span>
              <span>8 Weeks (90%+)</span>
            </div>
          </div>

          <div className="mt-8 bg-lavender-50 p-6 rounded-xl">
            <div className="text-lg font-semibold text-lavender-600 mb-2">
              ⏱️ Most customers see results in just 2 weeks!
            </div>
            <div className="text-gray-600">
              Join thousands who have transformed their skin with Lumos IPL
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ResultsTimeline;