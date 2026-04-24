import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchUsersApi } from '../../../services/api'

export const fetchUsers = createAsyncThunk('users/fetchUsers', fetchUsersApi)

const initialState = {
  data: [],
  loading: false,
  error: null,
}

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false
        state.data = action.payload
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'Không thể tải danh sách user.'
      })
  },
})
