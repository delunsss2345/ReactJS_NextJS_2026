import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 1,
}

export const countSlice = createSlice({
    name: 'count',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        setCount: (state, action) => {
            state.value = action.payload
        },
    },
})

export const { increment, decrement, setCount } = countSlice.actions