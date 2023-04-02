import { useSelector } from 'react-redux';
import useWordSentence from '../hooks/use-wordSentence';


import PopUpModal from '../components/UI/Modal/PopUpModal';
import SkeletonPage from '../components/Layout/pages/SkeletonPage';
import PageContent from '../components/Layout/pages/Page';

export default function Sentence() {
  const { sentenceArr } = useSelector(state => state.wordsSentence);
  const { isOpen, title, message } = useSelector(state => state.modal);

  const wordSentence = useWordSentence(false);

  const onKeyPressHandler = function(e) {
    wordSentence.onKeyPressHandler(e);
  }

  const inputHandler = function(e) {
    wordSentence.inputHandler(e);
  }

  const checkTypedWord = function() {
    wordSentence.checkTypedWord();
  }

  const sentence = function(currWordRef) {
    return wordSentence.sentence(currWordRef)
  }

  return (
    <>
    {isOpen && <PopUpModal title={title} message={message} />}
      {sentenceArr.length === 0 && <SkeletonPage />}
      
      {sentenceArr.length !== 0 && <PageContent sentence={sentence} checkWord={checkTypedWord} inputHandler={inputHandler} changeWord={onKeyPressHandler} className={'sentence'} />}
      
    </>
  )
}