import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

import reportWebVitals from './reportWebVitals';
import './index.scss';
import Myinfo from './pages/Myinfo';
import PassLogin from './pages/PassLogin';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Myinfo />,
  },
  {
    path: "/pass/",
    element: <PassLogin />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
