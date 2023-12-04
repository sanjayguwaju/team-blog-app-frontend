// userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  status: 'idle',
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.status = 'succeeded';
    },
    clearUser: (state) => {
      state.user = null;
      state.status = 'idle';
    },
    setUserFailed: (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    },
    setUserLoading: (state) => {
      state.status = 'loading';
    },
    setUserUpdating: (state) => {
      state.status = 'updating';
    },
    updateUser: (state, action) => {
      state.user = { ...state.user, ...action.payload };
      state.status = 'succeeded';
    },
    logout: () => initialState,
  },
});

export const { setUser, clearUser, setUserFailed, setUserLoading, setUserUpdating, updateUser, logout} = userSlice.actions;

export default userSlice.reducer;