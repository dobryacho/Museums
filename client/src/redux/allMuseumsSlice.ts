import { createSlice } from '@reduxjs/toolkit';
import { fetchMuseums } from './thunkActionsAllMuseums';
import { Museums } from '../components/ListMuseums/ListMuseums';

type AllMuseumsSliceType = {
    allMuseums: Museums;
    museums: Museums;
    selectedCity: String;
    selectedDirection: String;
  };

const initialAllMuseumsState: AllMuseumsSliceType = {
  allMuseums: [],
  museums: [],
  selectedCity: '',
  selectedDirection: '',
};

const allMuseumsSlice = createSlice({
  name: 'allMuseumsSlice',
  initialState: initialAllMuseumsState,
  reducers: {
    updateMuseums(state, action) {
      state.museums = action.payload;
    },
    filterMuseumsByCity(state, action) {
      state.museums = state.museums.filter((museum) => museum.city === action.payload);
    },
    filterMuseumsByDirection(state, action) {
      state.museums = state.museums.filter((museum) => museum.theme === action.payload);
    },
    selectCity(state, action) {
      state.selectedCity = action.payload;
    },
    selectDirection(state, action) {
      state.selectedDirection = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMuseums.fulfilled, (state, action) => {
      state.allMuseums = action.payload;
    });
    builder.addCase(fetchMuseums.rejected, () => {
      console.log('Ответа нет');
    });
  },
});

export default allMuseumsSlice.reducer;
