import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    logo: "Booz | Allen | Hamilton",
    title: "Booz Allen Hamilton Unlocks Talent Retention and Productivity Through Upskilling",
    stats: [
      {
        percentage: "93%",
        description: "retention rate among participating employees",
      },
      {
        percentage: "65%",
        description: "of learners noted a positive impact on their productivity",
      },
    ],
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
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
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
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
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
  },
];

const trendingCategories = {
  Development: [
    { name: "Python", learners: "47,702,363" },
    { name: "Web Development", learners: "14,002,371" },
    { name: "Data Science", learners: "7,774,335" },
  ],
  Design: [
    { name: "Blender", learners: "2,906,476" },
    { name: "Graphic Design", learners: "4,490,035" },
    { name: "User Experience (UX) Design", learners: "2,067,235" },
  ],
  Business: [
    {
      name: "PMI Project Management Professional (PMP)",
      learners: "2,556,274",
    },
    { name: "Microsoft Power BI", learners: "4,621,423" },
    { name: "Project Management", learners: "3,963,510" },
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
    <section className="py-12 px-4 md:px-6 bg-white">
      <div className="container mx-auto">
        {/* Trending Section */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-200">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Trending Now</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <div>
              <div className="mb-5">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  ChatGPT is a top skill
                </h3>
                <div className="flex items-center space-x-2 mb-8">
                  <span className="text-gray-600 text-sm">
                    4,290,073 learners
                  </span>
                  <span className="text-gray-300">•</span>
                  <a
                    href="#"
                    className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                  >
                    See courses →
                  </a>
                </div>

                <button className="text-blue-600 text-base border-2 border-blue-500 px-5 py-2.5 rounded-md hover:bg-blue-50 font-medium transition-colors duration-200">
                  Show all trending skills →
                </button>
              </div>
            </div>

            {Object.entries(trendingCategories).map(([category, items]) => (
              <div key={category}>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  {category}
                </h3>
                <div className="space-y-4">
                  {items.map((item) => (
                    <button
                      key={item.name}
                      className="group w-full text-left transition-colors duration-200"
                    >
                      <div className="space-y-1.5">
                        <div className="text-base font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200 flex items-center">
                          {item.name}
                          <span className="transform translate-x-0 group-hover:translate-x-1 transition-transform duration-200 ml-1">
                            →
                          </span>
                        </div>
                        <p className="text-gray-500 text-sm">
                          {item.learners} learners
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Slides Section */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
          <div className="flex flex-col md:flex-row">
            {/* Content Section */}
            <div className="w-full md:w-1/2 p-6 md:p-8">
              <h3 className="text-base text-gray-500 mb-4">
                {slides[currentSlide].logo}
              </h3>

              <h2 className="text-2xl font-bold mb-6 text-gray-900 leading-tight">
                {slides[currentSlide].title}
              </h2>

              <div className="space-y-6 mb-8">
                {slides[currentSlide].stats.map((stat, index) => (
                  <div key={index}>
                    <h4 className="text-3xl font-bold text-gray-900 mb-2">
                      {stat.percentage}
                    </h4>
                    <p className="text-gray-600 text-sm max-w-md">
                      {stat.description}
                    </p>
                  </div>
                ))}
              </div>

              <button className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-md font-medium hover:from-blue-700 hover:to-blue-600 transition-all duration-200 shadow-sm hover:shadow">
                Read full story →
              </button>

              {/* Navigation */}
              <div className="mt-10 flex items-center space-x-4">
                <button
                  onClick={prevSlide}
                  className="p-1.5 rounded-full hover:bg-gray-100 transition-colors border border-gray-200"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-4 h-4 text-gray-600" />
                </button>

                <div className="flex space-x-1.5">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                        currentSlide === index
                          ? "bg-blue-600"
                          : "bg-gray-200 hover:bg-gray-300"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextSlide}
                  className="p-1.5 rounded-full hover:bg-gray-100 transition-colors border border-gray-200"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-4 h-4 text-gray-600" />
                </button>
              </div>
            </div>

            {/* Image Section */}
            <div className="w-full md:w-1/2">
              <img
                src={slides[currentSlide].image}
                alt="Business presentation"
                className="w-full h-full object-cover min-h-[350px] md:min-h-[400px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingNow;