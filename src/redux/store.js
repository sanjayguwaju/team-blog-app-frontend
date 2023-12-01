import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../redux/slices/counter/index';
import { apiSlice } from '../features/api/apiSlice';
import blogPostReducer from './slices/blogPostSlice/index';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    blogPost: blogPostReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware:(getDefaultMiddleware) => 
    getDefaultMiddleware().concat(apiSlice.middleware)
});

export default store;