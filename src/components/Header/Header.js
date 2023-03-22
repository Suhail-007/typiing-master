import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { wordsSentenceActions } from '../../store/wordsSentenceSlice';
import RootHeader from './RootHeader';

import styles from './Header.module.scss'

export default function Header() {
  const { wordsSentence } = useSelector(state => state);
  const { pathname } = useLocation()

  if (pathname === '/') return <RootHeader />

  return (
    <header className={styles['header']}>
        <nav>
          <ul className={styles['header__nav-list']}>
            <li>
              Correct words
              <span>{wordsSentence.correctWords.length}</span>
            </li>
            <li>
              wrong words
              <span>{wordsSentence.incorrectWords.length}</span>
            </li>
            <li>
              accuracy
              <span>90%</span>
            </li>
            <li>
              WPM
              <span>26</span>
            </li>
          </ul>
        </nav>
    </header>
  )
}