import { createContext, useContext, useState } from "react";
import { allCourses } from "../data/CoursesData";

const CourseContext = createContext();

export const CourseProvider = ({ children }) => {
  const [courses] = useState(allCourses);

  function getCourseById(id) {
    for (const category in allCourses) {
      const course = allCourses[category].find((course) => course.id === id);
      if (course) {
        return { course, category };
      }
    }
    return { course: null, category: null };
  }

  return (
    <CourseContext.Provider value={{ courses, getCourseById }}>
      {children}
    </CourseContext.Provider>
  );
};

export const useCourse = () => useContext(CourseContext);
