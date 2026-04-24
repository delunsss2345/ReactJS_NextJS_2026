import { configureStore } from '@reduxjs/toolkit'
import { authReducer } from '../features/auth/store'
import { cartReducer } from '../features/cart/store'
import { counterReducer } from '../features/counter/store'
import { mockAuthReducer } from '../features/mock-auth/store'
import { notificationReducer } from '../features/notification/store'
import { productReducer } from '../features/product/store'
import { searchReducer } from '../features/search/store'
import { themeReducer } from '../features/theme/store'
import { todoReducer } from '../features/todo/store'
import { usersReducer } from '../features/users/store'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    counter: counterReducer,
    mockAuth: mockAuthReducer,
    notification: notificationReducer,
    product: productReducer,
    search: searchReducer,
    theme: themeReducer,
    todo: todoReducer,
    users: usersReducer,
  },
})
