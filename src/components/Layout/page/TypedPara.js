import { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';

export default function TypedPara({ className }) {
  const paraRef = useRef()
  const totalWords = useSelector(state => state.wordsSentence.totalWords);
  const sentenceArr = useSelector(state => state.wordsSentence.sentenceArr);

  useEffect(() => {
    paraRef.current.scrollIntoView(false)
  }, [totalWords])

  const checkTypeWord = function() {
    return totalWords.map((word, i) => {
      if (word !== sentenceArr[i]) return <span key={i} className='wrong-word'> {word}</span>
      return <span key={i}> {word} </span>
    });
  };

  return (
    <section className={className}>
      <p ref={paraRef}>
        {totalWords.length === 0 && 'User typed paragraph'}
      
        {totalWords.length !==0 && checkTypeWord()}
      </p>
    </section>
  )
}