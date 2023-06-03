import styles from './mode.module.scss';

export default function Mode(props) {

  return (
    <section className={styles.mode}>
      <a href={`/${props.name.toLowerCase()}`} className={styles['mode__link']}>
        <svg>
          <use href={props.icon} ></use>
        </svg>
      </a>
      <p className={styles['mode__heading']}>{props.name}</p>
    </section>
  )
}