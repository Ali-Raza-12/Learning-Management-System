import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    logo: "Booz | Allen | Hamilton",
    title:
      "Booz Allen Hamilton Unlocks Talent Retention and Productivity Through Upskilling",
    stats: [
      {
        percentage: "93%",
        description: "retention rate among participating employees",
      },
      {
        percentage: "65%",
        description:
          "of learners noted a positive impact on their productivity",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
  },
  {
    logo: "Tech | Solutions | Global",
    title: "Tech Solutions Global Achieves Digital Transformation Excellence",
    stats: [
      {
        percentage: "87%",
        description: "digital adoption rate across departments",
      },
      {
        percentage: "72%",
        description: "improvement in process efficiency",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
  },
  {
    logo: "Innovation | Labs | Corp",
    title: "Innovation Labs Corp Revolutionizes Customer Experience",
    stats: [
      {
        percentage: "95%",
        description: "customer satisfaction score",
      },
      {
        percentage: "78%",
        description: "increase in customer engagement",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
  },
];

const trendingCategories = {
  Business: [
    { name: "Leadership", learners: "1,284,989" },
    { name: "Management", learners: "987,654" },
    { name: "Communication", learners: "876,543" },
  ],
  Technology: [
    { name: "Python", learners: "2,345,678" },
    { name: "Data Science", learners: "1,876,543" },
    { name: "Machine Learning", learners: "1,234,567" },
  ],
  Design: [
    { name: "UI/UX", learners: "876,543" },
    { name: "Graphic Design", learners: "765,432" },
    { name: "Figma", learners: "654,321" },
  ],
};

const TrendingNow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto">
        {/* Trending Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Trending Now
          </h2>
          <div className="mb-8">
            <div className="flex items-center mb-2">
              <h3 className="text-xl font-bold text-gray-900">
                ChatGPT is a top skill
              </h3>
              <a
                href="#"
                className="text-primary hover:text-primary-hover text-sm ml-2 font-medium"
              >
                See ChatGPT courses →
              </a>
            </div>
            <p className="text-sm text-gray-600">4,284,989 learners</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {Object.entries(trendingCategories).map(([category, items]) => (
              <div
                key={category}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-semibold mb-4 text-gray-800">
                  {category}
                </h3>
                <ul className="space-y-4">
                  {items.map((item) => (
                    <li
                      key={item.name}
                      className="border-b border-gray-100 pb-3 last:border-0"
                    >
                      <a
                        href="#"
                        className="text-primary hover:text-primary-hover block font-medium"
                      >
                        {item.name} →
                      </a>
                      <p className="text-sm text-gray-600 mt-1">
                        {item.learners} learners
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <button className="mt-6 border border-primary text-primary hover:bg-primary hover:text-white px-6 py-2 rounded-md text-sm font-medium transition-colors duration-200">
            Show all trending skills →
          </button>
        </div>

        {/* Slides Section */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Content Section */}
            <div className="w-full md:w-1/2 p-8 md:p-12">
              <h3 className="text-xl font-light text-gray-500 mb-6">
                {slides[currentSlide].logo}
              </h3>

              <h2 className="text-3xl font-bold mb-8 text-gray-800 leading-tight">
                {slides[currentSlide].title}
              </h2>

              <div className="space-y-8 mb-12">
                {slides[currentSlide].stats.map((stat, index) => (
                  <div key={index}>
                    <h4 className="text-5xl font-bold text-gray-900">
                      {stat.percentage}
                    </h4>
                    <p className="text-gray-600 mt-2 max-w-md">
                      {stat.description}
                    </p>
                  </div>
                ))}
              </div>

              <button className="bg-purple-600 text-white px-8 py-3 rounded-full font-medium hover:bg-purple-700 transition-colors duration-200">
                Read full story →
              </button>

              {/* Pagination */}
              <div className="mt-12 flex items-center space-x-4">
                <button
                  onClick={prevSlide}
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-6 h-6 text-gray-600" />
                </button>

                <div className="flex space-x-2">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        currentSlide === index ? "bg-purple-600" : "bg-gray-300"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextSlide}
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-6 h-6 text-gray-600" />
                </button>
              </div>
            </div>

            {/* Image Section */}
            <div className="w-full md:w-1/2">
              <img
                src={slides[currentSlide].image}
                alt="Business presentation"
                className="w-full h-full object-cover min-h-[400px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingNow;
