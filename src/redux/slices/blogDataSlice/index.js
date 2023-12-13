import { createSlice } from '@reduxjs/toolkit';

const blogDataSlice = createSlice({
  name: 'blogData',
  initialState: [],
  reducers: {
    setBlogData: (state, action) => {
      return action.payload;
    },
  },
});

export const { setBlogData } = blogDataSlice.actions;
export default blogDataSlice.reducer;