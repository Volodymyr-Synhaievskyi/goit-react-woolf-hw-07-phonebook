import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://66410074a7500fcf1a9f4d76.mockapi.io/contacts';

//createAsyncThunk

export const fetchContacts = createAsyncThunk(
  'fetchContacts/phonebook',
  async (_, thunkApi) => {
    try {
      const { data } = await axios.get('/contacts');
      return data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'addContact/phonebook',
  async (contact, thunkApi) => {
    try {
      const { data } = await axios.post('/contacts', contact);
      return data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'deleteContact/phonebook',
  async (contactId, thunkApi) => {
    try {
      await axios.delete(`/contacts/${contactId}`);
      return contactId;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);
