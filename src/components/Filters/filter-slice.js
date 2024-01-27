import { createSlice } from '@reduxjs/toolkit';

export default createSlice({
  name: 'filters',
  initialState: {
    search: '',
    status: 'All',
    priorities: [],
  },
  reducers: {
    /** tự tạo ra action creators có type bằng với name (ở đây là filters)
     * function searchFilterChange () {
     *  return {
     *         type: 'filter/searchFilterChange',
     *  }
     * }
     * 
     ** cho phép viết code mutation nhưng hoạt động như một immutable
     */
    searchFilterChange: (state, action) => {
      // mutation || IMMER
      state.search = action.payload;
    },
    statusFilterChange: (state, action) => {
      state.status = action.payload;
    },
    prioritiesFilterChange: (state, action) => {
      state.priorities = action.payload;
    },
  },
});