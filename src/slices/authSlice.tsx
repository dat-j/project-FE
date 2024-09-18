import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from './store'

interface AuthState {
  isAuthenticated: boolean
  user: { name: string; email: string; id?:number } | null,
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ name: string; email: string }>) => {
      state.isAuthenticated = true
      state.user = action.payload
    },
    logout: (state) => {
      state.isAuthenticated = false
      state.user = null
    },
  },
})

export const { login, logout } = authSlice.actions

export const selectAuth = (state: RootState) => state.auth

export default authSlice.reducer