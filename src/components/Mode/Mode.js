import { Link } from 'react-router-dom';
import styles from './mode.module.scss';

export default function(props) {

  return (
    <section className={styles.mode}>
      <Link to={`/${props.name.toLowerCase()}`} className={styles['mode__link']}>
        <svg>
          <use href={props.icon} ></use>
        </svg>
      </Link>
      <p className={styles['mode__heading']}>{props.name}</p>
    </section>
  )
}