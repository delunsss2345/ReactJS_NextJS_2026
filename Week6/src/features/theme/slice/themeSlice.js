import { createSlice } from '@reduxjs/toolkit'

const getInitialTheme = () => {
  if (typeof window === 'undefined') {
    return 'light'
  }

  return localStorage.getItem('week6_theme') || 'light'
}

const initialState = {
  value: getInitialTheme(),
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.value = state.value === 'light' ? 'dark' : 'light'
    },
    setTheme: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { setTheme, toggleTheme } = themeSlice.actions
