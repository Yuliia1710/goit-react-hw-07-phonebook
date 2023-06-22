import { createSelector } from '@reduxjs/toolkit';

export const selectContactsState = state => state.contacts.items;
export const getFilter = state => state.filter;

export const selectFilterContacts = createSelector(
  [selectContactsState, getFilter],
  (contacts, filter) => {
    return contacts.filter(item =>
      item.name.toLowerCase().includes(filter.toLowerCase().trim())
    );
  }
);
