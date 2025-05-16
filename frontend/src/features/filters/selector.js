import { createSelector } from "@reduxjs/toolkit";

const selectAllCourses = (state) => state.filter.courses;
const selectCategoryFilter = (state) => state.filter?.filters?.category;

export const selectFilteredCourses = createSelector(
    [selectAllCourses, selectCategoryFilter],
    (courses, categoryFilter) => {
        if (categoryFilter.length === 0 ) {
            return courses;
        } else {
            return courses.filter((courses) => 
            categoryFilter.includes(courses.category))
        }
    }
)