import { createBrowserRouter } from 'react-router-dom';
import About from '../components/About';
import Contact from '../components/Contact';
import Github from '../components/Github';
import Home from '../components/Home';
import Main from '../layout/Main';
import ErrorPage from '../pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/home',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/github/:username',
        element: <Github />,
      },
    ],
  },
]);

export default router;
