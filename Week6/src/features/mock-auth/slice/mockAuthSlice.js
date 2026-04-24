import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: null,
}

export const mockAuthSlice = createSlice({
  name: 'mockAuth',
  initialState,
  reducers: {
    loginMockAuth: (state, action) => {
      const username = action.payload.trim()

      if (!username) {
        return
      }

      state.user = {
        id: `mock-${Date.now()}`,
        username,
      }
    },
    logoutMockAuth: (state) => {
      state.user = null
    },
  },
})

export const { loginMockAuth, logoutMockAuth } = mockAuthSlice.actions
