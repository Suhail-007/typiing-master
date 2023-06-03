import styles from './Header.module.scss'
import icons from '../../../assets/icons.svg';

export default function RootHeader() {

  return (
    <header className={styles['header__home']}>
      <div className={styles['header__svg-cont']}>
        <svg>
          <use href={`${icons}#icon-logo`}></use>
        </svg>
      </div>

      <a className={styles['author-link']} target='_blank' rel="noreferrer" href='https://github.com/Suhail-007'>
        <svg>
          <use href={`${icons}#icon-github`}></use>
        </svg>
      </a>
    </header>
  );
}