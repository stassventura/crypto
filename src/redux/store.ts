import { configureStore } from '@reduxjs/toolkit';
import UserReducer from './slices/UserSlice';
export const store = configureStore({
  reducer: {
    User: UserReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;