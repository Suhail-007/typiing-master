import { configureStore } from '@reduxjs/toolkit';

import wordsSentenceReducer from './wordsSentenceSlice';

const store = configureStore({
  reducer: {
    wordsSentence: wordsSentenceReducer,
  }
});

export default store;