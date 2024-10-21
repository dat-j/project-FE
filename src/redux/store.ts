import { createSlice, configureStore, PayloadAction } from '@reduxjs/toolkit'

// Define a type for the slice state
interface UserState {
  id: string | null
  name: string | null
  username: string | null
  email: string | null
  isLoggedIn: boolean
}

// Define the initial state
const initialState: UserState = {
  id: null,
  name: null,
  username: null,
  email: null,
  isLoggedIn: false,
}

// Create the slice
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    saveUserInfo: (state, action: PayloadAction<{ id: string; username: string; email: string; name: string }>) => {
      state.id = action.payload.id
      state.name = action.payload.name
      state.username = action.payload.username
      state.email = action.payload.email
      state.isLoggedIn = true
    },
    logout: (state) => {
      state.id = null
      state.username = null
      state.email = null
      state.isLoggedIn = false
    },
  },
})

// Export actions
export const { saveUserInfo, logout } = userSlice.actions

// Configure the store
export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
})

// Define types for state and dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default function Component() {
  // This is a dummy component to satisfy the React Component code block requirements
  return null
}