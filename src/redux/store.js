import { configureStore } from '@reduxjs/toolkit';

import { filterReduser } from './filterSlice';

import { contactsReduser } from './contactSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReduser,
    filter: filterReduser,
  },
});
