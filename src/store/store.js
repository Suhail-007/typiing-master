import { configureStore } from '@reduxjs/toolkit';

import wordsSentence from './wordsSentenceSlice';
import modalSlice from './modalSlice';


const store = configureStore({
  reducer: {
    wordsSentence: wordsSentence,
    modal: modalSlice,
  }
});

export default store;