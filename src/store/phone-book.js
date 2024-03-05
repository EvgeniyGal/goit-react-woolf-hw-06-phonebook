import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  phoneBook: [],
};

const phoneBookSlice = createSlice({
  name: 'phoneBook',
  initialState: INITIAL_STATE,
  reducers: {
    addContact(state, action) {
      state.phoneBook.push(action.payload);
    },
    deleteContact(state, action) {
      state.phoneBook = state.phoneBook.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

export const phoneBookActions = phoneBookSlice.actions;
export default phoneBookSlice;
