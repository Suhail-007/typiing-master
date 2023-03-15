import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import './sass/main.scss';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Dashboard />
    }
  ]
);

// <header>
//         <nav>
//           <ul>
//             <li>
//               Correct words
//               50
//             </li>
//             <li>
//               wrong words
//               10
//             </li>
//             <li>
//               accuracy
//               90%
//             </li>
//             <li>
//               WPM
//               26
//             </li>
//           </ul>
//         </nav>
//       </header>

function App() {

  return (
    <>
     <RouterProvider router={router} />
    </>
  );
}

export default App;