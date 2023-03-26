import { useRouterError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouterError();

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
    <main>
      <h1>{title}</h1>
      <section>
        <p>{message}</p>
      </section>
    </main>
  )
}