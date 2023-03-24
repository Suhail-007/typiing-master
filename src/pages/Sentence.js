import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { wordsSentenceActions, getText } from '../store/wordsSentenceSlice';

import SkeletonPage from '../components/Layout/pages/SkeletonPage';
import PageContent from '../components/Layout/pages/Page';

export default function Sentence() {
  const dispatch = useDispatch();
  const { sentenceArr, wordIndex, inputValue } = useSelector(state => state.wordsSentence);

  useEffect(() => {
    let interval;

    dispatch(getText());

    interval = setInterval(() => {
      dispatch(wordsSentenceActions.calculateWPM());
    }, 6000 * 10);

    //clear function
    return () => clearInterval(interval);
  }, [dispatch]);

  const onKeyPressHandler = function(e) {
    
    if (e.code !== 'Space') return
    if (!e.target.value.trim().length) return

    e.preventDefault();
    dispatch(wordsSentenceActions.increaseWordIndex(e.target.value));
    dispatch(wordsSentenceActions.calculateAccuracy())
    e.target.value = ''
  }

  const inputHandler = function(e) {
    if ((sentenceArr.length - wordIndex) === 10) dispatch(getText());
    dispatch(wordsSentenceActions.getTypedLetters(e.target.value));
  }

  const checkTypedWord = function() {
    const currentWord = sentenceArr[wordIndex];
    //we are looping over the current word in the word array and checking if typed letter is same as current word letter and adding class respectively.
    return currentWord.split('').map((l, i) => {
      let className;

      if (inputValue.length === 0) className = ''
      else className = `${inputValue[i] === l ? 'correct-word' : 'wrong-word'}`

      return (
        <span key={i} className={className}>{l}</span>
      )
    })
  }

  const sentence = function(scrollCurrWordIntoView) {
    return sentenceArr.map((word, index) => {
      if (index === wordIndex) {
        return (
          <span ref={scrollCurrWordIntoView} key={'parent'} className='current-word'>{checkTypedWord()}</span>
        )
      }
      return ` ${word} `
    })
  }


  return (
    <>
      {sentenceArr.length === 0 && <SkeletonPage />}
      
      {sentenceArr.length !== 0 && <PageContent sentence={sentence} checkWord={checkTypedWord} inputHandler={inputHandler} changeWord={onKeyPressHandler} className={'sentence'} />}
      
    </>
  )
}