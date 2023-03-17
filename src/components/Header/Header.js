import { useLocation } from 'react-router-dom';

import styles from './Header.module.scss'
import logo from '../../assets/logo.svg';

export default function() {
  const { pathname } = useLocation();

  const title = (
    <header className={styles['header']}>
      <img src={logo} alt='typing master' />
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