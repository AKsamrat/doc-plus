import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Home from './Pages/Home.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
