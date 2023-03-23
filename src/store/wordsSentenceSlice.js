import { createSlice } from '@reduxjs/toolkit';

const initialScoreState = {
  generatedText: [],
  correctWords: [],
  incorrectWords: [],
  totalWords: [],
  sentenceArr: [],
  inputValue: [],
  wordIndex: 0,
  wpmArr: [],
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
      state.wpmArr = [];
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

    //it will check letter on every key stroke
    getTypedLetters(state, action) {
      const currLetterArr = action.payload.split('');
      state.inputValue = [];
      state.inputValue = [...currLetterArr];
    },

    //before increasing word index check if typed word is correct or not then push into the array respectively and also push into totalWords array
    increaseWordIndex(state, action) {
      const currWord = action.payload;

      if (state.sentenceArr[state.wordIndex] === currWord) {
        state.correctWords.push(currWord);
      }
      else {
        state.incorrectWords.push(currWord);
      }

      //increase the wordIndex whether typed word is correct or wrong and clear the input letters
      state.totalWords.push(currWord);
      state.wpmArr.push(currWord)
      state.wordIndex++;
      state.inputValue = []
    },

    calculateWPM(state) {
      const totalWordsFilter = state.wp.length / 5;
      state.wpm = totalWordsFilter / 1;

      //empty the arr 
      state.wpmArr = [];
    },

    calculateAccuracy(state) {
      state.accuracy = ((state.correctWords.length / state.totalWords.length) * 100).toFixed(0);
    },
  }
});

export const getText = function(action = 'sentence') {
  return async (dispatch) => {
    try {

      const res = await fetch('https://api.quotable.io/quotes/random?minLength=100');
      const data = await res.json();
      dispatch(wordsSentence.actions.getGeneratedText(data));

      if (action === 'words') {
        dispatch(wordsSentence.actions.filterWords())
      }

    } catch (err) {
      console.log(err);
    }
  }
}

export const wordsSentenceActions = wordsSentence.actions;
export default wordsSentence.reducer;