'use client'

import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from './store'
import { saveUserInfo, logout } from './store'

// Create custom hooks for accessing the store
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

// Export a custom hook for user-related actions and state
export const useUser = () => {
  const dispatch = useAppDispatch()
  const user = useAppSelector((state) => state.user)

  return {
    user,
    saveUserInfo: (userInfo: { id: string; name: string; email: string; username: string }) => 
      dispatch(saveUserInfo(userInfo)),
    logout: () => dispatch(logout()),
  }
}