import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.phones.phones;

export const selectLoading = state => state.phones.isLoading;

export const selectError = state => state.phones.error;

export const selectFilter = state => state.filter;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
