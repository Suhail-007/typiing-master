import { createSlice } from '@reduxjs/toolkit';

const initialScoreState = {
  generatedText: [],
  correctWords: [],
  incorrectWords: [],
  totalWords: [],
  wordsArr: [],
  inputValue: [],
  wordIndex: 0,
}

const sentenceSlice = createSlice({
  name: 'sentence',
  initialState: initialScoreState,
  reducers: {

    clearSpanArr(state) {
      state.inputValue = [];
    },

    getGeneratedText(state, action) {
      const data = action.payload;

      state.generatedText = [state.generatedText, data[0].content] || [];

      //create one single array for text
      state.generatedText = [state.generatedText.reduce((accu, curr) => {
        return accu + ' ' + curr
      }, '').trim()];

      //fill the words arr once the we get the data from the server so we don't do it on every re render/evaluate.
      state.wordsArr = state.generatedText[0].split(' ');
    },

    //it will check letter on every key stroke
    checkWord(state, action) {
      const currLetterArr = action.payload.split('');
      state.inputValue = [];
      state.inputValue = [...currLetterArr];
    },

    //before increasing word index check if typed word is correct or not then push into the array respectively and also push into totalWords array
    increaseWordIndex(state, action) {
      const currWord = action.payload;

      if (state.wordsArr[state.wordIndex] === currWord) {
        state.totalWords.push(currWord);
        state.correctWords.push(currWord);
      }
      else {
        state.totalWords.push(currWord);
        state.incorrectWords.push(currWord);
      }

      //increase the wordIndex whether typed word is correct or wrong and clear the input letters
      state.wordIndex++;
      state.inputValue = []
    },
  }
});

export const getText = function() {
  return async (dispatch) => {
    try {
      const res = await fetch('https://api.quotable.io/quotes/random');
      const data = await res.json();
      dispatch(sentenceSlice.actions.getGeneratedText(data));
    } catch (err) {
      console.log(err);
    }
  }
}

export const sentenceActions = sentenceSlice.actions;
export default sentenceSlice.reducer;