import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { wordsSentenceActions } from '../../store/wordsSentenceSlice';

import RootHeader from './RootHeader';
import styles from './Header.module.scss'

export default function Header() {
  const { correctWords, incorrectWords, totalWords, wpm , accuracy, charArr} = useSelector(state => state.wordsSentence);

  const { pathname } = useLocation();

  if (pathname === '/') return <RootHeader />

  return (
    <header className={styles['header']}>
        <nav>
          <ul className={styles['header__nav-list']}>
            <li>
              Correct words
              <span>{correctWords.length}</span>
            </li>
            <li>
              wrong words
              <span>{incorrectWords.length}</span>
            </li>
            <li>
              accuracy
              <span>{accuracy}%</span>
            </li>
            <li>
              WPM
              <span>{wpm ? wpm : totalWords.length}</span>
            </li>
          </ul>
        </nav>
    </header>
  )
}