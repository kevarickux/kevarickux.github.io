import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const extrasProjects = [
  {
    imageUrl: "https://i.imgur.com/CkDTX8o.png?w=600&h=450&fit=crop",
    tags: ["Belnder 3d","Low Poly", "Beginner"]
  },
  {
    imageUrl: "https://i.imgur.com/8kMADII.png?w=600&h=450&fit=crop",
    tags: ["Blender 3d", "Sword Modelling", "Beginner"]
  },
  {
    imageUrl: "https://i.imgur.com/dCGTa8o.png?w=600&h=450&fit=crop",
    tags: ["Blender 3d", "Low Poly", "Beginner"]
  }
];

export function Extras() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const getCardsPerView = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 768) return 2; // 2 cards for md and up
      return 1; // 1 card for small screens
    }
    return 2; // default fallback
  };

  const [cardsPerView, setCardsPerView] = useState(getCardsPerView);

  useEffect(() => {
    const handleResize = () => {
      setCardsPerView(getCardsPerView());
    };
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  const maxIndex = Math.max(0, extrasProjects.length - cardsPerView);

  const scrollToIndex = (index: number) => {
    if (sliderRef.current) {
      const cardWidth = sliderRef.current.scrollWidth / extrasProjects.length;
      sliderRef.current.scrollTo({
        left: cardWidth * index,
        behavior: 'smooth',
      });
    }
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    const newIndex = Math.max(0, currentIndex - 1);
    scrollToIndex(newIndex);
  };

  const goToNext = () => {
    const newIndex = Math.min(maxIndex, currentIndex + 1);
    scrollToIndex(newIndex);
  };

  return (
    <section id="extras" className="max-w-7xl mx-auto px-6 py-16">
      <div className="space-y-12">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h2 className="text-3xl">Extras</h2>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={goToPrevious}
              disabled={currentIndex === 0}
              className="p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
              aria-label="Previous extras"
            >
              <ChevronLeft className="w-5 h-5 text-gray-700" />
            </button>
            <button
              onClick={goToNext}
              disabled={currentIndex >= maxIndex}
              className="p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
              aria-label="Next extras"
            >
              <ChevronRight className="w-5 h-5 text-gray-700" />
            </button>
          </div>
        </div>
        <div className="relative overflow-hidden">
          <div
            ref={sliderRef}
            className="flex gap-8 overflow-x-auto scrollbar-hide scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {extrasProjects.map((project, index) => (
              <div
                key={index}
                className={`flex-none ${
                  cardsPerView === 1 ? 'w-full' : 
                  cardsPerView === 2 ? 'w-[calc(50%-1rem)]' : 
                  'w-[calc(33.333%-1.333rem)]'
                }`}
              >
                <div className="w-full aspect-[16/9] rounded-xl overflow-hidden shadow-lg bg-gray-100">
                  <img
                    src={project.imageUrl}
                    alt={`Extras Project ${index + 1}`}
                    className="w-full h-full object-cover"
                    width={600}
                    height={450}
                    loading="lazy"
                    decoding="async"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                </div>
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags && project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-xs font-medium shadow-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center space-x-2">
          {Array.from({ length: maxIndex + 1 }, (_, index) => (
            <button
              key={index}
              onClick={() => scrollToIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                index === currentIndex
                  ? 'bg-blue-500 w-6'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 