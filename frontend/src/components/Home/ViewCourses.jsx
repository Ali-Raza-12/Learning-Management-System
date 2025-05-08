import { useState } from "react";
import { FaStar, FaRegStar, FaChevronDown } from "react-icons/fa";
import { Testimonials as TestimonialData } from "../../data/dummy.jsx";

const ViewCourses = ({ course, courseCategory }) => {
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

  if (!course) {
    return <div>Loading course...</div>; 
  }

  return (
    <>
      <div className="flex-1">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-gray-500 mb-6">
          <span>Home</span>
          <span className="mx-2">/</span>
          <span>Categories</span>
          <span className="mx-2">/</span>
          <span className="text-primary-600">
            {courseCategory}
          </span>
        </div>

        {/* Course Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          {course?.title || 'Course Title Not Available'}
          </h1>
          <p className="text-lg text-gray-600">
            {course?.description}
          </p>
        </div>

        {/* Course Stats */}
        <div className="flex flex-wrap items-center gap-4 mb-8">
          <div className="flex items-center">
            <span className="text-yellow-500 font-bold mr-1">{course?.rating}</span>
            <div className="flex mr-1">{renderRatingStars(4.6)}</div>
            <span className="text-gray-500 text-sm">{course?.learners}</span>
          </div>
          <span className="text-gray-500 text-sm">
            22 Total Hours • 155 Lectures • All levels
          </span>
        </div>

        {/* Instructor Info */}
        <div className="flex items-center gap-4 mb-8">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="Instructor"
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <p className="text-gray-500 text-sm">Created by</p>
            <p className="font-medium text-primary-600">{course?.authors}</p>
          </div>
        </div>

        {/* Languages */}
        <div className="flex items-center gap-2 mb-8">
          <svg
            className="w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
            />
          </svg>
          <span className="text-gray-500">
            English, Spanish, Italian, German
          </span>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-200 mb-8">
          {["Description", "Instructor", "Syllabus", "Reviews"].map((tab) => (
            <button
              key={tab}
              className={`px-4 py-3 font-medium text-sm ${
                activeTab === tab
                  ? "text-primary-600 border-b-2 border-primary-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="mb-12">
          {activeTab === "Description" && (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">
                  Course Description
                </h3>
                <p className="text-gray-600">
                  This interactive e-learning course will introduce you to User
                  Experience (UX) design, the art of creating products and
                  services that are intuitive, enjoyable, and user-friendly.
                  Gain a solid foundation in UX principles and learn to apply
                  them in real-world scenarios through engaging modules and
                  interactive exercises.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">
                  What You will Learn
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-600">
                  {[
                    "Fundamentals of UX design principles",
                    "User research methods and analysis",
                    "Information architecture and wireframe",
                    "Prototyping and usability testing",
                    "UI design best practices",
                    "Accessibility considerations",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {activeTab === "Instructor" && (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Ronald Richards</h3>
                <p className="text-gray-500 mb-4">UI/UX Designer</p>
                <p className="text-gray-600">
                  With over a decade of industry experience, Ronald brings a
                  wealth of practical knowledge to the classroom. He has played
                  a pivotal role in designing user-centric interfaces for
                  renowned tech companies, ensuring seamless and engaging user
                  experiences.
                </p>
              </div>
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center">
                  <svg
                    className="w-6 h-6 text-gray-400 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    />
                  </svg>
                  <div>
                    <p className="font-medium">4.8 Instructor Rating</p>
                    <p className="text-sm text-gray-500">40,445 Reviews</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-6 h-6 text-gray-400 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  <div>
                    <p className="font-medium">15 Courses</p>
                    <p className="text-sm text-gray-500">500 Students</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "Syllabus" && (
            <div className="space-y-2">
              {[1, 2, 3, 4].map((module, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg overflow-hidden"
                >
                  <button
                    className="w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
                    onClick={() => toggleModule(index)}
                  >
                    <div className="flex items-center">
                      <FaChevronDown
                        className={`mr-3 text-gray-500 transition-transform ${
                          expandedModules.includes(index) ? "rotate-180" : ""
                        }`}
                      />
                      <h4 className="font-medium">
                        Module {index + 1}: Introduction to UX Design
                      </h4>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <span>5 Lessons</span>
                      <span className="mx-2">•</span>
                      <span>1 hour</span>
                    </div>
                  </button>
                  {expandedModules.includes(index) && (
                    <div className="p-4 border-t border-gray-200">
                      <ul className="space-y-3">
                        {[
                          "Lesson 1: What is UX Design?",
                          "Lesson 2: UX vs UI Design",
                          "Lesson 3: The Design Thinking Process",
                          "Lesson 4: User Research Methods",
                          "Lesson 5: Creating User Personas",
                        ].map((lesson, i) => (
                          <li key={i} className="flex items-center">
                            <svg
                              className="w-4 h-4 text-gray-400 mr-3"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                            {lesson}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {activeTab === "Reviews" && (
            <div className="space-y-8">
              {/* Ratings Section */}
              <div className="flex flex-col md:flex-row gap-8">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 max-w-xs">
                  <div className="flex items-center mb-4">
                    <div className="flex mr-2">{renderRatingStars(4.6)}</div>
                    <span className="font-bold">4.6</span>
                    <span className="text-gray-500 ml-1">course rating</span>
                  </div>
                  <div className="space-y-3">
                    {[5, 4, 3, 2, 1].map((stars) => (
                      <div key={stars} className="flex items-center">
                        <div className="w-8 text-right mr-2">{stars}</div>
                        <div className="flex-1 bg-gray-200 h-2 rounded-full overflow-hidden">
                          <div
                            className="bg-yellow-500 h-full"
                            style={{
                              width:
                                stars === 5
                                  ? "78%"
                                  : stars === 4
                                  ? "15%"
                                  : stars === 3
                                  ? "5%"
                                  : stars === 2
                                  ? "1%"
                                  : "1%",
                            }}
                          />
                        </div>
                        <div className="w-8 text-left ml-2 text-sm text-gray-500">
                          {stars === 5
                            ? "78%"
                            : stars === 4
                            ? "15%"
                            : stars === 3
                            ? "5%"
                            : stars === 2
                            ? "1%"
                            : "1%"}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex-1 space-y-6">
                  {TestimonialData.slice(0, 3).map((testimonial, index) => (
                    <div
                      key={index}
                      className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
                    >
                      <div className="flex items-center mb-4">
                        <div className="flex mr-2">
                          {renderRatingStars(4.6)}
                        </div>
                        <span className="text-gray-500 text-sm">
                          Reviewed on March 22, 2024
                        </span>
                      </div>
                      <p className="text-gray-600 mb-4 italic">
                        {testimonial.para}
                      </p>
                      <div className="flex items-center">
                        <img
                          src={testimonial.person}
                          alt={testimonial.name}
                          className="w-10 h-10 rounded-full object-cover mr-3"
                        />
                        <div>
                          <p className="font-medium">{testimonial.name}</p>
                          <p className="text-sm text-gray-500">
                            {testimonial.exp}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ViewCourses;
