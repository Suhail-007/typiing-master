import { configureStore } from '@reduxjs/toolkit';

import sentenceReducer from './sentenceSlice';

const store = configureStore({
  reducer: {
    sentence: sentenceReducer,
  }
});

export default store;