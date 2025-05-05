import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Testimonials as TestimonialData } from "../../data/dummy";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(4);
  const totalItems = TestimonialData.length;
  const totalPages = Math.ceil(totalItems / visibleItems);

  // Handle responsive number of visible items
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setVisibleItems(4);
      } else if (window.innerWidth >= 768) {
        setVisibleItems(2);
      } else {
        setVisibleItems(1);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => {
      const nextIndex = prev + visibleItems;
      return nextIndex >= totalItems ? 0 : nextIndex;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => {
      const prevIndex = prev - visibleItems;
      return prevIndex < 0
        ? totalItems - (totalItems % visibleItems || visibleItems)
        : prevIndex;
    });
  };

  const goToPage = (pageIndex) => {
    setCurrentIndex(pageIndex * visibleItems);
  };

  // Get currently visible testimonials
  const getVisibleTestimonials = () => {
    const testimonials = [];
    for (let i = 0; i < visibleItems; i++) {
      const index = (currentIndex + i) % totalItems;
      testimonials.push(TestimonialData[index]);
    }
    return testimonials;
  };

  return (
    <section className="py-12 md:py-16 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
              What Our Students Say
            </h2>
            <p className="text-base text-gray-600">
              Real stories from our amazing learners
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-white shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105 active:scale-95"
              aria-label="Previous testimonials"
            >
              <ChevronLeft className="w-5 h-5 text-gray-700" />
            </button>
            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-white shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105 active:scale-95"
              aria-label="Next testimonials"
            >
              <ChevronRight className="w-5 h-5 text-gray-700" />
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{
              transform: `translateX(-${(currentIndex * 100) / visibleItems}%)`,
              width: `${(totalItems * 100) / visibleItems}%`,
            }}
          >
            {TestimonialData.map((testimonial, index) => (
              <div
                key={index}
                className={`flex-shrink-0 transition-all duration-200 ${
                  visibleItems === 4
                    ? "w-1/4"
                    : visibleItems === 2
                    ? "w-1/2"
                    : "w-full"
                } px-2`}
              >
                <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-md hover:shadow-sm transition-all duration-200 h-full transform hover:-translate-y-0.5">
                  <div className="space-y-3">
                    <Quote className="w-10 h-10 text-blue-100" />
                    <p className="text-base text-gray-600 line-clamp-4 italic">
                      "{testimonial.para}"
                    </p>
                    <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
                      <img
                        src={testimonial.person}
                        alt={testimonial.name}
                        className="w-10 h-10 rounded-full ring-2 ring-offset-2 ring-blue-100"
                      />
                      <div>
                        <h4 className="font-bold text-gray-900 text-sm">
                          {testimonial.name}
                        </h4>
                        <p className="text-xs text-blue-600">
                          {testimonial.exp}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-6 gap-1.5">
            {Array.from({ length: totalPages }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToPage(idx)}
                className={`rounded-full transition-all duration-200 ${
                  Math.floor(currentIndex / visibleItems) === idx
                    ? "w-5 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600"
                    : "w-1.5 h-1.5 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to page ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;