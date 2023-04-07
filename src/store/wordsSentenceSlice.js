import { json } from 'react-router-dom';
import { createSlice } from '@reduxjs/toolkit';

const initialScoreState = {
  generatedText: [],
  correctWords: [],
  incorrectWords: [],
  totalWords: [],
  sentenceArr: [],
  inputValue: [],
  wordIndex: 0,
  charArr: [],
  wpm: 0,
  accuracy: 0,
}

const wordsSentence = createSlice({
  name: 'wordsSentence',
  initialState: initialScoreState,
  reducers: {

    resetValues(state) {
      state.generatedText = [];
      state.sentenceArr = [];
      state.correctWords = [];
      state.incorrectWords = [];
      state.totalWords = [];
      state.inputValue = [];
      state.charArr = [];
      state.wpm = 0;
      state.accuracy = 0;
      state.state.wordIndex = 0;
    },

    clearSpanArr(state) {
      state.inputValue = [];
    },

    filterWords(state) {
      state.sentenceArr = state.sentenceArr.filter(word => word.length >= 4);
    },

    getGeneratedText(state, action) {
      const data = action.payload;

      state.generatedText = [state.generatedText, data[0].content] || [];

      //create one single array for text
      state.generatedText = [state.generatedText.reduce((accu, curr) => {
        return accu + ' ' + curr
      }, '').trim()];

      //fill the words arr once the we get the data from the server so we don't do it on every re render/evaluate.
      state.sentenceArr = state.generatedText[0].split(' ');
    },

    //add input value on every key stroke in inputValue arr
    getTypedLetters(state, action) {
      const currLetterArr = action.payload.split('');
      //remove the previous added value to avoid same values clash 
      state.inputValue = [];
      state.inputValue = [...currLetterArr];
    },

    //before increasing word index check if typed word is correct or not then push into the array respectively and also push into totalWords array
    increaseWordIndex(state, action) {
      const inputValue = action.payload;

      if (state.sentenceArr[state.wordIndex] === inputValue) {
        state.correctWords.push(inputValue);
      }
      else {
        state.incorrectWords.push(inputValue);
      }

      //increase the wordIndex whether typed word is correct or wrong and clear the input letters
      //push the inputValue to totalWords arr
      //add the state.inputValue arr to state.charArr
      //empty inputValue arr
      state.totalWords.push(inputValue);
      state.charArr = [...state.charArr, ...state.inputValue];
      state.wordIndex++;
      state.inputValue = []
    },

    calculateWPM(state) {
      const totalCharFilter = state.charArr.length / 5;
      state.wpm = Math.round(totalCharFilter / 1);

      //empty the arr 
      state.charArr = [];
    },

    calculateAccuracy(state) {
      state.accuracy = ((state.correctWords.length / state.totalWords.length) * 100).toFixed(0);
    },
  }
});

export const getText = function(action) {
  return async (dispatch) => {
    try {

      const res = await fetch('https://api.quotable.io/quotes/random?minLength=200');
      const data = await res.json();
      
      if (action === 'words') {
        dispatch(wordsSentence.actions.getGeneratedText(data));
        dispatch(wordsSentence.actions.filterWords())
      }
      
      if (action === 'sentence') dispatch(wordsSentence.actions.getGeneratedText(data));

    } catch (err) {
      throw json({ message: 'could not fetch from server, try again.' })
    }
  }
}

export const wordsSentenceActions = wordsSentence.actions;
export default wordsSentence.reducer;