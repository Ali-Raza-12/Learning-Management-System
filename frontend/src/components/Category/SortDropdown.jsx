import React from "react";
import { ChevronDown } from "lucide-react";
import Button from "../Button/Button";

const sortOptions = [
  { label: "Relevance", value: "relevance" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Rating", value: "rating" },
  { label: "Newest", value: "newest" },
];

const SortDropdown = ({ sort, onSortChange }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const sortButtonText =
    sortOptions.find((option) => option.value === sort)?.label || "Relevance";

  return (
    <div className="relative">
      <Button onClick={() => setIsOpen(!isOpen)} variant="outline">
        {sortButtonText}
        <ChevronDown size={16} className="ml-2" />
      </Button>

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
