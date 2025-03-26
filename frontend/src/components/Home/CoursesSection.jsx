import React, { useState, useRef, useEffect } from "react";
import {
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
} from "lucide-react";
import { allCourses, skillsByTopic, topics } from "../../data/CoursesData";
// import Tooltip from "./Tooltip";

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
      const scrollAmount = 300;
      skillsContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const scrollCourses = (direction) => {
    if (coursesContainerRef.current) {
      const scrollAmount = 300;
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

  return (
    <section className="py-16 px-4 bg-white overflow-hidden">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="mb-6">
          <h2 className="text-4xl font-bold mb-2 text-gray-900">
            All the skills you need in one place
          </h2>
          <p className="text-lg text-gray-600">
            From critical skills to technical topics, Udemy supports your
            professional development.
          </p>
        </div>

        {/* Topics Navigation */}
        <div className="mb-10">
          <div className="flex space-x-8 border-b overflow-x-auto scrollbar-hide">
            {topics.map((topic) => (
              <button
                key={topic.name}
                className={`pb-4 px-2 whitespace-nowrap transition-all duration-300 
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
        <div className="relative mb-10">
          {showLeftSkillArrow && (
            <button
              onClick={() => scrollSkills("left")}
              className="absolute -left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-50 z-10"
              aria-label="Scroll skills left"
            >
              <ChevronLeftIcon className="h-7 w-7" />
            </button>
          )}

          <div
            ref={skillsContainerRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth py-2"
          >
            {currentSkills.map((skill, index) => (
              <div
                key={`${skill.name}-${index}`}
                className={`flex-shrink-0 px-8 py-4 rounded-full cursor-pointer transition-all duration-300 ${
                  skill.name === activeSkill
                    ? "bg-black text-white shadow-sm font-medium"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                }`}
                onClick={() => setActiveSkill(skill.name)}
              >
                <div className="text-2xl font-medium">{skill.name}</div>
                <div className="text-xs text-gray-400">{skill.learners}</div>
              </div>
            ))}
          </div>

          {showRightSkillArrow && (
            <button
              onClick={() => scrollSkills("right")}
              className="absolute -right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-50 z-10"
              aria-label="Scroll skills right"
            >
              <ChevronRightIcon className="h-7 w-7" />
            </button>
          )}
        </div>

        {/* Courses Section */}
        <h3 className="text-xl font-bold mb-6">
          {activeSkill ? `${activeSkill} Courses` : `All ${activeTab} Courses`}
        </h3>

        {displayedCourses.length > 0 ? (
          <>
            {/* Desktop Grid View */}
            <div className="hidden md:block">
              <div className="relative">
                {showLeftCourseArrow && (
                  <button
                    onClick={() => scrollCourses("left")}
                    className="absolute -left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-50 z-10"
                    aria-label="Scroll courses left"
                  >
                    <ChevronLeftIcon className="h-5 w-5" />
                  </button>
                )}

                <div
                  ref={coursesContainerRef}
                  className="grid grid-cols-4 gap-4 overflow-x-auto pb-4 scrollbar-hide"
                  style={{ display: "flex" }}
                >
                  {displayedCourses.map((course) => (
                    <div
                      key={course.id}
                      content={
                        <div className="max-w-xs">
                          <h4 className="font-bold mb-2">{course.title}</h4>
                          <p className="text-sm mb-2">{course.description}</p>
                          <ul className="text-sm space-y-1">
                            <li className="flex items-center">
                              <svg
                                className="w-4 h-4 mr-1 text-green-400"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              Updated for 2025
                            </li>
                            <li className="flex items-center">
                              <svg
                                className="w-4 h-4 mr-1 text-green-400"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              Complete course materials
                            </li>
                            <li className="flex items-center">
                              <svg
                                className="w-4 h-4 mr-1 text-green-400"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              Certificate upon completion
                            </li>
                          </ul>
                        </div>
                      }
                    >
                      <div className="bg-gray-100 p-4 rounded-xl shadow-md hover:shadow-lg cursor-pointer">
                        <img
                          src={course.image}
                          alt={course.title}
                          className="w-full h-36 object-cover rounded-lg"
                        />
                        <h4 className="text-sm font-medium text-gray-900 mt-2">
                          {course.title}
                        </h4>
                        <p className="text-xs text-gray-600">
                          {course.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {showRightCourseArrow && (
                  <button
                    onClick={() => scrollCourses("right")}
                    className="absolute -right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-50 z-10"
                    aria-label="Scroll courses right"
                  >
                    <ChevronRightIcon className="h-5 w-5" />
                  </button>
                )}
              </div>
            </div>

            {/* Load More Button */}
            {displayCount < filteredCourses.length && (
              <div className="text-center">
                <button
                  onClick={loadMoreCourses}
                  className="text-lg text-blue-600 hover:text-blue-800 focus:outline-none"
                >
                  Load more
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center text-gray-500">
            No courses available for this skill.
          </div>
        )}
      </div>
    </section>
  );
};

export default CoursesSection;
