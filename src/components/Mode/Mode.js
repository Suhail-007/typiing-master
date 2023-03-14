import styles from './mode.module.scss';

export default function(props) {
  return (
    <section className={styles.mode}>
      <p className={styles.name}>{props.name}</p>
    </section>
  )
}