import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import RootElement from './pages/RootElement';
import Dashboard from './pages/Dashboard';
import Sentence from './pages/Sentence';
import Word from './pages/Word';
import Error from './pages/Error';

import './sass/main.scss';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <RootElement />,
      errorElement: <Error />,
      children: [
        {
          path: '/',
          element: <Dashboard />,
          index: true,
        },
        {
          path: 'sentence',
          element: <Sentence />
        },
        {
          path: 'word',
          element: <Word />,
        }
        ]
    }]
);

function App() {

  return (
    <>
     <RouterProvider router={router} />
    </>
  );
}

export default App;