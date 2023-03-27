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
      state.message = action.payload.message;
      state.title = action.payload.title;
      state.isOpen = action.payload.isOpen
    },
  }
});

export const modalActions = modalSlice.actions;
export default modalSlice.reducer;