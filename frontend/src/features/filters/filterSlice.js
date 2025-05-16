import { createSlice } from "@reduxjs/toolkit";
import { TopCourses } from "../../data/dummy1";

const initialState = {
  courses: TopCourses,
  filters: {
    category: [],
  },
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCourses: (state, action) => {
      state.courses = action.payload;
    },
    toggleCategoryFilter: (state, action) => {
      const category = action.payload;
      if (state.filters.category.includes(category)) {
        state.filters.category = state.filters.category.filter(
          (cat) => cat !== category
        );
      } else {
        state.filters.category.push(category);
      }
    },
    clearFilters: (state) => {
        state.filters.category = [];
    }
  },
});

export const { toggleCategoryFilter, setCourses, clearFilters } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
