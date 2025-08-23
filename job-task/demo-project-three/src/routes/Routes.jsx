import { createBrowserRouter } from 'react-router-dom';
import Users from '../components/Users';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Users />,
  },
]);

export default router;
