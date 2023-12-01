// configuration to setup store in reduxtoolkit
import { configureStore } from '@reduxjs/toolkit';

import counterReducer from '../redux/slices/counter/index';
import { apiSlice } from '../features/api/apiSlice';
import blogPostReducer from './slices/blogPostSlice/index';
import blogDataReducer from './slices/blogDataSlice/index';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    blogPost: blogPostReducer,
    blogData: blogDataReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware:(getDefaultMiddleware) => 
    getDefaultMiddleware().concat(apiSlice.middleware)
});

export default store;