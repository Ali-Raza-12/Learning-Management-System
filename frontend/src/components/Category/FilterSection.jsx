import React from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

const FilterSection = ({ title, isOpen, onToggle, children }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-4">
        <h4 className="font-medium text-gray-900">{title}</h4>
        <button
          className="p-1 rounded-md hover:bg-gray-100 focus:outline-none"
          onClick={onToggle}
        >
          {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>
      </div>
      {isOpen && <div className="space-y-3">{children}</div>}
    </div>
  );
};

export default FilterSection;