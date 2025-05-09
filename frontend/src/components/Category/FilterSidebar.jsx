import React, { useState } from "react";
import FilterSection from "./FilterSection";
import Rating from "./Rating";

const FilterSidebar = ({ filters, onFilterChange }) => {
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

  const categories = [
    "Web Development",
    "Mobile Development",
    "Data Science",
    "Design",
    "Business",
  ];
  const levels = ["Beginner", "Intermediate", "Advanced"];

  const handleRatingChange = (rating) => {
    onFilterChange("rating", filters.rating === rating ? null : rating);
  };

  const handleCheckboxChange = (filterType, value) => {
    const currentValues = filters[filterType];
    const newValues = currentValues.includes(value)
      ? currentValues.filter((v) => v !== value)
      : [...currentValues, value];

    onFilterChange(filterType, newValues);
  };

  return (
    <div className="w-full lg:w-72 bg-white p-6 rounded-xl shadow-sm border border-gray-200 h-fit">
      <FilterSection
        title="Rating"
        isOpen={openSections.rating}
        onToggle={() => toggleSection("rating")}
      >
        {ratings.map((rating) => (
          <button
            key={rating}
            onClick={() => handleRatingChange(rating)}
            className={`flex items-center w-full gap-2 py-1 px-2 rounded-md transition-colors ${
              filters.rating === rating
                ? "bg-primary-100 text-primary-600"
                : "hover:bg-gray-100"
            }`}
          >
            <Rating value={rating} />
            <span className="text-sm text-gray-600">& up</span>
          </button>
        ))}
      </FilterSection>

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
              checked={filters.chapters.includes(range.value)}
              onChange={() => handleCheckboxChange("chapters", range.value)}
              className="w-4 h-4 text-primary-600 rounded border-gray-300 focus:ring-primary-500"
            />
            <span className="text-gray-700">{range.label}</span>
          </label>
        ))}
      </FilterSection>

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
              checked={filters.price.includes(range.value)}
              onChange={() => handleCheckboxChange("price", range.value)}
              className="w-4 h-4 text-primary-600 rounded border-gray-300 focus:ring-primary-500"
            />
            <span className="text-gray-700">{range.label}</span>
          </label>
        ))}
      </FilterSection>

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
              checked={filters.category.includes(category)}
              onChange={() => handleCheckboxChange("category", category)}
              className="w-4 h-4 text-primary-600 rounded border-gray-300 focus:ring-primary-500"
            />
            <span className="text-gray-700">{category}</span>
          </label>
        ))}
      </FilterSection>

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
              checked={filters.level.includes(level)}
              onChange={() => handleCheckboxChange("level", level)}
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
