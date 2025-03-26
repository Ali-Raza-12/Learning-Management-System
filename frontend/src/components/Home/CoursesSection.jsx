import React from "react";
import { useState, useRef, useEffect } from "react";
import { useFloating, offset, flip, shift, arrow } from "@floating-ui/react";
import { useHover, useInteractions } from "@floating-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

function Tooltip({ children, content }) {
  const [isOpen, setIsOpen] = useState(false);
  const arrowRef = useRef(null);

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    placement: "top",
    middleware: [offset(10), flip(), shift(), arrow({ element: arrowRef })],
  });

  const hover = useHover(context);
  const { getReferenceProps, getFloatingProps } = useInteractions([hover]);

  return (
    <div ref={refs.setReference} {...getReferenceProps()}>
      {children}
      {isOpen && (
        <div
          ref={refs.setFloating}
          style={floatingStyles}
          className="bg-gray-900 text-white p-2 rounded text-sm z-50"
          {...getFloatingProps()}
        >
          {content}
          <div
            ref={arrowRef}
            className="absolute bg-gray-900 w-2 h-2 rotate-45 -bottom-1"
            style={{ left: "calc(50% - 4px)" }}
          />
        </div>
      )}
    </div>
  );
}

const CoursesSection = () => {
  const [activeTab, setActiveTab] = useState("Data Science");
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showAllCourses, setShowAllCourses] = useState(false);
  const containerRef = useRef(null);

  const allCourses = {
    "Data Science": [
      {
        id: 1,
        title: "Machine Learning A-Z: AI, Python & R + ChatGPT Prize [2025]",
        authors: ["Kirill Eremenko", "Hadelin de Ponteves"],
        rating: 4.5,
        reviews: "195,302",
        price: 13.99,
        originalPrice: 89.99,
        image: "https://img-c.udemycdn.com/course/480x270/950390_270f_3.jpg",
        bestseller: true,
        description:
          "Learn to create Machine Learning Algorithms in Python and R from two Data Science experts. Code templates included.",
      },
    ],
    "Web Development": [
      {
        id: 5,
        title: "The Complete Web Developer in 2025",
        authors: ["Andrei Neagoie"],
        rating: 4.7,
        reviews: "245,123",
        price: 16.99,
        originalPrice: 94.99,
        image: "https://img-c.udemycdn.com/course/480x270/1430746_2f43_10.jpg",
        bestseller: true,
        description:
          "Learn to code and become a Web Developer in 2025 with HTML, CSS, Javascript, React, Node.js, Machine Learning & more!",
      },
    ],
  };

  const topics = [
    { name: "Data Science", learners: "4M+ learners" },
    { name: "IT Certifications", learners: "7M+ learners" },
    { name: "Leadership", learners: "477M+ learners" },
    { name: "Web Development", learners: "8M+ learners" },
    { name: "Communication", learners: "2M+ learners" },
    { name: "Business Analytics & Intelligence", learners: "4M+ learners" },
  ];

  const skills = [
    { name: "ChatGPT", learners: "4M+ learners" },
    { name: "Data Science", learners: "7M+ learners" },
    { name: "Python", learners: "477M+ learners" },
    { name: "Machine Learning", learners: "8M+ learners" },
    { name: "Deep Learning", learners: "2M+ learners" },
    { name: "Artificial Intelligence (AI)", learners: "4M+ learners" },
    { name: "Statistics", learners: "1M+ learners" },
    { name: "Natural Language", learners: "807,660 learners" },
  ];

  useEffect(() => {
    const checkScroll = () => {
      if (containerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
        setScrollPosition(scrollLeft);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", checkScroll);
      return () => container.removeEventListener("scroll", checkScroll);
    }
  }, []);

  const scrollSkills = (direction) => {
    if (containerRef.current) {
      const scrollAmount = 200;
      containerRef.current.scrollLeft +=
        direction === "left" ? -scrollAmount : scrollAmount;
    }
  };

  const displayedCourses = allCourses[activeTab] || [];
  const coursesToShow = showAllCourses
    ? displayedCourses
    : displayedCourses.slice(0, 4);

  const canScrollLeft = scrollPosition > 0;
  const canScrollRight =
    containerRef.current &&
    scrollPosition <
      containerRef.current.scrollWidth - containerRef.current.clientWidth;

  return (
    <section className="">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-2">
          All the skills you need in one place
        </h1>
        <p className="text-gray-600 mb-8">
          From critical skills to technical topics, Udemy supports your
          professional development.
        </p>

        {/* Topics Navigation */}
        <div className="flex space-x-6 border-b mb-8 overflow-x-auto">
          {topics.map((topic) => (
            <button
              key={topic.name}
              className={`pb-4 px-2 whitespace-nowrap transition-colors duration-200 ${
                activeTab === topic.name
                  ? "border-b-2 border-black font-semibold"
                  : "text-gray-600 hover:text-gray-900"
              }`}
              onClick={() => setActiveTab(topic.name)}
            >
              {topic.name}
            </button>
          ))}
        </div>

        {/* Skills Carousel */}
        <div className="relative mb-12">
          <div
            ref={containerRef}
            className="flex space-x-4 overflow-x-auto scrollbar-hide scroll-smooth"
            style={{ scrollBehavior: "smooth" }}
          >
            {skills.map((skill) => (
              <Tooltip
                key={skill.name}
                content={`${skill.learners} are learning ${skill.name}`}
              >
                <div
                  className={`flex-shrink-0 px-6 py-3 rounded-full cursor-pointer transition-colors duration-200 ${
                    skill.name === "Machine Learning"
                      ? "bg-gray-900 text-white"
                      : "bg-gray-100 hover:bg-gray-200"
                  }`}
                >
                  <div className="font-semibold">{skill.name}</div>
                  <div className="text-sm text-gray-500">{skill.learners}</div>
                </div>
              </Tooltip>
            ))}
          </div>
          {canScrollLeft && (
            <button
              onClick={() => scrollSkills("left")}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors duration-200"
            >
              <ChevronLeftIcon className="h-6 w-6" />
            </button>
          )}
          {canScrollRight && (
            <button
              onClick={() => scrollSkills("right")}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors duration-200"
            >
              <ChevronRightIcon className="h-6 w-6" />
            </button>
          )}
        </div>

        {/* Course Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coursesToShow.map((course) => (
            <Tooltip
              key={course.id}
              content={
                <div className="max-w-xs">
                  <h4 className="font-bold mb-2">{course.title}</h4>
                  <p className="text-sm">{course.description}</p>
                  <ul className="mt-2 text-sm">
                    <li>✓ Updated for 2025</li>
                    <li>✓ Complete course materials</li>
                    <li>✓ Certificate upon completion</li>
                  </ul>
                </div>
              }
            >
              <div className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-200">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2">{course.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">
                    {course.authors.join(", ")}
                  </p>
                  <div className="flex items-center mb-2">
                    <span className="text-orange-400 font-bold mr-1">
                      {course.rating}
                    </span>
                    <div className="flex text-orange-400">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(course.rating)
                              ? "fill-current"
                              : "fill-gray-300"
                          }`}
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 ml-1">
                      ({course.reviews})
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className="font-bold text-lg">${course.price}</span>
                    <span className="text-sm text-gray-600 line-through ml-2">
                      ${course.originalPrice}
                    </span>
                  </div>
                  {course.bestseller && (
                    <span className="inline-block bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded mt-2">
                      Bestseller
                    </span>
                  )}
                </div>
              </div>
            </Tooltip>
          ))}
        </div>

        {displayedCourses.length > 4 && (
          <button
            onClick={() => setShowAllCourses(!showAllCourses)}
            className="mt-8 border border-purple-600 text-purple-600 px-6 py-3 rounded-md hover:bg-purple-50 transition-colors duration-200 font-semibold"
          >
            {showAllCourses
              ? "Show less courses"
              : `Show all ${activeTab} courses`}
          </button>
        )}
      </div>
    </section>
  );
};

export default CoursesSection;
