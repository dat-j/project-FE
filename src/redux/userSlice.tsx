import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the shape of the user state
interface UserState {
  isLoggedIn: boolean;
  user: {
    id: string | null;
    username: string | null;
    email: string | null;
  };
}

// Define the initial state
const initialState: UserState = {
  isLoggedIn: false,
  user: {
    id: null,
    username: null,
    email: null,
  },
};

// Create the user slice
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // Action to handle user login
    login: (state, action: PayloadAction<{ id: string; username: string; email: string }>) => {
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    // Action to handle user logout
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = initialState.user;
    },
    // Action to update user information
    updateUserInfo: (state, action: PayloadAction<Partial<UserState['user']>>) => {
      state.user = { ...state.user, ...action.payload };
    },
  },
});

// Export the actions
export const { login, logout, updateUserInfo } = userSlice.actions;
export const selectUser = (state: any) => state.user
// Export the reducer
export default userSlice.reducer;