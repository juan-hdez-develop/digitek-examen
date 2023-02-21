import { createSlice } from '@reduxjs/toolkit'

const initialValue = { items: [],
  index: 0
}

const todoItemsSlice = createSlice({
  name: 'todoItems',
  initialState: initialValue, 
  reducers: {
    add_item: (state, action) => {
      state.items.push(action.payload)
    },
    remove_item: (state, action) => {
      state.items = state.items.filter((item) => {
        return  item.index !== action.payload.index})
    },
    update_item: (state, action) => {
      state.items = state.items.map((item) => {
        if(item.index === action.payload.index)
          return action.payload
        else
          return  item
      })
      console.log()
    },
    incrementIndex: (state) => {
      state.index++
    }
  }
})

export const { add_item, update_item, remove_item, incrementIndex } = todoItemsSlice.actions

export const selectItems = state => state.todoItems.items
export const selectIndex = state => state.todoItems.index

export const todoItemsReducer = todoItemsSlice.reducer
