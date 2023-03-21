import { useRef } from 'react';

import { sentenceActions } from '../../store/sentenceSlice';
import { useSelector, useDispatch } from 'react-redux'

import styles from './page.module.scss';

export default function Page({ changeWord, inputHandler }) {
  const scrollViewCurrWord = useRef();
  
  const dispatch = useDispatch();
  const { totalWords, wordsArr, wordIndex, inputValue, wordsArrUnsliced } = useSelector(state => state.sentence);

  const currentWord = wordsArr[wordIndex];
 
 //we are looping over the current word in the word array and checking if typed letter is same as current word letter and adding class respectively.
  const spanElemsArr = currentWord.split('').map((l, i) => {
    let className;
    
    if (inputValue.length === 0) className = ''
    else className = `${inputValue[i] === l ? 'correct-word' : 'wrong-word'}`

    return (
      <span key={i} className={className}>{l}</span>
    )
  })

  const TypedPara = function() {
    return totalWords.map((word, i) => {
      if (word !== wordsArr[i]) return <span key={i} className='wrong-word'> {word}</span>
      return <span key={i}> {word} </span>
    });
  }

  function onInputHandler(e) {
    inputHandler(e)
  }

  function onKeyDownHandler(e) {
    changeWord(e);
    scrollViewCurrWord.current.scrollIntoView({ behavior: "smooth", inline: "nearest", block: "start"});
  }

  return (
    <main className={styles.main}>
      <section className={styles['generated-text']} data-generated-para>
        <p>
          {
            wordsArr.map((word, index) => {
              if(index === wordIndex) {
                return (
                  <span ref={scrollViewCurrWord} key={'parent'} className='current-word'>{spanElemsArr}</span>
                )
              }
              return ` ${word} `
            })
            
            
          } 
        </p>
      </section>
      <section className={styles['textarea-cont']} data-textarea-cont>
        <textarea onKeyDown={onKeyDownHandler} onInput={onInputHandler} type='text' placeholder='Press space to get new word'></textarea>  
      </section>
      <section data-correct-para className={styles['correct-para']}>
        <p>
        {totalWords.length === 0 && <span>Server generated paragraph</span>}
        {totalWords.length !==0 && wordsArr.slice(0, totalWords.length).join(' ')}
        </p>
      </section>
      <section data-typed-para className={styles['typed-para']}>
        {totalWords.length === 0 && <span>User typed paragraph</span>}
      
        {totalWords.length !==0 && TypedPara()}
      </section>
    </main>
  )
}