import styles from './page.module.scss';

export default function Page(props) {
  return (
    <main className={styles.main}>
      <section className={styles['generated-text']} data-generated-para>
        <p>fflkjrf lfjlk fjeoijf  jfejl fje l;jf ejf oiejf lfjeoij lkjoi jflkjfoi lkdjd fjlke lkfjl;fdlkfjewp fd= fd jf p </p>
      </section>
      <section className={styles['textarea-cont']} data-textarea-cont>
        <textarea type='text' placeholder='Press space to get new word'></textarea>  
      </section>
      <section data-correct-para className={styles['correct-para']}>
        <p>this is correct para from the server.</p>
      </section>
      <section data-typed-para className={styles['typed-para']}>
        This is the typed para typed by the user 
      </section>
    </main>
  )
}