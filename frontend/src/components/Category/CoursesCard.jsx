import React from "react";
import { Star } from "lucide-react";
import Rating from "./Rating";

const CourseCard = ({ course }) => {
  return (
    <div className="bg-white p-4 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
      <div className="relative">
        <img
          src={course.img}
          alt={course.title}
          className="w-full h-40 object-cover rounded-lg mb-4"
        />
        <span className="absolute top-2 right-2 bg-white/90 text-primary-600 text-xs font-medium px-2 py-1 rounded-full">
          {course.level}
        </span>
      </div>
      <div className="space-y-2">
        <h3 className="text-lg font-bold text-gray-900 line-clamp-1">
          {course.title}
        </h3>
        <p className="text-gray-600 text-sm">{course.subheading}</p>
        <div className="flex items-center gap-2">
          <Rating value={course.rating} />
          <span className="text-sm text-gray-500">
            ({course.reviews} reviews)
          </span>
        </div>
        <p className="text-sm text-gray-500 line-clamp-2">{course.para}</p>
        <div className="flex items-center justify-between pt-2">
          <p className="text-lg font-semibold text-gray-900">{course.price}</p>
          <span className="text-sm text-gray-600">
            {course.chapters} chapters
          </span>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;