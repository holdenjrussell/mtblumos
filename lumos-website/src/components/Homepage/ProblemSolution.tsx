import React, { useState } from 'react';

interface Problem {
  id: number;
  title: string;
  description: string;
  icon: string;
  impact: string;
}

interface Solution {
  id: number;
  title: string;
  description: string;
  icon: string;
  benefit: string;
}

const ProblemSolution: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'problems' | 'solution'>('problems');
  const [selectedProblem, setSelectedProblem] = useState(0);

  const problems: Problem[] = [
    {
      id: 1,
      title: "Painful Laser Treatments",
      description: "Traditional IPL devices operate at 65-100°F, causing burning sensations and requiring numbing cream",
      icon: "🔥",
      impact: "73% of users quit IPL due to pain"
    },
    {
      id: 2,
      title: "Expensive Salon Visits",
      description: "Professional laser hair removal costs $2,000-$4,000 for full body treatment with multiple sessions",
      icon: "💸",
      impact: "$3,000+ average lifetime cost"
    },
    {
      id: 3,
      title: "Time-Consuming Routines",
      description: "Daily shaving, weekly waxing, or monthly salon appointments consume hours of your life",
      icon: "⏰",
      impact: "156 hours/year spent on hair removal"
    },
    {
      id: 4,
      title: "Skin Irritation & Ingrowns",
      description: "Razors cause cuts, razor burn, and ingrown hairs. Waxing leads to redness and bumps",
      icon: "🩹",
      impact: "87% experience regular skin irritation"
    }
  ];

  const solutions: Solution[] = [
    {
      id: 1,
      title: "COOLMAX™ 50°F Technology",
      description: "Industry's only true ice-cooling IPL - 30° colder than Ulike, 50° colder than Nood",
      icon: "❄️",
      benefit: "100% pain-free treatments"
    },
    {
      id: 2,
      title: "One-Time $169 Investment",
      description: "Save thousands vs salon treatments. Cheaper than competitors with better technology",
      icon: "✨",
      benefit: "Save $2,831 vs professional lasers"
    },
    {
      id: 3,
      title: "10-Minute Full Body",
      description: "Dual-light technology with auto-glide mode treats entire body in just 10 minutes",
      icon: "⚡",
      benefit: "96% hair reduction in 2 weeks"
    },
    {
      id: 4,
      title: "Dermatologist-Safe",
      description: "FDA-cleared with UV filters, skin tone sensor, and medical-grade sapphire cooling",
      icon: "🛡️",
      benefit: "Safe for all skin types (I-V)"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-lavender-50">
      <div className="max-w-7xl mx-auto container-padding">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">The Hair Removal Revolution</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Say goodbye to painful, expensive, time-consuming hair removal forever
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-full p-1 shadow-lg inline-flex">
            <button
              onClick={() => setActiveTab('problems')}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === 'problems'
                  ? 'bg-gradient-to-r from-coral-500 to-lavender-500 text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              The Problems
            </button>
            <button
              onClick={() => setActiveTab('solution')}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === 'solution'
                  ? 'bg-gradient-to-r from-lavender-500 to-coral-500 text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              The Solution
            </button>
          </div>
        </div>

        {/* Content Area */}
        {activeTab === 'problems' ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Problem Cards */}
            <div className="space-y-4">
              {problems.map((problem, index) => (
                <div
                  key={problem.id}
                  onClick={() => setSelectedProblem(index)}
                  className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                    selectedProblem === index
                      ? 'bg-white shadow-xl scale-105 border-2 border-coral-500'
                      : 'bg-white/60 hover:bg-white hover:shadow-lg'
                  }`}
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">{problem.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2 text-gray-900">{problem.title}</h3>
                      <p className="text-gray-600 mb-2">{problem.description}</p>
                      <div className="inline-block bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-semibold">
                        {problem.impact}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right: Visual Impact */}
            <div className="relative">
              <div className="bg-gradient-to-br from-red-100 to-orange-100 rounded-3xl p-8">
                <div className="text-center">
                  <div className="text-6xl mb-4">{problems[selectedProblem].icon}</div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">The Hidden Costs</h3>
                  <div className="space-y-3">
                    <div className="bg-white/80 rounded-xl p-4">
                      <div className="text-3xl font-bold text-red-600">$3,000+</div>
                      <div className="text-sm text-gray-600">Lifetime hair removal costs</div>
                    </div>
                    <div className="bg-white/80 rounded-xl p-4">
                      <div className="text-3xl font-bold text-orange-600">156 hours</div>
                      <div className="text-sm text-gray-600">Wasted per year</div>
                    </div>
                    <div className="bg-white/80 rounded-xl p-4">
                      <div className="text-3xl font-bold text-red-500">87%</div>
                      <div className="text-sm text-gray-600">Experience skin damage</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Solution Visual */}
            <div className="relative order-2 lg:order-1">
              <div className="bg-gradient-to-br from-coolmax-blue/20 to-lavender-200 rounded-3xl p-8">
                <div className="text-center">
                  <div className="text-6xl mb-4">✨</div>
                  <h3 className="text-2xl font-bold mb-4 gradient-text">The LUMOS Advantage</h3>
                  <div className="space-y-3">
                    <div className="bg-white/90 rounded-xl p-4 shadow-lg">
                      <div className="text-3xl font-bold text-coolmax-blue">50°F</div>
                      <div className="text-sm text-gray-600">Ice-cold comfort</div>
                    </div>
                    <div className="bg-white/90 rounded-xl p-4 shadow-lg">
                      <div className="text-3xl font-bold text-green-600">$169</div>
                      <div className="text-sm text-gray-600">One-time investment</div>
                    </div>
                    <div className="bg-white/90 rounded-xl p-4 shadow-lg">
                      <div className="text-3xl font-bold text-lavender-600">96%</div>
                      <div className="text-sm text-gray-600">Hair reduction in 2 weeks</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Solution Cards */}
            <div className="space-y-4 order-1 lg:order-2">
              {solutions.map((solution) => (
                <div
                  key={solution.id}
                  className="p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">{solution.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2 text-gray-900">{solution.title}</h3>
                      <p className="text-gray-600 mb-2">{solution.description}</p>
                      <div className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                        {solution.benefit}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center">
            <a href="/product" className="btn-primary text-lg">
              Solve My Hair Problems - $169
            </a>
            <div className="text-sm text-gray-600">
              90-day money back guarantee
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;