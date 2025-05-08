import React, { useState, useRef, useEffect } from "react";
import {
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  Star,
} from "lucide-react";
import { allCourses, skillsByTopic, topics } from "../../data/CoursesData";
import AllCourses from "./AllCourses";

const CoursesSection = () => {
  const [activeTab, setActiveTab] = useState("Data Science");
  const [activeSkill, setActiveSkill] = useState("");
  const [displayCount, setDisplayCount] = useState(4);

  const [skillsScrollPos, setSkillsScrollPos] = useState(0);
  const [showLeftSkillArrow, setShowLeftSkillArrow] = useState(false);
  const [showRightSkillArrow, setShowRightSkillArrow] = useState(true);

  const [coursesScrollPos, setCoursesScrollPos] = useState(0);
  const [showLeftCourseArrow, setShowLeftCourseArrow] = useState(false);
  const [showRightCourseArrow, setShowRightCourseArrow] = useState(true);

  const skillsContainerRef = useRef(null);
  const coursesContainerRef = useRef(null);

  // Get skills for the active tab
  const currentSkills = skillsByTopic[activeTab]
    ? Object.entries(skillsByTopic[activeTab]).map(([name, courses]) => ({
        name,
        learners: `${Math.floor(Math.random() * 900) + 100}K+ learners`,
      }))
    : [];

  // Get all courses for the active tab
  const allTabCourses = allCourses[activeTab] || [];

  // Filter courses by skill if an active skill is selected
  const filteredCourses = activeSkill
    ? allTabCourses.filter((course) => course.skills?.includes(activeSkill))
    : allTabCourses;

  // Number of courses to display (limited by displayCount)
  const displayedCourses = filteredCourses.slice(0, displayCount);

  // When active tab changes, reset active skill to the first skill
  useEffect(() => {
    if (currentSkills.length > 0) {
      setActiveSkill(currentSkills[0].name);
    } else {
      setActiveSkill("");
    }
    setDisplayCount(4); // Reset display count when changing tabs
  }, [activeTab]);

  // Check scroll positions for arrows visibility
  useEffect(() => {
    const checkSkillsScroll = () => {
      if (skillsContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } =
          skillsContainerRef.current;
        setSkillsScrollPos(scrollLeft);
        setShowLeftSkillArrow(scrollLeft > 10);
        setShowRightSkillArrow(scrollLeft < scrollWidth - clientWidth - 10);
      }
    };

    const checkCoursesScroll = () => {
      if (coursesContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } =
          coursesContainerRef.current;
        setCoursesScrollPos(scrollLeft);
        setShowLeftCourseArrow(scrollLeft > 10);
        setShowRightCourseArrow(scrollLeft < scrollWidth - clientWidth - 10);
      }
    };

    // Add scroll event listeners
    const skillsContainer = skillsContainerRef.current;
    const coursesContainer = coursesContainerRef.current;

    if (skillsContainer) {
      skillsContainer.addEventListener("scroll", checkSkillsScroll);
      checkSkillsScroll(); // Initial check
    }

    if (coursesContainer) {
      coursesContainer.addEventListener("scroll", checkCoursesScroll);
      checkCoursesScroll(); // Initial check
    }

    // Clean up event listeners
    return () => {
      if (skillsContainer)
        skillsContainer.removeEventListener("scroll", checkSkillsScroll);
      if (coursesContainer)
        coursesContainer.removeEventListener("scroll", checkCoursesScroll);
    };
  }, [currentSkills, displayedCourses]);

  // Scroll handlers
  const scrollSkills = (direction) => {
    if (skillsContainerRef.current) {
      const scrollAmount = 200;
      skillsContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const scrollCourses = (direction) => {
    if (coursesContainerRef.current) {
      const scrollAmount = 200;
      coursesContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // Load more courses handler
  const loadMoreCourses = () => {
    setDisplayCount((prev) => Math.min(prev + 4, filteredCourses.length));
  };

  const loadLessCourses = () => {
    setDisplayCount(4);
  };

  // Generate random rating (4.0 - 5.0)
  const getRandomRating = () => (Math.random() * 1 + 4).toFixed(1);

  // Generate random reviews count (100 - 5000)
  const getRandomReviews = () => {
    const reviews = Math.floor(Math.random() * 4900) + 100;
    return reviews > 1000 ? `${(reviews / 1000).toFixed(1)}K` : reviews;
  };

  return (
    <section className="py-12 bg-white overflow-hidden">
      <div className="xs:px-6 sm:px-2 sm:container sm:mx-auto ">
        {/* Section Header */}
        <div className="mb-5">
          <h2 className="text-3xl font-bold mb-1 text-gray-900">
            All the skills you need in one place
          </h2>
          <p className="text-base text-gray-600">
            From critical skills to technical topics, Byway supports your
            professional development.
          </p>
        </div>

        {/* Topics Navigation */}
        <div className="mb-8">
          <div className="flex space-x-6 border-b overflow-x-auto scrollbar-hide">
            {topics.map((topic) => (
              <button
                key={topic.name}
                className={`text-base pb-3 px-1 whitespace-nowrap transition-all duration-300 
                  ${
                    activeTab === topic.name
                      ? "border-b-2 border-black font-semibold text-black"
                      : "text-gray-500 hover:text-black"
                  }`}
                onClick={() => setActiveTab(topic.name)}
              >
                {topic.name}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Carousel */}
        <div className="relative mb-8">
          {showLeftSkillArrow && (
            <button
              onClick={() => scrollSkills("left")}
              className="absolute -left-3 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-1.5 shadow-md hover:bg-gray-50 z-10"
              aria-label="Scroll skills left"
            >
              <ChevronLeftIcon className="h-5 w-5" />
            </button>
          )}

          <div
            ref={skillsContainerRef}
            className="flex gap-3 overflow-x-auto scrollbar-hide scroll-smooth py-1"
          >
            {currentSkills.map((skill, index) => (
              <div
                key={`${skill.name}-${index}`}
                className={`flex-shrink-0 px-6 py-3 rounded-full cursor-pointer transition-all duration-300 ${
                  skill.name === activeSkill
                    ? "bg-black text-white shadow-sm font-medium"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                }`}
                onClick={() => setActiveSkill(skill.name)}
              >
                <div className="text-base font-medium">{skill.name}</div>
                <div className="text-xs text-gray-400">{skill.learners}</div>
              </div>
            ))}
          </div>

          {showRightSkillArrow && (
            <button
              onClick={() => scrollSkills("right")}
              className="absolute -right-3 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-1.5 shadow-md hover:bg-gray-50 z-10"
              aria-label="Scroll skills right"
            >
              <ChevronRightIcon className="h-5 w-5" />
            </button>
          )}
        </div>

        {/* Courses Section */}
        <h3 className="text-lg font-bold mb-5">
          {activeSkill ? `${activeSkill} Courses` : `All ${activeTab} Courses`}
        </h3>

        {displayedCourses.length > 0 ? (
          <>
            {/* Desktop Grid View */}
            <div className="hidden md:block">
              <div className="relative">
                <AllCourses />
              </div>
            </div>

            {/* Mobile View */}
            <div className="md:hidden grid grid-cols-1 gap-3">
              {displayedCourses.map((course) => (
                <div
                  key={course.id}
                  className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
                >
                  <div className="flex">
                    <div className="w-1/3">
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="w-2/3 p-2">
                      <h4 className="text-sm font-bold text-gray-900 mb-1 line-clamp-2">
                        {course.title}
                      </h4>
                      <p className="text-xs text-gray-500 mb-1 line-clamp-2">
                        {course.description}
                      </p>
                      <div className="flex items-center mb-1">
                        <span className="text-yellow-500 font-bold text-xs mr-1">
                          {getRandomRating()}
                        </span>
                        <div className="flex text-yellow-400 mr-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={10}
                              fill={
                                i < Math.floor(parseFloat(getRandomRating()))
                                  ? "currentColor"
                                  : "none"
                              }
                            />
                          ))}
                        </div>
                        <span className="text-gray-500 text-2xs">
                          ({getRandomReviews()})
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-900 font-bold text-xs">
                          {course.price || "$49.99"}
                        </span>
                        {course.bestseller && (
                          <span className="bg-yellow-100 text-yellow-800 text-2xs px-1 py-0.5 rounded">
                            Bestseller
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More Button */}
            {displayCount < filteredCourses.length && (
              <div className="text-center mt-6">
                <button
                  onClick={loadMoreCourses}
                  className="text-base px-5 py-2 bg-white border border-gray-300 rounded-md text-gray-700 font-medium hover:bg-gray-50 transition-colors duration-200"
                >
                  Load more courses
                </button>
              </div>
            )}
            {/* Show Less Button  */}
            {displayCount > 4 && (
              <div className="text-center mt-6">
                <button
                  onClick={loadLessCourses}
                  className="text-base px-5 py-2 bg-white border border-gray-300 rounded-md text-gray-700 font-medium hover:bg-gray-50 transition-colors duration-200"
                >
                  Show less
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="text-lg text-center text-gray-500 py-8">
            No courses available for this skill.
          </div>
        )}
      </div>
    </section>
  );
};

export default CoursesSection;
