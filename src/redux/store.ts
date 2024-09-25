import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../redux/userSlice';

// Configure the Redux store
const store = configureStore({
  reducer: {
    user: userReducer,
    // Add other reducers here as needed
  },
});

// Export the store
export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;