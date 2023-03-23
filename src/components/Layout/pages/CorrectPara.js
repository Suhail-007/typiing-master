 import { useSelector } from 'react-redux';

 export default function CorrectPara({ className }) {
   const totalWords = useSelector(state => state.wordsSentence.totalWords);
   const sentenceArr = useSelector(state => state.wordsSentence.sentenceArr);

   return (
     <section className={className}>
      <p>
        {totalWords.length === 0 && <span>Server generated paragraph</span>}
        {totalWords.length !==0 && sentenceArr.slice(0, totalWords.length).join(' ')}
      </p>
    </section>

   )
 }