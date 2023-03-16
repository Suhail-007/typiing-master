import styles from './Header.module.scss'

export default function() {
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