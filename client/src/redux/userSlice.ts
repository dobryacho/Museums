import { createSlice } from "@reduxjs/toolkit";
import { fetchAuth, fetchLogin, fetchLogout, fetchReg } from "./thunkActions";

const initialState: {user: {id: number;login: string;password: string; err?: string}} = {
  user: {
    id: 0,
    login: "",
    password: "",
    err: "",
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
    builder.addCase(fetchLogout.fulfilled, (state) => {
      state.user = {
        id: 0,
        login: "",
        password: "",
        err: "",
      }
    })
  },
});

export default usersSlice.reducer;
