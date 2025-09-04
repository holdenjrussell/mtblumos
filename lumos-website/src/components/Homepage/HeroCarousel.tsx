import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface HeroSlide {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  ctaPrimary: string;
  ctaSecondary: string;
  backgroundImage: string;
  testimonial?: {
    text: string;
    author: string;
    rating: number;
  };
  priceComparison?: {
    competitor: string;
    competitorPrice: number;
    lumosPrice: number;
    savings: number;
  };
}

const HeroCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const slides: HeroSlide[] = [
    {
      id: 1,
      title: 'WINTER SALE',
      subtitle: 'goodbye razors, hello smooth',
      description: "The only IPL with COOLMAX™ technology for pain-free permanent hair removal in just 10 days",
      ctaPrimary: 'SHOP NOW - $169',
      ctaSecondary: 'WATCH DEMO',
      backgroundImage: '[Placeholder: Model with smooth skin in bright, modern bathroom setting - woman in white robe examining her legs in well-lit marble bathroom]',
      priceComparison: {
        competitor: 'Competitor',
        competitorPrice: 349,
        lumosPrice: 169,
        savings: 180
      },
      testimonial: {
        text: "Life-changing! Better than my $3000 laser treatments",
        author: "Sarah M.",
        rating: 5
      }
    },
    {
      id: 2,
      title: 'REVOLUTIONARY COOLING',
      subtitle: '50°F ice-cold comfort vs 65-100°F competitors',
      description: "The COOLMAX™ Advantage: Industry's coldest IPL for completely pain-free treatments",
      ctaPrimary: 'DISCOVER COOLMAX',
      ctaSecondary: 'SHOP NOW',
      backgroundImage: '[Placeholder: Close-up of device with blue cooling visualization - product shot showing cooling vents with blue light effects and ice crystals]'
    },
    {
      id: 3,
      title: 'TRANSFORM YOUR ROUTINE',
      subtitle: 'from daily shaving to lifetime smooth',
      description: "90% hair reduction in just 4 weeks. Join 1,000,000+ happy customers",
      ctaPrimary: 'GET STARTED - $169',
      ctaSecondary: 'SEE RESULTS',
      backgroundImage: '[Placeholder: Before/after transformation visual - split screen showing progression from hairy to smooth skin with timeline markers]'
    }
  ];

  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, [isPlaying, slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
        ⭐
      </span>
    ));
  };

  const currentSlideData = slides[currentSlide];

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden hero-gradient">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-lavender-100/50 to-coral-100/50" />
      
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-600">
        <div className="max-w-md text-center p-8 bg-white/80 backdrop-blur-sm rounded-lg">
          <div className="text-sm font-medium mb-2">Background Image:</div>
          <div className="text-xs leading-relaxed">{currentSlideData.backgroundImage}</div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto container-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
          
          {/* Left Side - Content */}
          <div className="text-center lg:text-left space-y-6 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-block bg-coral-500 text-white px-4 py-2 rounded-full text-sm font-bold tracking-wide animate-pulse">
                {currentSlideData.title}
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="gradient-text block mb-2">
                  {currentSlideData.subtitle.split(' ').slice(0, 2).join(' ')}
                </span>
                <span className="text-gray-900 block">
                  {currentSlideData.subtitle.split(' ').slice(2).join(' ')}
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
                {currentSlideData.description}
              </p>
            </div>

            {/* Price Comparison */}
            {currentSlideData.priceComparison && (
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
                <div className="text-sm font-semibold text-gray-600 mb-3">Live Price Comparison</div>
                <div className="flex items-center justify-between">
                  <div className="text-center">
                    <div className="text-lg font-bold text-red-500">
                      {currentSlideData.priceComparison.competitor}: ${currentSlideData.priceComparison.competitorPrice}
                    </div>
                  </div>
                  <div className="text-2xl">|</div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-lavender-600">
                      LUMOS: ${currentSlideData.priceComparison.lumosPrice}
                    </div>
                  </div>
                </div>
                <div className="text-center mt-3">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-bold">
                    You save: ${currentSlideData.priceComparison.savings}
                  </span>
                </div>
              </div>
            )}

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/product" className="btn-primary text-lg">
                {currentSlideData.ctaPrimary}
              </Link>
              <button className="btn-secondary text-lg">
                {currentSlideData.ctaSecondary}
              </button>
            </div>

            {/* Testimonial */}
            {currentSlideData.testimonial && (
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-md border border-white/20">
                <div className="flex items-center space-x-1 mb-2">
                  {renderStars(currentSlideData.testimonial.rating)}
                </div>
                <blockquote className="text-gray-700 italic">
                  "{currentSlideData.testimonial.text}"
                </blockquote>
                <cite className="text-sm text-gray-600 font-medium">
                  - {currentSlideData.testimonial.author}
                </cite>
              </div>
            )}
          </div>

          {/* Right Side - Visual Element */}
          <div className="relative">
            <div className="aspect-square max-w-lg mx-auto bg-gradient-to-br from-lavender-200 to-coral-200 rounded-3xl p-8 shadow-2xl animate-float">
              <div className="w-full h-full bg-white/80 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">✨</div>
                  <div className="text-2xl font-bold gradient-text mb-2">LUMOS IPL</div>
                  <div className="text-gray-600">COOLMAX 50°F Technology</div>
                  <div className="mt-4 space-y-2">
                    <div className="bg-coolmax-blue/10 text-coolmax-blue px-3 py-1 rounded-full text-sm font-semibold">
                      ❄️ Ice-Cold Comfort
                    </div>
                    <div className="bg-lavender-100 text-lavender-600 px-3 py-1 rounded-full text-sm font-semibold">
                      ⚡ 999,999 Flashes
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-coral-400 rounded-full animate-bounce opacity-80" />
            <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-lavender-400 rounded-full animate-pulse opacity-60" />
          </div>
        </div>
      </div>

      {/* Slide Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
        <button
          onClick={togglePlayPause}
          className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200 shadow-lg"
        >
          {isPlaying ? '⏸️' : '▶️'}
        </button>
        
        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index 
                  ? 'bg-lavender-500 scale-125' 
                  : 'bg-white/50 hover:bg-white/80'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default HeroCarousel;