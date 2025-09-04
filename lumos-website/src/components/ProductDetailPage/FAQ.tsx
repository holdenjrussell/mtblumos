import React, { useState } from 'react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: 'general' | 'technical' | 'safety' | 'results';
  icon: string;
}

const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const faqData: FAQItem[] = [
    {
      id: 1,
      question: "How does COOLMAX technology work?",
      answer: "COOLMAX technology maintains a consistent 50°F temperature through advanced cooling plates that actively dissipate heat during treatment. This ensures maximum comfort and eliminates the burning sensation common with other IPL devices.",
      category: 'technical',
      icon: '❄️'
    },
    {
      id: 2,
      question: "Is Lumos IPL safe for all skin tones?",
      answer: "Lumos IPL is safe for skin tones I-V on the Fitzpatrick scale. Our built-in skin tone sensor automatically adjusts the treatment intensity for optimal safety and results. Always perform a patch test before full treatment.",
      category: 'safety',
      icon: '🛡️'
    },
    {
      id: 3,
      question: "When will I see results?",
      answer: "Most users notice hair reduction within 2 weeks of starting treatment. Significant results (70% hair reduction) typically occur by week 4, with near-complete results (90%+) achieved by week 8 with consistent use.",
      category: 'results',
      icon: '📈'
    },
    {
      id: 4,
      question: "How long do the 999,999 flashes last?",
      answer: "With 999,999 flashes, your Lumos IPL can last a lifetime. For full-body treatments, this equals approximately 15+ years of regular use, making it an exceptional long-term investment.",
      category: 'general',
      icon: '⚡'
    },
    {
      id: 5,
      question: "What makes Lumos different from competitors?",
      answer: "Lumos features superior COOLMAX cooling at 50°F (vs competitors at 65-100°F), more flashes (999,999), better value at $169, and advanced safety features. Our technology delivers professional results at home.",
      category: 'technical',
      icon: '🏆'
    },
    {
      id: 6,
      question: "Is the treatment painful?",
      answer: "No! Thanks to our COOLMAX technology maintaining 50°F cooling, treatments are comfortable and pain-free. Most users describe the sensation as refreshingly cool, unlike the burning feeling from other devices.",
      category: 'safety',
      icon: '😌'
    },
    {
      id: 7,
      question: "How often should I use Lumos IPL?",
      answer: "For optimal results, use Lumos IPL once per week for the first 4-8 weeks, then switch to maintenance treatments once per month. Always follow the included treatment schedule guide.",
      category: 'general',
      icon: '📅'
    },
    {
      id: 8,
      question: "What's included in the box?",
      answer: "Your Lumos IPL package includes: the IPL device, safety glasses, user manual, quick start guide, skin tone chart, and our exclusive treatment schedule for optimal results.",
      category: 'general',
      icon: '📦'
    },
    {
      id: 9,
      question: "Can I use it on facial hair?",
      answer: "Yes! Lumos IPL is safe for facial hair removal including upper lip, chin, and jawline. Always use the lowest intensity setting for facial treatments and avoid the eye area completely.",
      category: 'safety',
      icon: '👤'
    },
    {
      id: 10,
      question: "What if I'm not satisfied?",
      answer: "We offer a 30-day money-back guarantee. If you're not completely satisfied with your results, return your Lumos IPL for a full refund, no questions asked.",
      category: 'general',
      icon: '✅'
    }
  ];

  const categories = [
    { key: 'all', label: 'All Questions', icon: '📋' },
    { key: 'general', label: 'General', icon: '💬' },
    { key: 'technical', label: 'Technical', icon: '⚙️' },
    { key: 'safety', label: 'Safety', icon: '🛡️' },
    { key: 'results', label: 'Results', icon: '📈' }
  ];

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const filteredFAQs = faqData.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="faq" className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to common questions about Lumos IPL technology, safety, and results
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8">
          {/* Search Bar */}
          <div className="relative mb-6">
            <input
              type="text"
              placeholder="Search questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-full focus:ring-2 focus:ring-lavender-500 focus:border-transparent"
            />
            <svg className="absolute left-4 top-4 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map(category => (
              <button
                key={category.key}
                onClick={() => setActiveCategory(category.key)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                  activeCategory === category.key
                    ? 'bg-gradient-to-r from-lavender-500 to-purple-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 border border-gray-200 hover:border-lavender-300 hover:text-lavender-600'
                }`}
              >
                <span>{category.icon}</span>
                <span>{category.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {filteredFAQs.length > 0 ? (
            filteredFAQs.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-200 hover:shadow-md"
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <div className="flex items-center space-x-4">
                    <span className="text-2xl flex-shrink-0">{item.icon}</span>
                    <h3 className="font-semibold text-gray-900 text-lg">
                      {item.question}
                    </h3>
                  </div>
                  <div className={`transform transition-transform duration-200 ${
                    openItems.includes(item.id) ? 'rotate-180' : ''
                  }`}>
                    <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                
                {openItems.includes(item.id) && (
                  <div className="px-6 pb-4 animate-fade-in">
                    <div className="pl-12">
                      <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <p className="text-gray-600 text-lg">No questions found matching your search.</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setActiveCategory('all');
                }}
                className="mt-4 btn-secondary"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>

        {/* Quick Actions */}
        <div className="mt-12 text-center">
          <div className="bg-lavender-50 border border-lavender-200 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
            <p className="text-gray-600 mb-6">
              Our customer support team is here to help you make the right decision
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                💬 Live Chat Support
              </button>
              <button className="btn-secondary">
                📧 Email Support
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FAQ;