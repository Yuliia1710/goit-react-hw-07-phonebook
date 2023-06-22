import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://649344eb428c3d2035d196e4.mockapi.io';

export const fetchAll = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const resporse = await axios.get('/contacts');
      console.log(resporse);
      return resporse.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (wordId, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`/contacts/${wordId}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (word, { rejectWithValue }) => {
    try {
      const response = await axios.post('/contacts', word);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
