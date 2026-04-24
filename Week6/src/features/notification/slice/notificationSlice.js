import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
}

export const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    addNotification: (state, action) => {
      state.items.unshift(action.payload)
    },
    removeNotification: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
  },
})

export const { addNotification, removeNotification } = notificationSlice.actions

export const pushNotification =
  ({ title = 'Thong bao', message = '', type = 'info' }) =>
  (dispatch) => {
    const id = `notice-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`

    dispatch(
      addNotification({
        id,
        title,
        message,
        type,
      }),
    )

    window.setTimeout(() => {
      dispatch(removeNotification(id))
    }, 3000)
  }
