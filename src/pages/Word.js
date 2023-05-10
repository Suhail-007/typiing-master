import { useRef } from 'react';
import { useSelector } from 'react-redux';
import useWordSentence from '../hooks/use-wordSentence';

import PopUpModal from '../components/UI/Modal/PopUpModal';
import SkeletonPage from '../components/Layout/page/SkeletonPage'
import PageContent from '../components/Layout/page/Page';

export default function Sentence() {
  const { sentenceArr } = useSelector(state => state.wordsSentence);
  const { isOpen, title, message } = useSelector(state => state.modal);
  const currWordRef = useRef();

  const wordSentence = useWordSentence.render(true, currWordRef);

  const onKeyPressHandler = function(e) {
    wordSentence.onKeyPressHandler(e);
  }

  const inputHandler = function(e) {
    if(e.target !== 'Space') return
    wordSentence.inputHandler(e);
    currWordRef.current.scrollIntoView(true, { behavior: "smooth", block: "start" });
  }

  const checkTypedWord = function() {
    wordSentence.checkTypedWord();
  }

  const sentence = function() {
    return wordSentence.sentence()
  }

  return (
    <>
    {isOpen && <PopUpModal title={title} message={message} />}
    {sentenceArr.length === 0 && <SkeletonPage />}
    {sentenceArr.length !== 0 && <PageContent className={'word'} sentence={sentence} checkWord={checkTypedWord} inputHandler={inputHandler} changeWord={onKeyPressHandler} />}
    </>
  )
}