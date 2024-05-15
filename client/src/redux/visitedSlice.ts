import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchAddVisited, fetchRemoveVisited } from './thunkActionsCurrentMuseum';
import type { VisitedMuseum } from '../Pages/CurrentMuseum/currMusTypes';

interface VisitedState {
  visited: VisitedMuseum[];
}

const initialVisitedState: VisitedState = {
  visited: [],
};

const visitedSlice = createSlice({
  name: 'visitedSlice',
  initialState: initialVisitedState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAddVisited.fulfilled, (state, action: PayloadAction<VisitedMuseum>) => {
      state.visited.push(action.payload);
    });
    builder.addCase(fetchRemoveVisited.fulfilled, (state, action: PayloadAction<number>) => {
      state.visited = state.visited.filter(visit => visit.museumId !== action.payload);
    });
  },
});

export default visitedSlice.reducer;