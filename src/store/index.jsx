import { todoItemsReducer } from "./selector";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
      todoItems: todoItemsReducer
    }
  })