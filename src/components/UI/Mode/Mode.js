import { Link, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { wordsSentenceActions } from '../../../store/wordsSentenceSlice';

import styles from './mode.module.scss';

export default function Mode(props) {
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const resetValues = function() {
    if (pathname === '/') dispatch(wordsSentenceActions.resetValues());
  }

  return (
    <section className={styles.mode}>
      <Link onClick={resetValues} to={`/${props.name.toLowerCase()}`} className={styles['mode__link']}>
        <svg>
          <use href={props.icon} ></use>
        </svg>
      </Link>
      <p className={styles['mode__heading']}>{props.name}</p>
    </section>
  )
}