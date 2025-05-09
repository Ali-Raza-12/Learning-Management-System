import React, { useState } from "react";
import { Filter } from "lucide-react";
import HomeBanner from "../../components/Home/HomeBanner";
import Button from "../../components/Button/Button";
import { TopCourses, TopInstructor } from "../../data/dummy1";

// Components
import CourseCard from "../../components/Category/CoursesCard";
// import InstructorCard from "../../components/Category/InstructorCard";
import Pagination from "../../components/Category/Pagination";
import FilterSidebar from "../../components/Category/FilterSidebar";
import SortDropdown from "../../components/Category/SortDropdown";
import NoResults from "../../components/Category/NoResults";

// Mock toast function (replace with your actual toast implementation)
const toast = {
  title: () => {},
  description: () => {},
};

const Category = () => {
  const [filters, setFilters] = useState({
    rating: null,
    chapters: [],
    price: [],
    category: [],
    level: [],
  });

  const [sort, setSort] = useState("relevance");
  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 6;
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filteredCourses = TopCourses.filter((course) => {
    // Rating filter
    if (filters.rating !== null && course.rating < filters.rating) return false;

    // Chapters filter
    if (filters.chapters.length > 0) {
      const chapterMatches = filters.chapters.some((range) => {
        if (range === "1-10")
          return course.chapters >= 1 && course.chapters <= 10;
        if (range === "10-15")
          return course.chapters >= 10 && course.chapters <= 15;
        if (range === "15-20")
          return course.chapters >= 15 && course.chapters <= 20;
        if (range === "20-25")
          return course.chapters >= 20 && course.chapters <= 25;
        if (range === "above-25") return course.chapters > 25;
        return false;
      });
      if (!chapterMatches) return false;
    }

    // Price filter
    if (filters.price.length > 0) {
      const price = parseFloat(course.price.replace("$", ""));
      const priceMatch = filters.price.some((range) => {
        if (range === "free") return price === 0;
        if (range === "0-50") return price > 0 && price <= 50;
        if (range === "50-100") return price > 50 && price <= 100;
        if (range === "100+") return price > 100;
        return false;
      });
      if (!priceMatch) return false;
    }

    // Category filter
    if (
      filters.category.length > 0 &&
      !filters.category.includes(course.category)
    ) {
      return false;
    }

    // Level filter
    if (filters.level.length > 0 && !filters.level.includes(course.level)) {
      return false;
    }

    return true;
  });

  const sortedCourses = [...filteredCourses].sort((a, b) => {
    if (sort === "price-asc") {
      return (
        parseFloat(a.price.replace("$", "")) -
        parseFloat(b.price.replace("$", ""))
      );
    }
    if (sort === "price-desc") {
      return (
        parseFloat(b.price.replace("$", "")) -
        parseFloat(a.price.replace("$", ""))
      );
    }
    if (sort === "rating") {
      return b.rating - a.rating;
    }
    if (sort === "newest") {
      return new Date(b.date) - new Date(a.date);
    }
    return 0;
  });

  const totalPages = Math.ceil(sortedCourses.length / coursesPerPage);
  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = sortedCourses.slice(
    indexOfFirstCourse,
    indexOfLastCourse
  );

  const handleFilterChange = (filterType, value) => {
    setFilters((prev) => ({ ...prev, [filterType]: value }));
    setCurrentPage(1);
    toast({
      title: "Filters Updated",
      description: "Course list has been filtered based on your selection.",
    });
  };

  const handleSortChange = (value) => {
    setSort(value);
    const sortLabel = sortOptions.find(
      (option) => option.value === value
    )?.label;
    toast({
      title: "Sorting Applied",
      description: `Courses sorted by ${sortLabel}.`,
    });
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const clearAllFilters = () => {
    setFilters({
      rating: null,
      chapters: [],
      price: [],
      category: [],
      level: [],
    });
    toast({
      title: "Filters Cleared",
      description: "All filters have been removed.",
    });
  };

  const activeFiltersCount =
    (filters.rating !== null ? 1 : 0) +
    filters.chapters.length +
    filters.price.length +
    filters.category.length +
    filters.level.length;

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
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
            onClick={() => setIsFilterOpen(!isFilterOpen)} // Optional: You can handle this by wrapping Button or modifying Button to accept onClick
          />
          {activeFiltersCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-primary-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {activeFiltersCount}
            </span>
          )}

          <Button
            text="Filters"
            icon={<Filter size={18} />}
            btnClass="border px-4 py-2 hover:bg-gray-100"
          />

          <SortDropdown sort={sort} onSortChange={handleSortChange} />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className={`lg:block ${isFilterOpen ? "block" : "hidden"}`}>
          <FilterSidebar
            filters={filters}
            onFilterChange={handleFilterChange}
          />
        </div>

        <div className="flex-1">
          <div className="mb-6">
            <p className="text-gray-600">
              Showing{" "}
              <span className="font-medium">{sortedCourses.length}</span>{" "}
              courses
              {activeFiltersCount > 0 ? " with applied filters" : ""}
            </p>
          </div>

          {sortedCourses.length > 0 ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentCourses.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>

              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </>
          ) : (
            <NoResults onClearFilters={clearAllFilters} />
          )}

          {/* <div className="mt-16">
            <HomeBanner title="Popular Mentors" btnText="See All" />
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {TopInstructor.map((instructor) => (
                <InstructorCard key={instructor.id} instructor={instructor} />
              ))}
            </div>
          </div> */}

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
