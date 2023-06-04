import { useLocation } from 'react-router-dom';

import CorrectPara from './CorrectPara';
import TypedPara from './TypedPara';

import styles from './page.module.scss';


export default function Page({ changeWord, inputHandler, checkWord, sentence, className }) {
  const { pathname } = useLocation();

  function onInputHandler(e) {
    inputHandler(e);
    checkWord();
  }

 
  const generatedTextClassName = pathname === '/word' ? styles.words : styles.sentence;

  return (
    <main className={`${styles.main} ${className}`}>
      <section className={`${styles['generated-text']} ${generatedTextClassName}`}>
        <p>
          {sentence()}
        </p>
      </section>
      <section className={styles['textarea-cont']}>
        <textarea autoFocus onKeyDown={changeWord} onInput={onInputHandler} type='text' placeholder='Press space to get new word'></textarea>
      </section>

      <div className={styles['typed-correct-para-cont']}>
        <CorrectPara className={styles['correct-para']} />
        <TypedPara className={styles['typed-para']} />
      </div>
    </main >
  )
}