// store.js
import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; 

import { apiSlice } from '../features/api/apiSlice';
import blogPostReducer from './slices/blogPostSlice/index';
import blogDataReducer from './slices/blogDataSlice/index';
import userReducer from './slices/userSlice/index';

const persistConfig = {
  key: 'root',
  storage,
};

// const persistedBlogPostReducer = persistReducer(persistConfig, blogPostReducer);
// const persistedBlogDataReducer = persistReducer(persistConfig, blogDataReducer);
const persistedUserReducer = persistReducer(persistConfig, userReducer);

const store = configureStore({
  reducer: {
    blogPost: blogPostReducer,
    blogData: blogDataReducer,
    user: persistedUserReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(apiSlice.middleware)
});

export const persistor = persistStore(store);

export default store;