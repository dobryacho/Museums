import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchAddFavorite = createAsyncThunk(
  'favorites/add',
  async (museumId: number) => {
    try {
      const response = await axios.post('/api/favoritesMuseums', { museumId }, {
        withCredentials: true,
      });

      if (response.status !== 200) {
        throw new Error('Не удалось добавить в избранное');
      }

      return response.data;
    } catch (error) {
      throw new Error('Не удалось добавить в избранное');
    }
  }
);

export const fetchRemoveFavorite = createAsyncThunk(
  'favorites/remove',
  async (id: number) => {
    const response = await axios.delete(`/api/favoritesMuseums/${id}`, {
      withCredentials: true,
    });

    if (response.status !== 200) {
      throw new Error('Не удалось удалить из избранного');
    }

    return id;
  }
);

export const fetchAddVisited = createAsyncThunk(
  'visited/add',
  async (museumId: number) => {
    try {
      const response = await axios.post('/api/visitedMuseums', { museumId }, {
        withCredentials: true,
      });

      if (response.status !== 200) {
        throw new Error('Не удалось добавить в посещенные');
      }

      return response.data;
    } catch (error) {
      throw new Error('Не удалось добавить в посещенные');
    }
  }
);

export const fetchRemoveVisited = createAsyncThunk(
  'visited/remove',
  async (id: number) => {
    const response = await axios.delete(`/api/visitedMuseums/${id}`, {
      withCredentials: true,
    });

    if (response.status !== 200) {
      throw new Error('Не удалось удалить из посещенных');
    }

    return id;
  }
);

export const fetchRecalls = createAsyncThunk(
  'recalls/fetchByMuseum',
  async (museumId: number) => {
    const response = await axios.get(`/api/recall?museumId=${museumId}`);

    if (response.status !== 200) {
      throw new Error('Не удалось загрузить отзывы');
    }

    return response.data;
  }
);
