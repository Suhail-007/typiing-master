import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

import "react-loading-skeleton/dist/skeleton.css";
import styles from './page.module.scss';

export default function SkeletonPage() {
  return (
    <main className={styles.main}>
      <section className={styles['generated-text']}>
        <p>
          <SkeletonTheme highlightColor='#999'>
            <Skeleton count={4} />
          </SkeletonTheme>
        </p>
      </section>
      
      <section className={styles['textarea-cont']}>
        <textarea type='text' placeholder='Press space to get new word'></textarea>  
      </section>
      
      <section className={styles['correct-para']}>
        <p>
          <SkeletonTheme baseColor='#A5D5B4' highlightColor='hsla(139, 46%, 74%, 1)'>
            <Skeleton count={4} style={{marginBottom: '5px'}} />
          </SkeletonTheme>
        </p>
      </section>
      
      <section className={styles['typed-para']}>
        <p>
          <SkeletonTheme baseColor='#BBE7FF' highlightColor='#539FC8'>
            <Skeleton count={4} style={{marginBottom: '5px'}} />
          </SkeletonTheme>
        </p>
      </section>
      </main>
  )
}