import styles from './mode.module.scss';

export default function(props) {
  return (
    <section className={styles.mode}>
      <div className={styles['mode__icon-cont']}>
        {props.icon}
      </div>
      <p className={styles['mode__heading']}>{props.name}</p>
    </section>
  )
}