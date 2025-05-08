import { useState } from "react";
import {
  FaStar,
  FaRegStar,
} from "react-icons/fa";

import { useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { allCourses } from "../../data/CoursesData";

const AllCourses = () => {
  // Companies marquee state
  const [scrollX, setScrollX] = useState(0);
  const containerRef = useRef(null);

  // Courses carousel state
  const [showLeftCourseArrow, setShowLeftCourseArrow] = useState(false);
  const [showRightCourseArrow, setShowRightCourseArrow] = useState(true);
  const coursesContainerRef = useRef(null);
  const allCoursesArray = Object.values(allCourses).flat();
  const [activeTab, setActiveTab] = useState("Description");
  const [expandedModules, setExpandedModules] = useState([]);

  const toggleModule = (index) => {
    setExpandedModules((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const renderRatingStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<FaStar key={i} className="text-yellow-400" />);
      } else if (i === fullStars && hasHalfStar) {
        stars.push(<FaStar key={i} className="text-yellow-400 opacity-70" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-yellow-400" />);
      }
    }
    return stars;
  };

  // Companies marquee animation
  useEffect(() => {
    const animate = () => {
      setScrollX((prev) => {
        const newScrollX = prev + 0.5;
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
  }, []);

  // Courses carousel scroll handlers
  const scrollCourses = (direction) => {
    if (coursesContainerRef.current) {
      const scrollAmount = 300;
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
        const { scrollLeft, scrollWidth, clientWidth } =
          coursesContainerRef.current;
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

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Mouse drag handlers
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - coursesContainerRef.current.offsetLeft);
    setScrollLeft(coursesContainerRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - coursesContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    coursesContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <>
      {/* More Courses */}
      <div className="">
        <div className="mb-4 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            Learners are viewing
          </h2>
          <p className="text-base text-gray-600">
            Discover our comprehensive catalog of courses
          </p>
        </div>

        <div className="relative">
          {showLeftCourseArrow && (
            <button
              onClick={() => scrollCourses("left")}
              className="absolute -left-4 md:-left-3 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-1.5 shadow-md hover:bg-gray-50 z-10 border border-gray-200"
              aria-label="Scroll courses left"
            >
              <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 text-gray-700" />
            </button>
          )}

          <div
            ref={coursesContainerRef}
            className="flex gap-3 md:gap-5 overflow-x-auto scrollbar-hide scroll-smooth py-1 px-1 md:px-2 cursor-grab active:cursor-grabbing"
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
          >
            {allCoursesArray.map((course) => (
              <div
                key={course.id}
                className="flex-shrink-0 w-[280px] sm:w-80 bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
              >
                <div className="relative">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-32 sm:h-36 object-cover"
                  />
                  {course.bestseller && (
                    <div className="absolute top-1 left-1 bg-yellow-100 text-yellow-800 text-[10px] sm:text-xs px-1.5 py-0.5 rounded">
                      Bestseller
                    </div>
                  )}
                </div>
                <div className="p-3 sm:p-4">
                  <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-1 line-clamp-2">
                    {course.title}
                  </h3>
                  <p className="text-xs text-gray-500 mb-1 line-clamp-1">
                    By {course.authors.join(", ")}
                  </p>

                  <div className="flex items-center mb-1.5">
                    <span className="text-yellow-500 font-bold text-xs sm:text-sm mr-1">
                      {course.rating}
                    </span>
                    <div className="flex text-yellow-400 mr-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={12}
                          className="w-3 h-3 sm:w-3.5 sm:h-3.5"
                          fill={
                            i < Math.floor(course.rating)
                              ? "currentColor"
                              : "none"
                          }
                        />
                      ))}
                    </div>
                    <span className="text-gray-500 text-[10px] sm:text-xs">
                      ({course.reviews.toLocaleString()})
                    </span>
                  </div>

                  <div className="flex items-center mb-2">
                    <span className="text-gray-900 font-bold text-sm sm:text-base">
                      ${course.price}
                    </span>
                    {course.originalPrice && (
                      <span className="text-gray-500 text-[10px] sm:text-xs line-through ml-1">
                        ${course.originalPrice}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-1 mb-2">
                    {course.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-[10px] sm:text-xs bg-blue-100 text-blue-800 px-1 py-0.5 rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <p className="text-gray-600 text-xs mb-2 line-clamp-2">
                    {course.description}
                  </p>

                  <div className="flex justify-between items-center text-[10px] sm:text-xs text-gray-500">
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
              className="absolute -right-4 md:-right-3 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-1.5 shadow-md hover:bg-gray-50 z-10 border border-gray-200"
              aria-label="Scroll courses right"
            >
              <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-gray-700" />
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default AllCourses;
