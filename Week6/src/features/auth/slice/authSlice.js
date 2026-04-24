import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchAuthProfileApi, loginApi } from '../../../services/api'

const STORAGE_KEY = 'week6_auth_token'

const getStoredToken = () => {
  if (typeof window === 'undefined') {
    return ''
  }

  return localStorage.getItem(STORAGE_KEY) || ''
}

export const loginWithApi = createAsyncThunk(
  'auth/loginWithApi',
  async (credentials) => loginApi(credentials),
)

export const fetchProfile = createAsyncThunk(
  'auth/fetchProfile',
  async (token, thunkApi) => {
    const activeToken = token || thunkApi.getState().auth.token

    if (!activeToken) {
      throw new Error('Không tìm thấy token hợp lệ.')
    }

    return fetchAuthProfileApi(activeToken)
  },
)

const initialState = {
  user: null,
  token: getStoredToken(),
  status: 'idle',
  error: null,
  profileLoading: false,
  profileError: null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null
      state.token = ''
      state.status = 'idle'
      state.error = null
      state.profileError = null
      localStorage.removeItem(STORAGE_KEY)
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginWithApi.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(loginWithApi.fulfilled, (state, action) => {
        state.status = 'authenticated'
        state.token = action.payload.accessToken
        state.user = {
          id: action.payload.id,
          username: action.payload.username,
          email: action.payload.email,
          firstName: action.payload.firstName,
          lastName: action.payload.lastName,
          image: action.payload.image,
        }
        localStorage.setItem(STORAGE_KEY, action.payload.accessToken)
      })
      .addCase(loginWithApi.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message || 'Đăng nhập thất bại.'
      })
      .addCase(fetchProfile.pending, (state) => {
        state.profileLoading = true
        state.profileError = null
      })
      .addCase(fetchProfile.fulfilled, (state, action) => {
        state.profileLoading = false
        state.status = 'authenticated'
        state.user = action.payload
      })
      .addCase(fetchProfile.rejected, (state, action) => {
        state.profileLoading = false
        state.profileError = action.error.message || 'Không thể lấy profile.'
        state.user = null
        state.token = ''
        state.status = 'idle'
        localStorage.removeItem(STORAGE_KEY)
      })
  },
})

export const { logout } = authSlice.actions
