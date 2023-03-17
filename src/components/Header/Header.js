import { useLocation } from 'react-router-dom';

import styles from './Header.module.scss'
import icons from '../../assets/icons.svg';

export default function() {
  const { pathname } = useLocation();

  const title = (
    <header className={styles['header--home']}>
      <svg>
        <use href={`${icons}#icon-logo`}></use>
      </svg>
    </header>
  );

  if (pathname === '/') return title

  return (
    <header className={styles['header']}>
        <nav>
          <ul className={styles['header__nav-list']}>
            <li>
              Correct words
              <span>50</span>
            </li>
            <li>
              wrong words
              <span>10</span>
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