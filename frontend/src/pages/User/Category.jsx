import React, { useMemo, useState } from "react";
import { Filter } from "lucide-react";
import HomeBanner from "../../components/Home/HomeBanner";
import Button from "../../components/Button/Button";
import { TopCourses } from "../../data/dummy1";

// Components
import CourseCard from "../../components/Category/CoursesCard";
import Pagination from "../../components/Category/Pagination";
import FilterSidebar from "../../components/Category/FilterSidebar";
import SortDropdown from "../../components/Category/SortDropdown";
import { selectFilteredCourses } from "../../features/filters/selector";
import { useSelector } from "react-redux";

const Category = () => {


  // UI state only
  const [isFilterOpen, setIsFilterOpen] = React.useState(false);
  const filteredCourses = useSelector(selectFilteredCourses);
  if (!filteredCourses) return null;

  const [sort, setSort] = useState("relevance");
  
  const sortedCourses = useMemo(() => {
    const arr = [...filteredCourses];
    switch (sort) {
      case "price-asc":
        return [...filteredCourses].sort((a, b) => parseFloat(a.price.slice(1)) - parseFloat(b.price.slice(1)));
      case "price-desc":
        return [...filteredCourses].sort((a, b) => parseFloat(b.price.slice(1)) - parseFloat(a.price.slice(1)));
      case "rating":
        return [...filteredCourses].sort((a, b) => b.rating - a.rating);  
      case "newest":
        return [...filteredCourses].sort((a, b) => new Date(b.date) - new Date(a.date));
      default:
        return arr;
    }
  }, [filteredCourses, sort]);

  return (
    <div className="xs:px-6 sm:px-2 sm:container sm:mx-auto py-20">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          Design Courses
        </h1>
        <p className="text-gray-600">
          Explore the best courses to enhance your skills
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <h3 className="text-xl font-bold text-gray-900">
          All Development Courses
        </h3>

        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          <Button
            text="Filter"
            icon={<Filter size={18} className="mr-2" />}
            btnClass="relative border px-4 py-2 hover:bg-gray-100"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
          />

          <SortDropdown sort={sort} onSortChange={setSort} />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className={`lg:block ${isFilterOpen ? "block" : "hidden"}`}>
          <FilterSidebar />
        </div>

        <div className="flex-1">
          <div className="mb-6">
            <p className="text-gray-600">
              Showing{" "}
              <span className="font-medium">{filteredCourses.length}</span>{" "}
              courses
            </p>
          </div>

          {/* Placeholder for courses list - replace with your actual data mapping */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedCourses.length === 0 ? (
              <div className="col-span-1 sm:col-span-2 lg:col-span-3 text-center  py-16 bg-gray-100 rounded-lg">
                <p className="text-gray-500">No courses found</p>
              </div>
            ) : (
              sortedCourses
                .slice(0, 6)
                .map((course) => <CourseCard key={course.id} course={course} />)
            )}
          </div>

          <Pagination />

          {/* Placeholder for no results */}
          {/* <NoResults /> */}

          <div className="mt-16">
            <HomeBanner title="Featured Courses" btnText="See All" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {TopCourses.slice(0, 3).map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
