import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialScoreState = {
  generatedText: [],
  correctWords: [],
  wrongWords: [],
  wordIndex: 0,
  letterIndex: 0,
}

const sentenceSlice = createSlice({
  name: 'sentence',
  initialState: initialScoreState,
  reducers: {
    //it will check letter on every key stroke and returns true false accordingly
    checkWord(state, action) {
      const { currLetter } = action.payload;
      const currentWord = state.generatedText[state.wordIndex];

      if (currentWord[letterIndex] === currLetter) {
        return true
      }
      return false
    },

    //before increasing word index check if typed word is correct or not then push into the array respectively  
    increaseWordIndex(state, action) {
      const { currWord } = action.payload;

      if (state.generatedText[state.wordIndex] === currWord) state.correctWords.push(currWord);
      else state.wrongWords.push(currWord);
      state.wordIndex++;
    },

    increaseLetterIndex(state) {
      state.letterIndex++
    },

    decreaseLetterIndex(state) {
      state.letterIndex--
    }
  }
});

const store = configureStore({
  reducer: {
    sentence: sentenceSlice.reducer
  }
});

export const scoreActions = sentenceSlice.actions;
export default store;