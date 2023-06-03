import { useEffect, forwardRef, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { wordsSentenceActions, getText } from '../store/wordsSentenceSlice';
import { modalActions } from '../store/modalSlice';


const useWordSentence = forwardRef((isWordTab, ref) => {
  const dispatch = useDispatch();
  const { sentenceArr, wordIndex, inputValue } = useSelector(state => state.wordsSentence);

  const checkTab = useCallback(function (isWordTab) {
    if (isWordTab) dispatch(getText('words'));
    else dispatch(getText('sentence'));
  }, [dispatch]);

  useEffect(() => {
    let interval;

    checkTab(isWordTab);

    //calculate WPM on every min
    interval = setInterval(() => {
      dispatch(wordsSentenceActions.calculateWPM());
    }, 6000 * 10);

    window.addEventListener('offline', e => {
      dispatch(modalActions.setMessage({ title: 'Device is offline', message: "App won't work as expected, it is recommanded to use app with internet on.", isOpen: true }))
    });

    //clear function
    return () => {
      window.removeEventListener('offline', e => { });

      clearInterval(interval);
    }
  }, [dispatch, isWordTab, checkTab]);

  const onKeyPressHandler = function (e) {
    if (e.code !== 'Space') return
    if (!e.target.value.trim().length) return

    e.preventDefault();
    dispatch(wordsSentenceActions.increaseWordIndex(e.target.value));
    dispatch(wordsSentenceActions.calculateAccuracy())
    e.target.value = ''
  }

  const inputHandler = function (e) {
    //fetch sentence if only thirty words remains
    if ((sentenceArr.length - wordIndex) === 30) checkTab(isWordTab);

    dispatch(wordsSentenceActions.getTypedLetters(e.target.value));
  }

  const checkTypedWord = function () {
    const currentWord = sentenceArr[wordIndex];
    //we are looping over the current word in the word array and checking if typed letter is same as current word letter and adding class respectively.
    return currentWord.split('').map((l, i) => {
      let className;

      if (inputValue.length === 0 || inputValue[i] === undefined) className = '';
      else className = `${inputValue[i] === l ? 'correct-word' : 'wrong-word'}`

      return <span key={i} className={className}>{l}</span>
    })
  }

  function sentence() {
    if (isWordTab) return (
      <span ref={ref} key={Date.now()} className='current-word'>{checkTypedWord()}</span>
    )
    else {
      return sentenceArr.map((word, index) => {
        if (index === wordIndex) {
          return (
            <span ref={ref} key={Date.now()} className='current-word'>{checkTypedWord()}</span>
          )
        }
        return ` ${word} `
      })
    }
  }


  return {
    onKeyPressHandler,
    inputHandler,
    checkTypedWord,
    sentence
  }
})

export default useWordSentence;