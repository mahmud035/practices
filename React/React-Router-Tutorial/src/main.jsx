import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Contact from './Contact';
import EditContact from './EditContact';
import ErrorPage from './ErrorPage';
import Index from './Index';
import {
  createContactAction,
  deleteContactAction,
  editContactAction,
  toggleFavoriteAction,
} from './actions/contactsActions';
import './index.css';
import { getContactLoader, getContactsLoader } from './loaders/contactsLoader';
import Root from './routes/Root';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: getContactsLoader,
    action: createContactAction,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <Index />,
          },
          {
            path: '/contacts/:contactId',
            element: <Contact />,
            loader: getContactLoader,
            //* Both will work
            // loader: async ({ params }) => {
            //   const contact = await getContact(params.contactId);
            //   return { contact };
            // },
            action: toggleFavoriteAction,
          },
          {
            path: '/contacts/:contactId/edit',
            element: <EditContact />,
            loader: getContactLoader,
            action: editContactAction,
          },
          {
            path: 'contacts/:contactId/destroy',
            action: deleteContactAction,
            errorElement: <div>Oops! There was an error.</div>,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
