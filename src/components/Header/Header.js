import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { sentenceActions } from '../../store/sentenceSlice';

import styles from './Header.module.scss'
import icons from '../../assets/icons.svg';

export default function Header() {
  const { sentence } = useSelector(state => state);
  const { pathname } = useLocation();

  const title = (
    <header className={styles['header--home']}>
      <svg className={styles.logo}>
        <use href={`${icons}#icon-logo`}></use>
      </svg>
      
      <a className={styles['author-link']} target='_blank' rel="noreferrer" href='https://github.com/Suhail-007'>
        <svg>
          <use href={`${icons}#icon-github`}></use>
        </svg>
      </a>
    </header>
  );

  if (pathname === '/') return title

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