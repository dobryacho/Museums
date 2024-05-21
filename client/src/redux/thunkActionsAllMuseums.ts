import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchMuseums = createAsyncThunk('museums/all', async () => {
    const response = await axios.get('http://localhost:3000/api/museums');
    return response.data;
  });