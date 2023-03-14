import Mode from '../components/Mode/Mode';
import styles from './styles/dashboard.module.scss';

export default function() {
  return (
    <article className={styles.dashboard}>
      <Mode name="Word"/>
      <Mode name="Sentence"/>
    </article>
  )
}