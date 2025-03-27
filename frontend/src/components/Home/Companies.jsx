import React, { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { allCourses } from "../../data/CoursesData";

const Companies = () => {
  // Companies marquee state
  const [scrollX, setScrollX] = useState(0);
  const containerRef = useRef(null);

  // Courses carousel state
  const [showLeftCourseArrow, setShowLeftCourseArrow] = useState(false);
  const [showRightCourseArrow, setShowRightCourseArrow] = useState(true);
  const coursesContainerRef = useRef(null);
  const allCoursesArray = Object.values(allCourses).flat();

  // Companies data
  const companies = [
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
      name: "Microsoft",
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
      name: "Amazon",
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      name: "Google",
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
      name: "Apple",
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
      name: "Facebook",
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Intel_logo_%282006-2020%29.svg",
      name: "Intel",
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg",
      name: "Samsung",
    },
  ];

  // Companies marquee animation
  useEffect(() => {
    const animate = () => {
      setScrollX((prev) => {
        const newScrollX = prev + 0.75;
        if (
          containerRef.current?.firstElementChild &&
          newScrollX >=
            (containerRef.current.firstElementChild.offsetWidth *
              companies.length) /
              2
        ) {
          return 0;
        }
        return newScrollX;
      });
    };

    const animationId = setInterval(animate, 30);
    return () => clearInterval(animationId);
  }, [companies.length]);

  // Courses carousel scroll handlers
  const scrollCourses = (direction) => {
    if (coursesContainerRef.current) {
      const scrollAmount = 400;
      coursesContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // Check scroll position for arrows visibility
  useEffect(() => {
    const checkCoursesScroll = () => {
      if (coursesContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = coursesContainerRef.current;
        setShowLeftCourseArrow(scrollLeft > 10);
        setShowRightCourseArrow(scrollLeft < scrollWidth - clientWidth - 10);
      }
    };

    const coursesContainer = coursesContainerRef.current;
    if (coursesContainer) {
      coursesContainer.addEventListener("scroll", checkCoursesScroll);
      checkCoursesScroll(); // Initial check
    }

    return () => {
      if (coursesContainer) {
        coursesContainer.removeEventListener("scroll", checkCoursesScroll);
      }
    };
  }, [allCoursesArray]);

  return (
    <section className="container mx-auto py-12 md:py-16 overflow-hidden">
      {/* Companies Section */}
      <div className="relative mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Trusted by over 16,000 companies worldwide
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join the community of industry leaders who trust Byway for their
            learning needs
          </p>
        </div>

        {/* Logo Marquee */}
        <div
          ref={containerRef}
          className="flex items-center space-x-16 lg:space-x-24 py-4"
          style={{
            transform: `translateX(-${scrollX}px)`,
            width: "fit-content",
          }}
        >
          {[...companies, ...companies].map((company, index) => (
            <img
              key={`${company.name}-${index}`}
              src={company.logo}
              alt={company.name}
              className="h-14 object-contain opacity-70 hover:opacity-100 transition-opacity"
              loading="lazy"
            />
          ))}
        </div>

        {/* Gradient fade effects */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />
      </div>

      {/* Courses Section */}
      <div className="mb-20">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Learners are viewing
          </h2>
          <p className="text-lg text-gray-600">
            Discover our comprehensive catalog of courses
          </p>
        </div>

        <div className="relative">
          {showLeftCourseArrow && (
            <button
              onClick={() => scrollCourses("left")}
              className="absolute top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 z-10 border border-gray-200"
              aria-label="Scroll courses left"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>
          )}

          <div
            ref={coursesContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth py-2 px-2"
          >
            {allCoursesArray.map((course) => (
              <div
                key={course.id}
                className="flex-shrink-0 w-96 bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
              >
                <div className="relative">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-40 object-cover"
                  />
                  {course.bestseller && (
                    <div className="absolute top-2 left-2 bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">
                      Bestseller
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                    {course.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-2">
                    By {course.authors.join(", ")}
                  </p>

                  <div className="flex items-center mb-3">
                    <span className="text-yellow-500 font-bold mr-1">
                      {course.rating}
                    </span>
                    <div className="flex text-yellow-400 mr-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          fill={
                            i < Math.floor(course.rating)
                              ? "currentColor"
                              : "none"
                          }
                        />
                      ))}
                    </div>
                    <span className="text-gray-500 text-sm">
                      ({course.reviews.toLocaleString()})
                    </span>
                  </div>

                  <div className="flex items-center mb-4">
                    <span className="text-gray-900 font-bold text-lg">
                      ${course.price}
                    </span>
                    {course.originalPrice && (
                      <span className="text-gray-500 text-sm line-through ml-2">
                        ${course.originalPrice}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {course.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {course.description}
                  </p>

                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>{course.learners}</span>
                    <button className="text-blue-600 hover:text-blue-700 font-medium">
                      Enroll Now →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {showRightCourseArrow && (
            <button
              onClick={() => scrollCourses("right")}
              className="absolute -right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 z-10 border border-gray-200"
              aria-label="Scroll courses right"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Companies;