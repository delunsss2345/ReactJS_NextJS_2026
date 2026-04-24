import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchProductsApi } from '../../../services/api'

export const fetchProducts = createAsyncThunk(
  'product/fetchProducts',
  fetchProductsApi,
)

const initialState = {
  items: [],
  loading: false,
  error: null,
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false
        state.items = action.payload
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'Không thể tải sản phẩm.'
      })
  },
})
