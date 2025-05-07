import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Testimonials as TestimonialData } from "../../data/dummy";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(3);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const containerRef = useRef(null);
  const totalItems = TestimonialData.length;

  // Handle responsive number of visible items
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setVisibleItems(3);
      } else if (window.innerWidth >= 768) {
        setVisibleItems(2);
      } else {
        setVisibleItems(1);
      }
      setCurrentIndex(0); // Reset to first item on resize
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex, visibleItems]);

  const nextSlide = () => {
    setCurrentIndex((prev) => {
      if (prev + visibleItems >= totalItems) return 0;
      return prev + 1;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => {
      if (prev === 0) return totalItems - visibleItems;
      return prev - 1;
    });
  };

  const goToSlide = (index) => {
    if (index < 0) index = totalItems - visibleItems;
    if (index >= totalItems - visibleItems + 1) index = 0;
    setCurrentIndex(index);
  };

  // Touch event handlers for mobile swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) nextSlide();
    if (touchStart - touchEnd < -50) prevSlide();
  };

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 md:mb-12">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
              What Our Students Say
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-lg">
              Real stories from our amazing learners
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-white shadow-sm hover:shadow-md transition-all duration-200 hover:bg-gray-50 active:bg-gray-100"
              aria-label="Previous testimonials"
            >
              <ChevronLeft className="w-5 h-5 text-gray-700" />
            </button>
            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-white shadow-sm hover:shadow-md transition-all duration-200 hover:bg-gray-50 active:bg-gray-100"
              aria-label="Next testimonials"
            >
              <ChevronRight className="w-5 h-5 text-gray-700" />
            </button>
          </div>
        </div>

        <div
          ref={containerRef}
          className="relative overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{
              transform: `translateX(-${(currentIndex * 100) / visibleItems}%)`,
            }}
          >
            {TestimonialData.map((testimonial, index) => (
              <div
                key={index}
                className={`flex-shrink-0 px-3 transition-all duration-200 ${
                  visibleItems === 3
                    ? "w-1/3"
                    : visibleItems === 2
                    ? "w-1/2"
                    : "w-full"
                }`}
              >
                <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-all duration-200 h-full flex flex-col">
                  <div className="flex-grow space-y-4">
                    <Quote className="w-8 h-8 text-blue-100" />
                    <p className="text-sm sm:text-base text-gray-600 line-clamp-4 italic">
                      "{testimonial.para}"
                    </p>
                  </div>
                  <div className="flex items-center gap-4 pt-4 mt-4 border-t border-gray-100">
                    <img
                      src={testimonial.person}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-blue-50"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {testimonial.name}
                      </h4>
                      <p className="text-xs sm:text-sm text-blue-600">
                        {testimonial.exp}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-8 gap-2">
          {Array.from({ length: totalItems - visibleItems + 1 }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`rounded-full transition-all duration-200 ${
                currentIndex === idx
                  ? "w-6 h-2 bg-blue-600"
                  : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;