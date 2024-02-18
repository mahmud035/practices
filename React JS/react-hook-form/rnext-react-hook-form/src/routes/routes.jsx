import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import DynamicFormFields from '../forms/DynamicFormFields';
import LoginForm from '../forms/LoginForm';
import RegistrationForm from '../forms/RegistrationForm';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/login',
    element: <LoginForm />,
  },
  {
    path: '/register',
    element: <RegistrationForm />,
  },
  {
    path: '/dynamic-form-fields',
    element: <DynamicFormFields />,
  },
]);

export default router;
