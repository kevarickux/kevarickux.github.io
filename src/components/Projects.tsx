import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ProjectCard } from './ProjectCard';

const projects = [
  {
    title: "Video Streaming Platform",
    description: "UI/UX design for e-Video Cloud (EVC), an emerging cloud-based online video platform.",
    imageUrl: "https://i.imgur.com/c0LBzaF.png?w=600&h=450&fit=crop",
    tags: ["Web Design", "UX Research", "Prototype"],
    link: "https://example.com/evc"
  },
  {
    title: "E-commerce Furniture Store",
    description: "Clean, minimalist UI/UX design for a high-end furniture e-commerce platform. Focuses on a calming aesthetic and user-friendly shopping.",
    imageUrl: "https://i.imgur.com/Qw3qRcg.png?w=600&h=450&fit=crop",
    tags: ["Web Design", "E-Commerce", "Prototype"],
    link: "https://example.com/furniture"
  },
  {
    title: "Futuristic Landing Page",
    description: "Sleek and futuristic web design for a smart glasses brand. Combines high-tech visuals with a user-centric flow.",
    imageUrl: "https://i.imgur.com/BfWxq1h.png?w=600&h=450&fit=crop",
    tags: ["Web Design", "Futuristic UI", "Prototype"],
    link: "https://example.com/smartglasses"
  },
  {
    title: "Web-Based Taxi Reservation System",
    description: "A web-based taxi reservation system for 'Auto Cars' a long-standing taxi service. The design provides a fast and convenient booking experience",
    imageUrl: "https://i.imgur.com/5BJhmBK.png?w=600&h=450&fit=crop",
    tags: ["UX Research", "User Research", "Prototype"],
    link: "https://example.com/taxi"
  }
];

export function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  
  // Cards to show per view based on screen size
  const getCardsPerView = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) return 3; // lg screens
      if (window.innerWidth >= 768) return 2;  // md screens
      return 1; // sm screens
    }
    return 3; // default fallback
  };

  const [cardsPerView, setCardsPerView] = useState(getCardsPerView);

  // Update cards per view on window resize
  useEffect(() => {
    const handleResize = () => {
      setCardsPerView(getCardsPerView());
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  const maxIndex = Math.max(0, projects.length - cardsPerView);

  const scrollToIndex = (index: number) => {
    if (sliderRef.current) {
      const cardWidth = sliderRef.current.scrollWidth / projects.length;
      sliderRef.current.scrollTo({
        left: cardWidth * index,
        behavior: 'smooth'
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
    <section id="projects" className="max-w-7xl mx-auto px-6 py-16">
      <div className="space-y-12">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h2 className="text-3xl">Projects</h2>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>
          
          {/* Navigation Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={goToPrevious}
              disabled={currentIndex === 0}
              className="p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
              aria-label="Previous projects"
            >
              <ChevronLeft className="w-5 h-5 text-gray-700" />
            </button>
            <button
              onClick={goToNext}
              disabled={currentIndex >= maxIndex}
              className="p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
              aria-label="Next projects"
            >
              <ChevronRight className="w-5 h-5 text-gray-700" />
            </button>
          </div>
        </div>
        
        {/* Projects Slider */}
        <div className="relative overflow-hidden">
          <div
            ref={sliderRef}
            className="flex gap-8 overflow-x-auto scrollbar-hide scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {projects.map((project, index) => (
              <div
                key={index}
                className={`flex-none ${
                  cardsPerView === 1 ? 'w-full' : 
                  cardsPerView === 2 ? 'w-[calc(50%-1rem)]' : 
                  'w-[calc(33.333%-1.333rem)]'
                }`}
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  imageUrl={project.imageUrl}
                  tags={project.tags}
                  link={project.link}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Dots Indicator */}
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