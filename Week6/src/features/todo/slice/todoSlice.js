import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [
    {
      id: 'todo-1',
      text: 'Hoc Redux Toolkit cho global state',
      done: false,
    },
    {
      id: 'todo-2',
      text: 'Tach TodoInput, TodoList, TodoItem',
      done: true,
    },
  ],
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const text = action.payload.trim()

      if (!text) {
        return
      }

      state.items.unshift({
        id: `todo-${Date.now()}`,
        text,
        done: false,
      })
    },
    updateTodo: (state, action) => {
      const { id, text } = action.payload
      const todo = state.items.find((item) => item.id === id)

      if (todo && text.trim()) {
        todo.text = text.trim()
      }
    },
    deleteTodo: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    toggleTodo: (state, action) => {
      const todo = state.items.find((item) => item.id === action.payload)

      if (todo) {
        todo.done = !todo.done
      }
    },
  },
})

export const { addTodo, deleteTodo, toggleTodo, updateTodo } = todoSlice.actions
