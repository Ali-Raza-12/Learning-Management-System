import React from "react";
import { Star } from "lucide-react";

const Rating = ({ value }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={16}
          fill={i < value ? "#F59E0B" : "none"}
          stroke={i < value ? "#F59E0B" : "#D1D5DB"}
          className="mr-0.5"
        />
      ))}
    </div>
  );
};

export default Rating;