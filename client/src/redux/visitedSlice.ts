import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchVisited, fetchAddVisited, fetchRemoveVisited } from './thunkActionsCurrentMuseum';
import type { VisitedMuseum } from '../Pages/CurrentMuseum/currMusTypes';

interface VisitedState {
  visited: VisitedMuseum[];
}

const initialVisitedState: VisitedState = {
  visited: [],
};
// console.log(initialVisitedState.visited)

const visitedSlice = createSlice({
  name: 'visitedSlice',
  initialState: initialVisitedState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchVisited.fulfilled, (state, action: PayloadAction<VisitedMuseum[]>) => {
      state.visited = action.payload;
    });
    builder.addCase(fetchAddVisited.fulfilled, (state, action: PayloadAction<VisitedMuseum>) => {
      state.visited.push(action.payload);
    });
    builder.addCase(fetchRemoveVisited.fulfilled, (state, action: PayloadAction<number>) => {
      state.visited = state.visited.filter(visit => {
        console.log(visit.museumId, action.payload);
        return (visit.museumId !== action.payload);
      })
      console.log(state.visited);
    });
  },
});

export default visitedSlice.reducer;