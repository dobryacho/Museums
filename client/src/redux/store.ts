import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todoSlice";
import userSlice from "./userSlice";
import favoritesSlice from "./favoritesSlice";
// import recallsSlice from "./recallsSlice";
import visitedSlice from "./visitedSlice";

const storeOptions = {
  reducer: {
    todoSlice,
    userSlice,
    favoritesSlice,
    // recallsSlice,
    visitedSlice,
  },
};

export const store = configureStore(storeOptions);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
