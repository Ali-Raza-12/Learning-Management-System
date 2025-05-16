import React, { useState } from "react";
import FilterSection from "./FilterSection";
import Rating from "./Rating";
import { categories } from "../../data/dummy1";
import { useDispatch, useSelector } from "react-redux";
import { toggleCategoryFilter, clearFilters } from "../../features/filters/filterSlice";

const FilterSidebar = () => {
  const dispatch = useDispatch();
  const selectedCategories = useSelector(
    (state) => state.filter.filters.category
  );
  const [openSections, setOpenSections] = useState({
    rating: true,
    chapters: true,
    price: true,
    category: true,
    level: true,
  });

  const toggleSection = (section) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const ratings = [5, 4, 3, 2, 1];
  const chapterRanges = [
    { label: "1-10 chapters", value: "1-10" },
    { label: "10-15 chapters", value: "10-15" },
    { label: "15-20 chapters", value: "15-20" },
    { label: "20-25 chapters", value: "20-25" },
    { label: "25+ chapters", value: "above-25" },
  ];
  const priceRanges = [
    { label: "Free", value: "free" },
    { label: "$0 - $50", value: "0-50" },
    { label: "$50 - $100", value: "50-100" },
    { label: "$100+", value: "100+" },
  ];
  const levels = ["Beginner", "Intermediate", "Advanced"];

  const handleClearAll = () => {
    dispatch(clearFilters());
  }

  return (
    <div className="w-full lg:w-72 bg-white p-6 rounded-xl shadow-sm border border-gray-200 h-fit">
      
      {/* Add Clear All Button at the top */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-bold text-lg">Filters</h2>
        <button
          onClick={handleClearAll}
          disabled={selectedCategories.length === 0}
          className={`text-sm ${
            selectedCategories.length === 0
              ? "text-gray-400 cursor-not-allowed"
              : "text-primary-600 hover:underline"
          }`}
        >
          Clear All
        </button>
      </div>

      {/* Rating Section */}
      <FilterSection
        title="Rating"
        isOpen={openSections.rating}
        onToggle={() => toggleSection("rating")}
      >
        {ratings.map((rating) => (
          <button
            key={rating}
            className="flex items-center w-full gap-2 py-1 px-2 rounded-md transition-colors hover:bg-gray-100"
          >
            <Rating value={rating} />
            <span className="text-sm text-gray-600">& up</span>
          </button>
        ))}
      </FilterSection>

      {/* Chapters Section */}
      <FilterSection
        title="Number of Chapters"
        isOpen={openSections.chapters}
        onToggle={() => toggleSection("chapters")}
      >
        {chapterRanges.map((range) => (
          <label
            key={range.value}
            className="flex items-center gap-3 cursor-pointer py-1"
          >
            <input
              type="checkbox"
              className="w-4 h-4 text-primary-600 rounded border-gray-300 focus:ring-primary-500"
            />
            <span className="text-gray-700">{range.label}</span>
          </label>
        ))}
      </FilterSection>

      {/* Price Section */}
      <FilterSection
        title="Price"
        isOpen={openSections.price}
        onToggle={() => toggleSection("price")}
      >
        {priceRanges.map((range) => (
          <label
            key={range.value}
            className="flex items-center gap-3 cursor-pointer py-1"
          >
            <input
              type="checkbox"
              className="w-4 h-4 text-primary-600 rounded border-gray-300 focus:ring-primary-500"
            />
            <span className="text-gray-700">{range.label}</span>
          </label>
        ))}
      </FilterSection>

      {/* Category Section */}
      <FilterSection
        title="Category"
        isOpen={openSections.category}
        onToggle={() => toggleSection("category")}
      >
        {categories.map((category) => (
          <label
            key={category}
            className="flex items-center gap-3 cursor-pointer py-1"
          >
            <input
              type="checkbox"
              checked={selectedCategories.includes(category)}
              onChange={() => dispatch(toggleCategoryFilter(category))}
              className="w-4 h-4 text-primary-600 rounded border-gray-300 focus:ring-primary-500"
            />
            <span className="text-gray-700">{category}</span>
          </label>
        ))}
      </FilterSection>

      {/* Level Section */}
      <FilterSection
        title="Level"
        isOpen={openSections.level}
        onToggle={() => toggleSection("level")}
      >
        {levels.map((level) => (
          <label
            key={level}
            className="flex items-center gap-3 cursor-pointer py-1"
          >
            <input
              type="checkbox"
              className="w-4 h-4 text-primary-600 rounded border-gray-300 focus:ring-primary-500"
            />
            <span className="text-gray-700">{level}</span>
          </label>
        ))}
      </FilterSection>
    </div>
  );
};

export default FilterSidebar;
