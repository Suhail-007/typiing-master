import { Link } from 'react-router-dom';
import styles from './mode.module.scss';

export default function(props) {

  return (
    <section className={styles.mode}>
      <Link className={styles['mode__link']} to={`${props.name.toLowerCase()}`}>
        {props.icon}
      </Link>
      <p className={styles['mode__heading']}>{props.name}</p>
    </section>
  )
}