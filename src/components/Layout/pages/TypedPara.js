import { useSelector } from 'react-redux';

export default function TypedPara({ className }) {

  const totalWords = useSelector(state => state.wordsSentence.totalWords);
  const sentenceArr = useSelector(state => state.wordsSentence.sentenceArr);


  const TypedPara = function() {
    return totalWords.map((word, i) => {
      if (word !== sentenceArr[i]) return <span key={i} className='wrong-word'> {word}</span>
      return <span key={i}> {word} </span>
    });
  }

  return (
    <section className={className}>
      {totalWords.length === 0 && <p>User typed paragraph</p>}
    
      {totalWords.length !==0 && <p>{TypedPara()}</p>}
    </section>
  )
}