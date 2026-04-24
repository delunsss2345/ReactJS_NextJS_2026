import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { searchUsersApi } from '../../../services/api'

export const searchUsers = createAsyncThunk(
  'search/searchUsers',
  async (query) => searchUsersApi(query),
)

const initialState = {
  query: '',
  results: [],
  loading: false,
  error: null,
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.query = action.payload
    },
    clearSearchResults: (state) => {
      state.results = []
      state.loading = false
      state.error = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchUsers.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(searchUsers.fulfilled, (state, action) => {
        state.loading = false
        state.results = action.payload
      })
      .addCase(searchUsers.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'Không thể tìm kiếm user.'
      })
  },
})

export const { clearSearchResults, setSearchQuery } = searchSlice.actions
