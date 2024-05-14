import { createSlice } from "@reduxjs/toolkit";
import { ToDoSliceType } from "../types";
import { fetchAdd, fetchChange, fetchDelete, fetchTodos } from "./thunkActions";

const initialState: ToDoSliceType = {
  todos: [],
};

const todosSlice = createSlice({
  name: "todoSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.todos = action.payload;
    });
    builder.addCase(fetchAdd.fulfilled, (state, action) => {
      state.todos.push(action.payload);
    });
    builder.addCase(fetchDelete.fulfilled, (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload)
    });
    builder.addCase(fetchChange.fulfilled, (state, action) => {
      state.todos = state.todos.map((el) => el.id === action.payload.id ? ({...el, status: action.payload.status}) : el)
    })
  },
});

export default todosSlice.reducer;
