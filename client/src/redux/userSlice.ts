import { createSlice } from "@reduxjs/toolkit";
import { UserSlice } from "../types";
import { fetchAuth, fetchLogin, fetchLogout, fetchReg } from "./thunkActions";
import { store } from "./store";

const initialState: UserSlice = {
  user: {
    id: 0,
    login: "",
    password: "",
  },
};

const usersSlice = createSlice({
  name: "todoSlice",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchReg.fulfilled, (state, action) => {
      state.user = action.payload;
    });
    builder.addCase(fetchAuth.fulfilled, (state, action) => {
      state.user = action.payload
    })
    builder.addCase(fetchLogin.fulfilled, (state, action) => {
      state.user = action.payload
    })
    builder.addCase(fetchLogout.fulfilled, (store) => {
      store.user = {
        id: 0,
        login: "",
        password: "",
      }
    })
  },
});

export default usersSlice.reducer;
