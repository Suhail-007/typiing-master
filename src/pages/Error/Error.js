import { useRouteError } from 'react-router-dom';

import styles from './Error.module.scss';

export default function ErrorPage() {
  const error = useRouteError();

  let title = 'An error occurred';
  let message = 'Something went wrong.'

  if (error.status === 500) {
    message = JSON.parse(error.data).message;
  }

  if (error.status === 404) {
    title = 'Page not found 404';
    message = 'Go back and refresh the page';
  }

  return (
    <main className={styles['main__error']}>
      <h1>{title}</h1>
      
      <section>
        <p>{message}</p>
      </section>
    </main>
  )
}