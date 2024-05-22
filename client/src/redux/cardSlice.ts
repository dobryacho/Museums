import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCardInfo, updateCardValidity, addNewCard } from './thunkActionsCard';

export interface CardInfoType {
  id: number;
  validity: string;
}

interface CardState {
  cardInfo: CardInfoType | null;
}

const initialState: CardState = {
  cardInfo: null,
};

const cardSlice = createSlice({
  name: 'cardSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCardInfo.fulfilled, (state, action: PayloadAction<CardInfoType | null>) => {
      state.cardInfo = action.payload;

    });
    builder.addCase(updateCardValidity.fulfilled, (state, action: PayloadAction<CardInfoType>) => {
      state.cardInfo = action.payload;
    });
    builder.addCase(addNewCard.fulfilled, (state, action: PayloadAction<CardInfoType>) => {
      state.cardInfo = action.payload;
    });
  },
});

export default cardSlice.reducer;