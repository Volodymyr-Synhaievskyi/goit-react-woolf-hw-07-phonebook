import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const initialState = {
  phones: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, { payload }) => {
  state.error = payload;
  state.isLoading = false;
};

const handleFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
};

const phonesSlice = createSlice({
  name: 'phones',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.phones = payload;
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.phones.push(payload);
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.phones = state.phones.filter(phone => phone.id !== payload);
      })
      .addMatcher(a => a.type.endsWith('phonebook/pending'), handlePending)
      .addMatcher(a => a.type.endsWith('phonebook/rejected'), handleRejected)
      .addMatcher(a => a.type.endsWith('phonebook/fulfilled'), handleFulfilled);
  },
});

export default phonesSlice.reducer;