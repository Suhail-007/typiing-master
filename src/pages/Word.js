import { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { wordsSentenceActions,getText} from '../store/wordsSentenceSlice';

import PageContent from '../components/Layout/Page';

export default function Sentence() {
  const dispatch = useDispatch();
  const { sentenceArr, wordIndex, inputValue } = useSelector(state => state.wordsSentence);
  const scrollCurrWordIntoView = useRef();

  useEffect(() => {
    dispatch(getText('words'));
  }, [dispatch]);

  const onKeyPressHandler = function(e) {
    if (e.code !== 'Space') return
    if (!e.target.value.trim().length) return

    e.preventDefault();
    dispatch(wordsSentenceActions.increaseWordIndex(e.target.value));
    e.target.value = ''
  }

  const inputHandler = function(e) {
    //fetch sentence if only ten words remains
    if ((sentenceArr.length - wordIndex) === 10) dispatch(getText('words'));
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
    return (
      <span ref={scrollCurrWordIntoView} key={'parent'} className='current-word'>{checkTypedWord()}</span>
    )
  }


  return (
    <>
    {sentenceArr.length === 0 && <p>Loading... </p>}
    {sentenceArr.length !== 0 && <PageContent className={'word'} sentence={sentence} checkWord={checkTypedWord} inputHandler={inputHandler} changeWord={onKeyPressHandler} />}
    </>
  )
}