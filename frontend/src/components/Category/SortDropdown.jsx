import React, { useState, useEffect, useRef } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Button from "../Button/Button";

const sortOptions = [
  { label: "Relevance",        value: "relevance" },
  { label: "Price: Low to High",  value: "price-asc" },
  { label: "Price: High to Low",  value: "price-desc" },
  { label: "Rating",           value: "rating" },
  { label: "Newest",           value: "newest" },
];

const SortDropdown = ({ sort, onSortChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef(null);

  // Close the dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const sortButtonText =
    sortOptions.find((opt) => opt.value === sort)?.label || "Relevance";

  return (
    <div className="relative" ref={wrapperRef}>
      <Button
        onClick={() => setIsOpen((open) => !open)}
        text={sortButtonText}
        icon={ isOpen ? <ChevronUp size={16}/> : <ChevronDown size={16} />}
        btnClass="border px-4 py-2 hover:bg-gray-100"
        iconClass="ml-2"
      />

      {isOpen && (
        <div className="absolute top-full right-0 mt-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10 py-1">
          {sortOptions.map((option) => (
            <button
              key={option.value}
              className={`w-full text-left px-4 py-2 text-sm ${
                sort === option.value
                  ? "bg-primary-100 text-primary-600"
                  : "hover:bg-gray-50 text-gray-700"
              }`}
              onClick={() => {
                onSortChange(option.value);
                setIsOpen(false);
              }}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SortDropdown;
