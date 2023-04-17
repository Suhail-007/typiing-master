import { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';

export default function CorrectPara({ className }) {
  const paraRef = useRef();
  const totalWords = useSelector(state => state.wordsSentence.totalWords);
  const sentenceArr = useSelector(state => state.wordsSentence.sentenceArr);

  useEffect(() => {
    paraRef.current.scrollIntoView(false)
  }, [totalWords])


  return (
    <section className={className}>
      <p ref={paraRef}>
        {
          totalWords.length === 0 && 'Server generated text'
        }
        {
          totalWords.length !==0 && sentenceArr.slice(0, totalWords.length).join(' ')
        }
      </p>
    </section>

  )
}