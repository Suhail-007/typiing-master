import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { sentenceActions, getText } from '../store/sentenceSlice';

import PageContent from '../components/Layout/Page';

export default function Sentence() {
  const dispatch = useDispatch();
  const sentence = useSelector(state => state.sentence);

  useEffect(() => {
    dispatch(getText());
  }, [dispatch]);

  const onKeyPressHandler = function(e) {
    if (e.code !== 'Space') return
    if (!e.target.value.trim().length) return

    e.preventDefault();
    dispatch(sentenceActions.increaseWordIndex(e.target.value));
    e.target.value = ''
  }

  const inputHandler = function(e) {
    if ((sentence.wordsArr.length - sentence.wordIndex) === 10) dispatch(getText());
    dispatch(sentenceActions.checkWord(e.target.value));
  }

  return (
    <>
    {sentence.generatedText.length === 0 && <p>Loading... </p>}
    {sentence.generatedText.length !== 0 && <PageContent inputHandler={inputHandler} changeWord={onKeyPressHandler} />}
    </>
  )
}