import Testimonials from "../../components/Home/Testimonials";
import AllCourses from "../../components/Home/AllCourses";
import CheckoutCard from "../../components/Home/CheckoutCard";
import ViewCourses from "../../components/Home/ViewCourses";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useCourse } from "../../context/CourseContext.jsx";

const Course = () => {
  const { id } = useParams();
  const { getCourseById } = useCourse();
  const [foundCourse, setFoundCourse] = useState(null);
  const [courseCategory, setCourseCategory] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const course = getCourseById(id);
    if (course) {
      setFoundCourse(course.course);
      setCourseCategory(course.category);
    }
    setLoading(false);
  }, [id, getCourseById]);

  if (loading || !foundCourse) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full xs:px-6 sm:px-2 sm:container sm:mx-auto mt-12 py-8">
      {/* Course Overview */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main Content */}
        <ViewCourses course={foundCourse} courseCategory={courseCategory} />

        {/* Sidebar */}
        <CheckoutCard course={foundCourse} />
      </div>

      {/* More Courses */}
      <div>
        <div className="mb-4 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            Learners are viewing
          </h2>
          <p className="text-base text-gray-600">
            Discover our comprehensive catalog of courses
          </p>
        </div>

        {/* Courses  */}
        <AllCourses />
      </div>

      {/* Testimonials */}
      <div className="mt-4">
        <Testimonials />
      </div>
    </div>
  );
};

export default Course;
