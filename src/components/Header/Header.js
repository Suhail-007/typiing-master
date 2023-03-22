import { useDispatch, useSelector } from 'react-redux';
import { sentenceActions } from '../../store/sentenceSlice';

import styles from './Header.module.scss'

export default function Header() {
  const { sentence } = useSelector(state => state);
  
  return (
    <header className={styles['header']}>
        <nav>
          <ul className={styles['header__nav-list']}>
            <li>
              Correct words
              <span>{sentence.correctWords.length}</span>
            </li>
            <li>
              wrong words
              <span>{sentence.incorrectWords.length}</span>
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