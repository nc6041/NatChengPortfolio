import React from 'react';

import ReactDOM from 'react-dom/client';
import Home from './pages/Home'
import About from './pages/About'
import OtherPage from './OtherPage';
import Uline from './Uline';
import Wellness from './Wellness';
import Harvest from './Harvest';
import Benefit from './Benefit';
import './index.css';

import {createBrowserRouter, RouterProvider, Route } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'about',
    element: <About />,
  },
  {
    path: 'other',
    element: <OtherPage />,
  },
  {
    path: 'uline',
    element: <Uline />,
  },
  {
    path: 'wellness',
    element: <Wellness />,
  },
  {
    path: 'puregreen',
    element: <Harvest />,
  },
  {
    path: 'benefit',
    element: <Benefit />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
