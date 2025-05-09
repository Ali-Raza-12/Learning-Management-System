import React from "react";

const HomeBanner = ({ title, btnText, description }) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-gray-900 font-bold">
            {title}
          </h2>
          {description && (
            <p className="mt-2 text-gray-600 text-sm sm:text-base">
              {description}
            </p>
          )}
        </div>
        <button className="text-blue-600 hover:text-blue-700 font-medium text-sm sm:text-base transition-colors duration-200 px-6 py-2 rounded-lg hover:bg-blue-50">
          {btnText}
        </button>
      </div>
    </div>
  );
};

export default HomeBanner;
