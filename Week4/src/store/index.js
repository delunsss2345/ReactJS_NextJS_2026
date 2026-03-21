import { configureStore } from '@reduxjs/toolkit'
import { countSlice } from '../features/count/slice/count-slice'


export const store = configureStore({
    reducer: {
        [countSlice.name]: countSlice.reducer,
    },
})