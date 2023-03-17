import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import RootElement from './pages/RootElement';
import Dashboard from './pages/dashboard';
import Sentence from './pages/sentence';
import Word from './pages/word';

import './sass/main.scss';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <RootElement />,
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
          element: <Word />
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