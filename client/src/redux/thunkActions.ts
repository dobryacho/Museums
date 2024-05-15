import axios from "axios";
import { NewPost, ToDo, ToDos, UserInputs } from "../types";
import { createAsyncThunk } from "@reduxjs/toolkit";

type User = {
  id: number;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  city: string;
  phone?: string;
}

export const fetchTodos = createAsyncThunk("todo/all", async () => {
  const response = await axios.get<ToDos>("http://localhost:3000/api/todos");
  return response.data;
});

export const fetchAdd = createAsyncThunk("todo/add", async (input: NewPost) => {
  const response = await axios.post<ToDo>(
    "http://localhost:3000/api/todos",
    input
  );
  return response.data;
});

export const fetchDelete = createAsyncThunk(
  "todo/delete",
  async (id: number) => {
    const response = await axios.delete<ToDo>(
      `http://localhost:3000/api/todos/${id}`
    );
    if (response.status === 200) {
      return id;
    }
  }
);

export const fetchChange = createAsyncThunk(
  "todo/change",
  async (card: ToDo): Promise<ToDo> => {
    const respone = await axios.patch(
      `http://localhost:3000/api/todos/${card.id}`,
      { status: !card.status }
    );
    return respone.data;
  }
);

export const fetchReg = createAsyncThunk(
  "user/reg",
  async (user: UserInputs): Promise<User> => {
    const response = await axios.post("http://localhost:3000/api/user", user, {withCredentials: true});
    return response.data;
  }
);

export const fetchLogin = createAsyncThunk(
  "user/login",
  async (user: UserInputs): Promise<User> => {
    const response = await axios.post(
      "http://localhost:3000/api/user/login",
      user,
      { withCredentials: true }
    );
    return response.data;
  }
);

export const fetchAuth = createAsyncThunk(
  "user/auth",
  async (): Promise<User> => {
    const response = await axios.get("http://localhost:3000/api/user/auth", {
      withCredentials: true,
    });
    return response.data;
  }
);

export const fetchLogout = createAsyncThunk(
  "user/logout",
  async (): Promise<void> => {
    await axios.get("http://localhost:3000/api/user/logout", {
      withCredentials: true,
    });
  }
);
