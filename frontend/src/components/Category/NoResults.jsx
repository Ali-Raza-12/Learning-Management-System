import React from "react";
import Button from "../Button/Button";

const NoResults = ({ onClearFilters }) => {
  return (
    <div className="bg-gray-50 rounded-xl p-8 text-center">
      <h3 className="text-xl font-bold text-gray-800 mb-2">No courses found</h3>
      <p className="text-gray-600 mb-4">
        Try adjusting your filters to find more courses
      </p>
      <Button onClick={onClearFilters} variant="primary">
        Clear All Filters
      </Button>
    </div>
  );
};

export default NoResults;