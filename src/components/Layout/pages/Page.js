import { useRef } from 'react';
import CorrectPara from './CorrectPara';
import TypedPara from './TypedPara';

import styles from './page.module.scss';


export default function Page({ changeWord, inputHandler, checkWord, sentence, className }) {

  const currWordRef = useRef();

  function onInputHandler(e) {
    inputHandler(e);
    checkWord();
  }

  function onKeyDownHandler(e) {
    changeWord(e);
    currWordRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <main className={`${styles.main} ${className}`}>
      <section className={styles['generated-text']}>
        <p>
          {sentence(currWordRef)} 
        </p>
      </section>
      <section className={styles['textarea-cont']}>
        <textarea autoFocus onKeyDown={onKeyDownHandler} onInput={onInputHandler} type='text' placeholder='Press space to get new word'></textarea>  
      </section>
      
      <CorrectPara className={styles['correct-para']} />
      
      <TypedPara className={styles['typed-para']} />
    </main>
  )
}