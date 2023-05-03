import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
  title: '',
  message: '',
}

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    toggleModal(state) {
      state.isOpen = !state.isOpen;
    },

    setMessage(state, action) {
      const { message, title, isOpen } = action.payload;
      state.message = message;
      state.title = title;
      state.isOpen = isOpen
    },
  }
});

export const modalActions = modalSlice.actions;
export default modalSlice.reducer;