// configuration to setup store in reduxtoolkit
import { configureStore } from '@reduxjs/toolkit';

import { apiSlice } from '../features/api/apiSlice';
import blogPostReducer from './slices/blogPostSlice/index';
import blogDataReducer from './slices/blogDataSlice/index';

const store = configureStore({
  reducer: {
    blogPost: blogPostReducer,
    blogData: blogDataReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware:(getDefaultMiddleware) => 
    getDefaultMiddleware().concat(apiSlice.middleware)
});

export default store;