import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom'
import { router } from './routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GlobalStyles } from './styles';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    <GlobalStyles/>
  </React.StrictMode>
);


