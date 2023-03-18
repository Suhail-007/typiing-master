import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialScoreState = {
  generatedText: [],
  correctWords: [],
  wrongWords: [],
  wordIndex: 0,
  letterIndex: 0,
  wordsArr: [],
}

const sentenceSlice = createSlice({
  name: 'sentence',
  initialState: initialScoreState,
  reducers: {

    getGeneratedText(state, action) {
      state.generatedText = action.payload || [];
    },

    //it will check letter on every key stroke and returns true false accordingly
    checkWord(state, action) {
      const { currLetter } = action.payload;
      const currentWord = state.generatedText[state.wordIndex];

      if (currentWord[state.letterIndex] === currLetter) {
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
      const currWordLength = state.generatedText[state.wordIndex].length;

      if (state.letterIndex === currWordLength - 1) {
        state.letterIndex = 0;
        return
      }

      state.letterIndex++
    },

    //don't decrease the letter index if its 0
    decreaseLetterIndex(state) {
      if (state.letterIndex === 0) return state.letterIndex;

      state.letterIndex--
    }
  }
});

export const getText = function() {
  return async (dispatch) => {
    try {
      const res = await fetch('https://api.quotable.io/quotes/random');
      const data = await res.json();
      dispatch(sentenceSlice.actions.getGeneratedText(data[0].content));
    } catch (err) {
      console.log(err);
    }
  }
}

const store = configureStore({
  reducer: {
    sentence: sentenceSlice.reducer
  }
});

export const sentenceActions = sentenceSlice.actions;
export default store;