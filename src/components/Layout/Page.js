import { sentenceActions } from '../../store/store';
import { useSelector, useDispatch } from 'react-redux'

import styles from './page.module.scss';

export default function Page(props) {
  const { sentence } = useSelector(state => state);

  const { text } = props;

  const textArr = text.length !== 0 ? text.split(' ') : text;
  console.log(textArr);


  const currWord = (
    <span className='current-word'>
      {}
      <span className='wrong-word'>{textArr[sentence.wordIndex]}</span>
    </span>
  );

  return (
    <main className={styles.main}>
      <section className={styles['generated-text']} data-generated-para>
        <p>
        {currWord} {textArr.slice(sentence.wordIndex+1).join(' ')} 
        </p>
      </section>
      <section className={styles['textarea-cont']} data-textarea-cont>
        <textarea type='text' placeholder='Press space to get new word'></textarea>  
      </section>
      <section data-correct-para className={styles['correct-para']}>
        <p>this is correct para from the server.</p>
      </section>
      <section data-typed-para className={styles['typed-para']}>
        This is the typed para typed by the user 
      </section>
    </main>
  )
}