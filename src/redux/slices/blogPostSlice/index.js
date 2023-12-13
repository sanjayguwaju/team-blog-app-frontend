import { createSlice } from '@reduxjs/toolkit';

const blogPostSlice = createSlice({
  name: 'blogPost',
  initialState: {
    showTrimmedPost: true,
    showReadMore: true,
    showCommentSection: false,
  },
  reducers: {
    toggleTrimmedPost: (state) => {
      state.showTrimmedPost = !state.showTrimmedPost;
    },
    toggleReadMore: (state) => {
      state.showReadMore = !state.showReadMore;
    },
    toggleCommentSection: (state) => {
      state.showCommentSection = !state.showCommentSection;
    },
  },
});

export const { toggleTrimmedPost, toggleReadMore, toggleCommentSection } = blogPostSlice.actions;
export default blogPostSlice.reducer;